import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehiclos-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  activeItem = 'car';
  activeElem = null as HTMLDivElement;

  constructor() { }

  getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

  onResize(we:any) {
    // this.activeElem.style.left = 25+'px';
    this.activeElem.style.left = this.getOffset(document.getElementById(this.activeItem)).left - 80 + 'px';
    if (window.innerWidth > 1162){
      this.activeElem.style.top = this.getOffset(document.getElementById(this.activeItem)).top - 250 + 'px';
    }
    else if ( window.innerWidth < 1100 && window.innerWidth > 600) {
      this.activeElem.style.top = this.getOffset(document.getElementById(this.activeItem)).top - 120 + 'px';
    } 
    else if (window.innerWidth < 600) {
      this.activeElem.style.top = this.getOffset(document.getElementById(this.activeItem)).top - 190 + 'px';
      this.activeElem.style.left = this.getOffset(document.getElementById(this.activeItem)).left - 60 + 'px';
    } 
  }

  moveActive(me:any, e: EventTarget) {
    this.activeElem = document.getElementById('active-thing') as HTMLDivElement;
    let newX = me.offsetX > 0 ? me.layerX - me.offsetX   : me.layerX ;
    let newY = me.offsetY > 0 ? me.layerY - me.offsetY   : me.layerY ;
    const newValue = e !== null ? e as HTMLDivElement : null;
    
    if ( window.innerWidth > 600) {
      newY -= 20;
      newX -= 40;
    }


    if ( window.innerWidth < 1162) {
      this.activeElem.style.top = newY+'px';
    } else {
      // newY -= 10;
      this.activeElem.style.top = newY+'px';
    }

    console.log(me);

    this.activeElem.style.left = newX+'px';
    this.activeItem = newValue.id !== null ? newValue.id : 'car';

  }

  ngOnInit(): void {
  }

}
