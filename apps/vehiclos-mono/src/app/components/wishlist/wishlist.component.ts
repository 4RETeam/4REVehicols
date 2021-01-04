import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'vehiclos-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  
 @Output() StyleChanger = new EventEmitter<boolean>();
@Input() style;
@Input() visible;

styleChanger(){
  this.StyleChanger.emit(false);
}
  wishes=[
    {
      name:"BMW X1",
      price:"20,234.",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
      mileage:46.542,
      used:"Used",
      oil:"Gasoline",
      date:"02/2016",
      howMuchUsers:"1 previous owner",
      howMuchFood:"5.1 l/100 km (comb) 1",
      horsePower:"100 kW 136 hp",
      transmission:"Manual",
      polution:"100 g CO2/km (comb) 2",

   
    },
    {
      name:"BMW X1",
      price:"20,234.",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
      mileage:46.542,
      used:"Used",
      oil:"Gasoline",
      date:"02/2016",
      howMuchUsers:"1 previous owner",
      howMuchFood:"5.1 l/100 km (comb) 1",
      horsePower:"100 kW 136 hp",
      transmission:"Manual",
      polution:"100 g CO2/km (comb) 2",

   
    },
    {
      name:"BMW X1",
      price:"20,234.",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
      mileage:46.542,
      used:"Used",
      oil:"Gasoline",
      date:"02/2016",
      howMuchUsers:"1 previous owner",
      howMuchFood:"5.1 l/100 km (comb) 1",
      horsePower:"100 kW 136 hp",
      transmission:"Manual",
      polution:"100 g CO2/km (comb) 2",

   
    },
    {
      name:"BMW X1",
      price:"20,234.",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
      mileage:46.542,
      used:"Used",
      oil:"Gasoline",
      date:"02/2016",
      howMuchUsers:"1 previous owner",
      howMuchFood:"5.1 l/100 km (comb) 1",
      horsePower:"100 kW 136 hp",
      transmission:"Manual",
      polution:"100 g CO2/km (comb) 2",

   
    },
   
  ]
  

  
  constructor() { }

  ngOnInit(): void {
    
  }

}
