"use strict";
(self["webpackChunkminible_ng"] = self["webpackChunkminible_ng"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 85298);
/* harmony import */ var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/layout.component */ 72140);
/* harmony import */ var _pages_products_accesorios_accesorios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/products/accesorios/accesorios.component */ 2101);
/* harmony import */ var _pages_products_lunas_lunas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/products/lunas/lunas.component */ 77153);
/* harmony import */ var _pages_products_monturas_monturas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/products/monturas/monturas.component */ 86506);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ 54126);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/register/register.component */ 52577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);










const routes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent },
    { path: 'monturas', component: _pages_products_monturas_monturas_component__WEBPACK_IMPORTED_MODULE_4__.MonturasComponent },
    { path: 'lunas', component: _pages_products_lunas_lunas_component__WEBPACK_IMPORTED_MODULE_3__.LunasComponent },
    { path: 'accesorios', component: _pages_products_accesorios_accesorios_component__WEBPACK_IMPORTED_MODULE_2__.AccesoriosComponent },
    //{ path: '**', redirectTo: '404', pathMatch: 'full'},
    //{ path: '**', redirectTo: '404',component: Page404Component},
    // tslint:disable-next-line: max-line-length
    { path: '', component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 22302)).then(m => m.PagesModule), canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'pages', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_extrapages_extrapages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./extrapages/extrapages.module */ 17358)).then(m => m.ExtrapagesModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);


class AppComponent {
    ngOnInit() {
        //  document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");  
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 18260);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-owl-carousel-o */ 24008);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/layouts.module */ 31472);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 48017);
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authUtils */ 72004);
/* harmony import */ var _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/helpers/error.interceptor */ 331);
/* harmony import */ var _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/helpers/jwt.interceptor */ 35189);
/* harmony import */ var _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/helpers/fake-backend */ 94095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);



















if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
    (0,_authUtils__WEBPACK_IMPORTED_MODULE_4__.initFirebaseBackend)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebaseConfig);
}
else {
    // tslint:disable-next-line: no-unused-expression
    _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_7__.FakeBackendInterceptor;
}
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__.JwtInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_5__.ErrorInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_7__.FakeBackendInterceptor, multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            }),
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__.LayoutsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__.LayoutsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule] }); })();


/***/ }),

/***/ 72004:
/*!******************************!*\
  !*** ./src/app/authUtils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initFirebaseBackend": () => (/* binding */ initFirebaseBackend),
/* harmony export */   "getFirebaseBackend": () => (/* binding */ getFirebaseBackend)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 79062);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 51070);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24401);

// Add the Firebase products that you want to use


class FirebaseAuthBackend {
    constructor(firebaseConfig) {
        /**
         * Registers the user with given details
         */
        this.registerUser = (email, password) => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__.auth().createUserWithEmailAndPassword(email, password).then((user) => {
                    var user = firebase_app__WEBPACK_IMPORTED_MODULE_0__.auth().currentUser;
                    resolve(user);
                }, (error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * Login user with given details
         */
        this.loginUser = (email, password) => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__.auth().signInWithEmailAndPassword(email, password).then((user) => {
                    // eslint-disable-next-line no-redeclare
                    var user = firebase_app__WEBPACK_IMPORTED_MODULE_0__.auth().currentUser;
                    resolve(user);
                }, (error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * forget Password user with given details
         */
        this.forgetPassword = (email) => {
            return new Promise((resolve, reject) => {
                // tslint:disable-next-line: max-line-length
                firebase_app__WEBPACK_IMPORTED_MODULE_0__.auth().sendPasswordResetEmail(email, { url: window.location.protocol + '//' + window.location.host + '/login' }).then(() => {
                    resolve(true);
                }).catch((error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * Logout the user
         */
        this.logout = () => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__.auth().signOut().then(() => {
                    resolve(true);
                }).catch((error) => {
                    reject(this._handleError(error));
                });
            });
        };
        this.setLoggeedInUser = (user) => {
            sessionStorage.setItem('authUser', JSON.stringify(user));
        };
        /**
         * Returns the authenticated user
         */
        this.getAuthenticatedUser = () => {
            if (!sessionStorage.getItem('authUser')) {
                return null;
            }
            return JSON.parse(sessionStorage.getItem('authUser'));
        };
        if (firebaseConfig) {
            // Initialize Firebase
            firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp(firebaseConfig);
            firebase_app__WEBPACK_IMPORTED_MODULE_0__.auth().onAuthStateChanged((user) => {
                if (user) {
                    sessionStorage.setItem('authUser', JSON.stringify(user));
                }
                else {
                    sessionStorage.removeItem('authUser');
                }
            });
        }
    }
    /**
     * Handle the error
     * @param {*} error
     */
    _handleError(error) {
        // tslint:disable-next-line: prefer-const
        var errorMessage = error.message;
        return errorMessage;
    }
}
// tslint:disable-next-line: variable-name
let _fireBaseBackend = null;
/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = (config) => {
    if (!_fireBaseBackend) {
        _fireBaseBackend = new FirebaseAuthBackend(config);
    }
    return _fireBaseBackend;
};
/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
    return _fireBaseBackend;
};



/***/ }),

/***/ 85298:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 67686);
/* harmony import */ var _services_authfake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authfake.service */ 92464);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);





class AuthGuard {
    constructor(router, authenticationService, authFackservice, usuarioService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.authFackservice = authFackservice;
        this.usuarioService = usuarioService;
    }
    canActivate(route, state) {
        /* if (environment.defaultauth === 'firebase') {
            const currentUser = this.authenticationService.currentUser();
            if (currentUser) {
                // logged in so return true
                return true;
            }
        } else {
            const currentUser = this.authFackservice.currentUserValue;
            if (currentUser) {
                // logged in so return true
                return true;
            }
        } */
        // not logged in so redirect to login page with the return url
        //this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        /* if (this.usuarioService.isLoggedIn !== true) {
            window.alert("Access not allowed!");
            this.router.navigate(['pages/404'])
          }
          return true; */
        let url = state.url;
        return this.checkUserLogin(route, url);
    }
    checkUserLogin(route, url) {
        if (this.usuarioService.isLoggedIn) {
            const userRole = this.usuarioService.getRole();
            if (route.data.role && route.data.role.indexOf(userRole) === -1) {
                this.router.navigate(['pages/404']);
                return false;
            }
            return true;
        }
        else {
            window.alert("Access not allowed!");
            this.router.navigate(['pages/404']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 331:
/*!***************************************************!*\
  !*** ./src/app/core/helpers/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);





class ErrorInterceptor {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
            switch (err.status) {
                case 401:
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("error", err.error);
                    this.usuarioService.logOut();
                    break;
                case 400:
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("error", err.error.message);
                    break;
                case 500:
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("error", err.error.message);
                    break;
                default:
                    break;
            }
            const error = err.error.message || err.statusText;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 94095:
/*!**********************************************!*\
  !*** ./src/app/core/helpers/fake-backend.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeBackendInterceptor": () => (/* binding */ FakeBackendInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 90758);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 21513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 78068);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 46700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);




class FakeBackendInterceptor {
    constructor() { }
    intercept(request, next) {
        // array in local storage for registered users
        // tslint:disable-next-line: max-line-length
        const users = JSON.parse(localStorage.getItem('users')) || [{ username: 'admin', email: 'admin@themesbrand.com', password: '123456' }];
        // wrap in delayed observable to simulate server api call
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                const filteredUsers = users.filter(user => {
                    return user.email === request.body.email && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    const user = filteredUsers[0];
                    const body = {
                        id: user.id,
                        email: user.email,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body }));
                }
                else {
                    // else return 400 bad request
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    // tslint:disable-next-line: radix
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    // tslint:disable-next-line: no-shadowed-variable
                    const matchedUsers = users.filter(user => user.id === id);
                    const user = matchedUsers.length ? matchedUsers[0] : null;
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                const newUser = request.body;
                // validation
                const duplicateUser = users.filter(user => user.username === newUser.username).length;
                if (duplicateUser) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
                }
                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    // tslint:disable-next-line: radix
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        const user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // tslint:disable-next-line: max-line-length
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.materialize)())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(500))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.dematerialize)());
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });


/***/ }),

/***/ 35189:
/*!*************************************************!*\
  !*** ./src/app/core/helpers/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 67686);
/* harmony import */ var _services_authfake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authfake.service */ 92464);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);




class JwtInterceptor {
    constructor(authenticationService, authfackservice, usuarioService) {
        this.authenticationService = authenticationService;
        this.authfackservice = authfackservice;
        this.usuarioService = usuarioService;
    }
    intercept(request, next) {
        /* if (environment.defaultauth === 'firebase') {
            const currentUser = this.authenticationService.currentUser();
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            }
        } else {
            // add authorization header with jwt token if available
            const currentUser = this.authfackservice.currentUserValue;
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            }
        } */
        const authToken = this.usuarioService.getToken();
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 67686:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../authUtils */ 72004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


class AuthenticationService {
    constructor() {
    }
    /**
     * Returns the current user
     */
    currentUser() {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().getAuthenticatedUser();
    }
    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email, password) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().loginUser(email, password).then((response) => {
            const user = response;
            return user;
        });
    }
    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email, password) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().registerUser(email, password).then((response) => {
            const user = response;
            return user;
        });
    }
    /**
     * Reset password
     * @param email email
     */
    resetPassword(email) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().forgetPassword(email).then((response) => {
            const message = response.data;
            return message;
        });
    }
    /**
     * Logout the user
     */
    logout() {
        // logout the user
        (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().logout();
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92464:
/*!***************************************************!*\
  !*** ./src/app/core/services/authfake.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthfakeauthenticationService": () => (/* binding */ AuthfakeauthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);




class AuthfakeauthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(email, password) {
        return this.http.post(`/users/authenticate`, { email, password })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
AuthfakeauthenticationService.ɵfac = function AuthfakeauthenticationService_Factory(t) { return new (t || AuthfakeauthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AuthfakeauthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthfakeauthenticationService, factory: AuthfakeauthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 63997:
/*!************************************************!*\
  !*** ./src/app/core/services/event.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);



class EventService {
    constructor() {
        this.handler = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    /**
       * Broadcast the event
       * @param type type of event
       * @param payload payload
       */
    broadcast(type, payload = {}) {
        this.handler.next({ type, payload });
    }
    /**
     * Subscribe to event
     * @param type type of event
     * @param callback call back function
     */
    subscribe(type, callback) {
        return this.handler.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event.type === type)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(event => event.payload))
            .subscribe(callback);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(); };
EventService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 58463:
/*!***************************************************!*\
  !*** ./src/app/core/services/language.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ 32071);



class LanguageService {
    constructor(translate, cookieService) {
        this.translate = translate;
        this.cookieService = cookieService;
        this.languages = ['en', 'es', 'de', 'it', 'ru'];
        let browserLang;
        this.translate.addLangs(this.languages);
        if (this.cookieService.check('lang')) {
            browserLang = this.cookieService.get('lang');
        }
        else {
            browserLang = translate.getBrowserLang();
        }
        translate.use(browserLang.match(/en|es|de|it|ru/) ? browserLang : 'en');
    }
    setLanguage(lang) {
        this.translate.use(lang);
        this.cookieService.set('lang', lang);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 48185:
/*!**********************************************!*\
  !*** ./src/app/directives/role.directive.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleDirective": () => (/* binding */ RoleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/usuario.service */ 20566);


class RoleDirective {
    constructor(templateRef, viewContainer, userService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.userService = userService;
    }
    ngOnInit() {
        this.role = this.userService.getRole();
        this.updateView();
    }
    set appRole(val) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.permissions = val;
        this.updateView();
    }
    updateView() {
        this.viewContainer.clear();
        if (this.checkPermissions()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
    checkPermissions() {
        let hasPermission = false;
        if (this.role == this.permissions) {
            hasPermission = true;
        }
        return hasPermission;
    }
}
RoleDirective.ɵfac = function RoleDirective_Factory(t) { return new (t || RoleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService)); };
RoleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: RoleDirective, selectors: [["", "appRole", ""]], inputs: { appRole: "appRole" } });


/***/ }),

/***/ 42234:
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

/**
 * Footer component
 */
class FooterComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 1, consts: [[1, "footer"], [1, "container-fluid"], [1, "row"], [1, "col-sm-6"], [1, "text-sm-end", "d-none", "d-sm-block"], [1, "mdi", "mdi-laptop-mac", "text-danger"], ["href", "", "target", "_blank", 1, "text-reset"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Desarrollado por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "REW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.year, " \u00A9 Todos los derechos reservados. ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 72140:
/*!*********************************************!*\
  !*** ./src/app/layouts/layout.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts.model */ 12908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/event.service */ 63997);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical/vertical.component */ 40125);





function LayoutComponent_app_vertical_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-vertical");
} }
class LayoutComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        // default settings
        this.layoutType = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
        // listen to event and change the layout, theme, etc
        this.eventService.subscribe('changeLayout', (layout) => {
            this.layoutType = layout;
        });
    }
    ngAfterViewInit() {
    }
    /**
     * Check if the vertical layout is requested
     */
    isVerticalLayoutRequested() {
        return this.layoutType === _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LayoutComponent_app_vertical_0_Template, 1, 0, "app-vertical", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isVerticalLayoutRequested());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_2__.VerticalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 12908:
/*!******************************************!*\
  !*** ./src/app/layouts/layouts.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LAYOUT_VERTICAL": () => (/* binding */ LAYOUT_VERTICAL)
/* harmony export */ });
const LAYOUT_VERTICAL = 'vertical';


/***/ }),

/***/ 31472:
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsModule": () => (/* binding */ LayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-click-outside */ 6294);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ui-switch */ 54247);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ 72140);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 8062);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topbar/topbar.component */ 69514);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 42234);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vertical/vertical.component */ 40125);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);













class LayoutsModule {
}
LayoutsModule.ɵfac = function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); };
LayoutsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: LayoutsModule });
LayoutsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_12__.SimplebarAngularModule,
            ngx_ui_switch__WEBPACK_IMPORTED_MODULE_1__.UiSwitchModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_4__.TopbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_6__.VerticalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_12__.SimplebarAngularModule,
        ngx_ui_switch__WEBPACK_IMPORTED_MODULE_1__.UiSwitchModule] }); })();


/***/ }),

/***/ 84242:
/*!*****************************************!*\
  !*** ./src/app/layouts/sidebar/menu.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU)
/* harmony export */ });
const MENU = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true,
        role: ['Admin', 'Vendedor'],
        subItems: []
    },
    {
        id: 2,
        label: 'MENUITEMS.HOME.TEXT',
        icon: 'uil-home-alt',
        link: '/home',
        role: ['Admin', 'Vendedor'],
        subItems: []
    },
    {
        id: 3,
        label: 'MENUITEMS.CLIENT.TEXT',
        icon: 'uil-users-alt',
        subItems: [
            {
                id: 4,
                label: 'MENUITEMS.CLIENT.LIST.ADDCLIENT',
                link: '/customer/addcustomer',
                parentId: 3,
                role: ['Admin', 'Vendedor']
            },
            {
                id: 5,
                label: 'MENUITEMS.CLIENT.LIST.LISTCLIENTS',
                link: '/customer/listcustomers',
                parentId: 3,
                role: ['Admin', 'Vendedor']
            },
        ],
        role: ['Admin', 'Vendedor']
    },
    {
        id: 6,
        label: 'MENUITEMS.USER.TEXT',
        icon: 'uil-user-circle',
        subItems: [
            {
                id: 7,
                label: 'MENUITEMS.USER.LIST.ADDUSER',
                link: '/user/adduser',
                parentId: 6,
                role: ['Admin']
            },
            {
                id: 8,
                label: 'MENUITEMS.USER.LIST.LISTUSERS',
                link: '/user/listusers',
                parentId: 6,
                role: ['Admin']
            },
        ],
        link: '/users',
        role: ['Admin']
    },
    {
        id: 9,
        label: 'MENUITEMS.PRODUCTS.TEXT',
        icon: 'uil-box',
        role: ['Admin', 'Vendedor'],
        subItems: [
            {
                id: 10,
                label: 'MENUITEMS.PRODUCTS.LIST.MONTURAS',
                link: '/products/monturas',
                parentId: 9,
                role: ['Admin', 'Vendedor']
            },
            {
                id: 11,
                label: 'MENUITEMS.PRODUCTS.LIST.LENTES',
                link: '/products/lunas',
                parentId: 9,
                role: ['Admin', 'Vendedor']
            },
            {
                id: 12,
                label: 'MENUITEMS.PRODUCTS.LIST.ACCESORIOS',
                link: '/products/accesorios',
                parentId: 9,
                role: ['Admin', 'Vendedor']
            },
            {
                id: 13,
                label: 'MENUITEMS.PRODUCTS.LIST.ADDPRODUCTS',
                link: '/products/addproducts',
                parentId: 9,
                role: ['Admin']
            },
            {
                id: 14,
                label: 'MENUITEMS.PRODUCTS.LIST.UPDATEEXCEL',
                link: '/products/updateexcel',
                parentId: 9,
                role: ['Admin']
            },
            {
                id: 15,
                label: 'MENUITEMS.PRODUCTS.LIST.INVENTARIO',
                link: '/products/inventario',
                parentId: 9,
                role: ['Admin']
            },
        ],
        link: '/products',
    },
    {
        id: 16,
        label: 'MENUITEMS.STORES.TEXT',
        icon: 'uil-shop',
        role: ['Admin'],
        subItems: [
            {
                id: 17,
                label: 'MENUITEMS.STORES.LIST.STORES',
                link: '/store/liststores',
                parentId: 16,
                role: ['Admin']
            },
            {
                id: 18,
                label: 'MENUITEMS.STORES.LIST.ADDSTORES',
                link: '/store/addstore',
                parentId: 16,
                role: ['Admin']
            },
        ],
        link: '/store',
    },
    {
        id: 19,
        label: 'MENUITEMS.SALES.TEXT',
        icon: 'uil-invoice',
        subItems: [
            {
                id: 20,
                label: 'MENUITEMS.SALES.LIST.SALES',
                link: '/sale/listsales',
                parentId: 19,
                role: ['Admin', 'Vendedor']
            },
            {
                id: 21,
                label: 'MENUITEMS.SALES.LIST.ADDSALES',
                link: '/sale/addsale',
                parentId: 19,
                role: ['Admin', 'Vendedor']
            },
        ],
        link: '/sale',
        role: ['Admin', 'Vendedor']
    },
    {
        id: 22,
        label: 'MENUITEMS.CASHREGISTER.TEXT',
        icon: 'uil-invoice',
        subItems: [
            {
                id: 23,
                label: 'MENUITEMS.CASHREGISTER.LIST.CASHREGISTER',
                link: '/cash/cashregister',
                parentId: 22,
                role: ['Admin', 'Vendedor']
            },
            {
                id: 24,
                label: 'MENUITEMS.CASHREGISTER.LIST.LISTCASH',
                link: '/cash/listcash',
                parentId: 22,
                role: ['Admin']
            },
        ],
        link: '/cash',
        role: ['Admin', 'Vendedor']
    },
];


