import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css'
})
export class LearnComponent implements OnInit {

  ticketInfo = [
    { 'id': 1, 'name': 'Pradip', color: 'orange' },
    { 'id': 2, 'name': 'P', color: 'blue' },
    { 'id': 3, 'name': 'Patel', color: 'green' }
  ]

  ticketInfo$ = of(this.ticketInfo);

  observable = new Observable((subscriber) => {
    subscriber.next('Order placed');
    setTimeout(() => {
      subscriber.next('Order processed');  
    }, 2000);
    setTimeout(() => {
      subscriber.next('Order dispatched');
    }, 4000);
    setTimeout(() => {
      subscriber.next('Order delivered');
    }, 6000);
    
    // subscriber.complete();
  });

  ngOnInit(): void {
    // this.observable.subscribe({
    //   next(x) { console.log(x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });

    // this.ticketinfo$.subscribe(item => {
    //   console.log(item);
    // });
  }
}
