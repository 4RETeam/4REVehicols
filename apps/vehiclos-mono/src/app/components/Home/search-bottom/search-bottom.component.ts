import {Component, OnInit} from '@angular/core';
import {ParseIntPipe} from "@nestjs/common";
import {log} from "util";

@Component({
  selector: 'vehiclos-search-bottom',
  templateUrl: './search-bottom.component.html',
  styleUrls: ['./search-bottom.component.scss']
})
export class SearchBottomComponent implements OnInit {
  leftClasses = [];
  rightClasses = [];
  leftValue = 0;
  rightValue = 100;
  leftPercent = '';
  rightPercent = '';
  rangeLeftPercent = '';
  rangeRightPercent = '';

  constructor() {
  }

  setLeftValue(e: EventTarget = null): void {
    const newValue = e !== null ? e as HTMLInputElement : null;

    const min = 0;
    const max = 100;

    const res  = newValue !== null ? Math.min(parseInt(newValue.value, 10), this.rightValue - 1).toString(): '0';
    this.leftValue = parseInt(res, 10);

    const percent = ((this.leftValue - min) / (max - min)) * 100;

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

    const min = 0;
    const max = 100;

    const res  = newValue !== null ? Math.max(parseInt(newValue.value, 10), this.leftValue + 1).toString() : '100';
    this.rightValue = parseInt(res, 10);


    const percent = ((this.rightValue - min) / (max - min)) * 100;

    this.rightPercent = (100 - percent) + "%";
    this.rangeRightPercent = (100 - percent) + "%";
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

  ngOnInit(): void {
  }

}

enum ThumbType {
  LEFT,
  RIGHT
}