/***/ }),

/***/ 8062:
/*!******************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! metismenujs/dist/metismenujs */ 43592);
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ 84242);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/event.service */ 63997);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! simplebar-angular */ 6878);











const _c0 = ["sideMenu"];
const _c1 = ["componentRef"];
function SidebarComponent_ngx_simplebar_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function SidebarComponent_ngx_simplebar_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-simplebar", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_ngx_simplebar_14_ng_container_2_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function SidebarComponent_ngx_simplebar_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function SidebarComponent_ngx_simplebar_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-simplebar", 17, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_ngx_simplebar_15_ng_container_2_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function SidebarComponent_ng_template_16_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, item_r10.label));
} }
function SidebarComponent_ng_template_16_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_ng_template_16_ng_container_3_li_2_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r15.changeLayout("horizontal"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_ng_template_16_ng_container_3_li_2_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r17.darkSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_ng_template_16_ng_container_3_li_2_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r18.compactSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_ng_template_16_ng_container_3_li_2_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r19.iconSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_ng_template_16_ng_container_3_li_2_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r20.boxedLayout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_ng_template_16_ng_container_3_li_2_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r21.coloredSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 7, "MENUITEMS.LAYOUTS.TEXT"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 9, "MENUITEMS.LAYOUTS.LIST.HORIZONTAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 11, "MENUITEMS.LAYOUTS.LIST.DARKSIDEBAR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 13, "MENUITEMS.LAYOUTS.LIST.COMPACTSIDEBAR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 15, "MENUITEMS.LAYOUTS.LIST.ICONSIDEBAR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 17, "MENUITEMS.LAYOUTS.LIST.BOXEDWITH"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 19, "MENUITEMS.LAYOUTS.LIST.COLOREDSIDEBAR"), " ");
} }
function SidebarComponent_ng_template_16_ng_container_3_li_3_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("bx ", item_r10.icon, "");
} }
function SidebarComponent_ng_template_16_ng_container_3_li_3_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge rounded-pill bg-", item_r10.badge.variant, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, item_r10.badge.text));
} }
const _c2 = function (a0, a1) { return { "has-arrow": a0, "has-dropdown": a1 }; };
function SidebarComponent_ng_template_16_ng_container_3_li_3_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_ng_template_16_ng_container_3_li_3_a_1_i_1_Template, 1, 3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_ng_template_16_ng_container_3_li_3_a_1_span_5_Template, 3, 6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](6, _c2, !item_r10.badge, item_r10.badge));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, item_r10.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r10.badge);
} }
function SidebarComponent_ng_template_16_ng_container_3_li_3_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("bx ", item_r10.icon, "");
} }
function SidebarComponent_ng_template_16_ng_container_3_li_3_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge rounded-pill bg-", item_r10.badge.variant, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, item_r10.badge.text));
} }
function SidebarComponent_ng_template_16_ng_container_3_li_3_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_ng_template_16_ng_container_3_li_3_a_2_i_1_Template, 1, 3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_ng_template_16_ng_container_3_li_3_a_2_span_5_Template, 3, 6, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", item_r10.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, item_r10.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r10.badge);
} }
function SidebarComponent_ng_template_16_ng_container_3_li_3_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", subitem_r36.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-parent", subitem_r36.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, subitem_r36.label), " ");
} }
function SidebarComponent_ng_template_16_ng_container_3_li_3_ul_3_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-parent", subitem_r36.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, subitem_r36.label), " ");
} }
function SidebarComponent_ng_template_16_ng_container_3_li_3_ul_3_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubitem_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", subSubitem_r43.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-parent", subSubitem_r43.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, subSubitem_r43.label), " ");
} }
function SidebarComponent_ng_template_16_ng_container_3_li_3_ul_3_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_ng_template_16_ng_container_3_li_3_ul_3_li_1_ul_3_li_1_Template, 4, 5, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", subitem_r36.subItems);
} }
function SidebarComponent_ng_template_16_ng_container_3_li_3_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_ng_template_16_ng_container_3_li_3_ul_3_li_1_a_1_Template, 3, 5, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_ng_template_16_ng_container_3_li_3_ul_3_li_1_a_2_Template, 3, 4, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_ng_template_16_ng_container_3_li_3_ul_3_li_1_ul_3_Template, 2, 1, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r36 = ctx.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r35.hasItems(subitem_r36));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r35.hasItems(subitem_r36));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r35.hasItems(subitem_r36));
} }
function SidebarComponent_ng_template_16_ng_container_3_li_3_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_ng_template_16_ng_container_3_li_3_ul_3_li_1_Template, 4, 3, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r10.subItems);
} }
function SidebarComponent_ng_template_16_ng_container_3_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_ng_template_16_ng_container_3_li_3_a_1_Template, 6, 9, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_ng_template_16_ng_container_3_li_3_a_2_Template, 6, 6, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_ng_template_16_ng_container_3_li_3_ul_3_Template, 2, 1, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.hasItems(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r13.hasItems(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.hasItems(item_r10));
} }
function SidebarComponent_ng_template_16_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_ng_template_16_ng_container_3_li_1_Template, 3, 3, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_ng_template_16_ng_container_3_li_2_Template, 31, 21, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_ng_template_16_ng_container_3_li_3_Template, 4, 3, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r10.isTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r10.isLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !item_r10.isTitle && !item_r10.isLayout);
} }
function SidebarComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_ng_template_16_ng_container_3_Template, 4, 3, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.menuItems);
} }
const _c3 = function () { return ["/home"]; };
/**
 * Sidebar component
 */
class SidebarComponent {
    constructor(eventService, router, translate, usuarioService) {
        this.eventService = eventService;
        this.router = router;
        this.translate = translate;
        this.usuarioService = usuarioService;
        this.isCondensed = false;
        this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.menuItems = [];
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                this._activateMenuDropdown();
                this._scrollElement();
            }
        });
    }
    ngOnInit() {
        this.role = this.usuarioService.getRole();
        this.initialize();
        this._scrollElement();
        document.body.setAttribute('data-sidebar', 'light');
    }
    /**
     * Change the layout onclick
     * @param layout Change the layout
     */
    changeLayout(layout) {
        this.eventService.broadcast('changeLayout', layout);
    }
    ngAfterViewInit() {
        this.menu = new (metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default())(this.sideMenu.nativeElement);
        this._activateMenuDropdown();
    }
    ngOnChanges() {
        if (!this.isCondensed && this.sideMenu || this.isCondensed) {
            setTimeout(() => {
                this.menu = new (metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default())(this.sideMenu.nativeElement);
            });
        }
        else if (this.menu) {
            this.menu.dispose();
        }
    }
    /**
     * remove active and mm-active class
     */
    _removeAllClass(className) {
        const els = document.getElementsByClassName(className);
        while (els[0]) {
            els[0].classList.remove(className);
        }
    }
    /**
     * Toggle the menu bar when having mobile screen
     */
    toggleMobileMenu(event) {
        event.preventDefault();
        this.mobileMenuButtonClicked.emit();
    }
    /**
     * Light sidebar
     */
    darkSidebar() {
        document.body.setAttribute('data-sidebar', 'dark');
        document.body.removeAttribute('data-sidebar-size');
        document.body.removeAttribute('data-layout-size');
        document.body.removeAttribute('data-keep-enlarged');
        document.body.classList.remove('vertical-collpsed');
    }
    /**
     * Compact sidebar
     */
    compactSidebar() {
        document.body.setAttribute('data-sidebar-size', 'small');
        document.body.setAttribute('data-sidebar', 'dark');
        document.body.removeAttribute('data-topbar');
        document.body.removeAttribute('data-layout-size');
        document.body.removeAttribute('data-keep-enlarged');
        document.body.classList.remove('sidebar-enable');
        document.body.classList.remove('vertical-collpsed');
    }
    /**
     * Icon sidebar
     */
    iconSidebar() {
        document.body.classList.add('sidebar-enable');
        document.body.classList.add('vertical-collpsed');
        document.body.setAttribute('data-sidebar', 'dark');
        document.body.removeAttribute('data-layout-size');
        document.body.removeAttribute('data-keep-enlarged');
        document.body.removeAttribute('data-topbar');
    }
    /**
     * Boxed layout
     */
    boxedLayout() {
        document.body.setAttribute('data-keep-enlarged', 'true');
        document.body.setAttribute('data-layout-size', 'boxed');
        document.body.setAttribute('data-sidebar', 'dark');
        document.body.classList.add('vertical-collpsed');
        document.body.classList.remove('sidebar-enable');
        document.body.removeAttribute('data-topbar');
    }
    /**
     * Colored sidebar
     */
    coloredSidebar() {
        document.body.setAttribute('data-sidebar', 'colored');
        document.body.removeAttribute('data-sidebar-size');
        document.body.removeAttribute('data-layout-size');
        document.body.classList.remove('vertical-collpsed');
        document.body.removeAttribute('data-topbar');
    }
    _scrollElement() {
        setTimeout(() => {
            if (document.getElementsByClassName("mm-active").length > 0) {
                const currentPosition = document.getElementsByClassName("mm-active")[0]['offsetTop'];
                if (currentPosition > 500)
                    if (this.scrollRef.SimpleBar) {
                        if (this.scrollRef.SimpleBar.getScrollElement() !== null) {
                            this.scrollRef.SimpleBar.getScrollElement().scrollTop =
                                currentPosition + 300;
                        }
                    }
            }
        }, 300);
    }
    /**
     * Activate the parent dropdown
     */
    _activateMenuDropdown() {
        this._removeAllClass('mm-active');
        this._removeAllClass('mm-show');
        const links = document.getElementsByClassName('side-nav-link-ref');
        let menuItemEl = null;
        // tslint:disable-next-line: prefer-for-of
        const paths = [];
        for (let i = 0; i < links.length; i++) {
            paths.push(links[i]['pathname']);
        }
        var itemIndex = paths.indexOf(window.location.pathname);
        if (itemIndex === -1) {
            const strIndex = window.location.pathname.lastIndexOf('/');
            const item = window.location.pathname.substr(0, strIndex).toString();
            menuItemEl = links[paths.indexOf(item)];
        }
        else {
            menuItemEl = links[itemIndex];
        }
        if (menuItemEl) {
            menuItemEl.classList.add('active');
            const parentEl = menuItemEl.parentElement;
            if (parentEl) {
                parentEl.classList.add('mm-active');
                const parent2El = parentEl.parentElement.closest('ul');
                if (parent2El && parent2El.id !== 'side-menu') {
                    parent2El.classList.add('mm-show');
                    const parent3El = parent2El.parentElement;
                    if (parent3El && parent3El.id !== 'side-menu') {
                        parent3El.classList.add('mm-active');
                        const childAnchor = parent3El.querySelector('.has-arrow');
                        const childDropdown = parent3El.querySelector('.has-dropdown');
                        if (childAnchor) {
                            childAnchor.classList.add('mm-active');
                        }
                        if (childDropdown) {
                            childDropdown.classList.add('mm-active');
                        }
                        const parent4El = parent3El.parentElement;
                        if (parent4El && parent4El.id !== 'side-menu') {
                            parent4El.classList.add('mm-show');
                            const parent5El = parent4El.parentElement;
                            if (parent5El && parent5El.id !== 'side-menu') {
                                parent5El.classList.add('mm-active');
                                const childanchor = parent5El.querySelector('.is-parent');
                                if (childanchor && parent5El.id !== 'side-menu') {
                                    childanchor.classList.add('mm-active');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * Initialize
     */
    initialize() {
        //this.menuItems = MENU;
        this.menuItems = this.filterMenubyRole(_menu__WEBPACK_IMPORTED_MODULE_1__.MENU, this.role);
        this.menuItems.forEach(menu => {
            let submenu = [];
            if (menu.subItems.length > 0) {
                menu.subItems.forEach(sub => {
                    if (sub.role.some(el => (el == this.role))) {
                        submenu.push(sub);
                    }
                });
                menu.subItems = submenu;
            }
        });
    }
    filterMenubyRole(menus, role) {
        let menuTmp = [];
        for (const menu of menus) {
            if (menu.role.some(el => (el == role))) {
                menuTmp.push(menu);
            }
        }
        return menuTmp;
    }
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.scrollRef = _t.first);
    } }, inputs: { isCondensed: "isCondensed" }, outputs: { mobileMenuButtonClicked: "mobileMenuButtonClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 6, consts: [[1, "vertical-menu"], [1, "navbar-brand-box", "mt-2"], [1, "logo", "logo-dark", 3, "routerLink"], [1, "logo-sm"], ["src", "assets/images/logo-sm.png", "alt", "", "height", "30"], [1, "logo-lg"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "80"], [1, "logo", "logo-light", 3, "routerLink"], ["src", "assets/images/logo-light.png", "alt", "", "height", "80"], ["type", "button", 1, "btn", "btn-sm", "px-3", "font-size-16", "header-item", "waves-effect", "vertical-menu-btn", 3, "click"], [1, "fa", "fa-fw", "fa-bars"], ["class", "h-100 sidebar-menu-scroll", 4, "ngIf"], ["class", "sidebar-menu-scroll", 4, "ngIf"], ["contentTemplate", ""], [1, "h-100", "sidebar-menu-scroll"], ["componentRef", ""], [4, "ngTemplateOutlet"], [1, "sidebar-menu-scroll"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu", "list-unstyled"], ["sideMenu", ""], [4, "ngFor", "ngForOf"], ["class", "menu-title", 4, "ngIf"], [4, "ngIf"], [1, "menu-title"], ["href", "javascript: void(0);", 1, "has-arrow"], [1, "uil-window-section"], ["aria-expanded", "false", 1, "sub-menu"], ["href", "javascript: void(0);", 3, "click"], ["href", "javascript:void(0);", "class", "is-parent", 3, "ngClass", 4, "ngIf"], ["class", "side-nav-link-ref", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "sub-menu", "aria-expanded", "false", 4, "ngIf"], ["href", "javascript:void(0);", 1, "is-parent", 3, "ngClass"], [3, "class", 4, "ngIf"], ["routerLinkActive", "active", 1, "side-nav-link-ref", 3, "routerLink"], ["class", "side-nav-link-a-ref has-arrow", "href", "javascript:void(0);", 4, "ngIf"], ["class", "sub-menu mm-collapse", "aria-expanded", "false", 4, "ngIf"], ["href", "javascript:void(0);", 1, "side-nav-link-a-ref", "has-arrow"], ["aria-expanded", "false", 1, "sub-menu", "mm-collapse"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_12_listener($event) { return ctx.toggleMobileMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SidebarComponent_ngx_simplebar_14_Template, 3, 1, "ngx-simplebar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, SidebarComponent_ngx_simplebar_15_Template, 3, 1, "ngx-simplebar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SidebarComponent_ng_template_16_Template, 4, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isCondensed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCondensed);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, simplebar_angular__WEBPACK_IMPORTED_MODULE_8__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 69514:
/*!****************************************************!*\
  !*** ./src/app/layouts/topbar/topbar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopbarComponent": () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/auth.service */ 67686);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/authfake.service */ 92464);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/language.service */ 58463);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ 32071);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);












/**
 * Topbar component
 */
class TopbarComponent {
    constructor(document, router, authService, authFackservice, languageService, translate, _cookiesService, usuarioService) {
        this.document = document;
        this.router = router;
        this.authService = authService;
        this.authFackservice = authFackservice;
        this.languageService = languageService;
        this.translate = translate;
        this._cookiesService = _cookiesService;
        this.usuarioService = usuarioService;
        this.listLang = [
            { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
            { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
            { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
            { text: 'Italian', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
            { text: 'Russian', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
        ];
        this.settingsButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        this.usuario = this.usuarioService.getUser();
        this.openMobileMenu = false;
        this.element = document.documentElement;
        this.configData = {
            suppressScrollX: true,
            wheelSpeed: 0.3
        };
        this.cookieValue = this._cookiesService.get('lang');
        const val = this.listLang.filter(x => x.lang === this.cookieValue);
        this.countryName = val.map(element => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.valueset = 'assets/images/flags/us.jpg';
            }
        }
        else {
            this.flagvalue = val.map(element => element.flag);
        }
    }
    /**
     * Language set
     * @param text
     * @param lang
     * @param flag
     */
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.cookieValue = lang;
        this.languageService.setLanguage(lang);
    }
    /**
     * Toggles the right sidebar
     */
    toggleRightSidebar() {
        this.settingsButtonClicked.emit();
    }
    /**
     * Toggle the menu bar when having mobile screen
     */
    toggleMobileMenu(event) {
        event.preventDefault();
        this.mobileMenuButtonClicked.emit();
    }
    /**
     * Logout the user
     */
    logout() {
        this.usuarioService.logOut();
    }
    /**
     * Fullscreen method
     */
    fullscreen() {
        document.body.classList.toggle('fullscreen-enable');
        if (!document.fullscreenElement && !this.element.mozFullScreenElement &&
            !this.element.webkitFullscreenElement) {
            if (this.element.requestFullscreen) {
                this.element.requestFullscreen();
            }
            else if (this.element.mozRequestFullScreen) {
                /* Firefox */
                this.element.mozRequestFullScreen();
            }
            else if (this.element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.element.webkitRequestFullscreen();
            }
            else if (this.element.msRequestFullscreen) {
                /* IE/Edge */
                this.element.msRequestFullscreen();
            }
        }
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService)); };
TopbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], outputs: { settingsButtonClicked: "settingsButtonClicked", mobileMenuButtonClicked: "mobileMenuButtonClicked" }, decls: 93, vars: 9, consts: [["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo-sm.png", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "20"], ["routerLink", "/", 1, "logo", "logo-light"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20"], ["type", "button", "id", "vertical-menu-btn", 1, "btn", "btn-sm", "px-3", "font-size-16", "header-item", "waves-effect", "vertical-menu-btn", 3, "click"], [1, "fa", "fa-fw", "fa-bars"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block", "d-lg-none", "ms-2"], ["type", "button", "id", "page-header-search-dropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "ngbDropdownToggle", "", "aria-expanded", "false", 1, "btn", "header-item", "noti-icon", "waves-effect"], [1, "mdi", "mdi-magnify"], ["ngbDropdownMenu", "", "aria-labelledby", "page-header-search-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "p-3"], [1, "form-group", "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["ngbDropdown", "", 1, "dropdown", "d-none", "d-lg-inline-block", "ms-1"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon", "waves-effect"], [1, "uil-apps"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end"], [1, "px-lg-2"], [1, "row", "no-gutters"], [1, "col"], ["href", "https://es-la.facebook.com/", "target", "_blank", 1, "dropdown-icon-item"], ["src", "assets/images/brands/facebook.png", "alt", "Facebook"], ["href", "https://pe.linkedin.com/", "target", "_blank", 1, "dropdown-icon-item"], ["src", "assets/images/brands/linkedin.png", "alt", "LinkedIn"], ["href", "https://twitter.com/", "target", "_blank", 1, "dropdown-icon-item"], ["src", "assets/images/brands/twitter.png", "alt", "Twitter"], ["href", "https://www.instagram.com/", "target", "_blank", 1, "dropdown-icon-item"], ["src", "assets/images/brands/instagram.png", "alt", "Instagram"], ["href", "https://web.whatsapp.com", "target", "_blank", 1, "dropdown-icon-item"], ["src", "assets/images/brands/whatsapp.png", "alt", "Whatsapp"], ["href", "javascript: void(0);", 1, "dropdown-icon-item"], ["src", "assets/images/brands/gmail.png", "alt", "Gmail"], ["src", "assets/images/brands/gdrive.png", "alt", "Drive"], [1, "dropdown", "d-none", "d-lg-inline-block", "ms-1"], ["type", "button", "title", "Pantalla Completa", "data-toggle", "fullscreen", 1, "btn", "header-item", "noti-icon", "waves-effect", 3, "click"], [1, "uil-minus-path"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block"], ["type", "button", "ngbDropdownToggle", "", "id", "page-header-user-dropdown", 1, "btn", "header-item", "waves-effect"], [1, "avatar-xs", "d-inline-block", "me-2"], [1, "avatar-title", "rounded-circle", "bg-light", "text-body"], [1, "d-none", "d-xl-inline-block", "ms-1", "fw-medium", "font-size-15"], [1, "uil-angle-down", "d-none", "d-xl-inline-block", "font-size-15"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "uil", "uil-user-circle", "font-size-18", "align-middle", "text-muted", "me-1"], [1, "align-middle"], [1, "dropdown-item", 3, "click"], [1, "uil", "uil-sign-out-alt", "font-size-18", "align-middle", "me-1", "text-muted"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_14_listener($event) { return ctx.toggleMobileMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Whatsapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Gmail");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Drive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_72_listener() { return ctx.fullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopbarComponent_Template_a_click_88_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.usuario.nombres.charAt(0), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.usuario.nombres, " ", ctx.usuario.apellidos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](87, 5, "HEADER.LOGIN.PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](92, 7, "HEADER.LOGIN.LOGOUT"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".avatar-title-orangeOpticas[_ngcontent-%COMP%] {\n  align-items: center;\n  color: white;\n  display: flex;\n  font-weight: 500;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n}\n\n.bg-color-avatar[_ngcontent-%COMP%] {\n  color: #f85231;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJ0b3BiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyLXRpdGxlLW9yYW5nZU9wdGljYXMge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4uYmctY29sb3ItYXZhdGFye1xyXG4gICAgY29sb3I6ICNmODUyMzE7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 40125:
/*!********************************************************!*\
  !*** ./src/app/layouts/vertical/vertical.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalComponent": () => (/* binding */ VerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../topbar/topbar.component */ 69514);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 8062);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 42234);






/**
 * Vertical component
 */
class VerticalComponent {
    constructor(router) {
        this.router = router;
        this.isCondensed = false;
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                document.body.classList.remove('sidebar-enable');
            }
        });
    }
    ngOnInit() {
        document.body.removeAttribute('data-layout');
        document.body.removeAttribute('data-topbar');
        document.body.removeAttribute('data-layout-size');
        document.body.classList.remove('sidebar-enable');
        document.body.classList.remove('vertical-collpsed');
        document.body.removeAttribute('data-sidebar-size');
        document.body.classList.remove('authentication-bg');
    }
    isMobile() {
        const ua = navigator.userAgent;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
    }
    ngAfterViewInit() {
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
    }
    /**
     * On mobile toggle button clicked
     */
    onToggleMobileMenu() {
        this.isCondensed = !this.isCondensed;
        document.body.classList.toggle('sidebar-enable');
        document.body.classList.toggle('vertical-collpsed');
        if (window.screen.width <= 768) {
            document.body.classList.remove('vertical-collpsed');
        }
    }
}
VerticalComponent.ɵfac = function VerticalComponent_Factory(t) { return new (t || VerticalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
VerticalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VerticalComponent, selectors: [["app-vertical"]], decls: 7, vars: 1, consts: [["id", "layout-wrapper"], [3, "settingsButtonClicked", "mobileMenuButtonClicked"], [3, "isCondensed", "mobileMenuButtonClicked"], [1, "main-content"], [1, "page-content"]], template: function VerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("settingsButtonClicked", function VerticalComponent_Template_app_topbar_settingsButtonClicked_1_listener() { return ctx.onSettingsButtonClicked(); })("mobileMenuButtonClicked", function VerticalComponent_Template_app_topbar_mobileMenuButtonClicked_1_listener() { return ctx.onToggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mobileMenuButtonClicked", function VerticalComponent_Template_app_sidebar_mobileMenuButtonClicked_2_listener() { return ctx.onToggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isCondensed", ctx.isCondensed);
    } }, directives: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 35686:
/*!*************************************************!*\
  !*** ./src/app/pages/login/background.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backgroundModel": () => (/* binding */ backgroundModel),
