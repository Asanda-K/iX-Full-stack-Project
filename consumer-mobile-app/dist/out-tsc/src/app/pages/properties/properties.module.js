import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PropertiesPage } from './properties.page';
var routes = [
    {
        path: '',
        component: PropertiesPage
    }
];
var PropertiesPageModule = /** @class */ (function () {
    function PropertiesPageModule() {
    }
    PropertiesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PropertiesPage]
        })
    ], PropertiesPageModule);
    return PropertiesPageModule;
}());
export { PropertiesPageModule };
//# sourceMappingURL=properties.module.js.map