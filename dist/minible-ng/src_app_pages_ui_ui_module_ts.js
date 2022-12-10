"use strict";
(self["webpackChunkminible_ng"] = self["webpackChunkminible_ng"] || []).push([["src_app_pages_ui_ui_module_ts"],{

/***/ 21311:
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-bar-rating/__ivy_ngcc__/fesm2015/ngx-bar-rating.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarRating": () => (/* binding */ BarRating),
/* harmony export */   "BarRatingModule": () => (/* binding */ BarRatingModule),
/* harmony export */   "ɵa": () => (/* binding */ BarRatingPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);




/** This allows support [(ngModel)] and ngControl. */



function BarRating_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarRating_div_2_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const unit_r2 = restoredCtx.$implicit; return unit_r2.click($event); })("mouseenter", function BarRating_div_2_Template_div_mouseenter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const unit_r2 = restoredCtx.$implicit; return unit_r2.enter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("br-fraction", unit_r2.fraction)("br-selected", unit_r2.selected)("br-active", unit_r2.active);
} }
function BarRating_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "rateTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.nextRate, ctx_r1.titles));
} }
const RATING_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => BarRating),
    multi: true
};
/** This allows control required validation. */
const RATING_VALUE_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => BarRating),
    multi: true,
};
class BarRating {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.contexts = [];
        /** Maximal rating that can be given using this widget. */
        this.max = 5;
        /** A flag indicating if rating can be updated. */
        this.readOnly = false;
        /** Set the theme */
        this.theme = 'default';
        /** Show rating title */
        this.showText = false;
        /** Replace rate value with a title */
        this.titles = [];
        /** A flag indicating if rating is required for form validation. */
        this.required = false;
        /**
         * An event fired when a user is hovering over a given rating.
         * Event's payload equals to the rating being hovered over.
         */
        this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * An event fired when a user stops hovering over a given rating.
         * Event's payload equals to the rating of the last item being hovered over.
         */
        this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * An event fired when a user selects a new rating.
         * Event's payload equals to the newly selected rating.
         */
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
        this.onChange = (_) => {
        };
        this.onTouched = () => {
        };
    }
    ngOnChanges(changes) {
        if (changes.rate) {
            this.update(this.rate);
        }
    }
    ngOnInit() {
        this.contexts = Array.from({ length: this.max }, (context, i) => ({
            selected: false,
            fraction: false,
            active: false,
            click: (e) => this.handleClick(e, i + 1),
            enter: () => this.handleEnter(i + 1)
        }));
        this.updateState(this.rate);
    }
    update(newRate, internalChange = true) {
        if (!this.readOnly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this.updateState(this.rate);
    }
    /** Reset rate value */
    reset() {
        this.leave.emit(this.nextRate);
        this.updateState(this.rate);
    }
    updateState(nextValue) {
        /** Set rate value as text */
        this.nextRate = nextValue - 1;
        /** Set the rating */
        this.contexts = Array.from({ length: this.max }, (context, index) => ({
            selected: index + 1 <= nextValue,
            fraction: (index + 1 === Math.round(nextValue) && nextValue % 1) >= 0.5,
            active: false,
            click: (e) => this.handleClick(e, index),
            enter: () => this.handleEnter(index)
        }));
    }
    handleClick(e, value) {
        /** (NOT TESTED) Remove 300ms click delay on touch devices */
        e.preventDefault();
        e.stopPropagation();
        this.update(value + 1);
    }
    handleEnter(index) {
        if (!this.disabled && !this.readOnly) {
            /** Add selected class for rating hover */
            this.contexts.map((context, i) => {
                context.active = i <= index;
                context.fraction = false;
                context.selected = false;
            });
            this.nextRate = index;
            this.hover.emit(index);
        }
    }
    /** This is the initial value set to the component */
    writeValue(value) {
        this.update(value, false);
        this.changeDetectorRef.markForCheck();
    }
    validate(c) {
        return (this.required && !c.value) ? { required: true } : null;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
BarRating.ɵfac = function BarRating_Factory(t) { return new (t || BarRating)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
BarRating.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarRating, selectors: [["bar-rating"]], inputs: { max: "max", readOnly: "readOnly", theme: "theme", showText: "showText", titles: "titles", required: "required", rate: "rate" }, outputs: { hover: "hover", leave: "leave", rateChange: "rateChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 9, consts: [[1, "br-units", 3, "mouseleave"], ["class", "br-unit", 3, "br-fraction", "br-selected", "br-active", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "br-text", 4, "ngIf"], [1, "br-unit", 3, "click", "mouseenter"], [1, "br-text"]], template: function BarRating_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function BarRating_Template_div_mouseleave_1_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BarRating_div_2_Template, 1, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BarRating_div_3_Template, 3, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("br br-", ctx.theme, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("br-readonly", ctx.readOnly)("br-disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contexts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showText);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf]; }, pipes: function () { return [BarRatingPipe]; }, styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.br[_ngcontent-%COMP%]{margin:15px 0;position:relative}.br-units[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap}.br-unit[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;cursor:pointer;text-rendering:auto}.br-disabled[_ngcontent-%COMP%]   .br-unit[_ngcontent-%COMP%], .br-readonly[_ngcontent-%COMP%]   .br-unit[_ngcontent-%COMP%]{cursor:default}"], changeDetection: 0 });
BarRating.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
BarRating.propDecorators = {
    rate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    readOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    showText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    titles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    leave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    rateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarRating, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'bar-rating',
                template: "<div class=\"br br-{{theme}}\"\n     [class.br-readonly]=\"readOnly\"\n     [class.br-disabled]=\"disabled\">\n\n  <div class=\"br-units\" (mouseleave)=\"reset()\">\n\n    <div class=\"br-unit\" *ngFor=\"let unit of contexts\"\n         [class.br-fraction]=\"unit.fraction\"\n         [class.br-selected]=\"unit.selected\"\n         [class.br-active]=\"unit.active\"\n         (click)=\"unit.click($event)\"\n         (mouseenter)=\"unit.enter()\"></div>\n  </div>\n\n  <div *ngIf=\"showText\" class=\"br-text\">{{ nextRate | rateTitle: titles }}</div>\n</div>\n",
                providers: [RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: ["*{box-sizing:border-box}.br{margin:15px 0;position:relative}.br-units{display:flex;flex-wrap:nowrap}.br-unit{-webkit-font-smoothing:antialiased;cursor:pointer;text-rendering:auto}.br-disabled .br-unit,.br-readonly .br-unit{cursor:default}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], readOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], titles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], leave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], rateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], rate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class BarRatingPipe {
    transform(value = 0, titles) {
        /** Initialize value with 0 in case of undefined */
        return titles[value] || value + 1;
    }
}
BarRatingPipe.ɵfac = function BarRatingPipe_Factory(t) { return new (t || BarRatingPipe)(); };
BarRatingPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "rateTitle", type: BarRatingPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarRatingPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'rateTitle'
            }]
    }], null, null); })();

class BarRatingModule {
}
BarRatingModule.ɵfac = function BarRatingModule_Factory(t) { return new (t || BarRatingModule)(); };
BarRatingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BarRatingModule });
BarRatingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarRatingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [BarRating, BarRatingPipe],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule
                ],
                exports: [BarRating]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BarRatingModule, { declarations: function () { return [BarRating, BarRatingPipe]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule]; }, exports: function () { return [BarRating]; } }); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 38179:
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-star-rating/__ivy_ngcc__/fesm2015/ngx-star-rating.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxStarRatingComponent": () => (/* binding */ NgxStarRatingComponent),
/* harmony export */   "NgxStarRatingModule": () => (/* binding */ NgxStarRatingModule),
/* harmony export */   "NgxStarRatingService": () => (/* binding */ NgxStarRatingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function NgxStarRatingComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxStarRatingComponent_ng_template_1_Template_input_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const star_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.rate(star_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 3);
} if (rf & 2) {
    const star_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("star star-", star_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "star-", star_r1, "-", ctx_r0.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.value == star_r1)("disabled", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("star star-", star_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("for", "star-", star_r1, "-", ctx_r0.id, "");
} }
class NgxStarRatingService {
    constructor() { }
}
NgxStarRatingService.ɵfac = function NgxStarRatingService_Factory(t) { return new (t || NgxStarRatingService)(); };
NgxStarRatingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxStarRatingService, factory: NgxStarRatingService.ɵfac, providedIn: 'root' });
/** @nocollapse */
NgxStarRatingService.ctorParameters = () => [];
/** @nocollapse */ NgxStarRatingService.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgxStarRatingService_Factory() { return new NgxStarRatingService(); }, token: NgxStarRatingService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxStarRatingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxStarRatingComponent {
    constructor() {
        this.stars = [5, 4, 3, 2, 1];
        this.propagateChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        if (!this.disabled) {
            this.disabled = false;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} rate
     * @return {?}
     */
    rate(rate) {
        if (!this.disabled) {
            this.propagateChange(rate);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { }
}
NgxStarRatingComponent.ɵfac = function NgxStarRatingComponent_Factory(t) { return new (t || NgxStarRatingComponent)(); };
NgxStarRatingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxStarRatingComponent, selectors: [["ngx-star-rating"]], inputs: { disabled: "disabled", id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(( /**
                 * @return {?}
                 */() => NgxStarRatingComponent)),
                multi: true
            }
        ])], decls: 2, vars: 1, consts: [["action", ""], ["ngFor", "", 3, "ngForOf"], ["type", "radio", "name", "star", 3, "id", "checked", "disabled", "click"], [3, "for"]], template: function NgxStarRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxStarRatingComponent_ng_template_1_Template, 2, 12, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stars);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["@charset \"UTF-8\";*[_ngcontent-%COMP%]{margin:0;padding:0;font-family:roboto}body[_ngcontent-%COMP%]{background:#000}.cont[_ngcontent-%COMP%]{width:93%;max-width:350px;text-align:center;margin:4% auto;padding:30px 0;background:#111;color:#eee;border-radius:5px;border:thin solid #444;overflow:hidden}hr[_ngcontent-%COMP%]{margin:20px;border:none;border-bottom:thin solid rgba(255,255,255,.1)}div.title[_ngcontent-%COMP%]{font-size:2em}h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;color:#fd4}div.stars[_ngcontent-%COMP%]{width:270px;display:inline-block}input.star[_ngcontent-%COMP%]{display:none}label.star[_ngcontent-%COMP%]{float:right;padding:10px;font-size:36px;color:#444;transition:.2s}input.star[_ngcontent-%COMP%]:checked ~ label.star[_ngcontent-%COMP%]:before{content:\"\uF005\";color:#fd4;transition:.25s}input.star-5[_ngcontent-%COMP%]:checked ~ label.star[_ngcontent-%COMP%]:before{color:#fe7;text-shadow:0 0 20px #952}input.star-1[_ngcontent-%COMP%]:checked ~ label.star[_ngcontent-%COMP%]:before{color:#f62}label.star[_ngcontent-%COMP%]:hover{-webkit-transform:rotate(-15deg) scale(1.3);transform:rotate(-15deg) scale(1.3)}label.star[_ngcontent-%COMP%]:before{content:\"\uF006\";font-family:FontAwesome}"] });
