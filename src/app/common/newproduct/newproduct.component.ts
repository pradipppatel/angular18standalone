import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Products } from '../../model/Productmodel';
import { ProductService } from '../../service/product.service';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../_store/Product.Action';
import { getProductList } from '../../_store/Product.Selector';

@Component({
  selector: 'app-newproduct',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule,
    MatPaginatorModule, MatButtonModule, CommonModule, MatDialogModule],
  templateUrl: './newproduct.component.html',
  styleUrl: './newproduct.component.css'
})
export class NewproductComponent {
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'status', 'action'];
  dataSource!: MatTableDataSource<Products>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private store: Store) {

  }

  ngOnInit(): void {
    this.LoadProducts();
  }

  productlist: Products[] = [];

  LoadProducts() {
    // this.service.GetAll().subscribe(item => {
    //   this.productlist = item;
    //   this.dataSource = new MatTableDataSource(this.productlist);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // })

    this.store.dispatch(loadProducts());
    this.store.select(getProductList).subscribe(item => {
      this.productlist = item;
      this.dataSource = new MatTableDataSource(this.productlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  CreateProduct() {
    this.OpenPopup(0, 'Create Product');
  }

  OpenPopup(id: number, title: string) {
    // this.dialog.open(AddproductComponent, {
    //   width: '40%',
    //   enterAnimationDuration: '600ms',
    //   exitAnimationDuration: '600ms',
    //   data: {
    //     id: id,
    //     title: title
    //   }
    // }).afterClosed().subscribe(item => {
    //   this.LoadProducts();
    // });
  }

  EditProduct(id: number) {
    // this.OpenPopup(id, 'Edit Product');
  }

  DeleteProduct(id: number) {
    // if (confirm('Do you want to delete?')) {
    //   this.service.RemoveProduct(id).subscribe(item => {
    //     alert('Deleted successfully');
    //     this.LoadProducts();
    //   });
    // }
  }
}
