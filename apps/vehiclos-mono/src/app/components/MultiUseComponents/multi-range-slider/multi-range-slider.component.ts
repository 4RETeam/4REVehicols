import {Component, Input} from '@angular/core';

@Component({
  selector: 'vehiclos-multi-range-slider',
  templateUrl: './multi-range-slider.component.html',
  styleUrls: ['./multi-range-slider.component.scss']
})
export class MultiRangeSliderComponent {

  @Input() public min: number;
  @Input() public max: number;
  @Input() public name:string;
  leftClasses = [];
  rightClasses = [];
  leftValue = 20;
  rightValue = 80;
  leftPercent = '';
  rightPercent = '';
  rangeLeftPercent = '';
  rangeRightPercent = '';

  constructor() {
  }

  setLeftValue(e: EventTarget = null): void {
    const newValue = e !== null ? e as HTMLInputElement : null;

    const res  = newValue !== null ? Math.min(parseInt(newValue.value, 10), this.rightValue - 1).toString(): this.min.toString();
    this.leftValue = parseInt(res, 10);

    const percent = ((this.leftValue - this.min) / (this.max - this.min)) * 100;

    this.leftPercent = percent + "%";
    this.rangeLeftPercent = percent + "%";
  }

  calculateRangeStyle(): string {
    return 'left:' + this.rangeLeftPercent + '; right:' + this.rangeRightPercent;
  }

  calculateThumbStyle(thumb: number): string {
    return thumb === ThumbType.LEFT ? 'left: ' + this.leftPercent : 'right: ' + this.rightPercent;
  }


  setRightValue(e: EventTarget = null): void {
    const newValue = e !== null ? e as HTMLInputElement : null;

    const res  = newValue !== null ? Math.max(parseInt(newValue.value, 10), this.leftValue + 1).toString() : this.max.toString();

    this.rightValue = parseInt(res, 10);


    const percent = ((this.rightValue - this.min) / (this.max - this.min)) * 100;

    this.rightPercent = (this.max - percent) + "%";
    this.rangeRightPercent = (this.max - percent) + "%";
  }

  calculateRightClasses(): string {
    return this.rightClasses.join(' ');
  }

  calculateLeftClasses(): string {
    return this.leftClasses.join(' ');
  }

  leftDown() {
    if (!this.leftClasses.includes('active')) {
      this.leftClasses.push('active');
    }
  }

  leftUp() {
    if (this.leftClasses.includes('active')) {
      this.leftClasses = this.leftClasses.filter(e => e !== 'active');
    }
  }

  leftHover() {
    if (!this.leftClasses.includes('hover')) {
      this.leftClasses.push('hover');
    }
  }

  leftUnHover() {
    if (this.leftClasses.includes('hover')) {
      this.leftClasses = this.leftClasses.filter(e => e !== 'hover');
    }
  }

  rightDown() {
    if (!this.rightClasses.includes('active')) {
      this.rightClasses.push('active');
    }
  }

  rightUp() {
    if (this.rightClasses.includes('active')) {
      this.rightClasses = this.rightClasses.filter(e => e !== 'active');
    }
  }

  rightHover() {
    if (!this.rightClasses.includes('hover')) {
      this.rightClasses.push('hover');
    }

  }

  rightUnHover() {
    if (this.rightClasses.includes('hover')) {
      this.rightClasses = this.rightClasses.filter(e => e !== 'hover');
    }

  }
}

enum ThumbType {
  LEFT,
  RIGHT
}

