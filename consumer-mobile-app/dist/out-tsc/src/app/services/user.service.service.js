var _this = this;
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
var UserService = /** @class */ (function () {
    function UserService(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.user = new User();
    }
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            NavController])
    ], UserService);
    return UserService;
}());
export { UserService };
create(user, User);
{
    return new Promise(function (resolve, reject) {
        _this.http
            .post(environment.BaseURL + '/apiuser', user)
            .subscribe(function (response) {
            resolve(response);
        });
    });
}
getAll();
{
    return new Promise(function (resolve, reject) {
        _this.http
            .get(environment.BaseURL + '/api/user/')
            .subscribe(function (response) {
            resolve(response);
        }, function (err) {
            reject(err.msg);
        });
    });
}
getById(userId);
{
    return new Promise(function (resolve, reject) {
        _this.http
            .get(environment.BaseURL + '/api/user/')
            .subscribe(function (response) {
            resolve(response);
        }, function (err) {
            reject(err.msg);
        });
    });
}
updateUserById(userId, user);
{
    return new Promise(function (resolve, reject) {
        _this.http
            .post(environment.BaseURL + '/api/user/')
            .subscribe(function (response) {
            resolve(response);
        }, function (err) {
            reject(err.msg);
        });
    });
}
//# sourceMappingURL=user.service.service.js.map