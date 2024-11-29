import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../service/master.service';
import { Customers } from '../model/Mastermodel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule, ReversePipe, FormsModule],
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

  isDisabled = false;
  isShow = true;
  ticketInfo = [
    { 'id': 1, 'name': 'Pradip', color: 'orange' },
    { 'id': 2, 'name': 'P', color: 'blue' },
    { 'id': 3, 'name': 'Patel', color: 'green' }
  ]

  _view = 'about';

  ChangeTitle() {
    this.title = 'Angular 18 For Tutorial';
  }

  GetAllCustomer() {
    this.service.GetAllCustomer().subscribe(item => {
      this._custdata = item;
      console.log(this._custdata);
    });
  }

}
