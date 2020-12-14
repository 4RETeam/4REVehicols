import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehiclos-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  newClasses= ['active'];
  usedClasses = [];
  constructor() { }
  changeActive(e: EventTarget, type: number) {
    if(type === VehicolType.NEW) {
      this.newClasses =['active'];
      this.usedClasses =[];
    } else {
      this.newClasses =[];
      this.usedClasses =['active'];
    }
  }
  ngOnInit(): void {
  }

}

enum VehicolType{
  NEW,
  USED
}
