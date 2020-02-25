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

module.exports = ".account-card mat-card {\n  width: 263px;\n  height: 96px;\n}\n.account-card mat-card mat-card-content {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n.account-card mat-card .account-card-number-padding {\n  padding: 4px 32px 8px 32px;\n}\n@media all and (max-width: 600px) {\n  .account-card mat-card {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZib2NsZS9Xb3JrL2Rldi10YWxrcy9mZmRjLXNhbXBsZS1yZXRhaWwtd2ViYXBwL3NyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWNhcmQvYWNjb3VudC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FjY291bnQtY2FyZC9hY2NvdW50LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NOO0FEQ0k7RUFDRSwwQkFBQTtBQ0NOO0FERUU7RUFDRTtJQUNFLFdBQUE7RUNBSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWNhcmQvYWNjb3VudC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtY2FyZCB7XG4gIG1hdC1jYXJkIHtcbiAgICB3aWR0aDogMjYzcHg7XG4gICAgaGVpZ2h0OiA5NnB4O1xuICAgIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5hY2NvdW50LWNhcmQtbnVtYmVyLXBhZGRpbmcge1xuICAgICAgcGFkZGluZzogNHB4IDMycHggOHB4IDMycHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgbWF0LWNhcmQge1xuICAgICAgd2lkdGg6IDEwMCVcbiAgICB9XG4gIH1cbn1cbiIsIi5hY2NvdW50LWNhcmQgbWF0LWNhcmQge1xuICB3aWR0aDogMjYzcHg7XG4gIGhlaWdodDogOTZweDtcbn1cbi5hY2NvdW50LWNhcmQgbWF0LWNhcmQgbWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hY2NvdW50LWNhcmQgbWF0LWNhcmQgLmFjY291bnQtY2FyZC1udW1iZXItcGFkZGluZyB7XG4gIHBhZGRpbmc6IDRweCAzMnB4IDhweCAzMnB4O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFjY291bnQtY2FyZCBtYXQtY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");



let AccountCardComponent = class AccountCardComponent {
    constructor(accountService) {
        this.accountService = accountService;
    }
    ngOnInit() {
        this.accountOverview = this.accountService.getAccountOverview(this.account);
    }
};
AccountCardComponent.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _account_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-card.component */ "./src/app/components/account-card/account-card.component.ts");
/* harmony import */ var _material_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material-modules */ "./src/app/material-modules.ts");





let AccountCardModule = class AccountCardModule {
};
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



/***/ }),

/***/ "./src/app/components/account-list/account-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/account-list/account-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-list {\n  display: flex;\n  flex-wrap: wrap;\n}\n.account-list > .account-card {\n  margin-right: 32px;\n  margin-top: 16px;\n  display: flex;\n  flex: 1;\n}\n@media all and (max-width: 600px) {\n  .account-list {\n    padding-bottom: 32px;\n  }\n  .account-list > .account-card {\n    margin-right: 0px;\n    margin-top: 16px;\n    display: flex;\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZib2NsZS9Xb3JrL2Rldi10YWxrcy9mZmRjLXNhbXBsZS1yZXRhaWwtd2ViYXBwL3NyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWxpc3QvYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FjY291bnQtbGlzdC9hY2NvdW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7QUNFSjtBRENBO0VBQ0U7SUFDRSxvQkFBQTtFQ0VGO0VEREU7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLE9BQUE7RUNHSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWxpc3QvYWNjb3VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgPiAuYWNjb3VudC1jYXJkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hY2NvdW50LWxpc3Qge1xuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICAgID4gLmFjY291bnQtY2FyZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gIH1cbn1cbiIsIi5hY2NvdW50LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uYWNjb3VudC1saXN0ID4gLmFjY291bnQtY2FyZCB7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFjY291bnQtbGlzdCB7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIH1cbiAgLmFjY291bnQtbGlzdCA+IC5hY2NvdW50LWNhcmQge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AccountListComponent = class AccountListComponent {
    constructor(router) {
        this.router = router;
        this.accounts = [];
    }
    ngOnInit() { }
    onSelectedAccount(account) {
        this.router.navigateByUrl(`/accounts/${account.accountId}`);
    }
};
AccountListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _account_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-list.component */ "./src/app/components/account-list/account-list.component.ts");
/* harmony import */ var _account_card_account_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account-card/account-card.module */ "./src/app/components/account-card/account-card.module.ts");





let AccountListModule = class AccountListModule {
    constructor() { }
};
AccountListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_account_list_component__WEBPACK_IMPORTED_MODULE_3__["AccountListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _account_card_account_card_module__WEBPACK_IMPORTED_MODULE_4__["AccountCardModule"]],
        exports: [_account_list_component__WEBPACK_IMPORTED_MODULE_3__["AccountListComponent"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AccountListModule);



/***/ }),

