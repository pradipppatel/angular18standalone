import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../service/master.service';
import { Customers } from '../model/MasterModel';
import { ChildComponent } from "../common/child/child.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule, ReversePipe, FormsModule, ChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private service: MasterService) {
    this.GetAllCustomer();
  }

  _custdata!: Customers[];
  _class = 'active';
  title = 'Angular 18 Tutorial';
  subtitle = 'Angular for bigginers';
  todaydate = new Date();
  salary = 1000;
  obj = { 'name': 'pradip' };
  _obj = { 'name': 'pradip' };
  firstName = '';
  lastName = '';
  isDisabled = false;
  isShow = true;
  ticketInfo = [
    { 'id': 1, 'name': 'Pradip', color: 'orange' },
    { 'id': 2, 'name': 'P', color: 'blue' },
    { 'id': 3, 'name': 'Patel', color: 'green' }
  ]

  _view = 'about';

  @ViewChild(ChildComponent) _child! : ChildComponent;

  ChangeTitle() {
    this.title = 'Angular 18 For Tutorial';
  }

  updatetitle(event:any){
    this.title = event.target.value;
  }

  updatenewtitle(title:string){
    this.title = title;
  }

  addfruit(fruit:string){
    this._child.updatefruits(fruit);
  }

  GetAllCustomer() {
    this.service.GetAllCustomer().subscribe(item => {
      this._custdata = item;
      console.log(this._custdata);
    });
  }

}
