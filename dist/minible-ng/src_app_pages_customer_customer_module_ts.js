"use strict";
(self["webpackChunkminible_ng"] = self["webpackChunkminible_ng"] || []).push([["src_app_pages_customer_customer_module_ts"],{

/***/ 49080:
/*!***********************************************************************!*\
  !*** ./src/app/pages/customer/add-customer/add-customer.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCustomerComponent": () => (/* binding */ AddCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_models_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/customer */ 85970);
/* harmony import */ var src_models_medidas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/medidas */ 60898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cliente.service */ 95686);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);








function AddCustomerComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Informaci\u00F3n del Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Datos b\u00E1sicos del nuevo cliente. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Nombres");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Fecha de Registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Fecha de Nacimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Correo Electr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "textarea", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Antecedentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "textarea", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.dni);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.nombres);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.fecha_creacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.fecha_nacimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.antecedentes);
} }
function AddCustomerComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Especificaciones de las Medidas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Valores de medici\u00F3n del ojo derecho e izquierdo del cliente. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Ojo Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "ESF");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "CYL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "EJE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Ojo Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "ESF");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "CYL");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "EJE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Otros");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "DIP");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Encargado de la Medici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r3.od_esferico);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r3.od_cilindrico);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r3.od_eje);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r3.oi_esferico);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r3.oi_cilindrico);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r3.oi_eje);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r3.dip);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r3.add);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx_r3.encargado);
} }
class AddCustomerComponent {
    constructor(fb, customerService) {
        this.fb = fb;
        this.customerService = customerService;
        this.selectValue = [];
        this.selectedValue = '';
        this.stateValue = [];
        this.nombres = "campoNombres";
        this.apellidos = "campoApellidos";
        this.dni = "campoDNI";
        this.telefono = "campoTelefono";
        this.fecha_nacimiento = "campoFechaNacimiento";
        this.fecha_creacion = "campoFechaCreacion";
        this.od_esferico = "campoOdEsferico";
        this.od_cilindrico = "campoOd_Cilindrico";
        this.od_eje = "campoOdEje";
        this.oi_esferico = "campoOiEsferico";
        this.oi_cilindrico = "campoOiCilindrico";
        this.oi_eje = "campoOiEje";
        this.dip = "campoDip";
        this.add = "campoAdd";
        this.encargado = "campoEncargado";
        this.email = "campoEmail";
        this.antecedentes = "campoAntecedentes";
        this.direccion = "campoDireccion";
        this.customer = new src_models_customer__WEBPACK_IMPORTED_MODULE_0__.CustomersModel;
        this.medidas = new src_models_medidas__WEBPACK_IMPORTED_MODULE_1__.MedidasModel;
        this.submitted = false;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Clientes' }, { label: 'Añadir Clientes', active: true }];
        this.selectValue = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola',
            'Anguilla', 'Antarctica', 'Argentina', 'Hawaii', 'California', 'Colombia', 'Congo', 'Dominica', 'Denmark', 'Nevada', 'Oregon',
            'Washington', 'Ecuador', 'Idaho', 'Montana', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Nicaragua', 'New Caledonia', 'North Dakota',
            'Tonga', 'Tunisia', 'Thailand', 'Turkey', 'Illinois', 'Tuvalu', 'Uganda', 'Uruguay', 'United Arab Emirates', 'United Kingdom', 'Venezuela', 'Zimbabwe',
            'Uruguay'];
        this.selectedValue = this.selectValue[0];
        this.stateValue = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Montana', 'Nevada', 'New Mexico', 'New York', 'North Dakota', 'Texas', 'Virginia', 'Wisconsin', 'Wyoming'];
        this.crearFormulario();
    }
    crearFormulario() {
        this.fecha_actual = new Date();
        this.formCustomer = this.fb.group({
            [this.nombres]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
                ]],
            [this.apellidos]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
                ]],
            [this.email]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email
                ]],
            [this.antecedentes]: [],
            [this.direccion]: [],
            [this.dni]: [null, []],
            [this.telefono]: [],
            [this.fecha_nacimiento]: [],
            [this.fecha_creacion]: [{ value: this.fecha_actual.toLocaleString(), disabled: true }],
            [this.od_cilindrico]: [],
            [this.od_eje]: [],
            [this.od_esferico]: [],
            [this.oi_cilindrico]: [],
            [this.oi_esferico]: [],
            [this.oi_eje]: [],
            [this.dip]: [],
            [this.add]: [],
            [this.encargado]: [],
            [this.antecedentes]: []
        });
    }
    f(campo) {
        return this.formCustomer.get(campo);
    }
    /**
     * guarda cliente en la base de datos
     */
    guardarCliente() {
        if (this.formCustomer.valid) {
            this.customer.apellidos = this.f(this.apellidos).value;
            this.customer.dni = this.f(this.dni).value;
            this.customer.fecha_creacion = new Date(Date.now());
            this.customer.email = this.f(this.email).value;
            this.customer.fecha_modificacion = new Date(Date.now());
            this.customer.fecha_nacimiento = new Date(Date.now());
            this.customer.nombres = this.f(this.nombres).value;
            this.customer.telefono = this.f(this.telefono).value;
            this.customer.habilitado = true;
            this.customer.antecedentes = this.f(this.antecedentes).value;
            this.customer.direccion = this.f(this.direccion).value;
            this.medidas.add = Number(this.f(this.add).value);
            this.medidas.dip = Number(this.f(this.dip).value);
            this.medidas.encargado = this.f(this.encargado).value;
            this.medidas.od_cilindrico = Number(this.f(this.od_cilindrico).value);
            this.medidas.od_eje = Number(this.f(this.od_eje).value);
            this.medidas.od_esferico = Number(this.f(this.od_esferico).value);
            this.medidas.oi_cilindrico = Number(this.f(this.oi_cilindrico).value);
            this.medidas.oi_eje = Number(this.f(this.oi_eje).value);
            this.medidas.oi_esferico = Number(this.f(this.oi_esferico).value);
            const listaMedidas = [];
            listaMedidas.push(this.medidas);
            this.customer.medidas = listaMedidas;
            console.log(this.customer);
            this.customerService.createCustomers(this.customer).subscribe(res => {
                console.log("registrado ok");
            });
        }
    }
}
AddCustomerComponent.ɵfac = function AddCustomerComponent_Factory(t) { return new (t || AddCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_2__.ClienteService)); };
AddCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddCustomerComponent, selectors: [["app-add-customer"]], decls: 21, vars: 4, consts: [[1, "container-fluid"], ["title", "Registrar Nuevo Cliente", 3, "breadcrumbItems"], [1, "checkout-tabs"], [1, "row"], [1, "col-xl-12"], [1, ""], [1, "checkout-acco"], [3, "formGroup"], ["activeIds", "static-1", 3, "closeOthers"], ["id", "static-1"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["id", "static-2"], [1, "row", "my-4"], [1, "col"], [1, "text-sm-end", "mt-2", "mt-sm-0"], [1, "btn", "btn-success", 3, "disabled", "click"], [1, "uil", "uil-user-plus", "me-1"], [1, "text-dark", "p-0", 2, "text-align", "left"], [1, "d-flex", "align-items-start", "align-items-center"], [1, "me-3"], [1, "uil", "uil-file-bookmark-alt", "text-primary", "h2"], [1, "flex-1", "overflow-hidden"], [1, "font-size-16", "mb-1"], [1, "text-muted", "text-truncate", "mb-0"], ["id", "checkout-customerinfo-collapse"], [1, "border-top", "py-4"], [1, "col-lg-4"], [1, "mb-4"], ["for", "billing-dni", 1, "form-label"], ["type", "text", "id", "billing-dni", "placeholder", "DNI del Cliente", 1, "form-control", 3, "formControlName"], ["for", "billing-firstnames", 1, "form-label"], ["type", "text", "id", "billing-firstnames", "placeholder", "Nombres del Cliente", 1, "form-control", 3, "formControlName"], ["for", "billing-lastnames", 1, "form-label"], ["type", "text", "id", "billing-lastnames", "placeholder", "Apellidos del Cliente", 1, "form-control", 3, "formControlName"], [1, "col-lg-3"], ["for", "billing-fecharegistro", 1, "form-label"], ["type", "text", "id", "billing-fecharegistro", "placeholder", "Seleccione la fecha", 1, "form-control", 3, "formControlName"], ["for", "billing-fechanacimiento", 1, "form-label"], ["type", "date", "id", "billing-fechanacimiento", "placeholder", "Seleccione la fecha", 1, "form-control", 3, "formControlName"], ["for", "billing-phone", 1, "form-label"], ["type", "text", "id", "billing-phone", "placeholder", "Tel\u00E9fono del Cliente", 1, "form-control", 3, "formControlName"], ["for", "billing-email-address", 1, "form-label"], ["type", "email", "id", "billing-email-address", "placeholder", "Correo electr\u00F3nico", 1, "form-control", 3, "formControlName"], [1, "col-lg-6"], ["for", "billing-direccion", 1, "form-label"], ["id", "billing-direccion", "rows", "3", "placeholder", "Ingrese la direcci\u00F3n completa del cliente", 1, "form-control", 3, "formControlName"], ["for", "billing-antecedentes", 1, "form-label"], ["id", "billing-antecedentes", "rows", "3", "placeholder", "Ingrese los antecedentes del cliente", 1, "form-control", 3, "formControlName"], [1, "text-dark", 2, "text-align", "left"], [1, "uil", "uil-receipt", "text-primary", "h2"], ["id", "checkout-medidasinfo-collapse"], [1, "col-6"], [1, "font-size-14", "mb-3", "d-flex", "justify-content-center"], ["for", "billing-OD-ESF", 1, "form-label"], ["type", "text", "id", "billing-OD-ESF", "placeholder", "Esfera", 1, "form-control", 3, "formControlName"], ["for", "billing-OD-CYL", 1, "form-label"], ["type", "text", "id", "billing-OD-CYL", "placeholder", "Cilindro", 1, "form-control", 3, "formControlName"], ["for", "billing-OD-EJE", 1, "form-label"], ["type", "text", "id", "billing-OD-EJE", "placeholder", "Eje", 1, "form-control", 3, "formControlName"], ["for", "billing-OI-ESF", 1, "form-label"], ["type", "text", "id", "billing-phone", "placeholder", "Esfera", 1, "form-control", 3, "formControlName"], ["for", "billing-OI-CYL", 1, "form-label"], ["type", "text", "id", "billing-OI-CYL", "placeholder", "Cilindro", 1, "form-control", 3, "formControlName"], ["for", "billing-OI-EJE", 1, "form-label"], ["type", "text", "id", "billing-OI-EJE", "placeholder", "Eje", 1, "form-control", 3, "formControlName"], ["for", "billing-DIP", 1, "form-label"], ["type", "text", "id", "billing-DIP", "placeholder", "Distancia Interpupilar", 1, "form-control", 3, "formControlName"], ["for", "billing-ADD", 1, "form-label"], ["type", "text", "id", "billing-ADD", "placeholder", "Adici\u00F3n", 1, "form-control", 3, "formControlName"], ["for", "billing-encargado-medicion", 1, "form-label"], ["type", "text", "id", "billing-encargado-medicion", "placeholder", "Encargado", 1, "form-control", 3, "formControlName"]], template: function AddCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ngb-accordion", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ngb-panel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AddCustomerComponent_ng_template_10_Template, 9, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AddCustomerComponent_ng_template_11_Template, 51, 9, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ngb-panel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AddCustomerComponent_ng_template_13_Template, 9, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, AddCustomerComponent_ng_template_14_Template, 59, 9, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddCustomerComponent_Template_button_click_18_listener() { return ctx.guardarCliente(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Registar Cliente ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("closeOthers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.formCustomer.valid);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanelContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 23406:
/*!***********************************************************!*\
  !*** ./src/app/pages/customer/customer-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerRoutingModule": () => (/* binding */ CustomerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-customer/add-customer.component */ 49080);
