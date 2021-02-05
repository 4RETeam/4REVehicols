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
  passConf = '';
  name = '';

  passwordsAreDifferent = false;

  emailIncorrect = false;

  passwordTooWeak = false;

  userExists = false;
  successfulReg = false;

  regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  ngOnInit(): void {
  }

  log(x: NgModel) {
    console.log(x);
  }

  setEmail(email:NgModel) {
    console.log(email);
    this.email = email.value;
    this.emailIncorrect = !!!email.errors.email;
  }

  setPass(pass: NgModel) {
    console.log(pass);
    this.pass = pass.value;
    this.passwordTooWeak = !this.regex.test(this.pass);
  }

  setName(name:NgModel) {
    console.log(name);
    this.name = name.value;
  }

  setPassConf(passConf:NgModel) {
    this.passConf = passConf.value;
    this.passConf !== this.pass ? this.passwordsAreDifferent = true : this.passwordsAreDifferent = false;
  }

  call(){

    console.log("asdfa",this.email,this.pass,this.name);
    this.userService.register(this.email,this.pass,this.name).subscribe(data => {this.successfulReg = true;},err => {this.userExists = true});
  }


}
