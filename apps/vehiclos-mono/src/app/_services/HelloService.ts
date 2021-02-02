import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable()
export class UserService{
    constructor(private http : HttpClient){
    } 

    register(email:string, password:string,name:string) : any {
        return this.http.post('https://vehiclos-back.herokuapp.com/v1/user',{firstname:name,lastName:name,email,password}).pipe(
            map((res: Object) => res)
        );
    }

    login(email:string, password) {

    }
}