/* harmony export */   "backgroundList": () => (/* binding */ backgroundList)
/* harmony export */ });
class backgroundModel {
}
const backgroundList = [
    {
        title: 'Realizar una venta',
        detail: 'Hacer una venta al contado o al credito',
        imagen: 'assets/images/backgrounds/background-1.jpg',
    },
    {
        title: 'Lista de Monturas',
        detail: 'Registrar, eliminar o actualizar detalles de productos',
        imagen: 'assets/images/backgrounds/background-2.jpg',
    },
    {
        title: 'Mis clientes',
        detail: 'Registrar, eliminar o actualizar detalles de clientes',
        imagen: 'assets/images/backgrounds/background-3.jpg',
    },
    {
        title: 'Usuarios',
        detail: 'Registrar, eliminar o actualizar detalles de Usuarios',
        imagen: 'assets/images/backgrounds/background-4.jpg',
    },
    {
        title: 'Caja',
        detail: 'Registrar una salida o entrada de efectivo',
        imagen: 'assets/images/backgrounds/background-5.jpg',
    },
    {
        title: 'Tiendas',
        detail: 'Registrar, eliminar detalles de Tiendas',
        imagen: 'assets/images/backgrounds/background-6.jpg',
    },
    {
        title: 'Escritorio',
        detail: 'Resumen de todos los movimientos de su tienda',
        imagen: 'assets/images/backgrounds/background-7.jpg',
    },
    {
        title: 'Gráficas',
        detail: 'Compare ventas, vea los productos más vendidos y mucho más',
        imagen: 'assets/images/backgrounds/background-8.jpg',
    },
    {
        title: 'Tiendas',
        detail: 'Registrar, eliminar detalles de Tiendas',
        imagen: 'assets/images/backgrounds/background-9.jpg',
    },
    {
        title: 'Escritorio',
        detail: 'Resumen de todos los movimientos de su tienda',
        imagen: 'assets/images/backgrounds/background-10.jpg',
    },
    {
        title: 'Gráficas',
        detail: 'Compare ventas, vea los productos más vendidos y mucho más',
        imagen: 'assets/images/backgrounds/background-11.jpg',
    },
    {
        title: 'Gráficas',
        detail: 'Compare ventas, vea los productos más vendidos y mucho más',
        imagen: 'assets/images/backgrounds/background-12.jpg',
    },
];


/***/ }),

/***/ 54126:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var _background_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.model */ 35686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var src_app_services_sede_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sede.service */ 21061);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);









function LoginComponent_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const background_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", background_r2.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](background_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](background_r2.detail);
} }
function LoginComponent_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, LoginComponent_5_ng_template_0_Template, 6, 3, "ng-template", 23);
} }
class LoginComponent {
    constructor(fb, usuarioService, sedeService) {
        this.fb = fb;
        this.usuarioService = usuarioService;
        this.sedeService = sedeService;
        this.backgrounds = [];
        this.year = new Date().getFullYear();
        this.user = "campoUser";
        this.password = "campoPassword";
        this.sede = "campoSede";
    }
    ngOnInit() {
        this.backgrounds = Object.assign([], _background_model__WEBPACK_IMPORTED_MODULE_1__.backgroundList);
        document.body.classList.add('authentication-bg');
        document.body.removeAttribute('data-topbar');
        this.crearFormulario();
    }
    f(campo) {
        return this.formLogin.get(campo);
    }
    crearFormulario() {
        this.formLogin = this.fb.group({
            [this.user]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
                ]],
            [this.password]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
                ]]
        });
    }
    login() {
        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("loading", "Cargando...");
        if (this.formLogin.valid) {
            const vendedor = {
                email: this.f(this.user).value,
                password: this.f(this.password).value,
                //sede: this.f('sede').value
            };
            this.usuarioService.signIn(vendedor).subscribe(res => {
                this.usuarioService.storeUserData(res.token, res.onlyDataUser);
                this.getListSedes();
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_0__.Sweetalert)("close", null);
            });
        }
        else {
        }
    }
    getListSedes() {
        this.sedeService.getSedes().subscribe(res => {
            localStorage.setItem("sedes", JSON.stringify(res));
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_sede_service__WEBPACK_IMPORTED_MODULE_3__.SedeService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 9, consts: [[1, "container-fluid"], [1, "row", "no-gutter"], [1, "col-md-6", "px-0"], [1, "background-color-gray", 3, "interval", "showNavigationArrows", "showNavigationIndicators"], ["carousel", ""], [4, "ngFor", "ngForOf"], [1, "col-md-6", "bg-light"], [1, "login", "d-flex", "align-items-center", "py-5"], [1, "container"], [1, "row"], [1, "col-lg-10", "col-xl-7", "mx-auto"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "150", 1, "logo", "logo-dark", "mb-4"], [1, "display-4"], [1, "text-muted", "mb-4"], [3, "formGroup"], [1, "form-group", "mb-3"], ["id", "username", "type", "email", "placeholder", "Nombre de usuario", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", 3, "formControlName"], ["id", "userpassword", "type", "password", "placeholder", "Contrase\u00F1a", "required", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", "text-primary", 3, "formControlName"], [1, "row", "text-center", "mb-3"], [1, "col-sm-12", "d-grid"], ["type", "submit", 1, "btn", "btn-orangeOptica", "rounded-pill", "btn-block", "me-1", 3, "disabled", "click"], [1, "umdi", "umdi-account-arrow-rightt", "me-2"], [1, "text-center", "d-flex", "justify-content-between", "mt-4"], ["ngbSlide", ""], [2, "background-color", "rgb(255, 255, 255)", "height", "100vh", 3, "src"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "text-white"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ngb-carousel", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, LoginComponent_5_Template, 1, 0, undefined, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Bienvenido de nuevo!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Inicia sesi\u00F3n para continuar con Contacto Visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Iniciar sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("interval", 5000)("showNavigationArrows", false)("showNavigationIndicators", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.backgrounds);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("formControlName", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.formLogin.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Todos los derechos reservados.");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCarousel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbSlide], styles: [".login[_ngcontent-%COMP%], .image[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  object-fit: cover;\n}\n\n.background-color-gray[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFFRSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtBQUFGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLFxyXG4uaW1hZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwODUzOTczMzM3Ny01NTU3ZTAyOTI2YjU/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEzNzQmcT04MCcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1jb2xvci1ncmF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG59Il19 */"] });


/***/ }),

/***/ 2101:
/*!*******************************************************************!*\
  !*** ./src/app/pages/products/accesorios/accesorios.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccesoriosComponent": () => (/* binding */ AccesoriosComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _accesorios_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accesorios.service */ 34564);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable.directive */ 42935);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_models_accesorio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/accesorio */ 77044);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ 71626);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html2canvas */ 2724);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _directives_role_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../directives/role.directive */ 48185);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _syncfusion_ej2_angular_barcode_generator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @syncfusion/ej2-angular-barcode-generator */ 91023);





















function AccesoriosComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function AccesoriosComponent_div_16_Template_ng_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r10.changeSede(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.formSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("formControlName", ctx_r0.nombre_sedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r0.listSedes);
} }
function AccesoriosComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccesoriosComponent_tr_57_a_20_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 56);
} }
function AccesoriosComponent_tr_57_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccesoriosComponent_tr_57_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19); const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](68); return ctx_r18.openModalEtiqueta(_r6, data_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AccesoriosComponent_tr_57_a_20_i_1_Template, 1, 0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appRole", ctx_r14.role);
} }
function AccesoriosComponent_tr_57_i_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 57);
} }
function AccesoriosComponent_tr_57_a_23_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccesoriosComponent_tr_57_a_23_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23); const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r21.eliminar(data_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
function AccesoriosComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AccesoriosComponent_tr_57_Template_input_ngModelChange_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25); const data_r12 = restoredCtx.$implicit; return data_r12.isSelected = $event; })("change", function AccesoriosComponent_tr_57_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r26.isAllSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, AccesoriosComponent_tr_57_a_20_Template, 2, 1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccesoriosComponent_tr_57_Template_a_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25); const data_r12 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](66); return ctx_r27.centerModal(_r4, data_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, AccesoriosComponent_tr_57_i_22_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, AccesoriosComponent_tr_57_a_23_Template, 2, 0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("id", "ordercheck", data_r12.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", data_r12.isSelected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](22, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("for", "ordercheck", data_r12.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("result", i_r13 + 1)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("result", data_r12.nombre_accesorio)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("result", data_r12.precio_accesorio_c)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("result", data_r12.precio_accesorio_v)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("result", data_r12.cantidad)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](18, 19, data_r12.fecha_creacion_accesorio, "dd/MM/yyyy"))("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appRole", ctx_r2.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appRole", ctx_r2.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appRole", ctx_r2.role);
} }
function AccesoriosComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " Cargando ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccesoriosComponent_ng_template_65_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccesoriosComponent_ng_template_65_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccesoriosComponent_ng_template_65_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros enteros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccesoriosComponent_ng_template_65_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccesoriosComponent_ng_template_65_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros y opcional hasta 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccesoriosComponent_ng_template_65_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function AccesoriosComponent_ng_template_65_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros y opcional hasta 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function AccesoriosComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "h5", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Editar Accesorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccesoriosComponent_ng_template_65_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r36.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "* Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Nombre del Accesorio *");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, AccesoriosComponent_ng_template_65_div_15_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Stock *");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, AccesoriosComponent_ng_template_65_div_23_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, AccesoriosComponent_ng_template_65_div_24_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "Precio de Compra *");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, AccesoriosComponent_ng_template_65_div_31_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, AccesoriosComponent_ng_template_65_div_32_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "Precio de Venta *");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](39, AccesoriosComponent_ng_template_65_div_39_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, AccesoriosComponent_ng_template_65_div_40_Template, 2, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccesoriosComponent_ng_template_65_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r38.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccesoriosComponent_ng_template_65_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r39.guardarAccesorio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r5.formAccesorios);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.nombre_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](17, _c1, ctx_r5.formEA.campoNombreAccesorio.invalid && (ctx_r5.formEA.campoNombreAccesorio.dirty || ctx_r5.formEA.campoNombreAccesorio.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.formEA.campoNombreAccesorio.errors == null ? null : ctx_r5.formEA.campoNombreAccesorio.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.cantidad_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](19, _c1, ctx_r5.formEA.campoCantidadAccesorio.invalid && (ctx_r5.formEA.campoCantidadAccesorio.dirty || ctx_r5.formEA.campoCantidadAccesorio.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.formEA.campoCantidadAccesorio.errors == null ? null : ctx_r5.formEA.campoCantidadAccesorio.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.formEA.campoCantidadAccesorio.errors == null ? null : ctx_r5.formEA.campoCantidadAccesorio.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.precio_compra_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](21, _c1, ctx_r5.formEA.campoCompraAccesorio.invalid && (ctx_r5.formEA.campoCompraAccesorio.dirty || ctx_r5.formEA.campoCompraAccesorio.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.formEA.campoCompraAccesorio.errors == null ? null : ctx_r5.formEA.campoCompraAccesorio.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.formEA.campoCompraAccesorio.errors == null ? null : ctx_r5.formEA.campoCompraAccesorio.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.precio_venta_accesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](23, _c1, ctx_r5.formEA.campoVentaAccesorio.invalid && (ctx_r5.formEA.campoVentaAccesorio.dirty || ctx_r5.formEA.campoVentaAccesorio.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.formEA.campoVentaAccesorio.errors == null ? null : ctx_r5.formEA.campoVentaAccesorio.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.formEA.campoVentaAccesorio.errors == null ? null : ctx_r5.formEA.campoVentaAccesorio.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r5.formAccesorios.valid);
} }
function AccesoriosComponent_ng_template_67_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ejs-qrcodegenerator", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r41.individualQR.id_producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("displayText", ctx_r41.displayTextMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r41.individualQR.nombre_accesorio, "");
} }
const _c2 = function () { return []; };
function AccesoriosComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "h5", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Imprimir Etiqueta por Montura ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccesoriosComponent_ng_template_67_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r44.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, AccesoriosComponent_ng_template_67_div_6_Template, 9, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccesoriosComponent_ng_template_67_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r46.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function AccesoriosComponent_ng_template_67_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r45); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r47.generarEtiqueta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccesoriosComponent_ng_template_67_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r45); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r48.printEtiquetaIndividual(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Descargar c\u00F3digos");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](3, _c2).constructor(ctx_r7.nQR));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r7.formPrintEtiquetaAccesorio);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("formControlName", ctx_r7.nEtiquetasPorAccesorio);
} }
function AccesoriosComponent_ng_template_69_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "ejs-qrcodegenerator", 92, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", item_r51.id_producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("displayText", ctx_r52.displayTextMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", item_r51.nombre_accesorio, "");
} }
function AccesoriosComponent_ng_template_69_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AccesoriosComponent_ng_template_69_div_6_div_1_Template, 9, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](1, _c2).constructor(item_r51.cantidad));
} }
function AccesoriosComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "h5", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Lista de C\u00F3digos de Barras");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccesoriosComponent_ng_template_69_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r56.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, AccesoriosComponent_ng_template_69_div_6_Template, 2, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccesoriosComponent_ng_template_69_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r58.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccesoriosComponent_ng_template_69_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r57); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r59.generarPDF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Descargar c\u00F3digos");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r9.checkedAccesoriosList);
} }
class AccesoriosComponent {
    constructor(service, modalService, fb, accesorioService, usuarioService) {
        this.service = service;
        this.modalService = modalService;
        this.fb = fb;
        this.accesorioService = accesorioService;
        this.usuarioService = usuarioService;
        this.role = "Admin";
        this.mostrarSpinner = false;
        this.visibleSelection = 5;
        this.visibleBarOptions = {
            floor: 0,
            ceil: 10,
            showSelectionBar: true
        };
        this.submitted = false;
        this.nombre_sedes = "campoSede";
        this.nombre_accesorio = "campoNombreAccesorio";
        this.codigo_accesorio = "campoCodigoAccesorio";
        this.cantidad_accesorio = "campoCantidadAccesorio";
        this.precio_compra_accesorio = "campoCompraAccesorio";
        this.precio_venta_accesorio = "campoVentaAccesorio";
        this.nEtiquetasPorAccesorio = "campoNEtiquetasPorAccesorio";
        this.numberPattern = '[0-9]+';
        this.decimalPattern = /^\d+(\.\d{2})?$/;
        this.accesorio = new src_models_accesorio__WEBPACK_IMPORTED_MODULE_2__.AccesorioModel;
        this.checkedAccesoriosList = [];
        this.isMasterSel = false;
        this.idSede = "";
        this.individualQR = new src_models_accesorio__WEBPACK_IMPORTED_MODULE_2__.AccesorioModel;
        this.nQR = 0;
        this.displayTextMethod = {
            visibility: false
        };
        this.accesorios$ = service.customers$;
        this.total$ = service.total$;
        service.mostrar.subscribe(res => {
            this.mostrarSpinner = res;
        });
    }
    ngOnInit() {
        this.getListSedes();
        this.crearFormulario();
        this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Lista de Accesorios', active: true }];
    }
    getListSedes() {
        this.listSedes = JSON.parse(localStorage.getItem('sedes'));
        this.idSede = this.usuarioService.getSedebyUser();
    }
    crearFormulario() {
        this.formAccesorios = this.fb.group({
            [this.nombre_accesorio]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required
                ]],
            [this.codigo_accesorio]: [{ value: null, disabled: true }],
            [this.cantidad_accesorio]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(this.numberPattern)
                ]],
            [this.precio_compra_accesorio]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(this.decimalPattern)
                ]],
            [this.precio_venta_accesorio]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(this.decimalPattern)
                ]]
        });
        this.formPrintEtiquetaAccesorio = this.fb.group({
            [this.nEtiquetasPorAccesorio]: [1, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(this.numberPattern)
                ]]
        });
        this.formSedes = this.fb.group({
            [this.nombre_sedes]: [this.idSede]
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
    f(campo) {
        return this.formAccesorios.get(campo);
    }
    fS(campo) {
        return this.formSedes.get(campo);
    }
    /**
     * Open center modal
     * @param centerDataModal center modal data
     */
    centerModal(centerDataModal, data) {
        this.f(this.nombre_accesorio).setValue(data.nombre_accesorio);
        this.f(this.codigo_accesorio).setValue(data.codigo_interno);
        this.f(this.cantidad_accesorio).setValue(data.cantidad);
        this.f(this.precio_compra_accesorio).setValue(data.precio_accesorio_c);
        this.f(this.precio_venta_accesorio).setValue(data.precio_accesorio_v);
        this.accesorio.id_producto = data.id_producto;
        this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
    }
    /**
     * Open Large modal
     * @param openDataModal large modal data
     */
    openModalEtiqueta(openDataModal, data) {
        this.individualQR = data;
        this.nQR = Number(this.fEA(this.nEtiquetasPorAccesorio).value);
        this.modalService.open(openDataModal, { windowClass: 'modal-holder', centered: true, scrollable: true });
    }
    /**
     * Open scroll modal
     * @param scrollDataModal scroll modal data
     */
    openScrollModal(scrollDataModal) {
        this.modalService.open(scrollDataModal, { scrollable: true });
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
        this.fEA(this.nEtiquetasPorAccesorio).setValue(1);
        this.modalService.dismissAll();
    }
    /**
     * Save the event
     */
    saveEvent() {
        if (this.formAccesorios.valid) {
        }
        this.submitted = true;
    }
    generarEtiqueta() {
        this.nQR = Number(this.fEA(this.nEtiquetasPorAccesorio).value);
    }
    fEA(campo) {
        return this.formPrintEtiquetaAccesorio.get(campo);
    }
    loadPage(event) {
        this.isMasterSel = false;
    }
    eliminar(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: '¿Está seguro que desea eliminar el accesorio?',
            text: 'No se podrá revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#34c38f',
            cancelButtonColor: '#f46a6a',
            confirmButtonText: 'Si, eliminar!'
        }).then(result => {
            if (result.value) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("loading", "Cargando...");
                this.accesorioService.darBajaAccesorio(data.id_producto).subscribe(res => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("success", "Accesorio eliminado");
                    this.updateListAccesorios(this.idSede);
                }, error => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("error", "Error en la conexión");
                });
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().DismissReason.cancel)) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Cancelado', 'Accesorio no eliminado', 'error');
            }
        });
    }
    guardarAccesorio() {
        if (this.formAccesorios.valid) {
            this.accesorio.nombre_accesorio = this.f(this.nombre_accesorio).value;
            //this.accesorio.codigo = this.f(this.codigo_accesorio).value;
            this.accesorio.cantidad = Number(this.f(this.cantidad_accesorio).value);
            this.accesorio.precio_accesorio_c = Number(this.f(this.precio_compra_accesorio).value);
            this.accesorio.precio_accesorio_v = Number(this.f(this.precio_venta_accesorio).value);
            this.accesorio.fecha_modificacion_accesorio = new Date(Date.now());
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("loading", "Cargando...");
            this.accesorioService.updateAccesorio(this.accesorio.id_producto, this.accesorio).subscribe(res => {
                this.modalService.dismissAll();
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("close", null);
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("success", "Accesorio actualizado");
                this.updateListAccesorios(this.idSede);
            }, error => {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("close", null);
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("error", "Error en la conexión");
            });
        }
        else {
            return;
        }
    }
    updateListAccesorios(idSede) {
        this.accesorioService.getProductosbySede(idSede, 'accesorio').subscribe(res => {
            this.service.updateTable(res);
        });
    }
    changeSede() {
        this.idSede = this.fS(this.nombre_sedes).value;
        this.updateListAccesorios(this.idSede);
    }
    /**
     * Returns form Accesorios
     */
    get formEA() {
        return this.formAccesorios.controls;
    }
    /**
    * Returns form Print cada Montura
    */
    get formPEA() {
        return this.formPrintEtiquetaAccesorio.controls;
    }
    checkUncheckAll() {
        this.accesorios$.forEach(element => {
            element.forEach(elem => {
                elem.isSelected = this.isMasterSel;
            });
        });
        this.getCheckedItemList();
    }
    getCheckedItemList() {
        this.checkedAccesoriosList = [];
        this.accesorios$.forEach(element => {
            element.forEach(elem => {
                if (elem.isSelected) {
                    this.checkedAccesoriosList.push(elem);
                }
            });
        });
        //this.checkedLunasList = JSON.stringify(this.checkedLunasList); 
    }
    isAllSelected() {
        this.accesorios$.forEach(element => {
            this.isMasterSel = element.every(function (item) {
                return item.isSelected == true;
            });
        });
        this.getCheckedItemList();
    }
    generarPDF() {
        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("loading", null);
        let cant = this.checkedAccesoriosList.reduce((accumulator, obj) => {
            return accumulator + obj.cantidad;
        }, 0);
        let DATA = document.getElementById('htmlData');
        //var HTML_Width = document.getElementById("htmlData").offsetWidth 
        //var HTML_Height = document.getElementById("htmlData").offsetHeight
        var HTML_Width = 3;
        var HTML_Height = 0.57 * cant;
        var top_left_margin = 0;
        //var PDF_Width = HTML_Width+(top_left_margin*2);
        //var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
        var PDF_Width = 4;
        var PDF_Height = 0.57;
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;
        //var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
        var totalPDFPages = Math.ceil(HTML_Height / PDF_Height);
        html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(DATA).then((canvas) => {
            const nombreSede = this.listSedes.find(res => (res.id_sede == this.usuarioService.getSedebyUser()));
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]('l', 'in', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
            pdf.deletePage(1);
            for (var i = 0; i < totalPDFPages; i++) {
                pdf.addPage([PDF_Width, PDF_Height]);
                pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
            }
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("close", null);
            pdf.save("Accesorios_" + nombreSede.nombre_sede + ".pdf");
        });
        this.closeEventModal();
    }
    printEtiquetaIndividual() {
        (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("loading", null);
        let DATA = document.getElementById('htmlData2');
        //var HTML_Width = document.getElementById("htmlData").offsetWidth 
        //var HTML_Height = document.getElementById("htmlData").offsetHeight
        var HTML_Width = 3;
        var HTML_Height = 0.57 * this.nQR;
        var top_left_margin = 0;
        //var PDF_Width = HTML_Width+(top_left_margin*2);
        //var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
        var PDF_Width = 4;
        var PDF_Height = 0.57;
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;
        //var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
        var totalPDFPages = Math.ceil(HTML_Height / PDF_Height);
        html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(DATA).then((canvas) => {
            const nombreSede = this.listSedes.find(res => (res.id_sede == this.usuarioService.getSedebyUser()));
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]('l', 'in', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
            pdf.deletePage(1);
            for (var i = 0; i < totalPDFPages; i++) {
                pdf.addPage([PDF_Width, PDF_Height]);
                pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
            }
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("close", null);
            pdf.save("Accesorios_" + nombreSede.nombre_sede + ".pdf");
        });
        this.closeEventModal();
    }
}
AccesoriosComponent.ɵfac = function AccesoriosComponent_Factory(t) { return new (t || AccesoriosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_accesorios_service__WEBPACK_IMPORTED_MODULE_0__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_7__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__.UsuarioService)); };
AccesoriosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: AccesoriosComponent, selectors: [["app-accesorios"]], viewQuery: function AccesoriosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([_accesorios_service__WEBPACK_IMPORTED_MODULE_0__.CustomerService, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe])], decls: 71, vars: 25, consts: [[1, "container-fluid"], ["title", "Lista de Accesorios", 3, "breadcrumbItems"], [1, "row"], [1, "col-md-6", "mb-2"], [1, "form-inline"], [1, "search-box", "ml-2"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar accesorio", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "border-light", "rounded", 3, "ngModel", "ngModelChange"], [1, "uil", "uil-search", "search-icon"], ["role", "toolbar", 1, "btn-toolbar"], [1, "col-12", "col-md-6", "d-grid", "mb-2"], ["type", "button", 1, "btn", "btn-success", "btn-block", "me-1", 3, "disabled", "click"], [1, "uil", "uil-tag-alt", "me-2"], ["class", "col-12 col-md-6 d-grid", 4, "appRole"], [1, "row", "md-2"], [1, "col-sm-12", "col-md-12"], [1, "dataTables_length", "text-md-end"], [1, "d-inline-flex", "align-items-center"], ["name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "col-12"], [1, "table-responsive", "mb-4"], [1, "table", "datatables", "table-centered", "table-nowrap", "mb-0", "align-middle", "table-card-list", 2, "border-spacing", "0 12px", "width", "100%"], [1, "bg-transparent"], [2, "width", "20px"], [1, "form-check", "text-center"], ["type", "checkbox", "id", "accesorioscheck", 1, "form-check-input", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"], ["for", "accesorioscheck", 1, "form-check-label"], ["scope", "col", "sortable", "id", 3, "sort"], ["scope", "col", "sortable", "nombre_accesorio", 3, "sort"], ["scope", "col", "sortable", "precio_accesorio_c", 3, "sort"], ["scope", "col", "sortable", "precio_accesorio_v", 3, "sort"], ["scope", "col", "sortable", "cantidad", 3, "sort"], ["scope", "col", "sortable", "fecha_creacion_accesorio", 3, "sort"], [4, "appRole"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "row", "justify-content-md-between", "align-items-md-center"], [1, "text-md-end", "float-md-end", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["centerDataModal", ""], ["centerModalEIA", ""], ["scrollDataModalEGA", ""], [1, "col-12", "col-md-6", "d-grid"], [3, "formGroup"], ["ngbDropdown", ""], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName", "change"], ["type", "checkbox", 1, "form-check-input", 3, "id", "ngModel", "ngModelOptions", "ngModelChange", "change"], [1, "form-check-label", 3, "for"], [3, "result", "term"], ["class", "px-2 text-success", "placement", "top", "ngbTooltip", "Etiqueta", 3, "click", 4, "appRole"], ["placement", "top", "ngbTooltip", "Editar", 1, "px-2", "text-primary", 3, "click"], ["class", "uil uil-pen font-size-18", 4, "appRole"], ["class", "px-2 text-danger", "placement", "top", "ngbTooltip", "Eliminar", 3, "click", 4, "appRole"], ["placement", "top", "ngbTooltip", "Etiqueta", 1, "px-2", "text-success", 3, "click"], ["class", "uil-tag-alt font-size-18", 4, "appRole"], [1, "uil-tag-alt", "font-size-18"], [1, "uil", "uil-pen", "font-size-18"], ["placement", "top", "ngbTooltip", "Eliminar", 1, "px-2", "text-danger", 3, "click"], [1, "uil", "uil-trash-alt", "font-size-18"], [1, "text-center", "my-3"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "mdi", "mdi-loading", "mdi-spin", "font-size-20", "align-middle", "me-2"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [1, "card-title-desc", "text-danger"], [1, "col-8"], [1, "mb-3"], [1, "control-label"], ["placeholder", "Accesorio", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], [1, "col-4"], ["placeholder", "Cantidad", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Precio", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], [1, "text-end", "mt-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "disabled", "click"], [1, "modal-title", "mt-0"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], ["id", "htmlData2"], [1, "modal-footer"], [1, "product-cart-touchspin", 2, "width", "80px"], ["touch-spin", "", "ng-model", "numberVariable", "options", "optionsVariable"], ["type", "number", "min", "1", "step", "1", "oninput", "this.value = Math.round(this.value); this.value > 100? this.value = 100 : this.value", "max", "100", "maxlength", "3", 1, "form-control", 3, "formControlName", "change"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "uil-print", "me-1"], [1, "row", "align-items-center"], [1, "col-6"], ["id", "barcode", "width", "225px", "height", "100px", "mode", "SVG", 2, "display", "block", 3, "value", "displayText"], ["barcode", ""], [1, "col-6", "ml-0"], ["id", "htmlData"]], template: function AccesoriosComponent_Template(rf, ctx) { if (rf & 1) {
        const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AccesoriosComponent_Template_input_ngModelChange_7_listener($event) { return ctx.service.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AccesoriosComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r60); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](70); return ctx.openScrollModal(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, " Etiquetas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, AccesoriosComponent_div_16_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Mostrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function AccesoriosComponent_Template_select_ngModelChange_22_listener($event) { return ctx.service.pageSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, " entradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function AccesoriosComponent_Template_input_change_41_listener() { return ctx.checkUncheckAll(); })("ngModelChange", function AccesoriosComponent_Template_input_ngModelChange_41_listener($event) { return ctx.isMasterSel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](42, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("sort", function AccesoriosComponent_Template_th_sort_43_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, "Ord.");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("sort", function AccesoriosComponent_Template_th_sort_45_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("sort", function AccesoriosComponent_Template_th_sort_47_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "Precio Compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("sort", function AccesoriosComponent_Template_th_sort_49_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "Precio Venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("sort", function AccesoriosComponent_Template_th_sort_51_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, "Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("sort", function AccesoriosComponent_Template_th_sort_53_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, "Fecha de Ingreso");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, AccesoriosComponent_th_55_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](57, AccesoriosComponent_tr_57_Template, 24, 23, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](58, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](59, AccesoriosComponent_div_59_Template, 6, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "ngb-pagination", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("pageChange", function AccesoriosComponent_Template_ngb_pagination_pageChange_63_listener($event) { return ctx.service.page = $event; })("pageChange", function AccesoriosComponent_Template_ngb_pagination_pageChange_63_listener($event) { return ctx.loadPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](64, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, AccesoriosComponent_ng_template_65_Template, 46, 25, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](67, AccesoriosComponent_ng_template_67_Template, 17, 4, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](69, AccesoriosComponent_ng_template_69_Template, 13, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.checkedAccesoriosList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appRole", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.service.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.isMasterSel)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appRole", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](58, 20, ctx.accesorios$));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](64, 22, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize)("maxSize", 5)("rotate", true)("boundaryLinks", true);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_9__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _directives_role_directive__WEBPACK_IMPORTED_MODULE_10__.RoleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _sortable_directive__WEBPACK_IMPORTED_MODULE_1__.NgbdSortableHeader, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPagination, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdown, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbHighlight, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxLengthValidator, _syncfusion_ej2_angular_barcode_generator__WEBPACK_IMPORTED_MODULE_16__.QRCodeGeneratorComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc29yaW9zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 34564:
/*!*****************************************************************!*\
  !*** ./src/app/pages/products/accesorios/accesorios.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
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
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);






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
    return customer.nombre_accesorio.toLowerCase().includes(term.toLowerCase())
        || String(customer.precio_accesorio_c).toLowerCase().includes(term.toLowerCase())
        || String(customer.precio_accesorio_v).toLowerCase().includes(term.toLowerCase())
        || String(customer.cantidad).toLowerCase().includes(term)
        || (customer.fecha_creacion_accesorio).toLocaleString().includes(term.toLowerCase());
}
class CustomerService {
    constructor(pipe, accesorioService, usuarioService) {
        this.pipe = pipe;
        this.accesorioService = accesorioService;
        this.usuarioService = usuarioService;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._customers$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        this._mostrar$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.accesorioList = [];
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
        this.getListAccesorios();
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
        let customers = sort(this.accesorioList, sortColumn, sortDirection);
        // 2. filter
        customers = customers.filter(customer => matches(customer, searchTerm, this.pipe));
        const total = customers.length;
        // 3. paginate
        customers = customers.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ customers, total });
    }
    /**
     * Funcion para obtener el listado de accesorios del backend
     */
    getListAccesorios() {
        this.accesorioService.getProductosbySede(this.usuarioService.getSedebyUser(), 'accesorio').subscribe(res => {
            this.accesorioList = res;
            const propiedad = {
                isSelected: false
            };
            this.accesorioList.forEach(elem => {
                Object.assign(elem, propiedad);
            });
            this._mostrar$.next(true);
            this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loading$.next(false))).subscribe(result => {
                this._customers$.next(result.customers);
                this._total$.next(result.total);
            });
            this._search$.next();
        });
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_0__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService)); };
CustomerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 42935:
/*!*****************************************************************!*\
  !*** ./src/app/pages/products/accesorios/sortable.directive.ts ***!
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

/***/ 77153:
/*!*********************************************************!*\
  !*** ./src/app/pages/products/lunas/lunas.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LunasComponent": () => (/* binding */ LunasComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _lunas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lunas.service */ 58455);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable.directive */ 57084);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_models_lunas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/lunas */ 34976);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ 71626);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2canvas */ 2724);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _directives_role_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../directives/role.directive */ 48185);
