import { Component, OnInit } from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'vehiclos-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log(pass: NgModel) {
    console.log(pass);
  }
}
