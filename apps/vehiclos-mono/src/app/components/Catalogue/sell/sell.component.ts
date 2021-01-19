import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'vehiclos-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  style:string;
  visible=true;
 
  StyleChangers(ss){
   
    if(ss==true){
      this.style='left:0%;';
    }else{
      this.style='left:-100%';
    }
  }
 

 

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
    img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price:100000,
  },
  {
    id:2,
    link:"",
    car:"wwwww",
    img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
    price:1000,
  },
  {
    id:3,
    link:"",
    car:"wwwww",
    img:"https://cars.usnews.com/pics/size/640x420/static/images/article/202006/128503/216702_New_Volvo_XC40_-_exterior_640x420.jpg",
    price:1000,
  },
  {
    id:1,
    link:"",
    car:"wwwww",
    img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price:100000,
  },
  {
    id:2,
    link:"",
    car:"wwwww",
    img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
    price:1000,
  },
  {
    id:3,
    link:"",
    car:"wwwww",
    img:"https://cars.usnews.com/pics/size/640x420/static/images/article/202006/128503/216702_New_Volvo_XC40_-_exterior_640x420.jpg",
    price:1000,
  },
  {
    id:3,
    link:"",
    car:"wwwww",
    img:"https://www.driving.co.uk/s3/st-driving-prod/uploads/2020/02/2020-Vauxhall-Corsa-SRi-UK-01.jpg",
    price:1000,
  },
  {
    id:3,
    link:"",
    car:"wwwww",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQh4mMMXLmc7k1U1ghOGjP_E5LzWIRVhVwA&usqp=CAU",
    price:1000,
  },
  {
    id:4,
    link:"",
    car:"wwwww",
    img:"https://www.cottage-cars.co.uk/photos/9849/b9d3165b-b387-487f-bd60-0b8425b444e4_i800x600.jpg",
    price:1000,
  }]

  constructor() { 
    this.GetMoney(2);
   
  }

  ngOnInit(): void {
  }

}
