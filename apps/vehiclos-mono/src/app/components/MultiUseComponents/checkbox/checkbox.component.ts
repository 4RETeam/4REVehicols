import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vehiclos-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() public checkboxes: any;
  constructor() { }

  ngOnInit(): void {
  }

}
