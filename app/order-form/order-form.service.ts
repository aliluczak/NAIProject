import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {User} from './order-form-user';

@Injectable()
export class OrderFormService{
    constructor(private http: Http){
    }


    submitData(user: User){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(user);
       return this.http.post('http://localhost:8081/borrow', body, headers)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error: Response | any){
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}