/* harmony import */ var _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-customers/list-customers.component */ 32901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: 'addcustomer',
        component: _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_0__.AddCustomerComponent
    },
    {
        path: 'listcustomers',
        component: _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_1__.ListCustomersComponent
    }
];
class CustomerRoutingModule {
}
CustomerRoutingModule.ɵfac = function CustomerRoutingModule_Factory(t) { return new (t || CustomerRoutingModule)(); };
CustomerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomerRoutingModule });
CustomerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 93363:
/*!***************************************************!*\
  !*** ./src/app/pages/customer/customer.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerModule": () => (/* binding */ CustomerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng5-slider */ 38391);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 68346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 85362);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-customer/add-customer.component */ 49080);
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-routing.module */ 23406);
/* harmony import */ var _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-customers/list-customers.component */ 32901);
/* harmony import */ var _list_customers_sortable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-customers/sortable.directive */ 53667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);














class CustomerModule {
}
CustomerModule.ɵfac = function CustomerModule_Factory(t) { return new (t || CustomerModule)(); };
CustomerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CustomerModule });
CustomerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__.DROPZONE_CONFIG,
            useValue: rxjs__WEBPACK_IMPORTED_MODULE_9__.config
        }
    ], imports: [[
            _customer_routing_module__WEBPACK_IMPORTED_MODULE_4__.CustomerRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownModule,
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__.DropzoneModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
            ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbCollapseModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CustomerModule, { declarations: [_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_3__.AddCustomerComponent, _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_5__.ListCustomersComponent, _list_customers_sortable_directive__WEBPACK_IMPORTED_MODULE_6__.NgbdSortableHeader], imports: [_customer_routing_module__WEBPACK_IMPORTED_MODULE_4__.CustomerRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__.DropzoneModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
        ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTypeaheadModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbCollapseModule] }); })();


