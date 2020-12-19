import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgModel, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'vehiclos-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {



  constructor(
  ) { }

  ngOnInit(): void {
  }

  log(x: NgModel) {
    console.log(x);
  }

}
