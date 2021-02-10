import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class UserService{
    constructor(private http : HttpClient){
    } 

    register(email:string, password:string,name:string):any {
        try{
            return this.http.post('https://vehiclos-back.herokuapp.com/v1/user',{firstname:name,lastName:name,email,password});
        }catch {
            return from([{error:true}])
        }
    }

    checkEmail(email): Observable<any>{
        return this.http.post('https://vehiclos-back.herokuapp.com/v1/user/exists',{email});
    }

    login(email:string, password) {

    }
}
