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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_models_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/customer */ 85970);
/* harmony import */ var src_models_medidas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/medidas */ 60898);
/* harmony import */ var _utils_sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/sweetalert */ 63782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cliente.service */ 95686);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);









function AddCustomerComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero de d\u00EDgitos menor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero de d\u00EDgitos mayor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese solo letras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Los nombres debe ser mayor a 3 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Los nombres debe ser menor a 40 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese solo letras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Los apellidos debe ser mayor a 3 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Los apellidos debe ser menor a 40 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero de d\u00EDgitos menor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero de d\u00EDgitos mayor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email invalido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Formato mal escrito: de -20.00 a +20.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero menor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero mayor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Formato mal escrito: de -20.00 a +20.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero menor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero mayor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero menor, m\u00EDnimo permitido 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero mayor, m\u00E1ximo permitido 180. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Formato mal escrito: de -20.00 a +20.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero menor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero mayor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Formato mal escrito: de -20.00 a +20.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero menor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero mayor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero menor, m\u00EDnimo permitido 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero mayor, m\u00E1ximo permitido 180. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero menor, m\u00EDnimo permitido 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero mayor, m\u00E1ximo permitido 80. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Formato mal escrito: de +0.00 a +10.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero menor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero mayor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese solo letras. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El campo debe ser mayor a 3 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_div_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El campo debe ser menor a 40 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AddCustomerComponent {
    constructor(fb, customerService) {
        this.fb = fb;
        this.customerService = customerService;
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
        this.lettersPattern = '[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'; // Incluimos Ññ y tildes en cada vocal
        this.numberPattern = '^[0-9]+$|^\S*$';
        this.esf_cylPattern = '(^[\-+\+][0-9]{1,2})+([.][0-9]{1,2})?$';
        this.addPattern = '(^[\+][0-9]{1,2})+([.][0-9]{1,2})?$';
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Clientes' }, { label: 'Añadir Clientes', active: true }];
        this.crearFormulario();
    }
    crearFormulario() {
        this.fecha_actual = new Date(Date.now());
        this.formCustomer = this.fb.group({
            [this.fecha_creacion]: [{ value: this.fecha_actual.toLocaleString(), disabled: true }],
            [this.dni]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.numberPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(11111111),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(99999999)
                ]],
            [this.nombres]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.lettersPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(40)
                ]],
            [this.apellidos]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.lettersPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(40)
                ]],
            [this.fecha_nacimiento]: [],
            [this.telefono]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.numberPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(111111111),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(999999999)
                ]],
            [this.email]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email
                ]],
            [this.direccion]: [],
            [this.antecedentes]: [],
            [this.od_esferico]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.esf_cylPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(+20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(-20)
                ]],
            [this.od_cilindrico]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.esf_cylPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(+20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(-20)
                ]],
            [this.od_eje]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(+180),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0)
                ]],
            [this.oi_esferico]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.esf_cylPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(+20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(-20)
                ]],
            [this.oi_cilindrico]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.esf_cylPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(+20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(-20)
                ]],
            [this.oi_eje]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(+180),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0)
                ]],
            [this.dip]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(+80),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0)
                ]],
            [this.add]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.addPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(+10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0)
                ]],
            [this.encargado]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.lettersPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(40)
                ]]
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
            this.customer.fecha_nacimiento = this.f(this.fecha_nacimiento).value;
            this.customer.nombres = this.f(this.nombres).value;
            this.customer.telefono = this.f(this.telefono).value;
            this.customer.habilitado = true;
            this.customer.antecedentes = this.f(this.antecedentes).value;
            this.customer.direccion = this.f(this.direccion).value;
            this.medidas.add = this.f(this.add).value ? Number(this.f(this.add).value) : 0;
            this.medidas.dip = this.f(this.dip).value ? Number(this.f(this.dip).value) : 0;
            this.medidas.encargado = this.f(this.encargado).value;
            this.medidas.od_cilindrico = this.f(this.od_cilindrico).value ? Number(this.f(this.od_cilindrico).value) : 0;
            this.medidas.od_eje = this.f(this.od_eje).value ? Number(this.f(this.od_eje).value) : 0;
            this.medidas.od_esferico = this.f(this.od_esferico).value ? Number(this.f(this.od_esferico).value) : 0;
            this.medidas.oi_cilindrico = this.f(this.oi_cilindrico).value ? Number(this.f(this.oi_cilindrico).value) : 0;
            this.medidas.oi_eje = this.f(this.oi_eje).value ? Number(this.f(this.oi_eje).value) : 0;
            this.medidas.oi_esferico = this.f(this.oi_esferico).value ? Number(this.f(this.oi_esferico).value) : 0;
            const listaMedidas = [];
            listaMedidas.push(this.medidas);
            this.customer.medidas = listaMedidas;
            (0,_utils_sweetalert__WEBPACK_IMPORTED_MODULE_2__.Sweetalert)("loading", "Cargando...");
            this.customerService.createCustomers(this.customer).subscribe(res => {
                (0,_utils_sweetalert__WEBPACK_IMPORTED_MODULE_2__.Sweetalert)("close", null);
                (0,_utils_sweetalert__WEBPACK_IMPORTED_MODULE_2__.Sweetalert)("success", "Cliente guardado");
                this.f(this.fecha_creacion).setValue(new Date(Date.now()).toLocaleDateString());
                this.formCustomer.reset();
            });
        }
    }
    /**
     * Returns form Cliente
     */
    get formC() {
        return this.formCustomer.controls;
    }
}
AddCustomerComponent.ɵfac = function AddCustomerComponent_Factory(t) { return new (t || AddCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_3__.ClienteService)); };
AddCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AddCustomerComponent, selectors: [["app-add-customer"]], decls: 199, vars: 103, consts: [[1, "container-fluid"], ["title", "Registrar Nuevo Cliente", 3, "breadcrumbItems"], [3, "formGroup"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "p-3", "px-4"], [1, "d-flex", "align-items-start"], [1, "align-self-center", "me-3"], [1, "uil", "uil-file-bookmark-alt", "text-primary", "h2"], [1, "flex-1"], [1, "font-size-16", "mb-1"], [1, "font-size-14", "text-muted", "text-truncate", "mb-0"], [1, "card-title-desc", "text-danger"], [1, "border-top", "py-4"], [1, "col-12", "col-sm-6"], [1, "mb-4"], ["for", "billing-dni", 1, "form-label"], ["type", "text", "id", "billing-dni", "placeholder", "DNI del Cliente", 1, "form-control", 3, "formControlName", "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "billing-fecharegistro", 1, "form-label"], ["type", "text", "id", "billing-fecharegistro", "placeholder", "Seleccione la fecha", 1, "form-control", 3, "formControlName"], ["for", "billing-firstnames", 1, "form-label"], ["type", "text", "id", "billing-firstnames", "placeholder", "Nombres del Cliente", 1, "form-control", 3, "formControlName", "ngClass"], ["for", "billing-lastnames", 1, "form-label"], ["type", "text", "id", "billing-lastnames", "placeholder", "Apellidos del Cliente", 1, "form-control", 3, "formControlName", "ngClass"], [1, "col-12", "col-sm-3"], ["for", "billing-fechanacimiento", 1, "form-label"], ["type", "date", "id", "billing-fechanacimiento", "placeholder", "Seleccione la fecha", 1, "form-control", 3, "formControlName"], ["for", "billing-phone", 1, "form-label"], ["type", "text", "id", "billing-phone", "placeholder", "Tel\u00E9fono del Cliente", 1, "form-control", 3, "formControlName", "ngClass"], ["for", "billing-email-address", 1, "form-label"], ["type", "email", "id", "billing-email-address", "placeholder", "Correo electr\u00F3nico", 1, "form-control", 3, "formControlName", "ngClass"], ["for", "billing-direccion", 1, "form-label"], ["id", "billing-direccion", "rows", "3", "placeholder", "Ingrese la direcci\u00F3n completa del cliente", 1, "form-control", 3, "formControlName"], ["for", "billing-antecedentes", 1, "form-label"], ["id", "billing-antecedentes", "rows", "3", "placeholder", "Ingrese los antecedentes del cliente", 1, "form-control", 3, "formControlName"], [1, "col-xl-6", "mb-4"], [1, "uil", "uil-receipt", "text-primary", "h2"], [1, "font-size-14", "mb-3", "d-flex", "justify-content-center"], [1, "col-4"], ["for", "billing-OD-ESF", 1, "form-label"], ["type", "text", "id", "billing-OD-ESF", "placeholder", "Esfera", 1, "form-control", 3, "formControlName", "ngClass"], ["for", "billing-OD-CYL", 1, "form-label"], ["type", "text", "id", "billing-OD-CYL", "placeholder", "Cilindro", 1, "form-control", 3, "formControlName", "ngClass"], ["for", "billing-OD-EJE", 1, "form-label"], ["type", "text", "id", "billing-OD-EJE", "placeholder", "Eje", 1, "form-control", 3, "formControlName", "ngClass"], ["for", "billing-OI-ESF", 1, "form-label"], ["type", "text", "id", "billing-OI-ESF", "placeholder", "Esfera", 1, "form-control", 3, "formControlName", "ngClass"], ["for", "billing-OI-CYL", 1, "form-label"], ["type", "text", "id", "billing-OI-CYL", "placeholder", "Cilindro", 1, "form-control", 3, "formControlName", "ngClass"], ["for", "billing-OI-EJE", 1, "form-label"], ["type", "text", "id", "billing-OI-EJE", "placeholder", "Eje", 1, "form-control", 3, "formControlName", "ngClass"], [1, "col-6", "col-sm-2"], ["for", "billing-DIP", 1, "form-label"], ["type", "text", "id", "billing-DIP", "placeholder", "Distancia Interpupilar", 1, "form-control", 3, "formControlName", "ngClass"], ["for", "billing-ADD", 1, "form-label"], ["type", "text", "id", "billing-ADD", "placeholder", "Adici\u00F3n", 1, "form-control", 3, "formControlName", "ngClass"], [1, "col-12", "col-sm-8"], ["for", "billing-encargado-medicion", 1, "form-label"], ["type", "text", "id", "billing-encargado-medicion", "placeholder", "Encargado", 1, "form-control", 3, "formControlName", "ngClass"], [1, "row", "my-2"], [1, "col"], [1, "text-sm-end", "mt-2", "mt-sm-0"], [1, "btn", "btn-success", 3, "disabled", "click"], [1, "uil", "uil-user-plus", "me-1"]], template: function AddCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Informaci\u00F3n del Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Datos b\u00E1sicos del nuevo cliente. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "* Campo requerido");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "DNI *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AddCustomerComponent_div_28_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AddCustomerComponent_div_29_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AddCustomerComponent_div_30_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, AddCustomerComponent_div_31_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Fecha de Registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Nombres *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, AddCustomerComponent_div_44_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, AddCustomerComponent_div_45_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, AddCustomerComponent_div_46_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, AddCustomerComponent_div_47_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Apellidos *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, AddCustomerComponent_div_54_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, AddCustomerComponent_div_55_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, AddCustomerComponent_div_56_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, AddCustomerComponent_div_57_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Fecha de Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, AddCustomerComponent_div_70_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, AddCustomerComponent_div_71_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, AddCustomerComponent_div_72_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Correo Electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, AddCustomerComponent_div_79_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "textarea", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Antecedentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "textarea", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](98, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "Especificaciones de las Medidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, " Valores de medici\u00F3n del ojo derecho e izquierdo del cliente. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Ojo Derecho");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "ESF");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](114, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](116, AddCustomerComponent_div_116_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](117, AddCustomerComponent_div_117_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](118, AddCustomerComponent_div_118_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "CYL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](123, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](125, AddCustomerComponent_div_125_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](126, AddCustomerComponent_div_126_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](127, AddCustomerComponent_div_127_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "EJE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](132, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](134, AddCustomerComponent_div_134_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](135, AddCustomerComponent_div_135_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "Ojo Izquierdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](143, "ESF");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](144, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](146, AddCustomerComponent_div_146_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](147, AddCustomerComponent_div_147_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](148, AddCustomerComponent_div_148_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, "CYL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](153, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](155, AddCustomerComponent_div_155_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](156, AddCustomerComponent_div_156_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](157, AddCustomerComponent_div_157_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, "EJE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](162, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](164, AddCustomerComponent_div_164_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](165, AddCustomerComponent_div_165_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](166, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](170, "DIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](171, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](173, AddCustomerComponent_div_173_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](174, AddCustomerComponent_div_174_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](177, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](178, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](179, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](180, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](181, AddCustomerComponent_div_181_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](182, AddCustomerComponent_div_182_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](183, AddCustomerComponent_div_183_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](185, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](187, "Encargado de la Medici\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](188, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](189, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](190, AddCustomerComponent_div_190_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](191, AddCustomerComponent_div_191_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](192, AddCustomerComponent_div_192_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](193, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](195, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](196, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCustomerComponent_Template_button_click_196_listener() { return ctx.guardarCliente(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](197, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](198, " Registar Cliente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.dni);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](75, _c0, ctx.formC.campoDNI.invalid && (ctx.formC.campoDNI.dirty || ctx.formC.campoDNI.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoDNI.errors == null ? null : ctx.formC.campoDNI.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoDNI.errors == null ? null : ctx.formC.campoDNI.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoDNI.errors == null ? null : ctx.formC.campoDNI.errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoDNI.errors == null ? null : ctx.formC.campoDNI.errors.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.fecha_creacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.nombres);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](77, _c0, ctx.formC.campoNombres.invalid && (ctx.formC.campoNombres.dirty || ctx.formC.campoNombres.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoNombres.errors == null ? null : ctx.formC.campoNombres.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoNombres.errors == null ? null : ctx.formC.campoNombres.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoNombres.errors == null ? null : ctx.formC.campoNombres.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoNombres.errors == null ? null : ctx.formC.campoNombres.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](79, _c0, ctx.formC.campoApellidos.invalid && (ctx.formC.campoApellidos.dirty || ctx.formC.campoApellidos.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoApellidos.errors == null ? null : ctx.formC.campoApellidos.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoApellidos.errors == null ? null : ctx.formC.campoApellidos.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoApellidos.errors == null ? null : ctx.formC.campoApellidos.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoApellidos.errors == null ? null : ctx.formC.campoApellidos.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.fecha_nacimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](81, _c0, ctx.formC.campoTelefono.invalid && (ctx.formC.campoTelefono.dirty || ctx.formC.campoTelefono.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoTelefono.errors == null ? null : ctx.formC.campoTelefono.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoTelefono.errors == null ? null : ctx.formC.campoTelefono.errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoTelefono.errors == null ? null : ctx.formC.campoTelefono.errors.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](83, _c0, ctx.formC.campoEmail.invalid && (ctx.formC.campoEmail.dirty || ctx.formC.campoEmail.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoEmail.errors == null ? null : ctx.formC.campoEmail.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.antecedentes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.od_esferico);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](85, _c0, ctx.formC.campoOdEsferico.invalid && (ctx.formC.campoOdEsferico.dirty || ctx.formC.campoOdEsferico.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOdEsferico.errors == null ? null : ctx.formC.campoOdEsferico.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOdEsferico.errors == null ? null : ctx.formC.campoOdEsferico.errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOdEsferico.errors == null ? null : ctx.formC.campoOdEsferico.errors.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.od_cilindrico);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](87, _c0, ctx.formC.campoOd_Cilindrico.invalid && (ctx.formC.campoOd_Cilindrico.dirty || ctx.formC.campoOd_Cilindrico.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOd_Cilindrico.errors == null ? null : ctx.formC.campoOd_Cilindrico.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOd_Cilindrico.errors == null ? null : ctx.formC.campoOd_Cilindrico.errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOd_Cilindrico.errors == null ? null : ctx.formC.campoOd_Cilindrico.errors.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.od_eje);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](89, _c0, ctx.formC.campoOdEje.invalid && (ctx.formC.campoOdEje.dirty || ctx.formC.campoOdEje.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOdEje.errors == null ? null : ctx.formC.campoOdEje.errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOdEje.errors == null ? null : ctx.formC.campoOdEje.errors.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.oi_esferico);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](91, _c0, ctx.formC.campoOiEsferico.invalid && (ctx.formC.campoOiEsferico.dirty || ctx.formC.campoOiEsferico.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOiEsferico.errors == null ? null : ctx.formC.campoOiEsferico.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOiEsferico.errors == null ? null : ctx.formC.campoOiEsferico.errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOiEsferico.errors == null ? null : ctx.formC.campoOiEsferico.errors.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.oi_cilindrico);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](93, _c0, ctx.formC.campoOiCilindrico.invalid && (ctx.formC.campoOiCilindrico.dirty || ctx.formC.campoOiCilindrico.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOiCilindrico.errors == null ? null : ctx.formC.campoOiCilindrico.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOiCilindrico.errors == null ? null : ctx.formC.campoOiCilindrico.errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOiCilindrico.errors == null ? null : ctx.formC.campoOiCilindrico.errors.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.oi_eje);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](95, _c0, ctx.formC.campoOiEje.invalid && (ctx.formC.campoOiEje.dirty || ctx.formC.campoOiEje.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOiEje.errors == null ? null : ctx.formC.campoOiEje.errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoOiEje.errors == null ? null : ctx.formC.campoOiEje.errors.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.dip);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](97, _c0, ctx.formC.campoDip.invalid && (ctx.formC.campoDip.dirty || ctx.formC.campoDip.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoDip.errors == null ? null : ctx.formC.campoDip.errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoDip.errors == null ? null : ctx.formC.campoDip.errors.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.add);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](99, _c0, ctx.formC.campoAdd.invalid && (ctx.formC.campoAdd.dirty || ctx.formC.campoAdd.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoAdd.errors == null ? null : ctx.formC.campoAdd.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoAdd.errors == null ? null : ctx.formC.campoAdd.errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoAdd.errors == null ? null : ctx.formC.campoAdd.errors.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("formControlName", ctx.encargado);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](101, _c0, ctx.formC.campoEncargado.invalid && (ctx.formC.campoEncargado.dirty || ctx.formC.campoEncargado.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoEncargado.errors == null ? null : ctx.formC.campoEncargado.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoEncargado.errors == null ? null : ctx.formC.campoEncargado.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formC.campoEncargado.errors == null ? null : ctx.formC.campoEncargado.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.formCustomer.valid);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 85298);
/* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-customer/add-customer.component */ 49080);
/* harmony import */ var _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-customers/list-customers.component */ 32901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);






const routes = [
    {
        path: 'addcustomer',
        component: _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_1__.AddCustomerComponent,
        data: {
            role: ['Vendedor', 'Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'listcustomers',
        component: _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_2__.ListCustomersComponent,
        data: {
            role: ['Vendedor', 'Admin'],
        }, canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
class CustomerRoutingModule {
}
CustomerRoutingModule.ɵfac = function CustomerRoutingModule_Factory(t) { return new (t || CustomerRoutingModule)(); };
CustomerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CustomerRoutingModule });
CustomerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CustomerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng5-slider */ 38391);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 68346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 85362);
/* harmony import */ var src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/directives/role.module */ 2974);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-customer/add-customer.component */ 49080);
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-routing.module */ 23406);
/* harmony import */ var _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-customers/list-customers.component */ 32901);
/* harmony import */ var _list_customers_sortable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-customers/sortable.directive */ 53667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);















