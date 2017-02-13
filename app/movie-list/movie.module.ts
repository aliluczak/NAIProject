import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MovieListComponent } from './movie-list.component';
import { MovieComponent } from './movie.component';
import { MovieService } from './movieList.service';

import { CartComponent } from '../cart/cart.component'
import {OrderFormComponent} from '../order-form/order-form.component';
import {OrderFormService} from '../order-form/order-form.service';
import {AboutService} from '../about/about.service';
import {AboutComponent} from '../about/about.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: ':category', component: MovieListComponent},
    {path: 'order', component: OrderFormComponent}, //zmienić na komponent zamówienia
     { path: '', component: MovieListComponent },
     { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [ 
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ MovieListComponent, MovieComponent, CartComponent, OrderFormComponent, AboutComponent ],
    exports: [ MovieListComponent, CartComponent, OrderFormComponent, AboutComponent ],
    providers: [ MovieService, OrderFormService, AboutService ]
})
export class MovieModule {

} 