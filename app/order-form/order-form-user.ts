
export class User{
    public firstName: string;
    public lastName: string;
    public phone: string;
    public movieIds: Array<number>
    constructor(firstName: string, lastName: string, number: string, cart: Array<number>){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = number;
        this.movieIds = cart;
    }
}