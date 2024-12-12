import { Component, computed, effect, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { CommonModule } from '@angular/common';
import { toObservable,toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit {

  displayvalue= 0;
  totalplayers = computed(()=>this.service.players().length);
  _totalplayers = toObservable(this.totalplayers);
  _signalcount = toSignal(this._totalplayers);

  constructor(public service: MasterService){
    effect(()=>{
      this.displayvalue = this.service.countervalue();
    })
  }
  ngOnInit(): void {
    //this.displayvalue = this.service.countervalue();
  }
}
