import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie-list/movie.component';

import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { CartService } from './cart/cart.service';

import {OrderFormService} from './order-form/order-form.service';
import {AboutService} from './about/about.service';


const routes: Routes = [
    { path: 'list', loadChildren: 'app/movie-list/movie.module#MovieModule' },
    { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [ BrowserModule, HttpModule,   RouterModule.forRoot(routes)],
  declarations: [ AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
