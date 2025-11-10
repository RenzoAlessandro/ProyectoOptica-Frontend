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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortable.directive */ 20477);
/* harmony import */ var src_models_venta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/venta */ 97072);
/* harmony import */ var src_models_tipo_venta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/tipo_venta */ 80810);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 62962);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 85395);
/* harmony import */ var src_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/utils/functions */ 4680);
/* harmony import */ var src_models_sedes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/sedes */ 16550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/cliente.service */ 95686);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/venta.service */ 91173);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-ng-autocomplete */ 84933);
/* harmony import */ var _directives_role_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../directives/role.directive */ 48185);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng5-slider */ 38391);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-search-filter */ 24352);


























const _c0 = ["autocomplete"];
function AddSaleComponent_ng_template_12_ng_template_0_Template(rf, ctx) { }
function AddSaleComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, AddSaleComponent_ng_template_12_ng_template_0_Template, 0, 0, "ng-template", 47);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngTemplateOutlet", _r4);
} }
function AddSaleComponent_ng_template_18_ng_template_0_Template(rf, ctx) { }
function AddSaleComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, AddSaleComponent_ng_template_18_ng_template_0_Template, 0, 0, "ng-template", 47);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngTemplateOutlet", _r6);
} }
function AddSaleComponent_ng_template_24_ng_template_0_Template(rf, ctx) { }
function AddSaleComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, AddSaleComponent_ng_template_24_ng_template_0_Template, 0, 0, "ng-template", 47);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function AddSaleComponent_ng_template_26_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_26_tr_31_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r30); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](13); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r29.copyText(_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "td", null, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r27.codigo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r27.material, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r27.marca, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r27.color, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r27.id_producto, " ");
} }
function AddSaleComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "form", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "ng-select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function AddSaleComponent_ng_template_26_Template_ng_select_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r31.changeSede(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function AddSaleComponent_ng_template_26_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r33.searchtext = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "table", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "thead", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19, "Copiar");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, "Cod. Int.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25, "Marca");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](27, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](29, "C\u00F3d. id.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](31, AddSaleComponent_ng_template_26_tr_31_Template, 15, 5, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](32, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](33, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](37, "ngb-pagination", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("pageChange", function AddSaleComponent_ng_template_26_Template_ngb_pagination_pageChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r34.currentPage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r5.formSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.nombre_sedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("items", ctx_r5.listSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r5.searchtext);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind3"](32, 9, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](33, 13, ctx_r5.listMonturasforSale, ctx_r5.searchtext), (ctx_r5.currentPage - 1) * ctx_r5.pageSize, ctx_r5.currentPage * ctx_r5.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("collectionSize", (ctx_r5.listMonturasforSale == null ? null : ctx_r5.listMonturasforSale.length) || 0)("page", ctx_r5.currentPage)("pageSize", ctx_r5.pageSize)("maxSize", 3);
} }
function AddSaleComponent_ng_template_28_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_28_tr_25_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r39); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](7); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r38.copyText(_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "td", null, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLuna_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", itemLuna_r36.material, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", itemLuna_r36.id_producto, " ");
} }
function AddSaleComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "form", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "ng-select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function AddSaleComponent_ng_template_28_Template_ng_select_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r40.changeSede(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function AddSaleComponent_ng_template_28_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r42.searchtext = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "table", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "thead", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19, "Copiar");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23, "C\u00F3d. id.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](25, AddSaleComponent_ng_template_28_tr_25_Template, 9, 2, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](26, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](27, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "ngb-pagination", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("pageChange", function AddSaleComponent_ng_template_28_Template_ngb_pagination_pageChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r43.currentPage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r7.formSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r7.nombre_sedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("items", ctx_r7.listSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r7.searchtext);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind3"](26, 9, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](27, 13, ctx_r7.listLunasforSale, ctx_r7.searchtext), (ctx_r7.currentPage - 1) * ctx_r7.pageSize, ctx_r7.currentPage * ctx_r7.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("collectionSize", (ctx_r7.listLunasforSale == null ? null : ctx_r7.listLunasforSale.length) || 0)("page", ctx_r7.currentPage)("pageSize", ctx_r7.pageSize)("maxSize", 3);
} }
function AddSaleComponent_ng_template_30_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_30_tr_25_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r48); const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](7); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r47.copyText(_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "td", null, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemAccesorio_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", itemAccesorio_r45.nombre_accesorio, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", itemAccesorio_r45.id_producto, " ");
} }
function AddSaleComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "form", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "ng-select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function AddSaleComponent_ng_template_30_Template_ng_select_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r49.changeSede(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function AddSaleComponent_ng_template_30_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r51.searchtext = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "table", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "thead", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19, "Copiar");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23, "C\u00F3d. id.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](25, AddSaleComponent_ng_template_30_tr_25_Template, 9, 2, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](26, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](27, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "ngb-pagination", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("pageChange", function AddSaleComponent_ng_template_30_Template_ngb_pagination_pageChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r50); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r52.currentPage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r9.formSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r9.nombre_sedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("items", ctx_r9.listSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r9.searchtext);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind3"](26, 9, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](27, 13, ctx_r9.listAccesoriosforSale, ctx_r9.searchtext), (ctx_r9.currentPage - 1) * ctx_r9.pageSize, ctx_r9.currentPage * ctx_r9.pageSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("collectionSize", (ctx_r9.listAccesoriosforSale == null ? null : ctx_r9.listAccesoriosforSale.length) || 0)("page", ctx_r9.currentPage)("pageSize", ctx_r9.pageSize)("maxSize", 3);
} }
function AddSaleComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "a", 67);
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("innerHTML", item_r53.id_producto, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "div", 67);
} if (rf & 2) {
    const notFound_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("innerHTML", notFound_r54, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "form", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "ng-select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function AddSaleComponent_div_50_Template_ng_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r55.changeSede(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r15.formSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r15.nombre_sedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("items", ctx_r15.listSedes);
} }
function AddSaleComponent_tr_79_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "ngb-highlight", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "ngb-highlight", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("result", item_r57.material);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("result", item_r57.marca);
} }
function AddSaleComponent_tr_79_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "ngb-highlight", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("result", item_r57.material);
} }
function AddSaleComponent_tr_79_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "ngb-highlight", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("result", item_r57.nombre_accesorio);
} }
function AddSaleComponent_tr_79_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "ngb-highlight", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](2, 1, item_r57.precio_montura_v, "S/ "));
} }
function AddSaleComponent_tr_79_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "ngb-highlight", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](2, 1, item_r57.precio_luna_v, "S/ "));
} }
function AddSaleComponent_tr_79_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "ngb-highlight", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](2, 1, item_r57.precio_accesorio_v, "S/ "));
} }
function AddSaleComponent_tr_79_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "ngb-highlight", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "ngb-highlight", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](5, AddSaleComponent_tr_79_td_5_Template, 4, 2, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, AddSaleComponent_tr_79_td_6_Template, 2, 1, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, AddSaleComponent_tr_79_td_7_Template, 2, 1, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "ngb-highlight", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, AddSaleComponent_tr_79_td_10_Template, 3, 4, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, AddSaleComponent_tr_79_td_11_Template, 3, 4, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, AddSaleComponent_tr_79_td_12_Template, 3, 4, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](14, "ngb-highlight", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_tr_79_Template_i_click_18_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r72); const i_r58 = restoredCtx.index; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r71.substractQuantityProduct($event, i_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function AddSaleComponent_tr_79_Template_i_ngModelChange_20_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r72); const item_r57 = restoredCtx.$implicit; return item_r57.num = $event; })("click", function AddSaleComponent_tr_79_Template_i_click_20_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r72); const i_r58 = restoredCtx.index; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r74.addQuantityProduct($event, i_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_tr_79_Template_a_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r72); const item_r57 = restoredCtx.$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](85); return ctx_r75.centerModalEditarPrecio(_r17, item_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](22, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_tr_79_Template_i_click_24_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r72); const i_r58 = restoredCtx.index; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r76.removeCartProduct($event, i_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r57 = ctx.$implicit;
    const i_r58 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("result", i_r58 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("result", item_r57.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r57.tipo == "montura");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r57.tipo == "luna");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r57.tipo == "accesorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("result", item_r57.cant_vendida);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r57.tipo == "montura");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r57.tipo == "luna");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r57.tipo == "accesorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](15, 11, item_r57.precio, "S/ "));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", item_r57.num);
} }
function AddSaleComponent_ng_template_84_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_84_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function AddSaleComponent_ng_template_84_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "h5", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "Cambio de Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_84_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r80.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "form", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9, "Precio Original");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14, "Nuevo Precio de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](17, AddSaleComponent_ng_template_84_div_17_Template, 2, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](18, AddSaleComponent_ng_template_84_div_18_Template, 2, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_84_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r81); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r82.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_84_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r81); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r83.actualizarPrecio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r18.formEditarPrecio);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r18.precioOriginal_Editar);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r18.nuevoPrecio_Editar);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](6, _c1, ctx_r18.formEP.campoNuevoPrecioEditar.invalid && (ctx_r18.formEP.campoNuevoPrecioEditar.dirty || ctx_r18.formEP.campoNuevoPrecioEditar.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r18.formEP.campoNuevoPrecioEditar.errors == null ? null : ctx_r18.formEP.campoNuevoPrecioEditar.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r18.formEP.campoNuevoPrecioEditar.errors == null ? null : ctx_r18.formEP.campoNuevoPrecioEditar.errors.pattern);
} }
function AddSaleComponent_ng_template_86_ng_template_14_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_86_ng_template_14_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Ingrese como m\u00E1ximo 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_86_ng_template_14_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, AddSaleComponent_ng_template_86_ng_template_14_div_7_div_1_Template, 2, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, AddSaleComponent_ng_template_86_ng_template_14_div_7_div_2_Template, 2, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r88.formContado.controls["campoCantidadRecibidaContado"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r88.formContado.controls["campoCantidadRecibidaContado"].errors.pattern);
} }
function AddSaleComponent_ng_template_86_ng_template_14_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_86_ng_template_14_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, AddSaleComponent_ng_template_86_ng_template_14_div_13_div_1_Template, 2, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r89.formContado.controls["campoMetodoPagoContado"].errors.required);
} }
function AddSaleComponent_ng_template_86_ng_template_14_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_86_ng_template_14_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, AddSaleComponent_ng_template_86_ng_template_14_div_19_span_1_Template, 2, 0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r90.form.title.errors.required);
} }
function AddSaleComponent_ng_template_86_ng_template_14_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "a", 67);
} if (rf & 2) {
    const item_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("innerHTML", item_r101.nombres_apellidos, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_86_ng_template_14_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "div", 67);
} if (rf & 2) {
    const notFound_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("innerHTML", notFound_r102, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_86_ng_template_14_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_86_ng_template_14_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Ingrese solo letras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_86_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "form", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngSubmit", function AddSaleComponent_ng_template_86_ng_template_14_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r103.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5, "Cantidad Recibida");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function AddSaleComponent_ng_template_86_ng_template_14_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r104); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r105.updatePago($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, AddSaleComponent_ng_template_86_ng_template_14_div_7_Template, 3, 2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "ng-select", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, AddSaleComponent_ng_template_86_ng_template_14_div_13_Template, 2, 1, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](18, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, AddSaleComponent_ng_template_86_ng_template_14_div_19_Template, 2, 1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24, "Buscar Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "ng-autocomplete", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selected", function AddSaleComponent_ng_template_86_ng_template_14_Template_ng_autocomplete_selected_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r104); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r106.selectEventCliente($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](26, AddSaleComponent_ng_template_86_ng_template_14_ng_template_26_Template, 1, 1, "ng-template", null, 115, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](28, AddSaleComponent_ng_template_86_ng_template_14_ng_template_28_Template, 1, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33, "Montos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](37, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](38, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](39, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](43, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](44, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](46, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](47, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](48, "Cambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](49, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](50, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](51, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](53, "label", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](54, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](55, "textarea", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](56, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](57, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](58, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "label", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](60, "Responsable de la Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](61, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](62, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](63, AddSaleComponent_ng_template_86_ng_template_14_div_63_Template, 2, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](64, AddSaleComponent_ng_template_86_ng_template_14_div_64_Template, 2, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](65, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](66, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_86_ng_template_14_Template_button_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r104); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r107.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](67, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](68, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_86_ng_template_14_Template_button_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r104); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r108.guardarVenta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](69, " Registrar Venta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](27);
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](29);
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r86.formContado);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r86.cantidadRecibida_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r86.formContado.controls["campoCantidadRecibidaContado"].invalid && (ctx_r86.formContado.controls["campoCantidadRecibidaContado"].dirty || ctx_r86.formContado.controls["campoCantidadRecibidaContado"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r86.metodoPagoContado);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("items", ctx_r86.listMetodosPagos);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r86.formContado.controls["campoMetodoPagoContado"].invalid && (ctx_r86.formContado.controls["campoMetodoPagoContado"].dirty || ctx_r86.formContado.controls["campoMetodoPagoContado"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r86.fechaVenta_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](26, _c1, ctx_r86.submitted && ctx_r86.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r86.submitted && ctx_r86.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r86.nombreContado);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx_r86.listClients)("searchKeyword", ctx_r86.keywordCliente)("itemTemplate", _r91)("notFoundTemplate", _r93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r86.precioTotal_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](28, _c1, ctx_r86.submitted && ctx_r86.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r86.pago_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](30, _c1, ctx_r86.submitted && ctx_r86.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r86.cambio_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](32, _c1, ctx_r86.submitted && ctx_r86.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r86.observaciones_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r86.vendedor_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](34, _c1, ctx_r86.formVContado.campoVendedorContado.invalid && (ctx_r86.formVContado.campoVendedorContado.dirty || ctx_r86.formVContado.campoVendedorContado.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r86.formVContado.campoVendedorContado.errors == null ? null : ctx_r86.formVContado.campoVendedorContado.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r86.formVContado.campoVendedorContado.errors == null ? null : ctx_r86.formVContado.campoVendedorContado.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", !ctx_r86.formContado.valid);
} }
function AddSaleComponent_ng_template_86_ng_template_21_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_86_ng_template_21_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Ingrese como m\u00E1ximo 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_86_ng_template_21_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, AddSaleComponent_ng_template_86_ng_template_21_div_7_div_1_Template, 2, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, AddSaleComponent_ng_template_86_ng_template_21_div_7_div_2_Template, 2, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r109.formCredito.controls["campoCantidadRecibidaCredito"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r109.formCredito.controls["campoCantidadRecibidaCredito"].errors.pattern);
} }
function AddSaleComponent_ng_template_86_ng_template_21_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_86_ng_template_21_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, AddSaleComponent_ng_template_86_ng_template_21_div_13_div_1_Template, 2, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r110.formCredito.controls["campoMetodoPagoCredito"].errors.required);
} }
function AddSaleComponent_ng_template_86_ng_template_21_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_86_ng_template_21_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, AddSaleComponent_ng_template_86_ng_template_21_div_19_span_1_Template, 2, 0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r111.form.title.errors.required);
} }
function AddSaleComponent_ng_template_86_ng_template_21_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "a", 67);
} if (rf & 2) {
    const item_r122 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("innerHTML", item_r122.nombres_apellidos, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_86_ng_template_21_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "div", 67);
} if (rf & 2) {
    const notFound_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("innerHTML", notFound_r123, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_86_ng_template_21_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_86_ng_template_21_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " Ingrese solo letras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_86_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "form", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngSubmit", function AddSaleComponent_ng_template_86_ng_template_21_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r125); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r124.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5, "Cantidad Recibida");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function AddSaleComponent_ng_template_86_ng_template_21_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r125); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r126.updatePago($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, AddSaleComponent_ng_template_86_ng_template_21_div_7_Template, 3, 2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "ng-select", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, AddSaleComponent_ng_template_86_ng_template_21_div_13_Template, 2, 1, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](18, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, AddSaleComponent_ng_template_86_ng_template_21_div_19_Template, 2, 1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24, "N\u00FAmero de Cuotas");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "ng5-slider", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("valueChange", function AddSaleComponent_ng_template_86_ng_template_21_Template_ng5_slider_valueChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r125); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r127.tickValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](31, "Buscar o Crear nuevo Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "ng-autocomplete", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selected", function AddSaleComponent_ng_template_86_ng_template_21_Template_ng_autocomplete_selected_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r125); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r128.selectEventCliente($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](33, AddSaleComponent_ng_template_86_ng_template_21_ng_template_33_Template, 1, 1, "ng-template", null, 130, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](35, AddSaleComponent_ng_template_86_ng_template_21_ng_template_35_Template, 1, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](37, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](40, "Montos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](43, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](44, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](45, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](46, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](47, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](49, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](50, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](51, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](53, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](54, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](55, "Deuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](56, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](57, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](58, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](60, "label", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](61, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](62, "textarea", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](63, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](64, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](65, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](66, "label", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](67, "Responsable de la Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](68, "input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](69, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](70, AddSaleComponent_ng_template_86_ng_template_21_div_70_Template, 2, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](71, AddSaleComponent_ng_template_86_ng_template_21_div_71_Template, 2, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](72, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](73, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_86_ng_template_21_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r125); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r129.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](74, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](75, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_86_ng_template_21_Template_button_click_75_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r125); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r130.guardarVenta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](76, " Registrar Venta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](34);
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](36);
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r87.formCredito);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r87.cantidadRecibida_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r87.formCredito.controls["campoCantidadRecibidaCredito"].invalid && (ctx_r87.formCredito.controls["campoCantidadRecibidaCredito"].dirty || ctx_r87.formCredito.controls["campoCantidadRecibidaCredito"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r87.metodoPagoCredito);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("items", ctx_r87.listMetodosPagos);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r87.formCredito.controls["campoMetodoPagoCredito"].invalid && (ctx_r87.formCredito.controls["campoMetodoPagoCredito"].dirty || ctx_r87.formCredito.controls["campoMetodoPagoCredito"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r87.fechaVenta_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](28, _c1, ctx_r87.submitted && ctx_r87.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r87.submitted && ctx_r87.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx_r87.tickValue)("options", ctx_r87.tickValueoptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r87.nombreCredito);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx_r87.listClients)("searchKeyword", ctx_r87.keywordCliente)("itemTemplate", _r112)("notFoundTemplate", _r114);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r87.precioTotal_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](30, _c1, ctx_r87.submitted && ctx_r87.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r87.pago_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](32, _c1, ctx_r87.submitted && ctx_r87.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r87.cambio_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](34, _c1, ctx_r87.submitted && ctx_r87.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r87.observaciones_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("formControlName", ctx_r87.vendedor_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](36, _c1, ctx_r87.formVCredito.campoVendedorCredito.invalid && (ctx_r87.formVCredito.campoVendedorCredito.dirty || ctx_r87.formVCredito.campoVendedorCredito.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r87.formVCredito.campoVendedorCredito.errors == null ? null : ctx_r87.formVCredito.campoVendedorCredito.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r87.formVCredito.campoVendedorCredito.errors == null ? null : ctx_r87.formVCredito.campoVendedorCredito.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", !ctx_r87.formCredito.valid);
} }
function AddSaleComponent_ng_template_86_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "h5", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "Registrar Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_86_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r132); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r131.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "ul", 96, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("navChange", function AddSaleComponent_ng_template_86_Template_ul_navChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r132); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r133.selectorMetodoPago($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13, "Al Contado");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](14, AddSaleComponent_ng_template_86_ng_template_14_Template, 70, 36, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](18, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](20, "Al Cr\u00E9dito");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](21, AddSaleComponent_ng_template_86_ng_template_21_Template, 77, 38, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](7);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("activeId", ctx_r20.activePago);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngbNavItem", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngbNavItem", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngbNavOutlet", _r85);
} }
function AddSaleComponent_ng_template_88_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "h5", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "Factura de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_88_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r136); const modal_r134 = restoredCtx.$implicit; return modal_r134.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "h4", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, "Factura #MN0131 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13, "Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "img", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](18, "i", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19, "641 Counts Lane Wilmore, KY 40390");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](21, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22, " abc@123.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](24, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25, " 012-345-6789");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](26, "hr", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "h5", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](31, "Facturado a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33, "Preston Miller");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](35, "4450 Fancher Drive Dallas, TX 75247");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](37, "PrestonMiller@armyspy.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](39, "001-234-5678");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](43, "h5", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](44, "N\u00BA de Factura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](46, "#MN0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](47, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "h5", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](49, "Fecha de la Factura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](51, "09 Jul, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](53, "h5", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](54, "N\u00BA de pedido:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](56, "#1123456");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](57, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](58, "h5", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](59, "Resumen del Pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](60, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](61, "table", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](62, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](63, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](64, "th", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](65, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](66, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](67, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](68, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](69, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](70, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](71, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](72, "th", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](73, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](74, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](75, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](76, "th", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](77, "01");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](78, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](79, "h5", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](80, "Nike N012 Running Shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](81, "ul", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](82, "li", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](83, "Color : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](84, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](85, "Gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](86, "li", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](87, "Size : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](88, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](89, "08");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](91, "$260");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](93, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](94, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](95, "PEN 260.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](96, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](97, "th", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](98, "02");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](99, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](100, "h5", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](101, "Adidas Running Shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](102, "ul", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](103, "li", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](104, "Color : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](105, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](106, "Black");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](107, "li", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](108, "Size : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](109, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](110, "09");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](112, "$250");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](114, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](115, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](116, "PEN 250.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](117, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](118, "th", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](119, "Sub Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](120, "td", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](121, "PEN 510.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](122, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](123, "th", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](124, " Descuento :");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](125, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](126, "- PEN 50.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](127, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](128, "th", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](129, " Costo de env\u00EDo :");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](130, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](131, "PEN 25.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](132, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](133, "th", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](134, " Impuesto (IGV)");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](135, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](136, "PEN 13.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](137, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](138, "th", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](139, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](140, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](141, "h4", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](142, "PEN 498.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](143, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](144, "a", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](145, "i", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](146, "a", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](147, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](148, "button", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_88_Template_button_click_148_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r136); const modal_r134 = restoredCtx.$implicit; return modal_r134.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](149, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](150, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](151, "Guardar cambios");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__.pdfMake.vfs;
class AddSaleComponent {
    constructor(fb, modalService, productosService, customerService, usuarioService, ventaService) {
        this.fb = fb;
        this.modalService = modalService;
        this.productosService = productosService;
        this.customerService = customerService;
        this.usuarioService = usuarioService;
        this.ventaService = ventaService;
        this.role = 'Admin';
        this.nombre_sedes = "campoSede";
        this.idSede = "";
        this.currentPage = 1;
        this.pageSize = 10;
        this.submitted_Contado = false;
        this.cantidadRecibida_Contado = "campoCantidadRecibidaContado";
        this.fechaVenta_Contado = "campoFechaVentaContado";
        this.usuario_Contado = "campoUsuarioContado";
        this.nombreContado = "campoNombreContado";
        this.precioTotal_Contado = "campoPrecioTotalContado";
        this.pago_Contado = "campoPagoContado";
        this.cambio_Contado = "campoCambioContado";
        this.observaciones_Contado = "campoObservacionesContado";
        this.vendedor_Contado = "campoVendedorContado";
        this.metodoPagoContado = "campoMetodoPagoContado";
        this.cantidadRecibida_Credito = "campoCantidadRecibidaCredito";
        this.fechaVenta_Credito = "campoFechaVentaCredito";
        this.usuario_Credito = "campoUsuarioCredito";
        this.nombreCredito = "campoNombreCredito";
        this.precioTotal_Credito = "campoPrecioTotalCredito";
        this.pago_Credito = "campoPagoCredito";
        this.cambio_Credito = "campoCambioCredito";
        this.observaciones_Credito = "campoObservacionesCredito";
        this.vendedor_Credito = "campoVendedorCredito";
        this.metodoPagoCredito = "campoMetodoPagoCredito";
        this.submitted_EditarPrecio = false;
        this.precioOriginal_Editar = "campoPrecioOriginalEditar";
        this.nuevoPrecio_Editar = "campoNuevoPrecioEditar";
        this.listAllProducts = [];
        this.active = 1;
        this.keyword = "id_producto";
        this.keywordCliente = "nombres_apellidos";
        this.products = [];
        this.venta = new src_models_venta__WEBPACK_IMPORTED_MODULE_1__.VentasModel;
        this.tipoPago = new src_models_tipo_venta__WEBPACK_IMPORTED_MODULE_2__.TipoVentaModel;
        this.activePago = 1;
        this.selectorPago = "contado";
        this.listMetodosPagos = ['Físico', 'Yape', 'Plin', 'Interbancario'];
        this.listClients = [];
        this.btnGuardar = false;
        this.lettersPattern = '[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'; // Incluimos Ññ y tildes en cada vocal
        this.numberPattern = '(^[0-9])+([.][0-9]{1,2})?$';
        this.decimalPattern = /^\d+(\.\d{1,2})?$/;
        this.productoC = "campoProductoC";
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
        this.sedeActual = new src_models_sedes__WEBPACK_IMPORTED_MODULE_8__.SedesModel;
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
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Venta' }, { label: 'Realizar Venta', active: true }];
        this.getListSedes();
        this.getListMonturas(this.usuarioService.getSedebyUser());
        this.crearFormularioEditarPrecio();
    }
    getListSedes() {
        this.listSedes = JSON.parse(localStorage.getItem('sedes'));
        this.idSede = this.usuarioService.getSedebyUser();
        this.sedeActual = this.getSedeActual(this.idSede, this.listSedes);
    }
    getSedeActual(idSede, sedes) {
        let sedeActual = sedes.find(sede => sede.id_sede === idSede);
        return sedeActual;
    }
    crearFormularioEditarPrecio() {
        this.formEditarPrecio = this.fb.group({
            [this.precioOriginal_Editar]: [{ value: "S/ 000.00", disabled: true }],
            [this.nuevoPrecio_Editar]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern(this.decimalPattern),
                ]],
        });
        this.formSedes = this.fb.group({
            [this.nombre_sedes]: [this.idSede]
        });
    }
    fS(campo) {
        return this.formSedes.get(campo);
    }
    changeSede() {
        this.idSede = this.fS(this.nombre_sedes).value;
        this.updateProductosbySede(this.idSede);
        this.sedeActual = this.getSedeActual(this.idSede, this.listSedes);
    }
    updateProductosbySede(idSede) {
        this.listAllProducts = [];
        this.products = [];
        this.listMonturasforSale = [];
        this.listLunasforSale = [];
        this.listAccesoriosforSale = [];
        this.getListMonturas(idSede);
    }
    fE(campo) {
        return this.formEditarPrecio.get(campo);
    }
    crearFormulario() {
        this.formContado = this.fb.group({
            [this.cantidadRecibida_Contado]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern(this.decimalPattern),
                ]],
            [this.fechaVenta_Contado]: [{ value: null, disabled: true }],
            [this.usuario_Contado]: [null],
            [this.precioTotal_Contado]: [{ value: null, disabled: true }],
            [this.pago_Contado]: [{ value: null, disabled: true }],
            [this.cambio_Contado]: [{ value: null, disabled: true }],
            [this.observaciones_Contado]: [null],
            [this.vendedor_Contado]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern(this.lettersPattern),
                ]],
            [this.metodoPagoContado]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required
                ]],
            [this.nombreContado]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required
                ]]
        });
        this.formCredito = this.fb.group({
            [this.cantidadRecibida_Credito]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern(this.decimalPattern),
                ]],
            [this.fechaVenta_Credito]: [{ value: null, disabled: true }],
            [this.usuario_Credito]: [null],
            [this.precioTotal_Credito]: [{ value: null, disabled: true }],
            [this.pago_Credito]: [{ value: null, disabled: true }],
            [this.cambio_Credito]: [{ value: null, disabled: true }],
            [this.observaciones_Credito]: [null],
            [this.vendedor_Credito]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern(this.lettersPattern),
                ]],
            [this.metodoPagoCredito]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required
                ]],
            [this.nombreCredito]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required
                ]],
        });
    }
    /**
   * Returns form contado
   */
    get formVContado() {
        return this.formContado.controls;
    }
    /**
* Returns form contado
*/
    get formVCredito() {
        return this.formCredito.controls;
    }
    onSort({ column, direction }) {
        // resetting other headers
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
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
        this.f(this.fechaVenta_Contado).setValue(this.fechaVenta.toLocaleDateString());
        this.f(this.precioTotal_Contado).setValue(this.precioTotalVenta.toFixed(2));
        this.g(this.fechaVenta_Credito).setValue(this.fechaVenta.toLocaleDateString());
        this.g(this.precioTotal_Credito).setValue(this.precioTotalVenta.toFixed(2));
    }
    /**
     * Open scroll modal
     * @param scrollDataModal scroll modal data
     */
    scrollModal(scrollDataModal) {
        this.modalService.open(scrollDataModal, { size: 'xl', scrollable: true });
    }
    /**
     * Open small modal
     * @param DataModalEditarPrecio small modal data
     */
    centerModalEditarPrecio(DataModalEditarPrecio, data) {
        this.formEditarPrecio.reset();
        this.tmpProducto = data;
        switch (data.tipo) {
            case 'montura':
                this.fE(this.precioOriginal_Editar).setValue(data.precio_montura_v);
                break;
            case 'accesorio':
                this.fE(this.precioOriginal_Editar).setValue(data.precio_accesorio_v);
                break;
            case 'luna':
                this.fE(this.precioOriginal_Editar).setValue(data.precio_luna_v);
                break;
            default:
                break;
        }
        this.modalService.open(DataModalEditarPrecio, { scrollable: true, size: 'md', windowClass: 'modal-holder', centered: true });
    }
    /**
     * Funcion para actualizar el precio unitario según conveniencia
     *
     */
    actualizarPrecio() {
        let tmpPrecio = Number(this.fE(this.nuevoPrecio_Editar).value);
        switch (this.tmpProducto.tipo) {
            case 'montura':
                this.products.forEach(el => {
                    if (el.id_producto == this.tmpProducto.id_producto) {
                        el.precio_montura_v = isNaN(tmpPrecio) ? 0 : tmpPrecio;
                        el.precio = el.precio_montura_v * el.cant_vendida;
                    }
                });
                break;
            case 'accesorio':
                this.products.forEach(el => {
                    if (el.id_producto == this.tmpProducto.id_producto) {
                        el.precio_accesorio_v = isNaN(tmpPrecio) ? 0 : tmpPrecio;
                        el.precio = el.precio_accesorio_v * el.cant_vendida;
                    }
                });
                break;
            case 'luna':
                this.products.forEach(el => {
                    if (el.id_producto == this.tmpProducto.id_producto) {
                        el.precio_luna_v = isNaN(tmpPrecio) ? 0 : tmpPrecio;
                        el.precio = el.precio_luna_v * el.cant_vendida;
                    }
                });
                break;
            default:
                break;
        }
        this.modalService.dismissAll();
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
    getListMonturas(idSede) {
        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("loading", "Cargando...");
        this.productosService.getMonturasforSale(idSede).subscribe(res => {
            this.listAllProducts = res;
            this.listMonturasforSale = res;
            this.getListAccesorios(idSede);
        });
    }
    getListAccesorios(idSede) {
        this.productosService.getAccesoriosforSale(idSede).subscribe(res => {
            this.listAllProducts = [...res, ...this.listAllProducts];
            this.listAccesoriosforSale = res;
            this.getListLunas(idSede);
        });
    }
    getListLunas(idSede) {
        this.productosService.getLunasforSale(idSede).subscribe(res => {
            this.listAllProducts = [...res, ...this.listAllProducts];
            this.listLunasforSale = res;
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("close", null);
        });
    }
    getListClients() {
        this.customerService.getAllClientsforSale().subscribe(res => {
            this.listClients = res;
            this.listClients.forEach(element => {
                element.nombres_apellidos = element.apellidos + ' ' + element.nombres;
            });
        });
    }
    selectorMetodoPago(changeEvent) {
        if (changeEvent.nextId == 1) {
            this.selectorPago = "contado";
        }
        else {
            this.selectorPago = "credito";
        }
    }
    selectEvent(item) {
        const productExistInCart = this.products.find((name) => name.id_producto === item.id_producto);
        if (!productExistInCart) {
            switch (item.tipo) {
                case 'montura':
                    this.products.push(Object.assign(Object.assign({}, item), { cant_vendida: 1, precio: item.precio_montura_v }));
                    this.autocomplete.clear();
                    this.autocomplete.close();
                    break;
                case 'luna':
                    this.products.push(Object.assign(Object.assign({}, item), { cant_vendida: 1, precio: item.precio_luna_v }));
                    this.autocomplete.clear();
                    this.autocomplete.close();
                    break;
                case 'accesorio':
                    this.products.push(Object.assign(Object.assign({}, item), { cant_vendida: 1, precio: item.precio_accesorio_v }));
                    this.autocomplete.clear();
                    this.autocomplete.close();
                    break;
                default:
                    break;
            }
            this.estadoBotonGuardar();
        }
        else {
            if (productExistInCart.cant_vendida + 1 > productExistInCart.cantidad) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("error", "No se puede agregar más productos del stock");
                this.autocomplete.clear();
                this.autocomplete.close();
                return;
            }
            else {
                productExistInCart.cant_vendida += 1;
                this.autocomplete.clear();
                this.autocomplete.close();
            }
        }
    }
    selectEventCliente(item) {
        this.customer = item;
        if (this.selectorPago == "contado") {
            this.f(this.usuario_Contado).setValue(item.id_cliente);
        }
        else {
            this.g(this.usuario_Credito).setValue(item.id_cliente);
        }
        this.venta.nombre_cliente = item.nombres + ' ' + item.apellidos;
    }
    onChangeSearch(search) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }
    onFocused(e) {
        // do something
        this.autocomplete.close();
    }
    /** Gets the total cost of all products. */
    getTotalCost() {
        this.precioTotalVenta = this.products.map(t => t.precio).reduce((acc, value) => acc + value, 0);
        this.precioTotalVenta = (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_7__.round)(this.precioTotalVenta, 1);
        return this.precioTotalVenta;
    }
    /** actualiza el precio por cantidad */
    addQuantityProduct(product, i) {
        if (this.products[i].cant_vendida + 1 > this.products[i].cantidad) {
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("error", "No se puede agregar más productos del stock");
            return;
        }
        else {
            this.products[i].cant_vendida += 1;
            switch (this.products[i].tipo) {
                case 'montura':
                    this.products[i].precio = this.products[i].precio_montura_v * this.products[i].cant_vendida;
                    break;
                case 'luna':
                    this.products[i].precio = this.products[i].precio_luna_v * this.products[i].cant_vendida;
                    break;
                case 'accesorio':
                    this.products[i].precio = this.products[i].precio_accesorio_v * this.products[i].cant_vendida;
                    break;
                default:
                    break;
            }
        }
    }
    substractQuantityProduct(product, i) {
        this.products[i].cant_vendida -= 1;
        switch (this.products[i].tipo) {
            case 'montura':
                this.products[i].precio = this.products[i].precio_montura_v * this.products[i].cant_vendida;
                break;
            case 'luna':
                this.products[i].precio = this.products[i].precio_luna_v * this.products[i].cant_vendida;
                break;
            case 'accesorio':
                this.products[i].precio = this.products[i].precio_accesorio_v * this.products[i].cant_vendida;
                break;
            default:
                break;
        }
        if (this.products[i].cant_vendida === 0) {
            this.removeProduct();
        }
    }
    /**
     * Remueve elementos de la lista cuando la cantidad es = 0
     */
    removeProduct() {
        this.products = this.products.filter((name) => name.cant_vendida !== 0);
    }
    /**
     * Remueve productos del carrito de compras
     */
    removeCartProduct(product, i) {
        this.products[i].cant_vendida = 0;
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
    /**
   * Returns form Cliente
   */
    get formEP() {
        return this.formEditarPrecio.controls;
    }
    f(campo) {
        return this.formContado.get(campo);
    }
    g(campo) {
        return this.formCredito.get(campo);
    }
    updatePago(event) {
        if (this.selectorPago == "contado") {
            this.f(this.pago_Contado).setValue(this.f(this.cantidadRecibida_Contado).value);
            this.f(this.cambio_Contado).setValue((this.f(this.cantidadRecibida_Contado).value - this.precioTotalVenta).toFixed(2));
        }
        else {
            const deuda = Number((this.g(this.cantidadRecibida_Credito).value - this.precioTotalVenta).toFixed(2));
            this.g(this.pago_Credito).setValue(this.g(this.cantidadRecibida_Credito).value);
            this.g(this.cambio_Credito).setValue(Math.abs(deuda));
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
            this.venta.fecha_creacion_venta = new Date(Date.now());
            if (this.selectorPago == "contado") {
                this.venta.nombre_jalador = this.f(this.vendedor_Contado).value;
                this.tipoPago.observaciones = this.f(this.observaciones_Contado).value;
                this.tipoPago.cantidad_recibida = Number(this.f(this.cantidadRecibida_Contado).value);
                if (this.f(this.cantidadRecibida_Contado).value - this.precioTotalVenta < 0) {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("error", "El pago no puede ser menor al valor de la compra, se sugiere compra al crédito");
                    return;
                }
                else {
                    this.tipoPago.deuda = 0;
                    this.tipoPago.metodo_pago = this.f(this.metodoPagoContado).value;
                    this.tipoPago.cuotas = String(0);
                    let idClienteContado = this.listClients.find(cliente => (cliente.id_cliente == (this.f(this.nombreContado).value).id_cliente));
                    if (idClienteContado != undefined) {
                        this.venta.id_cliente = (this.f(this.nombreContado).value).id_cliente;
                        this.venta.encargado_medicion = (this.f(this.nombreContado).value).medidas[0].encargado;
                        this.venta.medidas = idClienteContado.medidas;
                    }
                    else {
                        this.f(this.nombreContado).setValue(null);
                        return;
                    }
                }
            }
            else {
                if (this.precioTotalVenta - this.g(this.cantidadRecibida_Credito).value < 0) {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("error", "El pago no puede ser mayor al valor de la compra, se sugiere compra al contado");
                    return;
                }
                else {
                    this.venta.nombre_jalador = this.g(this.vendedor_Credito).value;
                    this.tipoPago.observaciones = this.g(this.observaciones_Credito).value;
                    this.tipoPago.cantidad_recibida = Number(this.g(this.cantidadRecibida_Credito).value);
                    this.tipoPago.deuda = (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_7__.round)(this.precioTotalVenta - this.g(this.cantidadRecibida_Credito).value, 1);
                    this.tipoPago.metodo_pago = this.g(this.metodoPagoCredito).value;
                    this.tipoPago.cuotas = String(this.tickValue);
                    let idClienteCredito = this.listClients.find(cliente => (cliente.id_cliente == (this.g(this.nombreCredito).value).id_cliente));
                    if (idClienteCredito != undefined) {
                        this.venta.id_cliente = (this.g(this.nombreCredito).value).id_cliente;
                        this.venta.encargado_medicion = (this.g(this.nombreCredito).value).medidas[0].encargado;
                        this.venta.medidas = idClienteCredito.medidas;
                    }
                    else {
                        this.g(this.nombreCredito).setValue(null);
                        return;
                    }
                }
            }
            this.venta.id_vendedor = this.usuarioService.getUser().id_usuario;
            this.venta.nombre_vendedor = this.usuarioService.getUser().nombres + ' ' + this.usuarioService.getUser().apellidos;
            this.tipoPago.forma_pago = this.selectorPago;
            this.tipoPago.precio_total = this.precioTotalVenta;
            this.tipoPago.fecha_pago = new Date();
            this.venta.tipo_venta.push(this.tipoPago);
            this.venta.id_sede = this.idSede;
            this.venta.habilitado = true;
            this.cancel();
        }
        else {
        }
    }
    cancel() {
        const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
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
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("loading", "Cargando...");
                this.productosService.createVenta(this.venta).subscribe(res => {
                    let tmp = Object.assign({}, this.customer, this.venta);
                    const { direccion: direccionCliente, telefono: telefonoCliente } = tmp, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__rest)(tmp, ["direccion", "telefono"]);
                    const updatedObject = Object.assign({ direccionCliente, telefonoCliente }, rest);
                    const objPDF = Object.assign({}, updatedObject, this.sedeActual);
                    this.ventaService.getPDF(objPDF).subscribe(res => {
                        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("close", null);
                        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("success", "Venta realizada");
                        this.modalService.dismissAll();
                        this.products = [];
                        this.getListMonturas(this.idSede);
                        this.estadoBotonGuardar();
                        const byteArray = new Uint8Array(atob(res)
                            .split("")
                            .map(char => char.charCodeAt(0)));
                        const blob = new Blob([byteArray], { type: 'application/pdf' });
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.style.display = 'none';
                        document.body.appendChild(a);
                        a.href = url;
                        a.download = "venta";
                        a.click();
                    });
                }, (error) => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("close", null);
                    if (error.status !== 404) {
                        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("error", "Error en la conexión");
                    }
                });
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().DismissReason.cancel)) {
                this.venta.tipo_venta = [];
                swalWithBootstrapButtons.fire('Cancelado', 'La venta no se ha realizado', 'error');
            }
        });
    }
    createPDF(venta, cliente) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            var fonts = {
                Roboto: {
                    normal: 'fonts/Roboto-Regular.ttf',
                    bold: 'fonts/Roboto-Medium.ttf',
                    italics: 'fonts/Roboto-Italic.ttf',
                    bolditalics: 'fonts/Roboto-MediumItalic.ttf'
                },
            };
            var estadoBoleta = "Pagado";
            var fecha_hoy = new Date(venta.fecha_creacion_venta).toLocaleDateString('en-GB');
            var fecha_entrega = new Date(venta.fecha_creacion_venta).toLocaleDateString("es-CL", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric" // 2-digit
            });
            var hora_entrega = new Date(venta.fecha_creacion_venta).toLocaleTimeString("es-CL", {
                timeZone: "America/Bogota",
                hour12: true,
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit" // numeric
            });
            var simboloNuevoSol = 'S/ ';
            var numeroBoleta = '#MN0131';
            var direccionEmpresa = 'Calle Santa Marta 218, Arequipa';
            var correoEmpresa = 'raulcg1234@hotmail.com ';
            var felefonoEmpresa = '955 739 464';
            var nombresCliente = cliente.nombres + ' ' + cliente.apellidos;
            var fnacimientoCliente = cliente.fecha_nacimiento ? new Date(cliente.fecha_nacimiento).toLocaleDateString('en-GB') : "Sin fecha de nacimiento";
            //var direccionCliente = 'Calle';
            var correoCliente = cliente.email ? cliente.email : "Sin correo";
            var telefonoCliente = cliente.telefono ? cliente.telefono : "Sin telefono";
            var externalDataRetrievedFromServer = [];
            var peruIGV = 0.18;
            function buildData() {
                var numOrdenItems = 1;
                var totalMonturas, totallunas, totalAccesorios = 0;
                var subTotal = 0;
                // Monturas
                if (venta.list_monturas.length > 0) {
                    for (var i = 0; i < venta.list_monturas.length; i++) {
                        numOrdenItems += 1;
                        totalMonturas = venta.list_monturas[i].precio_montura_v * venta.list_monturas[i].cant_vendida;
                        subTotal += totalMonturas;
                        externalDataRetrievedFromServer.push({ num_orden: numOrdenItems, detalle: venta.list_monturas[i].marca, precio: venta.list_monturas[i].precio_montura_v, cantidad: venta.list_monturas[i].cant_vendida, total: totalMonturas }); // Añade
                    }
                }
                // Lunas
                if (venta.list_lunas.length > 0) {
                    for (var i = 0; i < venta.list_lunas.length; i++) {
                        numOrdenItems += 1;
                        totallunas = venta.list_lunas[i].precio_luna_v * venta.list_lunas[i].cant_vendida;
                        subTotal += totallunas;
                        externalDataRetrievedFromServer.push({ num_orden: numOrdenItems, detalle: venta.list_lunas[i].material, precio: venta.list_lunas[i].precio_luna_v, cantidad: venta.list_lunas[i].cant_vendida, total: totallunas }); // Añade
                    }
                }
                // Accesorios
                if (venta.list_accesorios.length > 0) {
                    for (var i = 0; i < venta.list_accesorios.length; i++) {
                        numOrdenItems += 1;
                        totalAccesorios = venta.list_accesorios[i].precio_accesorio_v * venta.list_accesorios[i].cant_vendida;
                        subTotal += totalAccesorios;
                        externalDataRetrievedFromServer.push({ num_orden: numOrdenItems, detalle: venta.list_accesorios[i].nombre_accesorio, precio: venta.list_accesorios[i].precio_accesorio_v, cantidad: venta.list_accesorios[i].cant_vendida, total: totalAccesorios }); // Añade
                    }
                }
                return subTotal;
            }
            function buildTableBody(data, columns, subtotal) {
                var body = [];
                body.push([{ text: 'No.', style: 'tableHeader', alignment: 'center' }, { text: 'Detalle', style: 'tableHeader', alignment: 'center' }, { text: 'Precio', style: 'tableHeader', alignment: 'center' }, { text: 'Cantidad', style: 'tableHeader', alignment: 'center' }, { text: 'Total', style: 'tableHeader', alignment: 'center' }]);
                data.forEach(function (row) {
                    var dataRow = [];
                    columns.forEach(function (column) {
                        //dataRow.push({ text: row[column].toString(), style: 'cell', alignment: 'center' },);
                        dataRow.push(row[column].toString());
                    });
                    body.push(dataRow);
                });
                /* var totalIGV = round(subtotal * peruIGV, 2);
                var total = round(subtotal + totalIGV, 1); */
                var total = (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_7__.round)(subtotal, 1);
                /* body.push([{ text: ' ', rowSpan: 3, colSpan: 2}, { }, {text: 'Sub. Total:', style: 'tableHeader', alignment: 'right', colSpan: 2 }, { }, { text: simboloNuevoSol + subtotal, style: 'contenido', alignment: 'right' }]);
                body.push([{ }, { }, { text: 'IGV (18%) :', style: 'tableHeader', alignment: 'right', colSpan: 2}, { }, { text: simboloNuevoSol + totalIGV, style: 'contenido', alignment: 'right' }]); */
                body.push([{ text: '', border: [false, false, false, false], colSpan: 2 }, {}, { text: 'Total:', style: 'tableHeader', alignment: 'right', colSpan: 2 }, {}, { text: simboloNuevoSol + total, style: 'contenido', alignment: 'right' }]);
                return body;
            }
            function table(data, columns) {
                var subtotal = buildData();
                return {
                    style: 'tableMargin',
                    color: '#444',
                    table: {
                        widths: [25, '*', 63, 60, 63],
                        heights: [20, 20, 20, 20],
                        headerRows: 1,
                        body: buildTableBody(data, columns, subtotal)
                    }
                };
            }
            function estadoBoletaFunc(estado) {
                return {
                    text: estado, background: 'yellow'
                };
            }
            const pdfDefinition = {
                pageSize: 'A4',
                //pageOrientation: 'landscape',
                pageMargins: [40, 60, 40, 60],
                content: [
                    {
                        style: 'tableMargin',
                        table: {
                            widths: ['*', '*'],
                            body: [
                                /* [{ image: await getBase64ImageFromURL('/assets/images/logo-dark.png'), width: 150 }, { text: 'Nº de Boleta: ' + numeroBoleta, style: 'tableHeader', rowSpan: 4, alignment: 'right' }], */
                                [{ image: yield (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_7__.getBase64ImageFromURL)('/assets/images/logo-dark.png'), width: 150 }, { text: '', style: 'tableHeader', rowSpan: 3, alignment: 'right' }],
                                [{ text: direccionEmpresa, style: 'datosempresa' }, {}],
                                [{ text: correoEmpresa, style: 'datosempresa' }, {}],
                                [{ text: felefonoEmpresa, style: 'datosempresa' }, {}],
                            ]
                        },
                        layout: 'noBorders'
                    },
                    {
                        style: 'tableMargin',
                        table: {
                            widths: ['*', '*'],
                            body: [
                                /* [{ text: 'Facturado a:', style: 'tableHeader' }, { text: 'Nº de Boleta:', style: 'tableHeader', alignment: 'right' }],
                                [{ text: nombresCliente, style: 'subtitulo' }, {text: numeroBoleta, style: 'contenido', alignment: 'right'}], */
                                [{ text: 'Facturado a:', style: 'tableHeader' }, { text: 'Fecha de la Boleta:', style: 'tableHeader', alignment: 'right' }],
                                [{ text: nombresCliente, style: 'subtitulo' }, { text: fecha_hoy, style: 'contenido', alignment: 'right' }],
                                [{ text: 'Fecha de Nacimiento: ' + fnacimientoCliente, style: 'contenido' }, { text: '', style: 'tableHeader', alignment: 'right' }],
                                [{ text: 'Correo: ' + correoCliente, style: 'contenido' }, { text: '', style: 'contenido', alignment: 'right' }],
                                [{ text: 'Telefono: ' + telefonoCliente, style: 'contenido' }, {}],
                            ]
                        },
                        layout: 'noBorders'
                    },
                    { text: 'Resumen del pedido:', style: 'subtitulo' },
                    table(externalDataRetrievedFromServer, ['num_orden', 'detalle', 'precio', 'cantidad', 'total']),
                    {
                        text: [,
                            { text: 'Fecha de Entrega: ', style: 'textBold' },
                            fecha_entrega,
                            '   ',
                            { text: 'Hora: ', style: 'textBold' },
                            hora_entrega,
                        ]
                    },
                    { text: 'Nota:', style: 'subtitulo2' },
                    { text: 'Todo trabajo se efectuara con un adelanto del 50%.', style: 'contenido2', alignment: 'justify' },
                    { text: 'La empresa no se responsabiliza de los pedidos no recogidos después de un mes.', style: 'contenido2', alignment: 'justify' },
                ],
                styles: {
                    subtitulo: {
                        bold: true,
                        fontSize: 13,
                        color: 'black',
                        margin: [0, 10, 0, 5]
                    },
                    subtitulo2: {
                        bold: true,
                        fontSize: 10,
                        color: 'black',
                        margin: [0, 10, 0, 5]
                    },
                    contenido: {
                        fontSize: 12,
                    },
                    contenido2: {
                        fontSize: 8,
                    },
                    textBold: {
                        fontSize: 12,
                        bold: true,
                    },
                    datosempresa: {
                        fontSize: 10,
                    },
                    header: {
                        fontSize: 17,
                        bold: true,
                        margin: [0, 0, 0, 10]
                    },
                    subheader: {
                        fontSize: 13,
                        bold: true,
                        margin: [0, 10, 0, 5]
                    },
                    subtitle: {
                        fontSize: 12,
                        bold: true,
                        margin: [0, 10, 0, 5]
                    },
                    tableMargin: {
                        margin: [0, 15, 0, 15]
                    },
                    tableOpacityExample: {
                        margin: [0, 5, 0, 15],
                        fillColor: 'blue',
                        fillOpacity: 0.3
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 13,
                        color: 'black'
                    },
                },
            };
            const pdf = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default().createPdf(pdfDefinition);
            pdf.open();
        });
    }
    copyText(el) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(el.innerText).then(() => {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("success", "Copiado");
            }, (error) => {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("error", "Error");
            });
        }
        else {
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("error", "El navegador no soporta el API Clipboard");
        }
    }
}
AddSaleComponent.ɵfac = function AddSaleComponent_Factory(t) { return new (t || AddSaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_9__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_10__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_11__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_12__.VentaService)); };
AddSaleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: AddSaleComponent, selectors: [["app-add-sale"]], viewQuery: function AddSaleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_0__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.autocomplete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_21__.DecimalPipe])], decls: 90, vars: 17, consts: [[1, "container-fluid"], ["title", "A\u00F1adir un Producto", 3, "breadcrumbItems"], [1, "row", "mb-4"], [1, "col-xl-4"], [1, "card", "mb-0"], ["ngbNav", "", 1, "nav", "nav-tabs", "nav-justified", "nav-tabs-custom", 3, "activeId"], ["justifiednav", "ngbNav"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", 1, "nav-link"], [1, "uil", "uil-nerd", "font-size-20"], [1, "d-none", "d-sm-block"], ["ngbNavContent", ""], [1, "uil", "uil-panorama-h-alt", "font-size-20"], [1, "uil", "uil-box", "font-size-20"], [3, "ngbNavOutlet"], ["TabContentMonturas", ""], ["TabContentLunas", ""], ["TabContentAccesorios", ""], [1, "col-xl-8"], [1, "card", "h-100"], [1, "card-body"], [1, "card-title", "mb-3"], [1, "row"], [1, "p-2"], [1, "row", "mb-3"], [1, "col-md-8", "mb-2", "search-box", "chat-search-box"], [1, "position-relative"], ["placeholder", "Buscar productos", "historyIdentifier", "", "focusFirst", "true", "minQueryLength", "8", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused", "keyup.enter"], ["autocomplete", ""], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "col-md-4", "mb-2"], ["role", "toolbar", 1, "btn-toolbar"], ["class", "col-12 d-grid", 4, "appRole"], [1, "col-lg-12"], [1, "card-title", "mb-4"], [1, "table-responsive", "mb-2"], [1, "table", "table-centered", "dt-responsive", "table-nowrap", "mb-0", "align-middle", 2, "border-spacing", "0 12px", "width", "100%"], [1, "table-light"], [1, "bg-transparent"], [4, "ngFor", "ngForOf"], [1, "text-end", "mt-2"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "disabled", "click"], [1, "uil", "uil-shopping-cart-alt", "mt-2", "me-1"], ["centerDataModalEditar", ""], ["centerDataModalGuardar2", ""], ["scrollDataModal", ""], [3, "ngTemplateOutlet"], [1, "tab-content", "p-4"], [1, "tab-pane", "active"], [1, "row", "mb-2"], [1, "col-12"], [3, "formGroup"], ["ngbDropdown", ""], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName", "change"], [1, "search-box", "chat-search-box"], ["type", "text", "placeholder", "Buscar Montura...", 1, "form-control", "bg-light", "border-light", "rounded", 3, "ngModel", "ngModelChange"], [1, "uil", "uil-search", "search-icon"], [1, "table-responsive"], [1, "table", "table-centered", "table-nowrap", "mb-0", "align-middle"], [1, "row", "justify-content-md-between", "align-items-md-center"], [1, "text-md-end", "float-md-end", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "maxSize", "pageChange"], ["placement", "top", "ngbTooltip", "Copiar c\u00F3digo", 1, "px-2", "text-success", 3, "click"], [1, "uil-copy-alt", "font-size-18"], ["elementToCopy", ""], ["type", "text", "placeholder", "Buscar Luna...", 1, "form-control", "bg-light", "border-light", "rounded", 3, "ngModel", "ngModelChange"], [3, "innerHTML"], [1, "col-12", "d-grid"], [3, "result"], [4, "ngIf"], ["placement", "top", "ngbTooltip", "Disminuir", 1, "px-2", "text-warning"], [1, "uil", "uil-minus-circle", "font-size-18", 3, "click"], ["placement", "top", "ngbTooltip", "Agregar", 1, "px-2", "text-success"], ["name", "quantity", "ngDefaultControl", "", "min", "0", 1, "uil", "uil-plus-circle", "font-size-18", 3, "ngModel", "ngModelChange", "click"], ["placement", "top", "ngbTooltip", "Editar precio", 1, "px-2", "text-primary", 3, "click"], [1, "uil", "uil-pen", "font-size-18"], ["placement", "top", "ngbTooltip", "Eliminar", 1, "px-2", "text-danger"], [1, "uil", "uil-trash-alt", "font-size-18", 3, "click"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "col-sm-6"], ["for", "billing-PrecioOriginal", 1, "form-label"], ["type", "text", "id", "billing-PrecioOriginal", "placeholder", "Precio Original", 1, "form-control", 3, "formControlName"], [1, "mb-4"], ["for", "billing-NuevoPrecio", 1, "form-label"], ["type", "text", "id", "billing-NuevoPrecio", "placeholder", "Escriba el nuevo precio", 1, "form-control", 3, "formControlName", "ngClass"], [1, "invalid-feedback"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "click"], ["id", "modal-title", 1, "modal-title"], [1, "modal-body", "p-4"], [1, "col-lg-14"], ["ngbNav", "", 1, "nav-pills", "nav-justified", "bg-light", 3, "activeId", "navChange"], ["justifiednavpills", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], [1, "d-block", "d-sm-none"], [1, "fas", "fa-home"], [1, "far", "fa-user"], [3, "formGroup", "ngSubmit"], [1, "row", "mt-4"], [1, "col-4"], [1, "mb-3"], [1, "control-label"], ["placeholder", "Cantidad en soles", "type", "text", "name", "nameCantidadRecibidaContado", 1, "form-control", 3, "formControlName", "change"], ["class", "text-danger", 4, "ngIf"], [1, "form-label"], ["name", "selectMetodo", "placeholder", "Seleccione", 3, "items", "formControlName"], ["placeholder", "Seleccione la fecha", "type", "text", "name", "nameFechaRegistroContado", 1, "form-control", 3, "formControlName", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["placeholder", "Apellidos del cliente", "historyIdentifier", "", 3, "data", "searchKeyword", "itemTemplate", "formControlName", "notFoundTemplate", "selected"], ["itemTemplate3", ""], [1, "control-label", 2, "text-align", "left"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameTotalContado", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "namePagoContado", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameCambioContado", 1, "form-control", 3, "formControlName", "ngClass"], ["for", "billing-observaciones", 1, "form-label"], ["id", "billing-observaciones", "rows", "3", "placeholder", "Ingrese las observaciones", 1, "form-control", 3, "formControlName"], ["for", "billing-vendedor", 1, "form-label"], ["placeholder", "Nombre Completo", "type", "text", "name", "nameVendenorContado", 1, "form-control", 3, "formControlName", "ngClass"], [1, "text-danger"], ["placeholder", "Cantidad en soles", "type", "text", "name", "nameCantidadRecibidaCredito", 1, "form-control", 3, "formControlName", "change"], ["placeholder", "Seleccione la fecha", "type", "text", "name", "nameFechaRegistroCredito", 1, "form-control", 3, "formControlName", "ngClass"], [1, "p-3"], [3, "value", "options", "valueChange"], ["placeholder", "Apellidos del cliente", "historyIdentifier", "", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "formControlName", "selected"], ["itemTemplate2", ""], ["placeholder", "S/ 000.00", "type", "text", "name", "nameTotalCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "namePagoCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameCambioCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Nombre Completo", "type", "text", "name", "nameVendenorCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "card"], [1, "invoice-title"], [1, "float-end", "font-size-16"], [1, "badge", "bg-success", "font-size-12", "ms-2"], ["src", "assets/images/logo-dark.png", "alt", "logo", "height", "20"], [1, "text-muted"], [1, "mb-1"], [1, "uil", "uil-map-marker", "me-1"], [1, "uil", "uil-envelope-alt", "me-1"], [1, "uil", "uil-phone", "me-1"], [1, "my-4"], [1, "font-size-16", "mb-3"], [1, "font-size-15", "mb-2"], [1, "text-muted", "text-sm-end"], [1, "font-size-16", "mb-1"], [1, "mt-4"], [1, "py-2"], [1, "font-size-15"], [1, "table", "table-nowrap", "table-centered", "mb-0"], [2, "width", "70px"], [1, "text-end", 2, "width", "120px"], ["scope", "row"], [1, "font-size-15", "mb-1"], [1, "list-inline", "mb-0"], [1, "list-inline-item"], [1, "fw-medium"], [1, "text-end"], ["scope", "row", "colspan", "4", 1, "text-end"], ["scope", "row", "colspan", "4", 1, "border-0", "text-end"], [1, "border-0", "text-end"], [1, "m-0"], ["href", "javascript(0)", 1, "btn", "btn-success", "waves-effect", "waves-light", "me-1"], [1, "fa", "fa-download"], ["href", "javascript:window.print()", 1, "btn", "btn-success", "waves-effect", "waves-light", "me-1"], [1, "fa", "fa-print"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary"]], template: function AddSaleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "ul", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, "Montura");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, AddSaleComponent_ng_template_12_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17, "Luna");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](18, AddSaleComponent_ng_template_18_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23, "Accesorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](24, AddSaleComponent_ng_template_24_Template, 1, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](26, AddSaleComponent_ng_template_26_Template, 38, 16, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](28, AddSaleComponent_ng_template_28_Template, 32, 16, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](30, AddSaleComponent_ng_template_30_Template, 32, 16, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](36, "Realizar Venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "ng-autocomplete", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selected", function AddSaleComponent_Template_ng_autocomplete_selected_42_listener($event) { return ctx.selectEvent($event); })("inputChanged", function AddSaleComponent_Template_ng_autocomplete_inputChanged_42_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function AddSaleComponent_Template_ng_autocomplete_inputFocused_42_listener($event) { return ctx.onFocused($event); })("keyup.enter", function AddSaleComponent_Template_ng_autocomplete_keyup_enter_42_listener($event) { return ctx.selectEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](44, AddSaleComponent_ng_template_44_Template, 1, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](46, AddSaleComponent_ng_template_46_Template, 1, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](49, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](50, AddSaleComponent_div_50_Template, 4, 3, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](51, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](54, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](56, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](57, "h4", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](58, "Lista de Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](60, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](61, "table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](62, "thead", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](63, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](65, "Ord.");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](67, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](69, "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](71, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](73, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](75, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](76, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](77, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](78, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](79, AddSaleComponent_tr_79_Template, 25, 14, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](80, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](81, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function AddSaleComponent_Template_button_click_81_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r138); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](87); return ctx.centerModal(_r19, ctx.products); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](82, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](83, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](84, AddSaleComponent_ng_template_84_Template, 24, 8, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](86, AddSaleComponent_ng_template_86_Template, 23, 4, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](88, AddSaleComponent_ng_template_88_Template, 152, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](6);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](45);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngbNavOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("data", ctx.listAllProducts)("searchKeyword", ctx.keyword)("itemTemplate", _r11)("notFoundTemplate", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("appRole", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Total de la Venta: PEN ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](54, 14, ctx.getTotalCost(), "S/ "), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", !ctx.btnGuardar);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_13__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbNavOutlet, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_22__.AutocompleteComponent, _directives_role_directive__WEBPACK_IMPORTED_MODULE_14__.RoleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbDropdown, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbTooltip, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbHighlight, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, ng5_slider__WEBPACK_IMPORTED_MODULE_15__["ɵa"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.SlicePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__.Ng2SearchPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc2FsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


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

/***/ 93104:
/*!*********************************************************************!*\
  !*** ./src/app/pages/sale/deleted-sales/deleted-sales.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedSalesComponent": () => (/* binding */ DeletedSalesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ 32551);
