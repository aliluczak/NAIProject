import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MovieListComponent } from './movie-list.component';
import { MovieComponent } from './movie.component';
import { MovieService } from './movieList.service';

import { CartComponent } from '../cart/cart.component'
import { CartService } from '../cart/cart.service';
import {OrderFormComponent} from '../order-form/order-form.component';
import {OrderFormService} from '../order-form/order-form.service';
import {AboutService} from '../about/about.service';
import {AboutComponent} from '../about/about.component';

import { RouterModule, Routes } from '@angular/router';
import {CartDataProvider} from '../cart/cart.dataprovider';

const routes: Routes = [
    {path: 'list/:category', component: MovieListComponent},
    {path: 'order', component: OrderFormComponent}, //zmienić na komponent zamówienia
     { path: '', redirectTo: '/list', pathMatch:'full' },
     {path: 'list', component: MovieListComponent},
     {path: 'about', component: AboutComponent}
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
    providers: [ MovieService, OrderFormService, AboutService, CartService, CartDataProvider ]
})
export class MovieModule {

} 