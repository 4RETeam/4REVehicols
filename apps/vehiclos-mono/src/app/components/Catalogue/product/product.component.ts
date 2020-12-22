import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehiclos-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

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
