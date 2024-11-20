import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Products } from '../../model/Productmodel';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatCardModule, MatButtonModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  builder = new FormBuilder();
  constructor(private service: ProductService, private ref: MatDialogRef<AddproductComponent>) {

  }

  productform = this.builder.group({
    id: this.builder.control({ value: 0, disabled: true }),
    name: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required),
    price: this.builder.control(1, Validators.required),
    status: this.builder.control(true)
  });

  ProceedSave() {
    if (this.productform.valid) {
      let _data: Products = {
        id: 0,
        name: this.productform.value.name as string,
        description: this.productform.value.description as string,
        price: this.productform.value.price as number,
        status: this.productform.value.status as boolean
      }

      this.service.CreateProduct(_data).subscribe(item => {
        alert('New product created successfully.');
        this.productform.reset();
        this.ref.close();
      })
    }
  }

  ClosePopup() {
    this.productform.reset();
    this.ref.close();
  }
}
