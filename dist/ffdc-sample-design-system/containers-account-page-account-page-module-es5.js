(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-account-page-account-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/account-card/account-card.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/account-card/account-card.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"account-card\">\n  <mat-card-content>\n    <div class=\"round-icon\">\n      <mat-icon aria-hidden=\"false\" aria-label=\"Account card\">credit_card</mat-icon>\n    </div>\n    <div>\n      <div class=\"uxg-body-1\">{{ accountOverview.nickname }}</div>\n      <div class=\"uxg-h5\">{{ accountOverview.currentBalance | currency }}</div>\n    </div>\n  </mat-card-content>\n  <mat-card-footer>\n    <mat-divider></mat-divider>\n    <div class=\"uxg-body-2 account-card-number-padding\">{{ accountOverview.accountNumber }}</div>\n  </mat-card-footer>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/account-list/account-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/account-list/account-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let account of accounts\">\n  <ffdc-account-card class=\"clickable\" (click)=\"onSelectedAccount(account)\" [account]=\"account\"></ffdc-account-card>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/account-page/account-page.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/account-page/account-page.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"account-page-acount-overview\">\n  <div class=\"acount-page-all-acount-text uxg-display-4\">All Accounts</div>\n  <div class=\"account-page-acount-overview-info\">\n    <div class=\"round-icon\">\n      <mat-icon  aria-hidden=\"false\" aria-label=\"Account\">credit_card</mat-icon>\n    </div>\n    <div class=\"account-page-acount-overview-info-detail\">\n      <div class=\"uxg-subtitle-2\">Current Balance:</div>\n      <div class=\"uxg-h5\">{{allAcountsOverview.current | currency}}</div>\n    </div>\n    <div class=\"account-page-acount-overview-info-detail\">\n      <div class=\"uxg-subtitle-2\">Available Balance:</div>\n      <div class=\"uxg-h5\">{{allAcountsOverview.available | currency}}</div>\n    </div>\n    <div class=\"account-page-acount-overview-info-action\">\n      <button mat-flat-button color=\"primary\">Transfer</button>\n      <button mat-flat-button color=\"accent\">Withhold</button>\n    </div>\n  </div>\n</div>\n<div class=\"account-page-content\">\n  <div class=\"account-page-content-column\">\n    <div class=\"uxg-h5\">Your Accounts:</div>\n    <ffdc-account-list [accounts]=\"accounts\"></ffdc-account-list>\n  </div>\n  <div class=\"account-page-content-column\">\n    <ffdc-account-transaction [showAllAccount]=\"true\"></ffdc-account-transaction>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/account-card/account-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/account-card/account-card.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-card mat-card {\n  width: 263px;\n  height: 96px;\n}\n.account-card mat-card mat-card-content {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n.account-card mat-card .account-card-number-padding {\n  padding: 4px 32px 8px 32px;\n}\n@media all and (max-width: 600px) {\n  .account-card mat-card {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2ZyaWd1aS9GdXNpb25GYWJyaWMvZ2l0L2ZmZGMtc2FtcGxlLXJldGFpbC13ZWJhcHAvc3JjL2FwcC9jb21wb25lbnRzL2FjY291bnQtY2FyZC9hY2NvdW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC1jYXJkL2FjY291bnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDQUo7QURDSTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ047QURDSTtFQUNFLDBCQUFBO0FDQ047QURFRTtFQUNFO0lBQ0UsV0FBQTtFQ0FKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FjY291bnQtY2FyZC9hY2NvdW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudC1jYXJkIHtcbiAgbWF0LWNhcmQge1xuICAgIHdpZHRoOiAyNjNweDtcbiAgICBoZWlnaHQ6IDk2cHg7XG4gICAgbWF0LWNhcmQtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmFjY291bnQtY2FyZC1udW1iZXItcGFkZGluZyB7XG4gICAgICBwYWRkaW5nOiA0cHggMzJweCA4cHggMzJweDtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtYXQtY2FyZCB7XG4gICAgICB3aWR0aDogMTAwJVxuICAgIH1cbiAgfVxufVxuIiwiLmFjY291bnQtY2FyZCBtYXQtY2FyZCB7XG4gIHdpZHRoOiAyNjNweDtcbiAgaGVpZ2h0OiA5NnB4O1xufVxuLmFjY291bnQtY2FyZCBtYXQtY2FyZCBtYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFjY291bnQtY2FyZCBtYXQtY2FyZCAuYWNjb3VudC1jYXJkLW51bWJlci1wYWRkaW5nIHtcbiAgcGFkZGluZzogNHB4IDMycHggOHB4IDMycHg7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYWNjb3VudC1jYXJkIG1hdC1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/account-card/account-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/account-card/account-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: AccountCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountCardComponent", function() { return AccountCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");



var AccountCardComponent = /** @class */ (function () {
    function AccountCardComponent(accountService) {
        this.accountService = accountService;
    }
    AccountCardComponent.prototype.ngOnInit = function () {
        this.accountOverview = this.accountService.getAccountOverview(this.account);
    };
    AccountCardComponent.ctorParameters = function () { return [
        { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccountCardComponent.prototype, "account", void 0);
    AccountCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ffdc-account-card',
            template: __webpack_require__(/*! raw-loader!./account-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/account-card/account-card.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'account-card'
            },
            styles: [__webpack_require__(/*! ./account-card.component.scss */ "./src/app/components/account-card/account-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
    ], AccountCardComponent);
    return AccountCardComponent;
}());



/***/ }),

/***/ "./src/app/components/account-card/account-card.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/account-card/account-card.module.ts ***!
  \****************************************************************/
/*! exports provided: AccountCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountCardModule", function() { return AccountCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-card.component */ "./src/app/components/account-card/account-card.component.ts");
/* harmony import */ var _material_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material-modules */ "./src/app/material-modules.ts");