/** @nocollapse */
NgxStarRatingComponent.ctorParameters = () => [];
NgxStarRatingComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxStarRatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-star-rating',
                template: "<form action=\"\">\n  <ng-template ngFor let-star [ngForOf]=\"stars\" let-currentElementIndex=\"(index + 1)\">\n    <input class=\"star star-{{ star }}\" id=\"star-{{ star }}-{{ id }}\" type=\"radio\" name=\"star\" (click)=\"rate(star)\"\n      [checked]=\"value == star\" [disabled]=\"disabled\" />\n    <label class=\"star star-{{ star }}\" for=\"star-{{ star }}-{{ id }}\"></label>\n  </ng-template>\n</form>\n",
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(( /**
                         * @return {?}
                         */() => NgxStarRatingComponent)),
                        multi: true
                    }
                ],
                styles: ["@charset \"UTF-8\";*{margin:0;padding:0;font-family:roboto}body{background:#000}.cont{width:93%;max-width:350px;text-align:center;margin:4% auto;padding:30px 0;background:#111;color:#eee;border-radius:5px;border:thin solid #444;overflow:hidden}hr{margin:20px;border:none;border-bottom:thin solid rgba(255,255,255,.1)}div.title{font-size:2em}h1 span{font-weight:300;color:#fd4}div.stars{width:270px;display:inline-block}input.star{display:none}label.star{float:right;padding:10px;font-size:36px;color:#444;transition:.2s}input.star:checked~label.star:before{content:\"\uF005\";color:#fd4;transition:.25s}input.star-5:checked~label.star:before{color:#fe7;text-shadow:0 0 20px #952}input.star-1:checked~label.star:before{color:#f62}label.star:hover{-webkit-transform:rotate(-15deg) scale(1.3);transform:rotate(-15deg) scale(1.3)}label.star:before{content:\"\uF006\";font-family:FontAwesome}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxStarRatingModule {
}
NgxStarRatingModule.ɵfac = function NgxStarRatingModule_Factory(t) { return new (t || NgxStarRatingModule)(); };
NgxStarRatingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxStarRatingModule });
NgxStarRatingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxStarRatingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [NgxStarRatingComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
                ],
                exports: [NgxStarRatingComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxStarRatingModule, { declarations: function () { return [NgxStarRatingComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]; }, exports: function () { return [NgxStarRatingComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ }),

/***/ 15611:
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/alerts/alerts.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsComponent": () => (/* binding */ AlertsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 85512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);






function AlertsComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngb-alert", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function AlertsComponent_div_85_Template_ngb_alert_close_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const color_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.close(color_r2, ctx_r3.alertData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("type", color_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("A simple ", color_r2.color, " alert\u2014check it out!");
} }
function AlertsComponent_ngb_alert_120_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function AlertsComponent_ngb_alert_120_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.successMessage, " ");
} }
/**
 * UI-alerts component
 */
class AlertsComponent {
    constructor() {
        this.successMessage = '';
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.reset();
    }
    ngOnInit() {
        this._success.subscribe(message => this.successMessage = message);
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Alerts', active: true }];
        this._fetchData();
    }
    changeSuccessMessage() { this._success.next(`${new Date()} - Message successfully changed.`); }
    _fetchData() {
        this.alertData = _data__WEBPACK_IMPORTED_MODULE_0__.alertData;
    }
    /**
     * Close the alert
     * @param alert fetch the alert for close
     */
    // tslint:disable-next-line: no-shadowed-variable
    close(alert, alertData) {
        alertData.splice(alertData.indexOf(alert), 1);
    }
    reset() {
        this.alertData = Array.from(_data__WEBPACK_IMPORTED_MODULE_0__.alertData);
    }
}
AlertsComponent.ɵfac = function AlertsComponent_Factory(t) { return new (t || AlertsComponent)(); };
AlertsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AlertsComponent, selectors: [["app-alerts"]], decls: 139, vars: 15, consts: [[1, "container-fluid"], ["title", "Alerts", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "highlighter-rouge"], [1, ""], ["type", "primary", 3, "dismissible"], ["type", "secondary", 3, "dismissible"], ["type", "success", 3, "dismissible"], ["type", "danger", 3, "dismissible"], ["type", "warning", 3, "dismissible"], ["type", "info", 3, "dismissible"], ["href", "javascript: void(0);", 1, "alert-link"], [4, "ngFor", "ngForOf"], [1, "card-title", "mb-4"], [1, "custom-alert"], ["type", "primary", "role", "alert"], [1, "mdi", "mdi-bullseye-arrow", "me-2"], ["type", "secondary", "role", "alert"], [1, "mdi", "mdi-grease-pencil", "me-2"], ["type", "success", "role", "alert"], [1, "mdi", "mdi-check-all", "me-2"], ["type", "danger", "role", "alert"], [1, "mdi", "mdi-block-helper", "me-2"], ["type", "warning", "role", "alert"], [1, "mdi", "mdi-alert-outline", "me-2"], ["type", "info", "role", "alert"], [1, "mdi", "mdi-alert-circle-outline", "me-2"], ["id", "liveAlertPlaceholder"], ["type", "success", 3, "closed", 4, "ngIf"], ["type", "button", "id", "liveAlertBtn", 1, "btn", "btn-primary", 3, "click"], ["role", "alert", 1, "alert", "alert-success"], [1, "alert-heading"], [1, "mb-0"], [1, "custom-alert", 3, "type", "close"], ["type", "success", 3, "closed"], ["selfClosingAlert", ""]], template: function AlertsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Default Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the four ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "required");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " contextual classes (e.g., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, ".alert-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "). For inline dismissal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ngb-alert", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " A simple primary alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ngb-alert", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " A simple secondary alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ngb-alert", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " A simple success alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ngb-alert", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " A simple danger alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ngb-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " A simple warning alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ngb-alert", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " A simple info alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Link color");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, ".alert-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " utility class to quickly provide matching colored links within any alert. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "ngb-alert", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " A simple primary alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "ngb-alert", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " A simple secondary alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "ngb-alert", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " A simple success alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "ngb-alert", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " A simple danger alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "ngb-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " A simple warning alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "ngb-alert", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " A simple info alert with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "an example link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, ". Give it a click if you like. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Dismissing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Add a dismiss button and the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, ".alert-dismissible");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " class, which adds extra padding to the right of the alert and positions the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, ".close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, AlertsComponent_div_85_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "With Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "ngb-alert", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " A simple primary alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "ngb-alert", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, " A simple secondary alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "ngb-alert", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, " A simple success alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "ngb-alert", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, " A simple danger alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "ngb-alert", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " A simple warning alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "ngb-alert", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, " A simple info alert\u2014check it out! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "Live Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](120, AlertsComponent_ngb_alert_120_Template, 3, 1, "ngb-alert", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlertsComponent_Template_button_click_121_listener() { return ctx.changeSuccessMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Show live alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Additional content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Alerts can also contain additional HTML elements like headings, paragraphs and dividers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Well done!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.alertData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.successMessage);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbAlert, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 85512:
/*!*****************************************!*\
  !*** ./src/app/pages/ui/alerts/data.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alertData": () => (/* binding */ alertData)
/* harmony export */ });
const alertData = [
    {
        color: 'primary'
    },
    {
        color: 'secondary'
    },
    {
        color: 'success',
    },
    {
        color: 'danger',
    },
    {
        color: 'warning',
    },
    {
        color: 'info',
    }
];



/***/ }),

/***/ 57856:
/*!*******************************************************!*\
  !*** ./src/app/pages/ui/buttons/buttons.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonsComponent": () => (/* binding */ ButtonsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);



/**
 * UI-buttons component
 */
class ButtonsComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Buttons', active: true }];
    }
}
ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) { return new (t || ButtonsComponent)(); };
ButtonsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ButtonsComponent, selectors: [["app-buttons"]], decls: 465, vars: 1, consts: [[1, "container-fluid"], ["title", "Buttons", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "button-items"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-light"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-dark"], ["type", "button", 1, "btn", "btn-link"], ["type", "button", 1, "btn", "btn-secondary"], [1, "col-xl-6"], [1, "highlighter-rouge"], ["type", "button", 1, "btn", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-outline-light"], ["type", "button", 1, "btn", "btn-outline-success"], ["type", "button", 1, "btn", "btn-outline-info"], ["type", "button", 1, "btn", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-outline-dark"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded"], ["type", "button", 1, "btn", "btn-light", "btn-rounded"], ["type", "button", 1, "btn", "btn-success", "btn-rounded"], ["type", "button", 1, "btn", "btn-info", "btn-rounded"], ["type", "button", 1, "btn", "btn-warning", "btn-rounded"], ["type", "button", 1, "btn", "btn-danger", "btn-rounded"], ["type", "button", 1, "btn", "btn-dark", "btn-rounded"], ["type", "button", 1, "btn", "btn-link", "btn-rounded"], ["type", "button", 1, "btn", "btn-secondary", "btn-rounded"], ["type", "button", 1, "btn", "btn-primary", "btn-soft-primary"], ["type", "button", 1, "btn", "btn-success", "btn-soft-success"], ["type", "button", 1, "btn", "btn-info", "btn-soft-info"], ["type", "button", 1, "btn", "btn-warning", "btn-soft-warning"], ["type", "button", 1, "btn", "btn-danger", "btn-soft-danger"], ["type", "button", 1, "btn", "btn-dark", "btn-soft-dark"], ["type", "button", 1, "btn", "btn-secondary", "btn-soft-secondary"], [1, "uil", "uil-arrow-right", "ml-2"], [1, "uil", "uil-check", "me-2"], [1, "uil", "uil-exclamation-triangle", "me-2"], [1, "uil", "uil-exclamation-octagon", "me-2"], ["type", "button", 1, "btn", "btn-primary", "btn-lg"], ["type", "button", 1, "btn", "btn-light", "btn-lg"], ["type", "button", 1, "btn", "btn-primary", "btn-sm"], ["type", "button", 1, "btn", "btn-light", "btn-sm"], ["type", "button", 1, "btn", "btn-primary", "w-xs"], ["type", "button", 1, "btn", "btn-danger", "w-sm"], ["type", "button", 1, "btn", "btn-warning", "w-md"], ["type", "button", 1, "btn", "btn-success", "w-lg"], ["href", "javascript:void(0);", "role", "button", 1, "btn", "btn-primary"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", "value", "Input", 1, "btn", "btn-info"], ["type", "submit", "value", "Submit", 1, "btn", "btn-danger"], ["type", "reset", "value", "Reset", 1, "btn", "btn-warning"], ["type", "button", "data-toggle", "button", "aria-pressed", "false", 1, "btn", "btn-primary"], [1, "d-grid", "gap-2"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "mb-1"], ["role", "group", "aria-label", "Basic checkbox toggle button group", 1, "btn-group", "mt-2", "mt-xl-0"], ["type", "checkbox", "id", "btncheck1", "autocomplete", "off", "checked", "", 1, "btn-check"], ["for", "btncheck1", 1, "btn", "btn-primary"], ["type", "checkbox", "id", "btncheck2", "autocomplete", "off", 1, "btn-check"], ["for", "btncheck2", 1, "btn", "btn-primary"], ["type", "checkbox", "id", "btncheck3", "autocomplete", "off", 1, "btn-check"], ["for", "btncheck3", 1, "btn", "btn-primary"], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group", "mt-2", "mt-xl-0"], ["type", "radio", "name", "btnradio", "id", "btnradio1", "autocomplete", "off", "checked", "", 1, "btn-check"], ["for", "btnradio1", 1, "btn", "btn-light"], ["type", "radio", "name", "btnradio", "id", "btnradio2", "autocomplete", "off", 1, "btn-check"], ["for", "btnradio2", 1, "btn", "btn-light"], ["type", "radio", "name", "btnradio", "id", "btnradio3", "autocomplete", "off", 1, "btn-check"], ["for", "btnradio3", 1, "btn", "btn-light"], [1, "col-md-6"], [1, "d-flex", "flex-wrap", "gap-2"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], [1, "d-flex", "flex-wrap", "gap-3", "mt-4", "mt-md-0"], [1, "bx", "bx-menu-alt-right"], [1, "bx", "bx-menu"], [1, "bx", "bx-menu-alt-left"], ["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar"], ["role", "group", "aria-label", "First group", 1, "btn-group", "me-2"], ["role", "group", "aria-label", "Second group", 1, "btn-group", "me-2"], ["role", "group", "aria-label", "Third group", 1, "btn-group"], [1, "d-flex", "flex-wrap", "gap-3", "align-items-center"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-lg"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-sm"], [1, "d-flex", "flex-wrap", "gap-3", "align-items-center", "mt-3"], ["role", "group", "aria-label", "Vertical button group", 1, "btn-group-vertical"], ["role", "group", "ngbDropdown", "", 1, "btn-group"], ["id", "btnGroupVerticalDrop1", "type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-light", "dropdown-toggle"], [1, "mdi", "mdi-chevron-down"], ["aria-labelledby", "btnGroupVerticalDrop1", "ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["role", "group", "aria-label", "Vertical radio toggle button group", 1, "btn-group-vertical"], ["type", "radio", "name", "vbtn-radio", "id", "vbtn-radio1", "autocomplete", "off", "checked", "", 1, "btn-check"], ["for", "vbtn-radio1", 1, "mt-0", "mb-0", "btn", "btn-outline-danger"], ["type", "radio", "name", "vbtn-radio", "id", "vbtn-radio2", "autocomplete", "off", 1, "btn-check"], ["for", "vbtn-radio2", 1, "mt-0", "mb-0", "btn", "btn-outline-danger"], ["type", "radio", "name", "vbtn-radio", "id", "vbtn-radio3", "autocomplete", "off", 1, "btn-check"], ["for", "vbtn-radio3", 1, "mt-0", "mb-0", "btn", "btn-outline-danger"]], template: function ButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Default buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Bootstrap includes six predefined button styles, each serving its own semantic purpose.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Outline buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Replace the default modifier classes with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, ".btn-outline-*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " ones to remove all background images and colors on any button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Rounded buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Use class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " for button round border.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Soft background buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, ".btn-soft-*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " class with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, ".btn-*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " color button for a Soft background buttons.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Buttons with icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Add icon in button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " Success ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, " Warning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " Danger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Buttons Sizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, ".btn-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, ".btn-sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, " for additional sizes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Large button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Large button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Small button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Small button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Buttons width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, ".w-xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, ".w-sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, ".w-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, " .w-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, " class for additional buttons width. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Button tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, ".btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, " classes are designed to be used with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "<button>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, " element. However, you can also use these classes on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "<a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "<input>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, " elements (though some browsers may apply a slightly different rendering). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Toggle states");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "data-toggle=\"button\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, " to toggle a button\u2019s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, " state. If you\u2019re pre-toggling a button, you must manually add the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, ".active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, " class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "and");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "aria-pressed=\"true\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, " to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "<button>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, " Single toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Block Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "Create block level buttons\u2014those that span the full width of a parent\u2014by adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, ".gap-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "Block level button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Block level button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "Checkbox & Radio Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "Bootstrap\u2019s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, ".button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, " styles can be applied to other elements, such as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, " <label>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "s, to provide checkbox or radio style button toggling. Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "data-toggle=\"buttons\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, " to a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, ".btn-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, " containing those modified buttons to enable toggling in their respective styles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, "Checked-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](282, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Checked-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](285, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, "Checked-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](290, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "label", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Radio 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "label", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "Radio 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "label", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "Radio 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Button Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "Wrap a series of buttons with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, ".btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, ".btn-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](329, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](334, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](336, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](338, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](341, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](343, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](345, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "Button toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, "Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](365, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](369, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378, "Button Group Sizing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "Instead of applying button sizing classes to every button in a group, just add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](382, ".btn-group-*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, " to each ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "code", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](385, ".btn-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, ", including each one when nesting multiple groups.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](390, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](408, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](421, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](426, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](434, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](435, "Vertical variation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](437, "Make a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](438, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](441, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, " Dropdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](445, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](448, "Dropdown link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](450, "Dropdown link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](454, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](456, "input", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "label", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](458, "Radio 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](459, "input", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "label", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, "Radio 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](462, "input", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "label", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](464, "Radio 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 23149:
/*!***************************************************!*\
  !*** ./src/app/pages/ui/cards/cards.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsComponent": () => (/* binding */ CardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);


