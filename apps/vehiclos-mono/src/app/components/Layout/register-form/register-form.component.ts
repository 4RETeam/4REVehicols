import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgModel, ValidatorFn, Validators} from "@angular/forms";
import { UserService } from '../../../_services/HelloService';
import { map, take } from 'rxjs/operators';
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

  emptyFields = false;

  regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  ngOnInit(): void {
  }

  setClass(array:boolean[]) {
    // console.log(array);
    if(array.some(e => {e})) {
      // field.
      return 'wrong-input'
    }
    else {
      return ''
    }
  }

  setEmail(email:NgModel) {
    console.log(email);
    this.email = email.value;
    this.emailIncorrect = !email.valid;
    
    this.userExists = false;


    if(!this.emailIncorrect){
      this.userService.checkEmail(email.value).pipe().subscribe(data => {this.userExists = !data});
    }else {
      this.userExists = false;
    }
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
    if(this.validate()){
      this.userService.register(this.email,this.pass,this.name).pipe().subscribe(data => {this.successfulReg = true;});
    }
  }

  validate():boolean {
    if(this.email === '' || this.pass === '' || this.name === ''|| this.passConf=== '') {
      this.emptyFields = true;
      return false
    }else {
      this.emptyFields = false;
      if(this.emailIncorrect || this.userExists || this.passwordTooWeak || this.passwordsAreDifferent) {
        return false
      }else {
        return true;
      }
    }
  }

}
