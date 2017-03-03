import { Injectable } from '@angular/core';
import { Movie } from '../movie-list/movie.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { Observer } from 'rxjs/observer';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';


@Injectable()
export class CartService {
    public cart:Array<Movie> = [];

    _movies: BehaviorSubject<Movie[]>;
   
    constructor(private router: Router) {
        this._movies = <BehaviorSubject<Movie[]>>new BehaviorSubject(this.cart);
    }

   get tomovies() {
    return this._movies.asObservable();
  }

  getTotal() : number {
      let sum = 0;
      let i = 0;

      for(i ; i < this.cart.length; i++){
          sum = sum + this.cart[i].fee;
      }

      return sum;
  }

    addMovie (movie: Movie){
        if (movie.copiesLeft > 0){
            this.cart.push(movie);
            movie.copiesLeft--;
            console.log(this.cart.length);
           this._movies.next(this.cart);
        }
    }

    removeMovie(movie: Movie){
        var index = this.cart.indexOf(movie);
        
        if (index > -1) {
         this.cart.splice(index, 1);
         movie.copiesLeft++;

         this._movies.next(this.cart);
        }
    }

    getCart(): Array<Movie>{
        console.log(this.cart.length);
        return this.cart;
    }

    
}