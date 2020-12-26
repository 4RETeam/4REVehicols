import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehiclos-detailed-search',
  templateUrl: './detailed-search.component.html',
  styleUrls: ['./detailed-search.component.scss']
})
export class DetailedSearchComponent implements OnInit {
  a = [{name: 'Example1'},{name: 'Example2'},{name: 'Example2'},];

  constructor() { }

  ngOnInit(): void {
  }

}