class CustomerModule {
}
CustomerModule.ɵfac = function CustomerModule_Factory(t) { return new (t || CustomerModule)(); };
CustomerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CustomerModule });
CustomerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__.DROPZONE_CONFIG,
            useValue: rxjs__WEBPACK_IMPORTED_MODULE_10__.config
        }
    ], imports: [[
            _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__.CustomerRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownModule,
            ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__.DropzoneModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
            ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbTypeaheadModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbCollapseModule,
            src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CustomerModule, { declarations: [_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_4__.AddCustomerComponent, _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_6__.ListCustomersComponent, _list_customers_sortable_directive__WEBPACK_IMPORTED_MODULE_7__.NgbdSortableHeader], imports: [_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__.CustomerRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownModule,
        ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_9__.DropzoneModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
        ng5_slider__WEBPACK_IMPORTED_MODULE_1__.Ng5SliderModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbTypeaheadModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbCollapseModule,
        src_app_directives_role_module__WEBPACK_IMPORTED_MODULE_2__.DirectivesModule] }); })();


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 78068);
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
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(customer, term, pipe) {
    var _a, _b, _c, _d;
    return ((_a = customer.nombres) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(term.toLowerCase()))
        || ((_b = customer.apellidos) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(term.toLowerCase()))
        || ((_c = customer.dni) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes(term.toLowerCase()))
        || ((_d = customer.telefono) === null || _d === void 0 ? void 0 : _d.toLowerCase().includes(term.toLowerCase()))
        || String(customer.fecha_nacimiento).toLowerCase().includes(term.toLowerCase());
}
class CustomerService {
    constructor(pipe, customerService) {
        this.pipe = pipe;
        this.customerService = customerService;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this._customers$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this._mostrar$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
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
        this.customerList = data;
        this._mostrar$.next(true);
        this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(false))).subscribe(result => {
            this._customers$.next(result.customers);
            this._total$.next(result.total);
        });
        this._search$.next();
    }
    get customers$() { return this._customers$.asObservable(); }
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
        let customers = sort(this.customerList, sortColumn, sortDirection);
        // 2. filter
        customers = customers.filter(customer => matches(customer, searchTerm, this.pipe));
        const total = customers.length;
        // 3. paginate
        customers = customers.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({ customers, total });
    }
    /**
     * Funcion para obtener la lista de clientes desde el backend
     */
    getListClients() {
        this.customerService.getAllClients().subscribe(res => {
            this.customerList = res;
            this._mostrar$.next(true);
            this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(false))).subscribe(result => {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_models_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/customer */ 85970);
/* harmony import */ var src_models_medidas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/medidas */ 60898);
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.service */ 39084);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortable.directive */ 53667);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 62962);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 85395);
/* harmony import */ var src_utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/utils/functions */ 4680);
/* harmony import */ var src_models_sedes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/sedes */ 16550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/cliente.service */ 95686);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _directives_role_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../directives/role.directive */ 48185);























