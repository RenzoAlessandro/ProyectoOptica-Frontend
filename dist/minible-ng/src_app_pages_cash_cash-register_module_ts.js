"use strict";
(self["webpackChunkminible_ng"] = self["webpackChunkminible_ng"] || []).push([["src_app_pages_cash_cash-register_module_ts"],{

/***/ 2974:
/*!*******************************************!*\
  !*** ./src/app/directives/role.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var _role_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role.directive */ 48185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


class DirectivesModule {
}
DirectivesModule.ɵfac = function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); };
DirectivesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DirectivesModule });
DirectivesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DirectivesModule, { declarations: [_role_directive__WEBPACK_IMPORTED_MODULE_0__.RoleDirective], exports: [_role_directive__WEBPACK_IMPORTED_MODULE_0__.RoleDirective] }); })();


/***/ }),

/***/ 90975:
/*!************************************************************!*\
  !*** ./src/app/pages/cash/cash-register-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashRegisterRoutingModule": () => (/* binding */ CashRegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 85298);
/* harmony import */ var _cash_register_cash_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cash-register/cash-register.component */ 52141);
/* harmony import */ var _list_cash_list_cash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-cash/list-cash.component */ 88632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);






const routes = [
    {
        path: 'cashregister',
        component: _cash_register_cash_register_component__WEBPACK_IMPORTED_MODULE_1__.CashRegisterComponent,
        data: {
            role: ['Vendedor', 'Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'listcash',
        component: _list_cash_list_cash_component__WEBPACK_IMPORTED_MODULE_2__.ListCashComponent,
        data: {
            role: ['Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
];
class CashRegisterRoutingModule {
}
CashRegisterRoutingModule.ɵfac = function CashRegisterRoutingModule_Factory(t) { return new (t || CashRegisterRoutingModule)(); };
CashRegisterRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CashRegisterRoutingModule });
CashRegisterRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CashRegisterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 42673:
/*!****************************************************!*\
  !*** ./src/app/pages/cash/cash-register.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashRegisterModule": () => (/* binding */ CashRegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _cash_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash-register-routing.module */ 90975);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ui/ui.module */ 63091);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng5-slider */ 38391);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 68346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 85362);
/* harmony import */ var _cash_register_cash_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cash-register/cash-register.component */ 52141);
/* harmony import */ var _list_cash_list_cash_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-cash/list-cash.component */ 88632);
/* harmony import */ var src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/directives/role.module */ 2974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);














class CashRegisterModule {
}
CashRegisterModule.ɵfac = function CashRegisterModule_Factory(t) { return new (t || CashRegisterModule)(); };
CashRegisterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CashRegisterModule });
CashRegisterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__.DROPZONE_CONFIG,
            useValue: rxjs__WEBPACK_IMPORTED_MODULE_9__.config
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _cash_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.CashRegisterRoutingModule,
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__.DropzoneModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPaginationModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            ng5_slider__WEBPACK_IMPORTED_MODULE_3__.Ng5SliderModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbCollapseModule,
            src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_6__.DirectivesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CashRegisterModule, { declarations: [_cash_register_cash_register_component__WEBPACK_IMPORTED_MODULE_4__.CashRegisterComponent, _list_cash_list_cash_component__WEBPACK_IMPORTED_MODULE_5__.ListCashComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _cash_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.CashRegisterRoutingModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__.DropzoneModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPaginationModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
        ng5_slider__WEBPACK_IMPORTED_MODULE_3__.Ng5SliderModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTypeaheadModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbCollapseModule,
        src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_6__.DirectivesModule] }); })();


/***/ }),

/***/ 52141:
/*!*********************************************************************!*\
  !*** ./src/app/pages/cash/cash-register/cash-register.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashRegisterComponent": () => (/* binding */ CashRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortable.directive */ 28790);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_models_caja__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/caja */ 81427);
/* harmony import */ var _listIngresos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listIngresos.service */ 20015);
/* harmony import */ var _listEgresos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listEgresos.service */ 642);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_services_caja_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/caja.service */ 90835);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _directives_role_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../directives/role.directive */ 48185);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);



















function CashRegisterComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ng-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function CashRegisterComponent_div_12_Template_ng_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r7.changeSede(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r0.formSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r0.nombre_sedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx_r0.listSedes);
} }
function CashRegisterComponent_tr_73_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CashRegisterComponent_tr_73_Template_a_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const data_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r10.eliminarIngreso(data_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 10, data_r9.monto, "S/ "))("term", ctx_r1.serviceI.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", data_r9.metodo_pago)("term", ctx_r1.serviceI.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", data_r9.descripcion)("term", ctx_r1.serviceI.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", data_r9.fecha_creacion_caja)("term", ctx_r1.serviceI.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", "-")("term", ctx_r1.serviceI.searchTerm);
} }
function CashRegisterComponent_tr_139_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CashRegisterComponent_tr_139_Template_a_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const data_r12 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r13.eliminarIngreso(data_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 10, data_r12.monto, "S/ "))("term", ctx_r2.serviceE.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", data_r12.metodo_pago)("term", ctx_r2.serviceE.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", data_r12.descripcion)("term", ctx_r2.serviceE.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", data_r12.fecha_creacion_caja)("term", ctx_r2.serviceE.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", "-")("term", ctx_r2.serviceE.searchTerm);
} }
function CashRegisterComponent_ng_template_146_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CashRegisterComponent_ng_template_146_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CashRegisterComponent_ng_template_146_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CashRegisterComponent_ng_template_146_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CashRegisterComponent_ng_template_146_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " La descripci\u00F3n debe ser menor a 50 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function CashRegisterComponent_ng_template_146_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Nuevo Ingreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CashRegisterComponent_ng_template_146_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r21.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, CashRegisterComponent_ng_template_146_div_13_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, CashRegisterComponent_ng_template_146_div_14_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "ng-select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, CashRegisterComponent_ng_template_146_div_21_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "textarea", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, CashRegisterComponent_ng_template_146_div_30_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, CashRegisterComponent_ng_template_146_div_31_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CashRegisterComponent_ng_template_146_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r23.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CashRegisterComponent_ng_template_146_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r24.guardarIngreso(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r4.formIngreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.monto_ingreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](14, _c0, ctx_r4.formCI.campoMontoIngreso.invalid && (ctx_r4.formCI.campoMontoIngreso.dirty || ctx_r4.formCI.campoMontoIngreso.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.formCI.campoMontoIngreso.errors == null ? null : ctx_r4.formCI.campoMontoIngreso.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.formCI.campoMontoIngreso.errors == null ? null : ctx_r4.formCI.campoMontoIngreso.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.metodoPagoContado_ingreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx_r4.listMetodosPagos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](16, _c0, ctx_r4.formCI.campoMetodoPagoContadoIngreso.invalid && (ctx_r4.formCI.campoMetodoPagoContadoIngreso.dirty || ctx_r4.formCI.campoMetodoPagoContadoIngreso.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.formCI.campoMetodoPagoContadoIngreso.errors == null ? null : ctx_r4.formCI.campoMetodoPagoContadoIngreso.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.descripcion_ingreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](18, _c0, ctx_r4.formCI.campoDescripcionIngreso.invalid && (ctx_r4.formCI.campoDescripcionIngreso.dirty || ctx_r4.formCI.campoDescripcionIngreso.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.formCI.campoDescripcionIngreso.errors == null ? null : ctx_r4.formCI.campoDescripcionIngreso.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.formCI.campoDescripcionIngreso.errors == null ? null : ctx_r4.formCI.campoDescripcionIngreso.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r4.formIngreso.valid);
} }
function CashRegisterComponent_ng_template_148_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CashRegisterComponent_ng_template_148_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CashRegisterComponent_ng_template_148_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CashRegisterComponent_ng_template_148_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CashRegisterComponent_ng_template_148_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " La descripci\u00F3n debe ser menor a 50 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CashRegisterComponent_ng_template_148_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Nuevo Egreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CashRegisterComponent_ng_template_148_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r31.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, CashRegisterComponent_ng_template_148_div_13_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, CashRegisterComponent_ng_template_148_div_14_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "ng-select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, CashRegisterComponent_ng_template_148_div_21_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "textarea", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, CashRegisterComponent_ng_template_148_div_30_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, CashRegisterComponent_ng_template_148_div_31_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CashRegisterComponent_ng_template_148_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r33.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CashRegisterComponent_ng_template_148_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r34.guardarEgreso(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r6.formEgreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r6.monto_egreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](14, _c0, ctx_r6.formCE.campoMontoEgreso.invalid && (ctx_r6.formCE.campoMontoEgreso.dirty || ctx_r6.formCE.campoMontoEgreso.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.formCE.campoMontoEgreso.errors == null ? null : ctx_r6.formCE.campoMontoEgreso.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.formCE.campoMontoEgreso.errors == null ? null : ctx_r6.formCE.campoMontoEgreso.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r6.metodoPagoContado_egreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx_r6.listMetodosPagos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](16, _c0, ctx_r6.formCE.campoMetodoPagoContadoEgreso.invalid && (ctx_r6.formCE.campoMetodoPagoContadoEgreso.dirty || ctx_r6.formCE.campoMetodoPagoContadoEgreso.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.formCE.campoMetodoPagoContadoEgreso.errors == null ? null : ctx_r6.formCE.campoMetodoPagoContadoEgreso.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r6.descripcion_egreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](18, _c0, ctx_r6.formCE.campoDescripcionEgreso.invalid && (ctx_r6.formCE.campoDescripcionEgreso.dirty || ctx_r6.formCE.campoDescripcionEgreso.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.formCE.campoDescripcionEgreso.errors == null ? null : ctx_r6.formCE.campoDescripcionEgreso.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r6.formCE.campoDescripcionEgreso.errors == null ? null : ctx_r6.formCE.campoDescripcionEgreso.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r6.formEgreso.valid);
} }
class CashRegisterComponent {
    constructor(serviceI, serviceE, modalService, formBuilder, cajaService, usuarioService) {
        this.serviceI = serviceI;
        this.serviceE = serviceE;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.cajaService = cajaService;
        this.usuarioService = usuarioService;
        this.role = 'Admin';
        this.nombre_sedes = "campoSede";
        this.idSede = "";
        this.submitted = false;
        this.monto_ingreso = "campoMontoIngreso";
        this.fecha_ingreso = "campoFechaIngreso";
        this.descripcion_ingreso = "campoDescripcionIngreso";
        this.metodoPagoContado_ingreso = "campoMetodoPagoContadoIngreso";
        this.monto_egreso = "campoMontoEgreso";
        this.fecha_egreso = "campoFechaEgreso";
        this.descripcion_egreso = "campoDescripcionEgreso";
        this.metodoPagoContado_egreso = "campoMetodoPagoContadoEgreso";
        this.listMetodosPagos = ['Físico', 'Yape', 'Plin', 'Interbancario'];
        this.exampleOptions = {
            defaultDate: '',
            altInputClass: 'form-control'
        };
        this.hideme = [];
        this.eFisico = 0;
        this.eVirtual = 0;
        this.iFisico = 0;
        this.iVirtual = 0;
        this.numberDecimalPattern = /^\d+(\.\d{1,2})?$/;
        this.caja = new src_models_caja__WEBPACK_IMPORTED_MODULE_1__.CajaModel;
        this.ingresos$ = serviceI.ingreso$;
        this.total$ = serviceI.totalI$;
        this.egresos$ = serviceE.egresos$;
        this.totalE$ = serviceE.totalE$;
        let fIni = new Date(Date.now());
        fIni.setHours(0, 0, 1);
        let fFin = new Date(Date.now());
        fFin.setHours(23, 59, 0);
        this.cajaService.getEgresosbyDate(fIni, fFin, this.usuarioService.getSedebyUser()).subscribe(res => {
            this.eFisico = 0;
            this.eVirtual = 0;
            this.egresoTotal = res.reduce((acc, obj) => { return acc + obj.monto; }, 0);
            res.forEach(element => {
                if (element.metodo_pago == 'Físico') {
                    this.eFisico += element.monto;
                }
                else {
                    this.eVirtual += element.monto;
                }
            });
        });
        this.cajaService.getIngresosbyDate(fIni, fFin, this.usuarioService.getSedebyUser()).subscribe(res => {
            this.iFisico = 0;
            this.iVirtual = 0;
            this.ingresoTotal = res.reduce((acc, obj) => { return acc + obj.monto; }, 0);
            res.forEach(element => {
                if (element.metodo_pago == 'Físico') {
                    this.iFisico += element.monto;
                }
                else {
                    this.iVirtual += element.monto;
                }
            });
        });
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Caja' }, { label: 'Registro de Ingreso y Egreso', active: true },];
        this.getListSedes();
        this.crearFormulario();
        this.selectedDate = new Date().getDate();
        this._fetchData();
    }
    getListSedes() {
        this.listSedes = JSON.parse(localStorage.getItem('sedes'));
        this.idSede = this.usuarioService.getSedebyUser();
    }
    crearFormulario() {
        this.formIngreso = this.formBuilder.group({
            [this.monto_ingreso]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(this.numberDecimalPattern)
                ]],
            [this.fecha_ingreso]: [],
            [this.descripcion_ingreso]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(50)
                ]],
            [this.metodoPagoContado_ingreso]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                ]],
        });
        this.formEgreso = this.formBuilder.group({
            [this.monto_egreso]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(this.numberDecimalPattern),
                ]],
            [this.fecha_egreso]: [],
            [this.descripcion_egreso]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(50)
                ]],
            [this.metodoPagoContado_egreso]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                ]],
        });
        this.formSedes = this.formBuilder.group({
            [this.nombre_sedes]: [this.idSede]
        });
    }
    /**
     * fetches the table value
     */
    _fetchData() {
        //this.listData = listData;
    }
    /**
     * Sort table data
     * @param param0 sort the column
     *
     */
    onSortI({ column, direction }) {
        // resetting other headers
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.serviceI.sortColumnI = column;
        this.serviceI.sortDirectionI = direction;
    }
    onSortE({ column, direction }) {
        // resetting other headers
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.serviceE.sortColumnE = column;
        this.serviceE.sortDirectionE = direction;
    }
    fS(campo) {
        return this.formSedes.get(campo);
    }
    changeSede() {
        this.idSede = this.fS(this.nombre_sedes).value;
        this.updateListIngresos(this.idSede);
        this.updateListEgresos(this.idSede);
    }
    /**
     * Open center modal
     * @param centerDataModal center modal data
     */
    centerModal(centerDataModal) {
        this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
    }
    /**
     * Delete event
     */
    deleteEventData() {
        this.editEvent.remove();
        this.modalService.dismissAll();
    }
    /**
     * Close event modal
     */
    closeEventModal() {
        this.modalService.dismissAll();
    }
    fI(campo) {
        return this.formIngreso.get(campo);
    }
    fE(campo) {
        return this.formEgreso.get(campo);
    }
    /**
     * Save the event
     */
    guardarIngreso() {
        if (this.formIngreso.valid) {
            this.caja.monto = Number(this.fI(this.monto_ingreso).value);
            this.caja.fecha_creacion_caja = new Date(Date.now());
            this.caja.encargado = this.usuarioService.getUser().id_usuario;
            this.caja.descripcion = this.fI(this.descripcion_ingreso).value;
            this.caja.id_sede = this.usuarioService.getSedebyUser();
            this.caja.habilitado = true;
            this.caja.egreso = false;
            this.caja.metodo_pago = this.fI(this.metodoPagoContado_ingreso).value;
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("loading", "Cargando...");
            this.cajaService.createIngresoEgreso(this.caja).subscribe(res => {
                this.updateListIngresos(this.idSede);
                this.formIngreso.reset();
                this.modalService.dismissAll();
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("close", null);
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("success", "Ingreso guardado");
            });
        }
        else {
        }
    }
    guardarEgreso() {
        if (this.formEgreso.valid) {
            this.caja.monto = Number(this.fE(this.monto_egreso).value);
            this.caja.fecha_creacion_caja = new Date(Date.now());
            this.caja.encargado = this.usuarioService.getUser().id_usuario;
            this.caja.descripcion = this.fE(this.descripcion_egreso).value;
            this.caja.id_sede = this.usuarioService.getSedebyUser();
            this.caja.habilitado = true;
            this.caja.egreso = true;
            this.caja.metodo_pago = this.fE(this.metodoPagoContado_egreso).value;
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("loading", "Cargando...");
            this.cajaService.createIngresoEgreso(this.caja).subscribe(res => {
                this.formEgreso.reset();
                this.modalService.dismissAll();
                this.updateListEgresos(this.idSede);
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("close", null);
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("success", "Egreso guardado");
            });
        }
        else {
        }
    }
    eliminarIngreso(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            title: '¿Está seguro que desea eliminar?',
            text: 'No se podrá revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#34c38f',
            cancelButtonColor: '#f46a6a',
            confirmButtonText: 'Si, eliminar!'
        }).then(result => {
            if (result.value) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("loading", "Cargando...");
                this.cajaService.deleteIngresoEgreso(data).subscribe(res => {
                    if (data.egreso) {
                        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("close", null);
                        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("success", "Egreso eliminado");
                        this.updateListEgresos(this.idSede);
                    }
                    else {
                        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("close", null);
                        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("success", "Ingreso eliminado");
                        this.updateListIngresos(this.idSede);
                    }
                }, error => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("error", "Error en la conexión");
                });
            }
            else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().DismissReason.cancel)) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Cancelado', 'Movimiento no eliminado', 'error');
            }
        });
    }
    updateListIngresos(idSede) {
        let fIni = new Date(Date.now());
        fIni.setHours(0, 0, 1);
        let fFin = new Date(Date.now());
        fFin.setHours(23, 59, 0);
        this.cajaService.getIngresosbyDate(fIni, fFin, idSede).subscribe(res => {
            this.serviceI.updateTableIngreso(res);
            this.ingresoTotal = 0;
            this.iFisico = 0;
            this.iVirtual = 0;
            this.ingresoTotal = res.reduce((acc, obj) => { return acc + obj.monto; }, 0);
            res.forEach(element => {
                if (element.metodo_pago == 'Físico') {
                    this.iFisico += element.monto;
                }
                else {
                    this.iVirtual += element.monto;
                }
            });
        });
    }
    updateListEgresos(idSede) {
        let fIni = new Date(Date.now());
        fIni.setHours(0, 0, 1);
        let fFin = new Date(Date.now());
        fFin.setHours(23, 59, 0);
        this.cajaService.getEgresosbyDate(fIni, fFin, idSede).subscribe(res => {
            this.serviceE.updateTableEgreso(res);
            this.egresoTotal = 0;
            this.eFisico = 0;
            this.eVirtual = 0;
            this.egresoTotal = res.reduce((acc, obj) => { return acc + obj.monto; }, 0);
            res.forEach(element => {
                if (element.metodo_pago == 'Físico') {
                    this.eFisico += element.monto;
                }
                else {
                    this.eVirtual += element.monto;
                }
            });
        });
    }
    /**
   * Returns form Cash Ingresos
   */
    get formCI() {
        return this.formIngreso.controls;
    }
    /**
* Returns form Cash Egresos
*/
    get formCE() {
        return this.formEgreso.controls;
    }
}
CashRegisterComponent.ɵfac = function CashRegisterComponent_Factory(t) { return new (t || CashRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_listIngresos_service__WEBPACK_IMPORTED_MODULE_2__.IngresoService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_listEgresos_service__WEBPACK_IMPORTED_MODULE_3__.EgresoService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_caja_service__WEBPACK_IMPORTED_MODULE_6__.CajaService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__.UsuarioService)); };
CashRegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: CashRegisterComponent, selectors: [["app-cash-register"]], viewQuery: function CashRegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([_listIngresos_service__WEBPACK_IMPORTED_MODULE_2__.IngresoService, _listEgresos_service__WEBPACK_IMPORTED_MODULE_3__.EgresoService, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe])], decls: 150, vars: 60, consts: [[1, "container-fluid"], ["title", "Caja de Registro", 3, "breadcrumbItems"], [1, "row", "mt-2", "mb-2"], [1, "col-12", "col-md-3", "d-grid", "text-center", "mb-2"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "uil", "uil-arrow-growth", "me-2"], ["type", "button", 1, "btn", "btn-danger", "btn-block", 3, "click"], [1, "uil", "uil-chart-down", "me-2"], [1, "col-12", "col-md-3", "d-grid"], ["class", "col-12 col-md-3 d-grid", 4, "appRole"], [1, "row", "mb-3"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-12"], [1, "mt-0"], [1, "text-center"], [1, "text-success", "me-1"], [1, "mdi", "mdi-arrow-up-bold", "me-1"], [1, "row"], [1, "col-6"], [1, "row", "mb-md-2"], [1, "col-12", "text-md-end"], [1, "dataTables_length"], [1, "d-inline-flex", "align-items-center"], ["name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "table-responsive", "mb-4"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "table", "table-centered", "dt-responsive", "nowrap", "table-card-list", 2, "border-spacing", "0 12px", "width", "100%"], [1, "table-light"], [1, "bg-transparent"], ["scope", "col", "sortable", "amount", 3, "sort"], ["scope", "col", "sortable", "type", 3, "sort"], ["scope", "col", "sortable", "description", 3, "sort"], ["scope", "col", "sortable", "date", 3, "sort"], ["scope", "col", "sortable", "name", 3, "sort"], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-md-between", "align-items-md-center"], [1, "text-md-end", "float-md-end", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], [1, "text-danger", "me-1"], [1, "mdi", "mdi-arrow-down-bold", "me-1"], ["centerDataModalIngreso", ""], ["centerDataModalEgreso", ""], [3, "formGroup"], ["ngbDropdown", ""], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName", "change"], [3, "result", "term"], ["placement", "top", "ngbTooltip", "Delete", 1, "px-3", "text-danger", 3, "click"], [1, "uil", "uil-trash-alt", "font-size-18"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [1, "mb-3"], [1, "control-label"], ["placeholder", "Ingrese el monto", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["name", "selectMetodo", "placeholder", "Seleccione", 3, "items", "formControlName", "ngClass"], ["id", "billing-observaciones", "rows", "3", "placeholder", "Ingrese la descripci\u00F3n", 1, "form-control", 3, "formControlName", "ngClass"], [1, "text-end", "mt-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "disabled", "click"]], template: function CashRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CashRegisterComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](147); return ctx.centerModal(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Registar Ingreso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CashRegisterComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](149); return ctx.centerModal(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Registar Egreso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, CashRegisterComponent_div_12_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Ingreso Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](34, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Mostrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function CashRegisterComponent_Template_select_ngModelChange_42_listener($event) { return ctx.serviceI.pageSizeI = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, " entradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "thead", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sort", function CashRegisterComponent_Template_th_sort_60_listener($event) { return ctx.onSortI($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Monto");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sort", function CashRegisterComponent_Template_th_sort_62_listener($event) { return ctx.onSortI($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "M\u00E9todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sort", function CashRegisterComponent_Template_th_sort_64_listener($event) { return ctx.onSortI($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sort", function CashRegisterComponent_Template_th_sort_66_listener($event) { return ctx.onSortI($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sort", function CashRegisterComponent_Template_th_sort_68_listener($event) { return ctx.onSortI($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](73, CashRegisterComponent_tr_73_Template, 15, 13, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](74, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "ngb-pagination", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function CashRegisterComponent_Template_ngb_pagination_pageChange_78_listener($event) { return ctx.serviceI.pageI = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](79, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "Egreso Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](89, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](91, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](96, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](100, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](107, "Mostrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function CashRegisterComponent_Template_select_ngModelChange_108_listener($event) { return ctx.serviceE.pageSizeE = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](114, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](115, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](116, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, " entradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "thead", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sort", function CashRegisterComponent_Template_th_sort_126_listener($event) { return ctx.onSortE($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, "Monto");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sort", function CashRegisterComponent_Template_th_sort_128_listener($event) { return ctx.onSortE($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129, "M\u00E9todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sort", function CashRegisterComponent_Template_th_sort_130_listener($event) { return ctx.onSortE($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sort", function CashRegisterComponent_Template_th_sort_132_listener($event) { return ctx.onSortE($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("sort", function CashRegisterComponent_Template_th_sort_134_listener($event) { return ctx.onSortE($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](135, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](136, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](137, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](138, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](139, CashRegisterComponent_tr_139_Template, 15, 13, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](140, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](142, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "ngb-pagination", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function CashRegisterComponent_Template_ngb_pagination_pageChange_144_listener($event) { return ctx.serviceE.pageE = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](145, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](146, CashRegisterComponent_ng_template_146_Template, 37, 20, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](148, CashRegisterComponent_ng_template_148_Template, 37, 20, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appRole", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](25, 34, ctx.ingresoTotal, "S/ "));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("F\u00EDsico: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](30, 37, ctx.iFisico, "S/ "), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Virtual: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](34, 40, ctx.iVirtual, "S/ "), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.serviceI.pageSizeI);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngValue", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngValue", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](74, 43, ctx.ingresos$));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](79, 45, ctx.total$))("page", ctx.serviceI.pageI)("pageSize", ctx.serviceI.pageSizeI)("maxSize", 5)("rotate", true)("boundaryLinks", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](91, 47, ctx.egresoTotal, "S/ "));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("F\u00EDsico: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](96, 50, ctx.eFisico, "S/ "), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Virtual: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](100, 53, ctx.eVirtual, "S/ "), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.serviceE.pageSizeE);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngValue", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngValue", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](140, 56, ctx.egresos$));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](145, 58, ctx.totalE$))("page", ctx.serviceE.pageE)("pageSize", ctx.serviceE.pageSizeE)("maxSize", 5)("rotate", true)("boundaryLinks", true);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_8__.PagetitleComponent, _directives_role_directive__WEBPACK_IMPORTED_MODULE_9__.RoleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPagination, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdown, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbHighlight, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXNoLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 642:
/*!*****************************************************************!*\
  !*** ./src/app/pages/cash/cash-register/listEgresos.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EgresoService": () => (/* binding */ EgresoService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 78068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var src_app_services_caja_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/caja.service */ 90835);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);






