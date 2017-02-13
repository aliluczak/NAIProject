"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var movie_list_component_1 = require('./movie-list.component');
var movie_component_1 = require('./movie.component');
var movieList_service_1 = require('./movieList.service');
var cart_component_1 = require('../cart/cart.component');
var order_form_component_1 = require('../order-form/order-form.component');
var order_form_service_1 = require('../order-form/order-form.service');
var about_service_1 = require('../about/about.service');
var about_component_1 = require('../about/about.component');
var router_1 = require('@angular/router');
var routes = [
    { path: ':category', component: movie_list_component_1.MovieListComponent },
    { path: 'order', component: order_form_component_1.OrderFormComponent },
    { path: '', component: movie_list_component_1.MovieListComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
var MovieModule = (function () {
    function MovieModule() {
    }
    MovieModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [movie_list_component_1.MovieListComponent, movie_component_1.MovieComponent, cart_component_1.CartComponent, order_form_component_1.OrderFormComponent, about_component_1.AboutComponent],
            exports: [movie_list_component_1.MovieListComponent, cart_component_1.CartComponent, order_form_component_1.OrderFormComponent, about_component_1.AboutComponent],
            providers: [movieList_service_1.MovieService, order_form_service_1.OrderFormService, about_service_1.AboutService]
        }), 
        __metadata('design:paramtypes', [])
    ], MovieModule);
    return MovieModule;
}());
exports.MovieModule = MovieModule;
//# sourceMappingURL=movie.module.js.map