import {Hours} from './about.hour';
export class About{
    name: string;
    hours: Hours

    constructor(private nameAbout: string, private hoursAbout: Hours){
        this.name = nameAbout;
        this.hours = hoursAbout;
    }
}
