import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class UserService{
    constructor(private http : HttpClient){
    } 

    register(email:string, password:string,name:string) {
        return this.http.post('https://vehiclos-back.herokuapp.com/v1/user',{firstname:name,lastName:name,email,password});
    }

    login(email:string, password) {

    }
}
