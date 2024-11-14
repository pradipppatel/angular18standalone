import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';
import { ReversePipe } from './custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, HomeComponent, CommonModule, ReversePipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
