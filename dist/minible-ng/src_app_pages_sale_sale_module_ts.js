(self["webpackChunkminible_ng"] = self["webpackChunkminible_ng"] || []).push([["src_app_pages_sale_sale_module_ts"],{

/***/ 46563:
/*!************************************************!*\
  !*** ./node_modules/flatpickr/dist/l10n/es.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
   true ? factory(exports) :
  0;
}(this, (function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {},
      };
  var Spanish = {
      weekdays: {
          shorthand: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
          longhand: [
              "Domingo",
              "Lunes",
              "Martes",
              "Miércoles",
              "Jueves",
              "Viernes",
              "Sábado",
          ],
      },
      months: {
          shorthand: [
              "Ene",
              "Feb",
              "Mar",
              "Abr",
              "May",
              "Jun",
              "Jul",
              "Ago",
              "Sep",
              "Oct",
              "Nov",
              "Dic",
          ],
          longhand: [
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Julio",
              "Agosto",
              "Septiembre",
              "Octubre",
              "Noviembre",
              "Diciembre",
          ],
      },
      ordinal: function () {
          return "º";
      },
      firstDayOfWeek: 1,
      rangeSeparator: " a ",
      time_24hr: true,
  };
  fp.l10ns.es = Spanish;
  var es = fp.l10ns;

  exports.Spanish = Spanish;
  exports.default = es;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 27947:
/*!***********************************************************!*\
  !*** ./src/app/pages/sale/add-sale/add-sale.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSaleComponent": () => (/* binding */ AddSaleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _addsale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addsale.service */ 55749);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable.directive */ 20477);
/* harmony import */ var src_models_venta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/venta */ 97072);
/* harmony import */ var src_models_tipo_venta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/tipo_venta */ 80810);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/cliente.service */ 95686);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-ng-autocomplete */ 84933);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng5-slider */ 38391);



