/**
 * UI-cards component
 */
class CardsComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Cards', active: true }];
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(); };
CardsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], decls: 278, vars: 1, consts: [[1, "container-fluid"], ["title", "Cards", 3, "breadcrumbItems"], [1, "row"], [1, "col-md-6", "col-xl-3"], [1, "card"], ["src", "assets/images/small/img-1.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], [1, "card-body"], [1, "card-title", "mt-0"], [1, "card-text"], ["href", "javascript: void(0);", 1, "btn", "btn-primary"], ["src", "assets/images/small/img-2.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], ["href", "javascript: void(0);", 1, "card-link"], ["src", "assets/images/small/img-3.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], [1, "card-subtitle", "font-14", "text-muted"], ["src", "assets/images/small/img-4.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "col-md-6"], [1, "card", "card-body"], [1, "col-lg-4"], [1, "card", "card-body", "text-center"], [1, "card", "card-body", "text-right"], [1, "card-header", "mt-0"], [1, "card-header"], [1, "card-blockquote", "mb-0"], [1, "blockquote-footer", "font-size-12"], ["title", "Source Title"], [1, "card-footer", "text-muted"], ["src", "assets/images/small/img-5.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], [1, "text-muted"], ["src", "assets/images/small/img-7.jpg", "alt", "Card image cap", 1, "card-img-bottom", "img-fluid"], ["src", "assets/images/small/img-6.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "card-img-overlay"], [1, "card-title", "text-white", "mt-0"], [1, "card-text", "text-light"], [1, "text-white"], [1, "col-lg-6"], [1, "row", "no-gutters", "align-items-center"], [1, "col-md-4"], ["src", "assets/images/small/img-2.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "col-md-8"], [1, "card-title"], ["src", "assets/images/small/img-3.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "card", "bg-primary", "text-white-50"], [1, "mt-0", "mb-4", "text-white"], [1, "uil", "uil-user", "me-3"], [1, "card", "bg-success", "text-white-50"], [1, "uil", "uil-check-circle", "me-3"], [1, "card", "bg-info", "text-white-50"], [1, "uil", "uil-question-circle", "me-3"], [1, "card", "bg-warning", "text-white-50"], [1, "uil", "uil-exclamation-triangle", "me-3"], [1, "card", "bg-danger", "text-white-50"], [1, "uil", "uil-exclamation-octagon", "me-3"], [1, "card", "bg-dark", "text-light"], [1, "mt-0", "mb-4", "text-light"], [1, "uil", "uil-arrow-circle-right", "me-3"], [1, "card", "border", "border-primary"], [1, "card-header", "bg-transparent", "border-primary"], [1, "my-0", "text-primary"], [1, "card", "border", "border-danger"], [1, "card-header", "bg-transparent", "border-danger"], [1, "my-0", "text-danger"], [1, "card", "border", "border-success"], [1, "card-header", "bg-transparent", "border-success"], [1, "my-0", "text-success"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Cras justo odio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Dapibus ac facilisis in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Card link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Another link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Support card subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Card link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Another link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Special title treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "With supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Special title treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "With supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Special title treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "With supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Special title treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "With supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Special title treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "With supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Featured");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Special title treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "With supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " Quote ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "blockquote", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "footer", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "cite", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, " Featured ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Special title treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "With supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " 2 days ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "small", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "small", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "h4", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "This is a wider card with supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "small", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "This is a wider card with supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "small", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, " Primary Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, " Success Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Info Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Warning Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](232, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "Danger Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Dark Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "h5", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Primary outline Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "h5", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "Danger outline Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "h5", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](271, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "Success Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 32317:
/*!*********************************************************!*\
  !*** ./src/app/pages/ui/carousel/carousel.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": () => (/* binding */ CarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);



function CarouselComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 12);
} }
function CarouselComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} }
function CarouselComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 14);
} }
function CarouselComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} }
function CarouselComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
} }
function CarouselComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 17);
} }
function CarouselComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 18);
} }
function CarouselComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
} }
function CarouselComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 20);
} }
function CarouselComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "First slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CarouselComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Second slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CarouselComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Third slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CarouselComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 26);
} }
function CarouselComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 27);
} }
function CarouselComponent_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 28);
} }
/**
 * UI-carousel component
 */
class CarouselComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Carousel', active: true }];
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 75, vars: 6, consts: [[1, "container-fluid"], ["title", "Carousel", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", ""], [3, "showNavigationIndicators"], [1, "card-sub-title"], ["src", "assets/images/small/img-1.jpg", "alt", "Random first slide"], ["src", "assets/images/small/img-2.jpg", "alt", "Random second slide"], ["src", "assets/images/small/img-3.jpg", "alt", "Random third slide"], ["src", "assets/images/small/img-4.jpg", "alt", "first slide", 1, "d-block", "img-fluid"], ["src", "assets/images/small/img-5.jpg", "alt", "second slide", 1, "d-block", "img-fluid"], ["src", "assets/images/small/img-6.jpg", "alt", "third slide", 1, "d-block", "img-fluid"], ["src", "assets/images/small/img-3.jpg", "alt", "first slide", 1, "d-block", "img-fluid"], ["src", "assets/images/small/img-2.jpg", "alt", "second slide", 1, "d-block", "img-fluid"], ["src", "assets/images/small/img-1.jpg", "alt", "third slide", 1, "d-block", "img-fluid"], ["src", "assets/images/small/img-5.jpg", "alt", "first slide", 1, "d-block", "img-fluid"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "text-white"], ["src", "assets/images/small/img-3.jpg", "alt", "second slide", 1, "d-block", "img-fluid"], ["src", "assets/images/small/img-2.jpg", "alt", "third slide", 1, "d-block", "img-fluid"], ["src", "assets/images/small/img-1.jpg", "alt", "first slide", 1, "animated", "fadeIn", "d-block", "img-fluid"], ["src", "assets/images/small/img-2.jpg", "alt", "second slide", 1, "animated", "fadeIn", "d-block", "img-fluid"], ["src", "assets/images/small/img-3.jpg", "alt", "third slide", 1, "animated", "fadeIn", "d-block", "img-fluid"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Slides only");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Here\u2019s a carousel with slides only. Note the presence of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ".d-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ".img-fluid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " on carousel images to prevent browser default image alignment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ngb-carousel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CarouselComponent_ng_template_17_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CarouselComponent_ng_template_18_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CarouselComponent_ng_template_19_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "With controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Adding in the previous and next controls:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngb-carousel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CarouselComponent_ng_template_28_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CarouselComponent_ng_template_29_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CarouselComponent_ng_template_30_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "With indicators");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "You can also add the indicators to the carousel, alongside the controls, too.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ngb-carousel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, CarouselComponent_ng_template_40_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, CarouselComponent_ng_template_41_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, CarouselComponent_ng_template_42_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "With captions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Add captions to your slides easily with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, ".carousel-caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " element within any ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, ".carousel-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ngb-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, CarouselComponent_ng_template_57_Template, 6, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, CarouselComponent_ng_template_58_Template, 6, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, CarouselComponent_ng_template_59_Template, 6, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Crossfade");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, ".carousel-fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " to your carousel to animate slides with a fade transition instead of a slide.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "ngb-carousel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, CarouselComponent_ng_template_72_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, CarouselComponent_ng_template_73_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, CarouselComponent_ng_template_74_Template, 1, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationArrows", ctx.showNavigationArrows)("showNavigationIndicators", ctx.showNavigationIndicators);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationIndicators", ctx.showNavigationIndicators);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationIndicators", !ctx.showNavigationIndicators);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationIndicators", ctx.showNavigationIndicators);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbSlide], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 66845:
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/colors/colors.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorsComponent": () => (/* binding */ ColorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);


/**
 * UI-colors component
 */
class ColorsComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Colors', active: true }];
    }
}
ColorsComponent.ɵfac = function ColorsComponent_Factory(t) { return new (t || ColorsComponent)(); };
ColorsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ColorsComponent, selectors: [["app-colors"]], decls: 171, vars: 1, consts: [[1, "container-fluid"], ["title", "Colors", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-body"], [1, "mb-3", "font-size-18", "text-center"], [1, "col-lg-4"], [1, "text-center"], [1, "avatar-md", "bg-soft-primary", "mx-auto", "rounded", "my-2"], [1, "text-muted", "mt-3"], [1, "avatar-md", "bg-gradient-primary", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-primary", "mx-auto", "rounded", "my-2"], [1, "mb-3", "text-center"], [1, "avatar-md", "bg-soft-success", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-gradient-success", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-success", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-soft-info", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-gradient-info", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-info", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-soft-warning", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-gradient-warning", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-warning", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-soft-danger", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-gradient-danger", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-danger", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-soft-dark", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-gradient-dark", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-dark", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-soft-light", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-gradient-light", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-light", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-soft-secondary", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-gradient-secondary", "mx-auto", "rounded", "my-2"], [1, "avatar-md", "bg-secondary", "mx-auto", "rounded", "my-2"]], template: function ColorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Hex : #5b73e8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "bg-soft-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "bg-gradient-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "bg-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Hex : #34c38f");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "bg-soft-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "bg-gradient-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "bg-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Hex : #50a5f1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "bg-soft-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "bg-gradient-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "bg-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Hex : #f1b44c");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "bg-soft-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "bg-gradient-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "bg-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Hex : #f46a6a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "bg-soft-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "bg-gradient-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "bg-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Hex : #343a40");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "bg-soft-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "bg-gradient-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "bg-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Hex : #f5f6f8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "bg-soft-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "bg-gradient-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "bg-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Hex : #74788d");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "bg-soft-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "bg-gradient-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "bg-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5583:
/*!***********************************************************!*\
  !*** ./src/app/pages/ui/dropdowns/dropdowns.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownsComponent": () => (/* binding */ DropdownsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);



/**
 * UI-dropdown component
 */
class DropdownsComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Dropdowns', active: true }];
    }
}
DropdownsComponent.ɵfac = function DropdownsComponent_Factory(t) { return new (t || DropdownsComponent)(); };
DropdownsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DropdownsComponent, selectors: [["app-dropdowns"]], decls: 432, vars: 1, consts: [[1, "container-fluid"], ["title", "Dropdowns", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "highlighter-rouge"], [1, "col-sm-6"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "mdi", "mdi-chevron-down"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript: void(0);", 1, "dropdown-item"], ["ngbDropdown", "", 1, "dropdown", "mt-4", "mt-sm-0"], ["ngbDropdownToggle", "", 1, "btn", "btn-light", "dropdown-toggle"], [1, "card-title-desc", "mb-3"], [1, ""], ["ngbDropdown", "", 1, "btn-group", "me-1", "mt-2"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "dropdown-divider"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-light", "dropdown-toggle"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-success", "dropdown-toggle"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-info", "dropdown-toggle"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-warning", "dropdown-toggle"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-danger", "dropdown-toggle"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle", "dropdown-toggle-split"], ["type", "button", 1, "btn", "btn-light"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-light", "dropdown-toggle", "dropdown-toggle-split"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-success", "dropdown-toggle", "dropdown-toggle-split"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-info", "dropdown-toggle", "dropdown-toggle-split"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-warning", "dropdown-toggle", "dropdown-toggle-split"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-danger", "dropdown-toggle", "dropdown-toggle-split"], ["ngbDropdownToggle", "", 1, "btn", "btn-primary", "btn-lg", "dropdown-toggle"], ["type", "button", 1, "btn", "btn-light", "btn-lg"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-lg", "btn-light", "dropdown-toggle", "dropdown-toggle-split"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "btn-sm", "dropdown-toggle"], ["type", "button", 1, "btn", "btn-light", "btn-sm"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-sm", "btn-light", "dropdown-toggle", "dropdown-toggle-split"], ["ngbDropdown", "", "placement", "top", 1, "btn-group", "dropup", "mt-2", "me-1"], [1, "mdi", "mdi-chevron-up"], ["ngbDropdown", "", 1, "btn-group"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-secondary", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], ["ngbDropdown", "", "placement", "right", 1, "btn-group", "mt-2", "me-1", "dropright"], [1, "mdi", "mdi-chevron-right"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-light", "dropdown-toggle-split", "dropdown-toggle"], ["ngbDropdown", "", "placement", "left", 1, "btn-group", "mt-2", "me-1", "dropleft"], [1, "mdi", "mdi-chevron-left"], [1, "btn-group", "mt-2", "me-1"], ["ngbDropdown", "", "placement", "left", 1, "btn-group", "dropleft"]], template: function DropdownsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Single button dropdowns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Any single ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ".btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " can be turned into a dropdown toggle with some markup changes. Here\u2019s how you can put them to work with either ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "<button>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " elements:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Dropdown button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Dropdown link ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Variant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "The best part is you can do this with any button variant, too:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Success ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Warning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Danger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Split button dropdowns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "The best part is you can do this with any button variant, too:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Sizing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, " Large button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, " Large button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](266, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, " Small button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](280, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, " Small button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](287, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, "Dropup variation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "Trigger dropdown menus above elements by adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, ".dropup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, " to the parent element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "Dropup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](321, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, " Split dropup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](328, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](336, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "Menu alignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, ".dropdown-menu-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, " to a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, ".dropdown-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, " to right align the dropdown menu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, " Menu is right-aligned ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](355, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, "Dropright variation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Trigger dropdown menus at the right of the elements by adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, ".dropright");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, " to the parent element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, " Dropright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](378, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](381, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](385, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, " Split dropright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](390, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](393, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](395, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "Dropleft variation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, "Trigger dropdown menus at the right of the elements by adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, ".dropleft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, " to the parent element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](410, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, " Dropleft ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](418, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](422, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](429, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, " Split Dropleft ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 31102:
/*!*******************************************************!*\
  !*** ./src/app/pages/ui/general/general.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralComponent": () => (/* binding */ GeneralComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);



function GeneralComponent_ng_template_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Previous");
} }
function GeneralComponent_ng_template_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Next");
} }
function GeneralComponent_ng_template_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Previous");
} }
function GeneralComponent_ng_template_196_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Next");
} }
function GeneralComponent_ng_template_198_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Previous");
} }
function GeneralComponent_ng_template_199_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Next");
} }
/**
 * UI-general component
 */
class GeneralComponent {
    constructor() {
        this.page = 1;
        this.pages = 2;
        this.largepage = 1;
        this.smallpage = 2;
        this.alignpage1 = 1;
        this.alignpage2 = 2;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'General', active: true }];
    }
}
GeneralComponent.ɵfac = function GeneralComponent_Factory(t) { return new (t || GeneralComponent)(); };
GeneralComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GeneralComponent, selectors: [["app-general"]], decls: 267, vars: 23, consts: [[1, "container-fluid"], ["title", "General", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "col-lg-6"], [1, "card-title"], [1, "card-title-desc"], [1, "badge", "bg-primary"], [1, "badge", "bg-success", "ms-1"], [1, "badge", "bg-info", "ms-1"], [1, "badge", "bg-warning", "ms-1"], [1, "badge", "bg-danger", "ms-1"], [1, "badge", "bg-dark", "ms-1"], [1, "mt-1"], [1, "badge", "bg-soft-primary"], [1, "badge", "bg-soft-success", "ms-1"], [1, "badge", "bg-soft-info", "ms-1"], [1, "badge", "bg-soft-warning", "ms-1"], [1, "badge", "bg-soft-danger", "ms-1"], [1, "badge", "bg-soft-dark", "ms-1"], [1, "mt-4", "mt-lg-0"], [1, "badge", "rounded-pill", "bg-primary"], [1, "badge", "rounded-pill", "bg-success", "ms-1"], [1, "badge", "rounded-pill", "bg-info", "ms-1"], [1, "badge", "rounded-pill", "bg-warning", "ms-1"], [1, "badge", "rounded-pill", "bg-danger", "ms-1"], [1, "badge", "rounded-pill", "bg-dark", "ms-1"], [1, "badge", "rounded-pill", "bg-soft-primary"], [1, "badge", "rounded-pill", "bg-soft-success", "ms-1"], [1, "badge", "rounded-pill", "bg-soft-info", "ms-1"], [1, "badge", "rounded-pill", "bg-soft-warning", "ms-1"], [1, "badge", "rounded-pill", "bg-soft-danger", "ms-1"], [1, "badge", "rounded-pill", "bg-soft-dark", "ms-1"], [1, "button-items"], ["type", "button", "placement", "top", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-light", "waves-effect"], ["type", "button", "placement", "right", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-light", "waves-effect"], ["type", "button", "placement", "bottom", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-light", "waves-effect"], ["type", "button", "placement", "left", "popoverTitle", "Popover Title", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-light", "waves-effect"], ["type", "button", "ngbPopover", "You see, I show up on hover!", "triggers", "mouseenter:mouseleave", "popoverTitle", "Hover Popover", 1, "btn", "btn-success", "waves-effect", "waves-light"], ["type", "button", "ngbTooltip", "Tooltip on top", "placement", "top", 1, "btn", "btn-primary"], ["type", "button", "ngbTooltip", "Tooltip on right", "placement", "right", 1, "btn", "btn-primary"], ["type", "button", "ngbTooltip", "Tooltip on bottom", "placement", "bottom", 1, "btn", "btn-primary"], ["type", "button", "ngbTooltip", "Tooltip on left", "placement", "left", 1, "btn", "btn-primary"], [1, "card-title", "mb-4"], [1, "col-xl-6"], [1, "font-size-14"], [3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "boundaryLinks", "pageChange"], ["aria-label", "Custom pagination", 3, "collectionSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], [1, "mt-4", "mt-xl-0"], ["aria-label", "..."], [1, "pagination"], [1, "page-item", "disabled"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], [1, "page-item"], ["href", "javascript:void(0)", 1, "page-link"], [1, "page-item", "active"], [1, "sr-only"], [1, "page-link"], [1, "mdi", "mdi-chevron-left"], [1, "mdi", "mdi-chevron-right"], [1, "mt-4"], ["size", "lg", "aria-label", "Custom pagination", 3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "pageChange"], ["size", "sm", "aria-label", "Custom pagination", 3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "pageChange"], [1, "d-flex", "justify-content-center", 3, "collectionSize", "page", "pageChange"], [1, "d-flex", "justify-content-end", 3, "collectionSize", "page", "pageChange"], ["role", "status", 1, "spinner-border", "text-primary", "m-1"], ["role", "status", 1, "spinner-border", "text-secondary", "m-1"], ["role", "status", 1, "spinner-border", "text-success", "m-1"], ["role", "status", 1, "spinner-border", "text-info", "m-1"], ["role", "status", 1, "spinner-border", "text-warning", "m-1"], ["role", "status", 1, "spinner-border", "text-danger", "m-1"], ["role", "status", 1, "spinner-border", "text-dark", "m-1"], ["role", "status", 1, "spinner-grow", "text-primary", "m-1"], ["role", "status", 1, "spinner-grow", "text-secondary", "m-1"], ["role", "status", 1, "spinner-grow", "text-success", "m-1"], ["role", "status", 1, "spinner-grow", "text-info", "m-1"], ["role", "status", 1, "spinner-grow", "text-warning", "m-1"], ["role", "status", 1, "spinner-grow", "text-danger", "m-1"], ["role", "status", 1, "spinner-grow", "text-dark", "m-1"]], template: function GeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Add any of the below mentioned modifier classes to change the appearance of a badge.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Pill badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, ".badge-pill");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " modifier class to make badges more rounded (with a larger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "border-radius");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " and additional horizontal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "). Useful if you miss the badges from v3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Popovers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Add small overlay content, like those found in iOS, to any element for housing secondary information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " Popover on top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Popover on right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Popover on bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " Popover on left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Hover popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Tooltips");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Hover over the links below to see tooltips:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " Tooltip on top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " Tooltip on right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Tooltip on bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, " Tooltip on left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "h4", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Default Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Pagination links indicate a series of related content exists across multiple pages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "ngb-pagination", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function GeneralComponent_Template_ngb_pagination_pageChange_127_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "ngb-pagination", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function GeneralComponent_Template_ngb_pagination_pageChange_128_listener($event) { return ctx.pages = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, GeneralComponent_ng_template_129_Template, 1, 0, "ng-template", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](130, GeneralComponent_ng_template_130_Template, 1, 0, "ng-template", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Disabled and active states");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Pagination links are customizable for different circumstances. Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, ".disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, " for links that appear un-clickable and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, ".active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, " to indicate the current page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "nav", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "ul", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "li", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "nav", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "ul", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "li", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Sizing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Fancy larger or smaller pagination? Add size=");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "\"lg\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "\"sm\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, " for additional sizes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "ngb-pagination", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function GeneralComponent_Template_ngb_pagination_pageChange_194_listener($event) { return ctx.largepage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](195, GeneralComponent_ng_template_195_Template, 1, 0, "ng-template", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](196, GeneralComponent_ng_template_196_Template, 1, 0, "ng-template", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "ngb-pagination", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function GeneralComponent_Template_ngb_pagination_pageChange_197_listener($event) { return ctx.smallpage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](198, GeneralComponent_ng_template_198_Template, 1, 0, "ng-template", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](199, GeneralComponent_ng_template_199_Template, 1, 0, "ng-template", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Alignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Change the alignment of pagination components with flexbox utilities.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "ngb-pagination", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function GeneralComponent_Template_ngb_pagination_pageChange_206_listener($event) { return ctx.alignpage1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "ngb-pagination", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function GeneralComponent_Template_ngb_pagination_pageChange_207_listener($event) { return ctx.alignpage2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Border spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Use the border spinners for a lightweight loading indicator.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Growing spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "If you don\u2019t fancy a border spinner, switch to the grow spinner. While it doesn\u2019t technically spin, it does repeatedly grow!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionSize", 50)("page", ctx.page)("maxSize", 5)("rotate", true)("ellipses", false)("boundaryLinks", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionSize", 30)("page", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionSize", 30)("page", ctx.largepage)("maxSize", 5)("rotate", true)("ellipses", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionSize", 30)("page", ctx.smallpage)("maxSize", 5)("rotate", true)("ellipses", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionSize", 30)("page", ctx.alignpage1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionSize", 30)("page", ctx.alignpage2);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbPopover, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbTooltip, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbPaginationPrevious, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbPaginationNext], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 43216:
/*!*************************************************!*\
  !*** ./src/app/pages/ui/grid/grid.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridComponent": () => (/* binding */ GridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);


/**
 * UI-grid component
 */
class GridComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Grid', active: true }];
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(); };
GridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], decls: 119, vars: 1, consts: [[1, "container-fluid"], ["title", "Grid", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "table-responsive"], [1, "table", "table-bordered", "table-striped", "table-nowrap", "mb-0"], ["scope", "col"], ["scope", "col", 1, "text-center"], [1, "fw-normal"], ["scope", "row", 1, "text-nowrap"], ["colspan", "5"], ["colspan", "6"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Grid options");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "See how aspects of the Bootstrap grid system work across multiple devices with a handy table.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "<576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u2265576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " md");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u2265768px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u2265992px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u22651200px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " xxl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u22651400px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Grid behavior");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Horizontal at all times");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Collapsed to start, horizontal above breakpoints");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Max container width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "None (auto)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "540px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "720px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "960px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "1140px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "1320px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Class prefix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, ".col-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, ".col-sm-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, ".col-md-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, ".col-lg-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, ".col-xl-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, ".col-xxl-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "# of columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Gutter width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "24px (12px on each side of a column)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Custom gutters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Nestable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Offsets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Column ordering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 84201:
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/images/images.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagesComponent": () => (/* binding */ ImagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);


/**
 * UI-images component
 */
class ImagesComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Images', active: true }];
    }
}
ImagesComponent.ɵfac = function ImagesComponent_Factory(t) { return new (t || ImagesComponent)(); };
ImagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImagesComponent, selectors: [["app-images"]], decls: 102, vars: 1, consts: [[1, "container-fluid"], ["title", "Images", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "col-md-6"], ["alt", "200x200", "width", "200", "src", "assets/images/small/img-4.jpg", "data-holder-rendered", "true", 1, "rounded", "me-2"], [1, "mt-4", "mt-md-0"], ["alt", "200x200", "src", "assets/images/users/avatar-4.jpg", "data-holder-rendered", "true", 1, "rounded-circle", "avatar-xl"], [1, "highlighter-rouge"], ["alt", "200x200", "width", "200", "src", "assets/images/small/img-3.jpg", "data-holder-rendered", "true", 1, "img-thumbnail"], ["alt", "200x200", "src", "assets/images/users/avatar-3.jpg", "data-holder-rendered", "true", 1, "img-thumbnail", "rounded-circle", "avatar-xl"], [1, ""], ["src", "assets/images/small/img-2.jpg", "alt", "Responsive image", 1, "img-fluid"], [1, "col-lg-12"], [1, "card-title", "mb-4"], [1, "col-lg-4"], ["src", "assets/images/users/avatar-3.jpg", "alt", "", 1, "rounded", "avatar-sm"], [1, "mt-2", "mb-lg-0"], ["src", "assets/images/users/avatar-4.jpg", "alt", "", 1, "rounded", "avatar-md"], ["src", "assets/images/users/avatar-5.jpg", "alt", "", 1, "rounded", "avatar-lg"], ["src", "assets/images/users/avatar-3.jpg", "alt", "", 1, "rounded-circle", "avatar-sm"], ["src", "assets/images/users/avatar-4.jpg", "alt", "", 1, "rounded-circle", "avatar-md"], ["src", "assets/images/users/avatar-5.jpg", "alt", "", 1, "rounded-circle", "avatar-lg"]], template: function ImagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Image Rounded & Circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Use classes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ".rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ".rounded-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Image thumbnails");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "In addition to our border-radius utilities, you can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, ".img-thumbnail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " to give an image a rounded 1px border appearance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Responsive images");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Images in Bootstrap are made responsive with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, ".img-fluid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "max-width: 100%;");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "code", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "height: auto;");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " are applied to the image so that it scales with the parent element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Image Sizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, ".avatar-sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, ".avatar-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, ".avatar-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, ".avatar-sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, ".avatar-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, ".avatar-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 61418:
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/modals/modals.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalsComponent": () => (/* binding */ ModalsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);



