import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vehiclos-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() public options: any;
  @Input() public controlName: string;
  constructor() { }

  ngOnInit(): void {

  }

}
