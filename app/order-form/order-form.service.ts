import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {User} from './order-form-user';

@Injectable()
export class OrderFormService{
    constructor(private http: Http){
    }


    submitData(form: User, movieIds: Array<number>){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify({form});
        console.log(body);
         this.http.post('http://localhost:8081/api/borrow', body, headers)
            .map(res => res.json())
            .subscribe(
      err => this.logError(err),
      () => console.log('Authentication Complete')
    );
    }

    logError(err: String) {
  console.error('There was an error: ' + err);
}
}