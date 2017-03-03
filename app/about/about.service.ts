import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Hours} from './about.hour';
import {About} from './about.model';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {
    constructor(private http: Http) {
    }

    getAboutData():Observable<About>{
      let tempAbout = this.http.get('http://localhost:8081/api/about')
            .map((res) => res.json());
            console.log(tempAbout);
      return tempAbout;
}
  }