const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(invoices, column, direction) {
    if (direction === '' || column === '') {
        return invoices;
    }
    else {
        return [...invoices].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(invoice, term, pipe) {
    return String(invoice.monto).toLowerCase().includes(term) ||
        invoice.descripcion.toLowerCase().includes(term.toLowerCase()) ||
        String(invoice.encargado).toLowerCase().includes(term.toLowerCase());
}
class EgresoService {
    constructor(pipe, cajaService, usuarioService) {
        this.pipe = pipe;
        this.cajaService = cajaService;
        this.usuarioService = usuarioService;
        this._loadingE$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
        this._searchE$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._egresos$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this._totalE$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        this.egresoList = [];
        this._state = {
            page: 1,
            pageSize: 5,
            searchTerm: '',
            sortColumn: '',
            sortDirection: '',
        };
        let fIni = new Date(Date.now());
        fIni.setHours(0, 0, 1);
        let fFin = new Date(Date.now());
        fFin.setHours(23, 59, 0);
        //fIni = new Date(fIni.getTime() - fIni.getTimezoneOffset()*60000)
        //fFin = new Date(fFin.getTime() - fFin.getTimezoneOffset()*60000)
        this.getListEgresos(fIni, fFin);
    }
    updateTableEgreso(data) {
        this._egresos$.next(data);
    }
    get egresos$() {
        return this._egresos$.asObservable();
    }
    get totalE$() {
        return this._totalE$.asObservable();
    }
    get loadingE$() {
        return this._loadingE$.asObservable();
    }
    get pageE() {
        return this._state.page;
    }
    get pageSizeE() {
        return this._state.pageSize;
    }
    get searchTermE() {
        return this._state.searchTerm;
    }
    set pageE(page) {
        this._setE({ page });
    }
    set pageSizeE(pageSize) {
        this._setE({ pageSize });
    }
    set searchTermE(searchTerm) {
        this._setE({ searchTerm });
    }
    set sortColumnE(sortColumn) {
        this._setE({ sortColumn });
    }
    set sortDirectionE(sortDirection) {
        this._setE({ sortDirection });
    }
    _setE(patch) {
        Object.assign(this._state, patch);
        this._searchE$.next();
    }
    _searchE() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm, } = this._state;
        // 1. sort
        let invoices = sort(this.egresoList, sortColumn, sortDirection);
        // 2. filter
        invoices = invoices.filter((customer) => matches(customer, searchTerm, this.pipe));
        const total = invoices.length;
        // 3. paginate
        invoices = invoices.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ invoices, total });
    }
    getListEgresos(fIni, fFin) {
        this.cajaService.getEgresosbyDate(fIni, fFin, this.usuarioService.getSedebyUser()).subscribe(res => {
            this.egresoList = res;
            this._searchE$
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loadingE$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this._searchE()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loadingE$.next(false)))
                .subscribe((result) => {
                this._egresos$.next(result.invoices);
                this._totalE$.next(result.total);
            });
            this._searchE$.next();
        });
    }
}
EgresoService.ɵfac = function EgresoService_Factory(t) { return new (t || EgresoService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_caja_service__WEBPACK_IMPORTED_MODULE_0__.CajaService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService)); };
EgresoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: EgresoService, factory: EgresoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 20015:
/*!******************************************************************!*\
  !*** ./src/app/pages/cash/cash-register/listIngresos.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoService": () => (/* binding */ IngresoService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 78068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var src_app_services_caja_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/caja.service */ 90835);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);






