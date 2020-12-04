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

@NgModule({
  declarations: [AppComponent, NavbarComponent, SearchComponent, UserComponent, DetailedSearchComponent, FooterComponent, PreFooterComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
