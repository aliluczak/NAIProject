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
var about_service_1 = require('about.service');
var AboutComponent = (function () {
    function AboutComponent(aboutService) {
        this.aboutService = aboutService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.about = this.aboutService.getAbout();
    };
    AboutComponent = __decorate([
        Component({
            selector: 'about',
            templateUrl: 'app/about/about.component.html',
            styleUrls: ['app/about/about.component.css'],
            providers: [about_service_1.AboutService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof about_service_1.AboutService !== 'undefined' && about_service_1.AboutService) === 'function' && _a) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map