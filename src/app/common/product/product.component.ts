import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Products } from '../../model/Productmodel';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { AddproductComponent } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule,
    MatPaginatorModule, MatButtonModule, CommonModule, MatDialogModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'status', 'action'];
  dataSource!: MatTableDataSource<Products>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: ProductService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.LoadProducts();
  }

  productlist: Products[] = [];

  LoadProducts() {
    this.service.GetAll().subscribe(item => {
      this.productlist = item;
      this.dataSource = new MatTableDataSource(this.productlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  CreateProduct() {
    this.OpenPopup(0, 'Create Product');
  }

  OpenPopup(id: number, title: string) {
    this.dialog.open(AddproductComponent, {
      width: '40%',
      enterAnimationDuration: '600ms',
      exitAnimationDuration: '600ms',
      data: {
        id: id,
        title: title
      }
    }).afterClosed().subscribe(item => {
      this.LoadProducts();
    });
  }

  EditProduct(id: number) {
    this.OpenPopup(id, 'Edit Product');
  }

  DeleteProduct(id: number) {
    if (confirm('Do you want to delete?')){
      this.service.RemoveProduct(id).subscribe(item =>{
        alert('Deleted successfully');
        this.LoadProducts();
      });
    }
  }
}
