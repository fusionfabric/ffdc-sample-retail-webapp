(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-account-detail-page-account-detail-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/account-detail-card/account-detail-card.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/account-detail-card/account-detail-card.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>\n    <div>{{ account.nickname }}</div>\n  </mat-card-title>\n  <mat-card-content>\n    <div class=\"account-card-detail-summary\">\n      <div class=\"uxg-avatar\"></div>\n      <div class=\"account-card-detail-summary-info\">\n        <div class=\"uxg-body-1\">Account Number</div>\n        <div class=\"uxg-subtitle-1\">{{ account.accountNumber }}</div>\n      </div>\n    </div>\n    <div class=\"account-detail-card-content\">\n      <div class=\"account-detail-card-content__static\">\n        <div class=\"account-detail-card-content__line\">\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">\n            Card type\n          </div>\n          <div>\n            {{ account.accountType || 'no available' }}\n          </div>\n        </div>\n\n        <div class=\"account-detail-card-content__line\">\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">\n            Owner\n          </div>\n          <div>\n            {{ account.ownerName || 'no available' }}\n          </div>\n        </div>\n\n        <div class=\"account-detail-card-content__line\">\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">\n            Created date\n          </div>\n          <div>\n            {{ account.openDate || 'no available' }}\n          </div>\n        </div>\n        <div class=\"account-detail-card-content__line\">\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">\n            Alternate account number\n          </div>\n          <div>\n            {{ account.alternateAccountNumber || 'no available' }}\n          </div>\n        </div>\n      </div>\n      <mat-divider [vertical]=\"true\"></mat-divider>\n      <div class=\"account-detail-card-content__status\">\n        <div class=\"account-detail-card-content__line\">\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">Interest paid</div>\n          <div>{{accountInterestPaid.interestThisYear}}</div>\n        </div>\n        <div class=\"account-detail-card-content__line\">\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\"> Interest paid last year</div>\n          <div>{{accountInterestPaid.interestLastYear}}</div>\n        </div>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/account-detail-page/account-detail-page.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/account-detail-page/account-detail-page.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"acount-detail-page-overview\">\n  <div class=\"acount-detail-page-overview-account-text uxg-display-4\">{{ acountsOverview.nickname }}</div>\n  <div class=\"acount-detail-page-overview-info\">\n    <div class=\"round-icon\">\n      <mat-icon aria-hidden=\"false\" aria-label=\"Account\">credit_card</mat-icon>\n    </div>\n    <div class=\"acount-detail-page-overview-info-detail\">\n      <div class=\"uxg-subtitle-2\">Current Balance:</div>\n      <div class=\"uxg-h5\">{{ acountsOverview.currentBalance | currency }}</div>\n    </div>\n    <div class=\"acount-detail-page-overview-info-detail\">\n      <div class=\"uxg-subtitle-2\">Available Balance:</div>\n      <div class=\"uxg-h5\">{{ acountsOverview.availableBalance | currency }}</div>\n    </div>\n    <div class=\"acount-detail-page-overview-info-action\">\n      <button mat-stroked-button>Transfer</button>\n      <button mat-stroked-button>Withhold</button>\n    </div>\n  </div>\n</div>\n<ng-container *ngIf=\"account\">\n  <div class=\"account-page-detail-page-content\">\n    <div class=\"account-page-detail-page-content-column\">\n      <ffdc-account-detail-card [account]=\"account\"></ffdc-account-detail-card>\n    </div>\n    <div class=\"account-page-detail-page-content-column\">\n      <ffdc-account-transaction [accountId]=\"account.accountId\"></ffdc-account-transaction>\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/account-detail-card/account-detail-card.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/account-detail-card/account-detail-card.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-detail-card mat-card {\n  max-width: 629px;\n}\n.account-detail-card .account-card-detail-summary {\n  display: flex;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  align-items: center;\n}\n.account-detail-card .account-card-detail-summary .account-card-detail-summary-info {\n  display: flex;\n  padding-left: 16px;\n  flex-direction: column;\n}\n.account-detail-card .account-detail-card-content {\n  display: flex;\n}\n.account-detail-card .account-detail-card-content .account-detail-card-content__static {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding-right: 16px;\n}\n.account-detail-card .account-detail-card-content .account-detail-card-content__status {\n  display: flex;\n  padding-left: 16px;\n  flex: 1;\n  flex-direction: column;\n}\n.account-detail-card .account-detail-card-content .account-detail-card-content__line {\n  display: flex;\n  padding-bottom: 8px;\n}\n.account-detail-card .account-detail-card-content .account-detail-card-content__line .account-detail-card-content__line-title {\n  min-width: 196px;\n}\n@media all and (max-width: 600px) {\n  .account-detail-card .account-detail-card-content {\n    flex-direction: column;\n  }\n  .account-detail-card .account-detail-card-content mat-divider {\n    display: none;\n  }\n  .account-detail-card .account-detail-card-content .account-detail-card-content__status {\n    padding-top: 8px;\n    padding-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2ZyaWd1aS9GdXNpb25GYWJyaWMvZ2l0L2ZmZGMtc2FtcGxlLXJldGFpbC13ZWJhcHAvc3JjL2FwcC9jb21wb25lbnRzL2FjY291bnQtZGV0YWlsLWNhcmQvYWNjb3VudC1kZXRhaWwtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWRldGFpbC1jYXJkL2FjY291bnQtZGV0YWlsLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQ0FKO0FERUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURDSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ047QURFRTtFQUNFLGFBQUE7QUNBSjtBRENJO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ047QURDSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtBQ0NOO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDTjtBREFNO0VBQ0UsZ0JBQUE7QUNFUjtBRElFO0VBQ0U7SUFDRSxzQkFBQTtFQ0ZKO0VER0k7SUFDRSxhQUFBO0VDRE47RURHSTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWRldGFpbC1jYXJkL2FjY291bnQtZGV0YWlsLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudC1kZXRhaWwtY2FyZCB7XG4gIG1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDYyOXB4O1xuICB9XG4gIC5hY2NvdW50LWNhcmQtZGV0YWlsLXN1bW1hcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuYWNjb3VudC1jYXJkLWRldGFpbC1zdW1tYXJ5LWluZm8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICB9XG4gIH1cbiAgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19zdGF0aWMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICB9XG4gICAgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudF9fc3RhdHVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudF9fbGluZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnRfX2xpbmUtdGl0bGUge1xuICAgICAgICBtaW4td2lkdGg6IDE5NnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19zdGF0dXMge1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgIH1cbiAgICAgIC8vIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnRfX2xpbmUge1xuICAgICAgLy8gICBkaXNwbGF5OiBub25lO1xuICAgICAgLy8gfVxuXG4gICAgfVxuXG4gIH1cbn1cbiIsIi5hY2NvdW50LWRldGFpbC1jYXJkIG1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA2MjlweDtcbn1cbi5hY2NvdW50LWRldGFpbC1jYXJkIC5hY2NvdW50LWNhcmQtZGV0YWlsLXN1bW1hcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWNjb3VudC1kZXRhaWwtY2FyZCAuYWNjb3VudC1jYXJkLWRldGFpbC1zdW1tYXJ5IC5hY2NvdW50LWNhcmQtZGV0YWlsLXN1bW1hcnktaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hY2NvdW50LWRldGFpbC1jYXJkIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFjY291bnQtZGV0YWlsLWNhcmQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudCAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19zdGF0aWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuLmFjY291bnQtZGV0YWlsLWNhcmQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudCAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYWNjb3VudC1kZXRhaWwtY2FyZCAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50IC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnRfX2xpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmFjY291bnQtZGV0YWlsLWNhcmQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudCAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19saW5lIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnRfX2xpbmUtdGl0bGUge1xuICBtaW4td2lkdGg6IDE5NnB4O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFjY291bnQtZGV0YWlsLWNhcmQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYWNjb3VudC1kZXRhaWwtY2FyZCAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50IG1hdC1kaXZpZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hY2NvdW50LWRldGFpbC1jYXJkIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudF9fc3RhdHVzIHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/account-detail-card/account-detail-card.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/account-detail-card/account-detail-card.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AccountDetailCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailCardComponent", function() { return AccountDetailCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");



let AccountDetailCardComponent = class AccountDetailCardComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.accountInterestPaid = { interestLastYear: '', interestThisYear: '' };
    }
    get account() {
        return this._account;
    }
    set account(value) {
        this._account = value;
        if (value) {
            this.accountInterestPaid = this.accountService.getAccountInterestPaid(value);
        }
    }
    ngOnInit() { }
};
AccountDetailCardComponent.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], AccountDetailCardComponent.prototype, "account", null);
AccountDetailCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ffdc-account-detail-card',
        template: __webpack_require__(/*! raw-loader!./account-detail-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/account-detail-card/account-detail-card.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        host: {
            class: 'account-detail-card'
        },
        styles: [__webpack_require__(/*! ./account-detail-card.component.scss */ "./src/app/components/account-detail-card/account-detail-card.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
], AccountDetailCardComponent);



