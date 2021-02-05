import { Component, Input, OnInit } from '@angular/core';
import { PopupType } from '../../../_classes/_enums/PopupType.enum'
@Component({
  selector: 'vehiclos-popup-alert',
  templateUrl: './popup-alert.component.html',
  styleUrls: ['./popup-alert.component.scss']
})
export class PopupAlertComponent implements OnInit {

  @Input() public text: string;
  @Input() public type: PopupType;

  constructor() { }

  ngOnInit(): void {
  }

  calculateClass(): string{
    return 'popup-wraper ' + this.type;
  }

}