function AddSaleComponent_ng_template_12_ng_template_0_Template(rf, ctx) { }
function AddSaleComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, AddSaleComponent_ng_template_12_ng_template_0_Template, 0, 0, "ng-template", 34);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r4);
} }
function AddSaleComponent_ng_template_18_ng_template_0_Template(rf, ctx) { }
function AddSaleComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, AddSaleComponent_ng_template_18_ng_template_0_Template, 0, 0, "ng-template", 34);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r6);
} }
function AddSaleComponent_ng_template_24_ng_template_0_Template(rf, ctx) { }
function AddSaleComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, AddSaleComponent_ng_template_24_ng_template_0_Template, 0, 0, "ng-template", 34);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function AddSaleComponent_ng_template_26_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "a", 42);
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", item_r24.marca, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_26_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 42);
} if (rf & 2) {
    const notFound_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", notFound_r25, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ng-autocomplete", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selected", function AddSaleComponent_ng_template_26_Template_ng_autocomplete_selected_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r26.selectEvent($event); })("inputChanged", function AddSaleComponent_ng_template_26_Template_ng_autocomplete_inputChanged_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r28.onChangeSearch($event); })("inputFocused", function AddSaleComponent_ng_template_26_Template_ng_autocomplete_inputFocused_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r29.onFocused($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, AddSaleComponent_ng_template_26_ng_template_7_Template, 1, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, AddSaleComponent_ng_template_26_ng_template_9_Template, 1, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](8);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](10);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx_r5.listMonturas)("searchKeyword", ctx_r5.keyword)("itemTemplate", _r20)("notFoundTemplate", _r22);
} }
function AddSaleComponent_ng_template_28_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "a", 42);
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", item_r34.material, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_28_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 42);
} if (rf & 2) {
    const notFound_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", notFound_r35, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ng-autocomplete", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selected", function AddSaleComponent_ng_template_28_Template_ng_autocomplete_selected_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r36.selectEvent($event); })("inputChanged", function AddSaleComponent_ng_template_28_Template_ng_autocomplete_inputChanged_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r38.onChangeSearch($event); })("inputFocused", function AddSaleComponent_ng_template_28_Template_ng_autocomplete_inputFocused_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r39.onFocused($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, AddSaleComponent_ng_template_28_ng_template_7_Template, 1, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, AddSaleComponent_ng_template_28_ng_template_9_Template, 1, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](8);
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](10);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx_r7.listLunas)("searchKeyword", ctx_r7.keyword)("itemTemplate", _r30)("notFoundTemplate", _r32);
} }
function AddSaleComponent_ng_template_30_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "a", 42);
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", item_r44.nombre_accesorio, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_30_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 42);
} if (rf & 2) {
    const notFound_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", notFound_r45, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ng-autocomplete", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selected", function AddSaleComponent_ng_template_30_Template_ng_autocomplete_selected_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r46.selectEvent($event); })("inputChanged", function AddSaleComponent_ng_template_30_Template_ng_autocomplete_inputChanged_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r48.onChangeSearch($event); })("inputFocused", function AddSaleComponent_ng_template_30_Template_ng_autocomplete_inputFocused_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r49.onFocused($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, AddSaleComponent_ng_template_30_ng_template_7_Template, 1, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, AddSaleComponent_ng_template_30_ng_template_9_Template, 1, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](8);
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](10);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx_r9.listAccesorios)("searchKeyword", ctx_r9.keyword)("itemTemplate", _r40)("notFoundTemplate", _r42);
} }
function AddSaleComponent_tr_62_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ngb-highlight", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ngb-highlight", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", item_r50.material);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", item_r50.marca);
} }
function AddSaleComponent_tr_62_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ngb-highlight", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", item_r50.material);
} }
function AddSaleComponent_tr_62_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ngb-highlight", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", item_r50.nombre_accesorio);
} }
function AddSaleComponent_tr_62_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ngb-highlight", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", item_r50.precio_montura_v);
} }
function AddSaleComponent_tr_62_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ngb-highlight", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", item_r50.precio_luna_v);
} }
function AddSaleComponent_tr_62_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ngb-highlight", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", item_r50.precio_accesorio_v);
} }
function AddSaleComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ngb-highlight", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ngb-highlight", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, AddSaleComponent_tr_62_td_5_Template, 4, 2, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, AddSaleComponent_tr_62_td_6_Template, 2, 1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, AddSaleComponent_tr_62_td_7_Template, 2, 1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "ngb-highlight", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, AddSaleComponent_tr_62_td_10_Template, 2, 1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, AddSaleComponent_tr_62_td_11_Template, 2, 1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, AddSaleComponent_tr_62_td_12_Template, 2, 1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "ngb-highlight", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSaleComponent_tr_62_Template_i_click_17_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r65); const i_r51 = restoredCtx.index; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r64.substractQuantityProduct($event, i_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AddSaleComponent_tr_62_Template_i_ngModelChange_19_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r65); const item_r50 = restoredCtx.$implicit; return item_r50.num = $event; })("click", function AddSaleComponent_tr_62_Template_i_click_19_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r65); const i_r51 = restoredCtx.index; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r67.addQuantityProduct($event, i_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSaleComponent_tr_62_Template_i_click_23_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r65); const i_r51 = restoredCtx.index; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r68.removeCartProduct($event, i_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    const i_r51 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", i_r51 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", item_r50.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r50.tipo == "montura");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r50.tipo == "luna");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r50.tipo == "accesorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", item_r50.num);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r50.tipo == "montura");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r50.tipo == "luna");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r50.tipo == "accesorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", item_r50.precio);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", item_r50.num);
} }
function AddSaleComponent_ng_template_67_div_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_67_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddSaleComponent_ng_template_67_div_12_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r70.form.title.errors.required);
} }
function AddSaleComponent_ng_template_67_div_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_67_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddSaleComponent_ng_template_67_div_18_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r71.form.title.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function AddSaleComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Cambio de Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_67_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r74.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "form", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function AddSaleComponent_ng_template_67_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r76.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Precio Original");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, AddSaleComponent_ng_template_67_div_12_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Fecha de Cambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, AddSaleComponent_ng_template_67_div_18_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Nuevo Precio de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_67_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r77.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_67_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r78.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r12.formEditar);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r12.precioOriginal_Editar);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](9, _c0, ctx_r12.submitted && ctx_r12.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.submitted && ctx_r12.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r12.fechaCambio_Editar);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](11, _c0, ctx_r12.submitted && ctx_r12.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r12.submitted && ctx_r12.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r12.nuevoPrecio_Editar);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](13, _c0, ctx_r12.submitted && ctx_r12.form.title.errors));
} }
function AddSaleComponent_ng_template_69_ng_template_14_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_69_ng_template_14_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_69_ng_template_14_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddSaleComponent_ng_template_69_ng_template_14_div_7_div_1_Template, 2, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddSaleComponent_ng_template_69_ng_template_14_div_7_div_2_Template, 2, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r83.formContado.controls["campoCantidadRecibidaContado"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r83.formContado.controls["campoCantidadRecibidaContado"].errors.pattern);
} }
function AddSaleComponent_ng_template_69_ng_template_14_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_69_ng_template_14_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddSaleComponent_ng_template_69_ng_template_14_div_13_div_1_Template, 2, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r84.formContado.controls["campoMetodoPagoContado"].errors.required);
} }
function AddSaleComponent_ng_template_69_ng_template_14_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_69_ng_template_14_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddSaleComponent_ng_template_69_ng_template_14_div_19_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r85.form.title.errors.required);
} }
function AddSaleComponent_ng_template_69_ng_template_14_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "a", 42);
} if (rf & 2) {
    const item_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", item_r94.nombres_apellidos, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_69_ng_template_14_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 42);
} if (rf & 2) {
    const notFound_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", notFound_r95, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_69_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function AddSaleComponent_ng_template_69_ng_template_14_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r96.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Cantidad Recibida");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AddSaleComponent_ng_template_69_ng_template_14_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r97); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r98.updatePago($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, AddSaleComponent_ng_template_69_ng_template_14_div_7_Template, 3, 2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "ng-select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, AddSaleComponent_ng_template_69_ng_template_14_div_13_Template, 2, 1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, AddSaleComponent_ng_template_69_ng_template_14_div_19_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Buscar o Crear nuevo Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "ng-autocomplete", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selected", function AddSaleComponent_ng_template_69_ng_template_14_Template_ng_autocomplete_selected_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r97); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r99.selectEventCliente($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, AddSaleComponent_ng_template_69_ng_template_14_ng_template_26_Template, 1, 1, "ng-template", null, 87, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, AddSaleComponent_ng_template_69_ng_template_14_ng_template_28_Template, 1, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Montos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Cambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "textarea", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_69_ng_template_14_Template_button_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r97); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r100.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_69_ng_template_14_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r97); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r101.guardarVenta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, " Registrar Venta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](27);
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](29);
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r81.formContado);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r81.cantidadRecibida_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r81.formContado.controls["campoCantidadRecibidaContado"].invalid && (ctx_r81.formContado.controls["campoCantidadRecibidaContado"].dirty || ctx_r81.formContado.controls["campoCantidadRecibidaContado"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r81.metodoPagoContado);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx_r81.listMetodosPagos);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r81.formContado.controls["campoMetodoPagoContado"].invalid && (ctx_r81.formContado.controls["campoMetodoPagoContado"].dirty || ctx_r81.formContado.controls["campoMetodoPagoContado"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r81.fechaVenta_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](22, _c0, ctx_r81.submitted && ctx_r81.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r81.submitted && ctx_r81.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r81.nombreContado);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx_r81.listClients)("searchKeyword", ctx_r81.keywordCliente)("itemTemplate", _r86)("notFoundTemplate", _r88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r81.precioTotal_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](24, _c0, ctx_r81.submitted && ctx_r81.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r81.pago_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](26, _c0, ctx_r81.submitted && ctx_r81.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r81.cambio_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](28, _c0, ctx_r81.submitted && ctx_r81.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r81.observaciones_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r81.formContado.valid);
} }
function AddSaleComponent_ng_template_69_ng_template_21_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_69_ng_template_21_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_69_ng_template_21_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddSaleComponent_ng_template_69_ng_template_21_div_7_div_1_Template, 2, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AddSaleComponent_ng_template_69_ng_template_21_div_7_div_2_Template, 2, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r102.formCredito.controls["campoCantidadRecibidaCredito"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r102.formCredito.controls["campoCantidadRecibidaCredito"].errors.pattern);
} }
function AddSaleComponent_ng_template_69_ng_template_21_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_69_ng_template_21_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddSaleComponent_ng_template_69_ng_template_21_div_13_div_1_Template, 2, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r103.formCredito.controls["campoMetodoPagoCredito"].errors.required);
} }
function AddSaleComponent_ng_template_69_ng_template_21_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_69_ng_template_21_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AddSaleComponent_ng_template_69_ng_template_21_div_19_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r104.form.title.errors.required);
} }
function AddSaleComponent_ng_template_69_ng_template_21_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "a", 42);
} if (rf & 2) {
    const item_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", item_r113.nombres_apellidos, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_69_ng_template_21_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 42);
} if (rf & 2) {
    const notFound_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", notFound_r114, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_69_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function AddSaleComponent_ng_template_69_ng_template_21_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r115.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Cantidad Recibida");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AddSaleComponent_ng_template_69_ng_template_21_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r117.updatePago($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, AddSaleComponent_ng_template_69_ng_template_21_div_7_Template, 3, 2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "ng-select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, AddSaleComponent_ng_template_69_ng_template_21_div_13_Template, 2, 1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, AddSaleComponent_ng_template_69_ng_template_21_div_19_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "N\u00FAmero de Cuotas");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "ng5-slider", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("valueChange", function AddSaleComponent_ng_template_69_ng_template_21_Template_ng5_slider_valueChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r118.tickValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Buscar o Crear nuevo Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "ng-autocomplete", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selected", function AddSaleComponent_ng_template_69_ng_template_21_Template_ng_autocomplete_selected_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r119.selectEventCliente($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, AddSaleComponent_ng_template_69_ng_template_21_ng_template_33_Template, 1, 1, "ng-template", null, 101, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, AddSaleComponent_ng_template_69_ng_template_21_ng_template_35_Template, 1, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Montos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](46, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Cambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "textarea", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_69_ng_template_21_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r120.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_69_ng_template_21_Template_button_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r121.guardarVenta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, " Registrar Venta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](34);
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](36);
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r82.formCredito);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r82.cantidadRecibida_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r82.formCredito.controls["campoCantidadRecibidaCredito"].invalid && (ctx_r82.formCredito.controls["campoCantidadRecibidaCredito"].dirty || ctx_r82.formCredito.controls["campoCantidadRecibidaCredito"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r82.metodoPagoCredito);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx_r82.listMetodosPagos);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r82.formCredito.controls["campoMetodoPagoCredito"].invalid && (ctx_r82.formCredito.controls["campoMetodoPagoCredito"].dirty || ctx_r82.formCredito.controls["campoMetodoPagoCredito"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r82.fechaVenta_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](24, _c0, ctx_r82.submitted && ctx_r82.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r82.submitted && ctx_r82.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r82.tickValue)("options", ctx_r82.tickValueoptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r82.nombreCredito);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx_r82.listClients)("searchKeyword", ctx_r82.keywordCliente)("itemTemplate", _r105)("notFoundTemplate", _r107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r82.precioTotal_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](26, _c0, ctx_r82.submitted && ctx_r82.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r82.pago_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](28, _c0, ctx_r82.submitted && ctx_r82.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r82.cambio_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](30, _c0, ctx_r82.submitted && ctx_r82.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("formControlName", ctx_r82.observaciones_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r82.formCredito.valid);
} }
function AddSaleComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Registrar Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_69_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r122.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ul", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("navChange", function AddSaleComponent_ng_template_69_Template_ul_navChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r123); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r124.selectorMetodoPago($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "li", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Al Contado");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, AddSaleComponent_ng_template_69_ng_template_14_Template, 61, 30, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "li", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Al Cr\u00E9dito");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, AddSaleComponent_ng_template_69_ng_template_21_Template, 68, 32, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("activeId", ctx_r14.activePago);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavItem", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavItem", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavOutlet", _r80);
} }
function AddSaleComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h5", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Factura de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_71_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r127); const modal_r125 = restoredCtx.$implicit; return modal_r125.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "h4", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Factura #MN0131 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "641 Counts Lane Wilmore, KY 40390");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, " abc@123.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, " 012-345-6789");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "hr", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "h5", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Facturado a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "h5", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Preston Miller");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "4450 Fancher Drive Dallas, TX 75247");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "PrestonMiller@armyspy.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "001-234-5678");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "h5", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "N\u00BA de Factura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "#MN0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "h5", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "Fecha de la Factura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "09 Jul, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "h5", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "N\u00BA de pedido:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "#1123456");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "h5", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "Resumen del Pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "table", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "th", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "01");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "h5", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "Nike N012 Running Shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "ul", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "li", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "Color : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, "Gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "li", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "Size : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "08");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91, "$260");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, "PEN 260.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "02");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "h5", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101, "Adidas Running Shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "ul", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "li", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104, "Color : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "Black");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "li", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](108, "Size : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, "09");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, "$250");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](114, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](115, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](116, "PEN 250.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "th", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, "Sub Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](121, "PEN 510.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "th", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, " Descuento :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "td", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](126, "- PEN 50.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](127, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "th", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129, " Costo de env\u00EDo :");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "td", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, "PEN 25.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](133, "th", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](134, " Impuesto (IGV)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "td", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](136, "PEN 13.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](138, "th", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](139, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "td", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "h4", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](142, "PEN 498.00");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "a", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](145, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "a", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](147, "i", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_71_Template_button_click_148_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r127); const modal_r125 = restoredCtx.$implicit; return modal_r125.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](149, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](150, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](151, "Guardar cambios");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
//import { MessageService } from 'primeng';
class AddSaleComponent {
    constructor(service, fb, modalService, productosService, customerService) {
        this.service = service;
        this.fb = fb;
        this.modalService = modalService;
        this.productosService = productosService;
        this.customerService = customerService;
        this.submitted_Contado = false;
        this.cantidadRecibida_Contado = "campoCantidadRecibidaContado";
        this.fechaVenta_Contado = "campoFechaVentaContado";
        this.usuario_Contado = "campoUsuarioContado";
        this.nombreContado = "campoNombreContado";
        this.precioTotal_Contado = "campoPrecioTotalContado";
        this.pago_Contado = "campoPagoContado";
        this.cambio_Contado = "campoCambioContado";
        this.observaciones_Contado = "campoObservacionesContado";
        this.metodoPagoContado = "campoMetodoPagoContado";
        this.cantidadRecibida_Credito = "campoCantidadRecibidaCredito";
        this.fechaVenta_Credito = "campoFechaVentaCredito";
        this.usuario_Credito = "campoUsuarioCredito";
        this.nombreCredito = "campoNombreCredito";
        this.precioTotal_Credito = "campoPrecioTotalCredito";
        this.pago_Credito = "campoPagoCredito";
        this.cambio_Credito = "campoCambioCredito";
        this.observaciones_Credito = "campoObservacionesCredito";
        this.metodoPagoCredito = "campoMetodoPagoCredito";
        this.precioOriginal_Editar = "campoPrecioOriginalEditar";
        this.fechaCambio_Editar = "campoFechaCambioEditar";
        this.nuevoPrecio_Editar = "campoNuevoPrecioEditar";
        this.active = 1;
        this.keyword = "marca";
        this.keywordCliente = "nombres_apellidos";
        this.products = [];
        this.venta = new src_models_venta__WEBPACK_IMPORTED_MODULE_2__.VentasModel;
        this.tipoPago = new src_models_tipo_venta__WEBPACK_IMPORTED_MODULE_3__.TipoVentaModel;
        this.activePago = 1;
        this.selectorPago = "contado";
        this.listMetodosPagos = ['Físico', 'Yape', 'Plin', 'Interbancario'];
        this.listClients = [];
        this.btnGuardar = false;
        this.numberPattern = '[0-9]+';
        this.tickValue = 2;
        this.tickValueoptions = {
            showTicksValues: true,
            stepsArray: [
                { value: 2, legend: 'Mínimo' },
                { value: 3 },
                { value: 4 },
                { value: 5, legend: 'Máximo' }
            ]
        };
        this.addsales$ = service.Addsales$;
        this.total$ = service.total$;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Venta' }, { label: 'Realizar Venta', active: true }];
        this.getListMonturas();
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
    centerModal(centerDataModal, products) {
        this.crearFormulario();
        this.getListClients();
        this.fechaVenta = new Date(Date.now());
        this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
        console.log("modal", products);
        this.f(this.fechaVenta_Contado).setValue(this.fechaVenta.toLocaleDateString());
        this.f(this.precioTotal_Contado).setValue(this.precioTotalVenta);
        this.g(this.fechaVenta_Credito).setValue(this.fechaVenta.toLocaleDateString());
        this.g(this.precioTotal_Credito).setValue(this.precioTotalVenta);
    }
    /**
     * Open scroll modal
     * @param scrollDataModal scroll modal data
     */
    scrollModal(scrollDataModal) {
        this.modalService.open(scrollDataModal, { size: 'xl', scrollable: true });
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
        /* this.formContado = this.fb.group({
          title: '',
          category: '',
        }); */
        this.modalService.dismissAll();
    }
    /**
     * Save the event
     */
    saveEvent() {
        if (this.formContado.valid) {
        }
        this.submitted_Contado = true;
    }
    getListMonturas() {
        this.productosService.getMonturas().subscribe(res => {
            this.listMonturas = res;
            console.log("monturas", this.listMonturas);
        });
    }
    getListAccesorios() {
        this.productosService.getAccesorios().subscribe(res => {
            this.listAccesorios = res;
            console.log("accesorios", this.listAccesorios);
        });
    }
    getListLunas() {
        this.productosService.getLunas().subscribe(res => {
            this.listLunas = res;
            console.log("lunas", this.listLunas);
        });
    }
    getListClients() {
        this.customerService.getAllClientsforSale().subscribe(res => {
            this.listClients = res;
            this.listClients.forEach(element => {
                element.nombres_apellidos = element.apellidos + ' ' + element.nombres;
            });
            console.log("clientes", this.listClients);
        });
    }
    selectorProducts(changeEvent) {
        console.log(changeEvent.nextId);
        switch (changeEvent.nextId) {
            case 1:
                this.getListMonturas();
                this.keyword = "marca";
                break;
            case 2:
                this.getListLunas();
                this.keyword = "material";
                break;
            case 3:
                this.getListAccesorios();
                this.keyword = "nombre_accesorio";
            default:
                break;
        }
    }
    selectorMetodoPago(changeEvent) {
        console.log(changeEvent.nextId);
        if (changeEvent.nextId == 1) {
            this.selectorPago = "contado";
        }
        else {
            this.selectorPago = "credito";
        }
    }
    selectEvent(item) {
        console.log(item);
        switch (item.tipo) {
            case 'montura':
                this.products.push(Object.assign(Object.assign({}, item), { num: 1, precio: item.precio_montura_v }));
                break;
            case 'luna':
                this.products.push(Object.assign(Object.assign({}, item), { num: 1, precio: item.precio_luna_v }));
                break;
            case 'accesorio':
                this.products.push(Object.assign(Object.assign({}, item), { num: 1, precio: item.precio_accesorio_v }));
                break;
            default:
                break;
        }
        this.estadoBotonGuardar();
        console.log("autocomplete", this.products);
    }
    selectEventCliente(item) {
        console.log(item);
        if (this.selectorPago == "contado") {
            this.f(this.usuario_Contado).setValue(item.id_cliente);
        }
        else {
            this.g(this.usuario_Credito).setValue(item.id_cliente);
        }
        this.venta.nombre_cliente = item.nombres + ' ' + item.apellidos;
        console.log("autocompleteCliente", this.products);
    }
    onChangeSearch(search) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }
    onFocused(e) {
        // do something
    }
    /** Gets the total cost of all products. */
    getTotalCost() {
        this.precioTotalVenta = this.products.map(t => t.precio).reduce((acc, value) => acc + value, 0);
        return this.precioTotalVenta;
    }
    /** actualiza el precio por cantidad */
    addQuantityProduct(product, i) {
        console.log(this.products);
        this.products[i].num += 1;
        switch (this.products[i].tipo) {
            case 'montura':
                this.products[i].precio = this.products[i].precio_montura_v * this.products[i].num;
                break;
            case 'luna':
                this.products[i].precio = this.products[i].precio_luna_v * this.products[i].num;
                break;
            case 'accesorio':
                this.products[i].precio = this.products[i].precio_accesorio_v * this.products[i].num;
                break;
            default:
                break;
        }
    }
    substractQuantityProduct(product, i) {
        console.log(this.products);
        this.products[i].num -= 1;
        switch (this.products[i].tipo) {
            case 'montura':
                this.products[i].precio = this.products[i].precio_montura_v * this.products[i].num;
                break;
            case 'luna':
                this.products[i].precio = this.products[i].precio_luna_v * this.products[i].num;
                break;
            case 'accesorio':
                this.products[i].precio = this.products[i].precio_accesorio_v * this.products[i].num;
                break;
            default:
                break;
        }
        if (this.products[i].num === 0) {
            this.removeProduct();
        }
    }
    /**
     * Remueve elementos de la lista cuando la cantidad es = 0
     */
    removeProduct() {
        //console.log(this.cartProductList);
        this.products = this.products.filter((name) => name.num !== 0);
    }
    /**
     * Remueve productos del carrito de compras
     */
    removeCartProduct(product, i) {
        console.log("eliminado", this.products);
        this.products[i].num = 0;
        this.removeProduct();
        this.estadoBotonGuardar();
    }
    /**
     * Cambia el estado del boton guardar
     */
    estadoBotonGuardar() {
        if (this.products.length == 0) {
            this.btnGuardar = false;
        }
        else {
            this.btnGuardar = true;
        }
    }
    crearFormulario() {
        this.formContado = this.fb.group({
            [this.cantidadRecibida_Contado]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(this.numberPattern),
                ]],
            [this.fechaVenta_Contado]: [{ value: null, disabled: true }],
            [this.usuario_Contado]: [null],
            [this.precioTotal_Contado]: [{ value: null, disabled: true }],
            [this.pago_Contado]: [{ value: null, disabled: true }],
            [this.cambio_Contado]: [{ value: null, disabled: true }],
            [this.observaciones_Contado]: [null],
            [this.metodoPagoContado]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required
                ]],
            [this.nombreContado]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required
                ]]
        });
        this.formCredito = this.fb.group({
            [this.cantidadRecibida_Credito]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(this.numberPattern),
                ]],
            [this.fechaVenta_Credito]: [{ value: null, disabled: true }],
            [this.usuario_Credito]: [null],
            [this.precioTotal_Credito]: [{ value: null, disabled: true }],
            [this.pago_Credito]: [{ value: null, disabled: true }],
            [this.cambio_Credito]: [{ value: null, disabled: true }],
            [this.observaciones_Credito]: [null],
            [this.metodoPagoCredito]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required
                ]],
            [this.nombreCredito]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required
                ]],
        });
    }
    f(campo) {
        return this.formContado.get(campo);
    }
    g(campo) {
        return this.formCredito.get(campo);
    }
    updatePago(event) {
        console.log("entre");
        if (this.selectorPago == "contado") {
            this.f(this.pago_Contado).setValue(this.f(this.cantidadRecibida_Contado).value);
            this.f(this.cambio_Contado).setValue(this.f(this.cantidadRecibida_Contado).value - this.precioTotalVenta);
        }
        else {
            this.g(this.pago_Credito).setValue(this.g(this.cantidadRecibida_Credito).value);
            this.g(this.cambio_Credito).setValue(this.g(this.cantidadRecibida_Credito).value - this.precioTotalVenta);
        }
    }
    guardarVenta() {
        if (this.formContado.valid || this.formCredito.valid) {
            const tempMonturas = this.products.filter(monturas => monturas.tipo == 'montura');
            const tempLunas = this.products.filter(lunas => lunas.tipo == 'luna');
            const tempAccesorios = this.products.filter(accesorios => accesorios.tipo == 'accesorio');
            this.venta.list_monturas = tempMonturas;
            this.venta.list_lunas = tempLunas;
            this.venta.list_accesorios = tempAccesorios;
            if (this.selectorPago == "contado") {
                this.venta.observaciones = this.f(this.observaciones_Contado).value;
                this.venta.fecha_creacion_venta = this.fechaVenta;
                this.tipoPago.cantidad_recibida = this.f(this.cantidadRecibida_Contado).value;
                this.tipoPago.deuda = 0;
                this.tipoPago.metodo_pago = this.f(this.metodoPagoContado).value;
                this.tipoPago.cuotas = String(0);
                this.venta.id_cliente = this.f(this.usuario_Contado).value;
            }
            else {
                this.venta.observaciones = this.g(this.observaciones_Credito).value;
                this.venta.fecha_creacion_venta = this.fechaVenta;
                this.tipoPago.cantidad_recibida = this.g(this.cantidadRecibida_Credito).value;
                this.tipoPago.deuda = this.precioTotalVenta - this.g(this.cantidadRecibida_Credito).value;
                this.tipoPago.metodo_pago = this.g(this.metodoPagoCredito).value;
                this.tipoPago.cuotas = String(this.tickValue);
                this.venta.id_cliente = this.g(this.usuario_Credito).value;
            }
            this.venta.id_vendedor = "1234456";
            this.tipoPago.forma_pago = this.selectorPago;
            this.tipoPago.precio_total = this.precioTotalVenta;
            this.tipoPago.fecha_pago = new Date();
            this.venta.tipo_venta.push(this.tipoPago);
            this.venta.id_sede = '1234234';
            this.venta.habilitado = true;
            console.log("venta", this.venta);
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("loading", "Cargando...");
            this.cancel();
        }
        else {
        }
    }
    cancel() {
        const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().mixin({
            customClass: {
                cancelButton: 'btn btn-danger ms-2',
                confirmButton: 'btn btn-success',
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons
            .fire({
            title: '¿Está seguro de realizar la venta?',
            text: '¡No se podrá revertir esto!',
            icon: 'warning',
            cancelButtonText: 'No, cancelar!',
            confirmButtonText: 'Si, vender!',
            showCancelButton: true,
        })
            .then(result => {
            if (result.value) {
                this.productosService.createVenta(this.venta).subscribe(res => {
                    console.log("Guardando venta");
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("success", "Venta realizada");
                    this.modalService.dismissAll();
                }, (error) => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("close", null);
                    if (error.status !== 404) {
                        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("error", "Error en la conexión");
                    }
                });
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().DismissReason.cancel)) {
                swalWithBootstrapButtons.fire('Cancelado', 'La venta no se ha realizado', 'error');
            }
        });
    }
}
AddSaleComponent.ɵfac = function AddSaleComponent_Factory(t) { return new (t || AddSaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_addsale_service__WEBPACK_IMPORTED_MODULE_0__.AddsaleService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_6__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_7__.ClienteService)); };
AddSaleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: AddSaleComponent, selectors: [["app-add-sale"]], viewQuery: function AddSaleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([_addsale_service__WEBPACK_IMPORTED_MODULE_0__.AddsaleService, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe])], decls: 73, vars: 12, consts: [[1, "container-fluid"], ["title", "A\u00F1adir un Producto", 3, "breadcrumbItems"], [1, "row", "mb-4"], [1, "col-xl-12"], [1, "card", "mb-0"], ["ngbNav", "", 1, "nav", "nav-tabs", "nav-justified", "nav-tabs-custom", 3, "activeId", "navChange"], ["justifiednav", "ngbNav"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", 1, "nav-link"], [1, "uil", "uil-nerd", "font-size-20"], [1, "d-none", "d-sm-block"], ["ngbNavContent", ""], [1, "uil", "uil-panorama-h-alt", "font-size-20"], [1, "uil", "uil-box", "font-size-20"], [3, "ngbNavOutlet"], ["TabContentAbout", ""], ["TabContentTasks", ""], ["TabContentMessages", ""], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "table-responsive"], [1, "table", "table-centered", "dt-responsive", "table-nowrap", "mb-0", "align-middle", 2, "border-spacing", "0 12px", "width", "100%"], [1, "table-light"], [1, "bg-transparent"], [4, "ngFor", "ngForOf"], [1, "text-end", "mt-2"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "disabled", "click"], [1, "uil", "uil-shopping-cart-alt", "mt-2", "me-1"], ["centerDataModalEditar", ""], ["centerDataModalGuardar2", ""], ["scrollDataModal", ""], [3, "ngTemplateOutlet"], [1, "tab-content", "p-4"], [1, "tab-pane", "active"], [1, "col-sm-12", "col-md-12", "search-box", "chat-search-box"], [1, "position-relative"], ["placeholder", "Buscar Montura", "historyIdentifier", "", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], [3, "innerHTML"], ["placeholder", "Buscar Lunas", "historyIdentifier", "", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["placeholder", "Buscar Accesorios", "historyIdentifier", "", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], [3, "result"], [4, "ngIf"], ["placement", "top", "ngbTooltip", "Disminuir", 1, "px-2", "text-warning"], [1, "uil", "uil-minus-circle", "font-size-18", 3, "click"], ["placement", "top", "ngbTooltip", "Agregar", 1, "px-2", "text-success"], ["name", "quantity", "ngDefaultControl", "", "min", "0", 1, "uil", "uil-plus-circle", "font-size-18", 3, "ngModel", "ngModelChange", "click"], ["href", "javascript:void(0);", "placement", "top", "ngbTooltip", "Editar", 1, "px-2", "text-primary"], [1, "uil", "uil-pen", "font-size-18"], ["placement", "top", "ngbTooltip", "Eliminar", 1, "px-2", "text-danger"], [1, "uil", "uil-trash-alt", "font-size-18", 3, "click"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [3, "formGroup", "ngSubmit"], [1, "col-6"], [1, "mb-3"], [1, "control-label"], ["placeholder", "PEN 000.00", "type", "text", "name", "namePrecioOriginalEditar", 1, "form-control", 3, "formControlName", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["placeholder", "Seleccione la fecha", "type", "text", "name", "nameFechaCambioEditar", 1, "form-control", 3, "formControlName", "ngClass"], [1, "col-12"], ["placeholder", "Escriba el nuevo precio de venta", "type", "text", "name", "nameNuevoPrecioEditar", 1, "form-control", 3, "formControlName", "ngClass"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "click"], [1, "invalid-feedback"], [1, "col-lg-14"], ["ngbNav", "", 1, "nav-pills", "nav-justified", "bg-light", 3, "activeId", "navChange"], ["justifiednavpills", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], [1, "d-block", "d-sm-none"], [1, "fas", "fa-home"], [1, "far", "fa-user"], [1, "row", "mt-4"], [1, "col-4"], ["placeholder", "Cantidad en soles", "type", "text", "name", "nameCantidadRecibidaContado", 1, "form-control", 3, "formControlName", "change"], ["class", "text-danger", 4, "ngIf"], [1, "form-label"], ["name", "selectMetodo", "placeholder", "Seleccione", 3, "items", "formControlName"], ["placeholder", "Seleccione la fecha", "type", "text", "name", "nameFechaRegistroContado", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Apellidos del cliente", "historyIdentifier", "", 3, "data", "searchKeyword", "itemTemplate", "formControlName", "notFoundTemplate", "selected"], ["itemTemplate3", ""], [1, "control-label", 2, "text-align", "left"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameTotalContado", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "namePagoContado", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameCambioContado", 1, "form-control", 3, "formControlName", "ngClass"], [1, "mb-4"], ["for", "billing-observaciones", 1, "form-label"], ["id", "billing-observaciones", "rows", "3", "placeholder", "Ingrese las observaciones", 1, "form-control", 3, "formControlName"], [1, "text-danger"], ["placeholder", "Cantidad en soles", "type", "text", "name", "nameCantidadRecibidaCredito", 1, "form-control", 3, "formControlName", "change"], ["placeholder", "Seleccione la fecha", "type", "text", "name", "nameFechaRegistroCredito", 1, "form-control", 3, "formControlName", "ngClass"], [1, "p-3"], [3, "value", "options", "valueChange"], ["placeholder", "Apellidos del cliente", "historyIdentifier", "", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "formControlName", "selected"], ["itemTemplate2", ""], ["placeholder", "S/ 000.00", "type", "text", "name", "nameTotalCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "namePagoCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameCambioCredito", 1, "form-control", 3, "formControlName", "ngClass"], [1, "modal-title", "mt-0"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "invoice-title"], [1, "float-end", "font-size-16"], [1, "badge", "bg-success", "font-size-12", "ms-2"], ["src", "assets/images/logo-dark.png", "alt", "logo", "height", "20"], [1, "text-muted"], [1, "mb-1"], [1, "uil", "uil-map-marker", "me-1"], [1, "uil", "uil-envelope-alt", "me-1"], [1, "uil", "uil-phone", "me-1"], [1, "my-4"], [1, "col-sm-6"], [1, "font-size-16", "mb-3"], [1, "font-size-15", "mb-2"], [1, "text-muted", "text-sm-end"], [1, "font-size-16", "mb-1"], [1, "mt-4"], [1, "py-2"], [1, "font-size-15"], [1, "table", "table-nowrap", "table-centered", "mb-0"], [2, "width", "70px"], [1, "text-end", 2, "width", "120px"], ["scope", "row"], [1, "font-size-15", "mb-1"], [1, "list-inline", "mb-0"], [1, "list-inline-item"], [1, "fw-medium"], [1, "text-end"], ["scope", "row", "colspan", "4", 1, "text-end"], ["scope", "row", "colspan", "4", 1, "border-0", "text-end"], [1, "border-0", "text-end"], [1, "m-0"], [1, "modal-footer"], ["href", "javascript(0)", 1, "btn", "btn-success", "waves-effect", "waves-light", "me-1"], [1, "fa", "fa-download"], ["href", "javascript:window.print()", 1, "btn", "btn-success", "waves-effect", "waves-light", "me-1"], [1, "fa", "fa-print"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary"]], template: function AddSaleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ul", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("navChange", function AddSaleComponent_Template_ul_navChange_5_listener($event) { return ctx.selectorProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Montura");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, AddSaleComponent_ng_template_12_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Luna");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, AddSaleComponent_ng_template_18_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Accesorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](24, AddSaleComponent_ng_template_24_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, AddSaleComponent_ng_template_26_Template, 11, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, AddSaleComponent_ng_template_28_Template, 11, 4, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, AddSaleComponent_ng_template_30_Template, 11, 4, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Lista de Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "thead", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "ID Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](62, AddSaleComponent_tr_62_Template, 24, 11, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AddSaleComponent_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r129); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](70); return ctx.centerModal(_r13, ctx.products); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](65, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](67, AddSaleComponent_ng_template_67_Template, 30, 15, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](69, AddSaleComponent_ng_template_69_Template, 23, 4, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](71, AddSaleComponent_ng_template_71_Template, 152, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Total de la Venta: PEN ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](35, 9, ctx.getTotalCost(), "S/."), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.btnGuardar);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_8__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgTemplateOutlet, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_14__.AutocompleteComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbHighlight, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, ng5_slider__WEBPACK_IMPORTED_MODULE_9__["ɵa"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc2FsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 55749:
/*!********************************************************!*\
  !*** ./src/app/pages/sale/add-sale/addsale.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddsaleService": () => (/* binding */ AddsaleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 9543);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 78068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);