/***/ }),

/***/ "./src/app/components/account-detail-card/account-detail-card.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/account-detail-card/account-detail-card.module.ts ***!
  \******************************************************************************/
/*! exports provided: AccountDetailCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailCardModule", function() { return AccountDetailCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _account_detail_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-detail-card.component */ "./src/app/components/account-detail-card/account-detail-card.component.ts");
/* harmony import */ var _material_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material-modules */ "./src/app/material-modules.ts");





let AccountDetailCardModule = class AccountDetailCardModule {
};
AccountDetailCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_account_detail_card_component__WEBPACK_IMPORTED_MODULE_3__["AccountDetailCardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _material_modules__WEBPACK_IMPORTED_MODULE_4__["MaterialModules"]
        ],
        exports: [_account_detail_card_component__WEBPACK_IMPORTED_MODULE_3__["AccountDetailCardComponent"]]
    })
], AccountDetailCardModule);



/***/ }),

/***/ "./src/app/containers/account-detail-page/account-detail-page.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/containers/account-detail-page/account-detail-page.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-detail-page {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding-bottom: 32px;\n}\n.account-detail-page .acount-detail-page-overview {\n  display: flex;\n  flex-grow: 100%;\n  margin-bottom: 32px;\n  padding: 32px 64px 32px 64px;\n  flex-direction: column;\n}\n.account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info {\n  display: flex;\n  padding-top: 32px;\n  align-items: center;\n}\n.account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info .acount-detail-page-overview-info-detail {\n  display: flex;\n  flex-direction: column;\n  padding-right: 64px;\n}\n.account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info .acount-detail-page-overview-info-detail .uxg-subtitle-2 {\n  padding-bottom: 8px;\n  margin-top: 16px;\n}\n.account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info .acount-detail-page-overview-info-action {\n  display: flex;\n  min-width: 196px;\n  justify-content: space-between;\n}\n.account-detail-page .account-page-detail-page-content {\n  display: flex;\n  padding-left: 32px;\n  padding-right: 64px;\n}\n.account-detail-page .account-page-detail-page-content .account-page-detail-page-content-column {\n  display: flex;\n  flex-direction: column;\n  flex: 50%;\n  padding-left: 32px;\n}\n@media all and (max-width: 600px) {\n  .account-detail-page .acount-detail-page-overview {\n    padding: 16px 32px 16px 32px;\n  }\n  .account-detail-page .acount-detail-page-overview .round-icon {\n    display: none;\n  }\n  .account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info {\n    padding-top: 8px;\n    flex-direction: column;\n    align-items: end;\n  }\n  .account-detail-page .account-page-detail-page-content {\n    padding-left: 16px;\n    padding-right: 16px;\n    flex-direction: column;\n  }\n  .account-detail-page .account-page-detail-page-content .account-page-detail-page-content-column {\n    flex: 1;\n    padding-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2ZyaWd1aS9GdXNpb25GYWJyaWMvZ2l0L2ZmZGMtc2FtcGxlLXJldGFpbC13ZWJhcHAvc3JjL2FwcC9jb250YWluZXJzL2FjY291bnQtZGV0YWlsLXBhZ2UvYWNjb3VudC1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9hY2NvdW50LWRldGFpbC1wYWdlL2FjY291bnQtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNFSjtBRERJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNHTjtBREZNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNJUjtBREhRO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0tWO0FERk07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQ0lSO0FEQUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNHTjtBRENFO0VBQ0U7SUFDRSw0QkFBQTtFQ0NKO0VEQ0k7SUFDRSxhQUFBO0VDQ047RURFSTtJQUNFLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtFQ0FOO0VER0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7RUNESjtFREVJO0lBQ0UsT0FBQTtJQUNBLGlCQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvYWNjb3VudC1kZXRhaWwtcGFnZS9hY2NvdW50LWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtZGV0YWlsLXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICBwYWRkaW5nOiAzMnB4IDY0cHggMzJweCA2NHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nLXRvcDogMzJweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8tZGV0YWlsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNjRweDtcbiAgICAgICAgLnV4Zy1zdWJ0aXRsZS0yICB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8tYWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWluLXdpZHRoOiAxOTZweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDY0cHg7XG4gICAgLmFjY291bnQtcGFnZS1kZXRhaWwtcGFnZS1jb250ZW50LWNvbHVtbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDUwJTtcbiAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXcge1xuICAgICAgcGFkZGluZzogMTZweCAzMnB4IDE2cHggMzJweDtcblxuICAgICAgLnJvdW5kLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8ge1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgICAgfVxuICAgIH1cbiAgICAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQtY29sdW1uIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cbiIsIi5hY2NvdW50LWRldGFpbC1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG59XG4uYWNjb3VudC1kZXRhaWwtcGFnZSAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nOiAzMnB4IDY0cHggMzJweCA2NHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmFjY291bnQtZGV0YWlsLXBhZ2UgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldyAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hY2NvdW50LWRldGFpbC1wYWdlIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXcgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXctaW5mby1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXJpZ2h0OiA2NHB4O1xufVxuLmFjY291bnQtZGV0YWlsLXBhZ2UgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldyAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8gLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvLWRldGFpbCAudXhnLXN1YnRpdGxlLTIge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmFjY291bnQtZGV0YWlsLXBhZ2UgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldyAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8gLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvLWFjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMTk2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5hY2NvdW50LWRldGFpbC1wYWdlIC5hY2NvdW50LXBhZ2UtZGV0YWlsLXBhZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1yaWdodDogNjRweDtcbn1cbi5hY2NvdW50LWRldGFpbC1wYWdlIC5hY2NvdW50LXBhZ2UtZGV0YWlsLXBhZ2UtY29udGVudCAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogNTAlO1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYWNjb3VudC1kZXRhaWwtcGFnZSAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3IHtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHggMTZweCAzMnB4O1xuICB9XG4gIC5hY2NvdW50LWRldGFpbC1wYWdlIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXcgLnJvdW5kLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFjY291bnQtZGV0YWlsLXBhZ2UgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldyAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8ge1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICB9XG4gIC5hY2NvdW50LWRldGFpbC1wYWdlIC5hY2NvdW50LXBhZ2UtZGV0YWlsLXBhZ2UtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYWNjb3VudC1kZXRhaWwtcGFnZSAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQgLmFjY291bnQtcGFnZS1kZXRhaWwtcGFnZS1jb250ZW50LWNvbHVtbiB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/containers/account-detail-page/account-detail-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/containers/account-detail-page/account-detail-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AccountDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailPageComponent", function() { return AccountDetailPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_account_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/account.actions */ "./src/app/store/actions/account.actions.ts");









