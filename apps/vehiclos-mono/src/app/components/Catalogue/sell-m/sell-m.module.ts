import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SellComponent} from '../sell/sell.component';
import {SellConfComponent} from '../sell-conf/sell-conf.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    SellConfComponent,
    SellComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SellMModule { }