/* harmony import */ var _accesorios_sortable_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../accesorios/sortable.directive */ 42935);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _syncfusion_ej2_angular_barcode_generator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @syncfusion/ej2-angular-barcode-generator */ 91023);





















function LunasComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ng-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function LunasComponent_div_16_Template_ng_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r10.changeSede(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r0.formSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r0.nombre_sedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx_r0.listSedes);
} }
function LunasComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function LunasComponent_tr_57_i_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 55);
} }
function LunasComponent_tr_57_i_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 56);
} }
function LunasComponent_tr_57_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LunasComponent_tr_57_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19); const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r17.eliminar(data_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
function LunasComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LunasComponent_tr_57_Template_input_ngModelChange_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21); const data_r12 = restoredCtx.$implicit; return data_r12.isSelected = $event; })("change", function LunasComponent_tr_57_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r22.isAllSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "ngb-highlight", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LunasComponent_tr_57_Template_a_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21); const data_r12 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](68); return ctx_r23.openModalEtiqueta(_r6, data_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, LunasComponent_tr_57_i_21_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LunasComponent_tr_57_Template_a_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21); const data_r12 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](66); return ctx_r24.centerModal(_r4, data_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, LunasComponent_tr_57_i_23_Template, 1, 0, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, LunasComponent_tr_57_a_24_Template, 2, 0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "ordercheck", data_r12.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", data_r12.isSelected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](22, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("for", "ordercheck", data_r12.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", i_r13 + 1)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r12.material)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r12.precio_luna_c)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r12.precio_luna_v)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r12.cantidad)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](18, 19, data_r12.fecha_creacion_luna, "dd/MM/yyyy"))("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appRole", ctx_r2.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appRole", ctx_r2.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appRole", ctx_r2.role);
} }
function LunasComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Cargando ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function LunasComponent_ng_template_65_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function LunasComponent_ng_template_65_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function LunasComponent_ng_template_65_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros enteros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function LunasComponent_ng_template_65_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function LunasComponent_ng_template_65_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros y opcional hasta 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function LunasComponent_ng_template_65_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function LunasComponent_ng_template_65_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros y opcional hasta 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function LunasComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h5", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Editar Luna");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LunasComponent_ng_template_65_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r33.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "* Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Material *");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, LunasComponent_ng_template_65_div_15_Template, 2, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "Stock *");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, LunasComponent_ng_template_65_div_23_Template, 2, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, LunasComponent_ng_template_65_div_24_Template, 2, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "Precio de Compra *");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, LunasComponent_ng_template_65_div_31_Template, 2, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, LunasComponent_ng_template_65_div_32_Template, 2, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "Precio de Venta *");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](37, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, LunasComponent_ng_template_65_div_39_Template, 2, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, LunasComponent_ng_template_65_div_40_Template, 2, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LunasComponent_ng_template_65_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r35.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LunasComponent_ng_template_65_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r36.guardarLuna(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r5.formLuna);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.material_luna);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](17, _c1, ctx_r5.formEL.campoMaterialLuna.invalid && (ctx_r5.formEL.campoMaterialLuna.dirty || ctx_r5.formEL.campoMaterialLuna.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEL.campoMaterialLuna.errors == null ? null : ctx_r5.formEL.campoMaterialLuna.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.cantidad_luna);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](19, _c1, ctx_r5.formEL.campoCantidadLuna.invalid && (ctx_r5.formEL.campoCantidadLuna.dirty || ctx_r5.formEL.campoCantidadLuna.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEL.campoCantidadLuna.errors == null ? null : ctx_r5.formEL.campoCantidadLuna.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEL.campoCantidadLuna.errors == null ? null : ctx_r5.formEL.campoCantidadLuna.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.precio_compra_luna);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](21, _c1, ctx_r5.formEL.campoCompraLuna.invalid && (ctx_r5.formEL.campoCompraLuna.dirty || ctx_r5.formEL.campoCompraLuna.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEL.campoCompraLuna.errors == null ? null : ctx_r5.formEL.campoCompraLuna.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEL.campoCompraLuna.errors == null ? null : ctx_r5.formEL.campoCompraLuna.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.precio_venta_luna);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](23, _c1, ctx_r5.formEL.campoVentaLuna.invalid && (ctx_r5.formEL.campoVentaLuna.dirty || ctx_r5.formEL.campoVentaLuna.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEL.campoVentaLuna.errors == null ? null : ctx_r5.formEL.campoVentaLuna.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEL.campoVentaLuna.errors == null ? null : ctx_r5.formEL.campoVentaLuna.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r5.formLuna.valid);
} }
function LunasComponent_ng_template_67_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ejs-qrcodegenerator", 91, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r38.individualQR.id_producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("displayText", ctx_r38.displayTextMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r38.individualQR.material, "");
} }
const _c2 = function () { return []; };
function LunasComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h5", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Imprimir Etiqueta por Luna");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LunasComponent_ng_template_67_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r41.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, LunasComponent_ng_template_67_div_6_Template, 9, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LunasComponent_ng_template_67_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r43.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function LunasComponent_ng_template_67_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r44.generarEtiqueta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LunasComponent_ng_template_67_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r42); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r45.printEtiquetaIndividual(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Descargar c\u00F3digos");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](3, _c2).constructor(ctx_r7.nQR));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r7.formPrintEtiquetaLuna);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r7.nEtiquetasPorLuna);
} }
function LunasComponent_ng_template_69_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ejs-qrcodegenerator", 91, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", item_r48.id_producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("displayText", ctx_r49.displayTextMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r48.codigo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r48.material, "");
} }
function LunasComponent_ng_template_69_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, LunasComponent_ng_template_69_div_6_div_1_Template, 12, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](1, _c2).constructor(item_r48.cantidad));
} }
function LunasComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h5", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "C\u00F3digo de Barras");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LunasComponent_ng_template_69_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r53.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, LunasComponent_ng_template_69_div_6_Template, 2, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LunasComponent_ng_template_69_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r55.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LunasComponent_ng_template_69_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r56.generarPDF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Descargar c\u00F3digos");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r9.checkedLunasList);
} }
class LunasComponent {
    constructor(service, modalService, fb, lunaService, usuarioService) {
        this.service = service;
        this.modalService = modalService;
        this.fb = fb;
        this.lunaService = lunaService;
        this.usuarioService = usuarioService;
        this.mostrarSpinner = false;
        this.submitted = false;
        this.isMasterSel = false;
        this.nombre_sedes = 'campoSedes';
        this.material_luna = "campoMaterialLuna";
        this.codigo_luna = "campoCodigoLuna";
        this.cantidad_luna = "campoCantidadLuna";
        this.precio_compra_luna = "campoCompraLuna";
        this.precio_venta_luna = "campoVentaLuna";
        this.nEtiquetasPorLuna = "campoNEtiquetasPorLuna";
        this.role = "Admin";
        this.numberPattern = '[0-9]+';
        this.decimalPattern = /^\d+(\.\d{2})?$/;
        this.luna = new src_models_lunas__WEBPACK_IMPORTED_MODULE_2__.LunasModel;
        this.checkedLunasList = [];
        this.idSede = "";
        this.individualQR = new src_models_lunas__WEBPACK_IMPORTED_MODULE_2__.LunasModel;
        this.nQR = 0;
        this.displayTextMethod = {
            visibility: false
        };
        this.lunas$ = service.customers$;
        this.total$ = service.total$;
        service.mostrar.subscribe(res => {
            this.mostrarSpinner = res;
        });
    }
    ngOnInit() {
        this.getListSedes();
        this.crearFormulario();
        this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Lista de Lunas', active: true }];
    }
    getListSedes() {
        this.listSedes = JSON.parse(localStorage.getItem('sedes'));
        this.idSede = this.usuarioService.getSedebyUser();
    }
    crearFormulario() {
        this.formLuna = this.fb.group({
            [this.material_luna]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required
                ]],
            [this.codigo_luna]: [null, [
                //Validators.required
                ]],
            [this.cantidad_luna]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.numberPattern)
                ]],
            [this.precio_compra_luna]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.decimalPattern)
                ]],
            [this.precio_venta_luna]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.decimalPattern)
                ]],
        });
        this.formPrintEtiquetaLuna = this.fb.group({
            [this.nEtiquetasPorLuna]: [1, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.numberPattern)
                ]]
        });
        this.formSedes = this.fb.group({
            [this.nombre_sedes]: [this.idSede]
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
    f(campo) {
        return this.formLuna.get(campo);
    }
    fS(campo) {
        return this.formSedes.get(campo);
    }
    changeSede() {
        this.idSede = this.fS(this.nombre_sedes).value;
        this.updateListLunas(this.idSede);
    }
    /**
     * Open center modal
     * @param centerDataModal center modal data
     */
    centerModal(centerDataModal, data) {
        this.f(this.material_luna).setValue(data.material);
        //this.f(this.codigo_luna).setValue(data.codigo);
        this.f(this.cantidad_luna).setValue(data.cantidad);
        this.f(this.precio_compra_luna).setValue(data.precio_luna_c);
        this.f(this.precio_venta_luna).setValue(data.precio_luna_v);
        this.luna.id_producto = data.id_producto;
        this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
    }
    /**
     * Open modal etiquetas de la tabla
     * @param openDataModal large modal data
     * @param data luna
     */
    openModalEtiqueta(openDataModal, data) {
        this.individualQR = data;
        this.nQR = Number(this.fEL(this.nEtiquetasPorLuna).value);
        this.modalService.open(openDataModal, { windowClass: 'modal-holder', centered: true });
    }
    /**
     * Open scroll modal
     * @param scrollDataModal scroll modal data
     */
    openScrollModal(scrollDataModal) {
        this.modalService.open(scrollDataModal, { scrollable: true });
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
        this.fEL(this.nEtiquetasPorLuna).setValue(1);
        this.modalService.dismissAll();
    }
    /**
     * Save the event
     */
    saveEvent() {
        if (this.formLuna.valid) {
        }
        this.submitted = true;
    }
    loadPage(event) {
        this.isMasterSel = false;
    }
    guardarLuna() {
        if (this.formLuna.valid) {
            this.luna.material = this.f(this.material_luna).value;
            //this.luna.codigo = this.f(this.codigo_luna).value;
            this.luna.cantidad = Number(this.f(this.cantidad_luna).value);
            this.luna.precio_luna_c = Number(this.f(this.precio_compra_luna).value);
            this.luna.precio_luna_v = Number(this.f(this.precio_venta_luna).value);
            this.luna.fecha_modificacion_luna = new Date(Date.now());
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("loading", "Cargando...");
            this.lunaService.updateLuna(this.luna.id_producto, this.luna).subscribe(res => {
                this.modalService.dismissAll();
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("close", null);
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("success", null);
                this.updateListLunas(this.idSede);
            });
        }
        else {
        }
    }
    eliminar(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            title: '¿Está seguro que desea eliminar la luna?',
            text: 'No se podrá revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#34c38f',
            cancelButtonColor: '#f46a6a',
            confirmButtonText: 'Si, eliminar!'
        }).then(result => {
            if (result.value) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("loading", "Cargando...");
                this.lunaService.darBajaLuna(data.id_producto).subscribe(res => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("success", "Luna eliminada");
                    this.updateListLunas(this.idSede);
                }, error => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_5__.Sweetalert)("error", "Error en la conexión");
                });
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().DismissReason.cancel)) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Cancelado', 'Luna no eliminada', 'error');
            }
        });
    }
    updateListLunas(idSede) {
        this.lunaService.getProductosbySede(idSede, 'luna').subscribe(res => {
            this.service.updateTable(res);
        });
    }
    fEL(campo) {
        return this.formPrintEtiquetaLuna.get(campo);
    }
    generarEtiqueta() {
        this.nQR = Number(this.fEL(this.nEtiquetasPorLuna).value);
    }
    /**
    * Returns form Editar Lunas
    */
    get formEL() {
        return this.formLuna.controls;
    }
    /**
    * Returns form Print cada Montura
    */
    get formPEL() {
        return this.formPrintEtiquetaLuna.controls;
    }
    checkUncheckAll() {
        this.lunas$.forEach(element => {
            element.forEach(elem => {
                elem.isSelected = this.isMasterSel;
            });
        });
        this.getCheckedItemList();
    }
    getCheckedItemList() {
        this.checkedLunasList = [];
        this.lunas$.forEach(element => {
            element.forEach(elem => {
                if (elem.isSelected) {
                    this.checkedLunasList.push(elem);
                }
            });
        });
        //this.checkedLunasList = JSON.stringify(this.checkedLunasList); 
    }
    isAllSelected() {
        this.lunas$.forEach(element => {
            this.isMasterSel = element.every(function (item) {
                return item.isSelected == true;
            });
        });
        this.getCheckedItemList();
    }
    generarPDF() {
        let cant = this.checkedLunasList.reduce((accumulator, obj) => {
            return accumulator + obj.cantidad;
        }, 0);
        let DATA = document.getElementById('htmlData');
        //var HTML_Width = document.getElementById("htmlData").offsetWidth 
        //var HTML_Height = document.getElementById("htmlData").offsetHeight
        var HTML_Width = 3;
        var HTML_Height = 0.57 * cant;
        var top_left_margin = 0;
        //var PDF_Width = HTML_Width+(top_left_margin*2);
        //var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
        var PDF_Width = 4;
        var PDF_Height = 0.57;
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;
        //var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
        var totalPDFPages = Math.ceil(HTML_Height / PDF_Height);
        html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(DATA).then((canvas) => {
            const nombreSede = this.listSedes.find(res => (res.id_sede == this.usuarioService.getSedebyUser()));
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3__["default"]('l', 'in', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
            pdf.deletePage(1);
            for (var i = 0; i < totalPDFPages; i++) {
                pdf.addPage([PDF_Width, PDF_Height]);
                pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
            }
            pdf.save("Lunas_" + nombreSede.nombre_sede + ".pdf");
        });
        this.closeEventModal();
    }
    printEtiquetaIndividual() {
        let DATA = document.getElementById('htmlData2');
        //var HTML_Width = document.getElementById("htmlData").offsetWidth 
        //var HTML_Height = document.getElementById("htmlData").offsetHeight
        var HTML_Width = 3;
        var HTML_Height = 0.57 * this.nQR;
        var top_left_margin = 0;
        //var PDF_Width = HTML_Width+(top_left_margin*2);
        //var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
        var PDF_Width = 4;
        var PDF_Height = 0.57;
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;
        //var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
        var totalPDFPages = Math.ceil(HTML_Height / PDF_Height);
        html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(DATA).then((canvas) => {
            const nombreSede = this.listSedes.find(res => (res.id_sede == this.usuarioService.getSedebyUser()));
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3__["default"]('l', 'in', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
            pdf.deletePage(1);
            for (var i = 0; i < totalPDFPages; i++) {
                pdf.addPage([PDF_Width, PDF_Height]);
                pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
            }
            pdf.save("Lunas_" + nombreSede.nombre_sede + ".pdf");
        });
        this.closeEventModal();
    }
}
LunasComponent.ɵfac = function LunasComponent_Factory(t) { return new (t || LunasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_lunas_service__WEBPACK_IMPORTED_MODULE_0__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_7__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__.UsuarioService)); };
LunasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: LunasComponent, selectors: [["app-lunas"]], viewQuery: function LunasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([_lunas_service__WEBPACK_IMPORTED_MODULE_0__.CustomerService, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe])], decls: 71, vars: 25, consts: [[1, "container-fluid"], ["title", "Lista de Lunas", 3, "breadcrumbItems"], [1, "row"], [1, "col-md-6", "mb-2"], [1, "form-inline"], [1, "search-box", "ml-2"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar luna", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "border-light", "rounded", 3, "ngModel", "ngModelChange"], [1, "uil", "uil-search", "search-icon"], ["role", "toolbar", 1, "btn-toolbar"], [1, "col-12", "col-md-6", "d-grid", "mb-2"], ["type", "button", 1, "btn", "btn-success", "btn-block", "me-1", 3, "disabled", "click"], [1, "uil", "uil-tag-alt", "me-2"], ["class", "col-12 col-md-6 d-grid", 4, "appRole"], [1, "row", "md-2"], [1, "col-sm-12", "col-md-12"], [1, "dataTables_length", "text-md-end"], [1, "d-inline-flex", "align-items-center"], ["name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "col-12"], [1, "table-responsive", "mb-4"], [1, "table", "datatables", "table-centered", "table-nowrap", "mb-0", "align-middle", "table-card-list", 2, "border-spacing", "0 12px", "width", "100%"], [1, "bg-transparent"], [2, "width", "20px"], [1, "form-check", "text-center"], ["type", "checkbox", "id", "lunascheck", 1, "form-check-input", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"], ["for", "lunascheck", 1, "form-check-label"], ["scope", "col", "sortable", "id", 3, "sort"], ["scope", "col", "sortable", "material", 3, "sort"], ["scope", "col", "sortable", "precio_luna_c", 3, "sort"], ["scope", "col", "sortable", "precio_luna_v", 3, "sort"], ["scope", "col", "sortable", "cantidad", 3, "sort"], ["scope", "col", "sortable", "fecha_creacion_luna", 3, "sort"], [4, "appRole"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "row", "justify-content-md-between", "align-items-md-center"], [1, "text-md-end", "float-md-end", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["centerDataModal", ""], ["centerModalEIL", ""], ["scrollDataModalEGL", ""], [1, "col-12", "col-md-6", "d-grid"], [3, "formGroup"], ["ngbDropdown", ""], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName", "change"], ["type", "checkbox", 1, "form-check-input", 3, "id", "ngModel", "ngModelOptions", "ngModelChange", "change"], [1, "form-check-label", 3, "for"], [3, "result", "term"], ["placement", "top", "ngbTooltip", "Etiqueta", 1, "px-2", "text-success", 3, "click"], ["class", "uil-tag-alt font-size-18", 4, "appRole"], ["placement", "top", "ngbTooltip", "Editar", 1, "px-2", "text-primary", 3, "click"], ["class", "uil uil-pen font-size-18", 4, "appRole"], ["class", "px-2 text-danger", "placement", "top", "ngbTooltip", "Eliminar", 3, "click", 4, "appRole"], [1, "uil-tag-alt", "font-size-18"], [1, "uil", "uil-pen", "font-size-18"], ["placement", "top", "ngbTooltip", "Eliminar", 1, "px-2", "text-danger", 3, "click"], [1, "uil", "uil-trash-alt", "font-size-18"], [1, "text-center", "my-3"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "mdi", "mdi-loading", "mdi-spin", "font-size-20", "align-middle", "me-2"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [1, "card-title-desc", "text-danger"], [1, "col-8"], [1, "mb-3"], [1, "control-label"], ["placeholder", "Material de la luna", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], [1, "col-4"], ["placeholder", "Cantidad", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Precio", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], [1, "text-end", "mt-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "disabled", "click"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], ["id", "htmlData2"], [1, "modal-footer"], [1, "product-cart-touchspin", 2, "width", "80px"], ["touch-spin", "", "ng-model", "numberVariable", "options", "optionsVariable"], ["type", "number", "min", "1", "step", "1", "oninput", "this.value = Math.round(this.value); this.value > 100? this.value = 100 : this.value", "max", "100", "maxlength", "3", 1, "form-control", 3, "formControlName", "change"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "uil-print", "me-1"], [1, "row", "align-items-center"], [1, "col-6"], ["id", "barcode", "width", "225px", "height", "100px", "mode", "SVG", 2, "display", "block", 3, "value", "displayText"], ["barcode", ""], [1, "col-6", "ml-0"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["id", "htmlData"], [1, "uil-file-download", "me-1"]], template: function LunasComponent_Template(rf, ctx) { if (rf & 1) {
        const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LunasComponent_Template_input_ngModelChange_7_listener($event) { return ctx.service.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function LunasComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r57); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](70); return ctx.openScrollModal(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, " Etiquetas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, LunasComponent_div_16_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Mostrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function LunasComponent_Template_select_ngModelChange_22_listener($event) { return ctx.service.pageSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, " entradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function LunasComponent_Template_input_change_41_listener() { return ctx.checkUncheckAll(); })("ngModelChange", function LunasComponent_Template_input_ngModelChange_41_listener($event) { return ctx.isMasterSel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](42, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function LunasComponent_Template_th_sort_43_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, "Ord.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function LunasComponent_Template_th_sort_45_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46, "Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function LunasComponent_Template_th_sort_47_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, "Precio Compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function LunasComponent_Template_th_sort_49_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "Precio Venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function LunasComponent_Template_th_sort_51_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function LunasComponent_Template_th_sort_53_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "Fecha de Ingreso");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, LunasComponent_th_55_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](57, LunasComponent_tr_57_Template, 25, 23, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](58, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](59, LunasComponent_div_59_Template, 6, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "ngb-pagination", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("pageChange", function LunasComponent_Template_ngb_pagination_pageChange_63_listener($event) { return ctx.service.page = $event; })("pageChange", function LunasComponent_Template_ngb_pagination_pageChange_63_listener($event) { return ctx.loadPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](64, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](65, LunasComponent_ng_template_65_Template, 46, 25, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](67, LunasComponent_ng_template_67_Template, 17, 4, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](69, LunasComponent_ng_template_69_Template, 13, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.checkedLunasList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appRole", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.service.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.isMasterSel)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appRole", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](58, 20, ctx.lunas$));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](64, 22, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize)("maxSize", 5)("rotate", true)("boundaryLinks", true);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_9__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _directives_role_directive__WEBPACK_IMPORTED_MODULE_10__.RoleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _accesorios_sortable_directive__WEBPACK_IMPORTED_MODULE_11__.NgbdSortableHeader, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPagination, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdown, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbHighlight, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator, _syncfusion_ej2_angular_barcode_generator__WEBPACK_IMPORTED_MODULE_17__.QRCodeGeneratorComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsdW5hcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 58455:
/*!*******************************************************!*\
  !*** ./src/app/pages/products/lunas/lunas.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
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
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);






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
    return customer.material.toLowerCase().includes(term.toLowerCase())
        || String(customer.precio_luna_c).toLowerCase().includes(term.toLowerCase())
        || String(customer.precio_luna_v).toLowerCase().includes(term.toLowerCase())
        || String(customer.cantidad).toLowerCase().includes(term)
        || (customer.fecha_creacion_luna).toLocaleString().includes(term.toLowerCase());
}
class CustomerService {
    constructor(pipe, lunasService, usuarioService) {
        this.pipe = pipe;
        this.lunasService = lunasService;
        this.usuarioService = usuarioService;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._customers$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        this._mostrar$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.lunasList = [];
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
        this.getListLunas();
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
        let customers = sort(this.lunasList, sortColumn, sortDirection);
        // 2. filter
        customers = customers.filter(customer => matches(customer, searchTerm, this.pipe));
        const total = customers.length;
        // 3. paginate
        customers = customers.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ customers, total });
    }
    /**
     * Funcion para obtener la lista de clientes desde el backend
     */
    getListLunas() {
        this.lunasService.getProductosbySede(this.usuarioService.getSedebyUser(), 'luna').subscribe(res => {
            this.lunasList = res;
            const propiedad = {
                isSelected: false
            };
            this.lunasList.forEach(elem => {
                Object.assign(elem, propiedad);
            });
            this._mostrar$.next(true);
            this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loading$.next(false))).subscribe(result => {
                this._customers$.next(result.customers);
                this._total$.next(result.total);
            });
            this._search$.next();
        });
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_0__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService)); };
CustomerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 57084:
/*!************************************************************!*\
  !*** ./src/app/pages/products/lunas/sortable.directive.ts ***!
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

/***/ 86506:
/*!***************************************************************!*\
  !*** ./src/app/pages/products/monturas/monturas.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonturasComponent": () => (/* binding */ MonturasComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _monturas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monturas.service */ 82229);
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable.directive */ 98761);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_models_monturas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/monturas */ 43514);
/* harmony import */ var src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/sweetalert */ 63782);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ 71626);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html2canvas */ 2724);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _directives_role_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../directives/role.directive */ 48185);
/* harmony import */ var _accesorios_sortable_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../accesorios/sortable.directive */ 42935);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _syncfusion_ej2_angular_barcode_generator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @syncfusion/ej2-angular-barcode-generator */ 91023);
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-ng-autocomplete */ 84933);






















function MonturasComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "form", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ng-select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function MonturasComponent_div_16_Template_ng_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r12.changeSede(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r0.formSedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r0.nombre_sedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx_r0.listSedes);
} }
function MonturasComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function MonturasComponent_tr_67_i_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 61);
} }
function MonturasComponent_tr_67_i_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 62);
} }
function MonturasComponent_tr_67_a_32_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_tr_67_a_32_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21); const data_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r19.eliminar(data_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
function MonturasComponent_tr_67_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function MonturasComponent_tr_67_Template_input_ngModelChange_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23); const data_r14 = restoredCtx.$implicit; return data_r14.isSelected = $event; })("change", function MonturasComponent_tr_67_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r24.isAllSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_tr_67_Template_a_click_28_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23); const data_r14 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](78); return ctx_r25.openModalEtiqueta(_r6, data_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, MonturasComponent_tr_67_i_29_Template, 1, 0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_tr_67_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23); const data_r14 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](76); return ctx_r26.centerModal(_r4, data_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, MonturasComponent_tr_67_i_31_Template, 1, 0, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, MonturasComponent_tr_67_a_32_Template, 2, 0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "ordercheck", data_r14.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", data_r14.isSelected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](30, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("for", "ordercheck", data_r14.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", i_r15 + 1)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r14.material)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r14.marca)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r14.codigo)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r14.talla)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r14.color)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r14.cantidad)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r14.precio_montura_c)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r14.precio_montura_v)("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](26, 27, data_r14.fecha_creacion_monturas, "dd/MM/yyyy"))("term", ctx_r2.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appRole", ctx_r2.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appRole", ctx_r2.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appRole", ctx_r2.role);
} }
function MonturasComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Cargando ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function MonturasComponent_ng_template_75_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function MonturasComponent_ng_template_75_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function MonturasComponent_ng_template_75_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function MonturasComponent_ng_template_75_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function MonturasComponent_ng_template_75_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function MonturasComponent_ng_template_75_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Ingrese solo letras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function MonturasComponent_ng_template_75_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function MonturasComponent_ng_template_75_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros enteros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function MonturasComponent_ng_template_75_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function MonturasComponent_ng_template_75_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros y opcional hasta 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function MonturasComponent_ng_template_75_span_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Campo requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function MonturasComponent_ng_template_75_span_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Ingrese solo n\u00FAmeros y opcional hasta 2 decimales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
function MonturasComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Editar Montura");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_ng_template_75_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r40.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "form", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function MonturasComponent_ng_template_75_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r42.saveEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "* Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Material *");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, MonturasComponent_ng_template_75_div_15_Template, 2, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "Marca *");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, MonturasComponent_ng_template_75_div_22_Template, 2, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "C\u00F3digo int. *");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, MonturasComponent_ng_template_75_div_30_Template, 2, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "Talla *");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](35, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, MonturasComponent_ng_template_75_div_37_Template, 2, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "Color *");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](42, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, MonturasComponent_ng_template_75_div_44_Template, 2, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, MonturasComponent_ng_template_75_div_45_Template, 2, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "Stock *");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](51, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, MonturasComponent_ng_template_75_div_53_Template, 2, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](54, MonturasComponent_ng_template_75_div_54_Template, 2, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "Precio de Compra *");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](59, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, MonturasComponent_ng_template_75_div_61_Template, 2, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](62, MonturasComponent_ng_template_75_div_62_Template, 2, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](66, "Precio de Venta *");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](67, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](69, MonturasComponent_ng_template_75_span_69_Template, 2, 0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](70, MonturasComponent_ng_template_75_span_70_Template, 2, 0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_ng_template_75_Template_button_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r43.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_ng_template_75_Template_button_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r44.guardarMontura(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r5.formMontura);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.material_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](30, _c1, ctx_r5.formEM.campoMaterialMontura.invalid && (ctx_r5.formEM.campoMaterialMontura.dirty || ctx_r5.formEM.campoMaterialMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEM.campoMaterialMontura.errors == null ? null : ctx_r5.formEM.campoMaterialMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.marca_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](32, _c1, ctx_r5.formEM.campoMarcaMontura.invalid && (ctx_r5.formEM.campoMarcaMontura.dirty || ctx_r5.formEM.campoMarcaMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEM.campoMarcaMontura.errors == null ? null : ctx_r5.formEM.campoMarcaMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.codigo_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](34, _c1, ctx_r5.formEM.campoCodigoMontura.invalid && (ctx_r5.formEM.campoCodigoMontura.dirty || ctx_r5.formEM.campoCodigoMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEM.campoCodigoMontura.errors == null ? null : ctx_r5.formEM.campoCodigoMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.talla_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](36, _c1, ctx_r5.formEM.campoTallaMontura.invalid && (ctx_r5.formEM.campoTallaMontura.dirty || ctx_r5.formEM.campoTallaMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEM.campoTallaMontura.errors == null ? null : ctx_r5.formEM.campoTallaMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.color_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](38, _c1, ctx_r5.formEM.campoColorMontura.invalid && (ctx_r5.formEM.campoColorMontura.dirty || ctx_r5.formEM.campoColorMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEM.campoColorMontura.errors == null ? null : ctx_r5.formEM.campoColorMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEM.campoColorMontura.errors == null ? null : ctx_r5.formEM.campoColorMontura.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.cantidad_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](40, _c1, ctx_r5.formEM.campoCantidadMontura.invalid && (ctx_r5.formEM.campoCantidadMontura.dirty || ctx_r5.formEM.campoCantidadMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEM.campoCantidadMontura.errors == null ? null : ctx_r5.formEM.campoCantidadMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEM.campoCantidadMontura.errors == null ? null : ctx_r5.formEM.campoCantidadMontura.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.precio_compra_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](42, _c1, ctx_r5.formEM.campoCompraMontura.invalid && (ctx_r5.formEM.campoCompraMontura.dirty || ctx_r5.formEM.campoCompraMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEM.campoCompraMontura.errors == null ? null : ctx_r5.formEM.campoCompraMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEM.campoCompraMontura.errors == null ? null : ctx_r5.formEM.campoCompraMontura.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.precio_venta_montura);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](44, _c1, ctx_r5.formEM.campoVentaMontura.invalid && (ctx_r5.formEM.campoVentaMontura.dirty || ctx_r5.formEM.campoVentaMontura.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEM.campoVentaMontura.errors == null ? null : ctx_r5.formEM.campoVentaMontura.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.formEM.campoVentaMontura.errors == null ? null : ctx_r5.formEM.campoVentaMontura.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r5.formMontura.valid);
} }
function MonturasComponent_ng_template_77_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ejs-qrcodegenerator", 101, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r46.individualQR.id_producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("displayText", ctx_r46.displayTextMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r46.individualQR.codigo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r46.individualQR.marca, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r46.individualQR.talla, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r46.individualQR.color, " ");
} }
const _c2 = function () { return []; };
function MonturasComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h5", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Imprimir Etiqueta por Montura");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_ng_template_77_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r49.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, MonturasComponent_ng_template_77_div_6_Template, 17, 6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_ng_template_77_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r51.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "form", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function MonturasComponent_ng_template_77_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r50); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r52.generarEtiqueta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_ng_template_77_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r50); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r53.printEtiquetaIndividual(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Descargar c\u00F3digos");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](3, _c2).constructor(ctx_r7.nQR));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r7.formPrintEtiquetaMontura);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("formControlName", ctx_r7.nEtiquetasPorMontura);
} }
function MonturasComponent_ng_template_79_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ejs-qrcodegenerator", 101, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", item_r56.id_producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("displayText", ctx_r57.displayTextMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r56.codigo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r56.marca, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r56.talla, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r56.color, " ");
} }
function MonturasComponent_ng_template_79_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, MonturasComponent_ng_template_79_div_6_div_1_Template, 17, 6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](1, _c2).constructor(item_r56.cantidad));
} }
function MonturasComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h5", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Lista de C\u00F3digos de Barras");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_ng_template_79_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r61.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, MonturasComponent_ng_template_79_div_6_Template, 2, 2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_ng_template_79_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r63.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_ng_template_79_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r64.generarPDF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Descargar c\u00F3digos");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r9.checkedMonturasList);
} }
function MonturasComponent_ng_template_81_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "a", 122);
} if (rf & 2) {
    const item_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", item_r72.codigo_interno, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
} }
function MonturasComponent_ng_template_81_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 122);
} if (rf & 2) {
    const notFound_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", notFound_r73, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
} }
const _c3 = function (a0) { return { "bg-soft-danger": a0 }; };
function MonturasComponent_ng_template_81_tr_53_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](24, "ngb-highlight", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_ng_template_81_tr_53_Template_a_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r77); const data_r74 = restoredCtx.$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r76.eliminar(data_r74); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](31, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r74 = ctx.$implicit;
    const i_r75 = ctx.index;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", i_r75 + 1)("term", ctx_r71.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r74.material)("term", ctx_r71.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r74.marca)("term", ctx_r71.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r74.codigo)("term", ctx_r71.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r74.codigo_interno)("term", ctx_r71.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r74.talla)("term", ctx_r71.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r74.color)("term", ctx_r71.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r74.cantidad)("term", ctx_r71.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r74.precio_montura_c)("term", ctx_r71.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", data_r74.precio_montura_v)("term", ctx_r71.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("term", ctx_r71.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("result", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](25, 25, data_r74.fecha_creacion_monturas, "dd/MM/yyyy"))("term", ctx_r71.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](28, _c3, data_r74.status === "Deactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r74.status);
} }
function MonturasComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h5", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Inventario");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_ng_template_81_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r78.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "ng-autocomplete", 110, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selected", function MonturasComponent_ng_template_81_Template_ng_autocomplete_selected_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r80.selectEvent($event); })("inputChanged", function MonturasComponent_ng_template_81_Template_ng_autocomplete_inputChanged_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r81.onChangeSearch($event); })("inputFocused", function MonturasComponent_ng_template_81_Template_ng_autocomplete_inputFocused_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r82.onFocused($event); })("keyup.enter", function MonturasComponent_ng_template_81_Template_ng_autocomplete_keyup_enter_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r83.selectEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, MonturasComponent_ng_template_81_ng_template_13_Template, 1, 1, "ng-template", null, 112, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, MonturasComponent_ng_template_81_ng_template_15_Template, 1, 1, "ng-template", null, 113, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_ng_template_81_Template_th_sort_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r84.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Ord.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_ng_template_81_Template_th_sort_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r85.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_ng_template_81_Template_th_sort_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r86.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "Marca");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "th", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_ng_template_81_Template_th_sort_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r87.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "C\u00F3d.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "th", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_ng_template_81_Template_th_sort_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r88.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "C\u00F3d. int.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_ng_template_81_Template_th_sort_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r89.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "Talla");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_ng_template_81_Template_th_sort_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r90.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_ng_template_81_Template_th_sort_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r91.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "th", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_ng_template_81_Template_th_sort_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r92.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "P. Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "th", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_ng_template_81_Template_th_sort_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r93.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43, "P. Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "th", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_ng_template_81_Template_th_sort_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r94.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "Sede");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "th", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_ng_template_81_Template_th_sort_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r95.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "Fecha de ing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "th", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_ng_template_81_Template_th_sort_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r96.onSort($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51, "Acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, MonturasComponent_ng_template_81_tr_53_Template, 32, 30, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "ngb-pagination", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("pageChange", function MonturasComponent_ng_template_81_Template_ngb_pagination_pageChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r97.service.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](58, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_ng_template_81_Template_button_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r98.closeEventModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](63, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](64, "Imprimir");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](14);
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](16);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("data", ctx_r11.listMonturas)("searchKeyword", ctx_r11.keyword)("itemTemplate", _r67)("notFoundTemplate", _r69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r11.inventarioMonturas);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](58, 11, ctx_r11.total$))("page", ctx_r11.service.page)("pageSize", ctx_r11.service.pageSize)("maxSize", 5)("rotate", true)("boundaryLinks", true);
} }
class MonturasComponent {
    constructor(service, monturaService, modalService, fb, usuarioService) {
        this.service = service;
        this.monturaService = monturaService;
        this.modalService = modalService;
        this.fb = fb;
        this.usuarioService = usuarioService;
        this.role = "Admin";
        this.mostrarSpinner = false;
        this.submitted = false;
        this.isMasterSel = false;
        this.nombre_sedes = "campoSedes";
        this.material_montura = "campoMaterialMontura";
        this.marca_montura = "campoMarcaMontura";
        this.codigo_montura = "campoCodigoMontura";
        this.talla_montura = "campoTallaMontura";
        this.color_montura = "campoColorMontura";
        this.cantidad_montura = "campoCantidadMontura";
        this.precio_compra_montura = "campoCompraMontura";
        this.precio_venta_montura = "campoVentaMontura";
        this.nEtiquetasMonturas = "campoNEtiquetasMonturas";
        this.nEtiquetasPorMontura = "campoNEtiquetasPorMontura";
        this.numberPattern = '[0-9]+';
        this.decimalPattern = /^\d+(\.\d{2})?$/;
        this.lettersPattern = '[a-zA-Z ]*';
        this.montura = new src_models_monturas__WEBPACK_IMPORTED_MODULE_2__.MonturasModel;
        this.checkedMonturasList = [];
        this.keyword = "codigo_interno";
        this.listSedes = [];
        this.inventarioMonturas = [];
        this.individualQR = new src_models_monturas__WEBPACK_IMPORTED_MODULE_2__.MonturasModel;
        this.nQR = 0;
        this.idSede = "";
        this.displayTextMethod = {
            visibility: false
        };
        this.monturas$ = service.customers$;
        this.total$ = service.total$;
        service.mostrar.subscribe(res => {
            this.mostrarSpinner = res;
        });
    }
    ngOnInit() {
        this.getListSedes();
        this.crearFormulario();
        this.breadCrumbItems = [{ label: 'Productos' }, { label: 'Lista de Monturas', active: true }];
        this.service.customers$.subscribe(res => {
            this.listMonturas = res;
        });
    }
    crearFormulario() {
        this.formMontura = this.fb.group({
            [this.material_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required
                ]],
            [this.marca_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required
                ]],
            [this.talla_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required
                ]],
            [this.color_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.lettersPattern)
                ]],
            [this.codigo_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required
                ]],
            [this.cantidad_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.numberPattern)
                ]],
            [this.precio_compra_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.decimalPattern)
                ]],
            [this.precio_venta_montura]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.decimalPattern)
                ]]
        });
        this.formEtiquetaMonturas = this.fb.group({
            [this.nEtiquetasMonturas]: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required
                ]]
        });
        this.formPrintEtiquetaMontura = this.fb.group({
            [this.nEtiquetasPorMontura]: [1, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern(this.numberPattern)
                ]]
        });
        this.formSedes = this.fb.group({
            [this.nombre_sedes]: [this.idSede]
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
    f(campo) {
        return this.formMontura.get(campo);
    }
    fEM(campo) {
        return this.formPrintEtiquetaMontura.get(campo);
    }
    /**
     * Open center modal
     * @param centerDataModal center modal data
     */
    centerModal(centerDataModal, data) {
        this.f(this.material_montura).setValue(data.material);
        this.f(this.marca_montura).setValue(data.marca);
        this.f(this.codigo_montura).setValue(data.codigo);
        this.f(this.talla_montura).setValue(data.talla);
        this.f(this.color_montura).setValue(data.color);
        this.f(this.cantidad_montura).setValue(data.cantidad);
        this.f(this.precio_compra_montura).setValue(data.precio_montura_c);
        this.f(this.precio_venta_montura).setValue(data.precio_montura_v);
        this.montura.id_producto = data.id_producto;
        this.modalService.open(centerDataModal, { centered: true, windowClass: 'modal-holder' });
    }
    getListSedes() {
        this.listSedes = JSON.parse(localStorage.getItem('sedes'));
        this.idSede = this.usuarioService.getSedebyUser();
    }
    /**
     * Open Large modal
     * @param openDataModal large modal data
     */
    openModalEtiqueta(openDataModal, data) {
        this.individualQR = data;
        this.nQR = Number(this.fEM(this.nEtiquetasPorMontura).value);
        this.modalService.open(openDataModal, { windowClass: 'modal-holder', centered: true, scrollable: true });
    }
    /**
     * Open scroll modal
     * @param openScrollDataModalEtiquetas scroll modal data
     */
    openScrollModalEtiquetas(openScrollDataModalEtiquetas) {
        this.modalService.open(openScrollDataModalEtiquetas, { windowClass: 'modal-holder', centered: true, scrollable: true });
    }
    /**
     * Open scroll modal
     * @param openScrollDataModalInventario scroll modal data
     */
    openScrollModalInventario(openScrollDataModalInventario) {
        this.modalService.open(openScrollDataModalInventario, { size: 'xl', windowClass: 'modal-holder', centered: true, scrollable: true });
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
        this.fEM(this.nEtiquetasPorMontura).setValue(1);
        this.modalService.dismissAll();
    }
    /**
     * Save the event
     */
    saveEvent() {
        if (this.formMontura.valid) {
        }
        this.submitted = true;
    }
    guardarMontura() {
        if (this.formMontura.valid) {
            this.montura.material = this.f(this.material_montura).value;
            this.montura.marca = this.f(this.marca_montura).value;
            this.montura.codigo = this.f(this.codigo_montura).value;
            this.montura.talla = this.f(this.talla_montura).value;
            this.montura.color = this.f(this.color_montura).value;
            this.montura.cantidad = Number(this.f(this.cantidad_montura).value);
            this.montura.precio_montura_c = Number(this.f(this.precio_compra_montura).value);
            this.montura.precio_montura_v = Number(this.f(this.precio_venta_montura).value);
            this.montura.fecha_modificacion_monturas = new Date(Date.now());
            (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("loading", "Cargando...");
            this.monturaService.updateMontura(this.montura.id_producto, this.montura).subscribe(res => {
                this.modalService.dismissAll();
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("close", null);
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("success", "Montura guardada");
                this.updateListMonturas(this.idSede);
            });
        }
        else {
        }
    }
    eliminar(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: '¿Está seguro que desea eliminar la montura?',
            text: 'No se podrá revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#34c38f',
            cancelButtonColor: '#f46a6a',
            confirmButtonText: 'Si, eliminar!'
        }).then(result => {
            if (result.value) {
                (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("loading", "Cargando...");
                this.monturaService.darBajaMontura(data.id_producto).subscribe(res => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("success", "Montura eliminada");
                    this.updateListMonturas(this.idSede);
                }, error => {
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("close", null);
                    (0,src_utils_sweetalert__WEBPACK_IMPORTED_MODULE_3__.Sweetalert)("error", "Error en la conexión");
                });
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().DismissReason.cancel)) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Cancelado', 'Montura no eliminada', 'error');
            }
        });
    }
    updateListMonturas(idSede) {
        this.monturaService.getProductosbySede(idSede, 'montura').subscribe(res => {
            this.service.updateTable(res);
        });
    }
    /**
     * Returns form Editar Monturas
     */
    get formEM() {
        return this.formMontura.controls;
    }
    /**
    * Returns form Print cada Montura
    */
    get formPEM() {
        return this.formPrintEtiquetaMontura.controls;
    }
    loadPage(event) {
        this.isMasterSel = false;
    }
    checkUncheckAll() {
        this.monturas$.forEach(element => {
            element.forEach(elem => {
                elem.isSelected = this.isMasterSel;
            });
        });
        this.getCheckedItemList();
    }
    getCheckedItemList() {
        this.checkedMonturasList = [];
        this.monturas$.forEach(element => {
            element.forEach(elem => {
                if (elem.isSelected) {
                    this.checkedMonturasList.push(elem);
                }
            });
        });
    }
    isAllSelected() {
        this.monturas$.forEach(element => {
            this.isMasterSel = element.every(function (item) {
                return item.isSelected == true;
            });
        });
        this.getCheckedItemList();
    }
    generarPDF() {
        let cant = this.checkedMonturasList.reduce((accumulator, obj) => {
            return accumulator + obj.cantidad;
        }, 0);
        let DATA = document.getElementById('htmlData');
        //var HTML_Width = document.getElementById("htmlData").offsetWidth 
        //var HTML_Height = document.getElementById("htmlData").offsetHeight
        var HTML_Width = 3;
        var HTML_Height = 0.57 * cant;
        var top_left_margin = 0;
        //var PDF_Width = HTML_Width+(top_left_margin*2);
        //var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
        var PDF_Width = 4;
        var PDF_Height = 0.57;
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;
        //var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
        var totalPDFPages = Math.ceil(HTML_Height / PDF_Height);
        html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(DATA).then((canvas) => {
            const nombreSede = this.listSedes.find(res => (res.id_sede == this.usuarioService.getSedebyUser()));
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]('l', 'in', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
            pdf.deletePage(1);
            for (var i = 0; i < totalPDFPages; i++) {
                pdf.addPage([PDF_Width, PDF_Height]);
                pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
            }
            pdf.save("Monturas_" + nombreSede.nombre_sede + ".pdf");
        });
        this.closeEventModal();
    }
    fS(campo) {
        return this.formSedes.get(campo);
    }
    changeSede() {
        this.idSede = this.fS(this.nombre_sedes).value;
        this.updateListMonturas(this.idSede);
    }
    generarEtiqueta() {
        this.nQR = Number(this.fEM(this.nEtiquetasPorMontura).value);
    }
    printEtiquetaIndividual() {
        let DATA = document.getElementById('htmlData2');
        //var HTML_Width = document.getElementById("htmlData").offsetWidth 
        //var HTML_Height = document.getElementById("htmlData").offsetHeight
        var HTML_Width = 3;
        var HTML_Height = 0.57 * this.nQR;
        var top_left_margin = 0;
        //var PDF_Width = HTML_Width+(top_left_margin*2);
        //var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
        var PDF_Width = 4;
        var PDF_Height = 0.57;
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;
        //var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
        var totalPDFPages = Math.ceil(HTML_Height / PDF_Height);
        html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(DATA).then((canvas) => {
            const nombreSede = this.listSedes.find(res => (res.id_sede == this.usuarioService.getSedebyUser()));
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]('l', 'in', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
            pdf.deletePage(1);
            for (var i = 0; i < totalPDFPages; i++) {
                pdf.addPage([PDF_Width, PDF_Height]);
                pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
            }
            pdf.save("Monturas_" + nombreSede.nombre_sede + ".pdf");
        });
        this.closeEventModal();
    }
}
MonturasComponent.ɵfac = function MonturasComponent_Factory(t) { return new (t || MonturasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_monturas_service__WEBPACK_IMPORTED_MODULE_0__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_7__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__.UsuarioService)); };
MonturasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: MonturasComponent, selectors: [["app-monturas"]], viewQuery: function MonturasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.NgbdSortableHeader, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([_monturas_service__WEBPACK_IMPORTED_MODULE_0__.CustomerService, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe])], decls: 83, vars: 26, consts: [[1, "container-fluid"], ["title", "Lista de Monturas", 3, "breadcrumbItems"], [1, "row"], [1, "col-md-6", "mb-2"], [1, "form-inline"], [1, "search-box", "ml-2"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar montura", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "border-light", "rounded", 3, "ngModel", "ngModelChange"], [1, "uil", "uil-search", "search-icon"], ["role", "toolbar", 1, "btn-toolbar"], [1, "col-12", "col-md-6", "d-grid", "mb-2"], ["type", "button", 1, "btn", "btn-success", "btn-block", "me-1", 3, "disabled", "click"], [1, "uil", "uil-tag-alt", "me-2"], ["class", "col-12 col-md-6 d-grid", 4, "appRole"], [1, "row", "md-2"], [1, "col-sm-12", "col-md-12"], [1, "dataTables_length", "text-md-end"], [1, "d-inline-flex", "align-items-center"], ["name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "col-12"], [1, "table-responsive", "mb-4"], [1, "table", "datatables", "table-centered", "table-nowrap", "mb-0", "align-middle", "table-card-list", 2, "border-spacing", "0 12px", "width", "100%"], [1, "bg-transparent"], [2, "width", "20px"], [1, "form-check", "text-center"], ["type", "checkbox", "id", "monturascheck", 1, "form-check-input", 3, "ngModel", "ngModelOptions", "change", "ngModelChange"], ["for", "monturascheck", 1, "form-check-label"], ["scope", "col", "sortable", "id", 3, "sort"], ["scope", "col", "sortable", "material", 3, "sort"], ["scope", "col", "sortable", "marca", 3, "sort"], ["scope", "col", "sortable", "codigo", 3, "sort"], ["scope", "col", "sortable", "talla", 3, "sort"], ["scope", "col", "sortable", "color", 3, "sort"], ["scope", "col", "sortable", "cantidad", 3, "sort"], ["scope", "col", "sortable", "precio_montura_c", 3, "sort"], ["scope", "col", "sortable", "precio_montura_v", 3, "sort"], ["scope", "col", "sortable", "fecha_creacion_monturas", 3, "sort"], ["style", "width: 170px;", 4, "appRole"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "row", "justify-content-md-between", "align-items-md-center"], [1, "text-md-end", "float-md-end", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["centerDataModal", ""], ["centerModalEIM", ""], ["scrollDataModalEGM", ""], ["scrollDataModalListaInventario", ""], [1, "col-12", "col-md-6", "d-grid"], [3, "formGroup"], ["ngbDropdown", ""], ["placeholder", "Seleccione la sede", "bindValue", "id_sede", "bindLabel", "nombre_sede", 3, "items", "formControlName", "change"], [2, "width", "170px"], ["type", "checkbox", 1, "form-check-input", 3, "id", "ngModel", "ngModelOptions", "ngModelChange", "change"], [1, "form-check-label", 3, "for"], [3, "result", "term"], ["placement", "top", "ngbTooltip", "Etiqueta", 1, "px-2", "text-success", 3, "click"], ["class", "uil-tag-alt font-size-18", 4, "appRole"], ["placement", "top", "ngbTooltip", "Editar", 1, "px-2", "text-primary", 3, "click"], ["class", "uil uil-pen font-size-18", 4, "appRole"], ["class", "px-2 text-danger", "placement", "top", "ngbTooltip", "Eliminar", 3, "click", 4, "appRole"], [1, "uil-tag-alt", "font-size-18"], [1, "uil", "uil-pen", "font-size-18"], ["placement", "top", "ngbTooltip", "Eliminar", 1, "px-2", "text-danger", 3, "click"], [1, "uil", "uil-trash-alt", "font-size-18"], [1, "text-center", "my-3"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "mdi", "mdi-loading", "mdi-spin", "font-size-20", "align-middle", "me-2"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [3, "formGroup", "ngSubmit"], [1, "card-title-desc", "text-danger"], [1, "col-6"], [1, "mb-3"], [1, "control-label"], ["placeholder", "Material de la montura", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["placeholder", "Marca de la montura", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], [1, "col-4"], ["placeholder", "C\u00F3digo", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Talla de la montura", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Color de la montura", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Cantidad", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], ["placeholder", "Precio", "type", "text", "name", "title", 1, "form-control", 3, "formControlName", "ngClass"], [1, "text-end", "mt-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-success", "ms-1", 3, "disabled", "click"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], ["id", "htmlData2"], [1, "modal-footer"], [1, "product-cart-touchspin", 2, "width", "80px"], ["touch-spin", "", "ng-model", "numberVariable", "options", "optionsVariable"], ["type", "number", "min", "1", "step", "1", "oninput", "this.value = Math.round(this.value); this.value > 100? this.value = 100 : this.value", "max", "100", "maxlength", "3", 1, "form-control", 3, "formControlName", "change"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "uil-print", "me-1"], [1, "row", "align-items-center"], ["id", "barcode", "width", "225px", "height", "100px", "mode", "SVG", 2, "display", "block", 3, "value", "displayText"], ["barcode", ""], [1, "col-6", "ml-0"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["id", "htmlData"], [1, "row", "mb-4"], [1, "col-xl-12"], [1, "card", "mb-0"], [1, "col-sm-12", "col-md-12", "search-box", "chat-search-box"], ["placeholder", "Buscar Montura", "historyIdentifier", "", "focusFirst", "true", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused", "keyup.enter"], ["autocomplete", ""], ["itemTemplate", ""], ["notFoundTemplate", ""], ["scope", "col", "sortable", "codigo_1", 3, "sort"], ["scope", "col", "sortable", "codigo_2_interno", 3, "sort"], ["scope", "col", "sortable", "precio_compra", 3, "sort"], ["scope", "col", "sortable", "precio_venta", 3, "sort"], ["scope", "col", "sortable", "sede", 3, "sort"], ["scope", "col", "sortable", "total", 3, "sort"], ["scope", "col", "sortable", "status", 3, "sort"], ["type", "button", 1, "btn", "btn-primary"], [3, "innerHTML"], [1, "badge", "bg-pill", "bg-soft-success", "font-size-12", 3, "ngClass"]], template: function MonturasComponent_Template(rf, ctx) { if (rf & 1) {
        const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function MonturasComponent_Template_input_ngModelChange_7_listener($event) { return ctx.service.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MonturasComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r99); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](80); return ctx.openScrollModalEtiquetas(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, " Etiquetas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, MonturasComponent_div_16_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Mostrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function MonturasComponent_Template_select_ngModelChange_22_listener($event) { return ctx.service.pageSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, " entradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function MonturasComponent_Template_input_change_43_listener() { return ctx.checkUncheckAll(); })("ngModelChange", function MonturasComponent_Template_input_ngModelChange_43_listener($event) { return ctx.isMasterSel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](44, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_Template_th_sort_45_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46, "Ord.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_Template_th_sort_47_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, "Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_Template_th_sort_49_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "Marca");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_Template_th_sort_51_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "C\u00F3d. int.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_Template_th_sort_53_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "Talla");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_Template_th_sort_55_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_Template_th_sort_57_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_Template_th_sort_59_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60, "P. Compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_Template_th_sort_61_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "P. Venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sort", function MonturasComponent_Template_th_sort_63_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](64, "Fecha de ing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](65, MonturasComponent_th_65_Template, 2, 0, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](67, MonturasComponent_tr_67_Template, 33, 31, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](68, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](69, MonturasComponent_div_69_Template, 6, 0, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "ngb-pagination", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("pageChange", function MonturasComponent_Template_ngb_pagination_pageChange_73_listener($event) { return ctx.service.page = $event; })("pageChange", function MonturasComponent_Template_ngb_pagination_pageChange_73_listener($event) { return ctx.loadPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](74, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](75, MonturasComponent_ng_template_75_Template, 76, 46, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](77, MonturasComponent_ng_template_77_Template, 17, 4, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](79, MonturasComponent_ng_template_79_Template, 13, 1, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](81, MonturasComponent_ng_template_81_Template, 65, 13, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.checkedMonturasList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appRole", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.service.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngValue", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.isMasterSel)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appRole", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](68, 21, ctx.monturas$));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](74, 23, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize)("maxSize", 5)("rotate", true)("boundaryLinks", true);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_9__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _directives_role_directive__WEBPACK_IMPORTED_MODULE_10__.RoleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _accesorios_sortable_directive__WEBPACK_IMPORTED_MODULE_11__.NgbdSortableHeader, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPagination, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdown, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbHighlight, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator, _syncfusion_ej2_angular_barcode_generator__WEBPACK_IMPORTED_MODULE_17__.QRCodeGeneratorComponent, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__.AutocompleteComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb250dXJhcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 82229:
/*!*************************************************************!*\
  !*** ./src/app/pages/products/monturas/monturas.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
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
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/productos.service */ 91917);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);






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
    return customer.material.toLowerCase().includes(term.toLowerCase())
        || customer.marca.toLowerCase().includes(term.toLowerCase())
        || customer.codigo.toLowerCase().includes(term.toLowerCase())
        || customer.talla.toLowerCase().includes(term.toLowerCase())
        || customer.color.toLowerCase().includes(term.toLowerCase())
        || String(customer.cantidad).toLowerCase().includes(term.toLowerCase())
        || String(customer.precio_montura_c).toLowerCase().includes(term.toLowerCase())
        || String(customer.precio_montura_v).toLowerCase().includes(term.toLowerCase())
        || String(customer.fecha_creacion_monturas).toLowerCase().includes(term.toLowerCase());
}
class CustomerService {
    constructor(pipe, monturasService, usuarioService) {
        this.pipe = pipe;
        this.monturasService = monturasService;
        this.usuarioService = usuarioService;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._customers$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        this._mostrar$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.monturasList = [];
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
        this.getListMonturas();
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
        let customers = sort(this.monturasList, sortColumn, sortDirection);
        // 2. filter
        customers = customers.filter(customer => matches(customer, searchTerm, this.pipe));
        const total = customers.length;
        // 3. paginate
        customers = customers.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ customers, total });
    }
    /**
     * Funcion para obtener la lista de monturas desde el backend
     */
    getListMonturas() {
        this.monturasService.getProductosbySede(this.usuarioService.getSedebyUser(), 'montura').subscribe(res => {
            this.monturasList = res;
            const propiedad = {
                isSelected: false
            };
            this.monturasList.forEach(elem => {
                Object.assign(elem, propiedad);
            });
            this._mostrar$.next(true);
            this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this._loading$.next(false))).subscribe(result => {
                this._customers$.next(result.customers);
                this._total$.next(result.total);
            });
            this._search$.next();
        });
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_0__.ProductosService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService)); };
CustomerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 98761:
/*!***************************************************************!*\
  !*** ./src/app/pages/products/monturas/sortable.directive.ts ***!
  \***************************************************************/
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