const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(invoices, column, direction) {
    if (direction === '' || column === '') {
        return invoices;
    }
    else {
        return [...invoices].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(invoice, term, pipe) {
    return String(invoice.monto).toLowerCase().includes(term) ||
        invoice.descripcion.toLowerCase().includes(term.toLowerCase()) ||
        String(invoice.encargado).toLowerCase().includes(term.toLowerCase());
}
class IngresoService {
    constructor(pipe, cajaService, usuarioService) {
        this.pipe = pipe;
        this.cajaService = cajaService;
        this.usuarioService = usuarioService;
        this._loadingI$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
        this._searchI$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._ingreso$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this._totalI$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        this.ingresoList = [];
        this._state = {
            page: 1,
            pageSize: 5,
            searchTerm: '',
            sortColumn: '',
            sortDirection: '',
        };
        let fIni = new Date(Date.now());
        fIni.setHours(0, 0, 1);
        let fFin = new Date(Date.now());
        fFin.setHours(23, 59, 0);
        this.getListIngresos(fIni, fFin);
    }
    updateTableIngreso(data) {
        this._ingreso$.next(data);
    }
    get ingreso$() {
        return this._ingreso$.asObservable();
    }
    get totalI$() {
        return this._totalI$.asObservable();
    }
    get loadingI$() {
        return this._loadingI$.asObservable();
    }
    get pageI() {
        return this._state.page;
    }
    get pageSizeI() {
        return this._state.pageSize;
    }
    get searchTermI() {
        return this._state.searchTerm;
    }
    set pageI(page) {
        this._setI({ page });
    }
    set pageSizeI(pageSize) {
        this._setI({ pageSize });
    }
    set searchTermI(searchTerm) {
        this._setI({ searchTerm });
    }
    set sortColumnI(sortColumn) {
        this._setI({ sortColumn });
    }
    set sortDirectionI(sortDirection) {
        this._setI({ sortDirection });
    }
    _setI(patch) {
        Object.assign(this._state, patch);
        this._searchI$.next();
    }
    _searchI() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm, } = this._state;
        // 1. sort
        let invoices = sort(this.ingresoList, sortColumn, sortDirection);
        // 2. filter
        invoices = invoices.filter((customer) => matches(customer, searchTerm, this.pipe));
        const total = invoices.length;
        // 3. paginate
        invoices = invoices.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ invoices, total });
    }
    getListIngresos(fIni, fFin) {
        this.cajaService.getIngresosbyDate(fIni, fFin, this.usuarioService.getSedebyUser()).subscribe(res => {
            this.ingresoList = res;
            this._searchI$
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loadingI$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this._searchI()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loadingI$.next(false)))
                .subscribe((result) => {
                this._ingreso$.next(result.invoices);
                this._totalI$.next(result.total);
            });
            this._searchI$.next();
        });
    }
}
IngresoService.ɵfac = function IngresoService_Factory(t) { return new (t || IngresoService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_caja_service__WEBPACK_IMPORTED_MODULE_0__.CajaService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService)); };
IngresoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: IngresoService, factory: IngresoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 28790:
/*!****************************************************************!*\
  !*** ./src/app/pages/cash/cash-register/sortable.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdSortableHeader": () => (/* binding */ NgbdSortableHeader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);


const rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
class NgbdSortableHeader {
    constructor() {
        this.sortable = '';
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
}
NgbdSortableHeader.ɵfac = function NgbdSortableHeader_Factory(t) { return new (t || NgbdSortableHeader)(); };
NgbdSortableHeader.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgbdSortableHeader, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function NgbdSortableHeader_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdSortableHeader_click_HostBindingHandler() { return ctx.rotate(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
    } }, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" } });


/***/ }),

/***/ 88632:
/*!*************************************************************!*\
  !*** ./src/app/pages/cash/list-cash/list-cash.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCashComponent": () => (/* binding */ ListCashComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _registro_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.service */ 56683);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable.directive */ 59175);
/* harmony import */ var src_models_reporte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/reporte */ 76689);
/* harmony import */ var src_utils_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/functions */ 4680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var src_app_services_caja_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/caja.service */ 90835);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);














const _c0 = function (a0) { return { "bg-soft-danger": a0 }; };
function ListCashComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListCashComponent_tr_59_Template_a_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const data_r3 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](67); return ctx_r5.scrollModal(_r1, data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", i_r4 + 1)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", data_r3.date)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 10, data_r3.ingreso_total, "S/ "))("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](10, 13, data_r3.egreso_total, "S/ "))("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](19, _c0, data_r3.ingreso_total - data_r3.egreso_total < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](14, 16, data_r3.ingreso_total - data_r3.egreso_total, "S/ "), " ");
} }
function ListCashComponent_ng_template_66_tr_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 4, data_r10.monto, "S/."));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", data_r10.metodo_pago);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", data_r10.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](10, 7, data_r10.fecha_creacion_caja, "dd/MM/yyyy"));
} }
function ListCashComponent_ng_template_66_tr_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "ngb-highlight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 4, data_r11.monto, "S/."));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", data_r11.metodo_pago);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", data_r11.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](10, 7, data_r11.fecha_creacion_caja, "dd/MM/yyyy"));
} }
function ListCashComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h5", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListCashComponent_ng_template_66_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.closeEventModalGeneral(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Ingreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "h4", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Egreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "h4", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](40, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "table", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "thead", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_ng_template_66_Template_th_sort_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_ng_template_66_Template_th_sort_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r15.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_ng_template_66_Template_th_sort_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r16.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_ng_template_66_Template_th_sort_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r17.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_ng_template_66_Template_th_sort_55_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r18.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, ListCashComponent_ng_template_66_tr_58_Template, 13, 10, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](66, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](70, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "table", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "thead", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_ng_template_66_Template_th_sort_77_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.onSortE($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_ng_template_66_Template_th_sort_79_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r20.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_ng_template_66_Template_th_sort_81_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r21.onSortE($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_ng_template_66_Template_th_sort_83_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r22.onSortE($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_ng_template_66_Template_th_sort_85_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r23.onSortE($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](88, ListCashComponent_ng_template_66_tr_88_Template, 13, 10, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](89, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListCashComponent_ng_template_66_Template_button_click_91_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r24.closeEventModalGeneral(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Detalle de Caja: ", ctx_r2.reporteCaja.fechaCaja, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](20, 9, ctx_r2.reporteCaja.ingreso_total, "S/ "));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](29, 12, ctx_r2.reporteCaja.egreso_total, "S/ "));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Ingresos F\u00EDsico: ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](36, 15, ctx_r2.reporteCaja.ingresos_fisicos, "S/ "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Ingresos Virtual: ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](40, 18, ctx_r2.reporteCaja.ingresos_virtuales, "S/ "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.reporteCaja.ingresos);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Egresos F\u00EDsico: ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](66, 21, ctx_r2.reporteCaja.egresos_fisicos, "S/ "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Egresos Virtual: ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](70, 24, ctx_r2.reporteCaja.egresos_virtuales, "S/ "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.reporteCaja.egresos);
} }
class ListCashComponent {
    constructor(modalService, service, fb, usuarioService, cajaService) {
        this.modalService = modalService;
        this.service = service;
        this.fb = fb;
        this.usuarioService = usuarioService;
        this.cajaService = cajaService;
        this.nombre_sedes = "campoSede";
        this.idSede = "";
        this.fechaDesde = 'campoFechaDesde';
        this.fechaHasta = 'campoFechaHasta';
        this.reporteCaja = new src_models_reporte__WEBPACK_IMPORTED_MODULE_2__.ReporteModel;
        this.transactions$ = service.transactions$;
        this.total$ = service.total$;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Caja' }, { label: 'Lista de Ingresos y Egresos', active: true }];
        this.getListSedes();
        this.crearFormulario();
    }
    getListSedes() {
        this.listSedes = JSON.parse(localStorage.getItem('sedes'));
        this.idSede = this.usuarioService.getSedebyUser();
    }
    crearFormulario() {
        this.formSedes = this.fb.group({
            [this.nombre_sedes]: [this.idSede]
        });
        this.formDateRange = this.fb.group({
            [this.fechaDesde]: [(0,src_utils_functions__WEBPACK_IMPORTED_MODULE_3__.dateMonth)(new Date(Date.now()))],
        });
    }
    onSort({ column, direction }) {
        // resetting other headers
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
    /**
   * Open scroll modal
   * @param scrollDataModal scroll modal data
   */
    scrollModal(scrollDataModal, data) {
        this.reporteCaja.fechaCaja = new Date(data.date + 'T00:00').toLocaleDateString('en-GB');
        this.reporteCaja.ingreso_total = data.ingreso_total;
        this.reporteCaja.egreso_total = data.egreso_total;
        this.reporteCaja.ingresos = data.caja.filter(el => (el.egreso == false));
        this.reporteCaja.egresos = data.caja.filter(el => (el.egreso == true));
        this.reporteCaja.ingresos.reduce((acc, obj) => {
            if (obj.metodo_pago == 'Físico') {
                this.reporteCaja.ingresos_fisicos = acc + obj.monto;
            }
            else {
                this.reporteCaja.ingresos_virtuales = acc + obj.monto;
            }
        }, 0);
        this.reporteCaja.egresos.reduce((acc, obj) => {
            if (obj.metodo_pago == 'Físico') {
                this.reporteCaja.egresos_fisicos = acc + obj.monto;
            }
            else {
                this.reporteCaja.egresos_virtuales = acc + obj.monto;
            }
        }, 0);
        this.modalService.open(scrollDataModal, { size: 'lg', centered: true, scrollable: true });
    }
    /**
   * Close event modal
   */
    closeEventModalGeneral() {
        this.modalService.dismissAll();
    }
    f(campo) {
        return this.formDateRange.get(campo);
    }
    filterDateRange() {
        if (this.formDateRange.valid) {
            let fechaIni = new Date(this.f(this.fechaDesde).value + 'T00:00');
            let firstDay = new Date(fechaIni.getFullYear(), fechaIni.getMonth(), 1);
            let lastDay = new Date(fechaIni.getFullYear(), fechaIni.getMonth() + 1, 0);
            firstDay.setHours(0, 0, 1);
            lastDay.setHours(23, 59, 0);
            this.updateListCaja(firstDay, lastDay, this.idSede);
        }
        else {
            return;
        }
    }
    fS(campo) {
        return this.formSedes.get(campo);
    }
    changeSedes() {
        this.idSede = this.fS(this.nombre_sedes).value;
        const fIni = new Date(this.f(this.fechaDesde).value + 'T00:00');
        let firstDay = new Date(fIni.getFullYear(), fIni.getMonth(), 1);
        let lastDay = new Date(fIni.getFullYear(), fIni.getMonth() + 1, 0);
        firstDay.setHours(0, 0, 1);
        lastDay.setHours(23, 59, 0);
        this.updateListCaja(firstDay, lastDay, this.idSede);
    }
    updateListCaja(fIni, fFin, idSede) {
        this.cajaService.getIngresosEgresosbyMonth(fIni, fFin, idSede).subscribe(res => {
            const groups = res.reduce((groups, game) => {
                const date = game.fecha_creacion_caja.split(' ')[0];
                if (!groups[date]) {
                    groups[date] = [];
                }
                groups[date].push(game);
                return groups;
            }, {});
            // Edit: to add it in the array format instead
            const groupArrays = Object.keys(groups).map((date) => {
                return {
                    date,
                    caja: groups[date],
                };
            });
            groupArrays.forEach(element => {
                const ingreso = {
                    ingreso_total: 0,
                    egreso_total: 0
                };
                element.caja.reduce((acc, obj) => {
                    if (obj.egreso) {
                        ingreso.egreso_total = acc + obj.monto;
                    }
                    else {
                        ingreso.ingreso_total = acc + obj.monto;
                    }
                }, 0);
                Object.assign(element, ingreso);
            });
            this.service.updateTable(groupArrays);
        });
    }
}
ListCashComponent.ɵfac = function ListCashComponent_Factory(t) { return new (t || ListCashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_registro_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_caja_service__WEBPACK_IMPORTED_MODULE_5__.CajaService)); };
ListCashComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListCashComponent, selectors: [["app-list-cash"]], viewQuery: function ListCashComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_registro_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe])], decls: 68, vars: 23, consts: [[1, "container-fluid"], ["title", "Listas de Registro de Ingresos y Egresos", 3, "breadcrumbItems"], [1, "row"], [1, "col-md-6", "mb-2"], [1, "form-inline"], [1, "search-box", "ml-2"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar registro", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "border-light", "rounded", 3, "ngModel", "ngModelChange"], [1, "uil", "uil-search", "search-icon"], ["role", "toolbar", 1, "btn-toolbar"], [1, "col-12", "col-md-6", "d-grid", "mb-2", "chat-search-box", "px-1"], [3, "formGroup"], [1, "input-daterange", "input-group"], ["type", "month", "id", "billing-fechanacimiento", "placeholder", "Seleccione la fecha", 1, "form-control", 3, "formControlName"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "mdi", "mdi-filter-variant"], [1, "col-12", "col-md-6", "d-grid"], ["ngbDropdown", ""], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName", "change"], [1, "row", "md-2"], [1, "col-sm-12", "col-md-12"], [1, "dataTables_length", "text-md-end"], [1, "d-inline-flex", "align-items-center"], ["name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "col-12"], [1, "table-responsive", "mb-4"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "table", "table-centered", "datatables", "dt-responsive", "nowrap", "table-card-list", 2, "border-spacing", "0 12px", "width", "100%"], [1, "bg-transparent"], ["scope", "col", "sortable", "id", 3, "sort"], ["scope", "col", "sortable", "fecha", 3, "sort"], ["scope", "col", "sortable", "ingreso", 3, "sort"], ["scope", "col", "sortable", "egreso", 3, "sort"], ["scope", "col", "sortable", "status", 3, "sort"], [2, "width", "170px"], ["class", "odd", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-md-between", "align-items-md-center"], [1, "text-md-end", "float-md-end", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["scrollDataModalDetalleCajaDia", ""], [1, "odd"], [3, "result", "term"], [1, "badge", "rounded-pill", "bg-soft-success", "font-size-12", 3, "ngClass"], ["placement", "top", "ngbTooltip", "Ver detalle", 1, "px-3", "text-primary", 3, "click"], [1, "uil", "uil-eye", "font-size-18"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-start"], [1, "flex-1", "align-self-center"], [1, "col-6"], [1, "mt-1"], [1, "text-muted", "mb-2"], [1, "text-muted", "mt-3", "mb-0"], [1, "text-success", "me-1"], [1, "mdi", "mdi-arrow-up-bold", "me-1"], [1, "text-danger", "me-1"], [1, "mdi", "mdi-arrow-down-bold", "me-1"], [1, "row", "mb-3"], [1, "col-lg-12"], [1, "table", "table-centered", "dt-responsive", "nowrap", "table-card-list", 2, "border-spacing", "0 12px", "width", "100%"], [1, "table-light"], ["scope", "col", "sortable", "amount", 3, "sort"], ["scope", "col", "sortable", "type", 3, "sort"], ["scope", "col", "sortable", "description", 3, "sort"], ["scope", "col", "sortable", "date", 3, "sort"], ["scope", "col", "sortable", "name", 3, "sort"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function ListCashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ListCashComponent_Template_input_ngModelChange_7_listener($event) { return ctx.service.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListCashComponent_Template_button_click_17_listener() { return ctx.filterDateRange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "ng-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ListCashComponent_Template_ng_select_change_22_listener() { return ctx.changeSedes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Mostrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ListCashComponent_Template_select_ngModelChange_28_listener($event) { return ctx.service.pageSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, " entradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_Template_th_sort_46_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Ord.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_Template_th_sort_48_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_Template_th_sort_50_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Ingreso");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_Template_th_sort_52_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Egreso");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListCashComponent_Template_th_sort_54_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Ganancia/P\u00E9rdida");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, ListCashComponent_tr_59_Template, 18, 21, "tr", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](60, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "ngb-pagination", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function ListCashComponent_Template_ngb_pagination_pageChange_64_listener($event) { return ctx.service.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](65, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, ListCashComponent_ng_template_66_Template, 93, 27, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formDateRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("formControlName", ctx.fechaDesde);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formSedes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("formControlName", ctx.nombre_sedes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.listSedes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.service.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](60, 19, ctx.transactions$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](65, 21, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize)("maxSize", 5)("rotate", true)("boundaryLinks", true);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbHighlight, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNhc2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 56683:
/*!**********************************************************!*\
  !*** ./src/app/pages/cash/list-cash/registro.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionService": () => (/* binding */ TransactionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 78068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var src_app_services_caja_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/caja.service */ 90835);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);






const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(transactions, column, direction) {
    if (direction === '' || column === '') {
        return transactions;
    }
    else {
        return [...transactions].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(transaction, term, pipe) {
    return transaction.date.toLowerCase().includes(term);
    //|| String(transaction.fecha_creacion_caja).toLowerCase().includes(term.toLowerCase())
    //|| String(transaction.monto).toLowerCase().includes(term)
    //|| transaction.metodo_pago.toLowerCase().includes(term)
    //|| transaction.status.toLowerCase().includes(term)
    //|| pipe.transform(transaction.index).includes(term);
}
class TransactionService {
    constructor(pipe, cajaService, usuarioService) {
        this.pipe = pipe;
        this.cajaService = cajaService;
        this.usuarioService = usuarioService;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._transactions$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
        let fIni = new Date();
        let firstDay = new Date(fIni.getFullYear(), fIni.getMonth(), 1);
        let lastDay = new Date(fIni.getFullYear(), fIni.getMonth() + 1, 0);
        firstDay.setHours(0, 0, 1);
        lastDay.setHours(23, 59, 0);
        this.getListIngresosEgresos(firstDay, lastDay);
    }
    updateTable(data) {
        this._transactions$.next(data);
    }
    get transactions$() { return this._transactions$.asObservable(); }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let transactions = sort(this.cajaList, sortColumn, sortDirection);
        // 2. filter
        transactions = transactions.filter(transaction => matches(transaction, searchTerm, this.pipe));
        const total = transactions.length;
        // 3. paginate
        transactions = transactions.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ transactions, total });
    }
    getListIngresosEgresos(fIni, fFin) {
        this.cajaService.getIngresosEgresosbyMonth(fIni, fFin, this.usuarioService.getSedebyUser()).subscribe(res => {
            /* of(...res).pipe(
              groupBy((p: any) => p.fecha_creacion_caja.split(' ')[0]),
              mergeMap(group$ =>
                group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
              ),
              map(arr => ({ date: arr[0], caja: arr.slice(1) })),
              toArray()
            ).subscribe(p => {
              this.cajaList = p;
              //this.updateTable(this.cajaList)
            }); */
            const groups = res.reduce((groups, game) => {
                const date = game.fecha_creacion_caja.split(' ')[0];
                if (!groups[date]) {
                    groups[date] = [];
                }
                groups[date].push(game);
                return groups;
            }, {});
            // Edit: to add it in the array format instead
            const groupArrays = Object.keys(groups).map((date) => {
                return {
                    date,
                    caja: groups[date],
                };
            });
            groupArrays.forEach(element => {
                const ingreso = {
                    ingreso_total: 0,
                    egreso_total: 0
                };
                element.caja.reduce((acc, obj) => {
                    if (obj.egreso) {
                        ingreso.egreso_total = acc + obj.monto;
                    }
                    else {
                        ingreso.ingreso_total = acc + obj.monto;
                    }
                }, 0);
                Object.assign(element, ingreso);
            });
            this.cajaList = groupArrays;
            this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loading$.next(false))).subscribe(result => {
                this._transactions$.next(result.transactions);
                this._total$.next(result.total);
            });
            this._search$.next();
        });
    }
}
TransactionService.ɵfac = function TransactionService_Factory(t) { return new (t || TransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_caja_service__WEBPACK_IMPORTED_MODULE_0__.CajaService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService)); };
TransactionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: TransactionService, factory: TransactionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 59175:
/*!************************************************************!*\
  !*** ./src/app/pages/cash/list-cash/sortable.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdSortableHeader": () => (/* binding */ NgbdSortableHeader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);


const rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
class NgbdSortableHeader {
    constructor() {
        this.sortable = '';
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
}
NgbdSortableHeader.ɵfac = function NgbdSortableHeader_Factory(t) { return new (t || NgbdSortableHeader)(); };
NgbdSortableHeader.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgbdSortableHeader, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function NgbdSortableHeader_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdSortableHeader_click_HostBindingHandler() { return ctx.rotate(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
    } }, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" } });


/***/ }),

/***/ 90835:
/*!******************************************!*\
  !*** ./src/app/services/caja.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CajaService": () => (/* binding */ CajaService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);



class CajaService {
    constructor(http) {
        this.http = http;
    }
    getIngresos() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllIngresos');
    }
    getIngresosbyDate(fIni, fFin, idSede) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllIngresosByDate/' + fIni + '/' + fFin + '/' + idSede);
    }
    getEgresosbyDate(fIni, fFin, idSede) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllEgresosByDate/' + fIni + '/' + fFin + '/' + idSede);
    }
    getIngresosEgresosbyMonth(fIni, fFin, idSede) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllCajaPerMonths/' + fIni + '/' + fFin + '/' + idSede);
    }
    getEgresos() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllEgresos');
    }
    createIngresoEgreso(caja) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'createNewIngreso', caja);
    }
    deleteIngresoEgreso(caja) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'unsubscribeEgresoById/' + caja.id_caja, caja);
    }
}
CajaService.ɵfac = function CajaService_Factory(t) { return new (t || CajaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CajaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CajaService, factory: CajaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 81427:
/*!****************************!*\
  !*** ./src/models/caja.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CajaModel": () => (/* binding */ CajaModel)
/* harmony export */ });
class CajaModel {
}


