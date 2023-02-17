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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _addsale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addsale.service */ 55749);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable.directive */ 20477);
/* harmony import */ var src_models_venta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/venta */ 97072);
/* harmony import */ var src_models_tipo_venta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/tipo_venta */ 80810);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 62962);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 85395);
/* harmony import */ var src_utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/utils/functions */ 4680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/cliente.service */ 95686);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-ng-autocomplete */ 84933);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng5-slider */ 38391);
























const _c0 = ["autocomplete"];
function AddSaleComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "a", 27);
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", item_r12.id_producto, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "div", 27);
} if (rf & 2) {
    const notFound_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", notFound_r13, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_tr_44_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ngb-highlight", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ngb-highlight", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", item_r14.material);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", item_r14.marca);
} }
function AddSaleComponent_tr_44_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ngb-highlight", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", item_r14.material);
} }
function AddSaleComponent_tr_44_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ngb-highlight", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", item_r14.nombre_accesorio);
} }
function AddSaleComponent_tr_44_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ngb-highlight", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, item_r14.precio_montura_v, "S/ "));
} }
function AddSaleComponent_tr_44_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ngb-highlight", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, item_r14.precio_luna_v, "S/ "));
} }
function AddSaleComponent_tr_44_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ngb-highlight", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, item_r14.precio_accesorio_v, "S/ "));
} }
function AddSaleComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ngb-highlight", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ngb-highlight", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, AddSaleComponent_tr_44_td_5_Template, 4, 2, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, AddSaleComponent_tr_44_td_6_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, AddSaleComponent_tr_44_td_7_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "ngb-highlight", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, AddSaleComponent_tr_44_td_10_Template, 3, 4, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, AddSaleComponent_tr_44_td_11_Template, 3, 4, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, AddSaleComponent_tr_44_td_12_Template, 3, 4, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "ngb-highlight", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddSaleComponent_tr_44_Template_i_click_18_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29); const i_r15 = restoredCtx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r28.substractQuantityProduct($event, i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddSaleComponent_tr_44_Template_i_ngModelChange_20_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29); const item_r14 = restoredCtx.$implicit; return item_r14.num = $event; })("click", function AddSaleComponent_tr_44_Template_i_click_20_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29); const i_r15 = restoredCtx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r31.addQuantityProduct($event, i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddSaleComponent_tr_44_Template_i_click_22_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29); const i_r15 = restoredCtx.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r32.removeCartProduct($event, i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", i_r15 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", item_r14.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r14.tipo == "montura");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r14.tipo == "luna");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r14.tipo == "accesorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", item_r14.cant_vendida);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r14.tipo == "montura");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r14.tipo == "luna");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r14.tipo == "accesorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](15, 11, item_r14.precio, "S/ "));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", item_r14.num);
} }
function AddSaleComponent_ng_template_49_div_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_49_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddSaleComponent_ng_template_49_div_12_span_1_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r34.form.title.errors.required);
} }
function AddSaleComponent_ng_template_49_div_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_49_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddSaleComponent_ng_template_49_div_18_span_1_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r35.form.title.errors.required);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function AddSaleComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Cambio de Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_49_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r38.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "form", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function AddSaleComponent_ng_template_49_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r40.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Precio Original");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, AddSaleComponent_ng_template_49_div_12_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "Fecha de Cambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, AddSaleComponent_ng_template_49_div_18_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Nuevo Precio de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_49_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r41.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_49_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r42.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r7.formEditar);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r7.precioOriginal_Editar);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](9, _c1, ctx_r7.submitted && ctx_r7.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.submitted && ctx_r7.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r7.fechaCambio_Editar);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](11, _c1, ctx_r7.submitted && ctx_r7.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.submitted && ctx_r7.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r7.nuevoPrecio_Editar);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](13, _c1, ctx_r7.submitted && ctx_r7.form.title.errors));
} }
function AddSaleComponent_ng_template_51_ng_template_14_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_51_ng_template_14_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Ingrese como m\u00E1ximo 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_51_ng_template_14_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddSaleComponent_ng_template_51_ng_template_14_div_7_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddSaleComponent_ng_template_51_ng_template_14_div_7_div_2_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r47.formContado.controls["campoCantidadRecibidaContado"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r47.formContado.controls["campoCantidadRecibidaContado"].errors.pattern);
} }
function AddSaleComponent_ng_template_51_ng_template_14_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_51_ng_template_14_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddSaleComponent_ng_template_51_ng_template_14_div_13_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r48.formContado.controls["campoMetodoPagoContado"].errors.required);
} }
function AddSaleComponent_ng_template_51_ng_template_14_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_51_ng_template_14_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddSaleComponent_ng_template_51_ng_template_14_div_19_span_1_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r49.form.title.errors.required);
} }
function AddSaleComponent_ng_template_51_ng_template_14_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "a", 27);
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", item_r58.nombres_apellidos, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_51_ng_template_14_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "div", 27);
} if (rf & 2) {
    const notFound_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", notFound_r59, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_51_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "form", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function AddSaleComponent_ng_template_51_ng_template_14_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r60.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Cantidad Recibida");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function AddSaleComponent_ng_template_51_ng_template_14_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r62.updatePago($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, AddSaleComponent_ng_template_51_ng_template_14_div_7_Template, 3, 2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "ng-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, AddSaleComponent_ng_template_51_ng_template_14_div_13_Template, 2, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, AddSaleComponent_ng_template_51_ng_template_14_div_19_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, "Buscar Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "ng-autocomplete", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function AddSaleComponent_ng_template_51_ng_template_14_Template_ng_autocomplete_selected_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r61); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r63.selectEventCliente($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, AddSaleComponent_ng_template_51_ng_template_14_ng_template_26_Template, 1, 1, "ng-template", null, 71, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, AddSaleComponent_ng_template_51_ng_template_14_ng_template_28_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "Montos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](39, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](43, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](44, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](48, "Cambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](49, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](55, "textarea", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_51_ng_template_14_Template_button_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r61); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r64.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_51_ng_template_14_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r61); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r65.guardarVenta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](60, " Registrar Venta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](27);
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](29);
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r45.formContado);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r45.cantidadRecibida_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r45.formContado.controls["campoCantidadRecibidaContado"].invalid && (ctx_r45.formContado.controls["campoCantidadRecibidaContado"].dirty || ctx_r45.formContado.controls["campoCantidadRecibidaContado"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r45.metodoPagoContado);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("items", ctx_r45.listMetodosPagos);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r45.formContado.controls["campoMetodoPagoContado"].invalid && (ctx_r45.formContado.controls["campoMetodoPagoContado"].dirty || ctx_r45.formContado.controls["campoMetodoPagoContado"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r45.fechaVenta_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](22, _c1, ctx_r45.submitted && ctx_r45.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r45.submitted && ctx_r45.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r45.nombreContado);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", ctx_r45.listClients)("searchKeyword", ctx_r45.keywordCliente)("itemTemplate", _r50)("notFoundTemplate", _r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r45.precioTotal_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](24, _c1, ctx_r45.submitted && ctx_r45.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r45.pago_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](26, _c1, ctx_r45.submitted && ctx_r45.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r45.cambio_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](28, _c1, ctx_r45.submitted && ctx_r45.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r45.observaciones_Contado);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r45.formContado.valid);
} }
function AddSaleComponent_ng_template_51_ng_template_21_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_51_ng_template_21_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Ingrese como m\u00E1ximo 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_51_ng_template_21_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddSaleComponent_ng_template_51_ng_template_21_div_7_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddSaleComponent_ng_template_51_ng_template_21_div_7_div_2_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r66.formCredito.controls["campoCantidadRecibidaCredito"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r66.formCredito.controls["campoCantidadRecibidaCredito"].errors.pattern);
} }
function AddSaleComponent_ng_template_51_ng_template_21_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_51_ng_template_21_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddSaleComponent_ng_template_51_ng_template_21_div_13_div_1_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r67.formCredito.controls["campoMetodoPagoCredito"].errors.required);
} }
function AddSaleComponent_ng_template_51_ng_template_21_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddSaleComponent_ng_template_51_ng_template_21_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddSaleComponent_ng_template_51_ng_template_21_div_19_span_1_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r68.form.title.errors.required);
} }
function AddSaleComponent_ng_template_51_ng_template_21_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "a", 27);
} if (rf & 2) {
    const item_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", item_r77.nombres_apellidos, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_51_ng_template_21_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "div", 27);
} if (rf & 2) {
    const notFound_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", notFound_r78, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
} }
function AddSaleComponent_ng_template_51_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "form", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngSubmit", function AddSaleComponent_ng_template_51_ng_template_21_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r79.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Cantidad Recibida");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function AddSaleComponent_ng_template_51_ng_template_21_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r80); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r81.updatePago($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, AddSaleComponent_ng_template_51_ng_template_21_div_7_Template, 3, 2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "ng-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, AddSaleComponent_ng_template_51_ng_template_21_div_13_Template, 2, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, AddSaleComponent_ng_template_51_ng_template_21_div_19_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, "N\u00FAmero de Cuotas");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "ng5-slider", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("valueChange", function AddSaleComponent_ng_template_51_ng_template_21_Template_ng5_slider_valueChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r80); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r82.tickValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "Buscar o Crear nuevo Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "ng-autocomplete", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function AddSaleComponent_ng_template_51_ng_template_21_Template_ng_autocomplete_selected_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r80); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r83.selectEventCliente($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](33, AddSaleComponent_ng_template_51_ng_template_21_ng_template_33_Template, 1, 1, "ng-template", null, 85, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, AddSaleComponent_ng_template_51_ng_template_21_ng_template_35_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, "Montos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](45, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](46, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](51, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](55, "Deuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](56, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](62, "textarea", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_51_ng_template_21_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r80); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r84.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_51_ng_template_21_Template_button_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r80); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r85.guardarVenta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67, " Registrar Venta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](34);
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](36);
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r46.formCredito);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r46.cantidadRecibida_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r46.formCredito.controls["campoCantidadRecibidaCredito"].invalid && (ctx_r46.formCredito.controls["campoCantidadRecibidaCredito"].dirty || ctx_r46.formCredito.controls["campoCantidadRecibidaCredito"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r46.metodoPagoCredito);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("items", ctx_r46.listMetodosPagos);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r46.formCredito.controls["campoMetodoPagoCredito"].invalid && (ctx_r46.formCredito.controls["campoMetodoPagoCredito"].dirty || ctx_r46.formCredito.controls["campoMetodoPagoCredito"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r46.fechaVenta_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](24, _c1, ctx_r46.submitted && ctx_r46.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r46.submitted && ctx_r46.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r46.tickValue)("options", ctx_r46.tickValueoptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r46.nombreCredito);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", ctx_r46.listClients)("searchKeyword", ctx_r46.keywordCliente)("itemTemplate", _r69)("notFoundTemplate", _r71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r46.precioTotal_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](26, _c1, ctx_r46.submitted && ctx_r46.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r46.pago_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](28, _c1, ctx_r46.submitted && ctx_r46.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r46.cambio_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](30, _c1, ctx_r46.submitted && ctx_r46.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r46.observaciones_Credito);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r46.formCredito.valid);
} }
function AddSaleComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Registrar Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_51_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r86.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ul", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("navChange", function AddSaleComponent_ng_template_51_Template_ul_navChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r88.selectorMetodoPago($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Al Contado");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, AddSaleComponent_ng_template_51_ng_template_14_Template, 61, 30, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, "Al Cr\u00E9dito");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, AddSaleComponent_ng_template_51_ng_template_21_Template, 68, 32, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](7);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("activeId", ctx_r9.activePago);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngbNavItem", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngbNavItem", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngbNavOutlet", _r44);
} }
function AddSaleComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Factura de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_53_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r91); const modal_r89 = restoredCtx.$implicit; return modal_r89.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "h4", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "Factura #MN0131 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "641 Counts Lane Wilmore, KY 40390");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, " abc@123.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, " 012-345-6789");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "hr", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "h5", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "Facturado a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "h5", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "Preston Miller");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35, "4450 Fancher Drive Dallas, TX 75247");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, "PrestonMiller@armyspy.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, "001-234-5678");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "h5", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44, "N\u00BA de Factura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46, "#MN0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "h5", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "Fecha de la Factura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51, "09 Jul, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "h5", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54, "N\u00BA de pedido:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](56, "#1123456");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "h5", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59, "Resumen del Pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "table", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "th", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](69, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](71, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](72, "th", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](73, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](77, "01");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "h5", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](80, "Nike N012 Running Shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "ul", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "li", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](83, "Color : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85, "Gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "li", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87, "Size : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](89, "08");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](91, "$260");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](93, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "td", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](95, "PEN 260.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](96, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](97, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](98, "02");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](99, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](100, "h5", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](101, "Adidas Running Shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](102, "ul", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "li", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](104, "Color : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](105, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](106, "Black");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](107, "li", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](108, "Size : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](110, "09");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](112, "$250");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](114, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](115, "td", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](116, "PEN 250.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](117, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](118, "th", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](119, "Sub Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "td", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](121, "PEN 510.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](122, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](123, "th", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](124, " Descuento :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](125, "td", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](126, "- PEN 50.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](127, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](128, "th", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](129, " Costo de env\u00EDo :");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](130, "td", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](131, "PEN 25.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](132, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](133, "th", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](134, " Impuesto (IGV)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](135, "td", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](136, "PEN 13.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](137, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](138, "th", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](139, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](140, "td", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](141, "h4", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](142, "PEN 498.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](143, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](144, "a", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](145, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](146, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](147, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](148, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddSaleComponent_ng_template_53_Template_button_click_148_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r91); const modal_r89 = restoredCtx.$implicit; return modal_r89.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](149, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](150, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](151, "Guardar cambios");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__.pdfMake.vfs;
class AddSaleComponent {
    constructor(service, fb, modalService, productosService, customerService, usuarioService) {
        this.service = service;
        this.fb = fb;
        this.modalService = modalService;
        this.productosService = productosService;
        this.customerService = customerService;
        this.usuarioService = usuarioService;
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
        this.listAllProducts = [];
        this.active = 1;
        this.keyword = "id_producto";
        this.keywordCliente = "nombres_apellidos";
        this.products = [];
        this.venta = new src_models_venta__WEBPACK_IMPORTED_MODULE_2__.VentasModel;
        this.tipoPago = new src_models_tipo_venta__WEBPACK_IMPORTED_MODULE_3__.TipoVentaModel;
        this.activePago = 1;
        this.selectorPago = "contado";
        this.listMetodosPagos = ['Físico', 'Yape', 'Plin', 'Interbancario'];
        this.listClients = [];
        this.btnGuardar = false;
        this.numberPattern = '(^[0-9])+([.][0-9]{1,2})?$';
        this.decimalPattern = /^\d+(\.\d{1,2})?$/;
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
        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("loading", "Cargando...");
        this.productosService.getMonturasforSale(this.usuarioService.getSedebyUser()).subscribe(res => {
            this.listAllProducts = res;
            this.getListAccesorios();
        });
    }
    getListAccesorios() {
        this.productosService.getAccesoriosforSale(this.usuarioService.getSedebyUser()).subscribe(res => {
            this.listAllProducts = [...res, ...this.listAllProducts];
            this.getListLunas();
        });
    }
    getListLunas() {
        this.productosService.getLunasforSale(this.usuarioService.getSedebyUser()).subscribe(res => {
            this.listAllProducts = [...res, ...this.listAllProducts];
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("close", null);
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
    selectorProducts(changeEvent) {
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
                    break;
                case 'luna':
                    this.products.push(Object.assign(Object.assign({}, item), { cant_vendida: 1, precio: item.precio_luna_v }));
                    this.autocomplete.clear();
                    break;
                case 'accesorio':
                    this.products.push(Object.assign(Object.assign({}, item), { cant_vendida: 1, precio: item.precio_accesorio_v }));
                    this.autocomplete.clear();
                    break;
                default:
                    break;
            }
            this.estadoBotonGuardar();
        }
        else {
            if (productExistInCart.cant_vendida + 1 > productExistInCart.cantidad) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("error", "No se puede agregar más productos del stock");
                this.autocomplete.clear();
                return;
            }
            else {
                productExistInCart.cant_vendida += 1;
                this.autocomplete.clear();
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
    }
    /** Gets the total cost of all products. */
    getTotalCost() {
        this.precioTotalVenta = this.products.map(t => t.precio).reduce((acc, value) => acc + value, 0);
        this.precioTotalVenta = (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_8__.round)(this.precioTotalVenta, 1);
        return this.precioTotalVenta;
    }
    /** actualiza el precio por cantidad */
    addQuantityProduct(product, i) {
        if (this.products[i].cant_vendida + 1 > this.products[i].cantidad) {
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("error", "No se puede agregar más productos del stock");
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
    crearFormulario() {
        this.formContado = this.fb.group({
            [this.cantidadRecibida_Contado]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern(this.decimalPattern),
                ]],
            [this.fechaVenta_Contado]: [{ value: null, disabled: true }],
            [this.usuario_Contado]: [null],
            [this.precioTotal_Contado]: [{ value: null, disabled: true }],
            [this.pago_Contado]: [{ value: null, disabled: true }],
            [this.cambio_Contado]: [{ value: null, disabled: true }],
            [this.observaciones_Contado]: [null],
            [this.metodoPagoContado]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required
                ]],
            [this.nombreContado]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required
                ]]
        });
        this.formCredito = this.fb.group({
            [this.cantidadRecibida_Credito]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern(this.decimalPattern),
                ]],
            [this.fechaVenta_Credito]: [{ value: null, disabled: true }],
            [this.usuario_Credito]: [null],
            [this.precioTotal_Credito]: [{ value: null, disabled: true }],
            [this.pago_Credito]: [{ value: null, disabled: true }],
            [this.cambio_Credito]: [{ value: null, disabled: true }],
            [this.observaciones_Credito]: [null],
            [this.metodoPagoCredito]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required
                ]],
            [this.nombreCredito]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required
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
                this.tipoPago.observaciones = this.f(this.observaciones_Contado).value;
                this.tipoPago.cantidad_recibida = Number(this.f(this.cantidadRecibida_Contado).value);
                if (this.f(this.cantidadRecibida_Contado).value - this.precioTotalVenta < 0) {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("error", "El pago no puede ser menor al valor de la compra, se sugiere compra al crédito");
                    return;
                }
                else {
                    this.tipoPago.deuda = 0;
                    this.tipoPago.metodo_pago = this.f(this.metodoPagoContado).value;
                    this.tipoPago.cuotas = String(0);
                    this.venta.id_cliente = this.f(this.usuario_Contado).value;
                }
            }
            else {
                if (this.precioTotalVenta - this.g(this.cantidadRecibida_Credito).value < 0) {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("error", "El pago no puede ser mayor al valor de la compra, se sugiere compra al contado");
                    return;
                }
                else {
                    this.tipoPago.observaciones = this.g(this.observaciones_Credito).value;
                    this.tipoPago.cantidad_recibida = Number(this.g(this.cantidadRecibida_Credito).value);
                    this.tipoPago.deuda = (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_8__.round)(this.precioTotalVenta - this.g(this.cantidadRecibida_Credito).value, 1);
                    this.tipoPago.metodo_pago = this.g(this.metodoPagoCredito).value;
                    this.tipoPago.cuotas = String(this.tickValue);
                    this.venta.id_cliente = this.g(this.usuario_Credito).value;
                }
            }
            this.venta.id_vendedor = this.usuarioService.getUser().id_usuario;
            this.tipoPago.forma_pago = this.selectorPago;
            this.tipoPago.precio_total = this.precioTotalVenta;
            this.tipoPago.fecha_pago = new Date();
            this.venta.tipo_venta.push(this.tipoPago);
            this.venta.id_sede = this.usuarioService.getSedebyUser();
            this.venta.habilitado = true;
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
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("loading", "Cargando...");
                this.productosService.createVenta(this.venta).subscribe(res => {
                    this.createPDF(this.venta, this.customer);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("success", "Venta realizada");
                    this.modalService.dismissAll();
                    this.products = [];
                    this.estadoBotonGuardar();
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
                this.venta.tipo_venta = [];
                swalWithBootstrapButtons.fire('Cancelado', 'La venta no se ha realizado', 'error');
            }
        });
    }
    createPDF(venta, cliente) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            var fonts = {
                Roboto: {
                    normal: 'fonts/Roboto-Regular.ttf',
                    bold: 'fonts/Roboto-Medium.ttf',
                    italics: 'fonts/Roboto-Italic.ttf',
                    bolditalics: 'fonts/Roboto-MediumItalic.ttf'
                },
            };
            var estadoBoleta = "Pagado";
            var fecha_hoy = new Date(Date.now()).toLocaleDateString('en-GB');
            var fecha_entrega = new Date(Date.now()).toLocaleDateString("es-CL", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric" // 2-digit
            });
            var hora_entrega = new Date(Date.now()).toLocaleTimeString("es-CL", {
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
            var fnacimientoCliente = new Date(cliente.fecha_nacimiento).toLocaleDateString('en-GB');
            //var direccionCliente = 'Calle';
            var correoCliente = cliente.email;
            var telefonoCliente = cliente.telefono;
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
                var totalIGV = (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_8__.round)(subtotal * peruIGV, 2);
                var total = (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_8__.round)(subtotal + totalIGV, 1);
                body.push([{ text: ' ', rowSpan: 3, colSpan: 2 }, {}, { text: 'Sub. Total:', style: 'tableHeader', alignment: 'right', colSpan: 2 }, {}, { text: simboloNuevoSol + subtotal, style: 'contenido', alignment: 'right' }]);
                body.push([{}, {}, { text: 'IGV (18%) :', style: 'tableHeader', alignment: 'right', colSpan: 2 }, {}, { text: simboloNuevoSol + totalIGV, style: 'contenido', alignment: 'right' }]);
                body.push([{}, {}, { text: 'Total:', style: 'tableHeader', alignment: 'right', colSpan: 2 }, {}, { text: simboloNuevoSol + total, style: 'contenido', alignment: 'right' }]);
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
                                [{ image: yield (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_8__.getBase64ImageFromURL)('/assets/images/logo-dark.png'), width: 150 }, { text: 'Nº de Boleta: ' + numeroBoleta, style: 'tableHeader', rowSpan: 4, alignment: 'right' }],
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
                                [{ text: 'Facturado a:', style: 'tableHeader' }, { text: 'Nº de Boleta:', style: 'tableHeader', alignment: 'right' }],
                                [{ text: nombresCliente, style: 'subtitulo' }, { text: numeroBoleta, style: 'contenido', alignment: 'right' }],
                                [{ text: 'Fecha de Nacimiento: ' + fnacimientoCliente, style: 'contenido' }, { text: 'Fecha de la Boleta:', style: 'tableHeader', alignment: 'right' }],
                                [{ text: 'Correo: ' + correoCliente, style: 'contenido' }, { text: fecha_hoy, style: 'contenido', alignment: 'right' }],
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
            const pdf = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default().createPdf(pdfDefinition);
            pdf.open();
        });
    }
}
AddSaleComponent.ɵfac = function AddSaleComponent_Factory(t) { return new (t || AddSaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_addsale_service__WEBPACK_IMPORTED_MODULE_0__.AddsaleService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_9__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_10__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_11__.UsuarioService)); };
AddSaleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: AddSaleComponent, selectors: [["app-add-sale"]], viewQuery: function AddSaleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.autocomplete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵProvidersFeature"]([_addsale_service__WEBPACK_IMPORTED_MODULE_0__.AddsaleService, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe])], decls: 55, vars: 11, consts: [[1, "container-fluid"], ["title", "A\u00F1adir un Producto", 3, "breadcrumbItems"], [1, "row", "mb-4"], [1, "col-xl-12"], [1, "card", "mb-0"], [1, "row"], [1, "col-sm-12", "col-md-12", "search-box", "chat-search-box"], [1, "position-relative"], ["placeholder", "Buscar productos", "historyIdentifier", "", "focusFirst", "true", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused", "keyup.enter"], ["autocomplete", ""], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "table-responsive"], [1, "table", "table-centered", "dt-responsive", "table-nowrap", "mb-0", "align-middle", 2, "border-spacing", "0 12px", "width", "100%"], [1, "table-light"], [1, "bg-transparent"], [4, "ngFor", "ngForOf"], [1, "text-end", "mt-2"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "disabled", "click"], [1, "uil", "uil-shopping-cart-alt", "mt-2", "me-1"], ["centerDataModalEditar", ""], ["centerDataModalGuardar2", ""], ["scrollDataModal", ""], [3, "innerHTML"], [3, "result"], [4, "ngIf"], ["placement", "top", "ngbTooltip", "Disminuir", 1, "px-2", "text-warning"], [1, "uil", "uil-minus-circle", "font-size-18", 3, "click"], ["placement", "top", "ngbTooltip", "Agregar", 1, "px-2", "text-success"], ["name", "quantity", "ngDefaultControl", "", "min", "0", 1, "uil", "uil-plus-circle", "font-size-18", 3, "ngModel", "ngModelChange", "click"], ["placement", "top", "ngbTooltip", "Eliminar", 1, "px-2", "text-danger"], [1, "uil", "uil-trash-alt", "font-size-18", 3, "click"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [3, "formGroup", "ngSubmit"], [1, "col-6"], [1, "mb-3"], [1, "control-label"], ["placeholder", "PEN 000.00", "type", "text", "name", "namePrecioOriginalEditar", 1, "form-control", 3, "formControlName", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["placeholder", "Seleccione la fecha", "type", "text", "name", "nameFechaCambioEditar", 1, "form-control", 3, "formControlName", "ngClass"], [1, "col-12"], ["placeholder", "Escriba el nuevo precio de venta", "type", "text", "name", "nameNuevoPrecioEditar", 1, "form-control", 3, "formControlName", "ngClass"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "click"], [1, "invalid-feedback"], [1, "col-lg-14"], ["ngbNav", "", 1, "nav-pills", "nav-justified", "bg-light", 3, "activeId", "navChange"], ["justifiednavpills", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], [1, "d-block", "d-sm-none"], [1, "fas", "fa-home"], [1, "d-none", "d-sm-block"], ["ngbNavContent", ""], [1, "far", "fa-user"], [3, "ngbNavOutlet"], [1, "row", "mt-4"], [1, "col-4"], ["placeholder", "Cantidad en soles", "type", "text", "name", "nameCantidadRecibidaContado", 1, "form-control", 3, "formControlName", "change"], ["class", "text-danger", 4, "ngIf"], [1, "form-label"], ["name", "selectMetodo", "placeholder", "Seleccione", 3, "items", "formControlName"], ["placeholder", "Seleccione la fecha", "type", "text", "name", "nameFechaRegistroContado", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Apellidos del cliente", "historyIdentifier", "", 3, "data", "searchKeyword", "itemTemplate", "formControlName", "notFoundTemplate", "selected"], ["itemTemplate3", ""], [1, "control-label", 2, "text-align", "left"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameTotalContado", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "namePagoContado", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameCambioContado", 1, "form-control", 3, "formControlName", "ngClass"], [1, "mb-4"], ["for", "billing-observaciones", 1, "form-label"], ["id", "billing-observaciones", "rows", "3", "placeholder", "Ingrese las observaciones", 1, "form-control", 3, "formControlName"], [1, "text-danger"], ["placeholder", "Cantidad en soles", "type", "text", "name", "nameCantidadRecibidaCredito", 1, "form-control", 3, "formControlName", "change"], ["placeholder", "Seleccione la fecha", "type", "text", "name", "nameFechaRegistroCredito", 1, "form-control", 3, "formControlName", "ngClass"], [1, "p-3"], [3, "value", "options", "valueChange"], ["placeholder", "Apellidos del cliente", "historyIdentifier", "", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "formControlName", "selected"], ["itemTemplate2", ""], ["placeholder", "S/ 000.00", "type", "text", "name", "nameTotalCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "namePagoCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameCambioCredito", 1, "form-control", 3, "formControlName", "ngClass"], [1, "modal-title", "mt-0"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "invoice-title"], [1, "float-end", "font-size-16"], [1, "badge", "bg-success", "font-size-12", "ms-2"], ["src", "assets/images/logo-dark.png", "alt", "logo", "height", "20"], [1, "text-muted"], [1, "mb-1"], [1, "uil", "uil-map-marker", "me-1"], [1, "uil", "uil-envelope-alt", "me-1"], [1, "uil", "uil-phone", "me-1"], [1, "my-4"], [1, "col-sm-6"], [1, "font-size-16", "mb-3"], [1, "font-size-15", "mb-2"], [1, "text-muted", "text-sm-end"], [1, "font-size-16", "mb-1"], [1, "mt-4"], [1, "py-2"], [1, "font-size-15"], [1, "table", "table-nowrap", "table-centered", "mb-0"], [2, "width", "70px"], [1, "text-end", 2, "width", "120px"], ["scope", "row"], [1, "font-size-15", "mb-1"], [1, "list-inline", "mb-0"], [1, "list-inline-item"], [1, "fw-medium"], [1, "text-end"], ["scope", "row", "colspan", "4", 1, "text-end"], ["scope", "row", "colspan", "4", 1, "border-0", "text-end"], [1, "border-0", "text-end"], [1, "m-0"], [1, "modal-footer"], ["href", "javascript(0)", 1, "btn", "btn-success", "waves-effect", "waves-light", "me-1"], [1, "fa", "fa-download"], ["href", "javascript:window.print()", 1, "btn", "btn-success", "waves-effect", "waves-light", "me-1"], [1, "fa", "fa-print"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary"]], template: function AddSaleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ng-autocomplete", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function AddSaleComponent_Template_ng_autocomplete_selected_8_listener($event) { return ctx.selectEvent($event); })("inputChanged", function AddSaleComponent_Template_ng_autocomplete_inputChanged_8_listener($event) { return ctx.onChangeSearch($event); })("inputFocused", function AddSaleComponent_Template_ng_autocomplete_inputFocused_8_listener($event) { return ctx.onFocused($event); })("keyup.enter", function AddSaleComponent_Template_ng_autocomplete_keyup_enter_8_listener($event) { return ctx.selectEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, AddSaleComponent_ng_template_10_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, AddSaleComponent_ng_template_12_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](17, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Lista de Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, "ID Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34, "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](44, AddSaleComponent_tr_44_Template, 23, 14, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddSaleComponent_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r93); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](52); return ctx.centerModal(_r8, ctx.products); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](47, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](48, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](49, AddSaleComponent_ng_template_49_Template, 30, 15, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](51, AddSaleComponent_ng_template_51_Template, 23, 4, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, AddSaleComponent_ng_template_53_Template, 152, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", ctx.listAllProducts)("searchKeyword", ctx.keyword)("itemTemplate", _r1)("notFoundTemplate", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Total de la Venta: PEN ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](17, 8, ctx.getTotalCost(), "S/ "), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.btnGuardar);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_12__.PagetitleComponent, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_19__.AutocompleteComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbHighlight, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNavOutlet, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__.NgSelectComponent, ng5_slider__WEBPACK_IMPORTED_MODULE_13__["ɵa"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc2FsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 28267);
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
/* harmony import */ var src_utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/utils/functions */ 4680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/venta.service */ 91173);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/cliente.service */ 95686);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _directives_role_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../directives/role.directive */ 48185);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);























function ListSalesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "form", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListSalesComponent_div_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r6.filterDateRange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r0.formDateRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r0.fechaDesde);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r0.fechaHasta);
} }
function ListSalesComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "form", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ng-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.formSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.nombre_sedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("items", ctx_r1.listSedes);
} }
const _c0 = function (a0) { return { "bg-soft-danger": a0 }; };
function ListSalesComponent_tr_52_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Deuda \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](2, _c0, data_r8.tipo_venta[0].deuda > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r8.tipo_venta[0].deuda, " ");
} }
function ListSalesComponent_tr_52_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListSalesComponent_tr_52_a_22_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListSalesComponent_tr_52_a_22_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16); const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](61); return ctx_r15.centerModalActualizar(_r4, data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListSalesComponent_tr_52_i_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 57);
} }
function ListSalesComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ngb-highlight", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ngb-highlight", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "ngb-highlight", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "ngb-highlight", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, ListSalesComponent_tr_52_td_14_Template, 5, 4, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, ListSalesComponent_tr_52_td_15_Template, 3, 0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListSalesComponent_tr_52_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19); const data_r8 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r18.createPDF(data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "Pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, ListSalesComponent_tr_52_a_22_Template, 2, 0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListSalesComponent_tr_52_Template_a_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19); const data_r8 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r20.eliminar(data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, ListSalesComponent_tr_52_i_24_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", i_r9 + 1)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](5, 13, data_r8.fecha_creacion_venta, "dd/MM/yyyy"))("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r8.nombre_cliente.charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", data_r8.nombre_cliente)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](13, 16, data_r8.tipo_venta[0].precio_total, "S/ "))("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", data_r8.tipo_venta[0].deuda > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", data_r8.tipo_venta[0].deuda == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", data_r8.tipo_venta[0].deuda != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("appRole", ctx_r2.role);
} }
function ListSalesComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " Cargando ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_60_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_60_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_60_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ListSalesComponent_ng_template_60_div_29_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ListSalesComponent_ng_template_60_div_29_div_2_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r22.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].errors == null ? null : ctx_r22.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r22.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].errors == null ? null : ctx_r22.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].errors.pattern);
} }
function ListSalesComponent_ng_template_60_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_60_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ListSalesComponent_ng_template_60_div_35_div_1_Template, 2, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r23.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].errors == null ? null : ctx_r23.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].errors.required);
} }
function ListSalesComponent_ng_template_60_div_41_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListSalesComponent_ng_template_60_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ListSalesComponent_ng_template_60_div_41_span_1_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r24.form.title.errors.required);
} }
function ListSalesComponent_ng_template_60_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "th", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pago_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](i_r31 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](5, 4, pago_r30.cantidad_recibida, "S/ "));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](pago_r30.metodo_pago);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](10, 7, pago_r30.fecha_pago, "dd/MM/yyyy hh:mm:ss"));
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function ListSalesComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Actualizar Venta - Al Credito");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListSalesComponent_ng_template_60_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r32.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "form", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "Nombres y Apellidos del Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "Deuda \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "Cantidad Recibida");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ListSalesComponent_ng_template_60_Template_input_change_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r34.updatePago($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, ListSalesComponent_ng_template_60_div_29_Template, 3, 2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](34, "ng-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, ListSalesComponent_ng_template_60_div_35_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](40, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](41, ListSalesComponent_ng_template_60_div_41_Template, 2, 1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "table", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54, "N\u00BA Cuotas");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](56, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](60, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](62, ListSalesComponent_ng_template_60_tr_62_Template, 11, 10, "tr", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](66, "Montos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](71, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](72, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](76, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](77, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](81, "Cambio");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](82, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](88, "textarea", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListSalesComponent_ng_template_60_Template_button_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r35.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](91, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListSalesComponent_ng_template_60_Template_button_click_92_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r36.guardarActualizacionDeuda(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](93, " Registrar Venta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r5.formCreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r5.usuario.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](25, _c0, 1 > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](21, 22, ctx_r5.usuario.deuda, "S/ "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.cantidadRecibida_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].invalid && (ctx_r5.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].dirty || ctx_r5.formCreditoActualizacion.controls["campoCantidadRecibidaCreditoActualizacion"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.metodoPagoCreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("items", ctx_r5.listMetodosPagos);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].invalid && (ctx_r5.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].dirty || ctx_r5.formCreditoActualizacion.controls["campoMetodoPagoCreditoActualizacion"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.fechaVenta_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](27, _c1, ctx_r5.submitted && ctx_r5.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.submitted && ctx_r5.form.title.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Informaci\u00F3n de Pagos: ", ctx_r5.usuario.listDeudas[0].cuotas, " cuotas");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r5.usuario.listDeudas);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.precioTotal_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](29, _c1, ctx_r5.submitted && ctx_r5.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.pago_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](31, _c1, ctx_r5.submitted && ctx_r5.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.cambio_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](33, _c1, ctx_r5.submitted && ctx_r5.form.title.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.observaciones_CreditoActualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r5.formCreditoActualizacion.valid);
} }
(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__.pdfMake.vfs;
class ListSalesComponent {
    constructor(service, fb, ventasService, modalService, customerService, usuarioService) {
        this.service = service;
        this.fb = fb;
        this.ventasService = ventasService;
        this.modalService = modalService;
        this.customerService = customerService;
        this.usuarioService = usuarioService;
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
            [this.fechaDesde]: [],
            [this.fechaHasta]: []
        });
        this.formSedes = this.fb.group({
            [this.nombre_sedes]: [this.idSede]
        });
    }
    crearFormularioActualizar() {
        this.formCreditoActualizacion = this.fb.group({
            [this.cantidadRecibida_CreditoActualizacion]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern(this.decimalPattern),
                ]],
            [this.fechaVenta_CreditoActualizacion]: [{ value: null, disabled: true }],
            [this.usuario_CreditoActualizacion]: [null],
            [this.precioTotal_CreditoActualizacion]: [{ value: null, disabled: true }],
            [this.pago_CreditoActualizacion]: [{ value: null, disabled: true }],
            [this.cambio_CreditoActualizacion]: [{ value: null, disabled: true }],
            [this.observaciones_CreditoActualizacion]: [null],
            [this.metodoPagoCreditoActualizacion]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required
                ]],
        });
    }
    g(campo) {
        return this.formCreditoActualizacion.get(campo);
    }
    updatePago(event) {
        this.g(this.pago_CreditoActualizacion).setValue(this.g(this.cantidadRecibida_CreditoActualizacion).value);
        const deuda = Number((0,src_utils_functions__WEBPACK_IMPORTED_MODULE_8__.round)(this.g(this.cantidadRecibida_CreditoActualizacion).value - this.usuario.deuda, 1).toFixed(2));
        this.g(this.cambio_CreditoActualizacion).setValue(Math.abs(deuda));
    }
    guardarActualizacionDeuda() {
        if (this.formCreditoActualizacion.valid) {
            this.venta.id_vendedor = this.usuarioService.getUser().id_usuario;
            this.venta.id_sede = this.usuarioService.getSedebyUser();
            let deuda = 0;
            deuda = (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_8__.round)(this.tipoPago[0].deuda - this.g(this.cantidadRecibida_CreditoActualizacion).value, 1);
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
            if (Number(this.g(this.cambio_CreditoActualizacion).value) > 0) {
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
            this.ventasService.getVentasByDate(fechaIni, fechaFin).subscribe(res => {
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
        this.ventasService.getVentasbySede(this.usuarioService.getSedebyUser()).subscribe(res => {
            this.service.updateTable(res);
        });
    }
    createPDF(venta) {
        this.customerService.getAllClientbyId(venta.id_cliente).subscribe((res) => {
            this.generatePDF(venta, res[0]);
        });
    }
    generatePDF(venta, cliente) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            var fonts = {
                Roboto: {
                    normal: 'fonts/Roboto-Regular.ttf',
                    bold: 'fonts/Roboto-Medium.ttf',
                    italics: 'fonts/Roboto-Italic.ttf',
                    bolditalics: 'fonts/Roboto-MediumItalic.ttf'
                },
            };
            var estadoBoleta = "Pagado";
            var fecha_hoy = new Date(Date.now()).toLocaleDateString('en-GB');
            var fecha_entrega = new Date(Date.now()).toLocaleDateString("es-CL", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric" // 2-digit
            });
            var hora_entrega = new Date(Date.now()).toLocaleTimeString("es-CL", {
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
            var fnacimientoCliente = new Date(cliente.fecha_nacimiento).toLocaleDateString('en-GB');
            //var direccionCliente = 'Calle';
            var correoCliente = cliente.email;
            var telefonoCliente = cliente.telefono;
            var externalDataRetrievedFromServer = [];
            var peruIGV = 0.18;
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
                var totalIGV = (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_8__.round)(subtotal * peruIGV, 2);
                var total = (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_8__.round)(subtotal + totalIGV, 1);
                body.push([{ text: ' ', rowSpan: 3, colSpan: 2 }, {}, { text: 'Sub. Total:', style: 'tableHeader', alignment: 'right', colSpan: 2 }, {}, { text: simboloNuevoSol + subtotal, style: 'contenido', alignment: 'right' }]);
                body.push([{}, {}, { text: 'IGV (18%) :', style: 'tableHeader', alignment: 'right', colSpan: 2 }, {}, { text: simboloNuevoSol + totalIGV, style: 'contenido', alignment: 'right' }]);
                body.push([{}, {}, { text: 'Total:', style: 'tableHeader', alignment: 'right', colSpan: 2 }, {}, { text: simboloNuevoSol + total, style: 'contenido', alignment: 'right' }]);
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
                                [{ image: yield (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_8__.getBase64ImageFromURL)('/assets/images/logo-dark.png'), width: 150 }, { text: 'Nº de Boleta: ' + numeroBoleta, style: 'tableHeader', rowSpan: 4, alignment: 'right' }],
                                [{ text: direccionEmpresa }, {}],
                                [{ text: correoEmpresa }, {}],
                                [{ text: felefonoEmpresa }, {}],
                            ]
                        },
                        layout: 'noBorders'
                    },
                    {
                        style: 'tableMargin',
                        table: {
                            widths: ['*', '*'],
                            body: [
                                [{ text: 'Facturado a:', style: 'tableHeader' }, { text: 'Nº de Boleta:', style: 'tableHeader', alignment: 'right' }],
                                [{ text: nombresCliente, style: 'subtitulo' }, { text: numeroBoleta, style: 'contenido', alignment: 'right' }],
                                [{ text: 'Fecha de Nacimiento: ' + fnacimientoCliente, style: 'contenido' }, { text: 'Fecha de la Boleta:', style: 'tableHeader', alignment: 'right' }],
                                [{ text: 'Correo: ' + correoCliente, style: 'contenido' }, { text: fecha_hoy, style: 'contenido', alignment: 'right' }],
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
            const pdf = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default().createPdf(pdfDefinition);
            pdf.open();
        });
    }
}
ListSalesComponent.ɵfac = function ListSalesComponent_Factory(t) { return new (t || ListSalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_sale_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_venta_service__WEBPACK_IMPORTED_MODULE_9__.VentaService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_10__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_11__.UsuarioService)); };
ListSalesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: ListSalesComponent, selectors: [["app-list-sales"]], viewQuery: function ListSalesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵProvidersFeature"]([_sale_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe])], decls: 62, vars: 21, consts: [[1, "container-fluid"], ["title", "Ventas", 3, "breadcrumbItems"], [1, "row"], [1, "col-md-6", "mb-2"], [1, "form-inline"], [1, "search-box", "ml-2"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar venta", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "border-light", "rounded", 3, "ngModel", "ngModelChange"], [1, "uil", "uil-search", "search-icon"], ["role", "toolbar", 1, "btn-toolbar"], ["class", "col-12 col-md-6 d-grid mb-2 chat-search-box px-1", 4, "appRole"], ["class", "col-12 col-md-6 d-grid", 4, "appRole"], [1, "row", "md-2"], [1, "col-sm-12", "col-md-12"], [1, "dataTables_length", "text-md-end"], [1, "d-inline-flex", "align-items-center"], ["name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "col-12"], [1, "table-responsive", "mb-4"], [1, "table", "datatables", "table-centered", "table-nowrap", "mb-0", "align-middle", "table-card-list", 2, "border-spacing", "0 12px", "width", "100%"], [1, "bg-transparent"], ["scope", "col", "sortable", "orden", 3, "sort"], ["scope", "col", "sortable", "fecha_creacion_venta", 3, "sort"], ["scope", "col", "sortable", "nombre_cliente", 3, "sort"], ["scope", "col", "sortable", "", 3, "sort"], [2, "width", "170px"], ["class", "odd", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "row", "justify-content-md-between", "align-items-md-center"], [1, "text-md-end", "float-md-end", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["centerDataModalActualizarVenta", ""], [1, "col-12", "col-md-6", "d-grid", "mb-2", "chat-search-box", "px-1"], [3, "formGroup"], [1, "input-daterange", "input-group"], ["type", "date", "id", "billing-fechanacimiento", "placeholder", "Seleccione la fecha", 1, "form-control", 3, "formControlName"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "mdi", "mdi-filter-variant"], [1, "col-12", "col-md-6", "d-grid"], ["ngbDropdown", ""], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName"], [1, "odd"], [3, "result", "term"], [1, "avatar-xs", "d-inline-block", "me-2"], [1, "avatar-title", "rounded-circle", "bg-light", "text-body"], [4, "ngIf"], [1, "btn", "btn-light", "btn-sm", "w-xs", 3, "click"], [1, "uil", "uil-download-alt", "ms-2"], ["class", "px-3 text-primary", "placement", "top", "ngbTooltip", "Editar", 3, "click", 4, "ngIf"], ["placement", "top", "ngbTooltip", "Eliminar", 1, "px-3", "text-danger", 3, "click"], ["class", "uil uil-trash-alt font-size-18", 4, "appRole"], [1, "text-danger"], [1, "badge", "rounded-pill", "bg-soft-success", "font-size-12", 3, "ngClass"], [1, "text-success"], ["placement", "top", "ngbTooltip", "Editar", 1, "px-3", "text-primary", 3, "click"], [1, "uil", "uil-pen", "font-size-18"], [1, "uil", "uil-trash-alt", "font-size-18"], [1, "text-center", "my-3"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "mdi", "mdi-loading", "mdi-spin", "font-size-20", "align-middle", "me-2"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [1, "col-lg-14"], [1, "col-sm-6"], [1, "mb-3"], [1, "control-label"], [1, "text-muted", "text-sm-end"], [1, "mt-4"], [1, "text-danger", "font-size-16"], [1, "badge", "rounded-pill", "bg-soft-success", "font-size-16", 3, "ngClass"], [1, "border-top", "pt-4"], [1, "col-4"], ["placeholder", "Cantidad en soles", "type", "text", "name", "nameCantidadRecibidaCredito", 1, "form-control", 3, "formControlName", "change"], ["class", "text-danger", 4, "ngIf"], [1, "form-label"], ["name", "selectMetodo", "placeholder", "Seleccione", 3, "items", "formControlName"], ["placeholder", "Seleccione la fecha", "type", "text", "name", "nameFechaRegistroCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-sm-12"], [1, "table-responsive"], [1, "table", "table-sm", "m-0", "table-centered"], [2, "width", "77px"], [4, "ngFor", "ngForOf"], [1, "control-label", 2, "text-align", "left"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameTotalCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "namePagoCredito", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "S/ 000.00", "type", "text", "name", "nameCambioCredito", 1, "form-control", 3, "formControlName", "ngClass"], [1, "col-lg-12"], [1, "mb-4"], ["for", "billing-observaciones", 1, "form-label"], ["id", "billing-observaciones", "rows", "3", "placeholder", "Ingrese las observaciones", 1, "form-control", 3, "formControlName"], [1, "text-end", "mt-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "disabled", "click"], [1, "invalid-feedback"], ["scope", "row"]], template: function ListSalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ListSalesComponent_Template_input_ngModelChange_7_listener($event) { return ctx.service.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, ListSalesComponent_div_12_Template, 8, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, ListSalesComponent_div_13_Template, 4, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "Mostrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ListSalesComponent_Template_select_ngModelChange_19_listener($event) { return ctx.service.pageSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, " entradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_37_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "Ord.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_39_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_41_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "Nombre del Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_43_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_45_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46, "Estado de Pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sort", function ListSalesComponent_Template_th_sort_47_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](48, "Descargar Pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](52, ListSalesComponent_tr_52_Template, 25, 19, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](53, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](54, ListSalesComponent_div_54_Template, 6, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "ngb-pagination", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("pageChange", function ListSalesComponent_Template_ngb_pagination_pageChange_58_listener($event) { return ctx.service.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](59, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, ListSalesComponent_ng_template_60_Template, 94, 35, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("appRole", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("appRole", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.service.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](53, 17, ctx.transactions$));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](59, 19, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize)("maxSize", 5)("rotate", true)("boundaryLinks", true);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_12__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _directives_role_directive__WEBPACK_IMPORTED_MODULE_13__.RoleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbPagination, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdown, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbHighlight, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXNhbGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 78068);
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
    return transaction.id_cliente.toLowerCase().includes(term)
        || String(transaction.tipo_venta[0].precio_total).toLowerCase().includes(term.toLowerCase())
        || (transaction.fecha_creacion_venta).toLocaleString().includes(term);
    //|| transaction.id_sede.toLowerCase().includes(term)
    //|| transaction.id_cliente.toLowerCase().includes(term)
    //|| pipe.transform(transaction.index).includes(term);
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ transactions, total });
    }
    //Servicio 
    getAllVentas() {
        this.ventaService.getVentasbySede(this.usuarioService.getSedebyUser()).subscribe(res => {
            this.ventaList = res;
            this._mostrar$.next(true);
            this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loading$.next(false))).subscribe(result => {
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 85298);
/* harmony import */ var _add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-sale/add-sale.component */ 27947);
/* harmony import */ var _list_sales_list_sales_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-sales/list-sales.component */ 33605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);






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
    }
];
class SaleRoutingModule {
}
SaleRoutingModule.ɵfac = function SaleRoutingModule_Factory(t) { return new (t || SaleRoutingModule)(); };
SaleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SaleRoutingModule });
SaleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SaleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng5-slider */ 38391);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 68346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 85362);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var _add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-sale/add-sale.component */ 27947);
/* harmony import */ var _sale_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale-routing.module */ 55666);
/* harmony import */ var _list_sales_list_sales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-sales/list-sales.component */ 33605);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-ng-autocomplete */ 84933);
/* harmony import */ var src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/directives/role.module */ 2974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);















