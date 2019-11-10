import { Component, OnInit } from '@angular/core';
import { Mondrian } from '../mondrian';

@Component({
  selector: 'app-sib2',
  templateUrl: './sib2.component.html',
  styleUrls: ['./sib2.component.sass']
})
export class Sib2Component implements OnInit {

  constructor() { }
  mdrn: Mondrian;
  msg: string;
  ngOnInit() {
    this.mdrn = new Mondrian('c');
    this.mdrn.onMsg('topic1', msg => {
      this.msg = msg;
    });
  }


}