/* harmony import */ var save_as_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! save-as-file */ 88083);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/venta.service */ 91173);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _directives_role_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../directives/role.directive */ 48185);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);












function DeletedSalesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ng-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.formSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", ctx_r0.nombre_sedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx_r0.listSedes);
} }
class DeletedSalesComponent {
    constructor(fb, usuarioService, ventaService) {
        this.fb = fb;
        this.usuarioService = usuarioService;
        this.ventaService = ventaService;
        this.role = 'Admin';
        this.nombre_sedes = "campoSede";
        this.idSede = "";
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Ventas' }, { label: 'Ventas Eliminas', active: true }];
        this.getListSedes();
        this.crearFormulario();
    }
    getListSedes() {
        this.listSedes = JSON.parse(localStorage.getItem('sedes'));
        this.idSede = this.usuarioService.getSedebyUser();
    }
    crearFormulario() {
        this.formSedes = this.fb.group({
            [this.nombre_sedes]: [this.idSede, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
        });
    }
    fS(campo) {
        return this.formSedes.get(campo);
    }
    exportarVentasEliminadas() {
        if (this.formSedes.valid) {
            let data = [];
            const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            const EXCEL_EXTENSION = '.xlsx';
            this.ventaService.getVentasEliminadasbySede(this.fS(this.nombre_sedes).value).subscribe(res => {
                if (res.length > 0) {
                    data = res.map((ventas) => {
                        let accesorios = ventas.list_accesorios.map(acc => {
                            return {
                                "PRECIO VENTA": acc.precio_accesorio_v,
                                "PRECIO COMPRA": acc.precio_accesorio_c,
                                "CANTIDAD VENDIDA": acc.cant_vendida,
                                "NOMBRE": acc.nombre_accesorio,
                                "SUMA TOTAL": acc.precio
                            };
                        });
                        let monturas = ventas.list_monturas.map(mont => {
                            return {
                                "PRECIO VENTA": mont.precio_montura_v,
                                "PRECIO COMPRA": mont.precio_montura_c,
                                "CANTIDAD VENDIDA": mont.cant_vendida,
                                "MARCA": mont.marca,
                                "MATERIAL": mont.material,
                                "COLOR": mont.color,
                                "SUMA TOTAL": mont.precio
                            };
                        });
                        let lunas = ventas.list_lunas.map(lun => {
                            return {
                                "PRECIO VENTA": lun.precio_luna_v,
                                "PRECIO COMPRA": lun.precio_luna_c,
                                "CANTIDAD VENDIDA": lun.cant_vendida,
                                "MATERIAL": lun.material,
                                "SUMA TOTAL": lun.precio
                            };
                        });
                        return {
                            "FECHA": new Date(ventas.fecha_creacion_venta).toLocaleDateString('en-GB'),
                            "NOMBRE CLIENTE": ventas.nombre_cliente,
                            "ACCESORIOS": JSON.stringify(accesorios),
                            "LUNAS": JSON.stringify(lunas),
                            "MONTURAS": JSON.stringify(monturas),
                            "TOTAL": ventas.tipo_venta[0].precio_total,
                            "USUARIO": ventas.nombre_vendedor.toUpperCase(),
                            "VENDEDOR": ventas.nombre_jalador ? ventas.nombre_jalador.toUpperCase() : null,
                            "ENCARGADO MEDICION": ventas.encargado_medicion ? ventas.encargado_medicion.toUpperCase() : null,
                            "FORMA DE PAGO": ventas.tipo_venta[0].forma_pago,
                        };
                    });
                    const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_8__.utils.json_to_sheet(data);
                    const workbook = {
                        Sheets: {
                            'hoja': worksheet
                        },
                        SheetNames: ['hoja']
                    };
                    const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_8__.write(workbook, { bookType: 'xlsx', type: 'array' });
                    const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE });
                    const nombreSede = this.listSedes.find(res => (res.id_sede == this.fS(this.nombre_sedes).value));
                    (0,save_as_file__WEBPACK_IMPORTED_MODULE_0__["default"])(blobData, 'ventas_eliminadas' + '_' + nombreSede.nombre_sede);
                }
                else {
                    this.mostrarMensaje();
                }
            });
        }
        else {
            return;
        }
    }
    mostrarMensaje() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Búsqueda finalizada',
            text: 'No existen ventas elimindas',
            icon: 'error',
            confirmButtonColor: '#34c38f',
        });
    }
}
DeletedSalesComponent.ɵfac = function DeletedSalesComponent_Factory(t) { return new (t || DeletedSalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_3__.VentaService)); };
DeletedSalesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DeletedSalesComponent, selectors: [["app-deleted-sales"]], decls: 21, vars: 2, consts: [[1, "container-fluid"], ["title", "Ventas Eliminadas", 3, "breadcrumbItems"], [1, "row", "justify-content-center", "Absolute-Center"], [1, "col-sm-12", "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title-desc", "text-danger"], [1, "row"], [1, "col-12", "col-sm-12"], [1, "mb-3"], ["for", "validationCustom01"], ["role", "toolbar", 1, "btn-toolbar"], ["class", "col-12 d-grid", 4, "appRole"], [1, "row", "my-2"], [1, "col"], [1, "text-sm-end", "mt-2", "mt-sm-0"], [1, "btn", "btn-success", 3, "click"], [1, "uil", "uil-store-alt", "me-1"], [1, "col-12", "d-grid"], [3, "formGroup"], ["ngbDropdown", ""], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName"]], template: function DeletedSalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "* Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Sede *");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, DeletedSalesComponent_div_14_Template, 4, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DeletedSalesComponent_Template_button_click_18_listener() { return ctx.exportarVentasEliminadas(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Descargar Archivo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("appRole", ctx.role);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__.PagetitleComponent, _directives_role_directive__WEBPACK_IMPORTED_MODULE_5__.RoleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGVkLXNhbGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _sale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale.service */ 64803);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable.directive */ 45180);
/* harmony import */ var src_models_venta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/venta */ 97072);
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/l10n/es.js */ 46563);
/* harmony import */ var flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 62962);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 85395);
/* harmony import */ var save_as_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! save-as-file */ 88083);
/* harmony import */ var src_utils_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/utils/functions */ 4680);
/* harmony import */ var src_models_sedes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/models/sedes */ 16550);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! xlsx */ 32551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/venta.service */ 91173);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/cliente.service */ 95686);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _directives_role_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../directives/role.directive */ 48185);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);


























function ListSalesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "form", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "ng-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function ListSalesComponent_div_12_Template_ng_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r7.changeSedes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r0.formSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", ctx_r0.nombre_sedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("items", ctx_r0.listSedes);
} }
function ListSalesComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ListSalesComponent_div_13_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r9.exportarVentas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r1.formDateRange.valid);
} }
function ListSalesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "form", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ListSalesComponent_div_15_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r11.filterDateRange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r2.formDateRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", ctx_r2.fechaDesde);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", ctx_r2.fechaHasta);
} }
const _c0 = function (a0) { return { "bg-soft-danger": a0 }; };
function ListSalesComponent_tr_55_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "Deuda \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](2, _c0, data_r13.tipo_venta[0].deuda > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", data_r13.tipo_venta[0].deuda, " ");
} }
function ListSalesComponent_tr_55_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ListSalesComponent_tr_55_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ListSalesComponent_tr_55_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21); const data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](64); return ctx_r20.centerModalActualizar(_r5, data_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ListSalesComponent_tr_55_a_25_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "i", 63);
} }
function ListSalesComponent_tr_55_a_25_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ListSalesComponent_tr_55_a_25_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r26); const data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r24.eliminar(data_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ListSalesComponent_tr_55_a_25_i_1_Template, 1, 0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("appRole", ctx_r18.role);
} }
function ListSalesComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "ngb-highlight", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "ngb-highlight", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "ngb-highlight", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "ngb-highlight", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "ngb-highlight", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, ListSalesComponent_tr_55_td_16_Template, 5, 4, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, ListSalesComponent_tr_55_td_17_Template, 3, 0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ListSalesComponent_tr_55_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28); const data_r13 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r27.createPDF(data_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "Pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](22, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](24, ListSalesComponent_tr_55_a_24_Template, 2, 0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, ListSalesComponent_tr_55_a_25_Template, 2, 1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("result", i_r14 + 1 + (ctx_r3.service.page - 1) * ctx_r3.service.pageSize)("term", ctx_r3.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](5, 15, data_r13.fecha_creacion_venta, "dd/MM/yyyy"))("term", ctx_r3.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", data_r13.nombre_cliente.charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("result", data_r13.nombre_cliente.toUpperCase())("term", ctx_r3.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](13, 18, data_r13.tipo_venta[0].precio_total, "S/ "))("term", ctx_r3.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("result", data_r13.nombre_vendedor.toUpperCase())("term", ctx_r3.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", data_r13.tipo_venta[0].deuda > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", data_r13.tipo_venta[0].deuda == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", data_r13.tipo_venta[0].deuda != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("appRole", ctx_r3.role);
} }
function ListSalesComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5, " Cargando ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_63_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_63_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_63_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ListSalesComponent_ng_template_63_div_29_div_1_Template, 2, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ListSalesComponent_ng_template_63_div_29_div_2_Template, 2, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r30.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].errors == null ? null : ctx_r30.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r30.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].errors == null ? null : ctx_r30.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].errors.pattern);
} }
function ListSalesComponent_ng_template_63_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_63_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ListSalesComponent_ng_template_63_div_35_div_1_Template, 2, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r31.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].errors == null ? null : ctx_r31.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].errors.required);
} }
function ListSalesComponent_ng_template_63_div_41_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_63_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ListSalesComponent_ng_template_63_div_41_span_1_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r32.form.title.errors.required);
} }
function ListSalesComponent_ng_template_63_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "th", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pago_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](i_r39 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](5, 4, pago_r38.cantidad_recibida, "S/ "));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](pago_r38.metodo_pago);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](10, 7, pago_r38.fecha_pago, "dd/MM/yyyy hh:mm:ss"));
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function ListSalesComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "h5", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "Actualizar Venta - Al Credito");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ListSalesComponent_ng_template_63_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r40.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "form", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "Nombres y Apellidos del Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "Deuda \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "Cantidad Recibida");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function ListSalesComponent_ng_template_63_Template_input_change_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r42.updatePago($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](29, ListSalesComponent_ng_template_63_div_29_Template, 3, 2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](34, "ng-select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](35, ListSalesComponent_ng_template_63_div_35_Template, 2, 1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](39, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](40, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](41, ListSalesComponent_ng_template_63_div_41_Template, 2, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](49, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](50, "table", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](53, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](54, "N\u00BA Cuotas");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](55, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](56, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](57, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](58, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](59, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](60, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](61, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](62, ListSalesComponent_ng_template_63_tr_62_Template, 11, 10, "tr", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](63, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](64, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](65, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](66, "Montos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](67, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](68, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](69, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](70, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](71, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](72, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](73, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](74, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](75, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](76, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](77, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](78, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](79, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](80, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](81, "Deuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](82, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](83, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](84, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](85, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](86, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](87, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](88, "textarea", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](89, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](90, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ListSalesComponent_ng_template_63_Template_button_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r43.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](91, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](92, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ListSalesComponent_ng_template_63_Template_button_click_92_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r41); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r44.guardarActualizacionDeuda(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](93, " Registrar Venta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r6.formCreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r6.usuario.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](25, _c0, 1 > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](21, 22, ctx_r6.usuario.deuda, "S/ "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", ctx_r6.cantidadRecibida_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r6.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].invalid && (ctx_r6.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].dirty || ctx_r6.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", ctx_r6.metodoPagoCreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("items", ctx_r6.listMetodosPagos);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r6.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].invalid && (ctx_r6.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].dirty || ctx_r6.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", ctx_r6.fechaVenta_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](27, _c1, ctx_r6.submitted && ctx_r6.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r6.submitted && ctx_r6.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Informaci\u00F3n de Pagos: ", ctx_r6.usuario.listDeudas[0].cuotas, " cuotas");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r6.usuario.listDeudas);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", ctx_r6.precioTotal_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](29, _c1, ctx_r6.submitted && ctx_r6.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", ctx_r6.pago_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](31, _c1, ctx_r6.submitted && ctx_r6.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", ctx_r6.cambio_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](33, _c1, ctx_r6.submitted && ctx_r6.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("formControlName", ctx_r6.observaciones_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r6.formCreditoActualizacion.valid);
} }
(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__.pdfMake.vfs;
class ListSalesComponent {
    constructor(service, fb, ventasService, modalService, customerService, usuarioService, ventaService) {
        this.service = service;
        this.fb = fb;
        this.ventasService = ventasService;
        this.modalService = modalService;
        this.customerService = customerService;
        this.usuarioService = usuarioService;
        this.ventaService = ventaService;
        this.role = 'Admin';
        this.nombre_sedes = "campoSede";
        this.idSede = "";
        this.mostrarSpinner = false;
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
            locale: (flatpickr_dist_l10n_es_js__WEBPACK_IMPORTED_MODULE_3___default().es),
        };
        this.fechaDesde = 'campoFechaDesde';
        this.fechaHasta = 'campoFechaHasta';
        this.venta = new src_models_venta__WEBPACK_IMPORTED_MODULE_2__.VentasModel;
        this.tipoPago = [];
        this.decimalPattern = /^\d+(\.\d{1,2})?$/;
        this.excelVentas = [];
        this.sedeActual = new src_models_sedes__WEBPACK_IMPORTED_MODULE_10__.SedesModel;
        this.transactions$ = service.transactions$;
        this.total$ = service.total$;
        service.mostrar.subscribe(res => {
            this.mostrarSpinner = res;
        });
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Venta' }, { label: 'Lista de Ventas', active: true }];
        this.getListSedes();
        this.crearFormulario();
    }
    getListSedes() {
        this.listSedes = JSON.parse(localStorage.getItem('sedes'));
        this.idSede = this.usuarioService.getSedebyUser();
        this.sedeActual = this.getSedeActual(this.idSede, this.listSedes);
    }
    getSedeActual(idSede, sedes) {
        let sedeActual = sedes.find(sede => sede.id_sede === idSede);
        return sedeActual;
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
    centerModalActualizar(centerDataModalActualizar, venta) {
        this.crearFormularioActualizar();
        this.fechaVenta = new Date(Date.now());
        /* venta.tipo_venta = venta.tipo_venta.sort((a,b)=> {
          return  new Date(a.fecha_pago).getTime() - new Date(b.fecha_pago).getTime()
        }); */
        const user = {
            nombre: venta.nombre_cliente,
            deuda: venta.tipo_venta[0].deuda,
            listDeudas: venta.tipo_venta
        };
        this.usuario = user;
        this.venta.id_ventas = venta.id_ventas;
        this.venta.id_cliente = venta.id_cliente;
        this.tipoPago = venta.tipo_venta;
        this.g(this.precioTotal_CreditoActualizacion).setValue((this.usuario.deuda).toFixed(2));
        this.modalService.open(centerDataModalActualizar, { centered: true, windowClass: 'modal-holder' });
        this.g(this.fechaVenta_CreditoActualizacion).setValue(this.fechaVenta.toLocaleDateString());
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
            [this.fechaDesde]: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            [this.fechaHasta]: []
        });
        this.formSedes = this.fb.group({
            [this.nombre_sedes]: [this.idSede]
        });
    }
    crearFormularioActualizar() {
        this.formCreditoActualizacion = this.fb.group({
            [this.cantidadRecibida_CreditoActualizacion]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(this.decimalPattern),
                ]],
            [this.fechaVenta_CreditoActualizacion]: [{ value: null, disabled: true }],
            [this.usuario_CreditoActualizacion]: [null],
            [this.precioTotal_CreditoActualizacion]: [{ value: null, disabled: true }],
            [this.pago_CreditoActualizacion]: [{ value: null, disabled: true }],
            [this.cambio_CreditoActualizacion]: [{ value: null, disabled: true }],
            [this.observaciones_CreditoActualizacion]: [null],
            [this.metodoPagoCreditoActualizacion]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required
                ]],
        });
    }
    g(campo) {
        return this.formCreditoActualizacion.get(campo);
    }
    updatePago(event) {
        this.g(this.pago_CreditoActualizacion).setValue(this.g(this.cantidadRecibida_CreditoActualizacion).value);
        const deuda = Number((0,src_utils_functions__WEBPACK_IMPORTED_MODULE_9__.round)(this.g(this.cantidadRecibida_CreditoActualizacion).value - this.usuario.deuda, 1).toFixed(2));
        this.g(this.cambio_CreditoActualizacion).setValue(Math.abs(deuda));
    }
    guardarActualizacionDeuda() {
        if (this.formCreditoActualizacion.valid) {
            this.venta.id_vendedor = this.usuarioService.getUser().id_usuario;
            this.venta.nombre_vendedor = this.usuarioService.getUser().nombres + ' ' + this.usuarioService.getUser().apellidos;
            this.venta.id_sede = this.usuarioService.getSedebyUser();
            let deuda = 0;
            deuda = (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_9__.round)(this.tipoPago[0].deuda - this.g(this.cantidadRecibida_CreditoActualizacion).value, 1);
            const pago = {
                forma_pago: "credito",
                cantidad_recibida: Number(this.g(this.cantidadRecibida_CreditoActualizacion).value),
                deuda: deuda,
                cuotas: this.tipoPago[0].cuotas,
                precio_total: this.tipoPago[0].precio_total,
                metodo_pago: this.g(this.metodoPagoCreditoActualizacion).value,
                fecha_pago: new Date(Date.now()),
                observaciones: this.g(this.observaciones_CreditoActualizacion).value
            };
            let listPago = [];
            if (this.tipoPago.length + 1 == Number(this.tipoPago[0].cuotas) && deuda > 0) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("error", "Es su última cuota, tiene que cancelar la totalidad");
                return;
            }
            //controla que la cantidad recibida sea menor a la deuda
            if (Number(this.g(this.cantidadRecibida_CreditoActualizacion).value > this.g(this.precioTotal_CreditoActualizacion).value)) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("error", "El pago debe ser menor a la deuda");
                return;
            }
            if (deuda <= 0) {
                pago.deuda = 0;
                listPago.push(pago);
                listPago.push(...this.tipoPago);
                this.venta.tipo_venta = listPago;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                    title: '¿Está seguro que desea cancelar la totalidad de la deuda?',
                    text: 'No se podrá revertir esto!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#34c38f',
                    cancelButtonColor: '#f46a6a',
                    confirmButtonText: 'Si, cancelar deuda!'
                }).then(result => {
                    if (result.value) {
                        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("loading", "Cargando...");
                        this.ventasService.updatePagoCuotas(this.venta.id_ventas, this.venta).subscribe(res => {
                            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("close", null);
                            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("success", "Venta completada");
                            this.modalService.dismissAll();
                            this.updateListVentas();
                        }, error => {
                            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("close", null);
                            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("error", "Error en la conexión");
                        });
                    }
                    else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().DismissReason.cancel)) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Cancelado', 'Venta no eliminada', 'error');
                    }
                });
            }
            else {
                listPago.push(pago);
                listPago.push(...this.tipoPago);
                this.venta.tipo_venta = listPago;
                this.ventasService.updatePagoCuotas(this.venta.id_ventas, this.venta).subscribe(res => {
                    this.modalService.dismissAll();
                    this.updateListVentas();
                });
            }
        }
        else {
            return;
        }
    }
    f(campo) {
        return this.formDateRange.get(campo);
    }
    filterDateRange() {
        if (this.formDateRange.valid) {
            this.idSede = this.fS(this.nombre_sedes).value;
            let fechaIni = new Date(this.f(this.fechaDesde).value + 'T00:00');
            let fechaFin;
            if (this.f(this.fechaHasta).value != null) {
                fechaFin = new Date(this.f(this.fechaHasta).value + 'T23:59');
            }
            else {
                fechaFin = new Date(Date.now());
                fechaFin.setHours(23, 59, 0);
            }
            //fechaIni.setDate(fechaIni.getDate() - 1)
            /* fechaFin.setDate(fechaFin.getDate() + 1)
            fechaIni.setHours(0,0,0);
            fechaFin.setHours(23,59,0) */
            this.ventasService.getVentasByDate(fechaIni, fechaFin, this.idSede).subscribe(res => {
                this.service.updateTable(res);
            });
        }
        else {
            return;
        }
    }
    eliminar(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: '¿Está seguro que desea eliminar la venta?',
            text: 'No se podrá revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#34c38f',
            cancelButtonColor: '#f46a6a',
            confirmButtonText: 'Si, eliminar!'
        }).then(result => {
            if (result.value) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("loading", "Cargando...");
                this.ventasService.darBajaVenta(data.id_ventas).subscribe(res => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("success", "Venta eliminada");
                    this.updateListVentas();
                }, error => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("error", "Error en la conexión");
                });
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().DismissReason.cancel)) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Cancelado', 'Venta no eliminada', 'error');
            }
        });
    }
    updateListVentas() {
        this.ventasService.getVentasbySede(this.idSede).subscribe(res => {
            this.service.updateTable(res);
        });
    }
    createPDF(venta) {
        this.customerService.getAllClientbyId(venta.id_cliente).subscribe((res) => {
            let tmp = Object.assign({}, res[0], venta);
            const { direccion: direccionCliente, telefono: telefonoCliente } = tmp, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__rest)(tmp, ["direccion", "telefono"]);
            const updatedObject = Object.assign({ direccionCliente, telefonoCliente }, rest);
            const objPDF = Object.assign({}, updatedObject, this.sedeActual);
            this.ventaService.getPDF(objPDF).subscribe(res => {
                const byteArray = new Uint8Array(atob(res)
                    .split("")
                    .map(char => char.charCodeAt(0)));
                const blob = new Blob([byteArray], { type: 'application/pdf' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.style.display = 'none';
                document.body.appendChild(a);
                a.href = url;
                a.download = "venta";
                a.click();
            });
        });
    }
    generatePDF(venta, cliente) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            var fonts = {
                Roboto: {
                    normal: 'fonts/Roboto-Regular.ttf',
                    bold: 'fonts/Roboto-Medium.ttf',
                    italics: 'fonts/Roboto-Italic.ttf',
                    bolditalics: 'fonts/Roboto-MediumItalic.ttf'
                },
            };
            var estadoBoleta = "Pagado";
            var fecha_hoy = new Date(venta.fecha_creacion_venta).toLocaleDateString('en-GB');
            //var fecha_hoy = new Date (Date.now()).toLocaleDateString('en-GB');
            var fecha_entrega = new Date(venta.fecha_creacion_venta).toLocaleDateString("es-CL", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric" // 2-digit
            });
            var hora_entrega = new Date(venta.fecha_creacion_venta).toLocaleTimeString("es-CL", {
                timeZone: "America/Bogota",
                hour12: true,
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit" // numeric
            });
            var simboloNuevoSol = 'S/. ';
            //var numeroBoleta = '0000418';
            var propietarioEmpresa = 'Raúl J. Condori Ramos';
            // var sedeEmpresa = venta.id_sede;
            var direccionEmpresa = this.sedeActual.direccion;
            var felefonoEmpresa = this.sedeActual.telefono;
            var rucEmpresa = this.sedeActual.ruc;
            var primeraNota = 'Todo trabajo se efectuara con un adelanto del 50%.';
            var segundaNota = 'La empresa no se responsabiliza de los pedidos no recogidos después de un mes.';
            var nombresCliente = cliente.nombres;
            var apellidosCliente = cliente.apellidos;
            var dniCliente = cliente.dni ? cliente.dni : "Sin especificar.";
            ;
            // var fnacimientoCliente = cliente.fecha_nacimiento ? new Date(cliente.fecha_nacimiento).toLocaleDateString('en-GB') : "Sin especificar.";
            var direccionCliente = cliente.direccion ? cliente.direccion : "Sin especificar.";
            // var telefonoCliente = cliente.telefono ? cliente.telefono : "Sin especificar.";
            var od_esf_Cliente = cliente.medidas[0].od_esferico > 0 ? '+' + cliente.medidas[0].od_esferico.toFixed(2) : cliente.medidas[0].od_esferico.toFixed(2);
            var od_cil_Cliente = cliente.medidas[0].od_cilindrico > 0 ? '+' + cliente.medidas[0].od_cilindrico.toFixed(2) : cliente.medidas[0].od_cilindrico.toFixed(2);
            var od_eje_Cliente = cliente.medidas[0].od_eje;
            var oi_esf_Cliente = cliente.medidas[0].oi_esferico > 0 ? '+' + cliente.medidas[0].oi_esferico.toFixed(2) : cliente.medidas[0].oi_esferico.toFixed(2);
            var oi_cil_Cliente = cliente.medidas[0].oi_cilindrico > 0 ? '+' + cliente.medidas[0].oi_cilindrico.toFixed(2) : cliente.medidas[0].oi_cilindrico.toFixed(2);
            var oi_eje_Cliente = cliente.medidas[0].oi_eje;
            var dip_Cliente = cliente.medidas[0].dip;
            var add_Cliente = cliente.medidas[0].add > 0 ? '+' + cliente.medidas[0].add.toFixed(2) : cliente.medidas[0].add.toFixed(2);
            var externalDataRetrievedFromServer = [];
            // var peruIGV = 0.18;
            function buildData() {
                var numOrdenItems = 0;
                var totalMonturas, totallunas, totalAccesorios = 0;
                var subTotal = 0;
                // Monturas
                if (venta.list_monturas.length > 0) {
                    for (var i = 0; i < venta.list_monturas.length; i++) {
                        numOrdenItems += 1;
                        totalMonturas = venta.list_monturas[i].precio_montura_v * venta.list_monturas[i].cant_vendida;
                        subTotal += totalMonturas;
                        externalDataRetrievedFromServer.push({ num_orden: numOrdenItems, detalle: venta.list_monturas[i].marca + ' Cód. int.: ' + venta.list_monturas[i].codigo + ' Color: ' + venta.list_monturas[i].color, precio: venta.list_monturas[i].precio_montura_v, cantidad: venta.list_monturas[i].cant_vendida, total: totalMonturas }); // Añade
                    }
                }
                // Lunas
                if (venta.list_lunas.length > 0) {
                    for (var i = 0; i < venta.list_lunas.length; i++) {
                        numOrdenItems += 1;
                        totallunas = venta.list_lunas[i].precio_luna_v * venta.list_lunas[i].cant_vendida;
                        subTotal += totallunas;
                        externalDataRetrievedFromServer.push({ num_orden: numOrdenItems, detalle: venta.list_lunas[i].material, precio: venta.list_lunas[i].precio_luna_v, cantidad: venta.list_lunas[i].cant_vendida, total: totallunas }); // Añade
                    }
                }
                // Accesorios
                if (venta.list_accesorios.length > 0) {
                    for (var i = 0; i < venta.list_accesorios.length; i++) {
                        numOrdenItems += 1;
                        totalAccesorios = venta.list_accesorios[i].precio_accesorio_v * venta.list_accesorios[i].cant_vendida;
                        subTotal += totalAccesorios;
                        externalDataRetrievedFromServer.push({ num_orden: numOrdenItems, detalle: venta.list_accesorios[i].nombre_accesorio, precio: venta.list_accesorios[i].precio_accesorio_v, cantidad: venta.list_accesorios[i].cant_vendida, total: totalAccesorios }); // Añade
                    }
                }
                return subTotal;
            }
            function buildTableBody(data, columns, subtotal) {
                var body = [];
                body.push([{ text: 'No.', style: 'title', alignment: 'center', fillColor: '#d8e3fc', margin: [0, 3, 0, 3] }, { text: 'Detalle', style: 'title', alignment: 'center', fillColor: '#d8e3fc', margin: [0, 3, 0, 3] }, { text: 'P. Unit.', style: 'title', alignment: 'center', fillColor: '#d8e3fc', margin: [0, 3, 0, 3] }, { text: 'Cant.', style: 'title', alignment: 'center', fillColor: '#d8e3fc', margin: [0, 3, 0, 3] }, { text: 'Importe', style: 'title', alignment: 'center', fillColor: '#d8e3fc', margin: [0, 3, 0, 3] }]);
                data.forEach(function (row) {
                    var dataRow = [];
                    columns.forEach(function (column) {
                        if (column === 'num_orden') {
                            dataRow.push({ text: row[column].toString(), style: 'text', alignment: 'center', margin: [0, 2, 0, 2] });
                        }
                        else if (column === 'detalle') {
                            dataRow.push({ text: row[column].toString(), style: 'text', alignment: 'left', margin: [0, 2, 0, 2] });
                        }
                        else {
                            dataRow.push({ text: row[column].toString(), style: 'text', alignment: 'right', margin: [0, 2, 0, 2] });
                        }
                    });
                    body.push(dataRow);
                });
                /* var totalIGV = round(subtotal * peruIGV, 2);
                var total = round(subtotal + totalIGV, 1);  */
                var total = (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_9__.round)(subtotal, 1);
                /* body.push([{ text: ' ', rowSpan: 3, colSpan: 2}, { }, {text: 'Sub. Total:', style: 'tableHeader', alignment: 'right', colSpan: 2 }, { }, { text: simboloNuevoSol + subtotal, style: 'contenido', alignment: 'right' }]);
                body.push([{ }, { }, { text: 'IGV (18%) :', style: 'tableHeader', alignment: 'right', colSpan: 2}, { }, { text: simboloNuevoSol + totalIGV, style: 'contenido', alignment: 'right' }]); */
                /* body.push([{ text: '', borderColor: ['#FFFFFF', , , '#FFFFFF'], colSpan: 3 }, {  }, {  }, { text: 'Total:', style: 'tableHeader', alignment: 'right' }, { text: simboloNuevoSol + total, style: 'contenido', alignment: 'right' }]); */
                body.push([{ text: '', border: [false, false, false, false], colSpan: 2 }, {}, { text: 'Total:', style: 'title', alignment: 'right', colSpan: 2, margin: [0, 2, 0, 2] }, {}, { text: simboloNuevoSol + total, style: 'title', alignment: 'right', margin: [0, 2, 0, 2] }]);
                return body;
            }
            function table(data, columns) {
                var subtotal = buildData();
                return {
                    style: 'tableBasic',
                    color: '#444',
                    table: {
                        widths: [25, '*', 45, 35, 55],
                        headerRows: 1,
                        body: buildTableBody(data, columns, subtotal)
                    }
                };
            }
            function estadoBoletaFunc(estado) {
                return {
                    text: estado, background: 'yellow'
                };
            }
            const pdfDefinition = {
                pageSize: 'A4',
                //pageOrientation: 'landscape',
                pageMargins: [40, 10, 40, 10],
                content: [
                    // LOGO y DATOS DE LA EMPRESA
                    {
                        style: 'tableBasic',
                        table: {
                            widths: [340, '*'],
                            body: [
                                [
                                    [
                                        {
                                            table: {
                                                widths: ['*'],
                                                body: [
                                                    [{ image: "data:image/png;base64,", width: 230 }],
                                                    //[{ image: 'MyImage', width: 230}],
                                                    [{ text: 'De ' + propietarioEmpresa, alignment: 'center' }],
                                                ]
                                            },
                                            layout: {
                                                defaultBorder: false,
                                            }
                                        },
                                    ],
                                    [
                                        {
                                            table: {
                                                widths: ['*'],
                                                body: [
                                                    [{ text: 'R.U.C. ' + rucEmpresa, style: 'title', alignment: 'center', margin: [0, 6, 0, 6] }],
                                                    [{ text: 'BOLETA DE VENTA', style: 'title2', alignment: 'center', fillColor: '#2D4497', fillOpacity: 0.80, margin: [0, 6, 0, 6] }],
                                                    //[{ text: '001- Nº ' + numeroBoleta, style: 'title', color: 'red', alignment: 'center', margin: [0, 6, 0, 6] }],
                                                ]
                                            },
                                        },
                                    ],
                                ]
                            ]
                        },
                        layout: {
                            defaultBorder: false,
                        }
                    },
                    {
                        style: 'tableBasic',
                        table: {
                            widths: ['*', '*'],
                            body: [
                                [{ text: direccionEmpresa, style: 'header', fillColor: '#2D4497', fillOpacity: 0.80 }, { text: 'Cel: ' + felefonoEmpresa, style: 'header', fillColor: '#2D4497', fillOpacity: 0.80 }],
                            ]
                        },
                        layout: {
                            defaultBorder: false,
                        }
                    },
                    // DATOS DEL CLIENTE
                    {
                        style: 'tableBasic',
                        table: {
                            widths: ['*', '*'],
                            body: [
                                [{ text: 'Señor(a): ' + nombresCliente + apellidosCliente, style: 'title', alignment: 'left', Span: 1 }, {}],
                                [{ text: 'Dirección: ' + direccionCliente, style: 'text', alignment: 'left' }, { text: 'DNI: ' + dniCliente, style: 'text', alignment: 'left' }],
                            ]
                        },
                        layout: {
                            vLineWidth: function (i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 1 : 0;
                            },
                        }
                    },
                    // RESUMEN DEL PEDIDO
                    {
                        style: 'tableBasic',
                        table: {
                            widths: [150],
                            heights: [15],
                            body: [
                                [{ text: 'RESUMEN DEL PEDIDO: ', style: 'title2', alignment: 'left', fillColor: '#2D4497', fillOpacity: 0.80 }],
                            ]
                        },
                        layout: {
                            defaultBorder: false,
                            paddingLeft: function (i, node) { return 10; },
                        }
                    },
                    table(externalDataRetrievedFromServer, ['num_orden', 'detalle', 'precio', 'cantidad', 'total']),
                    // DETALLE DE LA MEDIDA
                    {
                        style: 'tableBasic',
                        table: {
                            widths: [150],
                            heights: [15],
                            body: [
                                [{ text: 'DETALLE DE LA MEDIDA: ', style: 'title2', alignment: 'left', fillColor: '#2D4497', fillOpacity: 0.80 }],
                            ]
                        },
                        layout: {
                            defaultBorder: false,
                            paddingLeft: function (i, node) { return 10; },
                        }
                    },
                    {
                        style: 'tableBasic',
                        table: {
                            widths: ['*', '*', '*', '*', '*', '*'],
                            heights: [15, 15, 15],
                            headerRows: 2,
                            body: [
                                [{ text: 'REF.', style: 'title', alignment: 'center', margin: [0, 2, 0, 2] }, { text: 'ESF.', style: 'title', alignment: 'center', margin: [0, 2, 0, 2] }, { text: 'CIL.', style: 'title', alignment: 'center', margin: [0, 2, 0, 2] }, { text: 'EJE.', style: 'title', alignment: 'center', margin: [0, 2, 0, 2] }, { text: 'AV.', style: 'title', alignment: 'center', margin: [0, 2, 0, 2] }, { text: 'DIP.', style: 'title', alignment: 'center', margin: [0, 2, 0, 2] }],
                                [{ text: 'O.D.', style: 'title', alignment: 'center', margin: [0, 1, 0, 1] }, { text: od_esf_Cliente, style: 'text', alignment: 'center', margin: [0, 1, 0, 1] }, { text: od_cil_Cliente, style: 'text', alignment: 'center', margin: [0, 1, 0, 1] }, { text: od_eje_Cliente, style: 'text', alignment: 'center', margin: [0, 1, 0, 1] }, { text: '', style: 'text', alignment: 'center', margin: [0, 1, 0, 1] }, { text: dip_Cliente, style: 'text', alignment: 'center', margin: [0, 1, 0, 1] }],
                                [{ text: 'O.I.', style: 'title', alignment: 'center', margin: [0, 1, 0, 1] }, { text: oi_esf_Cliente, style: 'text', alignment: 'center', margin: [0, 1, 0, 1] }, { text: oi_cil_Cliente, style: 'text', alignment: 'center', margin: [0, 1, 0, 1] }, { text: oi_eje_Cliente, style: 'text', alignment: 'center', margin: [0, 1, 0, 1] }, { text: '', style: 'text', alignment: 'center', margin: [0, 1, 0, 1] }, { text: dip_Cliente, style: 'text', alignment: 'center', margin: [0, 1, 0, 1] }],
                            ]
                        },
                        layout: {
                            fillColor: function (rowIndex) {
                                return (rowIndex === 0) ? '#d8e3fc' : null;
                            }
                        }
                    },
                    // VISION DE CERCA 
                    {
                        style: 'tableBasic',
                        table: {
                            widths: [150, '*', 150],
                            heights: [15],
                            body: [
                                [
                                    { text: 'VISIÓN DE CERCA: ', alignment: 'left', style: 'title2', fillColor: '#2D4497', fillOpacity: 0.80 },
                                    [
                                        {
                                            table: {
                                                widths: ['auto', '*'],
                                                body: [
                                                    [
                                                        { text: 'ADD.', style: 'title', alignment: 'center', fillColor: '#d8e3fc' },
                                                        { text: add_Cliente, style: 'text', alignment: 'center' }
                                                    ],
                                                ]
                                            },
                                        },
                                    ],
                                    {}
                                ]
                            ]
                        },
                        layout: {
                            defaultBorder: false,
                            paddingLeft: function (i, node) { return 10; },
                        }
                    },
                    // FECHA DE ENTREGA
                    {
                        style: 'tableBasic',
                        table: {
                            widths: [140, '*', 50, 'auto'],
                            body: [
                                [{ text: 'FECHA DE ENTREGA: ', style: 'title2', alignment: 'left', fillColor: '#2D4497', fillOpacity: 0.80 }, { text: fecha_entrega, style: 'text', alignment: 'left', margin: [0, 1, 0, 1] }, { text: 'HORA: ', style: 'title2', alignment: 'left', fillColor: '#2D4497', fillOpacity: 0.80 }, { text: hora_entrega, style: 'text', alignment: 'left', margin: [0, 1, 0, 1] }],
                            ]
                        },
                        layout: {
                            defaultBorder: false,
                            paddingLeft: function (i, node) { return 10; },
                        }
                    },
                    // NOTAS
                    {
                        style: 'tableBasic',
                        table: {
                            widths: [350, '*'],
                            body: [
                                [{ text: 'NOTA: ', color: '#2D4497', style: 'subtitle', alignment: 'left' }, {}],
                                [{ text: primeraNota, color: '#2D4497', style: 'small', alignment: 'left' }, {}],
                                [{ text: segundaNota, color: '#2D4497', style: 'small', alignment: 'left' }, {}],
                            ]
                        },
                        layout: {
                            defaultBorder: false,
                        }
                    },
                ],
                styles: {
                    header: {
                        fontSize: 15,
                        bold: true,
                        color: 'white',
                        alignment: 'center',
                        margin: [0, 0, 0, 0],
                    },
                    title: {
                        fontSize: 13,
                        bold: true,
                        color: '#2D4497',
                        margin: [0, 0, 0, 0],
                    },
                    title2: {
                        fontSize: 13,
                        bold: true,
                        color: 'white',
                        margin: [0, 0, 0, 0],
                    },
                    subtitle: {
                        fontSize: 12,
                        bold: true,
                        color: '#2D4497',
                        margin: [0, 0, 0, 0],
                    },
                    text: {
                        fontSize: 11,
                        color: '#2D4497',
                        margin: [0, 0, 0, 0],
                    },
                    small: {
                        fontSize: 9,
                        color: '#2D4497',
                        margin: [0, 0, 0, 0],
                    },
                    tableBasic: {
                        color: '#2D4497',
                        margin: [0, 5, 0, 5],
                    },
                },
            };
            const pdf = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default().createPdf(pdfDefinition);
            pdf.open();
        });
    }
    fS(campo) {
        return this.formSedes.get(campo);
    }
    changeSedes() {
        this.idSede = this.fS(this.nombre_sedes).value;
        this.getListVentas(this.idSede);
        this.sedeActual = this.getSedeActual(this.idSede, this.listSedes);
    }
    getListVentas(sede) {
        this.ventasService.getVentasbySede(sede).subscribe(res => {
            this.service.updateTable(res);
        });
    }
    exportarVentas() {
        if (this.formSedes.valid && this.formDateRange.valid) {
            let data = [];
            const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            const EXCEL_EXTENSION = '.xlsx';
            this.idSede = this.fS(this.nombre_sedes).value;
            let fechaIni = new Date(this.f(this.fechaDesde).value + 'T00:00');
            let fechaFin;
            if (this.f(this.fechaHasta).value != null) {
                fechaFin = new Date(this.f(this.fechaHasta).value + 'T23:59');
            }
            else {
                fechaFin = new Date(Date.now());
                fechaFin.setHours(23, 59, 0);
            }
            let monturas = {};
            let lunas = {};
            let accesorios = {};
            this.ventaService.getVentasByDate(fechaIni, fechaFin, this.idSede).subscribe(res => {
                this.excelVentas = res;
                data = this.excelVentas.map((ventas) => {
                    let monturasTemp = {};
                    let lunasTemp = {};
                    let accesoriosTemp = {};
                    for (var ind = 0; ind < ventas.list_monturas.length; ind++) {
                        monturasTemp[`MONT ${(ind + 1)} CODIGO`] = ventas.list_monturas[ind].codigo;
                        monturasTemp[`MONT ${(ind + 1)} P VENTA`] = ventas.list_monturas[ind].precio_montura_v;
                        monturasTemp[`MONT ${(ind + 1)} P COMPRA`] = ventas.list_monturas[ind].precio_montura_c;
                        monturasTemp[`MONT ${(ind + 1)} CANT VENDIDA`] = ventas.list_monturas[ind].cant_vendida;
                        monturasTemp[`MONT ${(ind + 1)} MARCA`] = ventas.list_monturas[ind].marca;
                        monturasTemp[`MONT ${(ind + 1)} MATERIAL`] = ventas.list_monturas[ind].material;
                        monturasTemp[`MONT ${(ind + 1)} COLOR`] = ventas.list_monturas[ind].color;
                    }
                    monturas = Object.assign({}, monturasTemp);
                    for (var ind = 0; ind < ventas.list_lunas.length; ind++) {
                        lunasTemp[`LUN ${(ind + 1)} P VENTA`] = ventas.list_lunas[ind].precio_luna_v;
                        lunasTemp[`LUN ${(ind + 1)} P COMPRA`] = ventas.list_lunas[ind].precio_luna_c;
                        lunasTemp[`LUN ${(ind + 1)} CANT VENDIDA`] = ventas.list_lunas[ind].cant_vendida;
                        lunasTemp[`LUN ${(ind + 1)} MATERIAL`] = ventas.list_lunas[ind].material;
                    }
                    lunas = Object.assign({}, lunasTemp);
                    for (var ind = 0; ind < ventas.list_accesorios.length; ind++) {
                        accesoriosTemp[`LUN ${(ind + 1)} P VENTA`] = ventas.list_accesorios[ind].precio_accesorio_v;
                        accesoriosTemp[`LUN ${(ind + 1)} P COMPRA`] = ventas.list_accesorios[ind].precio_accesorio_c;
                        accesoriosTemp[`LUN ${(ind + 1)} CANT VENDIDA`] = ventas.list_accesorios[ind].cant_vendida;
                        accesoriosTemp[`LUN ${(ind + 1)} NOMBRE`] = ventas.list_accesorios[ind].nombre_accesorio;
                    }
                    accesorios = Object.assign({}, accesoriosTemp);
                    if (ventas.hasOwnProperty("medidas")) {
                        return Object.assign({}, {
                            "FECHA": new Date(ventas.fecha_creacion_venta).toLocaleDateString('en-GB'),
                            "NOMBRE CLIENTE": ventas.nombre_cliente,
                            //"ACCESORIOS": JSON.stringify(accesorios),
                            //"LUNAS": JSON.stringify(lunas),
                            //"MONTURAS": JSON.stringify(monturas),
                            "TOTAL": ventas.tipo_venta[0].precio_total == 0 ? "+0.00" : ventas.tipo_venta[0].precio_total,
                            "ESF D": ventas.medidas[0].od_esferico == 0 ? "+0.00" : ventas.medidas[0].od_esferico,
                            "CYL D": ventas.medidas[0].od_cilindrico == 0 ? "+0.00" : ventas.medidas[0].od_cilindrico,
                            "EJE D": ventas.medidas[0].od_eje == 0 ? "+0.00" : ventas.medidas[0].od_eje,
                            "ESF I": ventas.medidas[0].oi_esferico == 0 ? "+0.00" : ventas.medidas[0].oi_esferico,
                            "CYL I": ventas.medidas[0].oi_cilindrico == 0 ? "+0.00" : ventas.medidas[0].oi_cilindrico,
                            "EJE I": ventas.medidas[0].oi_eje == 0 ? "+0.00" : ventas.medidas[0].oi_eje,
                            "DIP": ventas.medidas[0].dip == 0 ? "+0.00" : ventas.medidas[0].dip,
                            "ADD": ventas.medidas[0].add == 0 ? "+0.00" : ventas.medidas[0].add,
                            "USUARIO": ventas.nombre_vendedor.toUpperCase(),
                            "VENDEDOR": ventas.nombre_jalador ? ventas.nombre_jalador.toUpperCase() : null,
                            "ENCARGADO MEDICION": ventas.encargado_medicion ? ventas.encargado_medicion.toUpperCase() : null,
                            "FORMA DE PAGO": ventas.tipo_venta[0].forma_pago.toUpperCase(),
                            "ESTADO": ventas.tipo_venta[0].deuda > 0 ? "DEUDA" : "PAGADO"
                        }, monturas, lunas, accesorios);
                    }
                    else {
                        return Object.assign({}, {
                            "FECHA": new Date(ventas.fecha_creacion_venta).toLocaleDateString('en-GB'),
                            "NOMBRE CLIENTE": ventas.nombre_cliente,
                            //"ACCESORIOS": JSON.stringify(accesorios),
                            //"LUNAS": JSON.stringify(lunas),
                            //"MONTURAS": JSON.stringify(monturas),
                            "TOTAL": ventas.tipo_venta[0].precio_total == 0 ? "+0.00" : ventas.tipo_venta[0].precio_total,
                            "USUARIO": ventas.nombre_vendedor.toUpperCase(),
                            "VENDEDOR": ventas.nombre_jalador ? ventas.nombre_jalador.toUpperCase() : null,
                            "ENCARGADO MEDICION": ventas.encargado_medicion ? ventas.encargado_medicion.toUpperCase() : null,
                            "FORMA DE PAGO": ventas.tipo_venta[0].forma_pago,
                            "ESTADO": ventas.tipo_venta[0].deuda > 0 ? "DEUDA" : "PAGADO",
                        }, monturas, lunas, accesorios);
                    }
                });
                const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_19__.utils.json_to_sheet(data);
                const workbook = {
                    Sheets: {
                        'hoja': worksheet
                    },
                    SheetNames: ['hoja']
                };
                const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_19__.write(workbook, { bookType: 'xlsx', type: 'array' });
                const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE });
                const nombreSede = this.listSedes.find(res => (res.id_sede == this.fS(this.nombre_sedes).value));
                (0,save_as_file__WEBPACK_IMPORTED_MODULE_8__["default"])(blobData, 'ventas' + '_' + nombreSede.nombre_sede);
            });
        }
        else {
            return;
        }
    }
}
ListSalesComponent.ɵfac = function ListSalesComponent_Factory(t) { return new (t || ListSalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_sale_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_11__.VentaService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_12__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_13__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_11__.VentaService)); };
ListSalesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: ListSalesComponent, selectors: [["app-list-sales"]], viewQuery: function ListSalesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([_sale_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService, _angular_common__WEBPACK_IMPORTED_MODULE_21__.DecimalPipe])], decls: 65, vars: 22, consts: [[1, "container-fluid"], ["title", "Ventas", 3, "breadcrumbItems"], [1, "row"], [1, "col-md-6", "mb-2"], [1, "form-inline"], [1, "search-box", "ml-2"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar venta", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "border-light", "rounded", 3, "ngModel", "ngModelChange"], [1, "uil", "uil-search", "search-icon"], ["role", "toolbar", 1, "btn-toolbar"], ["class", "col-12 col-md-6 d-grid mb-2 chat-search-box px-1", 4, "appRole"], ["class", "col-12 col-md-6 d-grid", 4, "appRole"], [1, "row", "md-2"], ["class", "col-md-6 d-grid mb-2 chat-search-box px-1", 4, "appRole"], [1, "col-md-6"], [1, "dataTables_length", "text-md-end"], [1, "d-inline-flex", "align-items-center"], ["name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "col-12"], [1, "table-responsive", "mb-4"], [1, "table", "datatables", "table-centered", "table-nowrap", "mb-0", "align-middle", "table-card-list", 2, "border-spacing", "0 12px", "width", "100%"], [1, "bg-transparent"], ["scope", "col", "sortable", "orden", 3, "sort"], ["scope", "col", "sortable", "fecha_creacion_venta", 3, "sort"], ["scope", "col", "sortable", "nombre_cliente", 3, "sort"], ["scope", "col", "sortable", "", 3, "sort"], ["scope", "col", "sortable", "nombre_vendedor", 3, "sort"], [2, "width", "170px"], ["class", "odd", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "row", "justify-content-md-between", "align-items-md-center"], [1, "text-md-end", "float-md-end", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["centerDataModalActualizarVenta", ""], [1, "col-12", "col-md-6", "d-grid", "mb-2", "chat-search-box", "px-1"], [3, "formGroup"], ["ngbDropdown", ""], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName", "change"], [1, "col-12", "col-md-6", "d-grid"], [1, "btn-group", "mb-2"], ["type", "button", "value", "Descargar Archivo", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "col-md-6", "d-grid", "mb-2", "chat-search-box", "px-1"], [1, "input-daterange", "input-group"], ["type", "date", "id", "billing-fechanacimiento", "placeholder", "Seleccione la fecha", 1, "form-control", 3, "formControlName"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "mdi", "mdi-filter-variant"], [1, "odd"], [3, "result", "term"], [1, "avatar-xs", "d-inline-block", "me-2"], [1, "avatar-title", "rounded-circle", "bg-light", "text-body"], [4, "ngIf"], [1, "btn", "btn-light", "btn-sm", "w-xs", 3, "click"], [1, "uil", "uil-download-alt", "ms-2"], ["class", "px-3 text-primary", "placement", "top", "ngbTooltip", "Editar", 3, "click", 4, "ngIf"], ["class", "px-3 text-danger", "placement", "top", "ngbTooltip", "Eliminar", 3, "click", 4, "appRole"], [1, "text-danger"], [1, "badge", "rounded-pill", "bg-soft-success", "font-size-12", 3, "ngClass"], [1, "text-success"], ["placement", "top", "ngbTooltip", "Editar", 1, "px-3", "text-primary", 3, "click"], [1, "uil", "uil-pen", "font-size-18"], ["placement", "top", "ngbTooltip", "Eliminar", 1, "px-3", "text-danger", 3, "click"], ["class", "uil uil-trash-alt font-size-18", 4, "appRole"], [1, "uil", "uil-trash-alt", "font-size-18"], [1, "text-center", "my-3"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "mdi", "mdi-loading", "mdi-spin", "font-size-20", "align-middle", "me-2"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [1, "col-lg-14"], [1, "col-sm-6"], [1, "mb-3"], [1, "control-label"], [1, "text-muted", "text-sm-end"], [1, "mt-4"], [1, "text-danger", "font-size-16"], [1, "badge", "rounded-pill", "bg-soft-success", "font-size-16", 3, "ngClass"], [1, "border-top", "pt-4"], [1, "col-4"], ["placeholder", "Cantidad en soles", "type", "text", "name", "nameCantidadRecibidaCredito", 1, "form-control", 3, "formControlName", "change"], ["class", "text-danger", 4, "ngIf"], [1, "form-label"], ["name", "selectMetodo", "placeholder", "Seleccione", 3, "items", "formControlName"], ["placeholder", "Seleccione la fecha", "type", "text", "name", "nameFechaRegistroCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-sm-12"], [1, "table-responsive"], [1, "table", "table-sm", "m-0", "table-centered"], [2, "width", "77px"], [4, "ngFor", "ngForOf"], [1, "control-label", 2, "text-align", "left"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameTotalCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "namePagoCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameCambioCredito", 1, "form-control", 3, "formControlName", "ngClass"], [1, "col-lg-12"], [1, "mb-4"], ["for", "billing-observaciones", 1, "form-label"], ["id", "billing-observaciones", "rows", "3", "placeholder", "Ingrese las observaciones", 1, "form-control", 3, "formControlName"], [1, "text-end", "mt-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "disabled", "click"], [1, "invalid-feedback"], ["scope", "row"]], template: function ListSalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ListSalesComponent_Template_input_ngModelChange_7_listener($event) { return ctx.service.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, ListSalesComponent_div_12_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, ListSalesComponent_div_13_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](15, ListSalesComponent_div_15_Template, 8, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "Mostrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function ListSalesComponent_Template_select_ngModelChange_20_listener($event) { return ctx.service.pageSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29, " entradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_38_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](39, "Ord.");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_40_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](41, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_42_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](43, "Nombre del Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_44_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](45, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](46, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_46_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](47, "Vendedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_48_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](49, "Estado de Pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](50, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_50_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](51, "Descargar Pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](53, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](55, ListSalesComponent_tr_55_Template, 26, 21, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](56, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](57, ListSalesComponent_div_57_Template, 6, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](58, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](61, "ngb-pagination", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("pageChange", function ListSalesComponent_Template_ngb_pagination_pageChange_61_listener($event) { return ctx.service.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](62, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](63, ListSalesComponent_ng_template_63_Template, 94, 35, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("appRole", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("appRole", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("appRole", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.service.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngValue", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](56, 18, ctx.transactions$));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](62, 20, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize)("maxSize", 5)("rotate", true)("boundaryLinks", true);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_14__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _directives_role_directive__WEBPACK_IMPORTED_MODULE_15__.RoleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbPagination, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbDropdown, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbHighlight, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXNhbGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 78068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/venta.service */ 91173);
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
    var _a, _b, _c, _d;
    return ((_a = String(transaction.fecha_creacion_venta)) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(term.toLowerCase()))
        || ((_b = transaction.nombre_cliente) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(term.toLowerCase()))
        || ((_c = String(transaction.tipo_venta[0].precio_total)) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes(term.toLowerCase()))
        || ((_d = transaction.nombre_vendedor) === null || _d === void 0 ? void 0 : _d.toLowerCase().includes(term.toLowerCase()));
}
class TransactionService {
    constructor(pipe, ventaService, usuarioService) {
        this.pipe = pipe;
        this.ventaService = ventaService;
        this.usuarioService = usuarioService;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        this._mostrar$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this._ventas$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
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
    updateTable(data) {
        this.ventaList = data;
        this._mostrar$.next(true);
        this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this._loading$.next(false))).subscribe(result => {
            this._ventas$.next(result.transactions);
            this._total$.next(result.total);
        });
        this._search$.next();
    }
    get transactions$() { return this._ventas$.asObservable(); }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    get mostrar() { return this._mostrar$.asObservable(); }
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
        let transactions = sort(this.ventaList, sortColumn, sortDirection);
        // 2. filter
        transactions = transactions.filter(transaction => matches(transaction, searchTerm, this.pipe));
        const total = transactions.length;
        // 3. paginate
        transactions = transactions.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({ transactions, total });
    }
    //Servicio 
    getAllVentas() {
        this.ventaService.getVentasbySede(this.usuarioService.getSedebyUser()).subscribe(res => {
            this.ventaList = res;
            this._mostrar$.next(true);
            this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this._loading$.next(false))).subscribe(result => {
                this._ventas$.next(result.transactions);
                this._total$.next(result.total);
            });
            this._search$.next();
        });
    }
}
TransactionService.ɵfac = function TransactionService_Factory(t) { return new (t || TransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_0__.VentaService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService)); };
TransactionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: TransactionService, factory: TransactionService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 85298);
/* harmony import */ var _add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-sale/add-sale.component */ 27947);
/* harmony import */ var _list_sales_list_sales_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-sales/list-sales.component */ 33605);
/* harmony import */ var _deleted_sales_deleted_sales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleted-sales/deleted-sales.component */ 93104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);







