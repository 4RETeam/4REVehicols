import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehicols-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  numbers: number[];
  constructor() { }

  ngOnInit(): void {
    this.numbers = Array(5).fill(1);
  }

}
