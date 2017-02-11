import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

    constructor(private http: Http) {
    }

    getMovies (categoryId : string) : Observable<Movie[]> {
       // return this.http.get('app/movie-list/movies.json') //'http://localhost:8081/api/movies')
         return this.http.get('http://localhost:8081/api/movies')
     // return this.http.get('app/movie-list/movies.json')
            .map((res) => this.extractData(res, categoryId));
    }

    private extractData(res: Response, categoryId : string) {
     let body = res.json();
    
     if(categoryId){
         return body.filter((movie : Movie) => {
             let categoryIds : string[];
             categoryIds = movie.categoryIds;
             
             let category : string;
             let i = 0;
             for(i; i < categoryIds.length; i++){
                 if(categoryIds[i] === categoryId){
                     return true;
                 }
             }
             return false;
         }) || { };
     } else{
        return body || { };
     }
  }
}