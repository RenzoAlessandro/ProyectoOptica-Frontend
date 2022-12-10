"use strict";
(self["webpackChunkminible_ng"] = self["webpackChunkminible_ng"] || []).push([["src_app_pages_email_email_module_ts"],{

/***/ 37315:
/*!*****************************************************!*\
  !*** ./src/app/pages/email/email-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailRoutingModule": () => (/* binding */ EmailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox/inbox.component */ 28932);
/* harmony import */ var _emailread_emailread_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emailread/emailread.component */ 6260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: 'inbox',
        component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_0__.InboxComponent
    },
    {
        path: 'read/:id',
        component: _emailread_emailread_component__WEBPACK_IMPORTED_MODULE_1__.EmailreadComponent
    }
];
class EmailRoutingModule {
}
EmailRoutingModule.ɵfac = function EmailRoutingModule_Factory(t) { return new (t || EmailRoutingModule)(); };
EmailRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmailRoutingModule });
EmailRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 55701:
/*!*********************************************!*\
  !*** ./src/app/pages/email/email.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailModule": () => (/* binding */ EmailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 52386);
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox/inbox.component */ 28932);
/* harmony import */ var _emailread_emailread_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emailread/emailread.component */ 6260);
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-routing.module */ 37315);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/ui.module */ 63091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);









class EmailModule {
}
EmailModule.ɵfac = function EmailModule_Factory(t) { return new (t || EmailModule)(); };
EmailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EmailModule });
EmailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
            _email_routing_module__WEBPACK_IMPORTED_MODULE_2__.EmailRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EmailModule, { declarations: [_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_0__.InboxComponent, _emailread_emailread_component__WEBPACK_IMPORTED_MODULE_1__.EmailreadComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
        _email_routing_module__WEBPACK_IMPORTED_MODULE_2__.EmailRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule] }); })();


/***/ }),

/***/ 6260:
/*!**************************************************************!*\
  !*** ./src/app/pages/email/emailread/emailread.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailreadComponent": () => (/* binding */ EmailreadComponent)
/* harmony export */ });
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ 72863);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inbox_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inbox/data */ 85643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 52386);








function EmailreadComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "New Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailreadComponent_ng_template_77_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const modal_r2 = restoredCtx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "ckeditor", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailreadComponent_ng_template_77_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const modal_r2 = restoredCtx.$implicit; return modal_r2.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editor", ctx_r1.Editor);
} }
const _c0 = function () { return ["../../inbox"]; };
/**
 * Email read Component
 */