function ModalsComponent_ng_template_107_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Modal Heading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_ng_template_107_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const modal_r12 = restoredCtx.$implicit; return modal_r12.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Overflowing text to show scroll behavior");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_ng_template_107_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const modal_r12 = restoredCtx.$implicit; return modal_r12.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalsComponent_ng_template_109_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Extra large modal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_ng_template_109_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const modal_r16 = restoredCtx.$implicit; return modal_r16.dismiss("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalsComponent_ng_template_111_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Large modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_ng_template_111_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const modal_r19 = restoredCtx.$implicit; return modal_r19.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalsComponent_ng_template_113_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Small modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_ng_template_113_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const modal_r22 = restoredCtx.$implicit; return modal_r22.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalsComponent_ng_template_115_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Center modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_ng_template_115_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const modal_r25 = restoredCtx.$implicit; return modal_r25.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalsComponent_ng_template_117_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Scrollable Modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_ng_template_117_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const modal_r28 = restoredCtx.$implicit; return modal_r28.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_ng_template_117_Template_button_click_42_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const modal_r28 = restoredCtx.$implicit; return modal_r28.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
/**
 * UI-modals component
 */
class ModalsComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Modals', active: true }];
    }
    /**
     * Open modal
     * @param content modal content
     */
    openModal(content) {
        this.modalService.open(content, { windowClass: 'modal-holder' });
    }
    /**
     * Open extra large modal
     * @param exlargeModal extra large modal data
     */
    extraLarge(exlargeModal) {
        this.modalService.open(exlargeModal, { size: 'xl', windowClass: 'modal-holder', centered: true });
    }
    /**
     * Open Large modal
     * @param largeDataModal large modal data
     */
    largeModal(largeDataModal) {
        this.modalService.open(largeDataModal, { size: 'lg', windowClass: 'modal-holder', centered: true });
    }
    /**
     * Open small modal
     * @param smallDataModal small modal data
     */
    smallModal(smallDataModal) {
        this.modalService.open(smallDataModal, { size: 'sm', windowClass: 'modal-holder', centered: true });
    }
    /**
     * Open center modal
     * @param centerDataModal center modal data
     */
    centerModal(centerDataModal) {
        this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
    }
    /**
     * Open scroll modal
     * @param scrollDataModal scroll modal data
     */
    scrollModal(scrollDataModal) {
        this.modalService.open(scrollDataModal, { scrollable: true });
    }
}
ModalsComponent.ɵfac = function ModalsComponent_Factory(t) { return new (t || ModalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
ModalsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalsComponent, selectors: [["app-modals"]], decls: 119, vars: 1, consts: [[1, "container-fluid"], ["title", "Modals", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], ["tabindex", "-1", "role", "dialog", 1, "modal", "bs-example-modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "click"], ["id", "myModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], ["id", "myModalLabel", 1, "modal-title", "mt-0"], [1, "font-size-16"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-light", "waves-effect"], ["type", "button", 1, "btn", "btn-primary", "waves-effect", "waves-light"], [1, "mt-5"], [1, "button-items"], ["type", "button", 1, "btn", "btn-success", "waves-effect", "waves-light", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "waves-effect", "waves-light", 3, "click"], [1, "mt-4"], [1, "col-xl-4", "col-md-6"], ["role", "document"], ["content", ""], ["exlargeModal", ""], ["largeDataModal", ""], ["smallDataModal", ""], ["centerDataModal", ""], ["scrollDataModal", ""], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function ModalsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Modals Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Modals are streamlined, but flexible dialog prompts powered by JavaScript. They support a number of use cases from user notification to completely custom content and feature a handful of helpful subcomponents, sizes, and more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Modal title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "One fine body\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Default Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](108); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Standard modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Modal Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Overflowing text to show scroll behavior");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Optional sizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Modals have three optional sizes, available via modifier classes to be placed on a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, ".modal-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_Template_button_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](110); return ctx.extraLarge(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Extra large modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_Template_button_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](112); return ctx.largeModal(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Large modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_Template_button_click_75_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](114); return ctx.smallModal(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Small modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Vertically centered");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, ".modal-dialog-centered");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, ".modal-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " to vertically center the modal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_Template_button_click_91_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](116); return ctx.centerModal(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Center modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Scrollable modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "You can also create a scrollable modal that allows scroll the modal body by adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, ".modal-dialog-scrollable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, ".modal-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalsComponent_Template_button_click_105_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](118); return ctx.scrollModal(_r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Scrollable modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, ModalsComponent_ng_template_107_Template, 19, 0, "ng-template", 31, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, ModalsComponent_ng_template_109_Template, 11, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, ModalsComponent_ng_template_111_Template, 11, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, ModalsComponent_ng_template_113_Template, 11, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, ModalsComponent_ng_template_115_Template, 11, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, ModalsComponent_ng_template_117_Template, 46, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2377:
/*!*****************************************************************!*\
  !*** ./src/app/pages/ui/placeholders/placeholders.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceholdersComponent": () => (/* binding */ PlaceholdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);


class PlaceholdersComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Placeholders', active: true }];
    }
}
PlaceholdersComponent.ɵfac = function PlaceholdersComponent_Factory(t) { return new (t || PlaceholdersComponent)(); };
PlaceholdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlaceholdersComponent, selectors: [["app-placeholders"]], decls: 133, vars: 1, consts: [[1, "container-fluid"], ["title", "Placeholders", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "row", "gap-4"], [1, "col-lg-5"], [1, "card", "shadow-none", "border", "mb-0"], ["src", "assets/images/small/img-1.jpg", "alt", "...", 1, "card-img-top"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "card", "shadow-none", "border", "mb-0"], [1, "card-title", "placeholder-glow"], [1, "placeholder", "col-6"], [1, "card-text", "placeholder-glow"], [1, "placeholder", "col-7"], [1, "placeholder", "col-4"], [1, "placeholder", "col-8"], ["href", "#", "tabindex", "-1", 1, "btn", "btn-primary", "disabled", "placeholder", "col-6"], ["aria-hidden", "true"], ["href", "#", "tabindex", "-1", "aria-hidden", "true", 1, "btn", "btn-primary", "disabled", "placeholder", "col-4"], [1, "mt-4"], [1, "placeholder", "w-75"], [1, "placeholder", 2, "width", "25%"], [1, "placeholder", "col-12", "placeholder-lg"], [1, "placeholder", "col-12", "placeholder-sm"], [1, "placeholder", "col-12", "placeholder-xs"], [1, "placeholder", "col-12"], [1, "placeholder", "col-12", "bg-primary"], [1, "placeholder", "col-12", "bg-secondary"], [1, "placeholder", "col-12", "bg-success"], [1, "placeholder", "col-12", "bg-danger"], [1, "placeholder", "col-12", "bg-warning"], [1, "placeholder", "col-12", "bg-info"], [1, "placeholder", "col-12", "bg-light"], [1, "placeholder", "col-12", "bg-dark"], [1, ""], [1, "placeholder-glow"], [1, "placeholder-wave", "mb-0"]], template: function PlaceholdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Default Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "In the example below, we take a typical card component and recreate it with placeholders applied to create a \u201Cloading card\u201D. Size and proportions are the same between the two.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Placeholders with Grid column");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Create placeholders with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, ".placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " class and a grid column class (e.g., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, ".col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, ") to set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, ". They can replace the text inside an element or be added as a modifier class to an existing component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Placeholders Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "You can change the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " through grid column classes, width utilities, or inline styles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Placeholders Sizing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "The size of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, ".placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "s are based on the typographic style of the parent element. Customize them with sizing modifiers: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, ".placeholder-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, ".placeholder-sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, ", or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, ".placeholder-xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Placeholders Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "By default, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " uses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "currentColor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, ". This can be overridden with a custom color or utility class.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Animation in Placeholders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Animate placeholders with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, ".placeholder-glow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, ".placeholder-wave");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " to better convey the perception of something being ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "actively");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, " loaded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFjZWhvbGRlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 83839:
/*!***************************************************************!*\
  !*** ./src/app/pages/ui/progressbar/progressbar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressbarComponent": () => (/* binding */ ProgressbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);



