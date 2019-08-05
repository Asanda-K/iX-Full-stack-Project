import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PropertyDetailsPage } from './property-details.page';
var routes = [
    {
        path: '',
        component: PropertyDetailsPage
    }
];
var PropertyDetailsPageModule = /** @class */ (function () {
    function PropertyDetailsPageModule() {
    }
    PropertyDetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PropertyDetailsPage]
        })
    ], PropertyDetailsPageModule);
    return PropertyDetailsPageModule;
}());
export { PropertyDetailsPageModule };
//# sourceMappingURL=property-details.module.js.map