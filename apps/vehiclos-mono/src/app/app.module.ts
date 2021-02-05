import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/Layout/navbar/navbar.component';
import { SearchComponent } from './components/Home/search/search.component';
import { UserComponent } from './components/user/user.component';
import { DetailedSearchComponent } from './components/Detailed-Search/detailed-search/detailed-search.component';
import { FooterComponent } from './components/Layout/footer/footer.component';
import { PreFooterComponent } from './components/Layout/pre-footer/pre-footer.component';
import { SearchBarComponent } from './components/Home/search-bar/search-bar.component';
import { SearchFormComponent } from './components/Home/search-form/search-form.component';
import { HomeComponent } from './components/Home/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BuyComponent } from './components/buy/buy.component';
import { SearchBottomComponent } from './components/Home/search-bottom/search-bottom.component';
import { SearchButtonComponent } from './components/Home/search-button/search-button.component';
import { LoginComponent } from './components/Layout/login/login.component';
import { RegisterComponent } from './components/Layout/register/register.component';
import { RegisterFormComponent } from './components/Layout/register-form/register-form.component';
import { LoginFormComponent } from './components/Layout/login-form/login-form.component';
import { MultiRangeSliderComponent } from './components/MultiUseComponents/multi-range-slider/multi-range-slider.component';
import { SingleRangeSliderComponent } from './components/MultiUseComponents/single-range-slider/single-range-slider.component';
import { SelectComponent } from './components/MultiUseComponents/select/select.component';
import { SellComponent } from './components/Catalogue/sell/sell.component';
import { SellConfComponent } from './components/Catalogue/sell-conf/sell-conf.component';
import { CheckboxComponent } from './components/MultiUseComponents/checkbox/checkbox.component'
import { ProductComponent } from './components/Catalogue/product/product.component';
import { UserService } from './_services/HelloService';
import { PopupAlertComponent } from './components/MultiUseComponents/popup-alert/popup-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    UserComponent,
    DetailedSearchComponent,
    FooterComponent,
    PreFooterComponent,
    SearchBarComponent,
    SearchFormComponent,
    HomeComponent,
    AboutUsComponent,
    WishlistComponent,
    BuyComponent,
    SearchBottomComponent,
    SearchButtonComponent,
    LoginComponent,
    RegisterComponent,
    RegisterFormComponent,
    LoginFormComponent,
    MultiRangeSliderComponent,
    SingleRangeSliderComponent,
    SelectComponent,
    SellComponent,
    SellConfComponent,
    CheckboxComponent,
    ProductComponent,
    PopupAlertComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyABlDG8p85EGBzobHUHFmc9QHuqgpo7Il0'
    })

  
  ],
  providers: [UserService],
  bootstrap: [AppComponent],

})
export class AppModule {}