var AccountCardModule = /** @class */ (function () {
    function AccountCardModule() {
    }
    AccountCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_account_card_component__WEBPACK_IMPORTED_MODULE_3__["AccountCardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_modules__WEBPACK_IMPORTED_MODULE_4__["MaterialModules"]
            ],
            exports: [_account_card_component__WEBPACK_IMPORTED_MODULE_3__["AccountCardComponent"]]
        })
    ], AccountCardModule);
    return AccountCardModule;
}());



/***/ }),

/***/ "./src/app/components/account-list/account-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/account-list/account-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-list {\n  display: flex;\n  flex-wrap: wrap;\n}\n.account-list > .account-card {\n  margin-right: 32px;\n  margin-top: 16px;\n  display: flex;\n  flex: 1;\n}\n@media all and (max-width: 600px) {\n  .account-list {\n    padding-bottom: 32px;\n  }\n  .account-list > .account-card {\n    margin-right: 0px;\n    margin-top: 16px;\n    display: flex;\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2ZyaWd1aS9GdXNpb25GYWJyaWMvZ2l0L2ZmZGMtc2FtcGxlLXJldGFpbC13ZWJhcHAvc3JjL2FwcC9jb21wb25lbnRzL2FjY291bnQtbGlzdC9hY2NvdW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC1saXN0L2FjY291bnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtBQ0VKO0FEQ0E7RUFDRTtJQUNFLG9CQUFBO0VDRUY7RURERTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsT0FBQTtFQ0dKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FjY291bnQtbGlzdC9hY2NvdW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICA+IC5hY2NvdW50LWNhcmQge1xuICAgIG1hcmdpbi1yaWdodDogMzJweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFjY291bnQtbGlzdCB7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgPiAuYWNjb3VudC1jYXJkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cbiAgfVxufVxuIiwiLmFjY291bnQtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5hY2NvdW50LWxpc3QgPiAuYWNjb3VudC1jYXJkIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYWNjb3VudC1saXN0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgfVxuICAuYWNjb3VudC1saXN0ID4gLmFjY291bnQtY2FyZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/account-list/account-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/account-list/account-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: AccountListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountListComponent", function() { return AccountListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AccountListComponent = /** @class */ (function () {
    function AccountListComponent(router) {
        this.router = router;
        this.accounts = [];
    }
    AccountListComponent.prototype.ngOnInit = function () { };
    AccountListComponent.prototype.onSelectedAccount = function (account) {
        this.router.navigateByUrl("/accounts/" + account.accountId);
    };
    AccountListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AccountListComponent.prototype, "accounts", void 0);
    AccountListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ffdc-account-list',
            template: __webpack_require__(/*! raw-loader!./account-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/account-list/account-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'account-list'
            },
            styles: [__webpack_require__(/*! ./account-list.component.scss */ "./src/app/components/account-list/account-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AccountListComponent);
    return AccountListComponent;
}());



/***/ }),