function ListCustomersComponent_tr_45_i_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 41);
} }
function ListCustomersComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ngb-highlight", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "ngb-highlight", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "ngb-highlight", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "ngb-highlight", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "ngb-highlight", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "ngb-highlight", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListCustomersComponent_tr_45_Template_a_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10); const data_r6 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](54); return ctx_r9.centerModalPrint(_r2, data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListCustomersComponent_tr_45_Template_a_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10); const data_r6 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](56); return ctx_r11.centerModal(_r4, data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListCustomersComponent_tr_45_Template_a_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10); const data_r6 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r12.eliminar(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, ListCustomersComponent_tr_45_i_23_Template, 1, 0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", i_r7 + 1 + (ctx_r0.service.page - 1) * ctx_r0.service.pageSize)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", data_r6.nombres.charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", data_r6.nombres.toUpperCase())("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", data_r6.apellidos.toUpperCase())("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", data_r6.dni)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", data_r6.telefono)("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](16, 14, data_r6.fecha_nacimiento, "dd/MM/yyyy"))("term", ctx_r0.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("appRole", ctx_r0.role);
} }
function ListCustomersComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " Cargando ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Receta Oftalmol\u00F3gica");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListCustomersComponent_ng_template_53_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r14.closeEventModalGeneral(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Fecha de la Receta:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "hr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, "Paciente:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, "DNI: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34, "Fecha de Nacimiento : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, "Telefono: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](42, "hr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "h5", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47, "Visi\u00F3n de Lejos");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "table", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53, "REF.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](55, "ESF.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](57, "CIL.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59, "EJE.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61, "DIP.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, "O.D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](76, "O.I.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "h5", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87, "Visi\u00F3n de Cerca");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "table", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](91, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](93, "ADD.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](96, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](98, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](99, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](100, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](102, "h4", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](103, "Encargado Medici\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](104, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](106, "h4", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](107, "Antecedentes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](108, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](110, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](111, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListCustomersComponent_ng_template_53_Template_button_click_111_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r16.createPDF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](112, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](113, " Pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](114, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListCustomersComponent_ng_template_53_Template_a_click_114_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r17.closeEventModalGeneral(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](115, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](18, 17, ctx_r3.fecha_actual, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx_r3.userPrint.nombres, " ", ctx_r3.userPrint.apellidos, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.userPrint.dni);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](36, 20, ctx_r3.userPrint.fecha_nacimiento, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.userPrint.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.userPrint.medidas[0].od_esferico > 0 ? "+" + ctx_r3.userPrint.medidas[0].od_esferico.toFixed(2) : ctx_r3.userPrint.medidas[0].od_esferico.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.userPrint.medidas[0].od_cilindrico > 0 ? "+" + ctx_r3.userPrint.medidas[0].od_cilindrico.toFixed(2) : ctx_r3.userPrint.medidas[0].od_cilindrico.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.userPrint.medidas[0].od_eje);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.userPrint.medidas[0].dip);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.userPrint.medidas[0].oi_esferico > 0 ? "+" + ctx_r3.userPrint.medidas[0].oi_esferico.toFixed(2) : ctx_r3.userPrint.medidas[0].oi_esferico.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.userPrint.medidas[0].oi_cilindrico > 0 ? "+" + ctx_r3.userPrint.medidas[0].oi_cilindrico.toFixed(2) : ctx_r3.userPrint.medidas[0].oi_cilindrico.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.userPrint.medidas[0].oi_eje);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.userPrint.medidas[0].dip);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.userPrint.medidas[0].add > 0 ? "+" + ctx_r3.userPrint.medidas[0].add.toFixed(2) : ctx_r3.userPrint.medidas[0].add.toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.userPrint.medidas[0].encargado);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r3.userPrint.antecedentes);
} }
function ListCustomersComponent_ng_template_55_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero de d\u00EDgitos menor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero de d\u00EDgitos mayor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Ingrese solo letras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Los nombres debe ser mayor a 3 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Los nombres debe ser menor a 40 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Ingrese solo letras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Los apellidos debe ser mayor a 3 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Los apellidos debe ser menor a 40 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero de d\u00EDgitos menor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero de d\u00EDgitos mayor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Email invalido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Formato mal escrito: de -20.00 a +20.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero menor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero mayor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Formato mal escrito: de -20.00 a +20.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero menor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero mayor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero menor, m\u00EDnimo permitido 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero mayor, m\u00E1ximo permitido 180. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Formato mal escrito: de -20.00 a +20.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero menor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero mayor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Formato mal escrito: de -20.00 a +20.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero menor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero mayor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero menor, m\u00EDnimo permitido 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero mayor, m\u00E1ximo permitido 180. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Campo requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero menor, m\u00EDnimo permitido 0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero mayor, m\u00E1ximo permitido 80. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Formato mal escrito: de +0.00 a +10.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero menor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " N\u00FAmero mayor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Ingrese solo letras. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " El campo debe ser mayor a 3 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ListCustomersComponent_ng_template_55_div_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " El campo debe ser menor a 40 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ListCustomersComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Editar Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListCustomersComponent_ng_template_55_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r66.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "form", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "* Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "DNI *");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, ListCustomersComponent_ng_template_55_div_15_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, ListCustomersComponent_ng_template_55_div_16_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, ListCustomersComponent_ng_template_55_div_17_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, ListCustomersComponent_ng_template_55_div_18_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Fecha de Registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "Nombres *");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, ListCustomersComponent_ng_template_55_div_31_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](32, ListCustomersComponent_ng_template_55_div_32_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](33, ListCustomersComponent_ng_template_55_div_33_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](34, ListCustomersComponent_ng_template_55_div_34_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "Apellidos *");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](39, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](41, ListCustomersComponent_ng_template_55_div_41_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, ListCustomersComponent_ng_template_55_div_42_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, ListCustomersComponent_ng_template_55_div_43_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](44, ListCustomersComponent_ng_template_55_div_44_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "Fecha de Nacimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](50, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](55, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](57, ListCustomersComponent_ng_template_55_div_57_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](58, ListCustomersComponent_ng_template_55_div_58_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, ListCustomersComponent_ng_template_55_div_59_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](63, "Correo Electr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](64, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](66, ListCustomersComponent_ng_template_55_div_66_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](71, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](72, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](76, "Especificaciones de la Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](81, "Ojo Derecho");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](86, "ESF *");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](87, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](89, ListCustomersComponent_ng_template_55_div_89_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](90, ListCustomersComponent_ng_template_55_div_90_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](91, ListCustomersComponent_ng_template_55_div_91_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](92, ListCustomersComponent_ng_template_55_div_92_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](93, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](96, "CYL *");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](97, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](98, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](99, ListCustomersComponent_ng_template_55_div_99_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](100, ListCustomersComponent_ng_template_55_div_100_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](101, ListCustomersComponent_ng_template_55_div_101_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](102, ListCustomersComponent_ng_template_55_div_102_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](104, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](105, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](106, "EJE *");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](107, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](108, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](109, ListCustomersComponent_ng_template_55_div_109_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](110, ListCustomersComponent_ng_template_55_div_110_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](111, ListCustomersComponent_ng_template_55_div_111_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](112, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](113, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](114, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](115, "Ojo Izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](116, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](117, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](118, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](119, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](120, "ESF *");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](121, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](122, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](123, ListCustomersComponent_ng_template_55_div_123_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](124, ListCustomersComponent_ng_template_55_div_124_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](125, ListCustomersComponent_ng_template_55_div_125_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](126, ListCustomersComponent_ng_template_55_div_126_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](127, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](128, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](130, "CYL *");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](131, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](132, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](133, ListCustomersComponent_ng_template_55_div_133_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](134, ListCustomersComponent_ng_template_55_div_134_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](135, ListCustomersComponent_ng_template_55_div_135_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](136, ListCustomersComponent_ng_template_55_div_136_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](137, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](138, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](139, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](140, "EJE *");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](141, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](142, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](143, ListCustomersComponent_ng_template_55_div_143_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](144, ListCustomersComponent_ng_template_55_div_144_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](145, ListCustomersComponent_ng_template_55_div_145_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](146, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](147, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](148, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](149, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](150, "DIP *");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](151, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](152, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](153, ListCustomersComponent_ng_template_55_div_153_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](154, ListCustomersComponent_ng_template_55_div_154_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](155, ListCustomersComponent_ng_template_55_div_155_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](156, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](157, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](158, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](159, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](160, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](161, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](162, ListCustomersComponent_ng_template_55_div_162_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](163, ListCustomersComponent_ng_template_55_div_163_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](164, ListCustomersComponent_ng_template_55_div_164_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](165, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](166, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](167, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](168, "Encargado de la Medici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](169, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](170, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](171, ListCustomersComponent_ng_template_55_div_171_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](172, ListCustomersComponent_ng_template_55_div_172_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](173, ListCustomersComponent_ng_template_55_div_173_Template, 2, 0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](174, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](175, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](176, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](177, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](178, "Antecedentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](179, "textarea", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](180, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](181, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListCustomersComponent_ng_template_55_Template_button_click_181_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r68.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](182, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](183, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ListCustomersComponent_ng_template_55_Template_button_click_183_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r67); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r69.guardarCliente(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](184, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r5.formCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.dni);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](81, _c0, ctx_r5.formEC.campoDNI.invalid && (ctx_r5.formEC.campoDNI.dirty || ctx_r5.formEC.campoDNI.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoDNI.errors == null ? null : ctx_r5.formEC.campoDNI.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoDNI.errors == null ? null : ctx_r5.formEC.campoDNI.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoDNI.errors == null ? null : ctx_r5.formEC.campoDNI.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoDNI.errors == null ? null : ctx_r5.formEC.campoDNI.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.fecha_modificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.nombres);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](83, _c0, ctx_r5.formEC.campoNombres.invalid && (ctx_r5.formEC.campoNombres.dirty || ctx_r5.formEC.campoNombres.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoNombres.errors == null ? null : ctx_r5.formEC.campoNombres.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoNombres.errors == null ? null : ctx_r5.formEC.campoNombres.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoNombres.errors == null ? null : ctx_r5.formEC.campoNombres.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoNombres.errors == null ? null : ctx_r5.formEC.campoNombres.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](85, _c0, ctx_r5.formEC.campoApellidos.invalid && (ctx_r5.formEC.campoApellidos.dirty || ctx_r5.formEC.campoApellidos.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoApellidos.errors == null ? null : ctx_r5.formEC.campoApellidos.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoApellidos.errors == null ? null : ctx_r5.formEC.campoApellidos.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoApellidos.errors == null ? null : ctx_r5.formEC.campoApellidos.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoApellidos.errors == null ? null : ctx_r5.formEC.campoApellidos.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.fecha_nacimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](87, _c0, ctx_r5.formEC.campoTelefono.invalid && (ctx_r5.formEC.campoTelefono.dirty || ctx_r5.formEC.campoTelefono.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoTelefono.errors == null ? null : ctx_r5.formEC.campoTelefono.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoTelefono.errors == null ? null : ctx_r5.formEC.campoTelefono.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoTelefono.errors == null ? null : ctx_r5.formEC.campoTelefono.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](89, _c0, ctx_r5.formEC.campoEmail.invalid && (ctx_r5.formEC.campoEmail.dirty || ctx_r5.formEC.campoEmail.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoEmail.errors == null ? null : ctx_r5.formEC.campoEmail.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.od_esferico);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](91, _c0, ctx_r5.formEC.campoOdEsferico.invalid && (ctx_r5.formEC.campoOdEsferico.dirty || ctx_r5.formEC.campoOdEsferico.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOdEsferico.errors == null ? null : ctx_r5.formEC.campoOdEsferico.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOdEsferico.errors == null ? null : ctx_r5.formEC.campoOdEsferico.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOdEsferico.errors == null ? null : ctx_r5.formEC.campoOdEsferico.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOdEsferico.errors == null ? null : ctx_r5.formEC.campoOdEsferico.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.od_cilindrico);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](93, _c0, ctx_r5.formEC.campoOd_Cilindrico.invalid && (ctx_r5.formEC.campoOd_Cilindrico.dirty || ctx_r5.formEC.campoOd_Cilindrico.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOd_Cilindrico.errors == null ? null : ctx_r5.formEC.campoOd_Cilindrico.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOd_Cilindrico.errors == null ? null : ctx_r5.formEC.campoOd_Cilindrico.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOd_Cilindrico.errors == null ? null : ctx_r5.formEC.campoOd_Cilindrico.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOd_Cilindrico.errors == null ? null : ctx_r5.formEC.campoOd_Cilindrico.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.od_eje);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](95, _c0, ctx_r5.formEC.campoOdEje.invalid && (ctx_r5.formEC.campoOdEje.dirty || ctx_r5.formEC.campoOdEje.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOdEje.errors == null ? null : ctx_r5.formEC.campoOdEje.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOdEje.errors == null ? null : ctx_r5.formEC.campoOdEje.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOdEje.errors == null ? null : ctx_r5.formEC.campoOdEje.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.oi_esferico);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](97, _c0, ctx_r5.formEC.campoOiEsferico.invalid && (ctx_r5.formEC.campoOiEsferico.dirty || ctx_r5.formEC.campoOiEsferico.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOiEsferico.errors == null ? null : ctx_r5.formEC.campoOiEsferico.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOiEsferico.errors == null ? null : ctx_r5.formEC.campoOiEsferico.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOiEsferico.errors == null ? null : ctx_r5.formEC.campoOiEsferico.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOiEsferico.errors == null ? null : ctx_r5.formEC.campoOiEsferico.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.oi_cilindrico);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](99, _c0, ctx_r5.formEC.campoOiCilindrico.invalid && (ctx_r5.formEC.campoOiCilindrico.dirty || ctx_r5.formEC.campoOiCilindrico.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOiCilindrico.errors == null ? null : ctx_r5.formEC.campoOiCilindrico.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOiCilindrico.errors == null ? null : ctx_r5.formEC.campoOiCilindrico.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOiCilindrico.errors == null ? null : ctx_r5.formEC.campoOiCilindrico.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOiCilindrico.errors == null ? null : ctx_r5.formEC.campoOiCilindrico.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.oi_eje);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](101, _c0, ctx_r5.formEC.campoOiEje.invalid && (ctx_r5.formEC.campoOiEje.dirty || ctx_r5.formEC.campoOiEje.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOiEje.errors == null ? null : ctx_r5.formEC.campoOiEje.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOiEje.errors == null ? null : ctx_r5.formEC.campoOiEje.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoOiEje.errors == null ? null : ctx_r5.formEC.campoOiEje.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.dip);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](103, _c0, ctx_r5.formEC.campoDip.invalid && (ctx_r5.formEC.campoDip.dirty || ctx_r5.formEC.campoDip.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoDip.errors == null ? null : ctx_r5.formEC.campoDip.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoDip.errors == null ? null : ctx_r5.formEC.campoDip.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoDip.errors == null ? null : ctx_r5.formEC.campoDip.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.add);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](105, _c0, ctx_r5.formEC.campoAdd.invalid && (ctx_r5.formEC.campoAdd.dirty || ctx_r5.formEC.campoAdd.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoAdd.errors == null ? null : ctx_r5.formEC.campoAdd.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoAdd.errors == null ? null : ctx_r5.formEC.campoAdd.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoAdd.errors == null ? null : ctx_r5.formEC.campoAdd.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.encargado);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](107, _c0, ctx_r5.formEC.campoEncargado.invalid && (ctx_r5.formEC.campoEncargado.dirty || ctx_r5.formEC.campoEncargado.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoEncargado.errors == null ? null : ctx_r5.formEC.campoEncargado.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoEncargado.errors == null ? null : ctx_r5.formEC.campoEncargado.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.formEC.campoEncargado.errors == null ? null : ctx_r5.formEC.campoEncargado.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.antecedentes);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r5.formCustomer.valid);
} }
(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__.pdfMake.vfs;
class ListCustomersComponent {
    constructor(service, modalService, fb, customerService, usuarioService) {
        this.service = service;
        this.modalService = modalService;
        this.fb = fb;
        this.customerService = customerService;
        this.usuarioService = usuarioService;
        this.mostrarSpinner = false;
        this.role = 'Admin';
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
        this.direccion = "campoDireccion";
        this.customer = new src_models_customer__WEBPACK_IMPORTED_MODULE_0__.CustomersModel;
        this.medidas = new src_models_medidas__WEBPACK_IMPORTED_MODULE_1__.MedidasModel;
        this.submitted = false;
        this.idSede = "";
        this.sedeActual = new src_models_sedes__WEBPACK_IMPORTED_MODULE_9__.SedesModel;
        this.lettersPattern = '[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'; // Incluimos Ññ y tildes en cada vocal
        this.numberPattern = '^[0-9]+$|^\S*$';
        this.esf_cylPattern = '(^[\-+\+][0-9]{1,2})+([.][0-9]{1,2})?$';
        this.addPattern = '(^[\+][0-9]{1,2})+([.][0-9]{1,2})?$';
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
        service.mostrar.subscribe(res => {
            this.mostrarSpinner = res;
        });
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Clientes' }, { label: 'Lista de Clientes', active: true }];
        this.crearFormulario();
        this.getListSedes();
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
        this.fecha_actual = new Date(Date.now());
        this.f(this.dni).setValue(data.dni);
        this.f(this.fecha_modificacion).setValue((0,_angular_common__WEBPACK_IMPORTED_MODULE_15__.formatDate)(this.fecha_actual, 'yyyy-MM-dd', 'en'));
        this.f(this.nombres).setValue(data.nombres);
        this.f(this.apellidos).setValue(data.apellidos);
        this.f(this.fecha_nacimiento).setValue((0,_angular_common__WEBPACK_IMPORTED_MODULE_15__.formatDate)(data.fecha_nacimiento, 'yyyy-MM-dd', 'en'));
        this.f(this.telefono).setValue(data.telefono);
        this.f(this.email).setValue(data.email);
        this.f(this.direccion).setValue(data.direccion);
        this.f(this.od_cilindrico).setValue(data.medidas[0].od_cilindrico >= 0 ? '+' + data.medidas[0].od_cilindrico.toFixed(2) : data.medidas[0].od_cilindrico.toFixed(2));
        this.f(this.od_eje).setValue(data.medidas[0].od_eje);
        this.f(this.od_esferico).setValue(data.medidas[0].od_esferico >= 0 ? '+' + data.medidas[0].od_esferico.toFixed(2) : data.medidas[0].od_esferico.toFixed(2));
        this.f(this.oi_cilindrico).setValue(data.medidas[0].oi_cilindrico >= 0 ? '+' + data.medidas[0].oi_cilindrico.toFixed(2) : data.medidas[0].oi_cilindrico.toFixed(2));
        this.f(this.oi_esferico).setValue(data.medidas[0].oi_esferico >= 0 ? '+' + data.medidas[0].oi_esferico.toFixed(2) : data.medidas[0].oi_esferico.toFixed(2));
        this.f(this.oi_eje).setValue(data.medidas[0].oi_eje);
        this.f(this.dip).setValue(data.medidas[0].dip);
        this.f(this.add).setValue(data.medidas[0].add >= 0 ? '+' + data.medidas[0].add.toFixed(2) : data.medidas[0].add.toFixed(2));
        this.f(this.encargado).setValue(data.medidas[0].encargado);
        this.f(this.antecedentes).setValue(data.antecedentes);
        this.customer.id_cliente = data.id_cliente;
        this.modalService.open(centerDataModal, { scrollable: true, centered: true, size: 'lg' });
    }
    centerModalPrint(centerDataModal, data) {
        this.fecha_actual = new Date(Date.now());
        this.userPrint = data;
        this.modalService.open(centerDataModal, { scrollable: true, centered: true, size: 'lg' });
    }
    /**
     * Open Large modal
     * @param centerModal_Info large modal data
     */
    centerModal_Info(centerModal_Info) {
        this.modalService.open(centerModal_Info, { size: 'lg', windowClass: 'modal-holder', centered: true });
    }
    /**
 * Delete event
 */
    deleteEventData() {
        this.editEvent.remove();
        this.modalService.dismissAll();
    }
    closeEventModal() {
        this.userPrint = {};
        this.modalService.dismissAll();
    }
    /**
     * Close event modal
     */
    closeEventModalGeneral() {
        this.modalService.dismissAll();
    }
    /**
     * guarda cliente en la base de datos
     */
    guardarCliente() {
        if (this.formCustomer.valid) {
            this.customer.apellidos = this.f(this.apellidos).value;
            this.customer.dni = this.f(this.dni).value;
            this.customer.fecha_modificacion = new Date(Date.now());
            this.customer.direccion = this.f(this.direccion).value;
            const fch_nac = new Date(this.f(this.fecha_nacimiento).value + 'T00:00');
            this.customer.fecha_nacimiento = fch_nac;
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
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("loading", "Cargando...");
            this.customerService.updateClient(this.customer.id_cliente, this.customer).subscribe(res => {
                this.modalService.dismissAll();
                this.getListClients();
                this.formCustomer.reset();
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("close", null);
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("success", "Datos del cliente actualizados");
            });
        }
        else {
            return;
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
            [this.dni]: [{ value: null, disabled: true }],
            [this.nombres]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.lettersPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(40)
                ]],
            [this.apellidos]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.lettersPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(40)
                ]],
            [this.fecha_nacimiento]: [],
            [this.telefono]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.numberPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(111111111),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(999999999)
                ]],
            [this.email]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.email
                ]],
            [this.direccion]: [],
            [this.antecedentes]: [],
            [this.fecha_modificacion]: [{ value: null, disabled: true }],
            [this.od_esferico]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.esf_cylPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(+20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(-20)
                ]],
            [this.od_cilindrico]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.esf_cylPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(+20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(-20)
                ]],
            [this.od_eje]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(+180),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(0)
                ]],
            [this.oi_esferico]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.esf_cylPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(+20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(-20)
                ]],
            [this.oi_cilindrico]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.esf_cylPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(+20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(-20)
                ]],
            [this.oi_eje]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(+180),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(0)
                ]],
            [this.dip]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(+80),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(0)
                ]],
            [this.add]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(+10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(0)
                ]],
            [this.encargado]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.lettersPattern),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(40)
                ]]
        });
    }
    eliminar(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            title: '¿Está seguro que desea eliminar al cliente?',
            text: 'No se podrá revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#34c38f',
            cancelButtonColor: '#f46a6a',
            confirmButtonText: 'Si, eliminar!'
        }).then(result => {
            if (result.value) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("loading", "Cargando...");
                this.customerService.darBajaClient(data.id_cliente).subscribe(res => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("success", "Cliente eliminada");
                    this.updateListCustomers();
                }, error => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_4__.Sweetalert)("error", "Error en la conexión");
                });
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().DismissReason.cancel)) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Cancelado', 'Cliente no eliminado', 'error');
            }
        });
    }
    updateListCustomers() {
        this.customerService.getAllClients().subscribe(res => {
            this.service.updateTable(res);
        });
    }
    /**
     * Returns form Editar Cliente
     */
    get formEC() {
        return this.formCustomer.controls;
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
    createPDF() {
        let objReceta = {
            cliente: this.userPrint,
            sede: this.sedeActual
        };
        this.customerService.getRecetaPDF(objReceta).subscribe(res => {
            const byteArray = new Uint8Array(atob(res)
                .split("")
                .map(char => char.charCodeAt(0)));
            const blob = new Blob([byteArray], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = 'none';
            document.body.appendChild(a);
            a.href = url;
            a.download = "receta";
            a.click();
        });
    }
    createPDFfront() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            var fonts = {
                Roboto: {
                    normal: 'fonts/Roboto-Regular.ttf',
                    bold: 'fonts/Roboto-Medium.ttf',
                    italics: 'fonts/Roboto-Italic.ttf',
                    bolditalics: 'fonts/Roboto-MediumItalic.ttf'
                },
            };
            var fecha_hoy = new Date(Date.now()).toLocaleDateString('en-GB');
            var numeroReceta = 'Nº 000901';
            var propietarioEmpresa = 'Raúl J. Condori Ramos';
            var direccionEmpresa = 'Jr: Arequipa 347 - Puno';
            var felefonoEmpresa = '954170390 - 930314556';
            var primeraRecomnedacion = 'Al empezar a usar los nuevos lentes, es de esperar ciertas incomodidades; ejemplo enturbamiento en la visión a distancia, elevación o inclinacion del nivel del piso, ligera sensación de mareo, que luego desaparece.';
            var segundaRecomendacion = 'Acuda personalmente donde el óptico, para un correcto montaje de sus lentes. Vuelva al optómetra para verificar la correcta preparación de sus lentes.';
            var nombresCliente = this.userPrint.nombres;
            var apellidosCliente = this.userPrint.apellidos;
            var dniCliente = this.userPrint.dni;
            var fnacimientoCliente = new Date(this.userPrint.fecha_nacimiento).toLocaleDateString('en-GB');
            var telefonoCliente = this.userPrint.telefono ? this.userPrint.telefono : "Sin especificar.";
            var od_esf_Cliente = this.userPrint.medidas[0].od_esferico > 0 ? '+' + this.userPrint.medidas[0].od_esferico.toFixed(2) : this.userPrint.medidas[0].od_esferico.toFixed(2);
            var od_cil_Cliente = this.userPrint.medidas[0].od_cilindrico > 0 ? '+' + this.userPrint.medidas[0].od_cilindrico.toFixed(2) : this.userPrint.medidas[0].od_cilindrico.toFixed(2);
            var od_eje_Cliente = this.userPrint.medidas[0].od_eje;
            var oi_esf_Cliente = this.userPrint.medidas[0].oi_esferico > 0 ? '+' + this.userPrint.medidas[0].oi_esferico.toFixed(2) : this.userPrint.medidas[0].oi_esferico.toFixed(2);
            var oi_cil_Cliente = this.userPrint.medidas[0].oi_cilindrico > 0 ? '+' + this.userPrint.medidas[0].oi_cilindrico.toFixed(2) : this.userPrint.medidas[0].oi_cilindrico.toFixed(2);
            var oi_eje_Cliente = this.userPrint.medidas[0].oi_eje;
            var dip_Cliente = this.userPrint.medidas[0].dip;
            var add_Cliente = this.userPrint.medidas[0].add > 0 ? '+' + this.userPrint.medidas[0].add.toFixed(2) : this.userPrint.medidas[0].add.toFixed(2);
            var encargadoCliente = this.userPrint.medidas[0].encargado ? this.userPrint.medidas[0].encargado : " ";
            var antecedentesCliente = this.userPrint.antecedentes ? this.userPrint.antecedentes : "Sin atecedentes.";
            const pdfDefinition = {
                pageSize: 'A4',
                //pageOrientation: 'landscape',
                pageMargins: [40, 10, 40, 10],
                content: [
                    // LOGO y DATOS DE LA EMPRESA
                    {
                        style: 'tableBasic',
                        table: {
                            widths: ['auto', '*'],
                            body: [
                                [{ image: yield (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_8__.getBase64ImageFromURL)('/assets/images/logo-dark.png'), width: 230, rowSpan: 4 }, { text: 'Receta:', style: 'subtitle', alignment: 'right' }],
                                [{}, { text: numeroReceta, alignment: 'right' }],
                                [{}, { text: 'Fecha:', style: 'subtitle', alignment: 'right' }],
                                [{}, { text: fecha_hoy, alignment: 'right' }],
                                [{ text: 'De ' + propietarioEmpresa, alignment: 'center' }, {}],
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
                            widths: ['*', '*', '*'],
                            body: [
                                [{ text: 'Paciente: ' + nombresCliente + apellidosCliente, style: 'title', alignment: 'left', colSpan: 2 }, {}, { text: 'DNI: ' + dniCliente, style: 'text', alignment: 'left' }],
                                [{ text: 'F. Nac.: ' + fnacimientoCliente, style: 'text', alignment: 'left' }, { text: 'Ocupación: ', style: 'text', alignment: 'left' }, { text: 'Cel: ' + telefonoCliente, style: 'text', alignment: 'left' }],
                            ]
                        },
                        layout: {
                            vLineWidth: function (i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 1 : 0;
                            },
                        }
                    },
                    // VISION DE LEJOS 
                    {
                        style: 'tableBasic',
                        table: {
                            widths: [150],
                            heights: [15],
                            body: [
                                [{ text: 'VISIÓN DE LEJOS: ', style: 'title2', alignment: 'left', fillColor: '#2D4497', fillOpacity: 0.80 }],
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
                    // DIAGNÓSTICO 
                    {
                        style: 'tableBasic',
                        table: {
                            widths: ['*', '*', '*', '*'],
                            heights: [15],
                            body: [
                                [
                                    { text: 'DIAGNÓSTICO: ', alignment: 'left', style: 'title2', fillColor: '#2D4497', fillOpacity: 0.80 },
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'Miopia', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'Hipermetropía', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'Astigmatismo', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                ],
                                [
                                    '',
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'Presbicia', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'Ojo Vago', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'Ambliopia', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                ]
                            ]
                        },
                        layout: {
                            defaultBorder: false,
                            paddingLeft: function (i, node) { return 10; },
                        }
                    },
                    // TIPO DE LENTES
                    {
                        style: 'tableBasic',
                        table: {
                            widths: ['*', '*', '*'],
                            heights: [15],
                            body: [
                                [
                                    { text: 'TIPO DE LENTES: ', alignment: 'left', style: 'title2', fillColor: '#2D4497', fillOpacity: 0.80 },
                                    '',
                                    { text: 'SE RECOMIENDA', alignment: 'center', style: 'title2', fillColor: '#2D4497', fillOpacity: 0.80 },
                                ],
                                [
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'MONOFOCALES', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'ORGÁNICOS', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'ANTIREFLEX', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                ],
                                [
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'BIFOCALES', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'CRISTALES', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'FOTOCROMÁTICOS', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                ],
                                [
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'MULTIFOCALES', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'POLICARBONATO', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            table: {
                                                widths: [10, '*'],
                                                body: [
                                                    [' ', { text: 'LC', style: 'text', alignment: 'left', border: [true, false, false, false] }],
                                                ]
                                            },
                                        },
                                    ],
                                ]
                            ]
                        },
                        layout: {
                            paddingLeft: function (i, node) { return 10; },
                            hLineWidth: function (i, node) {
                                return (i === 0 || i === node.table.body.length) ? 1 : 0;
                            },
                            vLineWidth: function (i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 1 : 0;
                            },
                        }
                    },
                    // OBSERVACIONES
                    {
                        style: 'tableBasic2',
                        table: {
                            widths: [350, '*'],
                            heights: [30],
                            body: [
                                [{ text: 'OBSERVACIONES: ', style: 'title', alignment: 'left' }, { text: encargadoCliente, style: 'text', alignment: 'center' }],
                                [{}, { text: 'Especialista', style: 'text', alignment: 'center', border: [false, true, false, false] }],
                            ]
                        },
                        layout: {
                            defaultBorder: false,
                        }
                    },
                    // TICKET
                    {
                        style: 'tableBasic',
                        table: {
                            widths: ['auto', '*'],
                            body: [
                                [{ image: yield (0,src_utils_functions__WEBPACK_IMPORTED_MODULE_8__.getBase64ImageFromURL)('/assets/images/logo-dark.png'), width: 150, rowSpan: 3, border: [false, true, false, false] }, { text: ' ', border: [false, true, false, false] }],
                                [{}, { text: direccionEmpresa, style: 'title', alignment: 'center' }],
                                [{}, { text: 'Cel: ' + felefonoEmpresa, style: 'title', alignment: 'center' }],
                                [{ text: 'De ' + propietarioEmpresa, alignment: 'left' }, {}],
                            ],
                        },
                        layout: {
                            defaultBorder: false,
                            hLineStyle: function (i, node) {
                                if (i === 0) {
                                    return { dash: { length: 10, space: 4 } };
                                }
                                return null;
                            },
                        }
                    },
                    // DATOS DEL CLIENTE
                    {
                        style: 'tableBasic',
                        table: {
                            widths: ['*', 100],
                            body: [
                                [{ text: 'Paciente: ' + nombresCliente + apellidosCliente, style: 'title', alignment: 'left' }, { text: 'DNI: ' + dniCliente, style: 'text', alignment: 'left' }],
                                [{ text: 'FECHA DE CONTROL: ', color: '#2D4497', style: 'title', alignment: 'left' }, { text: 'Cel: ' + telefonoCliente, style: 'text', alignment: 'left' }],
                            ]
                        },
                        layout: {
                            vLineWidth: function (i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 1 : 0;
                            },
                        }
                    },
                    // RECOMENDACIONES
                    {
                        style: 'tableBasic',
                        table: {
                            widths: [350, '*'],
                            body: [
                                [{ text: 'RECOMENDACIONES: ', color: '#2D4497', style: 'subtitle', alignment: 'left' }, {}],
                                [{ text: primeraRecomnedacion, color: '#2D4497', style: 'small', alignment: 'left' }, { text: encargadoCliente, style: 'text', alignment: 'center' }],
                                [{ text: segundaRecomendacion, color: '#2D4497', style: 'small', alignment: 'left' }, { text: 'Especialista', color: '#2D4497', style: 'text', alignment: 'center', border: [false, true, false, false], }],
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
                        margin: [0, 3, 0, 3],
                    },
                    tableBasic2: {
                        color: '#2D4497',
                        margin: [0, 3, 0, 7],
                    },
                },
            };
            const pdf = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default().createPdf(pdfDefinition);
            pdf.open();
        });
    }
}
ListCustomersComponent.ɵfac = function ListCustomersComponent_Factory(t) { return new (t || ListCustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_customer_service__WEBPACK_IMPORTED_MODULE_2__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_cliente_service__WEBPACK_IMPORTED_MODULE_10__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_11__.UsuarioService)); };
ListCustomersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: ListCustomersComponent, selectors: [["app-list-customers"]], viewQuery: function ListCustomersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_3__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵProvidersFeature"]([_customer_service__WEBPACK_IMPORTED_MODULE_2__.CustomerService, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe])], decls: 57, vars: 19, consts: [[1, "container-fluid"], ["title", "Lista de Clientes", 3, "breadcrumbItems"], [1, "row", "mt-2", "mb-2"], [1, "col-sm-12", "col-md-8", "justify-content-start"], [1, "row", "mb-2"], [1, "col-md-8", "search-box", "chat-search-box"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar cliente", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "border-light", "rounded", 3, "ngModel", "ngModelChange"], [1, "uil", "uil-search", "search-icon"], [1, "col-sm-12", "col-md-4", "text-md-end"], [1, "dataTables_length"], [1, "d-inline-flex", "align-items-center"], ["name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "row"], [1, "col-12"], [1, "table-responsive", "mb-4"], [1, "table", "datatables", "table-centered", "table-nowrap", "mb-0", "align-middle", "table-card-list", 2, "border-spacing", "0 12px", "width", "100%"], [1, "bg-transparent"], ["scope", "col", "sortable", "id", 3, "sort"], ["scope", "col", "sortable", "nombres", 3, "sort"], ["scope", "col", "sortable", "apellidos", 3, "sort"], ["scope", "col", "sortable", "dni", 3, "sort"], ["scope", "col", "sortable", "telefono", 3, "sort"], ["scope", "col", "sortable", "fecha_nacimiento", 3, "sort"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "row", "justify-content-md-between", "align-items-md-center"], [1, "text-md-end", "float-md-end", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["centerDataModalMeasurementsCustomer", ""], ["centerDataModalEditCustomer", ""], [3, "result", "term"], [1, "avatar-xs", "d-inline-block", "me-2"], [1, "avatar-title", "rounded-circle", "bg-light", "text-body"], ["placement", "top", "ngbTooltip", "Receta", 1, "px-2", "text-info", 3, "click"], [1, "uil", "uil-file-info-alt", "font-size-18"], ["placement", "top", "ngbTooltip", "Editar", 1, "px-2", "text-primary", 3, "click"], [1, "uil", "uil-pen", "font-size-18"], ["placement", "top", "ngbTooltip", "Eliminar", 1, "px-2", "text-danger", 3, "click"], ["class", "uil uil-trash-alt font-size-18", 4, "appRole"], [1, "uil", "uil-trash-alt", "font-size-18"], [1, "text-center", "my-3"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "mdi", "mdi-loading", "mdi-spin", "font-size-20", "align-middle", "me-2"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "p-3"], [1, "invoice-title"], [1, "col-sm-6"], [1, "mb-4"], ["src", "assets/images/logo-dark.png", "alt", "logo", "height", "100"], [1, "text-muted", "text-sm-end"], [1, "mt-4"], [1, "font-size-16", "mb-1"], [1, "my-1"], [1, "text-muted"], [1, "font-size-16", "mb-3"], [1, "font-size-15", "mb-2"], [1, "list-inline-item"], [1, "fw-medium"], [1, "my-2"], [1, "py-1"], [1, "col-lg-9", "mb-2"], [1, "card-title", "text-center"], [1, "table-responsive"], [1, "table", "table-nowrap", "table-centered", "table-bordered", "mb-0"], [1, "table-light"], [2, "width", "70px"], ["scope", "row"], [1, "col-lg-3"], [1, "text-center"], [1, "col-sm-12"], [1, "card-title"], [1, "card-title-desc"], [1, "modal-footer"], [1, "btn", "btn-primary", 3, "click"], [1, "uil", "uil-download-alt", "me-1"], [1, "btn", "btn-danger", "w-md", "waves-effect", "waves-light", 3, "click"], ["id", "modal-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [3, "formGroup"], [1, "card-title-desc", "text-danger"], [1, "col-6"], [1, "mb-3"], [1, "control-label"], ["placeholder", "DNI del cliente", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["placeholder", "Seleccione la fecha", "type", "date", 1, "form-control", 3, "formControlName"], [1, "col-md-6"], ["placeholder", "Nombres del cliente", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Apellidos del cliente", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], [1, "col-md-3"], ["placeholder", "Tel\u00E9fono del cliente", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Correo electr\u00F3nico", "type", "email", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Direcci\u00F3n completa del cliente", "type", "text", 1, "form-control", 3, "formControlName"], [1, "border-top", "py-2"], [1, "d-flex", "justify-content-center"], [1, "col-4"], ["placeholder", "Esfera", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Cilindro", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Eje", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Distancia Interpupilar", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Adici\u00F3n", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Nombres y apellidos del Oftometra", "type", "text", 1, "form-control", 3, "formControlName", "ngClass"], ["for", "billing-antecedentes", 1, "form-label"], ["id", "billing-antecedentes", "rows", "3", "placeholder", "Antecedentes del cliente", 1, "form-control", 3, "formControlName"], [1, "text-end", "mt-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "disabled", "click"]], template: function ListCustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ListCustomersComponent_Template_input_ngModelChange_7_listener($event) { return ctx.service.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Mostrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function ListCustomersComponent_Template_select_ngModelChange_13_listener($event) { return ctx.service.pageSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, " entradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sort", function ListCustomersComponent_Template_th_sort_30_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "Ord.");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sort", function ListCustomersComponent_Template_th_sort_32_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "Nombres");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sort", function ListCustomersComponent_Template_th_sort_34_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35, "Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sort", function ListCustomersComponent_Template_th_sort_36_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, "DNI");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sort", function ListCustomersComponent_Template_th_sort_38_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sort", function ListCustomersComponent_Template_th_sort_40_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41, "Fecha de Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](43, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](45, ListCustomersComponent_tr_45_Template, 24, 17, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](46, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](47, ListCustomersComponent_div_47_Template, 6, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "ngb-pagination", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("pageChange", function ListCustomersComponent_Template_ngb_pagination_pageChange_51_listener($event) { return ctx.service.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](52, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, ListCustomersComponent_ng_template_53_Template, 116, 23, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](55, ListCustomersComponent_ng_template_55_Template, 185, 109, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](46, 15, ctx.customers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](52, 17, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize)("maxSize", 5)("rotate", true)("boundaryLinks", true);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_12__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _sortable_directive__WEBPACK_IMPORTED_MODULE_3__.NgbdSortableHeader, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbHighlight, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbTooltip, _directives_role_directive__WEBPACK_IMPORTED_MODULE_13__.RoleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWN1c3RvbWVycy5jb21wb25lbnQuc2NzcyJ9 */"] });


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