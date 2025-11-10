"use strict";
(self["webpackChunkminible_ng"] = self["webpackChunkminible_ng"] || []).push([["src_app_pages_products_products_module_ts"],{

/***/ 27969:
/*!*********************************************************************!*\
  !*** ./src/app/pages/products/add-product/add-product.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductComponent": () => (/* binding */ AddProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_models_accesorio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/accesorio */ 77044);
/* harmony import */ var src_models_lunas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/lunas */ 34976);
/* harmony import */ var src_models_monturas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/monturas */ 43514);
/* harmony import */ var _utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/sweetalert */ 63782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _directives_role_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../directives/role.directive */ 48185);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);














function AddProductComponent_ng_template_12_ng_template_0_Template(rf, ctx) { }
function AddProductComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AddProductComponent_ng_template_12_ng_template_0_Template, 0, 0, "ng-template", 18);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r4);
} }
function AddProductComponent_ng_template_18_ng_template_0_Template(rf, ctx) { }
function AddProductComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AddProductComponent_ng_template_18_ng_template_0_Template, 0, 0, "ng-template", 18);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r6);
} }
function AddProductComponent_ng_template_24_ng_template_0_Template(rf, ctx) { }
function AddProductComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AddProductComponent_ng_template_24_ng_template_0_Template, 0, 0, "ng-template", 18);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function AddProductComponent_ng_template_26_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_26_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_26_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ng-select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r15.nombre_sedesMontura);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r15.listSedes);
} }
function AddProductComponent_ng_template_26_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_26_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_26_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_26_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_26_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Ingrese solo letras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_26_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_26_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros y opcional hasta 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_26_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_26_span_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros y opcional hasta 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_26_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_26_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros enteros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function AddProductComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function AddProductComponent_ng_template_26_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r27.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "* Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Material *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, AddProductComponent_ng_template_26_div_19_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Marca *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, AddProductComponent_ng_template_26_div_26_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Sede *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, AddProductComponent_ng_template_26_div_32_Template, 3, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "C\u00F3digo Interno *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, AddProductComponent_ng_template_26_div_40_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "C\u00F3digo Montura *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, AddProductComponent_ng_template_26_div_47_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Talla *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, AddProductComponent_ng_template_26_div_54_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Color *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](60, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, AddProductComponent_ng_template_26_div_62_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, AddProductComponent_ng_template_26_div_63_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Precio de Compra *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](68, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](70, AddProductComponent_ng_template_26_div_70_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, AddProductComponent_ng_template_26_div_71_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "Precio de Venta *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](76, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, AddProductComponent_ng_template_26_span_78_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, AddProductComponent_ng_template_26_span_79_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "Stock *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](85, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, AddProductComponent_ng_template_26_div_87_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](88, AddProductComponent_ng_template_26_div_88_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddProductComponent_ng_template_26_Template_button_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r29.guardarMonturas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, " Registrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r5.formMonturas);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.fecha_registro_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.material_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](35, _c0, ctx_r5.formM.campoMaterialMontura.invalid && (ctx_r5.formM.campoMaterialMontura.dirty || ctx_r5.formM.campoMaterialMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.formM.campoMaterialMontura.errors == null ? null : ctx_r5.formM.campoMaterialMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.marca_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](37, _c0, ctx_r5.formM.campoMarcaMontura.invalid && (ctx_r5.formM.campoMarcaMontura.dirty || ctx_r5.formM.campoMarcaMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.formM.campoMarcaMontura.errors == null ? null : ctx_r5.formM.campoMarcaMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appRole", ctx_r5.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.codigo_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](39, _c0, ctx_r5.formM.campoCodigoMontura.invalid && (ctx_r5.formM.campoCodigoMontura.dirty || ctx_r5.formM.campoCodigoMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.formM.campoCodigoMontura.errors == null ? null : ctx_r5.formM.campoCodigoMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.codigo_montura_caja);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](41, _c0, ctx_r5.formM.campoCodigoMonturaCaja.invalid && (ctx_r5.formM.campoCodigoMonturaCaja.dirty || ctx_r5.formM.campoCodigoMonturaCaja.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.formM.campoCodigoMonturaCaja.errors == null ? null : ctx_r5.formM.campoCodigoMonturaCaja.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.talla_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](43, _c0, ctx_r5.formM.campoTallaMontura.invalid && (ctx_r5.formM.campoTallaMontura.dirty || ctx_r5.formM.campoTallaMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.formM.campoTallaMontura.errors == null ? null : ctx_r5.formM.campoTallaMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.color_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](45, _c0, ctx_r5.formM.campoColorMontura.invalid && (ctx_r5.formM.campoColorMontura.dirty || ctx_r5.formM.campoColorMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.formM.campoColorMontura.errors == null ? null : ctx_r5.formM.campoColorMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.formM.campoColorMontura.errors == null ? null : ctx_r5.formM.campoColorMontura.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.precio_compra_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](47, _c0, ctx_r5.formM.campoCompraMontura.invalid && (ctx_r5.formM.campoCompraMontura.dirty || ctx_r5.formM.campoCompraMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.formM.campoCompraMontura.errors == null ? null : ctx_r5.formM.campoCompraMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.formM.campoCompraMontura.errors == null ? null : ctx_r5.formM.campoCompraMontura.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.precio_venta_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](49, _c0, ctx_r5.formM.campoVentaMontura.invalid && (ctx_r5.formM.campoVentaMontura.dirty || ctx_r5.formM.campoVentaMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.formM.campoVentaMontura.errors == null ? null : ctx_r5.formM.campoVentaMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.formM.campoVentaMontura.errors == null ? null : ctx_r5.formM.campoVentaMontura.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.cantidad_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](51, _c0, ctx_r5.formM.campoCantidadMontura.invalid && (ctx_r5.formM.campoCantidadMontura.dirty || ctx_r5.formM.campoCantidadMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.formM.campoCantidadMontura.errors == null ? null : ctx_r5.formM.campoCantidadMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.formM.campoCantidadMontura.errors == null ? null : ctx_r5.formM.campoCantidadMontura.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r5.formMonturas.valid);
} }
function AddProductComponent_ng_template_28_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_28_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ng-select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r31.nombre_sedesLuna);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r31.listSedes);
} }
function AddProductComponent_ng_template_28_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_28_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros enteros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_28_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_28_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros y opcional hasta 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_28_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_28_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros y opcional hasta 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function AddProductComponent_ng_template_28_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r38.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "* Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Material *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, AddProductComponent_ng_template_28_div_19_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Sede *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, AddProductComponent_ng_template_28_div_25_Template, 3, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Stock *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, AddProductComponent_ng_template_28_div_33_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, AddProductComponent_ng_template_28_div_34_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Precio de Compra *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, AddProductComponent_ng_template_28_div_41_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, AddProductComponent_ng_template_28_div_42_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Precio de Venta *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, AddProductComponent_ng_template_28_div_49_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, AddProductComponent_ng_template_28_div_50_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddProductComponent_ng_template_28_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r40.guardarLunas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, " Registrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r7.formLunas);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r7.fecha_registro_luna);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r7.material_luna);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](19, _c0, ctx_r7.formL.campoMaterialLuna.invalid && (ctx_r7.formL.campoMaterialLuna.dirty || ctx_r7.formL.campoMaterialLuna.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.formL.campoMaterialLuna.errors == null ? null : ctx_r7.formL.campoMaterialLuna.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appRole", ctx_r7.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r7.cantidad_luna);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](21, _c0, ctx_r7.formL.campoCantidadLuna.invalid && (ctx_r7.formL.campoCantidadLuna.dirty || ctx_r7.formL.campoCantidadLuna.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.formL.campoCantidadLuna.errors == null ? null : ctx_r7.formL.campoCantidadLuna.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.formL.campoCantidadLuna.errors == null ? null : ctx_r7.formL.campoCantidadLuna.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r7.precio_compra_luna);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](23, _c0, ctx_r7.formL.campoCompraLuna.invalid && (ctx_r7.formL.campoCompraLuna.dirty || ctx_r7.formL.campoCompraLuna.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.formL.campoCompraLuna.errors == null ? null : ctx_r7.formL.campoCompraLuna.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.formL.campoCompraLuna.errors == null ? null : ctx_r7.formL.campoCompraLuna.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r7.precio_venta_luna);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](25, _c0, ctx_r7.formL.campoVentaLuna.invalid && (ctx_r7.formL.campoVentaLuna.dirty || ctx_r7.formL.campoVentaLuna.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.formL.campoVentaLuna.errors == null ? null : ctx_r7.formL.campoVentaLuna.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.formL.campoVentaLuna.errors == null ? null : ctx_r7.formL.campoVentaLuna.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r7.formLunas.valid);
} }
function AddProductComponent_ng_template_30_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_30_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ng-select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r42.nombre_sedesAccesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r42.listSedes);
} }
function AddProductComponent_ng_template_30_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_30_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros enteros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_30_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_30_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros y opcional hasta 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_30_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_30_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros y opcional hasta 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddProductComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function AddProductComponent_ng_template_30_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r49.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "* Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Nombre del Accesorio *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, AddProductComponent_ng_template_30_div_19_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Sede *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, AddProductComponent_ng_template_30_div_25_Template, 3, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Stock *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, AddProductComponent_ng_template_30_div_33_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, AddProductComponent_ng_template_30_div_34_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Precio de Compra *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, AddProductComponent_ng_template_30_div_41_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, AddProductComponent_ng_template_30_div_42_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Precio de Venta *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, AddProductComponent_ng_template_30_div_49_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, AddProductComponent_ng_template_30_div_50_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddProductComponent_ng_template_30_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r51.guardarAccesorios(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, " Registrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r9.formAccesorios);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r9.fecha_registro_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r9.nombre_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](19, _c0, ctx_r9.formA.campoNombreAccesorio.invalid && (ctx_r9.formA.campoNombreAccesorio.dirty || ctx_r9.formA.campoNombreAccesorio.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.formA.campoNombreAccesorio.errors == null ? null : ctx_r9.formA.campoNombreAccesorio.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appRole", ctx_r9.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r9.cantidad_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](21, _c0, ctx_r9.formA.campoCantidadAccesorio.invalid && (ctx_r9.formA.campoCantidadAccesorio.dirty || ctx_r9.formA.campoCantidadAccesorio.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.formA.campoCantidadAccesorio.errors == null ? null : ctx_r9.formA.campoCantidadAccesorio.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.formA.campoCantidadAccesorio.errors == null ? null : ctx_r9.formA.campoCantidadAccesorio.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r9.precio_compra_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](23, _c0, ctx_r9.formA.campoCompraAccesorio.invalid && (ctx_r9.formA.campoCompraAccesorio.dirty || ctx_r9.formA.campoCompraAccesorio.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.formA.campoCompraAccesorio.errors == null ? null : ctx_r9.formA.campoCompraAccesorio.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.formA.campoCompraAccesorio.errors == null ? null : ctx_r9.formA.campoCompraAccesorio.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("formControlName", ctx_r9.precio_venta_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](25, _c0, ctx_r9.formA.campoVentaAccesorio.invalid && (ctx_r9.formA.campoVentaAccesorio.dirty || ctx_r9.formA.campoVentaAccesorio.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.formA.campoVentaAccesorio.errors == null ? null : ctx_r9.formA.campoVentaAccesorio.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.formA.campoVentaAccesorio.errors == null ? null : ctx_r9.formA.campoVentaAccesorio.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r9.formAccesorios.valid);
} }
class AddProductComponent {
    constructor(fb, productosService, userService, usuarioService) {
        this.fb = fb;
        this.productosService = productosService;
        this.userService = userService;
        this.usuarioService = usuarioService;
        this.role = 'Admin';
        this.idSede = "";
        this.submitted = false;
        this.orden_montura = "campoOrdenMontura";
        this.material_montura = "campoMaterialMontura";
        this.marca_montura = "campoMarcaMontura";
        this.talla_montura = "campoTallaMontura";
        this.color_montura = "campoColorMontura";
        this.codigo_montura = "campoCodigoMontura";
        this.codigo_montura_caja = "campoCodigoMonturaCaja";
        this.cantidad_montura = "campoCantidadMontura";
        this.precio_compra_montura = "campoCompraMontura";
        this.precio_venta_montura = "campoVentaMontura";
        this.fecha_registro_montura = "campoFechaRegistroMontura";
        this.fecha_modificacion_montura = "campoFechaModificacionMontura";
        this.nombre_sedesMontura = "campoSedeMOntura";
        this.orden_luna = "campoOrdenLuna";
        this.material_luna = "campoMaterialLuna";
        this.cantidad_luna = "campoCantidadLuna";
        this.precio_compra_luna = "campoCompraLuna";
        this.precio_venta_luna = "campoVentaLuna";
        this.fecha_registro_luna = "campoFechaRegistroLuna";
        this.fecha_modificacion_luna = "campoFechaModificacionLuna";
        this.nombre_sedesLuna = "campoSedeLuna";
        this.orden_accesorio = "campoOrdenAccesorio";
        this.nombre_accesorio = "campoNombreAccesorio";
        this.cantidad_accesorio = "campoCantidadAccesorio";
        this.precio_compra_accesorio = "campoCompraAccesorio";
        this.precio_venta_accesorio = "campoVentaAccesorio";
        this.fecha_registro_accesorio = "campoFechaRegistroAccesorio";
        this.fecha_modificacion_accesorio = "campoFechaModificacionAccesorio";
        this.nombre_sedesAccesorio = "campoSedeAccesorio";
        this.lunas = new src_models_lunas__WEBPACK_IMPORTED_MODULE_1__.LunasModel;
        this.monturas = new src_models_monturas__WEBPACK_IMPORTED_MODULE_2__.MonturasModel;
        this.accesorios = new src_models_accesorio__WEBPACK_IMPORTED_MODULE_0__.AccesorioModel;
        this.numberPattern = '[0-9]+';
        this.decimalPattern = /^\d+(\.\d{2})?$/;
        this.lettersPattern = '[a-zA-Z ]*';
    }
    ;
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Añadir Productos', active: true }];
        this.getListSedes();
        this.crearFormulario();
    }
    getListSedes() {
        this.listSedes = JSON.parse(localStorage.getItem('sedes'));
        this.idSede = this.usuarioService.getSedebyUser();
    }
    crearFormulario() {
        this.fecha_actual = new Date(Date.now());
        this.formMonturas = this.fb.group({
            /* [this.orden_montura]:[null,[
              Validators.required,
              Validators.pattern(this.numberPattern)
            ]], */
            [this.material_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required
                ]],
            [this.marca_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required
                ]],
            [this.talla_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required
                ]],
            [this.color_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.lettersPattern)
                ]],
            [this.codigo_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                ]],
            [this.codigo_montura_caja]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                ]],
            [this.cantidad_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.numberPattern)
                ]],
            [this.precio_compra_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.decimalPattern)
                ]],
            [this.precio_venta_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.decimalPattern)
                ]],
            [this.fecha_registro_montura]: [{ value: this.fecha_actual.toLocaleDateString(), disabled: true }],
            [this.fecha_modificacion_montura]: [],
            [this.nombre_sedesMontura]: [this.idSede, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
        });
        this.formLunas = this.fb.group({
            /* [this.orden_luna]:[null,[
              Validators.required,
              Validators.pattern(this.numberPattern)
            ]], */
            [this.material_luna]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required
                ]],
            [this.cantidad_luna]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.numberPattern)
                ]],
            [this.precio_compra_luna]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.decimalPattern)
                ]],
            [this.precio_venta_luna]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.decimalPattern)
                ]],
            [this.fecha_registro_luna]: [{ value: this.fecha_actual.toLocaleDateString(), disabled: true }],
            [this.fecha_modificacion_luna]: [],
            [this.nombre_sedesLuna]: [this.idSede, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
        });
        this.formAccesorios = this.fb.group({
            /* [this.orden_accesorio]:[null,[
              Validators.required,
              Validators.pattern(this.numberPattern)
            ]], */
            [this.nombre_accesorio]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required
                ]],
            [this.cantidad_accesorio]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.numberPattern)
                ]],
            [this.precio_compra_accesorio]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.decimalPattern)
                ]],
            [this.precio_venta_accesorio]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.decimalPattern)
                ]],
            [this.fecha_registro_accesorio]: [{ value: this.fecha_actual.toLocaleDateString(), disabled: true }],
            [this.fecha_modificacion_accesorio]: [],
            [this.nombre_sedesAccesorio]: [this.idSede, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
        });
    }
    /**
     * Save the event
     */
    saveEvent() {
        if (this.formMonturas.valid) {
        }
        this.submitted = true;
    }
    fA(campo) {
        return this.formAccesorios.get(campo);
    }
    fL(campo) {
        return this.formLunas.get(campo);
    }
    fM(campo) {
        return this.formMonturas.get(campo);
    }
    guardarAccesorios() {
        if (this.formAccesorios.valid) {
            //this.accesorios.num_orden = Number(this.fA(this.orden_accesorio).value);
            this.accesorios.nombre_accesorio = this.fA(this.nombre_accesorio).value;
            this.accesorios.cantidad = Number(this.fA(this.cantidad_accesorio).value);
            this.accesorios.fecha_creacion_accesorio = new Date(Date.now());
            this.accesorios.precio_accesorio_v = Number(this.fA(this.precio_venta_accesorio).value);
            this.accesorios.precio_accesorio_c = Number(this.fA(this.precio_compra_accesorio).value);
            this.accesorios.fecha_modificacion_accesorio = new Date(Date.now());
            this.accesorios.id_sede = this.fA(this.nombre_sedesAccesorio).value;
            this.accesorios.habilitado = true;
            this.accesorios.tipo = "accesorio";
            (0,_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("loading", "Cargando...");
            this.productosService.createAccesorios(this.accesorios).subscribe(res => {
                (0,_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("close", null);
                (0,_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("success", "Accesorio guardado");
                this.formAccesorios.reset();
                this.fA(this.fecha_registro_accesorio).setValue(this.fecha_actual.toLocaleDateString());
            });
        }
        else {
        }
    }
    guardarLunas() {
        if (this.formLunas.valid) {
            //this.lunas.num_orden = Number(this.fL(this.orden_luna).value);
            this.lunas.material = this.fL(this.material_luna).value;
            this.lunas.precio_luna_c = Number(this.fL(this.precio_compra_luna).value);
            this.lunas.precio_luna_v = Number(this.fL(this.precio_venta_luna).value);
            this.lunas.fecha_creacion_luna = new Date(Date.now());
            this.lunas.fecha_modificacion_luna = new Date(Date.now());
            this.lunas.cantidad = Number(this.fL(this.cantidad_luna).value);
            this.lunas.id_sede = this.fL(this.nombre_sedesLuna).value;
            this.lunas.habilitado = true;
            this.lunas.tipo = "luna";
            (0,_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("loading", "Cargando...");
            this.productosService.createLunas(this.lunas).subscribe(res => {
                (0,_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("close", null);
                (0,_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("success", "Luna guardada");
                this.formLunas.reset();
                this.fL(this.fecha_registro_luna).setValue(this.fecha_actual.toLocaleDateString());
            });
        }
        else {
        }
    }
    guardarMonturas() {
        if (this.formMonturas.valid) {
            //this.monturas.num_orden = Number(this.fM(this.orden_montura).value);
            this.monturas.material = this.fM(this.material_montura).value;
            this.monturas.marca = this.fM(this.marca_montura).value;
            this.monturas.talla = this.fM(this.talla_montura).value;
            this.monturas.color = this.fM(this.color_montura).value;
            this.monturas.codigo = this.fM(this.codigo_montura).value;
            this.monturas.codigo_montura = this.fM(this.codigo_montura_caja).value;
            this.monturas.precio_montura_c = Number(this.fM(this.precio_compra_montura).value);
            this.monturas.precio_montura_v = Number(this.fM(this.precio_venta_montura).value);
            this.monturas.fecha_creacion_monturas = new Date(Date.now());
            this.monturas.fecha_modificacion_monturas = new Date(Date.now());
            this.monturas.cantidad = Number(this.fM(this.cantidad_montura).value);
            this.monturas.id_sede = this.fM(this.nombre_sedesMontura).value;
            this.monturas.habilitado = true;
            this.monturas.tipo = "montura";
            (0,_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("loading", "Cargando...");
            this.productosService.createMonturas(this.monturas).subscribe(res => {
                (0,_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("close", null);
                (0,_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("success", "Montura guardada");
                this.formMonturas.reset();
                this.fM(this.fecha_registro_montura).setValue(this.fecha_actual.toLocaleDateString());
            });
        }
        else {
            return;
        }
    }
    /**
     * Returns form Monturas
     */
    get formM() {
        return this.formMonturas.controls;
    }
    /**
     * Returns form Lunas
     */
    get formL() {
        return this.formLunas.controls;
    }
    /**
     * Returns form Accesorios
     */
    get formA() {
        return this.formAccesorios.controls;
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__.UsuarioService)); };
AddProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 32, vars: 6, consts: [[1, "container-fluid"], ["title", "Registrar un Producto", 3, "breadcrumbItems"], [1, "row", "mb-4"], [1, "col-xl-12"], [1, "card", "mb-0"], ["ngbNav", "", 1, "nav", "nav-tabs", "nav-justified", "nav-tabs-custom", 3, "activeId"], ["justifiednav", "ngbNav"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", 1, "nav-link"], [1, "uil", "uil-nerd", "font-size-20"], [1, "d-none", "d-sm-block"], ["ngbNavContent", ""], [1, "uil", "uil-panorama-h-alt", "font-size-20"], [1, "uil", "uil-box", "font-size-20"], [3, "ngbNavOutlet"], ["TabContentAbout", ""], ["TabContentTasks", ""], ["TabContentMessages", ""], [3, "ngTemplateOutlet"], [1, "tab-content", "p-4"], [1, "tab-pane", "active"], [3, "formGroup", "ngSubmit"], [1, "card-title-desc", "text-danger"], [1, "row"], [1, "col-12", "col-sm-3"], [1, "mb-3"], [1, "control-label"], ["placeholder", "Seleccione la fecha", "type", "text", "name", "title", 1, "form-control", 3, "formControlName"], [1, "col-12", "col-sm-4"], ["placeholder", "Material de la montura", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["placeholder", "Marca de la montura", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], ["role", "toolbar", 1, "btn-toolbar"], ["class", "col-12 d-grid", 4, "appRole"], ["placeholder", "C\u00F3digo interno", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "C\u00F3digo montura", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Talla de la montura", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Color de la montura", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Precio", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Cantidad", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], [1, "text-end", "mt-2"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "disabled", "click"], [1, "col-12", "d-grid"], ["ngbDropdown", ""], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName"], ["placeholder", "Material de la luna", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Accesorio", "type", "text", "name", "accesorio", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Cantidad", "type", "text", "name", "cantidad", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Precio", "type", "text", "name", "accesorio_compra", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Precio", "type", "text", "name", "accesorio_venta", 1, "form-control", 3, "formControlName", "ngClass"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ul", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Montura");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, AddProductComponent_ng_template_12_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Luna");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, AddProductComponent_ng_template_18_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Accesorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, AddProductComponent_ng_template_24_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, AddProductComponent_ng_template_26_Template, 92, 53, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, AddProductComponent_ng_template_28_Template, 54, 27, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, AddProductComponent_ng_template_30_Template, 54, 27, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _directives_role_directive__WEBPACK_IMPORTED_MODULE_7__.RoleDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdown, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 61713:
/*!*******************************************************************!*\
  !*** ./src/app/pages/products/inventario/inventario.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventarioComponent": () => (/* binding */ InventarioComponent)
/* harmony export */ });
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortable.directive */ 67321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xlsx */ 32551);
/* harmony import */ var save_as_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! save-as-file */ 88083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-ng-autocomplete */ 84933);














const _c0 = ["autocomplete"];
function InventarioComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "a", 34);
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", item_r7.id_producto, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function InventarioComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 34);
} if (rf & 2) {
    const notFound_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", notFound_r8, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function InventarioComponent_tr_69_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ngb-highlight", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ngb-highlight", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "ngb-highlight", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "ngb-highlight", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "ngb-highlight", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "ngb-highlight", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "ngb-highlight", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "ngb-highlight", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "ngb-highlight", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "ngb-highlight", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InventarioComponent_tr_69_Template_a_click_24_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const data_r9 = restoredCtx.$implicit; const i_r10 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r11.eliminar(data_r9, i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", data_r9.material);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", data_r9.marca);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", data_r9.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", data_r9.talla);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", data_r9.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", data_r9.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", data_r9.precio_montura_c);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", data_r9.precio_montura_v);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](22, 10, data_r9.fecha_creacion_monturas, "dd/MM/yyyy"));
} }
function InventarioComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Cargando ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class InventarioComponent {
    constructor(fb, usuarioService, monturasService) {
        this.fb = fb;
        this.usuarioService = usuarioService;
        this.monturasService = monturasService;
        this.mostrarSpinner = false;
        this.isMasterSel = false;
        this.listSedes = [];
        this.checkedMonturasList = [];
        this.listAllProducts = [];
        this.keyword = "id_producto";
        this.products = [];
        this.nombre_sedes = "campoSede";
        this.idSede = '';
        this.monturasList = [];
    }
    ngOnInit() {
        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("loading", "Cargando...");
        this.getListSedes();
        this.getListMonturas();
        this.crearFormulario();
        this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Inventario de Monturas', active: true }];
    }
    getListMonturas() {
        this.monturasService.getProductosbySede(this.usuarioService.getSedebyUser(), 'montura').subscribe(res => {
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("close", null);
            this.listMonturas = res;
            const propiedad = {
                isSelected: false
            };
            this.listMonturas.forEach(elem => {
                Object.assign(elem, propiedad);
            });
            this.mostrarSpinner = true;
        });
    }
    crearFormulario() {
        this.formInventario = this.fb.group({
            [this.nombre_sedes]: [this.idSede]
        });
    }
    fS(campo) {
        return this.formInventario.get(campo);
    }
    changeSede() {
        this.products = [];
        this.idSede = this.fS(this.nombre_sedes).value;
        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("loading", "Cargando...");
        this.updateListMonturas(this.idSede);
    }
    updateListMonturas(idSede) {
        this.monturasService.getProductosbySede(idSede, 'montura').subscribe(res => {
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("close", null);
            this.listMonturas = res;
            const propiedad = {
                isSelected: false
            };
            this.listMonturas.forEach(elem => {
                Object.assign(elem, propiedad);
            });
            this.mostrarSpinner = true;
        });
    }
    getListSedes() {
        this.listSedes = JSON.parse(localStorage.getItem('sedes'));
        this.idSede = this.usuarioService.getSedebyUser();
    }
    removeProduct() {
        this.products = this.products.filter((name) => name.isSelected !== false);
    }
    eliminar(product, i) {
        this.products[i].isSelected = false;
        this.removeProduct();
    }
    selectEvent(item) {
        const productExistInCart = this.products.find((name) => name.id_producto === item.id_producto);
        if (!productExistInCart) {
            switch (item.tipo) {
                case 'montura':
                    this.products.push(Object.assign(Object.assign({}, item), { isSelected: true }));
                    this.autocomplete.clear();
                    this.autocomplete.close();
                    break;
                default:
                    break;
            }
        }
        else {
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("error", "Este producto ya fue registrado");
            this.autocomplete.clear();
            this.autocomplete.close();
            return;
        }
    }
    onChangeSearch(search) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }
    onFocused(e) {
        // do something
        this.autocomplete.close();
    }
    exportarMonturas() {
        const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const EXCEL_EXTENSION = '.xlsx';
        const listTmp = this.filterArrays(this.listMonturas, this.products);
        this.products.push(...listTmp);
        let data = [];
        data = this.products.map((monturas) => {
            return {
                "ID MONTURA": monturas.id_producto,
                //"ORDEN": monturas.num_orden,
                "TALLA": monturas.talla,
                "CODIGO MONTURA": monturas.codigo_montura,
                "CODIGO": monturas.codigo,
                "MARCA": monturas.marca,
                "CANTIDAD": monturas.cantidad,
                "COLOR": monturas.color,
                "MATERIAL": monturas.material,
                "INVENTARIO": monturas.isSelected ? 'SI' : 'NO',
                "FECHA INGRESO": new Date(monturas.fecha_creacion_monturas).toLocaleDateString('en-GB')
            };
        });
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_7__.utils.json_to_sheet(data);
        const workbook = {
            Sheets: {
                'hoja': worksheet
            },
            SheetNames: ['hoja']
        };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_7__.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE });
        const nombreSede = this.listSedes.find(res => (res.id_sede == this.fS(this.nombre_sedes).value));
        (0,save_as_file__WEBPACK_IMPORTED_MODULE_2__["default"])(blobData, 'monturas' + '_' + nombreSede.nombre_sede);
        this.products = [];
    }
    filterArrays(arr1, arr2) {
        let res = [];
        res = arr1.filter(el => {
            return !arr2.find(element => {
                return element.id_producto === el.id_producto;
            });
        });
        return res;
    }
}
InventarioComponent.ɵfac = function InventarioComponent_Factory(t) { return new (t || InventarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__.ProductosService)); };
InventarioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: InventarioComponent, selectors: [["app-inventario"]], viewQuery: function InventarioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.autocomplete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe])], decls: 74, vars: 16, consts: [[1, "container-fluid"], ["title", "Inventario de Monturas", 3, "breadcrumbItems"], [1, "row"], [1, "col-12", "mb-2"], ["role", "toolbar", 1, "btn-toolbar"], [1, "col-12", "col-md-3", "d-grid", "mb-2"], [3, "formGroup"], ["ngbDropdown", ""], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName", "change"], [1, "col-12", "col-md-6", "d-grid", "mb-2", "px-2"], [1, "position-relative"], ["placeholder", "Buscar productos", "historyIdentifier", "", "focusFirst", "true", "minQueryLength", "8", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused", "keyup.enter"], ["autocomplete", ""], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "col-12", "col-md-3", "d-grid"], [1, "btn-group", "mb-2"], ["type", "button", "value", "Descargar Archivo", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "row", "md-2"], [1, "col-sm-12", "col-md-12"], [1, "dataTables_length", "text-md-end"], [1, "d-inline-flex", "align-items-center"], ["name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "form-select", "form-select-sm"], [3, "ngValue"], [1, "col-12"], [1, "table-responsive", "mb-4"], [1, "table", "table-centered", "table-nowrap", "mb-0", "align-middle", "table-card-list", 2, "border-spacing", "0 12px", "width", "100%"], [1, "bg-transparent"], [2, "width", "20px"], [2, "width", "170px"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "row", "justify-content-md-between", "align-items-md-center"], [1, "text-md-end", "float-md-end", "pagination-rounded"], [3, "innerHTML"], [3, "result", "term"], ["placement", "top", "ngbTooltip", "Eliminar", 1, "px-2", "text-danger", 3, "click"], [1, "uil", "uil-trash-alt", "font-size-18"], [1, "text-center", "my-3"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "mdi", "mdi-loading", "mdi-spin", "font-size-20", "align-middle", "me-2"]], template: function InventarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ng-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function InventarioComponent_Template_ng_select_change_9_listener() { return ctx.changeSede(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ng-autocomplete", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selected", function InventarioComponent_Template_ng_autocomplete_selected_12_listener($event) { return ctx.selectEvent($event); })("inputChanged", function InventarioComponent_Template_ng_autocomplete_inputChanged_12_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function InventarioComponent_Template_ng_autocomplete_inputFocused_12_listener($event) { return ctx.onFocused($event); })("keyup.enter", function InventarioComponent_Template_ng_autocomplete_keyup_enter_12_listener($event) { return ctx.selectEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, InventarioComponent_ng_template_14_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, InventarioComponent_ng_template_16_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InventarioComponent_Template_input_click_20_listener() { return ctx.exportarMonturas(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Mostrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " entradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Ord.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Marca");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "C\u00F3d.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Talla");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "P. Compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "P. Venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Fecha de ing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, InventarioComponent_tr_69_Template, 26, 13, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, InventarioComponent_div_70_Template, 6, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formInventario);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx.nombre_sedes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.listSedes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.listMonturas)("searchKeyword", ctx.keyword)("itemTemplate", _r1)("notFoundTemplate", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !(ctx.products.length > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdown, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__.AutocompleteComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbHighlight, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRhcmlvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 67321:
/*!*****************************************************************!*\
  !*** ./src/app/pages/products/inventario/sortable.directive.ts ***!
  \*****************************************************************/
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

/***/ 82020:
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsRoutingModule": () => (/* binding */ ProductsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _accesorios_accesorios_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accesorios/accesorios.component */ 2101);
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product/add-product.component */ 27969);
/* harmony import */ var _lunas_lunas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lunas/lunas.component */ 77153);
/* harmony import */ var _monturas_monturas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monturas/monturas.component */ 86506);
/* harmony import */ var _update_excel_update_excel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-excel/update-excel.component */ 50520);
/* harmony import */ var _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventario/inventario.component */ 61713);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 85298);
/* harmony import */ var _traslados_traslados_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./traslados/traslados.component */ 17475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);