const routes = [
    {
        path: 'addsale',
        component: _add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_1__.AddSaleComponent,
        data: {
            role: ['Vendedor', 'Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'listsales',
        component: _list_sales_list_sales_component__WEBPACK_IMPORTED_MODULE_2__.ListSalesComponent,
        data: {
            role: ['Vendedor', 'Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'deletesales',
        component: _deleted_sales_deleted_sales_component__WEBPACK_IMPORTED_MODULE_3__.DeletedSalesComponent,
        data: {
            role: ['Vendedor', 'Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
class SaleRoutingModule {
}
SaleRoutingModule.ɵfac = function SaleRoutingModule_Factory(t) { return new (t || SaleRoutingModule)(); };
SaleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SaleRoutingModule });
SaleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SaleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng5-slider */ 38391);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 68346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 85362);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var _add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-sale/add-sale.component */ 27947);
/* harmony import */ var _sale_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale-routing.module */ 55666);
/* harmony import */ var _list_sales_list_sales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-sales/list-sales.component */ 33605);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-ng-autocomplete */ 84933);
/* harmony import */ var src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/directives/role.module */ 2974);
/* harmony import */ var _deleted_sales_deleted_sales_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deleted-sales/deleted-sales.component */ 93104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
















class SaleModule {
}
SaleModule.ɵfac = function SaleModule_Factory(t) { return new (t || SaleModule)(); };
SaleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SaleModule });
SaleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__.DROPZONE_CONFIG,
            useValue: rxjs__WEBPACK_IMPORTED_MODULE_10__.config
        }
    ], imports: [[
            _sale_routing_module__WEBPACK_IMPORTED_MODULE_4__.SaleRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownModule,
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__.DropzoneModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
            ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbCollapseModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_15__.AutocompleteLibModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
            src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_6__.DirectivesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SaleModule, { declarations: [_add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_3__.AddSaleComponent, _list_sales_list_sales_component__WEBPACK_IMPORTED_MODULE_5__.ListSalesComponent, _deleted_sales_deleted_sales_component__WEBPACK_IMPORTED_MODULE_7__.DeletedSalesComponent], imports: [_sale_routing_module__WEBPACK_IMPORTED_MODULE_4__.SaleRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__.DropzoneModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
        ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbTypeaheadModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbCollapseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_15__.AutocompleteLibModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_6__.DirectivesModule] }); })();


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
    getVentasbySede(idSede) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllVentasBySede/' + idSede);
    }
    getVentasByDate(fechaIni, fechaFin, idSede) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllVentasByDate/' + fechaIni + '/' + fechaFin + '/' + idSede);
    }
    darBajaVenta(idVenta) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'unsubscribeVentasById/' + idVenta, idVenta);
    }
    updatePagoCuotas(idVenta, venta) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'updatePagoCuotasVentaById/' + idVenta, venta);
    }
    getVentasEliminadasbySede(idSede) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllVentasEliminadasBySede/' + idSede);
    }
    getPDF(objPDF) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getPDF', objPDF);
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


/***/ })

}]);
//# sourceMappingURL=src_app_pages_sale_sale_module_ts.js.map