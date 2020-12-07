import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { DetailedSearchComponent } from './components/detailed-search/detailed-search.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreFooterComponent } from './components/pre-footer/pre-footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SearchComponent, UserComponent, DetailedSearchComponent, FooterComponent, PreFooterComponent, SearchBarComponent, SearchFormComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