const routes = [
    {
        path: 'addproducts',
        component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_1__.AddProductComponent, data: {
            role: ['Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard]
    },
    {
        path: 'accesorios',
        component: _accesorios_accesorios_component__WEBPACK_IMPORTED_MODULE_0__.AccesoriosComponent,
        data: {
            role: ['Vendedor', 'Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard]
    },
    {
        path: 'lunas',
        component: _lunas_lunas_component__WEBPACK_IMPORTED_MODULE_2__.LunasComponent,
        data: {
            role: ['Vendedor', 'Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard]
    },
    {
        path: 'monturas',
        component: _monturas_monturas_component__WEBPACK_IMPORTED_MODULE_3__.MonturasComponent,
        data: {
            role: ['Vendedor', 'Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard]
    },
    {
        path: 'updateexcel',
        component: _update_excel_update_excel_component__WEBPACK_IMPORTED_MODULE_4__.UpdateExcelComponent,
        data: {
            role: ['Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard]
    },
    {
        path: 'inventario',
        component: _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_5__.InventarioComponent,
        data: {
            role: ['Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard]
    },
    {
        path: 'traslados',
        component: _traslados_traslados_component__WEBPACK_IMPORTED_MODULE_7__.TrasladosComponent,
        data: {
            role: ['Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard]
    }
];
class ProductsRoutingModule {
}
ProductsRoutingModule.ɵfac = function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); };
ProductsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 47827:
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng5-slider */ 38391);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var _accesorios_accesorios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accesorios/accesorios.component */ 2101);
/* harmony import */ var _accesorios_sortable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accesorios/sortable.directive */ 42935);
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-product/add-product.component */ 27969);
/* harmony import */ var _lunas_lunas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lunas/lunas.component */ 77153);
/* harmony import */ var _monturas_monturas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monturas/monturas.component */ 86506);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-routing.module */ 82020);
/* harmony import */ var _update_excel_update_excel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-excel/update-excel.component */ 50520);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 68346);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-dropzone */ 82629);
/* harmony import */ var _syncfusion_ej2_angular_barcode_generator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @syncfusion/ej2-angular-barcode-generator */ 91023);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-ng-autocomplete */ 84933);
/* harmony import */ var src_utils_labels__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/utils/labels */ 69943);
/* harmony import */ var _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inventario/inventario.component */ 61713);
/* harmony import */ var src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/directives/role.module */ 2974);
/* harmony import */ var _traslados_traslados_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./traslados/traslados.component */ 17475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);