/***/ 52577:
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/usuario.service */ 20566);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ 15025);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);





class RegisterComponent {
    constructor(fb, usuarioService) {
        this.fb = fb;
        this.usuarioService = usuarioService;
        // set the currenr year
        this.year = new Date().getFullYear();
        this.selectValue = [];
        this.selectedValue = '';
        this.stateValue = [];
        this.nombres = "campoNombres";
        this.apellidos = "campoApellidos";
        this.dni = "campoDNI";
        this.rol = "campoRol";
        this.sede = "campoSede";
        this.password = "campoPassword";
        this.repeatPassword = "campoRepeatPassword";
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
    }
    ngOnInit() {
        document.body.classList.add('authentication-bg');
        document.body.removeAttribute('data-topbar');
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
        this.formRegister = this.fb.group({
            [this.nombres]: [],
            [this.apellidos]: [],
            [this.dni]: [],
            [this.rol]: [],
            [this.sede]: [],
            [this.password]: [],
            [this.repeatPassword]: []
        });
    }
    f(campo) {
        return this.formRegister.get(campo);
    }
    guardarUsuario() {
        if (this.formRegister.valid) {
            const usuario = {
                nombres: this.f(this.nombres).value,
                apellidos: this.f(this.apellidos).value,
                dni: this.f(this.dni).value,
                //rol: this.f(this.rol).value,
                //sede: this.f(this.sede).value
            };
        }
        ;
        /* this.usuarioService.getUsers().subscribe(
          res=> {
          }
        ) */
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 46, vars: 5, consts: [[1, "container-fluid"], [1, "row", "no-gutter"], [1, "col-md-6", "d-none", "d-md-flex", "bg-image"], [1, "col-md-6", "bg-light"], [1, "login", "d-flex", "align-items-center", "py-5"], [1, "container"], [1, "row"], [1, "col-lg-10", "col-xl-7", "mx-auto"], [1, "text-center"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "100", 1, "logo", "logo-dark", "mb-3"], [1, "display-4"], [1, "text-muted", "mb-4"], [1, "form-group", "mb-3"], ["id", "username", "type", "email", "placeholder", "Nombres completos", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4"], ["id", "usersurname", "type", "email", "placeholder", "Apellidos completos", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4"], ["id", "usersurname", "type", "email", "placeholder", "Correo electr\u00F3nico", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4"], ["id", "userdni", "type", "email", "placeholder", "DNI del usuario", "required", "", "autofocus", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4"], [1, "row", "mb-3"], [1, "col-sm-6"], ["for", "username"], ["bindValue", "cNombre", "bindLabel", "tNombre", "placeholder", "Seleccione", 3, "formControlName", "items"], ["id", "userpassword", "type", "password", "placeholder", "Ingrese su contrase\u00F1a", "required", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", "text-primary"], ["id", "userrepetpassword", "type", "password", "placeholder", "Repita su contrase\u00F1a", "required", "", 1, "form-control", "rounded-pill", "border-0", "shadow-sm", "px-4", "text-primary"], [1, "custom-control", "custom-checkbox", "mb-3"], [1, "text-muted", "mb-0"], ["routerLink", "/pages/login-1", 1, "fw-medium", "text-primary"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "text-uppercase", "mb-2", "rounded-pill", "shadow-sm", 3, "click"], [1, "text-center", "d-flex", "justify-content-between", "mt-4"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Registrar Cuenta!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Obtenga su cuenta Orange \u00D3pticas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ng-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Sede");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "ng-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u00BFYa tienes una cuenta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_41_listener() { return ctx.guardarUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx.rol);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.listRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx.sede);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.listSedes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Todos los derechos reservados.");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".login[_ngcontent-%COMP%], .image[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://images.unsplash.com/photo-1615468822882-4828d2602857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80\");\n  background-size: cover;\n  background-position: center center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1TEFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbixcclxuLmltYWdlIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjE1NDY4ODIyODgyLTQ4MjhkMjYwMjg1Nz9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjA3MCZxPTgwJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ 91917:
/*!***********************************************!*\
  !*** ./src/app/services/productos.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosService": () => (/* binding */ ProductosService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);



class ProductosService {
    constructor(http) {
        this.http = http;
    }
    getMonturas() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllMonturas');
    }
    getAccesorios() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllAccesorios');
    }
    getLunas() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllLunas');
    }
    /*
    *Obtiene las monturas para las ventas (stock > 0)
    */
    getMonturasforSale(idSede) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllMonturasForVenta/' + idSede);
    }
    /*
    *Obtiene los accesorios para las ventas (stock > 0)
    */
    getAccesoriosforSale(idSede) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllAccesoriosForVenta/' + idSede);
    }
    /*
    *Obtiene lunas para las ventas (stock > 0)
    */
    getLunasforSale(idSede) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllLunasForVenta/' + idSede);
    }
    createAccesorios(accesorio) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'createNewAccesorio', accesorio);
    }
    createMonturas(montura) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'createNewMontura', montura);
    }
    createLunas(luna) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'createNewLuna', luna);
    }
    createVenta(venta) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'createNewVenta', venta);
    }
    darBajaMontura(idMontura) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'unsubscribeMonturasById/' + idMontura, idMontura);
    }
    darBajaLuna(idLuna) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'unsubscribeLunasById/' + idLuna, idLuna);
    }
    darBajaAccesorio(idAccesorio) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'unsubscribeAccesoriosById/' + idAccesorio, idAccesorio);
    }
    updateMontura(idMontura, montura) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'editMonturaById/' + idMontura, montura);
    }
    updateLuna(idLuna, luna) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'editLunaById/' + idLuna, luna);
    }
    updateAccesorio(idAccesorio, accesorio) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'editAccesorioById/' + idAccesorio, accesorio);
    }
    /*
    *Obtiene los productos sin importar el stock por id sede y nombre del producto
    */
    getProductosbySede(idSede, productName) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getProductBySede/' + idSede + '/' + productName);
    }
    updateProductsbyExcel(product) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'updateListOfProducts', product);
    }
    createProductsbyExcel(product) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'createListOfProducts', product);
    }
}
ProductosService.ɵfac = function ProductosService_Factory(t) { return new (t || ProductosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProductosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductosService, factory: ProductosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 21061:
/*!******************************************!*\
  !*** ./src/app/services/sede.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SedeService": () => (/* binding */ SedeService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);



class SedeService {
    constructor(http) {
        this.http = http;
    }
    getSedes() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllSedes');
    }
    createSede(sede) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'createNewSede', sede);
    }
    editSede(sede) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'editSedeById/' + sede.id_sede, sede);
    }
    getListSedes() {
        return JSON.parse(localStorage.getItem('sedes'));
    }
}
SedeService.ɵfac = function SedeService_Factory(t) { return new (t || SedeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SedeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SedeService, factory: SedeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 20566:
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioService": () => (/* binding */ UsuarioService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 46511);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 78068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);






class UsuarioService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.tokenSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    }
    getUsers() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllUsers');
    }
    createUsers(user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'createNewUser', user);
    }
    updateUsers(idUser, user) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'editUserById/' + idUser, user);
    }
    getSedes() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'getAllSedes');
    }
    createSedes(sede) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'createNewSede', sede);
    }
    darBajaUser(idUser) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'darBajaUsuarioById/' + idUser, idUser);
    }
    signIn(user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'signIn', user);
    }
    logOut() {
        this.tokenSubscription.unsubscribe();
        let removeToken = localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        localStorage.removeItem('sedes');
        if (removeToken == null) {
            this.router.navigate(['login']);
        }
    }
    getToken() {
        return localStorage.getItem('access_token');
    }
    get isLoggedIn() {
        let authToken = localStorage.getItem('access_token');
        return authToken !== null ? true : false;
    }
    storeUserData(token, user) {
        //this.timeout = this.jwtHelper.getTokenExpirationDate(token).valueOf() - new Date().valueOf();
        const jwtToken = (JSON.parse(atob(token.split('.')[1]))).exp;
        const expires = new Date(jwtToken * 1000);
        localStorage.setItem("access_token", token);
        localStorage.setItem("user", JSON.stringify(user));
        //this.authToken = token;
        //this.user = user;
        //this.emit({ username: this.user.username });
        this.expirationCounter(expires);
        this.router.navigate(['home']);
        this.getRole();
    }
    expirationCounter(timeout) {
        this.tokenSubscription.unsubscribe();
        this.tokenSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(timeout)).subscribe((expired) => {
            this.logOut();
            //this.router.navigate(["/login"]);
        });
    }
    getRole() {
        const user = localStorage.getItem('user');
        this.roleAs = JSON.parse(user).rol;
        return this.roleAs;
    }
    getSedebyUser() {
        const user = localStorage.getItem('user');
        return JSON.parse(user).id_sede;
    }
    getUser() {
        const user = localStorage.getItem('user');
        this.usuario = JSON.parse(user);
        return this.usuario;
    }
    changePasswordUser(user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBackend + 'editContraseniaUserById', user);
    }
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) { return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
UsuarioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UsuarioService, factory: UsuarioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 11950:
/*!************************************************************!*\
  !*** ./src/app/shared/ui/pagetitle/pagetitle.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagetitleComponent": () => (/* binding */ PagetitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 28267);


