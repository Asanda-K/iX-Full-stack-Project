import * as tslib_1 from "tslib";
import { Component, } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingsService } from '.../shared/services/listings.service';
var PropertiesPage = /** @class */ (function () {
    function PropertiesPage(navCtrl, ListingsService) {
        this.navCtrl = navCtrl;
        this.ListingsService = ListingsService;
    }
    PropertiesPage.prototype.ngOnInit = function () {
        this.loadedListings = this.ListingsService.listings;
    };
    var _a;
    PropertiesPage = tslib_1.__decorate([
        Component({
            selector: 'app-properties',
            templateUrl: './properties.page.html',
            styleUrls: ['./properties.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, typeof (_a = typeof ListingsService !== "undefined" && ListingsService) === "function" ? _a : Object])
    ], PropertiesPage);
    return PropertiesPage;
}());
export { PropertiesPage };
//# sourceMappingURL=properties.page.js.map