import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehiclos-sell-conf',
  templateUrl: './sell-conf.component.html',
  styleUrls: ['./sell-conf.component.scss']
})
export class SellConfComponent implements OnInit {

  a = [{route: 'suka'}, {route: 'blyat'}];
  constructor() { }

  ngOnInit(): void {
  }

}
