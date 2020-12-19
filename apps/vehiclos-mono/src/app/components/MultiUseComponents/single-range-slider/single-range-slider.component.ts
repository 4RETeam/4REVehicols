import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vehiclos-single-range-slider',
  templateUrl: './single-range-slider.component.html',
  styleUrls: ['./single-range-slider.component.scss']
})
export class SingleRangeSliderComponent implements OnInit {
  @Input() public max: number;
  simpleValue= 50;
  simplePercent= '50';

  setSimpleValue(e: EventTarget = null): void {
    const newValue = e !== null ? e as HTMLInputElement : null;

    this.simpleValue = parseInt(newValue.value, 10);

    const percent = (this.max -this.simpleValue-2);

    this.simplePercent = percent + '%';
  }

  calculateSimpleStyle():string {
    return 'right: ' + this.simplePercent+"; ";
  }
  calculateTextStyle():string {
    return 'left: ' + (this.simpleValue-10).toString()+'%'+";";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
