import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'vehiclos-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() visibleSwitch = new EventEmitter<boolean>();

  @Input() public isVisible: boolean;
  style :string;
  shadeStyle: string;

  calculateShadeStyle(): string {
    return this.isVisible ? 'pointer-events: all; background-color: #00000060;' : '  pointer-events: none;   background-color: #00000000;';
  }

  switch(): void {
    this.visibleSwitch.emit(false);
  }

  constructor() {
  }

  calculateStyle(): string {
    return this.isVisible ? 'left: calc(50% - 187.5px);' : 'left: calc(125% - 187.5px);';
  }

  ngOnInit(): void {
    this.style = 'left: calc(125% - 187.5px);';
    this.shadeStyle = 'pointer-events: none;   background-color: #00000000;'
  }

}
