import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Movie } from '../movie-list/movie.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from './cart.service';
import {Router} from '@angular/router';
import {CartDataProvider} from './cart.dataprovider';


@Component({
    selector: 'my-movie-cart',
    templateUrl: 'app/cart/cart.component.html',
    styleUrls: [ 'app/cart/cart.component.css' ],
})
export class CartComponent implements OnInit, OnDestroy {

    public  borrowedMovies:Array<Movie> = [];
  
    
    constructor(private cartService:CartService, private router: Router, public dataProvider: CartDataProvider) {
       cartService.tomovies.subscribe(movies => {
           this.borrowedMovies = movies;
       })
    }

    get sum(){
        return (Math.round(this.cartService.getTotal() * 100)/100).toFixed(2);
    }
    
    ngOnInit () {

    }

    ngOnDestroy(){
        this.dataProvider.cart = this.cartService.getCart();
        console.log(this.dataProvider.cart.length);
    }

    removeMovieFromCart(movie: Movie){
        this.cartService.removeMovie(movie);
    }

    order(): void{
        this.router.navigate(['/order']);
    }
} 