const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(Addsales, column, direction) {
    if (direction === '' || column === '') {
        return Addsales;
    }
    else {
        return [...Addsales].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(Addsale, term, pipe) {
    return Addsale.id.toLowerCase().includes(term)
        || Addsale.detalle.toLowerCase().includes(term.toLowerCase())
        || Addsale.cantidad.toLowerCase().includes(term)
        || Addsale.precio.toLowerCase().includes(term)
        || Addsale.total.toLowerCase().includes(term);
}
class AddsaleService {
    constructor(pipe) {
        this.pipe = pipe;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this._Addsales$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
        this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(false))).subscribe(result => {
            this._Addsales$.next(result.Addsales);
            this._total$.next(result.total);
        });
        this._search$.next();
    }
    get Addsales$() { return this._Addsales$.asObservable(); }
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
        let Addsales = sort(_data__WEBPACK_IMPORTED_MODULE_0__.VENTAS, sortColumn, sortDirection);
        // 2. filter
        Addsales = Addsales.filter(Addsale => matches(Addsale, searchTerm, this.pipe));
        const total = Addsales.length;
        // 3. paginate
        Addsales = Addsales.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({ Addsales, total });
    }
}
AddsaleService.ɵfac = function AddsaleService_Factory(t) { return new (t || AddsaleService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe)); };
AddsaleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AddsaleService, factory: AddsaleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9543:
/*!*********************************************!*\
  !*** ./src/app/pages/sale/add-sale/data.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VENTAS": () => (/* binding */ VENTAS)
