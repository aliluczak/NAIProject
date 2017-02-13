import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import {OrderFormService} from './order-form.service';
import {User} from './order-form-user';
import {CartService} from '../cart/cart.service';
import {Movie} from '../movie-list/movie.model';

@Component({
    selector: 'order-form',
    templateUrl: 'app/order-form/order-form.component.html',
    styleUrls: [ 'app/order-form/order-form.component.css' ],
    providers: [ OrderFormService ]
})

export class OrderFormComponent implements OnInit{
    private regexPattern="(0-9){10}|(0-9){9}";
    private user: User;
    private movieIds: Array<number>= [];
    private cart: Array<Movie>;

    constructor(private cartService :CartService, private orderFormService: OrderFormService){}
    
    submit(firstName: string, lastName: string, number: string){
        this.user = new User(firstName, lastName, number, this.movieIds);
        this.orderFormService.submitData(this.user);
    }

    getCart(){
        this.cart = this.cartService.getCart();
        this.cart.forEach((movie:Movie) =>{this.movieIds.push(movie.id)});
    }

    ngOnInit (){
        this.getCart();
    }
}