/***/ "./src/app/components/account-list/account-list.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/account-list/account-list.module.ts ***!
  \****************************************************************/
/*! exports provided: AccountListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountListModule", function() { return AccountListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-list.component */ "./src/app/components/account-list/account-list.component.ts");
/* harmony import */ var _account_card_account_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account-card/account-card.module */ "./src/app/components/account-card/account-card.module.ts");





var AccountListModule = /** @class */ (function () {
    function AccountListModule() {
    }
    AccountListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_account_list_component__WEBPACK_IMPORTED_MODULE_3__["AccountListComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _account_card_account_card_module__WEBPACK_IMPORTED_MODULE_4__["AccountCardModule"]],
            exports: [_account_list_component__WEBPACK_IMPORTED_MODULE_3__["AccountListComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountListModule);
    return AccountListModule;
}());



/***/ }),

/***/ "./src/app/containers/account-page/account-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/containers/account-page/account-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accounts-page {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding-bottom: 32px;\n}\n.accounts-page .account-page-acount-overview {\n  display: flex;\n  flex-grow: 100%;\n  margin-bottom: 32px;\n  padding: 32px 64px 32px 64px;\n  flex-direction: column;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info {\n  display: flex;\n  padding-top: 32px;\n  align-items: center;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info .account-page-acount-overview-info-detail {\n  display: flex;\n  flex-direction: column;\n  padding-right: 64px;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info .account-page-acount-overview-info-detail .uxg-subtitle-2 {\n  padding-bottom: 8px;\n  margin-top: 16px;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info .space {\n  flex: 1;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info .account-page-acount-overview-info-action {\n  display: flex;\n  min-width: 196px;\n  justify-content: space-between;\n}\n.accounts-page .account-page-content {\n  padding-left: 64px;\n  padding-right: 64px;\n  display: flex;\n  flex-grow: 100%;\n}\n.accounts-page .account-page-content .account-page-content-column {\n  display: flex;\n  flex-direction: column;\n  flex: 50%;\n}\n@media all and (max-width: 600px) {\n  .accounts-page .account-page-acount-overview {\n    padding: 16px 32px 16px 32px;\n  }\n  .accounts-page .account-page-acount-overview .round-icon {\n    display: none;\n  }\n  .accounts-page .account-page-acount-overview .account-page-acount-overview-info {\n    padding-top: 8px;\n    flex-direction: column;\n    align-items: end;\n  }\n  .accounts-page .account-page-content {\n    padding-left: 16px;\n    padding-right: 16px;\n    flex-direction: column;\n  }\n  .accounts-page .account-page-content .account-page-content-column {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2ZyaWd1aS9GdXNpb25GYWJyaWMvZ2l0L2ZmZGMtc2FtcGxlLXJldGFpbC13ZWJhcHAvc3JjL2FwcC9jb250YWluZXJzL2FjY291bnQtcGFnZS9hY2NvdW50LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lcnMvYWNjb3VudC1wYWdlL2FjY291bnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0VKO0FEQUk7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VOO0FERE07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0dSO0FERlE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDSVY7QURETTtFQUNFLE9BQUE7QUNHUjtBRERNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUNHUjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7QURBSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNFTjtBREVFO0VBQ0U7SUFDRSw0QkFBQTtFQ0FKO0VERUk7SUFDRSxhQUFBO0VDQU47RURFSTtJQUNFLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtFQ0FOO0VER0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7RUNESjtFREVJO0lBQ0UsT0FBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2FjY291bnQtcGFnZS9hY2NvdW50LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudHMtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICBwYWRkaW5nOiAzMnB4IDY0cHggMzJweCA2NHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nLXRvcDogMzJweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvLWRldGFpbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDY0cHg7XG4gICAgICAgIC51eGctc3VidGl0bGUtMiAge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnNwYWNlIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3LWluZm8tYWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWluLXdpZHRoOiAxOTZweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYWNjb3VudC1wYWdlLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogNjRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2NHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxMDAlO1xuICAgIC5hY2NvdW50LXBhZ2UtY29udGVudC1jb2x1bW4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4OiA1MCU7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldyB7XG4gICAgICBwYWRkaW5nOiAxNnB4IDMycHggMTZweCAzMnB4O1xuXG4gICAgICAucm91bmQtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFjY291bnQtcGFnZS1jb250ZW50IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLmFjY291bnQtcGFnZS1jb250ZW50LWNvbHVtbiB7XG4gICAgICAgIGZsZXg6IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuIiwiLmFjY291bnRzLXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cbi5hY2NvdW50cy1wYWdlIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nOiAzMnB4IDY0cHggMzJweCA2NHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmFjY291bnRzLXBhZ2UgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXcgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXctaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFjY291bnRzLXBhZ2UgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXcgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXctaW5mbyAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctcmlnaHQ6IDY0cHg7XG59XG4uYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldyAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3LWluZm8tZGV0YWlsIC51eGctc3VidGl0bGUtMiB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldyAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvIC5zcGFjZSB7XG4gIGZsZXg6IDE7XG59XG4uYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldyAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3LWluZm8tYWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLXdpZHRoOiAxOTZweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmFjY291bnRzLXBhZ2UgLmFjY291bnQtcGFnZS1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiA2NHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDEwMCU7XG59XG4uYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWNvbnRlbnQgLmFjY291bnQtcGFnZS1jb250ZW50LWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDUwJTtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hY2NvdW50cy1wYWdlIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3IHtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHggMTZweCAzMnB4O1xuICB9XG4gIC5hY2NvdW50cy1wYWdlIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3IC5yb3VuZC1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hY2NvdW50cy1wYWdlIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3IC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3LWluZm8ge1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICB9XG4gIC5hY2NvdW50cy1wYWdlIC5hY2NvdW50LXBhZ2UtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWNvbnRlbnQgLmFjY291bnQtcGFnZS1jb250ZW50LWNvbHVtbiB7XG4gICAgZmxleDogMTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/containers/account-page/account-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/containers/account-page/account-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: AccountPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageComponent", function() { return AccountPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");








var AccountPageComponent = /** @class */ (function () {
    function AccountPageComponent(accountService, store, cd) {
        this.accountService = accountService;
        this.store = store;
        this.cd = cd;
        this.accounts = [];
        this.allAcountsOverview = { current: 0, available: 0 };
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    AccountPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_4__["AccountActions"].loadExtendedAndDetailedAccounts());
        this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_3__["selectAllAccounts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe(function (accounts) {
            _this.accounts = accounts;
            _this.allAcountsOverview = _this.accountService.getAllAcountOverview(accounts);
            _this.cd.markForCheck();
        });
    };
    AccountPageComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    AccountPageComponent.ctorParameters = function () { return [
        { type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    AccountPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ffdc-accounts-page',
            template: __webpack_require__(/*! raw-loader!./account-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/account-page/account-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            host: {
                class: 'accounts-page'
            },
            styles: [__webpack_require__(/*! ./account-page.component.scss */ "./src/app/containers/account-page/account-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AccountPageComponent);
    return AccountPageComponent;
}());



/***/ }),

/***/ "./src/app/containers/account-page/account-page.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/containers/account-page/account-page.module.ts ***!
  \****************************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-page.component */ "./src/app/containers/account-page/account-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_account_list_account_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/account-list/account-list.module */ "./src/app/components/account-list/account-list.module.ts");
/* harmony import */ var _account_transaction_account_transaction_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../account-transaction/account-transaction.module */ "./src/app/containers/account-transaction/account-transaction.module.ts");
/* harmony import */ var _material_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../material-modules */ "./src/app/material-modules.ts");








var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _material_modules__WEBPACK_IMPORTED_MODULE_7__["MaterialModules"],
                _components_account_list_account_list_module__WEBPACK_IMPORTED_MODULE_5__["AccountListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"]
                    }
                ]),
                _account_transaction_account_transaction_module__WEBPACK_IMPORTED_MODULE_6__["AccountTransactionModule"]
            ],
            exports: [_account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"]],
            entryComponents: [_account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=containers-account-page-account-page-module-es5.js.map