/* harmony export */ });
const VENTAS = [
    {
        index: 1,
        id: '#MN0123',
        tipo: 'Montura',
        detalle: 'ACETATO KEVIN',
        cantidad: '3',
        precio: '33.00',
        total: '37.00',
    },
    {
        index: 2,
        id: '#MN0122',
        tipo: 'Montura',
        detalle: 'ACETATO BEIKUBEI',
        cantidad: '4',
        precio: '18.00',
        total: '86.00'
    },
    {
        index: 3,
        id: '#MN0121',
        tipo: 'Montura',
        detalle: 'ACETATO VIPSUAL',
        cantidad: '2',
        precio: '73.90',
        total: '26.00'
    },
    {
        index: 4,
        id: '#MN0120',
        tipo: 'Montura',
        detalle: 'CAREY	COLOR WISE',
        cantidad: '1',
        precio: '84.00',
        total: '83.00'
    },
    {
        index: 5,
        id: '#MN0119',
        tipo: 'Montura',
        detalle: 'ACETATO FIORALBA',
        cantidad: '5',
        precio: '62.00',
        total: '38.00'
    }
];


/***/ }),

/***/ 20477:
/*!***********************************************************!*\
  !*** ./src/app/pages/sale/add-sale/sortable.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 33605:
/*!***************************************************************!*\
  !*** ./src/app/pages/sale/list-sales/list-sales.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListSalesComponent": () => (/* binding */ ListSalesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _sale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale.service */ 64803);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable.directive */ 45180);
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/l10n/es.js */ 46563);
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/venta.service */ 91173);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-flatpickr */ 49792);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
