/***/ }),

/***/ 39084:
/*!*******************************************************************!*\
  !*** ./src/app/pages/customer/list-customers/customer.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 78068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/cliente.service */ 95686);





const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(customers, column, direction) {
    if (direction === '' || column === '') {
        return customers;
    }
    else {
        return [...customers].sort((a, b) => {
            console.log(a[column]);
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(customer, term, pipe) {
    return customer.id_cliente.toLowerCase().includes(term)
        || customer.nombres.toLowerCase().includes(term.toLowerCase())
        || customer.apellidos.toLowerCase().includes(term.toLowerCase())
        || String(customer.dni).toLowerCase().includes(term.toLowerCase())
        || customer.telefono.toLowerCase().includes(term.toLowerCase())
        || (customer.fecha_creacion).toLocaleString().includes(term);
}
class CustomerService {
    constructor(pipe, customerService) {
        this.pipe = pipe;
        this.customerService = customerService;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this._customers$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this.customerList = [];
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
        this.getListClients();
    }
    updateTable(data) {
        this._customers$.next(data);
    }
    get customers$() { return this._customers$.asObservable(); }
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
        console.log(this.customerList);
        //console.log(sortColumn)
        // 1. sort
        let customers = sort(this.customerList, sortColumn, sortDirection);
        // 2. filter
        customers = customers.filter(customer => matches(customer, searchTerm, this.pipe));
        const total = customers.length;
        // 3. paginate
        customers = customers.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ customers, total });
    }
    /**
     * Funcion para obtener la lista de clientes desde el backend
     */
    getListClients() {
        this.customerService.getAllClients().subscribe(res => {
            console.log("entre..");
            this.customerList = res;
            this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this._loading$.next(false))).subscribe(result => {
                this._customers$.next(result.customers);
                this._total$.next(result.total);
            });
            this._search$.next();
        });
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_0__.ClienteService)); };
CustomerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 32901:
/*!***************************************************************************!*\
  !*** ./src/app/pages/customer/list-customers/list-customers.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCustomersComponent": () => (/* binding */ ListCustomersComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var src_models_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/customer */ 85970);
