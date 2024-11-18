import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule,RouterLink, FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  userinput = '';

  canNavigate(){
    if (this.userinput !== ''){
      if (confirm('If you navigating, your data will lost. Do you want to continue?')){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return true;
    }
  }
}
