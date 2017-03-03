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
var order_form_service_1 = require('./order-form.service');
var order_form_user_1 = require('./order-form-user');
var cart_service_1 = require('../cart/cart.service');
var cart_dataprovider_1 = require('../cart/cart.dataprovider');
var router_1 = require('@angular/router');
var OrderFormComponent = (function () {
    function OrderFormComponent(router, cartService, orderFormService, dataProvider) {
        this.router = router;
        this.cartService = cartService;
        this.orderFormService = orderFormService;
        this.dataProvider = dataProvider;
        this.movieIds = [];
    }
    OrderFormComponent.prototype.submit = function () {
        this.user = new order_form_user_1.User(this.firstName, this.lastName, this.number, this.movieIds);
        this.orderFormService.submitData(this.user);
    };
    OrderFormComponent.prototype.ngOnInit = function () {
        this.cart = this.dataProvider.cart;
        for (var i = 0; i < this.cart.length; i++) {
            this.movieIds.push(i);
        }
        console.log(this.cart.length);
    };
    OrderFormComponent.prototype.back = function () {
        this.router.navigate(['/list']);
    };
    OrderFormComponent = __decorate([
        core_1.Component({
            selector: 'order',
            templateUrl: 'app/order-form/order-form.component.html',
            styleUrls: ['app/order-form/order-form.component.css'],
            providers: [order_form_service_1.OrderFormService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, cart_service_1.CartService, order_form_service_1.OrderFormService, cart_dataprovider_1.CartDataProvider])
    ], OrderFormComponent);
    return OrderFormComponent;
}());
exports.OrderFormComponent = OrderFormComponent;
//# sourceMappingURL=order-form.component.js.map