const DEFAULT_DROPZONE_CONFIG = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
};
class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        src_utils_labels__WEBPACK_IMPORTED_MODULE_10__.Labels,
        {
            provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_15__.DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG
        }
    ], imports: [[
            _products_routing_module__WEBPACK_IMPORTED_MODULE_8__.ProductsRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDropdownModule,
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_15__.DropzoneModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
            ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbCollapseModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_20__.NgxDropzoneModule,
            _syncfusion_ej2_angular_barcode_generator__WEBPACK_IMPORTED_MODULE_21__.BarcodeGeneratorAllModule,
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_22__.AutocompleteLibModule,
            _syncfusion_ej2_angular_barcode_generator__WEBPACK_IMPORTED_MODULE_21__.QRCodeGeneratorAllModule,
            src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_12__.DirectivesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__.AddProductComponent, _lunas_lunas_component__WEBPACK_IMPORTED_MODULE_6__.LunasComponent, _monturas_monturas_component__WEBPACK_IMPORTED_MODULE_7__.MonturasComponent, _accesorios_accesorios_component__WEBPACK_IMPORTED_MODULE_3__.AccesoriosComponent, _accesorios_sortable_directive__WEBPACK_IMPORTED_MODULE_4__.NgbdSortableHeader, _update_excel_update_excel_component__WEBPACK_IMPORTED_MODULE_9__.UpdateExcelComponent, _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_11__.InventarioComponent, _traslados_traslados_component__WEBPACK_IMPORTED_MODULE_13__.TrasladosComponent], imports: [_products_routing_module__WEBPACK_IMPORTED_MODULE_8__.ProductsRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbDropdownModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_15__.DropzoneModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
        ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbTypeaheadModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbCollapseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_20__.NgxDropzoneModule,
        _syncfusion_ej2_angular_barcode_generator__WEBPACK_IMPORTED_MODULE_21__.BarcodeGeneratorAllModule,
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_22__.AutocompleteLibModule,
        _syncfusion_ej2_angular_barcode_generator__WEBPACK_IMPORTED_MODULE_21__.QRCodeGeneratorAllModule,
        src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_12__.DirectivesModule] }); })();


