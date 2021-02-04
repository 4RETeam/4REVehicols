import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgModel, ValidatorFn, Validators} from "@angular/forms";
import { UserService } from '../../../_services/HelloService';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'vehiclos-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {


  constructor(private readonly userService:UserService) { }

  email = '';
  pass = '';
  name = '';


  ngOnInit(): void {
  }

  log(x: NgModel) {
    console.log(x);
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
    this.userService.register(this.email,this.pass,this.name).subscribe(e => {console.warn(e)});
  }


}
