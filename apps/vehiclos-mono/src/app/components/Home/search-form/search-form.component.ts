import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'vehiclos-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  a = [{route: 'Model'}, {route: 'Model'}, {route: 'Model'}, {route: 'Model'}, {route: 'Model'}, {route: 'Model'}];
  searchForm = new FormGroup({
    make: new FormControl(''),
    model: new FormControl(''),
    region: new FormControl(''),
    firstReg: new FormControl(''),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

}
