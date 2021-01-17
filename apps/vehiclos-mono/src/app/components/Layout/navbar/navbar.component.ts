import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'vehiclos-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  meh="display: none;";
  ceh="";
  NavBarVis(){
    if(this.meh=="display: none;"){
      this.meh = " ";
      this.ceh="display: none;";
    }else{
      this.meh ="display: none;";
      this.ceh="";
    }
  }

  get navButtons(): Button[] {
    return this._navButtons;
  }

  set navButtons(value: Button[]) {
    this._navButtons = value;
  }

  get route(): string {
    return this._route;
  }

  set route(value: string) {
    this._route = value;
  }

  private _navButtons: Button[];
  private _isRegister: boolean;
  private _isLogin:boolean;
  private _route: string;

  get isLogin(): boolean {
    return this._isLogin;
  }

  set isLogin(value: boolean) {
    this._isLogin = value;
  }

  get isRegister(): boolean {
    return this._isRegister;
  }

  set isRegister(value: boolean) {
    this._isRegister = value;
  }

  constructor(private location: Location, private router: Router) {
  }

  ngOnInit(): void {
    this.navButtons = [new Button('SEARCH', false, ''),new Button('SELL', false, 'sell'), new Button('ABOUT US', false, 'about-us'), new Button('WISHLIST', false, 'wishlist')];
    if (!this.location.path()) {
      this.navButtons[0].isActive = true;
    } else {
      this.navButtons.forEach(item => {
        if(this.location.path() === '/'+item.link) {
          item.isActive = true;
        }
      })
    }
  }


  changePage(button: Button) {
    for (const item of this._navButtons) {
      item.isActive = button === item;
    }
  }

  switchRegister(forcedValue: boolean | null = null) {
    this.isRegister = !this.isRegister;
    this.isRegister = forcedValue !== null ? forcedValue : this.isRegister;
  }

  switchLogin(forcedValue: boolean | null = null) {
    this.isLogin = !this.isLogin;
    this.isLogin = forcedValue !== null ? forcedValue : this.isLogin;
  }
}

class Button {
  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }
  private _text: string;
  private _isActive: boolean;
  private _link: string;

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  constructor(text: string, isActive: boolean, link: string) {

    this._text = text;
    this._isActive = isActive;
    this._link = link;
  }

  calculateClass(): string {
    return this._isActive ? 'active' : null;
  }

  calculateLinkClass(): string {
    return this._isActive ? 'current' : null;

  }

}