/***/ }),

/***/ 17475:
/*!*****************************************************************!*\
  !*** ./src/app/pages/products/traslados/traslados.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrasladosComponent": () => (/* binding */ TrasladosComponent)
/* harmony export */ });
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-ng-autocomplete */ 84933);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);












const _c0 = ["autocomplete"];
function TrasladosComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "a", 33);
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", item_r8.id_producto, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function TrasladosComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 33);
} if (rf & 2) {
    const notFound_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", notFound_r9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function TrasladosComponent_table_62_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrasladosComponent_table_62_tr_26_Template_a_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const data_r11 = restoredCtx.$implicit; const i_r12 = restoredCtx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r13.eliminar(data_r11, i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r11.material);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r11.marca);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r11.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r11.talla);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r11.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r11.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r11.precio_montura_c);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r11.precio_montura_v);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](21, 10, data_r11.fecha_creacion_monturas, "dd/MM/yyyy"));
} }
function TrasladosComponent_table_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Ord.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Marca");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "C\u00F3d.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Talla");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "P. Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "P. Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Fecha de ing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, TrasladosComponent_table_62_tr_26_Template, 25, 13, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.products);
} }
function TrasladosComponent_table_63_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrasladosComponent_table_63_tr_18_Template_a_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const data_r16 = restoredCtx.$implicit; const i_r17 = restoredCtx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r18.eliminar(data_r16, i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", i_r17 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r16.material);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r16.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r16.precio_luna_c);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r16.precio_luna_v);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 6, data_r16.fecha_creacion_luna, "dd/MM/yyyy"));
} }
function TrasladosComponent_table_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Ord.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "P. Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "P. Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Fecha de ing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, TrasladosComponent_table_63_tr_18_Template, 17, 9, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.products);
} }
function TrasladosComponent_table_64_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ngb-highlight", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrasladosComponent_table_64_tr_18_Template_a_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const data_r21 = restoredCtx.$implicit; const i_r22 = restoredCtx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r23.eliminar(data_r21, i_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", i_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r21.nombre_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r21.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r21.precio_accesorio_c);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", data_r21.precio_accesorio_v);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 6, data_r21.fecha_creacion_accesorio, "dd/MM/yyyy"));
} }
function TrasladosComponent_table_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Ord.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "P. Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "P. Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Fecha de ing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, TrasladosComponent_table_64_tr_18_Template, 17, 9, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.products);
} }
class TrasladosComponent {
    constructor(fb, usuarioService, productosService) {
        this.fb = fb;
        this.usuarioService = usuarioService;
        this.productosService = productosService;
        this.mostrarSpinner = false;
        this.listSedes = [];
        this.products = [];
        this.nombre_sedes = "campoSede";
        this.nombre_sedeDestino = "campoSedeDestino";
        this.idSede = '';
        this.idSedeDestino = '';
        this.keyword = "id_producto";
        this.producto = "campoProducto";
        this.listProductos = [
            {
                id: 1, nombre: "Monturas",
            },
            {
                id: 2, nombre: "Lunas",
            },
            {
                id: 3, nombre: "Accesorios",
            },
        ];
        this.tipoProducto = 0;
    }
    ngOnInit() {
        //Sweetalert("loading", "Cargando...");
        this.getListSedes();
        this.crearFormulario();
        this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Traslado de Productos', active: true }];
    }
    getListSedes() {
        this.listSedes = JSON.parse(localStorage.getItem('sedes'));
        this.idSede = this.usuarioService.getSedebyUser();
    }
    crearFormulario() {
        this.formInventario = this.fb.group({
            [this.nombre_sedes]: [this.idSede, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            [this.producto]: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        this.formSede = this.fb.group({
            [this.nombre_sedeDestino]: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    /* getListMonturas(idSede: string) {
      this.productosService.getMonturasforSale(idSede).subscribe(res => {
        Sweetalert("close", null);
        this.listMonturas = res;
      })
    } */
    fS(campo) {
        return this.formInventario.get(campo);
    }
    fD(campo) {
        return this.formSede.get(campo);
    }
    changeSede() {
        this.products = [];
        this.idSede = this.fS(this.nombre_sedes).value;
        this.tipoProducto = this.fS(this.producto).value;
        if (this.idSede == null || this.tipoProducto == null) {
            return;
        }
        else {
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("loading", "Cargando...");
            this.updateListProducts(this.idSede, this.tipoProducto);
        }
    }
    eliminar(product, i) {
        this.removeProduct(product.id_producto);
    }
    removeProduct(id_producto) {
        this.products = this.products.filter((name) => name.id_producto !== id_producto);
    }
    updateListProducts(idSede, tipoProducto) {
        switch (tipoProducto) {
            case 1:
                this.productosService.getMonturasforSale(idSede).subscribe(res => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("close", null);
                    this.listProducts = res;
                    this.mostrarSpinner = true;
                });
                break;
            case 2:
                this.productosService.getLunasforSale(idSede).subscribe(res => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("close", null);
                    this.listProducts = res;
                    this.mostrarSpinner = true;
                });
                break;
            case 3:
                this.productosService.getAccesoriosforSale(idSede).subscribe(res => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("close", null);
                    this.listProducts = res;
                    this.mostrarSpinner = true;
                });
                break;
            default:
                break;
        }
    }
    selectEvent(item) {
        const productExistInCart = this.products.find((name) => name.id_producto === item.id_producto);
        if (!productExistInCart) {
            switch (item.tipo) {
                case 'montura':
                    this.products.push(Object.assign({}, item));
                    this.autocomplete.clear();
                    this.autocomplete.close();
                    break;
                case 'luna':
                    this.products.push(Object.assign({}, item));
                    this.autocomplete.clear();
                    this.autocomplete.close();
                    break;
                case 'accesorio':
                    this.products.push(Object.assign({}, item));
                    this.autocomplete.clear();
                    this.autocomplete.close();
                    break;
                default:
                    break;
            }
        }
        else {
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("error", "Este producto ya fue registrado");
            this.autocomplete.clear();
            this.autocomplete.close();
            return;
        }
    }
    onChangeSearch(search) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }
    onFocused(e) {
        // do something
        this.autocomplete.close();
    }
    trasladoSedes() {
        const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
            customClass: {
                cancelButton: 'btn btn-danger ms-2',
                confirmButton: 'btn btn-success',
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons
            .fire({
            title: '¿Está seguro de realizar el traslado?',
            text: '¡No se podrá revertir esto!',
            icon: 'warning',
            cancelButtonText: 'No, cancelar!',
            confirmButtonText: 'Si, trasladar!',
            showCancelButton: true,
        })
            .then(result => {
            if (result.value && this.formSede.valid) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("loading", "Cargando...");
                let idSedeDestino = this.fD(this.nombre_sedeDestino).value;
                let nombreUsuario = this.usuarioService.getUser().nombres + ' ' + this.usuarioService.getUser().apellidos;
                this.products.forEach(element => {
                    if (!element.hasOwnProperty('traslado')) {
                        const propiedad = {
                            traslado: []
                        };
                        Object.assign(element, propiedad);
                    }
                });
                this.productosService.updateSedeofListProducts(nombreUsuario, idSedeDestino, this.products).subscribe(res => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("success", "Traslado realizado");
                    this.products = [];
                }, (error) => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("close", null);
                    if (error.status !== 404) {
                        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("error", "Error en la conexión");
                    }
                });
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason.cancel)) {
                swalWithBootstrapButtons.fire('Cancelado', 'La venta no se ha realizado', 'error');
            }
        });
    }
}
TrasladosComponent.ɵfac = function TrasladosComponent_Factory(t) { return new (t || TrasladosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__.ProductosService)); };
TrasladosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TrasladosComponent, selectors: [["app-traslados"]], viewQuery: function TrasladosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.autocomplete = _t.first);
    } }, decls: 68, vars: 22, consts: [[1, "container-fluid"], ["title", "Traslado de Productos", 3, "breadcrumbItems"], [1, "row"], [1, "col-6"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "mb-1"], [1, "col-12", "col-md-6"], ["ngbDropdown", "", 1, "mt-2", "me-1"], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName", "change"], ["placeholder", "Seleccione el producto", "bindValue", "id", "bindLabel", "nombre", 3, "items", "formControlName", "change"], [1, "col-12", "d-grid", "mt-2", "px-2"], [1, "position-relative"], ["placeholder", "Buscar productos", "historyIdentifier", "", "focusFirst", "true", "minQueryLength", "8", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused", "keyup.enter"], ["autocomplete", ""], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "col-12"], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName"], [1, "btn-group"], ["type", "button", "value", "Trasladar", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "row", "md-2"], [1, "col-sm-12", "col-md-12"], [1, "dataTables_length", "text-md-end"], [1, "d-inline-flex", "align-items-center"], ["name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "form-select", "form-select-sm"], [3, "ngValue"], [1, "table-responsive", "mb-4"], ["class", "table  table-centered table-nowrap mb-0 align-middle table-card-list ", "style", "border-spacing: 0 12px; width: 100%;", 4, "ngIf"], [1, "row", "justify-content-md-between", "align-items-md-center"], [1, "text-md-end", "float-md-end", "pagination-rounded"], [3, "innerHTML"], [1, "table", "table-centered", "table-nowrap", "mb-0", "align-middle", "table-card-list", 2, "border-spacing", "0 12px", "width", "100%"], [1, "bg-transparent"], [2, "width", "170px"], [4, "ngFor", "ngForOf"], [3, "result", "term"], ["placement", "top", "ngbTooltip", "Eliminar", 1, "px-2", "text-danger", 3, "click"], [1, "uil", "uil-trash-alt", "font-size-18"]], template: function TrasladosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "DE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ng-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TrasladosComponent_Template_ng_select_change_13_listener() { return ctx.changeSede(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ng-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TrasladosComponent_Template_ng_select_change_16_listener() { return ctx.changeSede(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ng-autocomplete", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selected", function TrasladosComponent_Template_ng_autocomplete_selected_20_listener($event) { return ctx.selectEvent($event); })("inputChanged", function TrasladosComponent_Template_ng_autocomplete_inputChanged_20_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function TrasladosComponent_Template_ng_autocomplete_inputFocused_20_listener($event) { return ctx.onFocused($event); })("keyup.enter", function TrasladosComponent_Template_ng_autocomplete_keyup_enter_20_listener($event) { return ctx.selectEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, TrasladosComponent_ng_template_22_Template, 1, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, TrasladosComponent_ng_template_24_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "ng-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TrasladosComponent_Template_input_click_40_listener() { return ctx.trasladoSedes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Mostrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, " entradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, TrasladosComponent_table_62_Template, 27, 1, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, TrasladosComponent_table_63_Template, 19, 1, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, TrasladosComponent_table_64_Template, 19, 1, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formInventario);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.nombre_sedes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.listSedes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.producto);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.listProductos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.listProducts)("searchKeyword", ctx.keyword)("itemTemplate", _r1)("notFoundTemplate", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formSede);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.nombre_sedeDestino);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.listSedes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !(ctx.products.length > 0) && !ctx.formSede.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.tipoProducto == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.tipoProducto == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.tipoProducto == 3);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__.AutocompleteComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbHighlight, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFzbGFkb3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 50520:
/*!***********************************************************************!*\
  !*** ./src/app/pages/products/update-excel/update-excel.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateExcelComponent": () => (/* binding */ UpdateExcelComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ 32551);
