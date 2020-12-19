import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehiclos-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navButtons: Button[] = [new Button('SEARCH', true, ''),new Button('SELL', false, 'sell'), new Button('ABOUT US', false, 'about-us'), new Button('WISHLIST', false, 'about-us')];
  private _isRegister: boolean;
  private _isLogin:boolean;

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

  constructor() { }

  ngOnInit(): void {
  }


  changePage(button: Button) {
    for (const item of this.navButtons) {
      item.isActive = button === item;
    }
  }

  switchRegister(forcedValue: boolean | null = null) {
    this.isRegister = !this.isRegister;
    this.isRegister = forcedValue !== null ? forcedValue : this.isRegister;
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