function PagetitleComponent_ng_container_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
} }
function PagetitleComponent_ng_container_7_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.label, " ");
} }
function PagetitleComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagetitleComponent_ng_container_7_li_1_Template, 3, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagetitleComponent_ng_container_7_li_2_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.active);
} }
class PagetitleComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagetitleComponent.ɵfac = function PagetitleComponent_Factory(t) { return new (t || PagetitleComponent)(); };
PagetitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagetitleComponent, selectors: [["app-page-title"]], inputs: { breadcrumbItems: "breadcrumbItems", title: "title" }, decls: 8, vars: 2, consts: [[1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"]], template: function PagetitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PagetitleComponent_ng_container_7_Template, 3, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdldGl0bGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    defaultauth: 'fackbackend',
    firebaseConfig: {
        apiKey: '',
        authDomain: '',
        databaseURL: '',
        projectId: '',
        storageBucket: '',
        messagingSenderId: '',
        appId: '',
        measurementId: ''
    },
    urlBackend: 'http://localhost:5000/'
    //urlBackend:'http://35.173.191.188:5000/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ 35610);





(0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__.registerLicense)('Mgo+DSMBaFt/QHRqVVhkXVpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSH5RdERjW3xeeHVQQQ==;Mgo+DSMBPh8sVXJ0S0J+XE9Ad1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31Td0VhW35ecndVTmVbVg==;ORg4AjUWIQA/Gnt2VVhkQlFacl5JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjW31fcHZWRmlZUUU=;ODU5OTE2QDMyMzAyZTM0MmUzMG1NYk5oUzBja3pNMXk3cDA1THpPUDdHRzN2THF4UnBlVm9oeGJyU0RiU0k9;ODU5OTE3QDMyMzAyZTM0MmUzMGlGMWljK25FMFdKZng2aVUwYTFlUkhTVVh3dTdOelBRMjRDeU1aNFhuV1k9;NRAiBiAaIQQuGjN/V0Z+WE9EaFtDVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUViWX1ccXRXRWFdVE1z;ODU5OTE5QDMyMzAyZTM0MmUzMGJIWmFEVFFjS0xUMHZaRDNmcGdncm5KRDlKbTN6WW5vOHR6dzR1ak00RDg9;ODU5OTIwQDMyMzAyZTM0MmUzMGlFamtwa1pVaGxJREZZMVl2OFdOd1owT3lvOUc2LzhLRjgyYVp6N1hYcXc9;Mgo+DSMBMAY9C3t2VVhkQlFacl5JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjW31fcHZWR2RcVkE=;ODU5OTIyQDMyMzAyZTM0MmUzMExWbXh2YktuN29wUGY1d0VidVNJQXJCZ2FuSUo3a1BZWFFXN0RmYzE0RW89;ODU5OTIzQDMyMzAyZTM0MmUzMEtYSVJ4ZFpQSTZLU1BzbUVPbHFrakFJN1Q5Q01Ld0hLa05Pcis0Y1lwQUk9;ODU5OTI0QDMyMzAyZTM0MmUzMGJIWmFEVFFjS0xUMHZaRDNmcGdncm5KRDlKbTN6WW5vOHR6dzR1ak00RDg9');
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 77044:
/*!*********************************!*\
  !*** ./src/models/accesorio.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccesorioModel": () => (/* binding */ AccesorioModel)
/* harmony export */ });
class AccesorioModel {
}


/***/ }),

/***/ 34976:
/*!*****************************!*\
  !*** ./src/models/lunas.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LunasModel": () => (/* binding */ LunasModel)
/* harmony export */ });
class LunasModel {
}


/***/ }),

/***/ 43514:
/*!********************************!*\
  !*** ./src/models/monturas.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonturasModel": () => (/* binding */ MonturasModel)
/* harmony export */ });
class MonturasModel {
}


/***/ }),

/***/ 63782:
/*!*********************************!*\
  !*** ./src/utils/sweetalert.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sweetalert": () => (/* binding */ Sweetalert)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

function Sweetalert(type, text) {
    switch (type) {
        case "error":
            const Toast1 = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                    toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                }
            });
            Toast1.fire({
                icon: 'error',
                title: text
            });
            break;
        case "success":
            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                    toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                }
            });
            Toast.fire({
                icon: 'success',
                title: text
            });
            break;
        case "loading":
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                allowOutsideClick: false,
                text: text
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
            break;
        case "close":
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
            break;
        default:
            break;
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map