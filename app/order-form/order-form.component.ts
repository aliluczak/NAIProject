import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import {OrderFormService} from './order-form.service';
import {User} from './order-form-user';
import {CartService} from '../cart/cart.service';
import {Movie} from '../movie-list/movie.model';
import {CartDataProvider} from '../cart/cart.dataprovider';
import {Router} from '@angular/router';

@Component({
    selector: 'order',
    templateUrl: 'app/order-form/order-form.component.html',
    styleUrls: [ 'app/order-form/order-form.component.css' ],
    providers: [ OrderFormService]
})

export class OrderFormComponent{
    private firstName: string;
    private lastName: string;
    private number: string;
    private user: User;
    private movieIds: Array<number>= [];
    private cart: Array<Movie>;

    constructor(private router: Router,private cartService :CartService, 
        private orderFormService: OrderFormService, public dataProvider: CartDataProvider)
    {
    }

    submit(){
        this.user = new User(this.firstName, this.lastName, this.number, this.movieIds);
        this.orderFormService.submitData(this.user);
    }

    ngOnInit(){
        this.cart = this.dataProvider.cart;
        for ( let i = 0; i < this.cart.length; i++)
        {
            this.movieIds.push(i);
        }
        console.log(this.cart.length);
    }

    back(){
        this.router.navigate(['/list']);
    }


}