/**
 * UI-progressbar component
 */
class ProgressbarComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Progress Bars', active: true }];
    }
}
ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(); };
ProgressbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProgressbarComponent, selectors: [["app-progressbar"]], decls: 144, vars: 38, consts: [[1, "container-fluid"], ["title", "Progress Bars", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, ""], [1, "mb-4"], [3, "value"], [1, "mb-0"], ["type", "success", 3, "value"], ["type", "info", 3, "value"], ["type", "warning", 3, "value"], ["type", "danger", 3, "value"], [1, "highlighter-rouge"], ["showValue", "true", 3, "value"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "15", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "15%"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "30%"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "20%"], ["height", "3px", 3, "value"], ["height", "20px", 3, "value"], [3, "value", "striped", "animated"], ["type", "success", 3, "value", "striped", "animated"], ["type", "info", 3, "value", "striped", "animated"], ["type", "warning", 3, "value", "striped", "animated"], ["type", "danger", 3, "value", "striped", "animated"], [1, "col-xl-6"], [1, "highlighter-rounge"], ["type", "success", 3, "value", "animated"], ["type", "info", 3, "value", "animated"], ["type", "warning", 3, "value", "animated"], ["type", "danger", 3, "value", "animated"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Default Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ngb-progressbar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ngb-progressbar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ngb-progressbar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ngb-progressbar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Backgrounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Use background utility classes to change the appearance of individual progress bars.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ngb-progressbar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ngb-progressbar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "ngb-progressbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "ngb-progressbar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Labels Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Add labels to your progress bars by placing text within the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "code", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, ".progress-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "ngb-progressbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Multiple bars");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Include multiple progress bars in a progress component if you need.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "We only set a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "code", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "height");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " value on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "code", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, ".progress-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, ", so if you change that value the outer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "code", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, ".progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " will automatically resize accordingly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "ngb-progressbar", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "ngb-progressbar", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Animated stripes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "The striped gradient can also be animated. Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "code", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, ".progress-bar-animated");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "code", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, ".progress-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " to animate the stripes right to left via CSS3 animations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "ngb-progressbar", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Striped");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "code", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, ".progress-bar-striped");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " to any ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "code", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, ".progress-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " to apply a stripe via CSS gradient over the progress bar\u2019s background color.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "ngb-progressbar", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "ngb-progressbar", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "ngb-progressbar", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "ngb-progressbar", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "ngb-progressbar", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Animated Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "code", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, ".animated-progess");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, " class with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "code", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, ".progress-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " for animated progressbar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "ngb-progressbar", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "ngb-progressbar", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "ngb-progressbar", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "ngb-progressbar", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 75)("striped", true)("animated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 10)("striped", true)("animated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 25)("striped", true)("animated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 50)("striped", true)("animated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 75)("striped", true)("animated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 100)("striped", true)("animated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 25)("animated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 50)("animated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 75)("animated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 100)("animated", true);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbProgressbar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzc2Jhci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 46750:
/*!***************************************************************!*\
  !*** ./src/app/pages/ui/rangeslider/rangeslider.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RangesliderComponent": () => (/* binding */ RangesliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng5-slider */ 38391);



/**
 * UI range-slider component
 */
