import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/Home/home/home.component";
import {BuyComponent} from "./components/buy/buy.component";
import {SellComponent} from "./components/sell/sell.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'buy', component: BuyComponent},
  {path: 'sell', component: SellComponent},
  {path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
