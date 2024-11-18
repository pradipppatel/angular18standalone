import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule, ReversePipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  _class = 'active';
  title = 'Angular 18 Tutorial';
  subtitle = 'Angular for bigginers';
  todaydate = new Date();
  salary = 1000;
  obj = {'name':'pradip'};

  isDisabled = false;

  ChangeTitle(){
    this.title = 'Angular 18 For Tutorial';
  }

}
