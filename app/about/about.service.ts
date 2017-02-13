import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {About} from './about.model';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {

    constructor(private http: Http) {
    }

    getAbout () : Observable<About>{
       // return this.http.get('app/movie-list/movies.json') //'http://localhost:8081/api/movies')
         return this.http.get('http://localhost:8081/about')
     // return this.http.get('app/movie-list/movies.json')
            .map((res) => this.extract(res));
    }

     private extract(res: Response) {
        let body = res.json();
        return body || {};
     }
  }
