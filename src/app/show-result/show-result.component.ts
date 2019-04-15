import { Component, OnInit, Input } from '@angular/core';
import { ZyService } from '../zy.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.scss']
})
export class ShowResultComponent implements OnInit {
  @Input('origin') origin: string;
  @Input('explanation') explanation: string;
  constructor() { }

  ngOnInit() {

  }

}
