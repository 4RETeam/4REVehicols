import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehiclos-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  style:string;
  visible=true;
  
  StyleChanger(myCock){
    
    if(myCock==true){
      this.style='right:0%;'
    }else{
      this.style='right:-100%'
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
