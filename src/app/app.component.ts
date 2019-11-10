import { Component, OnInit } from '@angular/core';
import { Mondrian } from './mondrian';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mdrn: any;
  msg: any;
  ngOnInit() {
    this.mdrn = new Mondrian('b');
    this.mdrn.onMsg('topic2', msg => {
      this.msg = msg;
    });
  }

}
