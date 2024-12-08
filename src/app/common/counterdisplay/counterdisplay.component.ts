import { Component, computed, effect, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit {

  displayvalue= 0;
  totalplayers = computed(()=>this.service.players().length);
  
  constructor(public service: MasterService){
    effect(()=>{
      this.displayvalue = this.service.countervalue();
    })
  }
  ngOnInit(): void {
    //this.displayvalue = this.service.countervalue();
  }
}
