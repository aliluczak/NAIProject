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
var OrderFormComponent = (function () {
    function OrderFormComponent(cartService, orderFormService) {
        this.cartService = cartService;
        this.orderFormService = orderFormService;
        this.regexPattern = "(0-9){10}|(0-9){9}";
        this.movieIds = [];
    }
    OrderFormComponent.prototype.submit = function (firstName, lastName, number) {
        this.user = new order_form_user_1.User(firstName, lastName, number, this.movieIds);
        this.orderFormService.submit(this.user);
    };
    OrderFormComponent.prototype.getCart = function () {
        var _this = this;
        this.cart = this.cartService.getCart();
        this.cart.forEach(function (movie) { _this.movieIds.push(movie.id); });
    };
    OrderFormComponent.prototype.ngOnInit = function () {
        this.getCart();
    };
    OrderFormComponent = __decorate([
        core_1.Component({
            selector: 'order-form',
            templateUrl: 'app/order-form/order-form.component.html',
            styleUrls: ['app/order-form/order-form.component.css'],
            providers: [order_form_service_1.OrderFormService]
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService, order_form_service_1.OrderFormService])
    ], OrderFormComponent);
    return OrderFormComponent;
}());
exports.OrderFormComponent = OrderFormComponent;
//# sourceMappingURL=order-form.component.js.map