class RangesliderComponent {
    constructor() {
        this.defaultVal = 10;
        this.option = {
            floor: 10,
            ceil: 100
        };
        this.value = 100;
        this.highValue = 550;
        this.options = {
            floor: 100,
            ceil: 1000
        };
        this.prevalue = 200;
        this.prehighvalue = 880;
        this.preOptions = {
            floor: 0,
            ceil: 1000,
            translate: (value) => {
                return '$' + value;
            },
            showTicksValues: true,
            stepsArray: [
                { value: 100, legend: '0' },
                { value: 250, legend: '250' },
                { value: 500, legend: '500' },
                { value: 750, legend: '750' },
                { value: 1000, legend: '1000' }
            ]
        };
        this.draggableminRangeValue = -456;
        this.draggablemaxRangeValue = 500;
        this.draggableRangeOptions = {
            floor: -1000,
            ceil: 1000,
            draggableRange: true,
            // showTicksValues: true,
            // stepsArray: [
            //   { value: -1000, legend: '0' },
            //   { value: -500, legend: '250' },
            //   { value: 0, legend: '500' },
            //   { value: 500, legend: '750' },
            //   { value: 1000, legend: '1000' }
            // ]
        };
        this.custom = 12;
        this.customOption = {
            floor: 10,
            ceil: 100,
            step: 5
        };
        this.floatValue = 0.5;
        this.floatingOptions = {
            floor: 0,
            ceil: 2,
            step: 0.1
        };
        this.value1 = 100;
        this.minVal = 100;
        this.maxVal = 400;
        this.option1 = {
            floor: 0,
            ceil: 500,
            translate: (value) => {
                return '$' + value;
            }
        };
        this.tickvalue = 10;
        this.tickhighValue = 90;
        this.tickoptions = {
            floor: 0,
            ceil: 100,
            step: 10,
            showTicks: true
        };
        this.draggableminValue = 5;
        this.draggablemaxValue = 8;
        this.draggableoptions = {
            floor: 0,
            ceil: 10,
            draggableRange: true
        };
        this.tickValue = 5;
        this.tickValueoptions = {
            showTicksValues: true,
            stepsArray: [
                { value: 1, legend: 'Very poor' },
                { value: 2 },
                { value: 3, legend: 'Fair' },
                { value: 4 },
                { value: 5, legend: 'Average' },
                { value: 6 },
                { value: 7, legend: 'Good' },
                { value: 8 },
                { value: 9, legend: 'Excellent' }
            ]
        };
        this.visibleSelection = 5;
        this.visibleBarOptions = {
            floor: 0,
            ceil: 10,
            showSelectionBar: true
        };
        this.logscale = 1;
        this.logscaleoptions = {
            floor: 1,
            ceil: 100,
            logScale: true,
            showTicks: true
        };
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Range Slider', active: true }];
    }
}
RangesliderComponent.ɵfac = function RangesliderComponent_Factory(t) { return new (t || RangesliderComponent)(); };
RangesliderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RangesliderComponent, selectors: [["app-rangeslider"]], decls: 76, vars: 31, consts: [[1, "container-fluid"], ["title", "Range Slider", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "col-md-6"], [1, "p-3"], [1, "font-size-14", "mb-3", "mt-0"], [3, "value", "options", "valueChange"], [3, "value", "highValue", "options", "valueChange", "highValueChange"]], template: function RangesliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "ION Range slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Cool, comfortable, responsive and easily customizable range slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function RangesliderComponent_Template_ng5_slider_valueChange_15_listener($event) { return ctx.defaultVal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Min-Max");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ng5-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function RangesliderComponent_Template_ng5_slider_valueChange_20_listener($event) { return ctx.value = $event; })("highValueChange", function RangesliderComponent_Template_ng5_slider_highValueChange_20_listener($event) { return ctx.highValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Prefix");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ng5-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function RangesliderComponent_Template_ng5_slider_valueChange_26_listener($event) { return ctx.prevalue = $event; })("highValueChange", function RangesliderComponent_Template_ng5_slider_highValueChange_26_listener($event) { return ctx.prehighvalue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ng5-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function RangesliderComponent_Template_ng5_slider_valueChange_31_listener($event) { return ctx.draggableminRangeValue = $event; })("highValueChange", function RangesliderComponent_Template_ng5_slider_highValueChange_31_listener($event) { return ctx.draggablemaxRangeValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Slider with custom step value");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function RangesliderComponent_Template_ng5_slider_valueChange_37_listener($event) { return ctx.custom = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Slider with floating point values");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function RangesliderComponent_Template_ng5_slider_valueChange_42_listener($event) { return ctx.floatValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Slider with custom display function");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "ng5-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function RangesliderComponent_Template_ng5_slider_valueChange_48_listener($event) { return ctx.value1 = $event; })("highValueChange", function RangesliderComponent_Template_ng5_slider_highValueChange_48_listener($event) { return ctx.maxVal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Slider with ticks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "ng5-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function RangesliderComponent_Template_ng5_slider_valueChange_53_listener($event) { return ctx.tickvalue = $event; })("highValueChange", function RangesliderComponent_Template_ng5_slider_highValueChange_53_listener($event) { return ctx.tickhighValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Slider with draggable range");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "ng5-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function RangesliderComponent_Template_ng5_slider_valueChange_59_listener($event) { return ctx.draggableminValue = $event; })("highValueChange", function RangesliderComponent_Template_ng5_slider_highValueChange_59_listener($event) { return ctx.draggablemaxValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Slider with logarithmic scale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function RangesliderComponent_Template_ng5_slider_valueChange_64_listener($event) { return ctx.logscale = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Slider with visible selection bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function RangesliderComponent_Template_ng5_slider_valueChange_70_listener($event) { return ctx.visibleSelection = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Slider with ticks and value");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "ng5-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function RangesliderComponent_Template_ng5_slider_valueChange_75_listener($event) { return ctx.tickValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.defaultVal)("options", ctx.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.value)("highValue", ctx.highValue)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.prevalue)("highValue", ctx.prehighvalue)("options", ctx.preOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.draggableminRangeValue)("highValue", ctx.draggablemaxRangeValue)("options", ctx.draggableRangeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.custom)("options", ctx.customOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.floatValue)("options", ctx.floatingOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.value1)("highValue", ctx.maxVal)("options", ctx.option1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.tickvalue)("highValue", ctx.tickhighValue)("options", ctx.tickoptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.draggableminValue)("highValue", ctx.draggablemaxValue)("options", ctx.draggableoptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.logscale)("options", ctx.logscaleoptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.visibleSelection)("options", ctx.visibleBarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.tickValue)("options", ctx.tickValueoptions);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, ng5_slider__WEBPACK_IMPORTED_MODULE_1__["ɵa"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYW5nZXNsaWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 50855:
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/rating/rating.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingComponent": () => (/* binding */ RatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bar-rating */ 21311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);




function RatingComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Current rating: ", ctx_r0.faoRate, "");
} }
function RatingComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RatingComponent_p_25_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.faoReset(5.6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Your rating: ", ctx_r1.faoRate, " ");
} }
const _c0 = function () { return ["Bad", "Mediocre", "Good", "Awesome"]; };
class RatingComponent {
    constructor() {
        this.rate = 3;
        this.horiRate = 7;
        this.vertRate = 1;
        this.squareRate = 3;
        this.movieRate = 2;
        this.customRate = 2;
        this.starRate = 4;
        this.bootRate = 1;
        this.faRate = 1;
        this.cssRate = 1;
        this.faoRate = 5.6;
        this.faoRated = false;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Rating', active: true }];
    }
    onFaoRate(e) {
        this.faoRated = true;
        this.faoRate = e;
    }
    faoReset() {
        this.faoRated = false;
        this.faoRate = 5.6;
    }
}
RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); };
RatingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RatingComponent, selectors: [["app-rating"]], decls: 50, vars: 28, consts: [[1, "container-fluid"], ["title", "Rating", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "col-xl-4", "col-sm-6"], [1, "py-4"], [1, "font-size-15", "mb-3"], [3, "rate", "max", "theme", "rateChange"], [3, "rate", "max", "rateChange"], [4, "ngIf"], [3, "rate", "max", "theme", "showText", "rateChange"], ["name", "rating", "disabled", "", 3, "rate", "max", "theme", "showText", "titles", "rateChange"], [1, "link", "fa", "fa-times-circle", 3, "click"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Bar Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Default rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "bar-rating", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rateChange", function RatingComponent_Template_bar_rating_rateChange_13_listener($event) { return ctx.faRate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "CSS Stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "bar-rating", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rateChange", function RatingComponent_Template_bar_rating_rateChange_18_listener($event) { return ctx.cssRate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Current Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "bar-rating", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rateChange", function RatingComponent_Template_bar_rating_rateChange_23_listener($event) { return ctx.onFaoRate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RatingComponent_p_24_Template, 2, 1, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RatingComponent_p_25_Template, 3, 1, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "1/10 Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "bar-rating", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rateChange", function RatingComponent_Template_bar_rating_rateChange_31_listener($event) { return ctx.horiRate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Movie Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "bar-rating", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rateChange", function RatingComponent_Template_bar_rating_rateChange_37_listener($event) { return ctx.movieRate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Square Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "bar-rating", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rateChange", function RatingComponent_Template_bar_rating_rateChange_43_listener($event) { return ctx.squareRate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Horizontal Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "bar-rating", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rateChange", function RatingComponent_Template_bar_rating_rateChange_49_listener($event) { return ctx.vertRate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rate", ctx.faRate)("max", 5)("theme", "fontawesome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rate", ctx.cssRate)("max", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rate", ctx.faoRate)("max", 10)("theme", "fontawesome-o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.faoRated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.faoRated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rate", ctx.horiRate)("max", 10)("theme", "horizontal")("showText", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rate", ctx.movieRate)("max", 4)("theme", "movie")("showText", true)("titles", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rate", ctx.squareRate)("max", 5)("theme", "square");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rate", ctx.vertRate)("max", 10)("theme", "vertical")("showText", true);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_2__.BarRating, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 32188:
/*!*************************************************************!*\
  !*** ./src/app/pages/ui/sweetalert/sweetalert.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SweetalertComponent": () => (/* binding */ SweetalertComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);



/**
 * UI sweetalert component
 */
class SweetalertComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Sweet-Alert', active: true }];
    }
    basicMessage() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Any fool can use a computer!');
    }
    titleText() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('The Internet?', 'That thing is still around?', 'question');
    }
    successmsg() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Good job!', 'You clicked the button!', 'success');
    }
    position() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        });
    }
    confirm() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#34c38f',
            cancelButtonColor: '#f46a6a',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    }
    cancel() {
        const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger ms-2'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons
            .fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            showCancelButton: true
        })
            .then(result => {
            if (result.value) {
                swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.cancel)) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    }
    imageHeader() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: 'assets/images/logo-dark.png',
            imageHeight: 20,
            confirmButtonColor: '#556ee6'
        });
    }
    timer() {
        let timerInterval;
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Auto close alert!',
            html: 'I will close in <strong></strong> seconds.',
            timer: 2000,
            onBeforeOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
                timerInterval = setInterval(() => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().getContent().querySelector('strong').textContent = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().getTimerLeft() + '';
                }, 100);
            },
            onClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.timer)) {
                console.log('I was closed by the timer');
            }
        });
    }
    custom() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: '<strong>HTML <u>example</u></strong>',
            icon: 'info',
            html: 'You can use <b>bold text</b>, ' +
                '<a href="//sweetalert2.github.io">links</a> ' +
                'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
        });
    }
    customBackground() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: 100,
            confirmButtonColor: '#556ee6',
            background: '#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)'
        });
    }
    ajax() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Submit email to run ajax request',
            input: 'email',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            confirmButtonColor: '#556ee6',
            cancelButtonColor: '#f46a6a',
            preConfirm: email => {
                // eslint-disable-next-line no-unused-vars
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (email === 'taken@example.com') {
                            Promise.reject(new Error('This email is already taken.'));
                        }
                        else {
                            resolve();
                        }
                    }, 2000);
                });
            },
            allowOutsideClick: false
        }).then(email => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Ajax request finished!',
                html: 'Submitted email: ' + email
            });
        });
    }
    chain() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            confirmButtonColor: '#556ee6',
            cancelButtonColor: '#74788d',
            progressSteps: ['1', '2', '3']
        })
            .queue([
            {
                title: 'Question 1',
                text: 'Chaining swal2 modals is easy'
            },
            'Question 2',
            'Question 3'
        ])
            .then(result => {
            if (result) {
                const val = result['value'];
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'All done!',
                    html: 'Your answers: <pre><code>' +
                        JSON.stringify(val) +
                        '</code></pre>',
                    confirmButtonText: 'Lovely!'
                });
            }
        });
    }
    dynamicQueue() {
        const ipAPI = 'https://api.ipify.org?format=json';
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().queue([
            {
                title: 'Your public IP',
                confirmButtonText: 'Show my public IP',
                text: 'Your public IP will be received ' + 'via AJAX request',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    return fetch(ipAPI)
                        .then(response => response.json())
                        .then(data => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().insertQueueStep(data.ip))
                        .catch(() => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().insertQueueStep({
                            title: 'Unable to get your public IP'
                        });
                    });
                }
            }
        ]);
    }
}
SweetalertComponent.ɵfac = function SweetalertComponent_Factory(t) { return new (t || SweetalertComponent)(); };
SweetalertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SweetalertComponent, selectors: [["app-sweetalert"]], decls: 88, vars: 1, consts: [[1, "container-fluid"], ["title", "Sweet-Alert", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "row", "text-center"], [1, "col-xl-3", "col-lg-4", "col-sm-6", "mb-2"], [1, "p-3"], ["type", "button", "id", "sa-basic", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "sa-title", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "sa-success", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "sa-warning", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "sa-params", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "sa-image", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "sa-close", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "custom-html-alert", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "sa-position", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "custom-padding-width-alert", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "ajax-alert", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "chaining-alert", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "dynamic-alert", 1, "btn", "btn-primary", 3, "click"]], template: function SweetalertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "A beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero dependencies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "A basic message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SweetalertComponent_Template_button_click_15_listener() { return ctx.basicMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Click me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "A title with a text under");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SweetalertComponent_Template_button_click_21_listener() { return ctx.titleText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Click me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "A success message!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SweetalertComponent_Template_button_click_27_listener() { return ctx.successmsg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Click me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "A warning message, with a function attached to the \"Confirm\"-button...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SweetalertComponent_Template_button_click_33_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Click me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "By passing a parameter, you can execute something else for \"Cancel\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SweetalertComponent_Template_button_click_39_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Click me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "A message with custom Image Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SweetalertComponent_Template_button_click_45_listener() { return ctx.imageHeader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Click me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "A message with auto close timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SweetalertComponent_Template_button_click_51_listener() { return ctx.timer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Click me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Custom HTML description and buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SweetalertComponent_Template_button_click_57_listener() { return ctx.custom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Click me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "A custom positioned dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SweetalertComponent_Template_button_click_63_listener() { return ctx.position(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Click me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "A message with custom width, padding and background");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SweetalertComponent_Template_button_click_69_listener() { return ctx.customBackground(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Click me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Ajax request example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SweetalertComponent_Template_button_click_74_listener() { return ctx.ajax(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Click me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Chaining modals (queue) example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SweetalertComponent_Template_button_click_80_listener() { return ctx.chain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Click me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Dynamic queue example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SweetalertComponent_Template_button_click_86_listener() { return ctx.dynamicQueue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Click me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__.PagetitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2VldGFsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 51935:
/*!*************************************************!*\
  !*** ./src/app/pages/ui/tabs/tabs.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);




function TabsComponent_ng_template_18_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_18_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r35);
} }
function TabsComponent_ng_template_25_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_25_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r37);
} }
function TabsComponent_ng_template_32_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_32_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](271);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r39);
} }
function TabsComponent_ng_template_49_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_49_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r35);
} }
function TabsComponent_ng_template_56_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_56_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r37);
} }
function TabsComponent_ng_template_63_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_63_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r35);
} }
function TabsComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TabsComponent_ng_template_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna 8-bit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TabsComponent_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TabsComponent_ng_template_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TabsComponent_ng_template_122_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_122_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r35);
} }
function TabsComponent_ng_template_129_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_129_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r37);
} }
function TabsComponent_ng_template_136_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_136_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r35);
} }
function TabsComponent_ng_template_143_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_143_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r37);
} }
function TabsComponent_ng_template_161_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_161_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r35);
} }
function TabsComponent_ng_template_168_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_168_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r37);
} }
function TabsComponent_ng_template_175_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_175_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](271);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r39);
} }
function TabsComponent_ng_template_182_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_182_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r35);
} }
function TabsComponent_ng_template_199_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_199_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_199_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r35);
} }
function TabsComponent_ng_template_206_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_206_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_206_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r37);
} }
function TabsComponent_ng_template_213_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_213_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_213_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r35);
} }
function TabsComponent_ng_template_220_ng_template_0_Template(rf, ctx) { }
function TabsComponent_ng_template_220_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsComponent_ng_template_220_ng_template_0_Template, 0, 0, "ng-template", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r37);
} }
function TabsComponent_ng_template_258_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Collapsible Group Item #1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TabsComponent_ng_template_259_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
} }
function TabsComponent_ng_template_261_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Collapsible Group Item #2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TabsComponent_ng_template_262_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
} }
function TabsComponent_ng_template_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Collapsible Group Item #3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TabsComponent_ng_template_265_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
} }
function TabsComponent_ng_template_266_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TabsComponent_ng_template_268_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TabsComponent_ng_template_270_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten yr. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
/**
 * UI-tabs component
 */
class TabsComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Tabs & Accordions', active: true }];
        // Collapse value
        this.isCollapsed = false;
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], decls: 272, vars: 37, consts: [[1, "container-fluid"], ["title", "Tabs & Accordions", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], [1, "d-block", "d-sm-none"], [1, "fas", "fa-home"], [1, "d-none", "d-sm-block"], ["ngbNavContent", ""], [1, "far", "fa-user"], [1, "far", "fa-envelope"], [3, "ngbNavOutlet"], ["ngbNav", "", 1, "nav-pills", 3, "activeId"], ["justifiednav", "ngbNav"], [1, "col-md-3"], ["ngbNav", "", 1, "nav-pills", "flex-column", 3, "activeId"], ["verticalNav", "ngbNav"], ["ngbNavLink", "", 1, "mb-2"], [1, "fas", "fa-cog"], [1, "col-md-9"], ["ngbNav", "", 1, "nav-tabs", "nav-tabs-custom", "nav-justified", 3, "activeId"], ["customNav", "ngbNav"], ["ngbNav", "", 1, "nav-tabs", "nav-justified", 3, "activeId"], ["justifiednavtab", "ngbNav"], ["ngbNav", "", 1, "nav-pills", "nav-justified", "bg-light", 3, "activeId"], ["justifiednavpills", "ngbNav"], [1, "card-title-desc", "mb-3"], [1, "highlighter-rouge"], ["data-toggle", "collapse", "href", "javascript:void(0)", 1, "btn", "btn-primary", "mo-mb-2", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "mo-mb-2", "ms-1", 3, "click"], ["id", "collapseExample", 1, "collapse", 3, "ngbCollapse"], [1, "card", "card-body", "mb-0"], [1, "accordionpage"], ["activeIds", "static-1", 3, "closeOthers"], ["acc", "ngbAccordion"], ["id", "static-1"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["id", "static-2"], ["id", "static-3"], ["TabContent", ""], ["TabContent1", ""], ["TabContent2", ""], [3, "ngTemplateOutlet"], [1, "mb-0"], [1, "p-3", "mb-0", "text-muted"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Default Tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Example of Nav Tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TabsComponent_ng_template_18_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TabsComponent_ng_template_25_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, TabsComponent_ng_template_32_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Nav pills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Example of Nav pills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ul", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, TabsComponent_ng_template_49_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, TabsComponent_ng_template_56_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, TabsComponent_ng_template_63_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Vertical Nav Tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Example of Vertical nav tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ul", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, TabsComponent_ng_template_83_Template, 4, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, TabsComponent_ng_template_90_Template, 4, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, TabsComponent_ng_template_97_Template, 4, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](104, TabsComponent_ng_template_104_Template, 4, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Custom Tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Example of custom tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "ul", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](122, TabsComponent_ng_template_122_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, TabsComponent_ng_template_129_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, TabsComponent_ng_template_136_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](143, TabsComponent_ng_template_143_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Nav tabs justify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Example of Nav Tabs justified");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "ul", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](161, TabsComponent_ng_template_161_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](168, TabsComponent_ng_template_168_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](175, TabsComponent_ng_template_175_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](182, TabsComponent_ng_template_182_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Nav pills justify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Example of Nav pills justified");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "ul", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](199, TabsComponent_ng_template_199_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](206, TabsComponent_ng_template_206_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](213, TabsComponent_ng_template_213_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](220, TabsComponent_ng_template_220_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Default Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, " You can use a link with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "href");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, " attribute, or a button with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "data-target");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, " attribute. In both cases, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "code", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "data-toggle=\"collapse\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, " is required. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabsComponent_Template_a_click_240_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, " Link with href ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_242_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, " Button with data-target ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Accordion example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "Extend the default collapse behavior to create an accordion.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "ngb-accordion", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "ngb-panel", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](258, TabsComponent_ng_template_258_Template, 2, 0, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](259, TabsComponent_ng_template_259_Template, 1, 0, "ng-template", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "ngb-panel", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](261, TabsComponent_ng_template_261_Template, 2, 0, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](262, TabsComponent_ng_template_262_Template, 1, 0, "ng-template", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "ngb-panel", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](264, TabsComponent_ng_template_264_Template, 2, 0, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](265, TabsComponent_ng_template_265_Template, 1, 0, "ng-template", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](266, TabsComponent_ng_template_266_Template, 2, 0, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](268, TabsComponent_ng_template_268_Template, 2, 0, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](270, TabsComponent_ng_template_270_Template, 2, 0, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](42);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](76);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](115);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](154);
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](192);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbPanelContent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 46702:
/*!*************************************************************!*\
  !*** ./src/app/pages/ui/typography/typography.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypographyComponent": () => (/* binding */ TypographyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);


/**
 * UI-video component
 */
class TypographyComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Typography', active: true }];
    }
}
TypographyComponent.ɵfac = function TypographyComponent_Factory(t) { return new (t || TypographyComponent)(); };
TypographyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TypographyComponent, selectors: [["app-typography"]], decls: 226, vars: 1, consts: [[1, "container-fluid"], ["title", "Typography", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-start"], [1, "ms-3", "me-4"], [1, "display-4", "mb-0"], [1, "flex-1", "align-self-center"], [1, "mb-2"], [1, "mb-0"], [1, "card-title"], [1, "card-title-desc"], [1, "highlighter-rouge"], [1, "mb-3"], [1, "text-muted", "fw-normal"], [1, "display-1"], [1, "display-2"], [1, "display-3"], [1, "display-4"], [1, "display-5"], [1, "display-6"], [1, "lead"], [1, "list-unstyled", "mb-0"], [1, "list-inline", "mb-0"], [1, "list-inline-item"], [1, "col-lg-12"], ["title", "HyperText Markup Language"], [1, "blockquote", "font-size-16", "mb-0"], [1, "blockquote-footer"], ["title", "Source Title"], [1, "mt-4", "mt-lg-0"], [1, "blockquote", "blockquote-reverse", "font-size-16", "mb-0"], [1, "col-12"], [1, "row", "mb-0"], [1, "col-sm-3"], [1, "col-sm-9"], [1, "col-sm-9", "offset-sm-3"], [1, "col-sm-3", "text-truncate"], [1, "col-sm-9", "mb-0"], [1, "col-sm-4"], [1, "col-sm-8"]], template: function TypographyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Font Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\"IBM Plex Sans\", sans-serif");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Headings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "All HTML headings, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "<h1>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " through ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "<h6>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, ", are available.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "h1. Bootstrap heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Semibold 2.25rem (36px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "h2. Bootstrap heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Semibold 1.8rem (28.8px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "h3. Bootstrap heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Semibold 1.575rem (25.2px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "h4. Bootstrap heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Semibold 1.35rem (21.6px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "h5. Bootstrap heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Semibold 1.125rem (18px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "h6. Bootstrap heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Semibold 0.9rem (14.4px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Display headings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Traditional heading elements are designed to work best in the meat of your page content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Display 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Display 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Display 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Display 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Display 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Display 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Inline text elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Styling for common inline HTML5 elements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "You can use the mark tag to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "highlight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "This line of text is meant to be treated as deleted text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "This line of text is meant to be treated as no longer accurate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "ins");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "This line of text is meant to be treated as an addition to the document.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "This line of text will render as underlined");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "This line of text is meant to be treated as fine print.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "This line rendered as bold text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "This line rendered as italicized text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Unstyled List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Remove the default ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "list-style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " and left margin on list items (immediate children only). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "This only applies to immediate children list items");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, ", meaning you will need to add the class for any nested lists as well.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Integer molestie lorem at massa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Nulla volutpat aliquam velit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Phasellus iaculis neque");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Purus sodales ultricies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Vestibulum laoreet porttitor sem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Faucibus porta lacus fringilla vel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Inline List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Remove a list\u2019s bullets and apply some light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " with a combination of two classes, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, ".list-inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, ".list-inline-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Phasellus iaculis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Nulla volutpat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Blockquotes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "For quoting blocks of content from another source within your document. Wrap ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "<blockquote class=\"blockquote\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, " around any ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "abbr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, " as the quote.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "blockquote", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "footer", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "cite", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "blockquote", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "footer", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "cite", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Description list alignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "code", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, ".text-truncate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, " class to truncate the text with an ellipsis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "dl", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "dt", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Description lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "dd", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "A description list is perfect for defining terms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "dt", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Euismod");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "dd", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "dd", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Donec id elit non mi porta gravida at eget metus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "dt", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Malesuada porta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "dd", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Etiam porta sem malesuada magna mollis euismod.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "dt", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Truncated term is truncated");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "dd", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "dt", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Nesting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "dd", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "dl", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "dt", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Nested definition list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "dd", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 58513:
/*!***********************************************!*\
  !*** ./src/app/pages/ui/ui-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiRoutingModule": () => (/* binding */ UiRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerts/alerts.component */ 15611);
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/buttons.component */ 57856);
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards/cards.component */ 23149);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel/carousel.component */ 32317);
/* harmony import */ var _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdowns/dropdowns.component */ 5583);
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid/grid.component */ 43216);
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/images.component */ 84201);
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals/modals.component */ 61418);
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./progressbar/progressbar.component */ 83839);
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typography/typography.component */ 46702);
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general/general.component */ 31102);
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./colors/colors.component */ 66845);
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./video/video.component */ 91224);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabs/tabs.component */ 51935);
/* harmony import */ var _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sweetalert/sweetalert.component */ 32188);
/* harmony import */ var _rangeslider_rangeslider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rangeslider/rangeslider.component */ 46750);
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rating/rating.component */ 50855);
/* harmony import */ var _placeholders_placeholders_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./placeholders/placeholders.component */ 2377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 14001);





