const _c0 = function (a0) { return { "bg-soft-danger": a0 }; };
function ListSalesComponent_tr_76_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Deuda \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, data_r5.tipo_venta[0].deuda > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", data_r5.tipo_venta[0].deuda, " ");
} }
function ListSalesComponent_tr_76_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListSalesComponent_tr_76_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ngb-highlight", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ngb-highlight", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ngb-highlight", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "ngb-highlight", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ListSalesComponent_tr_76_td_13_Template, 5, 4, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ListSalesComponent_tr_76_td_14_Template, 3, 0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListSalesComponent_tr_76_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](84); return ctx_r10.centerModalActualizar(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListSalesComponent_tr_76_Template_a_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const data_r5 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.eliminar(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", i_r6 + 1)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 11, data_r5.fecha_creacion_venta, "dd/MM/yyyy"))("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", data_r5.nombre_cliente.charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", data_r5.nombre_cliente)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", data_r5.tipo_venta[0].precio_total)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", data_r5.tipo_venta[0].deuda > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", data_r5.tipo_venta[0].deuda == 0);
} }
function ListSalesComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Antes");
} }
function ListSalesComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Siguiente");
} }
function ListSalesComponent_ng_template_83_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_83_div_28_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_83_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ListSalesComponent_ng_template_83_div_28_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ListSalesComponent_ng_template_83_div_28_div_2_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r14.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r14.formCredito.controls["campoCantidadRecibidaCreditoActualizacion"].errors.pattern);
} }
function ListSalesComponent_ng_template_83_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_83_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ListSalesComponent_ng_template_83_div_34_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].errors.required);
} }
function ListSalesComponent_ng_template_83_div_40_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_83_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ListSalesComponent_ng_template_83_div_40_span_1_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r16.form.title.errors.required);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function ListSalesComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h5", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Actualizar Venta - Al Credito");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListSalesComponent_ng_template_83_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r21.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "form", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ListSalesComponent_ng_template_83_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r23.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Nombres y Apellidos del Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Renzo Alessandro Sucari Velasquez");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Deuda \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " S/. 100.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Cantidad Recibida");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ListSalesComponent_ng_template_83_Template_input_change_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r24.updatePago($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ListSalesComponent_ng_template_83_div_28_Template, 3, 2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "ng-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, ListSalesComponent_ng_template_83_div_34_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, ListSalesComponent_ng_template_83_div_40_Template, 2, 1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Informaci\u00F3n de Pagos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "table", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "N\u00BA Cuotas");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "S/. 60.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Plin");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "09 Ago, 2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "S/. 30.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Interbancario");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "14 Set, 2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "S/. 59.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "F\u00EDsico");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "18 Oct, 2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "S/. 30.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "Yape");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "29 Nov, 2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "-");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "Montos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](114, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](115, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](119, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](120, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124, "Cambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](125, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](130, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](131, "textarea", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](133, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListSalesComponent_ng_template_83_Template_button_click_133_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r25.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](134, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListSalesComponent_ng_template_83_Template_button_click_135_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.guardarActualizacionDeuda(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](136, " Registrar Venta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r4.formCreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](18, _c0, 1 > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.cantidadRecibida_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].invalid && (ctx_r4.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].dirty || ctx_r4.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.metodoPagoCreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx_r4.listMetodosPagos);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].invalid && (ctx_r4.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].dirty || ctx_r4.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.fechaVenta_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](20, _c1, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.precioTotal_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](22, _c1, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.pago_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](24, _c1, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.cambio_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](26, _c1, ctx_r4.submitted && ctx_r4.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.observaciones_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r4.formCreditoActualizacion.valid);
} }
class ListSalesComponent {
    constructor(service, fb, fbActualizar, ventasService, modalService) {
        this.service = service;
        this.fb = fb;
        this.fbActualizar = fbActualizar;
        this.ventasService = ventasService;
        this.modalService = modalService;
        this.submitted_CreditoActualizacion = false;
        this.cantidadRecibida_CreditoActualizacion = "campoCantidadRecibidaCreditoActualizacion";
        this.fechaVenta_CreditoActualizacion = "campoFechaVentaCreditoActualizacion";
        this.usuario_CreditoActualizacion = "campoUsuarioCreditoActualizacion";
        this.nombreCreditoActualizacion = "campoNombreCreditoActualizacion";
        this.precioTotal_CreditoActualizacion = "campoPrecioTotalCreditoActualizacion";
        this.pago_CreditoActualizacion = "campoPagoCreditoActualizacion";
        this.cambio_CreditoActualizacion = "campoCambioCreditoActualizacion";
        this.observaciones_CreditoActualizacion = "campoObservacionesCreditoActualizacion";
        this.metodoPagoCreditoActualizacion = "campoMetodoPagoCreditoActualizacion";
        this.numberPattern = '[0-9]+';
        this.activePago = 1;
        this.listMetodosPagos = ['Físico', 'Yape', 'Plin', 'Interbancario'];
        // rango de fecha
        this.exampleOptions = {
            altInputClass: 'form-control',
            locale: (flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_2___default().es),
        };
        this.fechaDesde = 'campoFechaDesde';
        this.fechaHasta = 'campoFechaHasta';
        this.transactions$ = service.transactions$;
        console.log(this.transactions$);
        this.total$ = service.total$;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Venta' }, { label: 'Lista de Ventas', active: true }];
        this.crearFormulario();
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
     * @param centerDataModalActualizar center modal data
     */
    centerModalActualizar(centerDataModalActualizar) {
        this.crearFormularioActualizar();
        this.fechaVenta = new Date(Date.now());
        this.modalService.open(centerDataModalActualizar, { centered: true, windowClass: 'modal-holder' });
        this.g(this.fechaVenta_CreditoActualizacion).setValue(this.fechaVenta.toLocaleDateString());
        this.g(this.precioTotal_CreditoActualizacion).setValue(this.precioTotalVenta);
    }
    /**
     * Close event modal
     */
    closeEventModal() {
        /* this.formCreditoActualizacion = this.fb.group({
          title: '',
          category: '',
        }); */
        this.modalService.dismissAll();
    }
    /**
     * Save the event
     */
    saveEvent() {
        if (this.formCreditoActualizacion.valid) {
        }
        this.submitted_CreditoActualizacion = true;
    }
    crearFormulario() {
        this.formDateRange = this.fb.group({
            [this.fechaDesde]: [],
            [this.fechaHasta]: []
        });
    }
    crearFormularioActualizar() {
        this.formCreditoActualizacion = this.fbActualizar.group({
            [this.cantidadRecibida_CreditoActualizacion]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(this.numberPattern),
                ]],
            [this.fechaVenta_CreditoActualizacion]: [{ value: null, disabled: true }],
            [this.usuario_CreditoActualizacion]: [null],
            [this.precioTotal_CreditoActualizacion]: [{ value: null, disabled: true }],
            [this.pago_CreditoActualizacion]: [{ value: null, disabled: true }],
            [this.cambio_CreditoActualizacion]: [{ value: null, disabled: true }],
            [this.observaciones_CreditoActualizacion]: [null],
            [this.metodoPagoCreditoActualizacion]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
                ]],
            [this.nombreCreditoActualizacion]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required
                ]],
        });
    }
    g(campo) {
        return this.formCreditoActualizacion.get(campo);
    }
    updatePago(event) {
        console.log("entre");
        this.g(this.pago_CreditoActualizacion).setValue(this.g(this.cantidadRecibida_CreditoActualizacion).value);
        this.g(this.cambio_CreditoActualizacion).setValue(this.g(this.cantidadRecibida_CreditoActualizacion).value - this.precioTotalVenta);
    }
    guardarActualizacionDeuda() {
        if (this.formCreditoActualizacion.valid) {
        }
        else {
        }
    }
    f(campo) {
        return this.formDateRange.get(campo);
    }
    filterDateRange() {
        if (this.formDateRange.valid) {
            let fechaIni = this.f(this.fechaDesde).value[0];
            let fechaFin = this.f(this.fechaHasta).value != null ? this.f(this.fechaHasta).value[0] : new Date(Date.now());
            console.log("fechas", fechaIni, fechaFin);
            this.ventasService.getVentasByDate(fechaIni, fechaFin).subscribe(res => {
                console.log(res);
                this.service.updateTable(res);
            });
        }
        else {
            return;
        }
    }
    eliminar(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: '¿Está seguro que desea eliminar la venta?',
            text: 'No se podrá revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#34c38f',
            cancelButtonColor: '#f46a6a',
            confirmButtonText: 'Si, eliminar!'
        }).then(result => {
            if (result.value) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("loading", "Cargando...");
                this.ventasService.darBajaVenta(data.id_ventas).subscribe(res => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("success", "Venta eliminada");
                    console.log("venta borrado");
                    this.updateListVentas();
                }, error => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("error", "Error en la conexión");
                });
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().DismissReason.cancel)) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire('Cancelado', 'Venta no eliminada', 'error');
            }
        });
    }
    updateListVentas() {
        this.ventasService.getVentas().subscribe(res => {
            this.service.updateTable(res);
        });
    }
}
ListSalesComponent.ɵfac = function ListSalesComponent_Factory(t) { return new (t || ListSalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_sale_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_5__.VentaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal)); };
ListSalesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListSalesComponent, selectors: [["app-list-sales"]], viewQuery: function ListSalesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_sale_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe])], decls: 85, vars: 20, consts: [[1, "container-fluid"], ["title", "Ventas", 3, "breadcrumbItems"], [1, "row", "mt-2", "mb-2"], [1, "col-12", "col-md-6", "justify-content-start"], [1, "row", "mb-3"], [1, "col-8", "search-box", "chat-search-box"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar venta", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "border-light", "rounded", 3, "ngModel", "ngModelChange"], [1, "uil", "uil-search", "search-icon"], [1, "col-4"], [1, "btn-group", "text-md-start"], ["type", "button", 1, "btn", "btn-primary"], ["ngbTooltip", "Exportar", 1, "uil", "uil-import"], ["ngbTooltip", "Importar", 1, "uil", "uil-export"], [1, "col-sm-12", "col-md-6", "text-md-end"], [1, "float-end"], [1, "mb-3"], [3, "formGroup"], ["id", "datepicker6", "data-date-format", "dd M, yyyy", "data-date-autoclose", "true", "data-provide", "datepicker", "data-date-container", "#datepicker6", 1, "input-daterange", "input-group"], ["mode", "range", "placeholder", "Desde", 1, "text-start", 3, "config", "formControlName"], ["placeholder", "Hasta", 1, "text-start", 3, "config", "formControlName"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "mdi", "mdi-filter-variant"], [1, "row"], [1, "col", "text-md-end"], [1, "col"], [1, "d-inline-flex", "mb-3"], ["for", "order-selectinput", 1, "form-check-label", "my-2", "me-2"], ["id", "order-selectinput", 1, "form-select"], ["selected", ""], ["value", "1"], ["value", "2"], [1, "dataTables_length"], [1, "d-inline-flex", "align-items-center"], ["name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "col-12"], [1, "table-responsive", "mb-4"], ["id", "DataTables_Table_0_wrapper", 1, "dataTables_wrapper", "dt-bootstrap4", "no-footer"], [1, "table", "table-centered", "datatables", "dt-responsive", "nowrap", "table-card-list", 2, "border-spacing", "0 12px", "width", "100%"], [1, "bg-transparent"], ["scope", "col", "sortable", "observaciones", 3, "sort"], ["scope", "col", "sortable", "id_sede", 3, "sort"], ["scope", "col", "sortable", "", 3, "sort"], [2, "width", "170px"], ["class", "odd", 4, "ngFor", "ngForOf"], [3, "collectionSize", "page", "pageSize", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["centerDataModalActualizarVenta", ""], [1, "odd"], [3, "result", "term"], [1, "avatar-xs", "d-inline-block", "me-2"], [1, "avatar-title", "rounded-circle", "bg-light", "text-body"], [4, "ngIf"], ["placement", "top", "ngbTooltip", "Edit", 1, "px-3", "text-primary", 3, "click"], [1, "uil", "uil-pen", "font-size-18"], ["placement", "top", "ngbTooltip", "Delete", 1, "px-3", "text-danger", 3, "click"], [1, "uil", "uil-trash-alt", "font-size-18"], [1, "text-danger"], [1, "badge", "rounded-pill", "bg-soft-success", "font-size-12", 3, "ngClass"], [1, "text-success"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [1, "col-lg-14"], [3, "formGroup", "ngSubmit"], [1, "col-sm-6"], [1, "control-label"], [1, "text-muted", "text-sm-end"], [1, "mt-4"], [1, "text-danger", "font-size-16"], [1, "badge", "rounded-pill", "bg-soft-success", "font-size-16", 3, "ngClass"], [1, "border-top", "pt-4"], ["placeholder", "Cantidad en soles", "type", "text", "name", "nameCantidadRecibidaCredito", 1, "form-control", 3, "formControlName", "change"], ["class", "text-danger", 4, "ngIf"], [1, "form-label"], ["name", "selectMetodo", "placeholder", "Seleccione", 3, "items", "formControlName"], ["placeholder", "Seleccione la fecha", "type", "text", "name", "nameFechaRegistroCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-sm-12"], [1, "table-responsive"], [1, "table", "table-sm", "m-0", "table-centered"], [2, "width", "70px"], ["scope", "row"], [1, "control-label", 2, "text-align", "left"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameTotalCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "namePagoCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameCambioCredito", 1, "form-control", 3, "formControlName", "ngClass"], [1, "col-lg-12"], [1, "mb-4"], ["for", "billing-observaciones", 1, "form-label"], ["id", "billing-observaciones", "rows", "3", "placeholder", "Ingrese las observaciones", 1, "form-control", 3, "formControlName"], [1, "text-end", "mt-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "disabled", "click"], [1, "invalid-feedback"]], template: function ListSalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ListSalesComponent_Template_input_ngModelChange_7_listener($event) { return ctx.service.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "ng2-flatpickr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "ng2-flatpickr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListSalesComponent_Template_button_click_22_listener() { return ctx.filterDateRange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Ventas");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Activos");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Sin pagar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Mostrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ListSalesComponent_Template_select_ngModelChange_44_listener($event) { return ctx.service.pageSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, " entradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_63_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "ID Orden");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_65_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_67_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Nombre del Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_69_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_71_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "Estado de Pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, ListSalesComponent_tr_76_Template, 20, 14, "tr", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](77, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "ngb-pagination", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function ListSalesComponent_Template_ngb_pagination_pageChange_79_listener($event) { return ctx.service.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](80, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, ListSalesComponent_ng_template_81_Template, 1, 0, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, ListSalesComponent_ng_template_82_Template, 1, 0, "ng-template", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, ListSalesComponent_ng_template_83_Template, 137, 28, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formDateRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("formControlName", ctx.fechaDesde);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.exampleOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("formControlName", ctx.fechaHasta);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.exampleOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.service.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](77, 16, ctx.transactions$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](80, 18, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, ng2_flatpickr__WEBPACK_IMPORTED_MODULE_11__.Ng2FlatpickrComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationPrevious, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbHighlight, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXNhbGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 64803:
/*!*******************************************************!*\
  !*** ./src/app/pages/sale/list-sales/sale.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionService": () => (/* binding */ TransactionService)
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
/* harmony import */ var src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/venta.service */ 91173);





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
    return transaction.id_cliente.toLowerCase().includes(term)
        || String(transaction.tipo_venta[0].precio_total).toLowerCase().includes(term.toLowerCase())
        || (transaction.fecha_creacion_venta).toLocaleString().includes(term);
    //|| transaction.id_sede.toLowerCase().includes(term)
    //|| transaction.id_cliente.toLowerCase().includes(term)
    //|| pipe.transform(transaction.index).includes(term);
}
class TransactionService {
    constructor(pipe, ventaService) {
        this.pipe = pipe;
        this.ventaService = ventaService;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this._ventas$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.ventaList = [];
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
        this.getAllVentas();
    }
    get transactions$() { return this._ventas$.asObservable(); }
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
    updateTable(data) {
        this._ventas$.next(data);
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let transactions = sort(this.ventaList, sortColumn, sortDirection);
        // 2. filter
        transactions = transactions.filter(transaction => matches(transaction, searchTerm, this.pipe));
        const total = transactions.length;
        // 3. paginate
        transactions = transactions.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ transactions, total });
    }
    //Servicio 
    getAllVentas() {
        this.ventaService.getVentas().subscribe(res => {
            this.ventaList = res;
            console.log(res);
            this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this._loading$.next(false))).subscribe(result => {
                this._ventas$.next(result.transactions);
                this._total$.next(result.total);
            });
            this._search$.next();
        });
    }
}
TransactionService.ɵfac = function TransactionService_Factory(t) { return new (t || TransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_0__.VentaService)); };
TransactionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: TransactionService, factory: TransactionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 45180:
/*!*************************************************************!*\
  !*** ./src/app/pages/sale/list-sales/sortable.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 55666:
/*!***************************************************!*\
  !*** ./src/app/pages/sale/sale-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleRoutingModule": () => (/* binding */ SaleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-sale/add-sale.component */ 27947);
/* harmony import */ var _list_sales_list_sales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-sales/list-sales.component */ 33605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: 'addsale',
        component: _add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_0__.AddSaleComponent
    },
    {
        path: 'listsales',
        component: _list_sales_list_sales_component__WEBPACK_IMPORTED_MODULE_1__.ListSalesComponent
    }
];
class SaleRoutingModule {
}
SaleRoutingModule.ɵfac = function SaleRoutingModule_Factory(t) { return new (t || SaleRoutingModule)(); };
SaleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SaleRoutingModule });
SaleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SaleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 42014:
/*!*******************************************!*\
  !*** ./src/app/pages/sale/sale.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleModule": () => (/* binding */ SaleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng5-slider */ 38391);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 68346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 85362);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var _add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-sale/add-sale.component */ 27947);
/* harmony import */ var _sale_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale-routing.module */ 55666);
/* harmony import */ var _list_sales_list_sales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-sales/list-sales.component */ 33605);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-ng-autocomplete */ 84933);
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-flatpickr */ 49792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);















