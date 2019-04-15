import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-random-result',
  templateUrl: './random-result.component.html',
  styleUrls: ['./random-result.component.scss']
})
export class RandomResultComponent implements OnInit {
  @Input('startDraw') startDraw: boolean;
  @Input('result1') result1: number;
  @Input('result2') result2: number;
  @Input('result3') result3: number;
  public spining: boolean = false;
  constructor() { }

  ngOnInit() {
   
  }

}
