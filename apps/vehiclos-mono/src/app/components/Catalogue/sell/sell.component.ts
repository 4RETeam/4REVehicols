import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehiclos-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  data=[{
    id:1,
    link:"",
    car:"wwwww",
    img:"https://i.ytimg.com/vi/NxAgJSeVZqI/hqdefault.jpg",
    price:100000,
  },
  {
    id:2,
    link:"",
    car:"wwwww",
    img:"https://i.ytimg.com/vi/NxAgJSeVZqI/hqdefault.jpg",
    price:1000,
  },
  {
    id:3,
    link:"",
    car:"wwwww",
    img:"https://i.ytimg.com/vi/NxAgJSeVZqI/hqdefault.jpg",
    price:1000,
  },
  {
    id:4,
    link:"",
    car:"wwwww",
    img:"https://i.ytimg.com/vi/NxAgJSeVZqI/hqdefault.jpg",
    price:1000,
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