const routes = [
    {
        path: 'alerts',
        component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_0__.AlertsComponent
    },
    {
        path: 'buttons',
        component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_1__.ButtonsComponent
    },
    {
        path: 'cards',
        component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__.CardsComponent
    },
    {
        path: 'carousel',
        component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent
    },
    {
        path: 'dropdowns',
        component: _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_4__.DropdownsComponent
    },
    {
        path: 'grid',
        component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent
    },
    {
        path: 'images',
        component: _images_images_component__WEBPACK_IMPORTED_MODULE_6__.ImagesComponent
    },
    {
        path: 'modals',
        component: _modals_modals_component__WEBPACK_IMPORTED_MODULE_7__.ModalsComponent
    },
    {
        path: 'progressbar',
        component: _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_8__.ProgressbarComponent
    },
    {
        path: 'placeholder',
        component: _placeholders_placeholders_component__WEBPACK_IMPORTED_MODULE_17__.PlaceholdersComponent
    },
    {
        path: 'typography',
        component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__.TypographyComponent
    },
    {
        path: 'general',
        component: _general_general_component__WEBPACK_IMPORTED_MODULE_10__.GeneralComponent
    },
    {
        path: 'colors',
        component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_11__.ColorsComponent
    },
    {
        path: 'video',
        component: _video_video_component__WEBPACK_IMPORTED_MODULE_12__.VideoComponent
    },
    {
        path: 'tabs-accordions',
        component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__.TabsComponent
    },
    {
        path: 'sweet-alert',
        component: _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_14__.SweetalertComponent
    },
    {
        path: 'rangeslider',
        component: _rangeslider_rangeslider_component__WEBPACK_IMPORTED_MODULE_15__.RangesliderComponent
    },
    {
        path: 'rating',
        component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_16__.RatingComponent
    }
];
class UiRoutingModule {
}
UiRoutingModule.ɵfac = function UiRoutingModule_Factory(t) { return new (t || UiRoutingModule)(); };
UiRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: UiRoutingModule });
UiRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](UiRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] }); })();


/***/ }),

/***/ 83590:
/*!***************************************!*\
  !*** ./src/app/pages/ui/ui.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModule": () => (/* binding */ UiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ui/ui.module */ 63091);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng5-slider */ 38391);
/* harmony import */ var ngx_star_rating__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-star-rating */ 38179);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bar-rating */ 21311);
/* harmony import */ var _ui_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-routing.module */ 58513);
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alerts/alerts.component */ 15611);
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/buttons.component */ 57856);
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards/cards.component */ 23149);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel/carousel.component */ 32317);
/* harmony import */ var _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdowns/dropdowns.component */ 5583);
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid/grid.component */ 43216);
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/images.component */ 84201);
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/modals.component */ 61418);
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progressbar/progressbar.component */ 83839);
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./typography/typography.component */ 46702);
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./general/general.component */ 31102);
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./colors/colors.component */ 66845);
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./video/video.component */ 91224);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tabs/tabs.component */ 51935);
/* harmony import */ var _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sweetalert/sweetalert.component */ 32188);
/* harmony import */ var _rangeslider_rangeslider_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rangeslider/rangeslider.component */ 46750);
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rating/rating.component */ 50855);
/* harmony import */ var _placeholders_placeholders_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./placeholders/placeholders.component */ 2377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 14001);



























class UiModule {
}
UiModule.ɵfac = function UiModule_Factory(t) { return new (t || UiModule)(); };
UiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: UiModule });
UiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
            _ui_routing_module__WEBPACK_IMPORTED_MODULE_2__.UiRoutingModule,
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
            ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbAlertModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbCarouselModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbProgressbarModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbPopoverModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbCollapseModule,
            ngx_star_rating__WEBPACK_IMPORTED_MODULE_25__.NgxStarRatingModule,
            ngx_bar_rating__WEBPACK_IMPORTED_MODULE_26__.BarRatingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](UiModule, { declarations: [_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__.AlertsComponent, _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__.ButtonsComponent, _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__.CardsComponent, _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_7__.DropdownsComponent, _grid_grid_component__WEBPACK_IMPORTED_MODULE_8__.GridComponent, _images_images_component__WEBPACK_IMPORTED_MODULE_9__.ImagesComponent, _modals_modals_component__WEBPACK_IMPORTED_MODULE_10__.ModalsComponent, _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_11__.ProgressbarComponent, _typography_typography_component__WEBPACK_IMPORTED_MODULE_12__.TypographyComponent, _general_general_component__WEBPACK_IMPORTED_MODULE_13__.GeneralComponent, _colors_colors_component__WEBPACK_IMPORTED_MODULE_14__.ColorsComponent, _video_video_component__WEBPACK_IMPORTED_MODULE_15__.VideoComponent, _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__.TabsComponent, _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_17__.SweetalertComponent, _rangeslider_rangeslider_component__WEBPACK_IMPORTED_MODULE_18__.RangesliderComponent, _rating_rating_component__WEBPACK_IMPORTED_MODULE_19__.RatingComponent, _placeholders_placeholders_component__WEBPACK_IMPORTED_MODULE_20__.PlaceholdersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
        _ui_routing_module__WEBPACK_IMPORTED_MODULE_2__.UiRoutingModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
        ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbAlertModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbCarouselModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModalModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbProgressbarModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbPopoverModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbCollapseModule,
        ngx_star_rating__WEBPACK_IMPORTED_MODULE_25__.NgxStarRatingModule,
        ngx_bar_rating__WEBPACK_IMPORTED_MODULE_26__.BarRatingModule] }); })();


/***/ }),

/***/ 91224:
/*!***************************************************!*\
  !*** ./src/app/pages/ui/video/video.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoComponent": () => (/* binding */ VideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);


class VideoComponent {
    constructor() { }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Video', active: true }];
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], decls: 40, vars: 1, consts: [[1, "container-fluid"], ["title", "Video", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "ratio", "ratio-16x9"], ["src", "https://www.youtube.com/embed/zpOULjyy-n8?rel=0", 1, "embed-responsive-item"], [1, "ratio", "ratio-21x9"], [1, "ratio", "ratio-4x3"], [1, "ratio", "ratio-1x1"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Responsive embed video 16:9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Aspect ratios can be customized with modifier classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "iframe", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Responsive embed video 21:9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Aspect ratios can be customized with modifier classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "iframe", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Responsive embed video 4:3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Aspect ratios can be customized with modifier classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "iframe", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Responsive embed video 1:1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Aspect ratios can be customized with modifier classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "iframe", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_ui_module_ts.js.map