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
    return this.isVisible ? 'right: 0' : 'right: calc(-100% - 150px);';
  }

  ngOnInit(): void {
    this.style = 'right: calc(125% - 187.5px);';
    this.shadeStyle = 'pointer-events: none;   background-color: #00000000;'
  }

}