/* harmony import */ var src_models_medidas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/medidas */ 60898);
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.service */ 39084);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortable.directive */ 53667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cliente.service */ 95686);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);













function ListCustomersComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListCustomersComponent_tr_54_Template_a_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const data_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](62); return ctx_r7.centerModal(_r3, data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", i_r6)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r5.nombres.charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", data_r5.nombres)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", data_r5.apellidos)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", data_r5.dni)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", data_r5.telefono)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 15, data_r5.fecha_creacion, "dd/MM/yyyy"))("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", data_r5.medidas[0].encargado)("term", ctx_r0.service.searchTerm);
} }
function ListCustomersComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "Previous");
} }
function ListCustomersComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "Next");
} }
function ListCustomersComponent_ng_template_61_div_28_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_61_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListCustomersComponent_ng_template_61_div_28_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.form.title.errors.required);
} }
function ListCustomersComponent_ng_template_61_div_35_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_61_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListCustomersComponent_ng_template_61_div_35_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.form.title.errors.required);
} }
function ListCustomersComponent_ng_template_61_div_41_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_61_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListCustomersComponent_ng_template_61_div_41_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.form.title.errors.required);
} }
function ListCustomersComponent_ng_template_61_div_48_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_61_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListCustomersComponent_ng_template_61_div_48_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.form.title.errors.required);
} }
function ListCustomersComponent_ng_template_61_div_61_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_61_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListCustomersComponent_ng_template_61_div_61_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.form.title.errors.required);
} }
function ListCustomersComponent_ng_template_61_div_67_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_61_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListCustomersComponent_ng_template_61_div_67_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.form.title.errors.required);
} }
function ListCustomersComponent_ng_template_61_div_73_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_61_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListCustomersComponent_ng_template_61_div_73_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r16.form.title.errors.required);
} }
function ListCustomersComponent_ng_template_61_div_83_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_61_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListCustomersComponent_ng_template_61_div_83_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r17.form.title.errors.required);
} }
function ListCustomersComponent_ng_template_61_div_89_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_61_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListCustomersComponent_ng_template_61_div_89_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.form.title.errors.required);
} }
function ListCustomersComponent_ng_template_61_div_95_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_61_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListCustomersComponent_ng_template_61_div_95_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r19.form.title.errors.required);
} }
function ListCustomersComponent_ng_template_61_div_102_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_61_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListCustomersComponent_ng_template_61_div_102_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r20.form.title.errors.required);
} }
function ListCustomersComponent_ng_template_61_div_108_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_61_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListCustomersComponent_ng_template_61_div_108_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r21.form.title.errors.required);
} }
function ListCustomersComponent_ng_template_61_div_115_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_61_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ListCustomersComponent_ng_template_61_div_115_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r22.form.title.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ListCustomersComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Registrar Nuevo Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListCustomersComponent_ng_template_61_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r36.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Fecha de Registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Nombres");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ListCustomersComponent_ng_template_61_div_28_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Fecha de Nacimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ListCustomersComponent_ng_template_61_div_35_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ListCustomersComponent_ng_template_61_div_41_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Correo Electr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, ListCustomersComponent_ng_template_61_div_48_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Especificaciones de la Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Ojo Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "ESF");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, ListCustomersComponent_ng_template_61_div_61_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "CYL");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, ListCustomersComponent_ng_template_61_div_67_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "EJE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, ListCustomersComponent_ng_template_61_div_73_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Ojo Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "ESF");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, ListCustomersComponent_ng_template_61_div_83_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "CYL");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](89, ListCustomersComponent_ng_template_61_div_89_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "EJE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](94, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](95, ListCustomersComponent_ng_template_61_div_95_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "DIP");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](101, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](102, ListCustomersComponent_ng_template_61_div_102_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](107, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](108, ListCustomersComponent_ng_template_61_div_108_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "Encargado de la Medici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](114, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](115, ListCustomersComponent_ng_template_61_div_115_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Antecedentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](121, "textarea", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListCustomersComponent_ng_template_61_Template_button_click_123_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r38.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListCustomersComponent_ng_template_61_Template_button_click_125_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r39.guardarCliente(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r4.formCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.dni);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](47, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.fecha_modificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](49, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.nombres);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](51, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](53, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.fecha_nacimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](55, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](57, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](59, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.od_esferico);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](61, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.od_cilindrico);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](63, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.od_eje);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](65, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.oi_esferico);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](67, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.oi_cilindrico);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](69, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.oi_eje);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](71, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.dip);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](73, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.add);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](75, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.encargado);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](77, _c0, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.antecedentes);
} }
class ListCustomersComponent {
    constructor(service, modalService, fb, customerService) {
        this.service = service;
        this.modalService = modalService;
        this.fb = fb;
        this.customerService = customerService;
        this.nombres = "campoNombres";
        this.apellidos = "campoApellidos";
        this.dni = "campoDNI";
        this.telefono = "campoTelefono";
        this.fecha_nacimiento = "campoFechaNacimiento";
        this.fecha_modificacion = "campoFechaModificacion";
        this.email = "campoEmail";
        this.od_esferico = "campoOdEsferico";
        this.od_cilindrico = "campoOd_Cilindrico";
        this.od_eje = "campoOdEje";
        this.oi_esferico = "campoOiEsferico";
        this.oi_cilindrico = "campoOiCilindrico";
        this.oi_eje = "campoOiEje";
        this.dip = "campoDip";
        this.add = "campoAdd";
        this.encargado = "campoEncargado";
        this.antecedentes = "campoAntecedentes";
        this.customer = new src_models_customer__WEBPACK_IMPORTED_MODULE_0__.CustomersModel;
        this.medidas = new src_models_medidas__WEBPACK_IMPORTED_MODULE_1__.MedidasModel;
        this.submitted = false;
        this.listRoles = [
            { cNombre: 1, tNombre: "Admin" },
            { cNombre: 2, tNombre: "Vendedor" },
            { cNombre: 3, tNombre: "Contador" }
        ];
        this.listSedes = [
            { cNombre: 1, tNombre: "Lima" },
            { cNombre: 2, tNombre: "Arequipa" },
            { cNombre: 3, tNombre: "Cuzco" }
        ];
        this.customers$ = service.customers$;
        this.total$ = service.total$;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Clientes' }, { label: 'Lista de Clientes', active: true }];
        this.crearFormulario();
    }
    f(campo) {
        return this.formCustomer.get(campo);
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
     * Open center modal
     * @param centerDataModal center modal data
     */
    centerModal(centerDataModal, data) {
        const date = new Date(Date.now());
        this.f(this.dni).setValue(data.dni);
        this.f(this.fecha_modificacion).setValue(date.toLocaleDateString());
        this.f(this.nombres).setValue(data.nombres);
        this.f(this.apellidos).setValue(data.apellidos);
        this.fch_nac = data.fecha_nacimiento;
        this.f(this.fecha_nacimiento).setValue(new Date(this.fch_nac).toLocaleDateString());
        this.f(this.telefono).setValue(data.telefono);
        this.f(this.email).setValue(data.email);
        this.f(this.od_cilindrico).setValue(data.medidas[0].od_cilindrico);
        this.f(this.od_eje).setValue(data.medidas[0].od_eje);
        this.f(this.od_esferico).setValue(data.medidas[0].od_esferico);
        this.f(this.oi_cilindrico).setValue(data.medidas[0].oi_cilindrico);
        this.f(this.oi_esferico).setValue(data.medidas[0].oi_esferico);
        this.f(this.oi_eje).setValue(data.medidas[0].oi_eje);
        this.f(this.dip).setValue(data.medidas[0].dip);
        this.f(this.add).setValue(data.medidas[0].add);
        this.f(this.encargado).setValue(data.medidas[0].encargado);
        this.f(this.antecedentes).setValue(data.antecedentes);
        this.customer.id_cliente = data.id_cliente;
        this.customer.id_persona = data.id_persona;
        this.customer.antecedentes = data.antecedentes;
        this.modalService.open(centerDataModal, { size: 'lg', scrollable: true });
    }
    /**
 * Delete event
 */
    deleteEventData() {
        this.editEvent.remove();
        this.modalService.dismissAll();
    }
    closeEventModal() {
        this.modalService.dismissAll();
    }
    /**
     * Close event modal
     */
    /**
     * guarda cliente en la base de datos
     */
    guardarCliente() {
        if (this.formCustomer.valid) {
            this.customer.apellidos = this.f(this.apellidos).value;
            this.customer.dni = this.f(this.dni).value;
            this.customer.fecha_modificacion = new Date(Date.now());
            this.customer.fecha_nacimiento = this.fch_nac;
            this.customer.nombres = this.f(this.nombres).value;
            this.customer.telefono = this.f(this.telefono).value;
            this.customer.email = this.f(this.email).value;
            this.customer.antecedentes = this.f(this.antecedentes).value;
            this.medidas.add = Number(this.f(this.add).value);
            this.medidas.dip = Number(this.f(this.dip).value);
            this.medidas.encargado = this.f(this.encargado).value;
            this.medidas.od_cilindrico = Number(this.f(this.od_cilindrico).value);
            this.medidas.od_eje = Number(this.f(this.od_eje).value);
            this.medidas.od_esferico = Number(this.f(this.od_esferico).value);
            this.medidas.oi_cilindrico = Number(this.f(this.oi_cilindrico).value);
            this.medidas.oi_eje = Number(this.f(this.oi_eje).value);
            this.medidas.oi_esferico = Number(this.f(this.oi_esferico).value);
            const listaMedidas = [];
            listaMedidas.push(this.medidas);
            this.customer.medidas = listaMedidas;
            console.log(this.customer);
            this.customerService.updateClient(this.customer.id_cliente, this.customer.id_persona, this.customer).subscribe(res => {
                console.log("registrado ok");
                this.getListClients();
                this.modalService.dismissAll();
            });
        }
    }
    getListClients() {
        this.customerService.getAllClients().subscribe(res => {
            this.service.updateTable(res);
        });
    }
    /**
     * Save the event
     */
    /* saveEvent() {
      if (this.formData.valid) {
  
      }
      this.submitted = true;
    } */
    crearFormulario() {
        this.formCustomer = this.fb.group({
            [this.nombres]: [],
            [this.apellidos]: [],
            [this.dni]: [],
            [this.telefono]: [],
            [this.fecha_nacimiento]: [],
            [this.fecha_modificacion]: [],
            [this.email]: [],
            [this.od_cilindrico]: [],
            [this.od_eje]: [],
            [this.od_esferico]: [],
            [this.oi_cilindrico]: [],
            [this.oi_esferico]: [],
            [this.oi_eje]: [],
            [this.dip]: [],
            [this.add]: [],
            [this.encargado]: [],
            [this.antecedentes]: [],
        });
    }
}
ListCustomersComponent.ɵfac = function ListCustomersComponent_Factory(t) { return new (t || ListCustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_customer_service__WEBPACK_IMPORTED_MODULE_2__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_4__.ClienteService)); };
ListCustomersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ListCustomersComponent, selectors: [["app-list-customers"]], viewQuery: function ListCustomersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_3__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_customer_service__WEBPACK_IMPORTED_MODULE_2__.CustomerService, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe])], decls: 63, vars: 15, consts: [[1, "container-fluid"], ["title", "Lista de Clientes", 3, "breadcrumbItems"], [1, "row", "mt-2", "mb-2"], [1, "col-sm-12", "col-md-8", "justify-content-start"], [1, "row", "mb-2"], [1, "col-8", "search-box", "chat-search-box"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar cliente", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "border-light", "rounded", 3, "ngModel", "ngModelChange"], [1, "uil", "uil-search", "search-icon"], [1, "col-4"], [1, "btn-group", "text-md-start"], ["type", "button", 1, "btn", "btn-primary"], ["ngbTooltip", "Exportar", 1, "uil", "uil-import"], ["ngbTooltip", "Importar", 1, "uil", "uil-export"], [1, "col-sm-12", "col-md-4", "text-md-end"], [1, "dataTables_length"], [1, "d-inline-flex", "align-items-center"], ["name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "row"], [1, "col-12"], [1, "table-responsive", "mb-4"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "table", "table-centered", "datatables", "dt-responsive", "nowrap", "table-card-list", 2, "border-spacing", "0 12px", "width", "100%"], [1, "bg-transparent"], ["scope", "col", "sortable", "id", 3, "sort"], ["scope", "col", "sortable", "nombres", 3, "sort"], ["scope", "col", "sortable", "apellidos", 3, "sort"], ["scope", "col", "sortable", "dni", 3, "sort"], ["scope", "col", "sortable", "Telefono", 3, "sort"], ["scope", "col", "sortable", "total", 3, "sort"], ["scope", "col", "sortable", "Encarg. Medici\u00F3n", 3, "sort"], [4, "ngFor", "ngForOf"], [1, "float-end"], [3, "collectionSize", "page", "pageSize", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["centerDataModal", ""], [3, "result", "term"], [1, "avatar-xs", "d-inline-block", "me-2"], [1, "avatar-title", "rounded-circle", "bg-light", "text-body"], ["href", "javascript:void(0);", "placement", "top", "ngbTooltip", "Info", 1, "px-2", "text-info"], [1, "uil", "uil-info-circle", "font-size-18"], ["placement", "top", "ngbTooltip", "Editar", 1, "px-2", "text-primary", 3, "click"], [1, "uil", "uil-pen", "font-size-18"], ["href", "javascript:void(0);", "placement", "top", "ngbTooltip", "Eliminar", 1, "px-2", "text-danger"], [1, "uil", "uil-trash-alt", "font-size-18"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [3, "formGroup"], [1, "col-6"], [1, "mb-3"], [1, "control-label"], ["placeholder", "DNI del cliente", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Seleccione la fecha", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Nombres del cliente", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Apellidos del cliente", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["placeholder", "Tel\u00E9fono del cliente", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Correo electr\u00F3nico", "type", "email", 1, "form-control", 3, "formControlName", "ngClass"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-start"], ["placeholder", "Esfera", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Cilindro", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Eje", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Distancia Interpupilar", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Adici\u00F3n", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Nombres y apellidos del Oftometra", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], [1, "col-lg-12"], ["for", "billing-observaciones", 1, "form-label"], ["id", "billing-observaciones", "rows", "3", "placeholder", "Ingrese los antecedentes del cliente", 1, "form-control", 3, "formControlName"], [1, "text-end", "mt-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ListCustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ListCustomersComponent_Template_input_ngModelChange_7_listener($event) { return ctx.service.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Mostrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ListCustomersComponent_Template_select_ngModelChange_19_listener($event) { return ctx.service.pageSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " entradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("sort", function ListCustomersComponent_Template_th_sort_37_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("sort", function ListCustomersComponent_Template_th_sort_39_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Nombres");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("sort", function ListCustomersComponent_Template_th_sort_41_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("sort", function ListCustomersComponent_Template_th_sort_43_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "DNI");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("sort", function ListCustomersComponent_Template_th_sort_45_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("sort", function ListCustomersComponent_Template_th_sort_47_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Fecha de Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("sort", function ListCustomersComponent_Template_th_sort_49_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Encargado Medicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, ListCustomersComponent_tr_54_Template, 26, 18, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "ngb-pagination", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function ListCustomersComponent_Template_ngb_pagination_pageChange_57_listener($event) { return ctx.service.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](58, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, ListCustomersComponent_ng_template_59_Template, 1, 0, "ng-template", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, ListCustomersComponent_ng_template_60_Template, 1, 0, "ng-template", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, ListCustomersComponent_ng_template_61_Template, 127, 79, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.service.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 11, ctx.customers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](58, 13, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _sortable_directive__WEBPACK_IMPORTED_MODULE_3__.NgbdSortableHeader, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPaginationPrevious, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbHighlight, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWN1c3RvbWVycy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 53667:
/*!*********************************************************************!*\
  !*** ./src/app/pages/customer/list-customers/sortable.directive.ts ***!
  \*********************************************************************/
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

/***/ 85970:
/*!********************************!*\
  !*** ./src/models/customer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersModel": () => (/* binding */ CustomersModel)
/* harmony export */ });
class CustomersModel {
}


/***/ }),

/***/ 60898:
/*!*******************************!*\
  !*** ./src/models/medidas.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedidasModel": () => (/* binding */ MedidasModel)
/* harmony export */ });
class MedidasModel {
}


/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer_customer_module_ts.js.map