class SaleModule {
}
SaleModule.ɵfac = function SaleModule_Factory(t) { return new (t || SaleModule)(); };
SaleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SaleModule });
SaleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DROPZONE_CONFIG,
            useValue: rxjs__WEBPACK_IMPORTED_MODULE_8__.config
        }
    ], imports: [[
            _sale_routing_module__WEBPACK_IMPORTED_MODULE_4__.SaleRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownModule,
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
            ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbCollapseModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__.AutocompleteLibModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
            ng2_flatpickr__WEBPACK_IMPORTED_MODULE_14__.Ng2FlatpickrModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SaleModule, { declarations: [_add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_3__.AddSaleComponent, _list_sales_list_sales_component__WEBPACK_IMPORTED_MODULE_5__.ListSalesComponent], imports: [_sale_routing_module__WEBPACK_IMPORTED_MODULE_4__.SaleRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_7__.DropzoneModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
        ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTypeaheadModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbCollapseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__.AutocompleteLibModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
        ng2_flatpickr__WEBPACK_IMPORTED_MODULE_14__.Ng2FlatpickrModule] }); })();


/***/ }),

/***/ 91173:
/*!*******************************************!*\
  !*** ./src/app/services/venta.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaService": () => (/* binding */ VentaService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);



class VentaService {
    constructor(http) {
        this.http = http;
    }
    getVentas() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllVentas');
    }
    getVentasByDate(fechaIni, fechaFin) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllVentasByDate/' + fechaIni + '/' + fechaFin);
    }
    darBajaVenta(idVenta) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'unsubscribeVentasById/' + idVenta, idVenta);
    }
}
VentaService.ɵfac = function VentaService_Factory(t) { return new (t || VentaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
VentaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VentaService, factory: VentaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80810:
/*!**********************************!*\
  !*** ./src/models/tipo_venta.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TipoVentaModel": () => (/* binding */ TipoVentaModel)
/* harmony export */ });
class TipoVentaModel {
}


/***/ }),

/***/ 97072:
/*!*****************************!*\
  !*** ./src/models/venta.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentasModel": () => (/* binding */ VentasModel)
/* harmony export */ });
class VentasModel {
    constructor() {
        this.list_monturas = [];
        this.list_lunas = [];
        this.list_accesorios = [];
        this.tipo_venta = [];
    }
}


/***/ }),

/***/ 84933:
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-ng-autocomplete/fesm2020/angular-ng-autocomplete.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteComponent": () => (/* binding */ AutocompleteComponent),
/* harmony export */   "AutocompleteLibModule": () => (/* binding */ AutocompleteLibModule),
/* harmony export */   "HighlightPipe": () => (/* binding */ HighlightPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 878);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);








const _c0 = ["searchInput"];
const _c1 = ["filteredListElement"];
const _c2 = ["historyListElement"];

function AutocompleteComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_4_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r11.remove($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function AutocompleteComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function AutocompleteComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.heading);
  }
}

function AutocompleteComponent_li_10_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c3 = function (a0) {
  return {
    $implicit: a0
  };
};

function AutocompleteComponent_li_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r18.select(item_r13);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_ng_container_1_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r14 = ctx_r21.index;
    const item_r13 = ctx_r21.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r15.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, item_r13, ctx_r15.toHighlight)));
  }
}

function AutocompleteComponent_li_10_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_li_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r23.select(item_r13);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_2_ng_container_1_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r14 = ctx_r26.index;
    const item_r13 = ctx_r26.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r16.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r16.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 4, item_r13, ctx_r16.toHighlight, ctx_r16.searchKeyword)));
  }
}

function AutocompleteComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_Template, 3, 9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteComponent_li_10_div_2_Template, 3, 10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isTypeString(item_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isTypeString(item_r13));
  }
}

function AutocompleteComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_12_Template_div_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r27.resetHistoryList($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.historyHeading);
  }
}

function AutocompleteComponent_li_15_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_li_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r34.select(item_r29);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_ng_container_1_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r30 = ctx_r37.index;
    const item_r29 = ctx_r37.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r31.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r31.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, item_r29));
  }
}

function AutocompleteComponent_li_15_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_li_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r39.select(item_r29);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_2_ng_container_1_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const idx_r30 = ctx_r42.index;
    const item_r29 = ctx_r42.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r32.selectedIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r32.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, item_r29));
  }
}

function AutocompleteComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_Template, 2, 6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteComponent_li_15_div_2_Template, 2, 6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_Template_div_click_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);
      const idx_r30 = restoredCtx.index;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r43.removeHistoryItem(idx_r30, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isTypeString(item_r29));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.isTypeString(item_r29));
  }
}

function AutocompleteComponent_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function AutocompleteComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_div_16_ng_container_1_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.notFoundTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r9.notFoundText));
  }
}

function AutocompleteComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r46.handleOverlay();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c4 = function (a0) {
  return {
    "active": a0
  };
};

const _c5 = function (a0, a1) {
  return {
    "is-hidden": a0,
    "is-visible": a1
  };
};

class HighlightPipe {
  transform(text, search, searchKeyword) {
    let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    pattern = pattern.split(' ').filter(t => {
      return t.length > 0;
    }).join('|');
    const regex = new RegExp(pattern, 'gi');

    if (!search) {
      return text;
    }

    if (searchKeyword) {
      const name = text[searchKeyword].replace(regex, match => `<b>${match}</b>`); // copy original object

      const textCopied = { ...text
      }; // set bold value into searchKeyword of copied object

      textCopied[searchKeyword] = name;
      return textCopied;
    } else {
      return search ? text.replace(regex, match => `<b>${match}</b>`) : text;
    }
  }

}

HighlightPipe.ɵfac = function HighlightPipe_Factory(t) {
  return new (t || HighlightPipe)();
};

HighlightPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "highlight",
  type: HighlightPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'highlight'
    }]
  }], null, null);
})();
/**
 * Keyboard events
 */


const isArrowUp = keyCode => keyCode === 38;

const isArrowDown = keyCode => keyCode === 40;

const isArrowUpDown = keyCode => isArrowUp(keyCode) || isArrowDown(keyCode);

const isEnter = keyCode => keyCode === 13;

const isBackspace = keyCode => keyCode === 8;

const isDelete = keyCode => keyCode === 46;

const isESC = keyCode => keyCode === 27;

const isTab = keyCode => keyCode === 9;

class AutocompleteComponent {
  constructor(elementRef, renderer) {
    this.renderer = renderer;
    this.query = ''; // search query

    this.filteredList = []; // list of items

    this.historyList = []; // list of history items

    this.isHistoryListVisible = true;
    this.selectedIdx = -1;
    this.toHighlight = '';
    this.notFound = false;
    this.isFocused = false;
    this.isOpen = false;
    this.isScrollToEnd = false;
    this.overlay = false;
    this.manualOpen = undefined;
    this.manualClose = undefined; // @Inputs

    /**
     * Data of items list.
     * It can be array of strings or array of objects.
     */

    this.data = [];
    this.placeholder = '';
    this.heading = '';
    /**
     * Heading text of history list.
     * If it is null then history heading is hidden.
     */

    this.historyHeading = 'Recently selected';
    this.historyListMaxNumber = 15; // maximum number of items in the history list.

    this.notFoundText = 'Not found'; // set custom text when filter returns empty result

    /**
     * The minimum number of characters the user must type before a search is performed.
     */

    this.minQueryLength = 1;
    /**
     * Focus first item in the list
     */

    this.focusFirst = false; // @Output events

    /** Event that is emitted whenever an item from the list is selected. */

    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted whenever an input is changed. */

    this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted whenever an input is focused. */

    this.inputFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted whenever an input is cleared. */

    this.inputCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted when the autocomplete panel is opened. */

    this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted when the autocomplete panel is closed. */

    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted when scrolled to the end of items. */

    this.scrolledToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Propagates new value when model changes
     */

    this.propagateChange = () => {};

    this.onTouched = () => {};

    this.elementRef = elementRef;
  }
  /**
   * Writes a new value from the form model into the view,
   * Updates model
   */


  writeValue(value = '') {
    this.query = this.selectedValueRender !== undefined ? this.selectedValueRender(value) : this.defaultWriteValue(value);
  }

  defaultWriteValue(value) {
    return value && !this.isTypeString(value) ? value[this.searchKeyword] : value;
  }
  /**
   * Registers a handler that is called when something in the view has changed
   */


  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  /**
   * Registers a handler specifically for when a control receives a touch event
   */


  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Event that is called when the value of an input element is changed
   */


