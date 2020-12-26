import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehiclos-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
 position={
   name:"Kurzemes prospekts 3 Kurzemes rajons, Rīga, LV-1067",
  lat :56.95912874641983,
  lng : 24.035963766507
   

 }


  datas = [
    {
      id: 1,
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
    },
    {
      id: 2,
      img: "https://cars.usnews.com/pics/size/640x420/static/images/article/202006/128503/216702_New_Volvo_XC40_-_exterior_640x420.jpg",
    },
    {
      id: 3,
      img: "https://www.driving.co.uk/s3/st-driving-prod/uploads/2020/02/2020-Vauxhall-Corsa-SRi-UK-01.jpg",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQh4mMMXLmc7k1U1ghOGjP_E5LzWIRVhVwA&usqp=CAU",
    },
    {
      id: 5,
      img: "https://www.cottage-cars.co.uk/photos/9849/b9d3165b-b387-487f-bd60-0b8425b444e4_i800x600.jpg",
    },
  ]
  main={
    id:1,
    img:"",
  }
  elements=
  [
    {Atr:"Comfort & Convenience",},
    {Atr:"Air conditioning",},
    {Atr:"Automatic climate control",},
    {Atr:"Cruise control",},
    {Atr:"Electrically adjustable seats",},
    {Atr:"Electrical side mirrors",},
    {Atr:"Keyless central door lock",},
    {Atr:"Light sensor",},
    {Atr:"Multi-function steering wheel",},
    {Atr:"Navigation system",},
    {Atr:"Park Distance",},
    {Atr:"Control Parking assist system sensors rear",},
    {Atr:"Power windows Rain sensor",},
    {Atr:"Seat heating",},
    {Atr:"Start-stop system",},
    {Atr:"Entertainment & Media ",},
    {Atr:"Bluetooth",},
    {Atr:"Hands-free equipment",},
    {Atr:"MP3",},
    {Atr:"On-board computer",},
    {Atr:"Radio",},
    {Atr:"USB",},
    {Atr:"Extras",},
    {Atr:"Alloy wheels",},
    {Atr:"Cab or rented Car",},
    {Atr:"Voice Control",},
    {Atr:"Safety & Security",},
    {Atr:"ABS",},
    {Atr:"Central door lock",},
    {Atr:"Daytime running lights",},
    {Atr:"Driver-side airbag",},
    {Atr:"Electronic stability control",},
    {Atr:"Fog lights",},
    {Atr:"Immobilizer Isofix",},
    {Atr:"LED Headlights",},
    {Atr:"Passenger-side airbag",},
    {Atr:"Power steering",},
    {Atr:"Side airbag",},
    {Atr:"Tire pressure monitoring system",},
    {Atr:"Traction control",},
  

  ]
  details=[
    {atr:'Make',atrInf:'BMW'},
    {atr:'Model',atrInf:'520'},
    {atr:'First Registration',atrInf:'2009'},
    {atr:'Body Color',atrInf:'Grey'},
    {atr:'Paint Type',atrInf:'Metalic'},
    {atr:'Upholstery',atrInf:'Full leather,Beige'},
    {atr:'Body',atrInf:'Sedans'},
    {atr:'Nr. of Dors',atrInf:'4'},
    {atr:'Nr. of Seats',atrInf:'5'},
  ]
  newPhoto(newID){
    this.datas.forEach(element => {
      if(element.id==newID){
        this.main.img=element.img;
      }
    });
 
  } 



  constructor() {
    this.newPhoto(this.main.id);
   }

  ngOnInit(): void {
  }

}
