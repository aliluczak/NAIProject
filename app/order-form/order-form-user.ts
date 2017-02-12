import {Movie} from '../movie-list/movie.model';

export class User{
    public firstName: string;
    public lastName: string;
    public phone: string;
    public cart: Array<number>;

    constructor(firstName: string, lastName: string, number: string, cart: Array<number>){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = number;
        this.cart = cart;
    }
}