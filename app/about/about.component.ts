import{AboutService} from './about.service';
import {About} from './about.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: 'app/about/about.component.html',
    styleUrls: [ 'app/about/about.component.css' ],
    providers: [ AboutService]
})

export class AboutComponent implements OnInit{
    constructor(private aboutService: AboutService){}
    public about: About;

    ngOnInit (){
              this.aboutService.getAbout().subscribe(
              data => {this.about = data;});
    }
}