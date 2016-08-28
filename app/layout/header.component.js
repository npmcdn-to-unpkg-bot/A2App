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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var header_service_1 = require('./header.service');
var HeaderComponent = (function () {
    function HeaderComponent(hs) {
        this.hs = hs;
        this.selected = new core_1.EventEmitter();
        this.categories = [''];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.categories = this.hs.getCategories();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeaderComponent.prototype, "selected", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'appHeader',
            templateUrl: 'app/layout/header.component.html',
            directives: [ng2_bootstrap_1.AlertComponent, ng2_bootstrap_1.BarComponent, ng2_bootstrap_1.BUTTON_DIRECTIVES, ng2_bootstrap_1.DROPDOWN_DIRECTIVES],
            providers: [header_service_1.HeaderService]
        }), 
        __metadata('design:paramtypes', [header_service_1.HeaderService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map