  onChange(event) {
    this.propagateChange(event.target.value);
  }
  /**
   * Event that is called when the control status changes to or from DISABLED
   */


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.initEventStream();
    this.handleScroll();
  }
  /**
   * Set initial value
   * @param value
   */


  setInitialValue(value) {
    if (this.initialValue) {
      this.select(value);
    }
  }
  /**
   * Update search results
   */


  ngOnChanges(changes) {
    this.setInitialValue(this.initialValue);

    if (changes && changes.data && Array.isArray(changes.data.currentValue)) {
      this.handleItemsChange();

      if (!changes.data.firstChange && this.isFocused) {
        this.handleOpen();
      }
    }
  }
  /**
   * Items change
   */


  handleItemsChange() {
    this.isScrollToEnd = false;

    if (!this.isOpen) {
      return;
    }

    this.filteredList = this.data;
    this.notFound = !this.filteredList || this.filteredList.length === 0; // Filter list when updating data and panel is open

    if (this.isOpen) {
      this.filterList();
    }
  }
  /**
   * Filter data
   */


  filterList() {
    this.selectedIdx = -1;
    this.initSearchHistory();

    if (this.query != null && this.data) {
      this.toHighlight = this.query;
      this.filteredList = this.customFilter !== undefined ? this.customFilter([...this.data], this.query) : this.defaultFilterFunction(); // If [focusFirst]="true" automatically focus the first match

      if (this.filteredList.length > 0 && this.focusFirst) {
        this.selectedIdx = 0;
      }
    } else {
      this.notFound = false;
    }
  }
  /**
   * Default filter function, used unless customFilter is provided
   */


  defaultFilterFunction() {
    return this.data.filter(item => {
      if (typeof item === 'string') {
        // string logic, check equality of strings
        return item.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      } else if (typeof item === 'object' && item instanceof Object) {
        // object logic, check property equality
        return item[this.searchKeyword] ? item[this.searchKeyword].toLowerCase().indexOf(this.query.toLowerCase()) > -1 : "";
      }
    });
  }
  /**
   * Check if item is a string in the list.
   * @param item
   */


  isTypeString(item) {
    return typeof item === 'string';
  }
  /**
   * Select item in the list.
   * @param item
   */


  select(item) {
    this.query = !this.isTypeString(item) ? item[this.searchKeyword] : item;
    this.isOpen = true;
    this.overlay = false;
    this.selected.emit(item);
    this.propagateChange(item);

    if (this.initialValue) {
      // check if history already exists in localStorage and then update
      const history = window.localStorage.getItem(`${this.historyIdentifier}`);

      if (history) {
        let existingHistory = JSON.parse(localStorage[`${this.historyIdentifier}`]);
        if (!(existingHistory instanceof Array)) existingHistory = []; // check if selected item exists in existingHistory

        if (!existingHistory.some(existingItem => !this.isTypeString(existingItem) ? existingItem[this.searchKeyword] == item[this.searchKeyword] : existingItem == item)) {
          existingHistory.unshift(item);
          localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(existingHistory)); // check if items don't exceed max allowed number

          if (existingHistory.length >= this.historyListMaxNumber) {
            existingHistory.splice(existingHistory.length - 1, 1);
            localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(existingHistory));
          }
        } else {
          // if selected item exists in existingHistory swap to top in array
          if (!this.isTypeString(item)) {
            // object logic
            const copiedExistingHistory = existingHistory.slice(); // copy original existingHistory array

            const selectedIndex = copiedExistingHistory.map(el => el[this.searchKeyword]).indexOf(item[this.searchKeyword]);
            copiedExistingHistory.splice(selectedIndex, 1);
            copiedExistingHistory.splice(0, 0, item);
            localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(copiedExistingHistory));
          } else {
            // string logic
            const copiedExistingHistory = existingHistory.slice(); // copy original existingHistory array

            copiedExistingHistory.splice(copiedExistingHistory.indexOf(item), 1);
            copiedExistingHistory.splice(0, 0, item);
            localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(copiedExistingHistory));
          }
        }
      } else {
        this.saveHistory(item);
      }
    } else {
      this.saveHistory(item);
    }

    this.handleClose();
  }
  /**
   * Document click
   * @param e event
   */


  handleClick(e) {
    let clickedComponent = e.target;
    let inside = false;

    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;

        if (this.filteredList.length) {
          this.handleOpen();
        }
      }

      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);

    if (!inside) {
      this.handleClose();
    }
  }
  /**
   * Handle body overlay
   */


  handleOverlay() {
    this.overlay = false;
  }
  /**
   * Scroll items
   */


  handleScroll() {
    this.renderer.listen(this.filteredListElement.nativeElement, 'scroll', () => {
      this.scrollToEnd();
    });
  }
  /**
   * Define panel state
   */


  setPanelState(event) {
    if (event) {
      event.stopPropagation();
    } // If controls are untouched


    if (typeof this.manualOpen === 'undefined' && typeof this.manualClose === 'undefined') {
      this.isOpen = false;
      this.handleOpen();
    } // If one of the controls is untouched and other is deactivated


    if (typeof this.manualOpen === 'undefined' && this.manualClose === false || typeof this.manualClose === 'undefined' && this.manualOpen === false) {
      this.isOpen = false;
      this.handleOpen();
    } // if controls are touched but both are deactivated


    if (this.manualOpen === false && this.manualClose === false) {
      this.isOpen = false;
      this.handleOpen();
    } // if open control is touched and activated


    if (this.manualOpen) {
      this.isOpen = false;
      this.handleOpen();
      this.manualOpen = false;
    } // if close control is touched and activated


    if (this.manualClose) {
      this.isOpen = true;
      this.handleClose();
      this.manualClose = false;
    }
  }
  /**
   * Manual controls
   */


  open() {
    this.manualOpen = true;
    this.isOpen = false;
    this.handleOpen();
  }

  close() {
    this.manualClose = true;
    this.isOpen = true;
    this.handleClose();
  }

  focus() {
    this.handleFocus(event);
  }

  clear() {
    this.remove(event);
  }
  /**
   * Remove search query
   */


  remove(e) {
    e.stopPropagation();
    this.query = '';
    this.inputCleared.emit();
    this.propagateChange(this.query);
    this.setPanelState(e);

    if (this.data && !this.data.length) {
      this.notFound = false;
    }
  }
  /**
   * Initialize historyList search
   */


  initSearchHistory() {
    this.isHistoryListVisible = false;

    if (this.historyIdentifier && !this.query) {
      const history = window.localStorage.getItem(`${this.historyIdentifier}`);

      if (history) {
        this.isHistoryListVisible = true;
        this.filteredList = [];
        this.historyList = history ? JSON.parse(history) : [];
      } else {
        this.isHistoryListVisible = false;
      }
    } else {
      this.isHistoryListVisible = false;
    }
  }

  handleOpen() {
    if (this.isOpen || this.isOpen && !this.isLoading) {
      return;
    } // If data exists


    if (this.data && this.data.length) {
      this.isOpen = true;
      this.overlay = true;
      this.filterList();
      this.opened.emit();
    }
  }

  handleClose() {
    if (!this.isOpen) {
      this.isFocused = false;
      return;
    }

    this.isOpen = false;
    this.overlay = false;
    this.filteredList = [];
    this.selectedIdx = -1;
    this.notFound = false;
    this.isHistoryListVisible = false;
    this.isFocused = false;
    this.closed.emit();
  }

  handleFocus(e) {
    this.searchInput.nativeElement.focus();

    if (this.isFocused) {
      return;
    }

    this.inputFocused.emit(e); // if data exists then open

    if (this.data && this.data.length) {
      this.setPanelState(e);
    }

    this.isFocused = true;
  }

  scrollToEnd() {
    if (this.isScrollToEnd) {
      return;
    }

    const scrollTop = this.filteredListElement.nativeElement.scrollTop;
    const scrollHeight = this.filteredListElement.nativeElement.scrollHeight;
    const elementHeight = this.filteredListElement.nativeElement.clientHeight;
    const atBottom = elementHeight != 0 && Math.abs(scrollHeight - elementHeight - scrollTop) < 1;

    if (atBottom) {
      this.scrolledToEnd.emit();
      this.isScrollToEnd = true;
    }
  }
  /**
   * Initialize keyboard events
   */


  initEventStream() {
    this.inputKeyUp$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.searchInput.nativeElement, 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(e => e));
    this.inputKeyDown$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.searchInput.nativeElement, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(e => e));
    this.listenEventStream();
  }
  /**
   * Listen keyboard events
   */


  listenEventStream() {
    // key up event
    this.inputKeyUp$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => !isArrowUpDown(e.keyCode) && !isEnter(e.keyCode) && !isESC(e.keyCode) && !isTab(e.keyCode)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(this.debounceTime)).subscribe(e => {
      this.onKeyUp(e);
    }); // cursor up & down

    this.inputKeyDown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => isArrowUpDown(e.keyCode))).subscribe(e => {
      e.preventDefault();
      this.onFocusItem(e);
    }); // enter keyup

    this.inputKeyUp$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => isEnter(e.keyCode))).subscribe(e => {//this.onHandleEnter();
    }); // enter keydown

    this.inputKeyDown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => isEnter(e.keyCode))).subscribe(e => {
      this.onHandleEnter();
    }); // ESC

    this.inputKeyUp$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => isESC(e.keyCode), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(100))).subscribe(e => {
      this.onEsc();
    }); // TAB

    this.inputKeyDown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => isTab(e.keyCode))).subscribe(e => {
      this.onTab();
    }); // delete

    this.inputKeyDown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => isBackspace(e.keyCode) || isDelete(e.keyCode))).subscribe(e => {
      this.onDelete();
    });
  }
  /**
   * on keyup == when input changed
   * @param e event
   */


  onKeyUp(e) {
    this.notFound = false; // search results are unknown while typing
    // if input is empty

    if (!this.query) {
      this.notFound = false;
      this.inputChanged.emit(e.target.value);
      this.inputCleared.emit();
      this.setPanelState(e);
    } // note that '' can be a valid query


    if (!this.query && this.query !== '') {
      return;
    } // if query >= to minQueryLength


    if (this.query.length >= this.minQueryLength) {
      this.inputChanged.emit(e.target.value);
      this.filterList(); // If no results found

      if (!this.filteredList.length && !this.isLoading) {
        this.notFoundText ? this.notFound = true : this.notFound = false;
      }

      if (this.data && !this.data.length) {
        this.isOpen = true;
      }
    }
  }
  /**
   * Keyboard arrow top and arrow bottom
   * @param e event
   */


  onFocusItem(e) {
    // move arrow up and down on filteredList or historyList
    if (!this.historyList.length || !this.isHistoryListVisible) {
      // filteredList
      const totalNumItem = this.filteredList.length;

      if (e.key === 'ArrowDown') {
        let sum = this.selectedIdx;
        sum = this.selectedIdx === null ? 0 : sum + 1;
        this.selectedIdx = (totalNumItem + sum) % totalNumItem;
        this.scrollToFocusedItem(this.selectedIdx);
      } else if (e.key === 'ArrowUp') {
        if (this.selectedIdx == -1) {
          this.selectedIdx = 0;
        }

        this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
        this.scrollToFocusedItem(this.selectedIdx);
      }
    } else {
      // historyList
      const totalNumItem = this.historyList.length;

      if (e.key === 'ArrowDown') {
        let sum = this.selectedIdx;
        sum = this.selectedIdx === null ? 0 : sum + 1;
        this.selectedIdx = (totalNumItem + sum) % totalNumItem;
        this.scrollToFocusedItem(this.selectedIdx);
      } else if (e.key === 'ArrowUp') {
        if (this.selectedIdx == -1) {
          this.selectedIdx = 0;
        }

        this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
        this.scrollToFocusedItem(this.selectedIdx);
      }
    }
  }
  /**
   * Scroll to focused item
   * * @param index
   */


  scrollToFocusedItem(index) {
    let listElement = null; // Define list element

    if (!this.historyList.length || !this.isHistoryListVisible) {
      // filteredList element
      listElement = this.filteredListElement.nativeElement;
    } else {
      // historyList element
      listElement = this.historyListElement.nativeElement;
    }

    const items = Array.prototype.slice.call(listElement.childNodes).filter(node => {
      if (node.nodeType === 1) {
        // if node is element
        return node.className.includes('item');
      } else {
        return false;
      }
    });

    if (!items.length) {
      return;
    }

    const listHeight = listElement.offsetHeight;
    const itemHeight = items[index].offsetHeight;
    const visibleTop = listElement.scrollTop;
    const visibleBottom = listElement.scrollTop + listHeight - itemHeight;
    const targetPosition = items[index].offsetTop;

    if (targetPosition < visibleTop) {
      listElement.scrollTop = targetPosition;
    }

    if (targetPosition > visibleBottom) {
      listElement.scrollTop = targetPosition - listHeight + itemHeight;
    }
  }
  /**
   * Select item on enter click
   */


  onHandleEnter() {
    // click enter to choose item from filteredList or historyList
    if (this.selectedIdx > -1) {
      if (!this.historyList.length || !this.isHistoryListVisible) {
        // filteredList
        this.query = !this.isTypeString(this.filteredList[this.selectedIdx]) ? this.filteredList[this.selectedIdx][this.searchKeyword] : this.filteredList[this.selectedIdx];
        this.saveHistory(this.filteredList[this.selectedIdx]);
        this.select(this.filteredList[this.selectedIdx]);
      } else {
        // historyList
        this.query = !this.isTypeString(this.historyList[this.selectedIdx]) ? this.historyList[this.selectedIdx][this.searchKeyword] : this.historyList[this.selectedIdx];
        this.saveHistory(this.historyList[this.selectedIdx]);
        this.select(this.historyList[this.selectedIdx]);
      }
    }

    this.isHistoryListVisible = false;
    this.handleClose();
  }
  /**
   * Esc click
   */


  onEsc() {
    this.searchInput.nativeElement.blur();
    this.handleClose();
  }
  /**
   * Tab click
   */


  onTab() {
    this.searchInput.nativeElement.blur();
    this.handleClose();
  }
  /**
   * Delete click
   */


  onDelete() {
    this.isOpen = true;
  }
  /**
   * Select item to save in localStorage
   * @param selected
   */


  saveHistory(selected) {
    if (this.historyIdentifier) {
      // check if selected item exists in historyList
      if (!this.historyList.some(item => !this.isTypeString(item) ? item[this.searchKeyword] == selected[this.searchKeyword] : item == selected)) {
        this.saveHistoryToLocalStorage([selected, ...this.historyList]); // check if items don't exceed max allowed number

        if (this.historyList.length >= this.historyListMaxNumber) {
          this.historyList.splice(this.historyList.length - 1, 1);
          this.saveHistoryToLocalStorage([selected, ...this.historyList]);
        }
      } else {
        // if selected item exists in historyList swap to top in array
        if (!this.isTypeString(selected)) {
          // object logic
          const copiedHistoryList = this.historyList.slice(); // copy original historyList array

          const selectedIndex = copiedHistoryList.map(item => item[this.searchKeyword]).indexOf(selected[this.searchKeyword]);
          copiedHistoryList.splice(selectedIndex, 1);
          copiedHistoryList.splice(0, 0, selected);
          this.saveHistoryToLocalStorage([...copiedHistoryList]);
        } else {
          // string logic
          const copiedHistoryList = this.historyList.slice(); // copy original historyList array

          copiedHistoryList.splice(this.historyList.indexOf(selected), 1);
          copiedHistoryList.splice(0, 0, selected);
          this.saveHistoryToLocalStorage([...copiedHistoryList]);
        }
      }
    }
  }
  /**
   * Save item in localStorage
   * @param selected
   */


  saveHistoryToLocalStorage(selected) {
    window.localStorage.setItem(`${this.historyIdentifier}`, JSON.stringify(selected));
  }
  /**
   * Remove item from localStorage
   * @param index
   * @param e event
   */


  removeHistoryItem(index, e) {
    e.stopPropagation();
    this.historyList = this.historyList.filter((v, i) => i !== index);
    this.saveHistoryToLocalStorage(this.historyList);

    if (this.historyList.length == 0) {
      window.localStorage.removeItem(`${this.historyIdentifier}`);
      this.filterList();
    }
  }
  /**
   * Reset localStorage
   * @param e event
   */


  resetHistoryList(e) {
    e.stopPropagation();
    this.historyList = [];
    window.localStorage.removeItem(`${this.historyIdentifier}`);
    this.filterList();
  }

}

AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) {
  return new (t || AutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};

AutocompleteComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AutocompleteComponent,
  selectors: [["ng-autocomplete"]],
  contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTemplate = _t.first);
    }
  },
  viewQuery: function AutocompleteComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filteredListElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.historyListElement = _t.first);
    }
  },
  hostAttrs: [1, "ng-autocomplete"],
  hostBindings: function AutocompleteComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    data: "data",
    searchKeyword: "searchKeyword",
    placeholder: "placeholder",
    heading: "heading",
    initialValue: "initialValue",
    historyIdentifier: "historyIdentifier",
    historyHeading: "historyHeading",
    historyListMaxNumber: "historyListMaxNumber",
    notFoundText: "notFoundText",
    isLoading: "isLoading",
    debounceTime: "debounceTime",
    disabled: "disabled",
    minQueryLength: "minQueryLength",
    focusFirst: "focusFirst",
    customFilter: "customFilter",
    selectedValueRender: "selectedValueRender",
    itemTemplate: "itemTemplate",
    notFoundTemplate: "notFoundTemplate"
  },
  outputs: {
    selected: "selected",
    inputChanged: "inputChanged",
    inputFocused: "inputFocused",
    inputCleared: "inputCleared",
    opened: "opened",
    closed: "closed",
    scrolledToEnd: "scrolledToEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AutocompleteComponent),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 18,
  vars: 24,
  consts: [["aria-owns", "suggestions suggestions-history", 1, "autocomplete-container", 3, "ngClass"], [1, "input-container"], ["type", "text", "aria-autocomplete", "list", "role", "combobox", "autocomplete", "off", 3, "placeholder", "ngModel", "disabled", "ngModelChange", "input", "focus", "blur"], ["searchInput", ""], ["class", "x", 3, "click", 4, "ngIf"], ["class", "sk-fading-circle", 4, "ngIf"], ["id", "suggestions", "role", "listbox", 1, "suggestions-container", 3, "ngClass"], ["class", "heading", 4, "ngIf"], ["filteredListElement", ""], ["class", "item", 4, "ngFor", "ngForOf"], ["id", "suggestions-history", "role", "listbox", 1, "suggestions-container", 3, "ngClass"], ["historyListElement", ""], ["class", "not-found", 4, "ngIf"], ["class", "autocomplete-overlay", 3, "click", 4, "ngIf"], [1, "x", 3, "click"], ["aria-label", "Close", 1, "material-icons"], [1, "sk-fading-circle"], [1, "sk-circle1", "sk-circle"], [1, "sk-circle2", "sk-circle"], [1, "sk-circle3", "sk-circle"], [1, "sk-circle4", "sk-circle"], [1, "sk-circle5", "sk-circle"], [1, "sk-circle6", "sk-circle"], [1, "sk-circle7", "sk-circle"], [1, "sk-circle8", "sk-circle"], [1, "sk-circle9", "sk-circle"], [1, "sk-circle10", "sk-circle"], [1, "sk-circle11", "sk-circle"], [1, "sk-circle12", "sk-circle"], [1, "heading"], [1, "text"], [1, "item"], [3, "complete-selected", "click", 4, "ngIf"], [3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-label", "Delete", 1, "material-icons"], [1, "not-found"], [1, "autocomplete-overlay", 3, "click"]],
  template: function AutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutocompleteComponent_Template_input_ngModelChange_2_listener($event) {
        return ctx.query = $event;
      })("input", function AutocompleteComponent_Template_input_input_2_listener($event) {
        return ctx.onChange($event);
      })("focus", function AutocompleteComponent_Template_input_focus_2_listener($event) {
        return ctx.handleFocus($event);
      })("blur", function AutocompleteComponent_Template_input_blur_2_listener($event) {
        return ctx.onTouched($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutocompleteComponent_div_4_Template, 3, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutocompleteComponent_div_5_Template, 13, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AutocompleteComponent_div_7_Template, 3, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", null, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AutocompleteComponent_li_10_Template, 3, 2, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AutocompleteComponent_div_12_Template, 6, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", null, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AutocompleteComponent_li_15_Template, 6, 2, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AutocompleteComponent_div_16_Template, 2, 4, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AutocompleteComponent_div_17_Template, 1, 0, "div", 13);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c4, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.placeholder);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.query && !ctx.isLoading && !ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c5, ctx.isHistoryListVisible, !ctx.isHistoryListVisible));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredList.length > 0 && ctx.heading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredList);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c5, !ctx.isHistoryListVisible, ctx.isHistoryListVisible));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.historyList.length > 0 && ctx.historyHeading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historyList);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading ? !ctx.isLoading && ctx.notFound : ctx.notFound);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overlay);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet],
  pipes: [HighlightPipe],
  styles: ["@import\"https://fonts.googleapis.com/icon?family=Material+Icons\";.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f;position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:none;background-color:#fff;color:#000000de;width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:#0000008a;font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:white;height:auto;box-shadow:0 2px 5px #00000040;box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;color:#333;cursor:pointer;color:#000000de;font-size:15px}.autocomplete-container .suggestions-container ul li:hover,.autocomplete-container .suggestions-container .complete-selected{background-color:#9e9e9e2e}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:solid 1px #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:#0000008a;font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:solid 1px #f1f1f1;background:white}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}.sk-fading-circle .sk-circle2{transform:rotate(30deg)}.sk-fading-circle .sk-circle3{transform:rotate(60deg)}.sk-fading-circle .sk-circle4{transform:rotate(90deg)}.sk-fading-circle .sk-circle5{transform:rotate(120deg)}.sk-fading-circle .sk-circle6{transform:rotate(150deg)}.sk-fading-circle .sk-circle7{transform:rotate(180deg)}.sk-fading-circle .sk-circle8{transform:rotate(210deg)}.sk-fading-circle .sk-circle9{transform:rotate(240deg)}.sk-fading-circle .sk-circle10{transform:rotate(270deg)}.sk-fading-circle .sk-circle11{transform:rotate(300deg)}.sk-fading-circle .sk-circle12{transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{animation-delay:-1s}.sk-fading-circle .sk-circle4:before{animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{animation-delay:-.1s}@keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ng-autocomplete',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AutocompleteComponent),
        multi: true
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        '(document:click)': 'handleClick($event)',
        'class': 'ng-autocomplete'
      },
      template: "<div class=\"autocomplete-container\" aria-owns=\"suggestions suggestions-history\" [attr.aria-expanded]=\"isOpen\"\n     [ngClass]=\"{ 'active': isOpen}\">\n  <div class=\"input-container\">\n    <input #searchInput\n           type=\"text\"\n           attr.aria-label=\"{{placeholder}}\"\n           aria-autocomplete=\"list\"\n           role=\"combobox\"\n           placeholder={{placeholder}}\n           [(ngModel)]=query\n           (input)=\"onChange($event)\"\n           (focus)=handleFocus($event)\n           (blur)=onTouched($event)\n           [disabled]=\"disabled\"\n           autocomplete=\"off\">\n    <div class=\"x\" *ngIf=\"query && !isLoading && !disabled\" (click)=\"remove($event)\">\n      <i class=\"material-icons\" aria-label=\"Close\">close</i>\n    </div>\n    <!--Loading mask-->\n    <div class=\"sk-fading-circle\" *ngIf=\"isLoading\">\n      <div class=\"sk-circle1 sk-circle\"></div>\n      <div class=\"sk-circle2 sk-circle\"></div>\n      <div class=\"sk-circle3 sk-circle\"></div>\n      <div class=\"sk-circle4 sk-circle\"></div>\n      <div class=\"sk-circle5 sk-circle\"></div>\n      <div class=\"sk-circle6 sk-circle\"></div>\n      <div class=\"sk-circle7 sk-circle\"></div>\n      <div class=\"sk-circle8 sk-circle\"></div>\n      <div class=\"sk-circle9 sk-circle\"></div>\n      <div class=\"sk-circle10 sk-circle\"></div>\n      <div class=\"sk-circle11 sk-circle\"></div>\n      <div class=\"sk-circle12 sk-circle\"></div>\n    </div>\n  </div>\n\n  <!--FilteredList items-->\n  <div class=\"suggestions-container\" id=\"suggestions\" role=\"listbox\"\n       [ngClass]=\"{ 'is-hidden': isHistoryListVisible, 'is-visible': !isHistoryListVisible}\">\n    <!--FilteredList heading-->\n    <div class=\"heading\" *ngIf=\"filteredList.length > 0 && heading\">\n      <div class=\"text\">{{heading}}</div>\n    </div>\n\n    <ul #filteredListElement>\n      <li *ngFor=\"let item of filteredList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item | highlight: toHighlight }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item | highlight: toHighlight : searchKeyword }\">\n          </ng-container>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--HistoryList items-->\n  <div class=\"suggestions-container\" id=\"suggestions-history\" role=\"listbox\"\n       [ngClass]=\"{ 'is-hidden': !isHistoryListVisible, 'is-visible': isHistoryListVisible}\">\n    <!--HistoryList heading-->\n    <div class=\"heading\" *ngIf=\"historyList.length > 0 && historyHeading\">\n      <div class=\"text\">{{historyHeading}}</div>\n      <div class=\"x\" (click)=\"resetHistoryList($event)\">\n        <i class=\"material-icons\" aria-label=\"Delete\">delete</i>\n      </div>\n    </div>\n\n    <ul #historyListElement>\n      <li *ngFor=\"let item of historyList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <div class=\"x\" (click)=\"removeHistoryItem(idx, $event)\">\n          <i class=\"material-icons\" aria-label=\"Close\">close</i>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--Not found-->\n  <div class=\"not-found\" *ngIf=\"isLoading ? !isLoading && notFound : notFound\">\n    <ng-container\n      *ngTemplateOutlet=\"notFoundTemplate;  context: { $implicit: notFoundText  }\">\n    </ng-container>\n  </div>\n</div>\n<div class=\"autocomplete-overlay\" *ngIf=\"overlay\" (click)=\"handleOverlay()\"></div>\n",
      styles: ["@import\"https://fonts.googleapis.com/icon?family=Material+Icons\";.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f;position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:none;background-color:#fff;color:#000000de;width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:#0000008a;font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:white;height:auto;box-shadow:0 2px 5px #00000040;box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;color:#333;cursor:pointer;color:#000000de;font-size:15px}.autocomplete-container .suggestions-container ul li:hover,.autocomplete-container .suggestions-container .complete-selected{background-color:#9e9e9e2e}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:solid 1px #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:#0000008a;font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:solid 1px #f1f1f1;background:white}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}.sk-fading-circle .sk-circle2{transform:rotate(30deg)}.sk-fading-circle .sk-circle3{transform:rotate(60deg)}.sk-fading-circle .sk-circle4{transform:rotate(90deg)}.sk-fading-circle .sk-circle5{transform:rotate(120deg)}.sk-fading-circle .sk-circle6{transform:rotate(150deg)}.sk-fading-circle .sk-circle7{transform:rotate(180deg)}.sk-fading-circle .sk-circle8{transform:rotate(210deg)}.sk-fading-circle .sk-circle9{transform:rotate(240deg)}.sk-fading-circle .sk-circle10{transform:rotate(270deg)}.sk-fading-circle .sk-circle11{transform:rotate(300deg)}.sk-fading-circle .sk-circle12{transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{animation-delay:-1s}.sk-fading-circle .sk-circle4:before{animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{animation-delay:-.1s}@keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    searchInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['searchInput']
    }],
    filteredListElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['filteredListElement']
    }],
    historyListElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['historyListElement']
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    searchKeyword: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    heading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    initialValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    historyIdentifier: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    historyHeading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    historyListMaxNumber: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    notFoundText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    debounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minQueryLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    focusFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedValueRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    inputChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    inputFocused: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    inputCleared: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scrolledToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    notFoundTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
    }]
  });
})();

class AutocompleteLibModule {}

AutocompleteLibModule.ɵfac = function AutocompleteLibModule_Factory(t) {
  return new (t || AutocompleteLibModule)();
};

AutocompleteLibModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AutocompleteLibModule
});
AutocompleteLibModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteLibModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
      declarations: [AutocompleteComponent, HighlightPipe],
      exports: [AutocompleteComponent, HighlightPipe]
    }]
  }], null, null);
})();
/*
 * Public API Surface of autocomplete-lib
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_pages_sale_sale_module_ts.js.map