/***/ }),

/***/ 76689:
/*!*******************************!*\
  !*** ./src/models/reporte.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteModel": () => (/* binding */ ReporteModel)
/* harmony export */ });
class ReporteModel {
    constructor() {
        this.ingresos_fisicos = 0;
        this.ingresos_virtuales = 0;
        this.egresos_fisicos = 0;
        this.egresos_virtuales = 0;
    }
}


/***/ }),

/***/ 4680:
/*!********************************!*\
  !*** ./src/utils/functions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBase64ImageFromURL": () => (/* binding */ getBase64ImageFromURL),
/* harmony export */   "stringToDate": () => (/* binding */ stringToDate),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "dateMonth": () => (/* binding */ dateMonth)
/* harmony export */ });
function getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
        var img = new Image();
        img.setAttribute("crossOrigin", "anonymous");
        img.onload = () => {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            var dataURL = canvas.toDataURL("image/png");
            resolve(dataURL);
        };
        img.onerror = error => {
            reject(error);
        };
        img.src = url;
    });
}
function stringToDate(fecha) {
    const [day, month, year] = fecha.split('/');
    const date = new Date(+year, +month - 1, +day);
    //const date = moment("DD/MM/YYYY").toDate();
    return date;
}
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
function dateMonth(fecha) {
    return fecha.toISOString().substring(0, 7);
}


/***/ })

}]);
//# sourceMappingURL=src_app_pages_cash_cash-register_module_ts.js.map