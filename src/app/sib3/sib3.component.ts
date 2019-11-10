import { Component, OnInit } from '@angular/core';
import { Mondrian } from '../mondrian';

@Component({
  selector: 'app-sib3',
  templateUrl: './sib3.component.html',
  styleUrls: ['./sib3.component.sass']
})
export class Sib3Component implements OnInit {

  constructor() { }
  mdrn: Mondrian;
  msg: string;
  ngOnInit() {
    this.mdrn = new Mondrian('d');
    this.mdrn.onMsg('topic2', msg => {
      this.msg = msg;
    });
  }
  clicked() {
    this.mdrn.sendMsg('topic1', 'hello from sib3');
  }

}
