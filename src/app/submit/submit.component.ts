import { Component, OnInit } from '@angular/core';
import { ZyService } from '../zy.service';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  constructor(public zyService: ZyService) { }

  ngOnInit() {
  }
  submit() {
    console.log('submit');
    this.zyService.submit(true);
  }
}
