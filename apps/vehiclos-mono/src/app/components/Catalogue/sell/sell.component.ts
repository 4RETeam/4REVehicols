import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehiclos-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  AmericanMoney=[{
    id:1,
    curr:"USD",
    Multy:0.2,
  },
  {
    id:2,
    curr:"EUR",
    Multy:0.3
  },
  {
    id:3,
    curr:"RUB",
    Multy:0.4
  },
  {
    id:4,
    curr:"LV",
    Multy:0.5
  },]


  //Currency convertor
  private Multyplier;
  //val is id of currency
  GetMoney(val){
    //americanMoney is database object
    this.AmericanMoney.forEach(element => {
      //currency finder
      if(element.id==val){
        //initiation
        this.Multyplier=element.Multy;
        //change the prices of the cars in the object from database
        this.data.forEach(elements=>{
        elements.price= elements.price*this.Multyplier;
        })
      }
    });
  }

  
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
    id:3,
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

  constructor() { 
    this.GetMoney(2);

  }

  ngOnInit(): void {
  }

}