class SaleModule {
}
SaleModule.ɵfac = function SaleModule_Factory(t) { return new (t || SaleModule)(); };
SaleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SaleModule });
SaleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_8__.DROPZONE_CONFIG,
            useValue: rxjs__WEBPACK_IMPORTED_MODULE_9__.config
        }
    ], imports: [[
            _sale_routing_module__WEBPACK_IMPORTED_MODULE_4__.SaleRoutingModule,
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
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbCollapseModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule,
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_14__.AutocompleteLibModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule,
            src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_6__.DirectivesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SaleModule, { declarations: [_add_sale_add_sale_component__WEBPACK_IMPORTED_MODULE_3__.AddSaleComponent, _list_sales_list_sales_component__WEBPACK_IMPORTED_MODULE_5__.ListSalesComponent], imports: [_sale_routing_module__WEBPACK_IMPORTED_MODULE_4__.SaleRoutingModule,
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
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbCollapseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule,
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_14__.AutocompleteLibModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule,
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
    getVentasByDate(fechaIni, fechaFin) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllVentasByDate/' + fechaIni + '/' + fechaFin);
    }
    darBajaVenta(idVenta) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'unsubscribeVentasById/' + idVenta, idVenta);
    }
    updatePagoCuotas(idVenta, venta) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'updatePagoCuotasVentaById/' + idVenta, venta);
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