/***/ "./src/app/containers/account-page/account-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/containers/account-page/account-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accounts-page {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding-bottom: 32px;\n}\n.accounts-page .account-page-acount-overview {\n  display: flex;\n  flex-grow: 100%;\n  margin-bottom: 32px;\n  padding: 32px 64px 32px 64px;\n  flex-direction: column;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info {\n  display: flex;\n  padding-top: 32px;\n  align-items: center;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info .account-page-acount-overview-info-detail {\n  display: flex;\n  flex-direction: column;\n  padding-right: 64px;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info .account-page-acount-overview-info-detail .uxg-subtitle-2 {\n  padding-bottom: 8px;\n  margin-top: 16px;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info .space {\n  flex: 1;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info .account-page-acount-overview-info-action {\n  display: flex;\n  min-width: 196px;\n  justify-content: space-between;\n}\n.accounts-page .account-page-content {\n  padding-left: 64px;\n  padding-right: 64px;\n  display: flex;\n  flex-grow: 100%;\n}\n.accounts-page .account-page-content .account-page-content-column {\n  display: flex;\n  flex-direction: column;\n  flex: 50%;\n}\n@media all and (max-width: 600px) {\n  .accounts-page .account-page-acount-overview {\n    padding: 16px 32px 16px 32px;\n  }\n  .accounts-page .account-page-acount-overview .round-icon {\n    display: none;\n  }\n  .accounts-page .account-page-acount-overview .account-page-acount-overview-info {\n    padding-top: 8px;\n    flex-direction: column;\n    align-items: end;\n  }\n  .accounts-page .account-page-content {\n    padding-left: 16px;\n    padding-right: 16px;\n    flex-direction: column;\n  }\n  .accounts-page .account-page-content .account-page-content-column {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZib2NsZS9Xb3JrL2Rldi10YWxrcy9mZmRjLXNhbXBsZS1yZXRhaWwtd2ViYXBwL3NyYy9hcHAvY29udGFpbmVycy9hY2NvdW50LXBhZ2UvYWNjb3VudC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL2FjY291bnQtcGFnZS9hY2NvdW50LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNFSjtBREFJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNFTjtBRERNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNHUjtBREZRO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0lWO0FERE07RUFDRSxPQUFBO0FDR1I7QURETTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDR1I7QURDRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDRU47QURFRTtFQUNFO0lBQ0UsNEJBQUE7RUNBSjtFREVJO0lBQ0UsYUFBQTtFQ0FOO0VERUk7SUFDRSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7RUNBTjtFREdFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0VDREo7RURFSTtJQUNFLE9BQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9hY2NvdW50LXBhZ2UvYWNjb3VudC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnRzLXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgcGFkZGluZzogMzJweCA2NHB4IDMycHggNjRweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXctaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZy10b3A6IDMycHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXctaW5mby1kZXRhaWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2NHB4O1xuICAgICAgICAudXhnLXN1YnRpdGxlLTIgIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5zcGFjZSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvLWFjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1pbi13aWR0aDogMTk2cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmFjY291bnQtcGFnZS1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XG4gICAgcGFkZGluZy1yaWdodDogNjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTAwJTtcbiAgICAuYWNjb3VudC1wYWdlLWNvbnRlbnQtY29sdW1uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleDogNTAlO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXcge1xuICAgICAgcGFkZGluZzogMTZweCAzMnB4IDE2cHggMzJweDtcblxuICAgICAgLnJvdW5kLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXctaW5mbyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5hY2NvdW50LXBhZ2UtY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC5hY2NvdW50LXBhZ2UtY29udGVudC1jb2x1bW4ge1xuICAgICAgICBmbGV4OiAxXG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cbiIsIi5hY2NvdW50cy1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG59XG4uYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgcGFkZGluZzogMzJweCA2NHB4IDMycHggNjRweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hY2NvdW50cy1wYWdlIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3IC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hY2NvdW50cy1wYWdlIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3IC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3LWluZm8gLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXctaW5mby1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXJpZ2h0OiA2NHB4O1xufVxuLmFjY291bnRzLXBhZ2UgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXcgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXctaW5mbyAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvLWRldGFpbCAudXhnLXN1YnRpdGxlLTIge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmFjY291bnRzLXBhZ2UgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXcgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXctaW5mbyAuc3BhY2Uge1xuICBmbGV4OiAxO1xufVxuLmFjY291bnRzLXBhZ2UgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXcgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXctaW5mbyAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvLWFjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMTk2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5hY2NvdW50cy1wYWdlIC5hY2NvdW50LXBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogNjRweDtcbiAgcGFkZGluZy1yaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxMDAlO1xufVxuLmFjY291bnRzLXBhZ2UgLmFjY291bnQtcGFnZS1jb250ZW50IC5hY2NvdW50LXBhZ2UtY29udGVudC1jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiA1MCU7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldyB7XG4gICAgcGFkZGluZzogMTZweCAzMnB4IDE2cHggMzJweDtcbiAgfVxuICAuYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldyAucm91bmQtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldyAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgfVxuICAuYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmFjY291bnRzLXBhZ2UgLmFjY291bnQtcGFnZS1jb250ZW50IC5hY2NvdW50LXBhZ2UtY29udGVudC1jb2x1bW4ge1xuICAgIGZsZXg6IDE7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");








let AccountPageComponent = class AccountPageComponent {
    constructor(accountService, store, cd) {
        this.accountService = accountService;
        this.store = store;
        this.cd = cd;
        this.accounts = [];
        this.allAcountsOverview = { current: 0, available: 0 };
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_4__["AccountActions"].loadExtendedAndDetailedAccounts());
        this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_3__["selectAllAccounts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe(accounts => {
            this.accounts = accounts;
            this.allAcountsOverview = this.accountService.getAllAcountOverview(accounts);
            this.cd.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
};
AccountPageComponent.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _account_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-page.component */ "./src/app/containers/account-page/account-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_account_list_account_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/account-list/account-list.module */ "./src/app/components/account-list/account-list.module.ts");
/* harmony import */ var _account_transaction_account_transaction_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../account-transaction/account-transaction.module */ "./src/app/containers/account-transaction/account-transaction.module.ts");
/* harmony import */ var _material_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../material-modules */ "./src/app/material-modules.ts");








let AccountPageModule = class AccountPageModule {
};
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



/***/ })

}]);
//# sourceMappingURL=containers-account-page-account-page-module.js.map