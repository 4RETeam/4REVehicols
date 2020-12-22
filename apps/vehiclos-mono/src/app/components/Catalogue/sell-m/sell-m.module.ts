import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SellComponent} from '../sell/sell.component';
import {SellConfComponent} from '../sell-conf/sell-conf.component';
import { from } from 'rxjs';
import { ProductComponent } from '../product/product.component';

// import { SelectComponent } from '../../MultiUseComponents/select/select.component';
// SelectComponent

@NgModule({
  declarations: [
    SellConfComponent,
    SellComponent,
    ProductComponent,
   
  ],
  imports: [
    CommonModule
  ]
})
export class SellMModule { }
