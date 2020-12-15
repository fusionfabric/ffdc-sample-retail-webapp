(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-account-detail-page-account-detail-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/account-detail-card/account-detail-card.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/account-detail-card/account-detail-card.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    <div>{{ account.nickname }}</div>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <div class=\"account-card-detail-summary\">\r\n      <div class=\"uxg-avatar\"></div>\r\n      <div class=\"account-card-detail-summary-info\">\r\n        <div class=\"uxg-body-1\">Account Number</div>\r\n        <div class=\"uxg-subtitle-1\">{{ account.accountNumber }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"account-detail-card-content\">\r\n      <div class=\"account-detail-card-content__static\">\r\n        <div class=\"account-detail-card-content__line\">\r\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">\r\n            Card type\r\n          </div>\r\n          <div>\r\n            {{ account.accountType || 'no available' }}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"account-detail-card-content__line\">\r\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">\r\n            Owner\r\n          </div>\r\n          <div>\r\n            {{ account.ownerName || 'no available' }}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"account-detail-card-content__line\">\r\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">\r\n            Created date\r\n          </div>\r\n          <div>\r\n            {{ account.openDate || 'no available' }}\r\n          </div>\r\n        </div>\r\n        <div class=\"account-detail-card-content__line\">\r\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">\r\n            Alternate account number\r\n          </div>\r\n          <div>\r\n            {{ account.alternateAccountNumber || 'no available' }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <mat-divider [vertical]=\"true\"></mat-divider>\r\n      <div class=\"account-detail-card-content__status\">\r\n        <div class=\"account-detail-card-content__line\">\r\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">Interest paid</div>\r\n          <div>{{accountInterestPaid.interestThisYear}}</div>\r\n        </div>\r\n        <div class=\"account-detail-card-content__line\">\r\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\"> Interest paid last year</div>\r\n          <div>{{accountInterestPaid.interestLastYear}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/account-detail-page/account-detail-page.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/account-detail-page/account-detail-page.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"acount-detail-page-overview\">\r\n  <div class=\"acount-detail-page-overview-account-text uxg-display-4\">{{ acountsOverview.nickname }}</div>\r\n  <div class=\"acount-detail-page-overview-info\">\r\n    <div class=\"round-icon\">\r\n      <mat-icon aria-hidden=\"false\" aria-label=\"Account\">credit_card</mat-icon>\r\n    </div>\r\n    <div class=\"acount-detail-page-overview-info-detail\">\r\n      <div class=\"uxg-subtitle-2\">Current Balance:</div>\r\n      <div class=\"uxg-h5\">{{ acountsOverview.currentBalance | currency }}</div>\r\n    </div>\r\n    <div class=\"acount-detail-page-overview-info-detail\">\r\n      <div class=\"uxg-subtitle-2\">Available Balance:</div>\r\n      <div class=\"uxg-h5\">{{ acountsOverview.availableBalance | currency }}</div>\r\n    </div>\r\n    <div class=\"acount-detail-page-overview-info-action\">\r\n      <button mat-stroked-button>Transfer</button>\r\n      <button mat-stroked-button>Withhold</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-container *ngIf=\"account\">\r\n  <div class=\"account-page-detail-page-content\">\r\n    <div class=\"account-page-detail-page-content-column\">\r\n      <ffdc-account-detail-card [account]=\"account\"></ffdc-account-detail-card>\r\n    </div>\r\n    <div class=\"account-page-detail-page-content-column\">\r\n      <ffdc-account-transaction [accountId]=\"account.accountId\"></ffdc-account-transaction>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/components/account-detail-card/account-detail-card.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/account-detail-card/account-detail-card.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-detail-card mat-card {\n  max-width: 629px;\n}\n.account-detail-card .account-card-detail-summary {\n  display: flex;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  align-items: center;\n}\n.account-detail-card .account-card-detail-summary .account-card-detail-summary-info {\n  display: flex;\n  padding-left: 16px;\n  flex-direction: column;\n}\n.account-detail-card .account-detail-card-content {\n  display: flex;\n}\n.account-detail-card .account-detail-card-content .account-detail-card-content__static {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding-right: 16px;\n}\n.account-detail-card .account-detail-card-content .account-detail-card-content__status {\n  display: flex;\n  padding-left: 16px;\n  flex: 1;\n  flex-direction: column;\n}\n.account-detail-card .account-detail-card-content .account-detail-card-content__line {\n  display: flex;\n  padding-bottom: 8px;\n}\n.account-detail-card .account-detail-card-content .account-detail-card-content__line .account-detail-card-content__line-title {\n  min-width: 196px;\n}\n@media all and (max-width: 600px) {\n  .account-detail-card .account-detail-card-content {\n    flex-direction: column;\n  }\n  .account-detail-card .account-detail-card-content mat-divider {\n    display: none;\n  }\n  .account-detail-card .account-detail-card-content .account-detail-card-content__status {\n    padding-top: 8px;\n    padding-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWRldGFpbC1jYXJkL0M6XFxVc2Vyc1xcdTcyMjY4NlxcRmluYXN0cmFcXGZmZGMtc2FtcGxlLXJldGFpbC13ZWJhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFjY291bnQtZGV0YWlsLWNhcmRcXGFjY291bnQtZGV0YWlsLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC1kZXRhaWwtY2FyZC9hY2NvdW50LWRldGFpbC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUNBSjtBREVFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NOO0FERUU7RUFDRSxhQUFBO0FDQUo7QURDSTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NOO0FEQ0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7QUNDTjtBRENJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ047QURBTTtFQUNFLGdCQUFBO0FDRVI7QURJRTtFQUNFO0lBQ0Usc0JBQUE7RUNGSjtFREdJO0lBQ0UsYUFBQTtFQ0ROO0VER0k7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC1kZXRhaWwtY2FyZC9hY2NvdW50LWRldGFpbC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtZGV0YWlsLWNhcmQge1xyXG4gIG1hdC1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNjI5cHg7XHJcbiAgfVxyXG4gIC5hY2NvdW50LWNhcmQtZGV0YWlsLXN1bW1hcnkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmFjY291bnQtY2FyZC1kZXRhaWwtc3VtbWFyeS1pbmZvIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnRfX3N0YXRpYyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19zdGF0dXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19saW5lIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudF9fbGluZS10aXRsZSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxOTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWF0LWRpdmlkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudF9fc3RhdHVzIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnRfX2xpbmUge1xyXG4gICAgICAvLyAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCIuYWNjb3VudC1kZXRhaWwtY2FyZCBtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNjI5cHg7XG59XG4uYWNjb3VudC1kZXRhaWwtY2FyZCAuYWNjb3VudC1jYXJkLWRldGFpbC1zdW1tYXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFjY291bnQtZGV0YWlsLWNhcmQgLmFjY291bnQtY2FyZC1kZXRhaWwtc3VtbWFyeSAuYWNjb3VudC1jYXJkLWRldGFpbC1zdW1tYXJ5LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYWNjb3VudC1kZXRhaWwtY2FyZCAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hY2NvdW50LWRldGFpbC1jYXJkIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudF9fc3RhdGljIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cbi5hY2NvdW50LWRldGFpbC1jYXJkIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudF9fc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmFjY291bnQtZGV0YWlsLWNhcmQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudCAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi5hY2NvdW50LWRldGFpbC1jYXJkIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudF9fbGluZSAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19saW5lLXRpdGxlIHtcbiAgbWluLXdpZHRoOiAxOTZweDtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hY2NvdW50LWRldGFpbC1jYXJkIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmFjY291bnQtZGV0YWlsLWNhcmQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudCBtYXQtZGl2aWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWNjb3VudC1kZXRhaWwtY2FyZCAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50IC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnRfX3N0YXR1cyB7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxufSJdfQ== */"

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

module.exports = ".account-detail-page {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding-bottom: 32px;\n}\n.account-detail-page .acount-detail-page-overview {\n  display: flex;\n  flex-grow: 100%;\n  margin-bottom: 32px;\n  padding: 32px 64px 32px 64px;\n  flex-direction: column;\n}\n.account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info {\n  display: flex;\n  padding-top: 32px;\n  align-items: center;\n}\n.account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info .acount-detail-page-overview-info-detail {\n  display: flex;\n  flex-direction: column;\n  padding-right: 64px;\n}\n.account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info .acount-detail-page-overview-info-detail .uxg-subtitle-2 {\n  padding-bottom: 8px;\n  margin-top: 16px;\n}\n.account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info .acount-detail-page-overview-info-action {\n  display: flex;\n  min-width: 196px;\n  justify-content: space-between;\n}\n.account-detail-page .account-page-detail-page-content {\n  display: flex;\n  padding-left: 32px;\n  padding-right: 64px;\n}\n.account-detail-page .account-page-detail-page-content .account-page-detail-page-content-column {\n  display: flex;\n  flex-direction: column;\n  flex: 50%;\n  padding-left: 32px;\n}\n@media all and (max-width: 600px) {\n  .account-detail-page .acount-detail-page-overview {\n    padding: 16px 32px 16px 32px;\n  }\n  .account-detail-page .acount-detail-page-overview .round-icon {\n    display: none;\n  }\n  .account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info {\n    padding-top: 8px;\n    flex-direction: column;\n    align-items: end;\n  }\n  .account-detail-page .account-page-detail-page-content {\n    padding-left: 16px;\n    padding-right: 16px;\n    flex-direction: column;\n  }\n  .account-detail-page .account-page-detail-page-content .account-page-detail-page-content-column {\n    flex: 1;\n    padding-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9hY2NvdW50LWRldGFpbC1wYWdlL0M6XFxVc2Vyc1xcdTcyMjY4NlxcRmluYXN0cmFcXGZmZGMtc2FtcGxlLXJldGFpbC13ZWJhcHAvc3JjXFxhcHBcXGNvbnRhaW5lcnNcXGFjY291bnQtZGV0YWlsLXBhZ2VcXGFjY291bnQtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhaW5lcnMvYWNjb3VudC1kZXRhaWwtcGFnZS9hY2NvdW50LWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDRUo7QURESTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDR047QURGTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDSVI7QURIUTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNLVjtBREZNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUNJUjtBREFFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDR047QURDRTtFQUNFO0lBQ0UsNEJBQUE7RUNDSjtFRENJO0lBQ0UsYUFBQTtFQ0NOO0VERUk7SUFDRSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7RUNBTjtFREdFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0VDREo7RURFSTtJQUNFLE9BQUE7SUFDQSxpQkFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2FjY291bnQtZGV0YWlsLXBhZ2UvYWNjb3VudC1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvdW50LWRldGFpbC1wYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuICAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgcGFkZGluZzogMzJweCA2NHB4IDMycHggNjRweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzJweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvLWRldGFpbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDY0cHg7XHJcbiAgICAgICAgLnV4Zy1zdWJ0aXRsZS0yICB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvLWFjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtaW4td2lkdGg6IDE5NnB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDY0cHg7XHJcbiAgICAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQtY29sdW1uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZmxleDogNTAlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldyB7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMzJweCAxNnB4IDMycHg7XHJcblxyXG4gICAgICAucm91bmQtaWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFjY291bnQtcGFnZS1kZXRhaWwtcGFnZS1jb250ZW50IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQtY29sdW1uIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCIuYWNjb3VudC1kZXRhaWwtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuLmFjY291bnQtZGV0YWlsLXBhZ2UgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgcGFkZGluZzogMzJweCA2NHB4IDMycHggNjRweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hY2NvdW50LWRldGFpbC1wYWdlIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXcgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDMycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWNjb3VudC1kZXRhaWwtcGFnZSAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3IC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXctaW5mbyAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8tZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1yaWdodDogNjRweDtcbn1cbi5hY2NvdW50LWRldGFpbC1wYWdlIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXcgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXctaW5mby1kZXRhaWwgLnV4Zy1zdWJ0aXRsZS0yIHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5hY2NvdW50LWRldGFpbC1wYWdlIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXcgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXctaW5mby1hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDE5NnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYWNjb3VudC1kZXRhaWwtcGFnZSAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDY0cHg7XG59XG4uYWNjb3VudC1kZXRhaWwtcGFnZSAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQgLmFjY291bnQtcGFnZS1kZXRhaWwtcGFnZS1jb250ZW50LWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDUwJTtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFjY291bnQtZGV0YWlsLXBhZ2UgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldyB7XG4gICAgcGFkZGluZzogMTZweCAzMnB4IDE2cHggMzJweDtcbiAgfVxuICAuYWNjb3VudC1kZXRhaWwtcGFnZSAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3IC5yb3VuZC1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hY2NvdW50LWRldGFpbC1wYWdlIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXcgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgfVxuICAuYWNjb3VudC1kZXRhaWwtcGFnZSAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmFjY291bnQtZGV0YWlsLXBhZ2UgLmFjY291bnQtcGFnZS1kZXRhaWwtcGFnZS1jb250ZW50IC5hY2NvdW50LXBhZ2UtZGV0YWlsLXBhZ2UtY29udGVudC1jb2x1bW4ge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbn0iXX0= */"

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
                console.log("account", this.account);
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
//# sourceMappingURL=containers-account-detail-page-account-detail-page-module.js.map