/* harmony import */ var save_as_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! save-as-file */ 88083);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var src_utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/functions */ 4680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var src_utils_labels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/labels */ 69943);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-dropzone */ 82629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);















function UpdateExcelComponent_ngx_dropzone_preview_85_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngx-dropzone-preview", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("removed", function UpdateExcelComponent_ngx_dropzone_preview_85_Template_ngx_dropzone_preview_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const f_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r2.onRemove(f_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("file", f_r1)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", f_r1.name, " ");
} }
class UpdateExcelComponent {
    constructor(fb, productoService, usuarioService, label) {
        this.fb = fb;
        this.productoService = productoService;
        this.usuarioService = usuarioService;
        this.label = label;
        this.sede = "campoSede";
        this.producto = "campoProducto";
        this.sedeC = "campoSedeC";
        this.productoC = "campoProductoC";
        this.productos = "campoProductos";
        this.files = [];
        this.errorImagen = "";
        this.listProductos = [
            {
                id: 1, nombre: "Monturas",
            },
            {
                id: 2, nombre: "Lunas",
            },
            {
                id: 3, nombre: "Accesorios",
            },
        ];
        this.filebutton = false;
        this.idSede = '';
    }
    ngOnInit() {
        this.getListSedes();
        this.crearFormulario();
        this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Actualización por Excel', active: true }];
        this.message = "<div class='mb-3'><i class=\"display-4 text-muted uil uil-cloud-upload\"></i></div>Suelte los archivos aquí o haga clic para cargar.";
    }
    getListSedes() {
        this.listSedes = JSON.parse(localStorage.getItem('sedes'));
        this.idSede = this.usuarioService.getSedebyUser();
    }
    crearFormulario() {
        this.formExportar = this.fb.group({
            sede: [this.idSede, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            producto: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        });
        this.formExportarCrear = this.fb.group({
            [this.sedeC]: [this.idSede, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            [this.productoC]: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        });
        this.formImportar = this.fb.group({
            productos: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        });
    }
    f(campo) {
        return this.formExportar.get(campo);
    }
    fC(campo) {
        return this.formExportarCrear.get(campo);
    }
    exportarProductos() {
        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("loading", "Cargando...");
        if (this.formExportar.valid) {
            let productName = '';
            switch (this.f('producto').value) {
                case 1:
                    productName = 'montura';
                    break;
                case 2:
                    productName = 'luna';
                    break;
                case 3:
                    productName = 'accesorio';
                    break;
                default:
                    break;
            }
            this.productoService.getProductosbySede(this.f('sede').value, productName).subscribe(res => {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("close", null);
                const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                const EXCEL_EXTENSION = '.xlsx';
                if (res.length == 0) {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("success", "No existen productos");
                }
                else {
                    let data = [];
                    switch (productName) {
                        case 'montura':
                            data = res.map(monturas => {
                                return {
                                    "ID MONTURA": monturas.id_producto,
                                    //"ORDEN": monturas.num_orden,
                                    "PRECIO COMPRA": monturas.precio_montura_c,
                                    "PRECIO VENTA": monturas.precio_montura_v,
                                    "TALLA": monturas.talla,
                                    "CODIGO": monturas.codigo,
                                    "CODIGO MONTURA": monturas.codigo_montura,
                                    "MARCA": monturas.marca,
                                    "CANTIDAD": monturas.cantidad,
                                    "COLOR": monturas.color,
                                    "MATERIAL": monturas.material,
                                    "TIPO": monturas.tipo,
                                    "SEDE": monturas.id_sede,
                                    "FECHA INGRESO": new Date(monturas.fecha_creacion_monturas).toLocaleDateString('en-GB')
                                };
                            });
                            break;
                        case 'luna':
                            data = res.map((lunas) => {
                                return {
                                    "ID LUNA": lunas.id_producto,
                                    "PRECIO COMPRA": lunas.precio_luna_c,
                                    "PRECIO VENTA": lunas.precio_luna_v,
                                    //"CODIGO INTERNO": lunas.codigo_interno,
                                    "CANTIDAD": lunas.cantidad,
                                    "MATERIAL": lunas.material,
                                    "TIPO": lunas.tipo,
                                    "SEDE": lunas.id_sede,
                                    "FECHA INGRESO": new Date(lunas.fecha_creacion_luna).toLocaleDateString('en-GB')
                                };
                            });
                            break;
                        case 'accesorio':
                            data = res.map((accesorios) => {
                                return {
                                    "ID ACCESORIO": accesorios.id_producto,
                                    "NOMBRE": accesorios.nombre_accesorio,
                                    "PRECIO COMPRA": accesorios.precio_accesorio_c,
                                    "PRECIO VENTA": accesorios.precio_accesorio_v,
                                    //"CODIGO INTERNO": accesorios.codigo_interno,
                                    "CANTIDAD": accesorios.cantidad,
                                    "TIPO": accesorios.tipo,
                                    "SEDE": accesorios.id_sede,
                                    "FECHA INGRESO": new Date(accesorios.fecha_creacion_accesorio).toLocaleDateString('en-GB')
                                };
                            });
                            break;
                        default:
                            break;
                    }
                    const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_9__.utils.json_to_sheet(data);
                    const workbook = {
                        Sheets: {
                            'hoja': worksheet
                        },
                        SheetNames: ['hoja']
                    };
                    const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_9__.write(workbook, { bookType: 'xlsx', type: 'array' });
                    const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE });
                    const nombreSede = this.listSedes.find(res => (res.id_sede == this.f('sede').value));
                    (0,save_as_file__WEBPACK_IMPORTED_MODULE_0__["default"])(blobData, productName + '_' + nombreSede.nombre_sede);
                }
            });
        }
        else {
            return;
        }
    }
    onSelect(event) {
        this.files.push(...event.addedFiles);
        if (this.files.length > 1) {
            this.errorImagen = "Solo un archivo";
            this.files = [];
            this.filebutton = false;
        }
        else {
            this.errorImagen = "";
            this.filebutton = true;
        }
    }
    onRemove(event) {
        this.filebutton = false;
        this.files.splice(this.files.indexOf(event), 1);
    }
    uploadFile() {
        //Sweetalert("loading", "Cargando...");
        const fileReader = new FileReader();
        fileReader.readAsBinaryString(this.files[0]);
        fileReader.onload = (event) => {
            let binaryData = event.target.result;
            let workbook = xlsx__WEBPACK_IMPORTED_MODULE_9__.read(binaryData, { type: 'binary' });
            let data;
            workbook.SheetNames.forEach(sheet => {
                data = xlsx__WEBPACK_IMPORTED_MODULE_9__.utils.sheet_to_json(workbook.Sheets[sheet], { raw: false, defval: "" });
            });
            if (this.validarCampoFecha(data)) {
                switch ((data[0].TIPO).toLowerCase()) {
                    case 'montura':
                        if (data[0].hasOwnProperty(this.label.cabeceraExcelIdMont)) {
                            this.actualizarProducto(data, data[0].TIPO);
                        }
                        else {
                            this.crearProducto(data, data[0].TIPO);
                        }
                        break;
                    case 'luna':
                        if (data[0].hasOwnProperty(this.label.cabeceraExcelIdLun)) {
                            this.actualizarProducto(data, data[0].TIPO);
                        }
                        else {
                            this.crearProducto(data, data[0].TIPO);
                        }
                        break;
                    case 'accesorio':
                        if (data[0].hasOwnProperty(this.label.cabeceraExcelIdAccesorio)) {
                            this.actualizarProducto(data, data[0].TIPO);
                        }
                        else {
                            this.crearProducto(data, data[0].TIPO);
                        }
                        break;
                    default:
                        break;
                }
            }
            else {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("error", "Excel con fechas incorrectas");
                return;
            }
        };
    }
    actualizarProducto(data, tipoProducto) {
        let producto;
        if (this.validarCabeceraExcelUpdate(data, tipoProducto)) {
            producto = this.objExceltoDBUpdate(data, tipoProducto);
            const idSede = producto[0].id_sede;
            if (this.validarIdSede(data, idSede) && this.validarTipo(data, tipoProducto)) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("loading", "Cargando...");
                this.productoService.updateProductsbyExcel(producto).subscribe(res => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("success", "Lista de " + tipoProducto + " actualizada");
                    this.files = [];
                    this.filebutton = false;
                });
            }
            else {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("error", "Columna ID SEDE o TIPO incorrectos o faltantes");
            }
        }
        else {
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("error", "Excel con cabecera incorrecta");
            return;
        }
    }
    crearProducto(data, tipoProducto) {
        let producto;
        if (this.validarCabeceraExcelCreate(data, tipoProducto)) {
            producto = this.objExceltoDBCreate(data, tipoProducto);
            const idSede = producto[0].id_sede;
            if (this.validarIdSede(data, idSede) && this.validarTipo(data, tipoProducto)) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("loading", "Cargando...");
                this.productoService.createProductsbyExcel(producto).subscribe(res => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("success", "Lista de " + tipoProducto + " creada");
                    this.files = [];
                    this.filebutton = false;
                });
            }
            else {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("error", "Columna ID SEDE o TIPO incorrectos o faltantes");
                return;
            }
        }
        else {
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_1__.Sweetalert)("error", "Excel con cabecera incorrecta");
            return;
        }
    }
    objExceltoDBCreate(data, tipo) {
        let listMontura;
        let listLuna;
        let listAccesorio;
        switch (tipo.toLowerCase()) {
            case 'montura':
                listMontura = data.map((element) => {
                    return {
                        material: element.MATERIAL == '' ? 'SIN ESPECIFICAR' : element.MATERIAL,
                        marca: element.MARCA == '' ? 'SIN ESPECIFICAR' : element.MARCA,
                        codigo: element.CODIGO == '' ? 'SIN ESPECIFICAR' : element.CODIGO,
                        codigo_montura: element['CODIGO MONTURA'] == '' ? 'SIN ESPECIFICAR' : element['CODIGO MONTURA'],
                        talla: element.TALLA == '' ? 'SIN ESPECIFICAR' : element.TALLA,
                        color: element.COLOR == '' ? 'SIN ESPECIFICAR' : element.COLOR,
                        precio_montura_c: isNaN(Number(element[this.label.cabeceraExcelPCompra])) ? 0 : Number(element[this.label.cabeceraExcelPCompra]),
                        precio_montura_v: isNaN(Number(element[this.label.cabeceraExcelPVenta])) ? 0 : Number(element[this.label.cabeceraExcelPVenta]),
                        cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
                        id_sede: element.SEDE,
                        habilitado: true,
                        fecha_creacion_monturas: (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_2__.stringToDate)(element[this.label.cabeceraExcelFIngreso]),
                        fecha_modificacion_monturas: new Date(Date.now()),
                    };
                });
                listMontura.forEach(element => {
                    element.tipo = tipo.toLowerCase();
                });
                return listMontura;
            case 'luna':
                listLuna = data.map(element => {
                    return {
                        //num_orden: Number(element.ORDEN),
                        material: element.MATERIAL == '' ? 'SIN ESPECIFICAR' : element.MATERIAL,
                        precio_luna_c: isNaN(Number(element[this.label.cabeceraExcelPCompra])) ? 0 : Number(element[this.label.cabeceraExcelPCompra]),
                        precio_luna_v: isNaN(Number(element[this.label.cabeceraExcelPVenta])) ? 0 : Number(element[this.label.cabeceraExcelPVenta]),
                        cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
                        id_sede: element.SEDE,
                        habilitado: true,
                        fecha_creacion_luna: (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_2__.stringToDate)(element[this.label.cabeceraExcelFIngreso]),
                        fecha_modificacion_luna: new Date(Date.now()),
                    };
                });
                listLuna.forEach(element => {
                    element.tipo = tipo.toLowerCase();
                });
                return listLuna;
            case 'accesorio':
                listAccesorio = data.map(element => {
                    return {
                        //num_orden: Number(element.ORDEN),
                        nombre_accesorio: element['NOMBRE'] == '' ? 'SIN ESPECIFICAR' : element['NOMBRE'],
                        precio_accesorio_c: isNaN(Number(element[this.label.cabeceraExcelPCompra])) ? 0 : Number(element[this.label.cabeceraExcelPCompra]),
                        precio_accesorio_v: isNaN(Number(element[this.label.cabeceraExcelPVenta])) ? 0 : Number(element[this.label.cabeceraExcelPVenta]),
                        fecha_creacion_accesorio: (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_2__.stringToDate)(element[this.label.cabeceraExcelFIngreso]),
                        fecha_modificacion_accesorio: new Date(Date.now()),
                        cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
                        id_sede: element.SEDE,
                        habilitado: true,
                    };
                });
                listAccesorio.forEach(element => {
                    element.tipo = tipo.toLowerCase();
                });
                return listAccesorio;
            default:
                break;
        }
    }
    objExceltoDBUpdate(data, tipo) {
        let listMontura;
        let listLuna;
        let listAccesorio;
        switch (tipo.toLowerCase()) {
            case 'montura':
                listMontura = data.map(element => {
                    return {
                        id_producto: element['ID MONTURA'],
                        precio_montura_c: isNaN(Number(element[this.label.cabeceraExcelPCompra])) ? 0 : Number(element[this.label.cabeceraExcelPCompra]),
                        precio_montura_v: isNaN(Number(element[this.label.cabeceraExcelPVenta])) ? 0 : Number(element[this.label.cabeceraExcelPVenta]),
                        cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
                        fecha_modificacion_monturas: new Date(Date.now()),
                        tipo: element.TIPO,
                        id_sede: element.SEDE,
                        codigo_montura: element['CODIGO MONTURA']
                    };
                });
                return listMontura;
            case 'luna':
                listLuna = data.map(element => {
                    return {
                        id_producto: element['ID LUNA'],
                        precio_luna_c: isNaN(Number(element[this.label.cabeceraExcelPCompra])) ? 0 : Number(element[this.label.cabeceraExcelPCompra]),
                        precio_luna_v: isNaN(Number(element[this.label.cabeceraExcelPVenta])) ? 0 : Number(element[this.label.cabeceraExcelPVenta]),
                        cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
                        fecha_modificacion_luna: new Date(Date.now()),
                        tipo: element.TIPO,
                        id_sede: element.SEDE
                    };
                });
                return listLuna;
            case 'accesorio':
                listAccesorio = data.map(element => {
                    return {
                        id_producto: element['ID ACCESORIO'],
                        precio_accesorio_c: isNaN(Number(element[this.label.cabeceraExcelPCompra])) ? 0 : Number(element[this.label.cabeceraExcelPCompra]),
                        precio_accesorio_v: isNaN(Number(element[this.label.cabeceraExcelPVenta])) ? 0 : Number(element[this.label.cabeceraExcelPVenta]),
                        fecha_modificacion_accesorio: new Date(Date.now()),
                        cantidad: isNaN(Number(element.CANTIDAD)) ? 0 : Number(element.CANTIDAD),
                        id_sede: element.SEDE,
                        tipo: element.TIPO
                    };
                });
                return listAccesorio;
            default:
                break;
        }
    }
    validarCabeceraExcelCreate(data, tipoProducto) {
        switch (tipoProducto.toLowerCase()) {
            case 'montura':
                return ((Object.keys(data[0]).length == 12) && data[0].hasOwnProperty(this.label.cabeceraExcelCodMontura) && data[0].hasOwnProperty(this.label.cabeceraExcelMaterial) && data[0].hasOwnProperty(this.label.cabeceraExcelMarca) && data[0].hasOwnProperty(this.label.cabeceraExcelCodigo) &&
                    data[0].hasOwnProperty('TALLA') && data[0].hasOwnProperty('COLOR') && data[0].hasOwnProperty(this.label.cabeceraExcelCantidad) && data[0].hasOwnProperty(this.label.cabeceraExcelPCompra) &&
                    data[0].hasOwnProperty(this.label.cabeceraExcelPVenta) && data[0].hasOwnProperty(this.label.cabeceraExcelFIngreso) && data[0].hasOwnProperty(this.label.cabeceraExcelTipo) && data[0].hasOwnProperty(this.label.cabeceraExcelSede));
            case 'luna':
                return ((Object.keys(data[0]).length == 7) && data[0].hasOwnProperty(this.label.cabeceraExcelMaterial) && data[0].hasOwnProperty(this.label.cabeceraExcelCantidad) && data[0].hasOwnProperty(this.label.cabeceraExcelPCompra) &&
                    data[0].hasOwnProperty(this.label.cabeceraExcelPVenta) && data[0].hasOwnProperty(this.label.cabeceraExcelFIngreso) && data[0].hasOwnProperty(this.label.cabeceraExcelTipo) && data[0].hasOwnProperty(this.label.cabeceraExcelSede));
            case 'accesorio':
                return ((Object.keys(data[0]).length == 7) && data[0].hasOwnProperty(this.label.cabeceraExcelNombre) && data[0].hasOwnProperty(this.label.cabeceraExcelCantidad) && data[0].hasOwnProperty(this.label.cabeceraExcelPCompra) &&
                    data[0].hasOwnProperty(this.label.cabeceraExcelPVenta) && data[0].hasOwnProperty(this.label.cabeceraExcelFIngreso) && data[0].hasOwnProperty(this.label.cabeceraExcelTipo) && data[0].hasOwnProperty(this.label.cabeceraExcelSede));
            default:
                return false;
        }
    }
    validarCabeceraExcelUpdate(data, tipoProducto) {
        switch (tipoProducto.toLowerCase()) {
            case 'montura':
                return ((Object.keys(data[0]).length == 13) && data[0].hasOwnProperty(this.label.cabeceraExcelCodMontura) && data[0].hasOwnProperty(this.label.cabeceraExcelIdMont) && data[0].hasOwnProperty(this.label.cabeceraExcelMaterial)
                    && data[0].hasOwnProperty(this.label.cabeceraExcelMarca) && data[0].hasOwnProperty(this.label.cabeceraExcelCodigo) &&
                    data[0].hasOwnProperty(this.label.cabeceraExcelTalla) && data[0].hasOwnProperty(this.label.cabeceraExcelColor) && data[0].hasOwnProperty(this.label.cabeceraExcelCantidad)
                    && data[0].hasOwnProperty(this.label.cabeceraExcelPCompra) && data[0].hasOwnProperty(this.label.cabeceraExcelPVenta) && data[0].hasOwnProperty(this.label.cabeceraExcelFIngreso)
                    && data[0].hasOwnProperty(this.label.cabeceraExcelTipo) && data[0].hasOwnProperty(this.label.cabeceraExcelSede));
            case 'luna':
                return ((Object.keys(data[0]).length == 8) && data[0].hasOwnProperty(this.label.cabeceraExcelIdLun) && data[0].hasOwnProperty(this.label.cabeceraExcelMaterial)
                    && data[0].hasOwnProperty(this.label.cabeceraExcelCantidad) && data[0].hasOwnProperty(this.label.cabeceraExcelPCompra) &&
                    data[0].hasOwnProperty(this.label.cabeceraExcelPVenta) && data[0].hasOwnProperty(this.label.cabeceraExcelFIngreso) && data[0].hasOwnProperty(this.label.cabeceraExcelTipo) && data[0].hasOwnProperty(this.label.cabeceraExcelSede));
            case 'accesorio':
                return ((Object.keys(data[0]).length == 8) && data[0].hasOwnProperty(this.label.cabeceraExcelIdAccesorio) && data[0].hasOwnProperty(this.label.cabeceraExcelNombre) && data[0].hasOwnProperty(this.label.cabeceraExcelCantidad) && data[0].hasOwnProperty(this.label.cabeceraExcelPCompra) &&
                    data[0].hasOwnProperty(this.label.cabeceraExcelPVenta) && data[0].hasOwnProperty(this.label.cabeceraExcelFIngreso) && data[0].hasOwnProperty(this.label.cabeceraExcelTipo) && data[0].hasOwnProperty(this.label.cabeceraExcelSede));
            default:
                return false;
        }
    }
    validarIdSede(data, idSede) {
        return data.every(elem => (elem[this.label.cabeceraExcelSede] === idSede));
    }
    validarTipo(data, tipo) {
        switch (tipo) {
            case 'montura':
                return data.every(elem => (elem[this.label.cabeceraExcelTipo] === tipo));
            case 'luna':
                return data.every(elem => (elem[this.label.cabeceraExcelTipo] === tipo));
            case 'accesorio':
                return data.every(elem => (elem[this.label.cabeceraExcelTipo] === tipo));
            default:
                return false;
        }
    }
    validarCampoFecha(data) {
        return data.every(elem => (elem[this.label.cabeceraExcelFIngreso].length == 10 && Date.parse((0,src_utils_functions__WEBPACK_IMPORTED_MODULE_2__.changeFormatDate)(elem[this.label.cabeceraExcelFIngreso]))));
    }
    descargarPlantilla() {
        if (this.formExportarCrear.valid) {
            let productName = '';
            switch (this.fC(this.productoC).value) {
                case 1:
                    productName = 'montura';
                    break;
                case 2:
                    productName = 'luna';
                    break;
                case 3:
                    productName = 'accesorio';
                    break;
                default:
                    break;
            }
            let idSede = this.fC(this.sedeC).value;
            const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            const EXCEL_EXTENSION = '.xlsx';
            let data = [];
            switch (productName) {
                case 'montura':
                    data[0] = {
                        "PRECIO COMPRA": 0,
                        "PRECIO VENTA": 0,
                        "TALLA": 0,
                        "CODIGO": 0,
                        "CODIGO MONTURA": '--',
                        "MARCA": 'MARCA',
                        "CANTIDAD": 0,
                        "COLOR": 'COLOR',
                        "MATERIAL": 'MATERIAL',
                        "TIPO": productName,
                        "SEDE": idSede,
                        "FECHA INGRESO": new Date(Date.now()).toLocaleDateString('en-GB')
                    };
                    break;
                case 'luna':
                    data[0] = {
                        "PRECIO COMPRA": 0,
                        "PRECIO VENTA": 0,
                        //"CODIGO INTERNO": lunas.codigo_interno,
                        "CANTIDAD": 0,
                        "MATERIAL": 'MATERIAL',
                        "TIPO": productName,
                        "SEDE": idSede,
                        "FECHA INGRESO": new Date(Date.now()).toLocaleDateString('en-GB')
                    };
                    break;
                case 'accesorio':
                    data[0] = {
                        "NOMBRE": "NOMBRE",
                        "PRECIO COMPRA": 0,
                        "PRECIO VENTA": 0,
                        //"CODIGO INTERNO": accesorios.codigo_interno,
                        "CANTIDAD": 0,
                        "TIPO": productName,
                        "SEDE": idSede,
                        "FECHA INGRESO": new Date(Date.now()).toLocaleDateString('en-GB')
                    };
                    break;
                default:
                    break;
            }
            const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_9__.utils.json_to_sheet(data);
            const workbook = {
                Sheets: {
                    'hoja': worksheet
                },
                SheetNames: ['hoja']
            };
            const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_9__.write(workbook, { bookType: 'xlsx', type: 'array' });
            const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE });
            const nombreSede = this.listSedes.find(res => (res.id_sede == idSede));
            (0,save_as_file__WEBPACK_IMPORTED_MODULE_0__["default"])(blobData, productName + '_' + nombreSede.nombre_sede);
        }
        else {
            return;
        }
    }
}
UpdateExcelComponent.ɵfac = function UpdateExcelComponent_Factory(t) { return new (t || UpdateExcelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_utils_labels__WEBPACK_IMPORTED_MODULE_5__.Labels)); };
UpdateExcelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UpdateExcelComponent, selectors: [["app-update-excel"]], decls: 89, vars: 15, consts: [[1, "container-fluid"], ["title", "Actualici\u00F3n de Stock por Archivo Excel", 3, "breadcrumbItems"], [1, "row"], [1, "col-12", "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], ["role", "alert", 1, "alert", "alert-danger"], [1, "alert-heading"], [3, "formGroup"], [1, "mb-1"], ["ngbDropdown", "", 1, "mt-2", "me-1"], ["formControlName", "sede", "placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items"], ["formControlName", "producto", "placeholder", "Seleccione el producto", "bindValue", "id", "bindLabel", "nombre", 3, "items"], [1, "col-12", "d-grid"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "mt-2", "me-1", 3, "disabled", "click"], [1, "uil", "uil-cloud-download", "me-2"], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName"], ["placeholder", "Seleccione el producto", "bindValue", "id", "bindLabel", "nombre", 3, "items", "formControlName"], [1, "col-12"], ["ngx-dropzone", "", 1, "custom-dropzone", 3, "accept", "change"], [1, "display-4", "text-muted", "uil", "uil-cloud-upload"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "text-center", "mt-4"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed"]], template: function UpdateExcelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Exportar para Actualizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Seleccione la ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "sede");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "tipo de producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " para generar la tabla Excel a modificar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Advertencia al Actualizar!");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "No modificar las siguientes columnas: ID MONTURA, TALLA, CODIGO, MARCA, COLOR, MATERIAL, TIPO, SEDE y FECHA INGRESO. Solo se podr\u00E1 modificar las siguientes columnas: PRECIO COMPRA, PRECIO VENTA y CANTIDAD (solo digitos). No se permite eliminar productos por excel, a tal efecto ir a Men\u00FA -> Listas de Productos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "ng-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdateExcelComponent_Template_button_click_32_listener() { return ctx.exportarProductos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " Descargar Archivo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Exportar para Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Seleccione la ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "sede");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, " y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "tipo de producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, " para generar la tabla Excel a modificar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Advertencia al Crear!");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Cada elemento (nuevo producto) debe reutilizarse copiando el TIPO y SEDE. (TIPO en min\u00FAsculas).");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "ng-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "ng-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdateExcelComponent_Template_button_click_66_listener() { return ctx.descargarPlantilla(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, " Descargar Archivo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "Importar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Cargue el archivo mofificado. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function UpdateExcelComponent_Template_div_change_79_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "ngx-dropzone-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](82, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "Suelte los archivos aqu\u00ED o haga clic para cargar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](85, UpdateExcelComponent_ngx_dropzone_preview_85_Template, 3, 3, "ngx-dropzone-preview", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdateExcelComponent_Template_button_click_87_listener() { return ctx.uploadFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Subir Archivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formExportar);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.listSedes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.listProductos);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.formExportar.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formExportarCrear);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("formControlName", ctx.sedeC);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.listSedes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("formControlName", ctx.productoC);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.listProductos);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.formExportarCrear.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formImportar);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("accept", "text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.filebutton);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdown, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__.NgxDropzoneLabelDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__.NgxDropzonePreviewComponent], styles: ["ngx-dropzone[_ngcontent-%COMP%], .custom-dropzone[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.custom-dropzone[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  border-radius: 5px;\n  font-size: 1vh;\n}\n\n.custom-dropzone.ngx-dz-hovered[_ngcontent-%COMP%] {\n  border: 5px solid #eb4f4f;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1leGNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDQyxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FBQ0QiLCJmaWxlIjoidXBkYXRlLWV4Y2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmd4LWRyb3B6b25lLFxyXG4uY3VzdG9tLWRyb3B6b25lIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tZHJvcHpvbmUge1xyXG5cdC8qIGhlaWdodDogMjUwcHg7ICovXHJcblx0LyogYmFja2dyb3VuZDogIzMzMzsgKi9cclxuXHQvKiBjb2xvcjogI2ZmZjsgKi9cclxuXHQvKiBib3JkZXI6IDVweCBkYXNoZWQgcmdiKDIzNSwgNzksIDc5KTsgKi9cclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0Zm9udC1zaXplOiAxdmg7XHJcbn1cclxuXHJcbi5jdXN0b20tZHJvcHpvbmUubmd4LWR6LWhvdmVyZWQge1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYigyMzUsIDc5LCA3OSk7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuXHR3aWR0aDogMTUlO1xyXG5cdGhlaWdodDogMTUlO1xyXG59Il19 */"] });


/***/ }),

/***/ 69943:
/*!*****************************!*\
  !*** ./src/utils/labels.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Labels": () => (/* binding */ Labels)
/* harmony export */ });
class Labels {
    constructor() {
        this.cabeceraExcelCodMontura = "CODIGO MONTURA";
        this.cabeceraExcelIdMont = "ID MONTURA";
        this.cabeceraExcelMaterial = "MATERIAL";
        this.cabeceraExcelMarca = "MARCA";
        this.cabeceraExcelCodigo = "CODIGO";
        this.cabeceraExcelTalla = "TALLA";
        this.cabeceraExcelColor = "COLOR";
        this.cabeceraExcelCantidad = "CANTIDAD";
        this.cabeceraExcelPCompra = "PRECIO COMPRA";
        this.cabeceraExcelPVenta = "PRECIO VENTA";
        this.cabeceraExcelFIngreso = "FECHA INGRESO";
        this.cabeceraExcelTipo = "TIPO";
        this.cabeceraExcelSede = "SEDE";
        this.cabeceraExcelIdLun = "ID LUNA";
        this.cabeceraExcelIdAccesorio = "ID ACCESORIO";
        this.cabeceraExcelNombre = "NOMBRE";
    }
}


/***/ })

}]);
//# sourceMappingURL=src_app_pages_products_products_module_ts.js.map