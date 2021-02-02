import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@vehiclos/api-interfaces';
import { Location } from "@angular/common";
import { Router} from "@angular/router";

@Component({
  selector: 'vehiclos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  route:string;
  hello$ = this.http.get<Message>('/api/hello');
  
  constructor(private http: HttpClient, private location: Location, private router: Router) {
    router.events.subscribe(val => {
      if (location.path() !== "") {
        this.route = location.path();
      } else {
        this.route = "";
      }
    });
  }
}