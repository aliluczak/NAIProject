import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MovieListComponent } from './movie-list.component';
import { MovieComponent } from './movie.component';
import { MovieService } from './movieList.service';

import { CartComponent } from '../cart/cart.component'

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: ':category', component: MovieListComponent},
    {path: 'order', component: MovieListComponent}, //zmienić na komponent zamówienia
     { path: '', component: MovieListComponent }
];

@NgModule({
    imports: [ 
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ MovieListComponent, MovieComponent, CartComponent ],
    exports: [ MovieListComponent, CartComponent ],
    providers: [ MovieService ]
})
export class MovieModule {

} 