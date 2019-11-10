import { Component, OnInit } from '@angular/core';
import { Mondrian } from '../mondrian';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.sass']
})
export class SiblingComponent implements OnInit {

  constructor() { }
  mdrn: any;
  msg: string;
  ngOnInit() {
    this.mdrn = new Mondrian('a');
    this.mdrn.onMsg('topic1', msg => {
      this.msg = msg;
    });
  }
  clicked() {
    this.mdrn.sendMsg('topic2','hello from sib1');
  }
}
