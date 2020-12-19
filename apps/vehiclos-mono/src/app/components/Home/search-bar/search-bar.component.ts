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

  moveActive(me:any, e: EventTarget) {
    this.activeElem = document.getElementById('active-thing') as HTMLDivElement;
    const newX = me.offsetX > 0 ? me.layerX - me.offsetX - 40  : me.layerX - 40;
    const newValue = e !== null ? e as HTMLDivElement : null;
    console.log(me);

    this.activeElem.style.left = newX+'px';
    this.activeItem = newValue.id !== null ? newValue.id : 'car';

  }

  ngOnInit(): void {
  }

}
