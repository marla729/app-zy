import { Component, OnInit } from '@angular/core';
import { ZyService } from '../zy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public startDraw: boolean = false;
  result1: number =1;
  result2: number = 1;
  result3: number = 1;
  public showResult: boolean = false;
  origin: string;
  explanation: string;
  constructor(public zyService: ZyService) { }

  ngOnInit() {
    this.zyService.submitObservable.subscribe(res => {
      if (res) {
        this.origin = 'text';
        this.explanation = 'test';
        this.showResult = true;
      }
    })
  }

  public myFunction() {
    if (this.showResult) {
      this.zyService.submit(false);
      this.showResult = false;
    }
    this.startDraw = true;
    this.result1  = Math.floor(Math.random() * Math.floor(2));
    this.result2  = Math.floor(Math.random() * Math.floor(2));
    this.result3  = Math.floor(Math.random() * Math.floor(2));
    setTimeout(() => {
      this.startDraw = false;
    }, 500);
    console.log(this.result1, this.result2, this.result3);

  }


}