class EmailreadComponent {
    constructor(route, modalService) {
        this.route = route;
        this.modalService = modalService;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__;
        this.route.params.subscribe(params => {
            this.emailRead = _inbox_data__WEBPACK_IMPORTED_MODULE_1__.emailData.filter((email) => {
                // tslint:disable-next-line: radix
                return email.id === parseInt(params.id);
            });
            this.index = params.id;
        });
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Email' }, { label: 'Read', active: true }];
    }
    open(content) {
        this.modalService.open(content, { centered: true });
    }
}
EmailreadComponent.ɵfac = function EmailreadComponent_Factory(t) { return new (t || EmailreadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal)); };
EmailreadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EmailreadComponent, selectors: [["app-emailread"]], decls: 161, vars: 15, consts: [[1, "container-fluid"], ["title", "Read Email", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "email-leftbar", "card"], ["type", "button", "data-toggle", "modal", "data-target", "#composemodal", 1, "btn", "btn-danger", "btn-block", 3, "click"], [1, "mail-list", "mt-4"], [1, "active", 3, "routerLink"], [1, "mdi", "mdi-email-outline", "font-size-16", "align-middle", "me-2"], [1, "ms-1", "float-end"], [3, "routerLink"], [1, "mdi", "mdi-star-outline", "font-size-16", "align-middle", "me-2"], [1, "mdi", "mdi-diamond-stone", "font-size-16", "align-middle", "me-2"], [1, "mdi", "mdi-file-outline", "font-size-16", "align-middle", "me-2"], [1, "mdi", "mdi-email-check-outline", "font-size-16", "align-middle", "me-2"], [1, "mdi", "mdi-trash-can-outline", "font-size-16", "align-middle", "me-2"], [1, "mt-4"], [1, "mail-list", "mt-1"], ["href", "javascript: void(0);"], [1, "mdi", "mdi-circle-outline", "text-info", "float-end"], [1, "mdi", "mdi-circle-outline", "text-warning", "float-end"], [1, "mdi", "mdi-circle-outline", "text-primary", "float-end"], [1, "mdi", "mdi-circle-outline", "text-danger", "float-end"], [1, "mdi", "mdi-circle-outline", "text-success", "float-end"], [1, "mt-2"], ["href", "javascript: void(0);", 1, "d-flex", "align-items-start"], ["src", "assets/images/users/avatar-2.jpg", "alt", "Generic placeholder image", "height", "36", 1, "d-flex", "me-3", "rounded-circle"], [1, "flex-1", "chat-user-box", "overflow-hidden"], [1, "user-title", "m-0"], [1, "text-muted"], ["src", "assets/images/users/avatar-3.jpg", "alt", "Generic placeholder image", "height", "36", 1, "d-flex", "me-3", "rounded-circle"], ["src", "assets/images/users/avatar-4.jpg", "alt", "Generic placeholder image", "height", "36", 1, "d-flex", "me-3", "rounded-circle"], ["src", "assets/images/users/avatar-6.jpg", "alt", "Generic placeholder image", "height", "36", 1, "d-flex", "me-3", "rounded-circle"], ["content", ""], [1, "email-rightbar", "mb-3"], [1, "card"], ["role", "toolbar", 1, "btn-toolbar", "p-3"], [1, "btn-group", "me-2", "mb-2", "mb-sm-0"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-inbox"], [1, "fa", "fa-exclamation-circle"], [1, "far", "fa-trash-alt"], ["ngbDropdown", "", 1, "btn-group", "me-2", "mb-2", "mb-sm-0"], ["type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "fa", "fa-folder"], [1, "mdi", "mdi-chevron-down", "ms-1"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "fa", "fa-tag"], [1, "mdi", "mdi-dots-vertical", "ms-2"], ["type", "button", 1, "dropdown-item"], [1, "card-body"], [1, "d-flex", "align-items-start", "mb-4"], ["src", "assets/images/users/avatar-2.jpg", "alt", "Generic placeholder image", 1, "d-flex", "me-3", "rounded-circle", "avatar-sm"], [1, "flex-1"], [1, "font-size-14", "my-1"], [1, "mt-0", "font-size-16"], [1, "col-xl-2", "col-6"], ["src", "assets/images/small/img-3.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], [1, "py-2", "text-center"], ["href", "assets/images/small/img-3.jpg", "download", "", 1, "fw-medium"], ["src", "assets/images/small/img-4.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], ["href", "/assets/images/small/img-4.jpg", "download", "", 1, "fw-medium"], ["href", "javascript: void(0);", 1, "btn", "btn-secondary", "mt-4"], [1, "mdi", "mdi-reply"], [1, "modal-header"], ["id", "composemodalTitle", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["type", "email", "placeholder", "To", 1, "form-control"], ["type", "text", "placeholder", "Subject", 1, "form-control"], ["data", "<p>Content of the editor.</p>", 3, "editor"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fab", "fa-telegram-plane", "ms-1"]], template: function EmailreadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailreadComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](78); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Compose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "(18)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Sent Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Theme Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Freelance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Scott Median");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Julian Rosa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "What about our next..");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "David Medina");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Yeah everything is fine");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Jay Baker");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Wow that's great");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](77, EmailreadComponent_ng_template_77_Template, 18, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Team Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Team Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Mark as Unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Mark as Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Add to Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Add Star");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Mute");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Humberto D. Champion");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "small", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "support@domain.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "h4", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Dear Lorem Ipsum,");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Sincerly,");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](144, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](154, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.emailRead[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.emailRead[0].subject, " ");
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbHJlYWQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 85643:
/*!*******************************************!*\
  !*** ./src/app/pages/email/inbox/data.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailData": () => (/* binding */ emailData)
