import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
var TabsService = /** @class */ (function () {
    function TabsService(NavCtrl, http, router) {
        this.NavCtrl = NavCtrl;
        this.http = http;
        this.router = router;
    }
    TabsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            HttpClient,
            Router])
    ], TabsService);
    return TabsService;
}());
export { TabsService };
//# sourceMappingURL=tabs.service.js.map