import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, concat, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { delay, every, find, first, last, take, takeLast } from 'rxjs/operators';

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
  data$ = of(1, 2, 3, 4, 5);
  data1$ = of(11, 12, 13, 14, 15).pipe(delay(2000));
  data2$ = of(21, 22, 23, 24, 25);
  subject$ = new Subject();
  behaviorSubject$ = new BehaviorSubject(1);
  replySubject$ = new ReplaySubject();
  asyncSubject$ = new AsyncSubject();

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

    // // use of pipe and map
    // this.data$.pipe(map((x) => x * 2)).subscribe((x) => console.log(x));

    // // use of pipe and filter
    // this.data$.pipe(filter((x) => x > 2)).subscribe((x) => console.log(x));

    // // // use of merge
    // merge(this.data$, this.data1$, this.data2$).subscribe((x) => console.log(x));

    // // use of merge
    // merge(this.data1$, this.data2$).subscribe((x) => console.log(x));

    // // use of concat
    // concat(this.data1$, this.data2$).subscribe((x) => console.log(x));

    // // use of first
    // concat(this.data1$, this.data2$).pipe(first()).subscribe((x) => console.log(x));

    // // use of last
    // concat(this.data1$, this.data2$).pipe(last()).subscribe((x) => console.log(x));

    // // use of take
    // concat(this.data1$, this.data2$).pipe(take(4)).subscribe((x) => console.log(x));

    // // use of find
    // concat(this.data1$, this.data2$).pipe(find(x => x > 4)).subscribe((x) => console.log(x));

    // // use of every
    // concat(this.data1$, this.data2$).pipe(every(x => x > 0)).subscribe((x) => console.log(x));


    // // use of subject
    /*
    this.subject$.subscribe(item => {
      console.log('Observer 1 : ' + item)
    });

    this.subject$.next(1);
    this.subject$.next(2);

    this.subject$.subscribe(item => {
      console.log('Observer 2 : ' + item)
    });

    this.subject$.next(3);
    */

    // // use of behaviorsubject
    /*
    this.behaviorSubject$.subscribe(item => {
      console.log('Observer 1 : ' + item)
    });

    this.behaviorSubject$.next(11);
    this.behaviorSubject$.next(12);

    this.behaviorSubject$.subscribe(item => {
      console.log('Observer 2 : ' + item)
    });

    this.behaviorSubject$.next(13);
    */

    // use of replySubject
    /*
    this.replySubject$.subscribe(item => {
      console.log('Observer 1 : ' + item)
    });

    this.replySubject$.next(21);
    this.replySubject$.next(22);

    this.replySubject$.subscribe(item => {
      console.log('Observer 2 : ' + item)
    });

    this.replySubject$.next(23);
    */

    // use of asyncSubject
    this.asyncSubject$.next(31);
    this.asyncSubject$.next(32);

    this.asyncSubject$.subscribe(item => {
      console.log('Observer 1 : ' + item)
    });

    this.asyncSubject$.next(33);
    this.asyncSubject$.complete();

    this.asyncSubject$.subscribe(item => {
      console.log('Observer 2 : ' + item)
    });

    this.asyncSubject$.next(34);

  }
}
