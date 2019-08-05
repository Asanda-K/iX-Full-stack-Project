import * as tslib_1 from "tslib";
import { Listing } from '../models/listing.model';
import { Injectable } from '@angular/core';
var ListingsService = /** @class */ (function () {
    function ListingsService() {
        this._listings = [
            new Listing('L1', 'Bright Modern Art Decor Atelier ', '../assets/airbnb.jpg', 195.99, 'Bright Modern Art Decor Studio Apartment in the heart of Cape Town.'),
            new Listing('L2', 'Loft ', '../assets/airbnb1.jpg', 299.00, 'Bright Modern Art Decor Studio Apartment in the heart of Cape Town.')
        ];
    }
    Object.defineProperty(ListingsService.prototype, "listings", {
        get: function () {
            return this._listings.slice();
        },
        enumerable: true,
        configurable: true
    });
    ListingsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ListingsService);
    return ListingsService;
}());
export { ListingsService };
//# sourceMappingURL=listings.service.js.map