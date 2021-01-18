import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'vehiclos-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() visibleSwitch = new EventEmitter<boolean>();
  @Input() public isVisible: boolean;
  style :string;
  shadeStyle: string;

  constructor() { }

  ngOnInit(): void {
    this.style = 'right: calc(125% - 187.5px);';
    this.shadeStyle = 'pointer-events: none;   background-color: #00000000;'
  }

  calculateStyle() {
    return this.isVisible ? 'right: 0' : 'right: calc(-100% - 150px);';
  }

  calculateShadeStyle(): string {
    return this.isVisible ? 'pointer-events: all; background-color: #00000060;' : '  pointer-events: none;   background-color: #00000000;';
  }

  switch() {
    this.visibleSwitch.emit(false);
  }
}
