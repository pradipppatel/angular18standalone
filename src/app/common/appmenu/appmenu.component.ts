import { Component, DoCheck } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appmenu',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css'
})
export class AppmenuComponent implements DoCheck {

  showmenu = false;
  constructor(private router: Router) {

  }

  ngDoCheck(): void {
    let currentUrl = this.router.url;
    
    if (currentUrl == '/login' || currentUrl == '/register'){
      this.showmenu = false;
    }
    else{
      this.showmenu = true;
    }
  }

}
