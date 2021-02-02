import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/HelloService'
import {NgModel} from "@angular/forms";
import { Message } from '@vehiclos/api-interfaces';

@Component({
  selector: 'vehiclos-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private readonly userService:UserService) { }

  email = '';
  pass = '';
  name = '';


  ngOnInit(): void {
  }

  log(pass: NgModel) {
    console.log(pass);
  }

  setEmail(email:NgModel) {
    console.log(email);
    this.email = email.value;
  }

  setPass(pass: NgModel) {
    console.log(pass);
    this.pass = pass.value;
  }

  setName(name:NgModel) {
    console.log(name);
    this.name = name.value;
  }

  call(){
    console.log("asdfa",this.email,this.pass,this.name);
    console.log(this.userService.register(this.email,this.pass,this.name));
  }
}