let AccountDetailPageComponent = class AccountDetailPageComponent {
    constructor(store, route, cd, accountService) {
        this.store = store;
        this.route = route;
        this.cd = cd;
        this.accountService = accountService;
        this.acountsOverview = { nickname: ' ', currentBalance: 0, availableBalance: 0, accountNumber: '' };
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(param => param.get('accountId') || ''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(accountId => !!accountId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(accountId => this.store.dispatch(Object(_store_actions_account_actions__WEBPACK_IMPORTED_MODULE_8__["getExtendedAndDetailedForAccount"])({ accountId }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(accountId => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["selectAccountById"], { accountId }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$))
            .subscribe(account => {
            if (account) {
                this.acountsOverview = this.accountService.getAccountOverview(account);
                this.account = account;
                this.cd.markForCheck();
            }
        });
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
};
AccountDetailPageComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }
];
AccountDetailPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ffdc-account-detail-page',
        template: __webpack_require__(/*! raw-loader!./account-detail-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/account-detail-page/account-detail-page.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        host: {
            class: 'account-detail-page'
        },
        styles: [__webpack_require__(/*! ./account-detail-page.component.scss */ "./src/app/containers/account-detail-page/account-detail-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]])
], AccountDetailPageComponent);



/***/ }),

/***/ "./src/app/containers/account-detail-page/account-detail-page.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/containers/account-detail-page/account-detail-page.module.ts ***!
  \******************************************************************************/
/*! exports provided: AccountDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailPageModule", function() { return AccountDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _account_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-detail-page.component */ "./src/app/containers/account-detail-page/account-detail-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_account_detail_card_account_detail_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/account-detail-card/account-detail-card.module */ "./src/app/components/account-detail-card/account-detail-card.module.ts");
/* harmony import */ var _material_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material-modules */ "./src/app/material-modules.ts");
/* harmony import */ var _account_transaction_account_transaction_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../account-transaction/account-transaction.module */ "./src/app/containers/account-transaction/account-transaction.module.ts");








let AccountDetailPageModule = class AccountDetailPageModule {
};
AccountDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_account_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountDetailPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _account_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountDetailPageComponent"]
                }
            ]),
            _material_modules__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"],
            _account_transaction_account_transaction_module__WEBPACK_IMPORTED_MODULE_7__["AccountTransactionModule"],
            _components_account_detail_card_account_detail_card_module__WEBPACK_IMPORTED_MODULE_5__["AccountDetailCardModule"]
        ],
        exports: [_account_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountDetailPageComponent"]],
        entryComponents: [_account_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountDetailPageComponent"]]
    })
], AccountDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=containers-account-detail-page-account-detail-page-module-es2015.js.map