/* harmony export */ });
const emailData = [
    {
        id: 1,
        title: 'Peter, me (3)',
        // tslint:disable-next-line: max-line-length
        subject: 'Hello – Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)',
        date: 'Mar 6'
    }, {
        id: 2,
        title: 'me, Susanna (7)',
        // tslint:disable-next-line: max-line-length
        text: 'Freelance',
        subject: 'Since you asked... and i\'m inconceivably bored at the train station – Alright thanks. I\'ll have to re-book that somehow, i\'ll get back to you.',
        date: 'Mar 6'
    }, {
        id: 3,
        title: 'Web Support Dennis',
        // tslint:disable-next-line: max-line-length
        subject: 'Re: New mail settings – Will you answer him asap?',
        date: 'Mar 7'
    }, {
        id: 4,
        title: 'me, Peter (2)',
        // tslint:disable-next-line: max-line-length
        text: 'Support',
        subject: 'Off on Thursday - Eff that place, you might as well stay here with us instead! Sent from my iPhone 4  4 mar 2014 at 5:55 pm',
        date: 'Mar 4'
    }, {
        id: 5,
        title: 'Medium',
        // tslint:disable-next-line: max-line-length
        text: 'Social',
        subject: 'This Week\'s Top Stories – Our top pick for you on Medium this week The Man Who Destroyed America’s Ego.',
        date: 'Feb 28'
    }, {
        id: 6,
        title: 'Death to Stock',
        subject: 'Montly High-Res Photos – To create this month\'s pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.',
        date: 'Feb 28'
    }, {
        id: 7,
        title: 'Randy, me (5)',
        unread: true,
        // tslint:disable-next-line: max-line-length
        text: 'Family',
        subject: 'Last pic over my village – Yeah i\'d like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!',
        date: '5:01 am'
    }, {
        id: 8,
        title: 'Andrew Zimmer',
        // tslint:disable-next-line: max-line-length
        subject: 'Mochila Beta: Subscription Confirmed. You\'ve been confirmed! Welcome to the ruling class of the inbox. For your records, here is a copy of the information you submitted to us...',
        date: 'Mar 8'
    }, {
        id: 9,
        title: 'Infinity HR',
        subject: 'Sveriges Hetaste sommarjobb –Hej Nicklas Sandell! Vi vill bjuda in dig till "First tour 2014", ett rekryteringsevent som erbjuder jobb på 16 semesterorter iSverige.',
        date: 'Mar 8'
    }, {
        id: 10,
        title: 'Revibe',
        // tslint:disable-next-line: max-line-length
        text: 'Friends',
        subject: 'Weekend on Revibe – Today\'s Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!',
        date: 'Feb 27'
    }, {
        id: 11,
        title: 'Erik, me (5)',
        // tslint:disable-next-line: max-line-length
        subject: 'Regarding our meeting – That\'s great, see you on Thursday!',
        date: 'Feb 24'
    }, {
        id: 12,
        title: 'KanbanFlow',
        // tslint:disable-next-line: max-line-length
        text: 'Social',
        subject: 'Task assigned: Clone ARP\'s website – You have been assigned a task by Alex@Work on the board Web.',
        date: 'Feb 24'
    }, {
        id: 13,
        title: 'Tobias Berggren',
        // tslint:disable-next-line: max-line-length
        subject: 'Let\'s go fishing! – Hey, You wanna join me and Fred at the lake tomorrow? It\'ll be awesome.',
        date: 'Feb 23'
    }, {
        id: 14,
        title: 'Charukaw, me (7)',
        // tslint:disable-next-line: max-line-length
        subject: 'Hey man – Nah man sorry i don\'t. Should i get it?',
        date: 'Feb 23'
    }, {
        id: 15,
        title: 'me, Peter (5)',
        unread: true,
        // tslint:disable-next-line: max-line-length
        text: 'Support',
        subject: 'Home again! – That\'s just perfect! See you tomorrow',
        date: 'Feb 21'
    }, {
        id: 16,
        title: 'Stack Exchange',
        subject: '1 new items in your Stackexchange inbox - The following items were added to your Stack Exchange global inbox since you last checked it.',
        date: 'Feb 21'
    }, {
        id: 17,
        title: 'Google Drive Team',
        // tslint:disable-next-line: max-line-length
        subject: 'You can now use your storage in Google Drive – Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.',
        date: 'Feb 20'
    }, {
        id: 18,
        title: 'me, Susanna (11)r',
        // tslint:disable-next-line: max-line-length
        subject: 'Train/Bus – Yes ok, great! I\'m not stuck in Stockholm anymore, we\'re making progress.',
        date: 'Feb 19'
    }
];



/***/ }),

/***/ 28932:
/*!******************************************************!*\
  !*** ./src/app/pages/email/inbox/inbox.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxComponent": () => (/* binding */ InboxComponent)
/* harmony export */ });
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ 72863);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ 85643);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 52386);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);










function InboxComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "New Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InboxComponent_ng_template_77_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const modal_r3 = restoredCtx.$implicit; return modal_r3.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ckeditor", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InboxComponent_ng_template_77_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const modal_r3 = restoredCtx.$implicit; return modal_r3.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("editor", ctx_r1.Editor);
} }
function InboxComponent_li_127_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const email_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](email_r7.text);
} }
function InboxComponent_li_127_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const email_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](email_r7.text);
} }
function InboxComponent_li_127_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const email_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](email_r7.text);
} }
function InboxComponent_li_127_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const email_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](email_r7.text);
} }
function InboxComponent_li_127_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const email_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](email_r7.text);
} }
const _c0 = function (a0) { return { "unread": a0 }; };
const _c1 = function (a1) { return ["../read", a1]; };
function InboxComponent_li_127_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function InboxComponent_li_127_Template_input_change_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const email_r7 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.selectMail($event, email_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, InboxComponent_li_127_span_10_Template, 2, 1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, InboxComponent_li_127_span_11_Template, 2, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, InboxComponent_li_127_span_12_Template, 2, 1, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, InboxComponent_li_127_span_13_Template, 2, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, InboxComponent_li_127_span_14_Template, 2, 1, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const email_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, email_r7.unread === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "chk-", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("for", "chk-", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c1, email_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](email_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c1, email_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", email_r7.text == "Freelance");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", email_r7.text == "Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", email_r7.text == "Social");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", email_r7.text == "Family");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", email_r7.text == "Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", email_r7.subject, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](email_r7.date);
} }
/**
 * Email Inbox component
 */
class InboxComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__;
        this.emailIds = [];
        // page number
        this.page = 1;
        // default page size
        this.pageSize = 15;
        // total number of records
        this.totalRecords = 0;
        // start and end index
        this.startIndex = 1;
        this.endIndex = 15;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Email' }, { label: 'Inbox', active: true }];
        this.emailData = _data__WEBPACK_IMPORTED_MODULE_1__.emailData;
        this.totalRecords = _data__WEBPACK_IMPORTED_MODULE_1__.emailData.length;
    }
    open(content) {
        this.modalService.open(content, { centered: true });
    }
    markUnread() {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.emailIds.length; i++) {
            const obj = this.emailData.find(o => o.id === this.emailIds[i]);
            const index = this.emailData.indexOf(obj);
            this.emailData[index].unread = true;
        }
        this.emailIds = [];
    }
    selectMail(event, id) {
        if (event.target.checked) {
            this.emailIds.push(id);
        }
        else {
            this.emailIds.splice(this.emailIds.indexOf(id), 1);
        }
    }
    deleteMail() {
        const found = this.emailData.some(r => this.emailIds.indexOf(r.id) >= 0);
        if (found) {
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < this.emailIds.length; i++) {
                const obj = this.emailData.find(o => o.id === this.emailIds[i]);
                this.emailData.splice(this.emailData.indexOf(obj), 1);
            }
        }
        this.emailIds = [];
    }
    confirm() {
        if (this.emailIds.length > 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: 'Are you sure?',
                text: 'You won\'t be able to revert this!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#34c38f',
                cancelButtonColor: '#f46a6a',
                confirmButtonText: 'Yes, delete it!'
            }).then(result => {
                if (result.value) {
                    this.deleteMail();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Deleted!', 'Mail has been deleted.', 'success');
                }
            });
        }
    }
    /**
     * Handle on page click event
     */
    onPageChange(page) {
        this.startIndex = (page - 1) * this.pageSize + 1;
        this.endIndex = (page - 1) * this.pageSize + this.pageSize;
        if (this.endIndex > this.totalRecords) {
            this.endIndex = this.totalRecords;
        }
        this.emailData = _data__WEBPACK_IMPORTED_MODULE_1__.emailData.slice(this.startIndex - 1, this.endIndex - 1);
    }
}
InboxComponent.ɵfac = function InboxComponent_Factory(t) { return new (t || InboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal)); };
InboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: InboxComponent, selectors: [["app-inbox"]], decls: 135, vars: 12, consts: [[1, "container-fluid"], ["title", "Inbox", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "email-leftbar", "card"], ["type", "button", 1, "btn", "btn-danger", "btn-block", "waves-effect", "waves-light", 3, "click"], [1, "mail-list", "mt-4"], ["href", "javascript: void(0);", 1, "active"], [1, "mdi", "mdi-email-outline", "font-size-16", "align-middle", "me-2"], [1, "ms-1", "float-end"], ["href", "javascript: void(0);"], [1, "mdi", "mdi-star-outline", "font-size-16", "align-middle", "me-2"], [1, "mdi", "mdi-diamond-stone", "font-size-16", "align-middle", "me-2"], [1, "mdi", "mdi-file-outline", "font-size-16", "align-middle", "me-2"], [1, "mdi", "mdi-email-check-outline", "font-size-16", "align-middle", "me-2"], [1, "mdi", "mdi-trash-can-outline", "font-size-16", "align-middle", "me-2"], [1, "mt-4"], [1, "mail-list", "mt-1"], [1, "mdi", "mdi-circle-outline", "text-info", "float-end"], [1, "mdi", "mdi-circle-outline", "text-warning", "float-end"], [1, "mdi", "mdi-circle-outline", "text-primary", "float-end"], [1, "mdi", "mdi-circle-outline", "text-danger", "float-end"], [1, "mdi", "mdi-circle-outline", "text-success", "float-end"], [1, "mt-2"], ["href", "javascript: void(0);", 1, "d-flex", "align-items-start"], ["src", "assets/images/users/avatar-2.jpg", "alt", "Generic placeholder image", "height", "36", 1, "d-flex", "me-3", "rounded-circle"], [1, "flex-1", "chat-user-box", "overflow-hidden"], [1, "user-title", "m-0"], [1, "text-muted"], ["src", "assets/images/users/avatar-3.jpg", "alt", "Generic placeholder image", "height", "36", 1, "d-flex", "me-3", "rounded-circle"], ["src", "assets/images/users/avatar-4.jpg", "alt", "Generic placeholder image", "height", "36", 1, "d-flex", "me-3", "rounded-circle"], ["src", "assets/images/users/avatar-6.jpg", "alt", "Generic placeholder image", "height", "36", 1, "d-flex", "me-3", "rounded-circle"], ["content", ""], [1, "email-rightbar", "mb-3"], [1, "card"], ["role", "toolbar", 1, "btn-toolbar", "p-3"], [1, "btn-group", "me-2", "mb-2", "mb-sm-0"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-inbox"], [1, "fa", "fa-exclamation-circle"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "far", "fa-trash-alt"], ["ngbDropdown", "", 1, "btn-group", "me-2", "mb-2", "mb-sm-0"], ["type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "fa", "fa-folder"], [1, "mdi", "mdi-chevron-down", "ms-1"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "fa", "fa-tag"], [1, "mdi", "mdi-dots-vertical", "ms-2"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "click"], [1, "message-list"], ["class", "unread", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-md-between", "align-items-md-center"], [1, "col-7"], [1, "col-5"], [1, "text-md-end", "float-md-end", "mt-2"], [1, "pagination-rounded", 3, "collectionSize", "page", "pageSize", "pageChange"], [1, "modal-header"], ["id", "composemodalTitle", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["type", "email", "placeholder", "To", 1, "form-control"], ["type", "text", "placeholder", "Subject", 1, "form-control"], ["data", "<h6>Content of the editor.</h6>\n                 ", 3, "editor"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fab", "fa-telegram-plane", "ms-1"], [1, "unread", 3, "ngClass"], [1, "col-mail", "col-mail-1"], [1, "checkbox-wrapper-mail"], ["type", "checkbox", 3, "id", "change"], [3, "for"], [1, "title", 3, "routerLink"], [1, "star-toggle", "far", "fa-star"], [1, "col-mail", "col-mail-2"], [1, "subject", 3, "routerLink"], ["class", "bg-warning badge me-2", 4, "ngIf"], ["class", "bg-info badge me-2", 4, "ngIf"], ["class", "bg-primary badge me-2", 4, "ngIf"], ["class", "bg-success badge me-2", 4, "ngIf"], ["class", "bg-danger badge me-2", 4, "ngIf"], [1, "date"], [1, "bg-warning", "badge", "me-2"], [1, "bg-info", "badge", "me-2"], [1, "bg-primary", "badge", "me-2"], [1, "bg-success", "badge", "me-2"], [1, "bg-danger", "badge", "me-2"]], template: function InboxComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InboxComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](78); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Compose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "(18)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Sent Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Theme Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Freelance");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Scott Median");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Julian Rosa");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "What about our next..");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "David Medina");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Yeah everything is fine");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Jay Baker");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Wow that's great");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, InboxComponent_ng_template_77_Template, 18, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InboxComponent_Template_button_click_87_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](91, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "Team Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](102, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "Team Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, " More");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_116_listener() { return ctx.markUnread(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "Mark as Unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Mark as Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "Add to Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "Add Star");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "Mute");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "ul", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](127, InboxComponent_li_127_Template, 18, 19, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](128, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "ngb-pagination", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function InboxComponent_Template_ngb_pagination_pageChange_134_listener($event) { return ctx.onPageChange($event); })("pageChange", function InboxComponent_Template_ngb_pagination_pageChange_134_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](128, 8, ctx.emailData, 0, 15));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Showing ", ctx.startIndex, " - ", ctx.endIndex, " of ", ctx.totalRecords, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", ctx.totalRecords)("page", ctx.page)("pageSize", ctx.pageSize);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPagination, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__.CKEditorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmJveC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_email_email_module_ts.js.map