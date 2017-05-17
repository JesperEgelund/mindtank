webpackJsonp([0,4],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(415),
        styles: [__webpack_require__(401)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/about.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(416),
        styles: [__webpack_require__(402)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/app.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(417),
        styles: [__webpack_require__(403)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/home.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(418),
        styles: [__webpack_require__(404)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/login.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectorComponent = (function () {
    function SelectorComponent() {
    }
    SelectorComponent.prototype.ngOnInit = function () {
    };
    return SelectorComponent;
}());
SelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-selector',
        template: __webpack_require__(419),
        styles: [__webpack_require__(405)]
    }),
    __metadata("design:paramtypes", [])
], SelectorComponent);

//# sourceMappingURL=C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/selector.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 217;


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(232);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selector_selector_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__(161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__selector_selector_component__["a" /* SelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__app_routes__["b" /* appRoutingProviders */],
            __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */],
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* HashLocationStrategy */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],]
    })
], AppModule);

//# sourceMappingURL=C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/app.module.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selector_selector_component__ = __webpack_require__(165);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__selector_selector_component__["a" /* SelectorComponent */] },
    { path: 'albert', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: '**', redirectTo: '' }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/app.routes.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(162);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/index.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/environment.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/polyfills.js.map

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(true);
// imports


// module
exports.push([module.i, "/* Medium devices (desktops, laptops of size 992px and down) */ \r\n@media (max-width: 992px) {\r\n\r\n    .display-4 {\r\n        font-size: 16px;\r\n    }\r\n }", "", {"version":3,"sources":["C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/app/about/about.component.styles.css"],"names":[],"mappings":"AAAA,+DAA+D;AAC/D;;IAEI;QACI,gBAAgB;KACnB;EACH","file":"about.component.styles.css","sourcesContent":["/* Medium devices (desktops, laptops of size 992px and down) */ \r\n@media (max-width: 992px) {\r\n\r\n    .display-4 {\r\n        font-size: 16px;\r\n    }\r\n }"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(true);
// imports


// module
exports.push([module.i, "\r\n/* Medium devices (desktops, laptops of size 992px and down) */ \r\n@media (max-width: 992px) { \r\n.navbar-nav {\r\nmargin-top: 40px; \r\nmargin-left: -15px;\r\n}\r\n\r\n.nav-item {\r\n    padding-left: 10px;\r\n}\r\n}", "", {"version":3,"sources":["C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/app/app.component.css"],"names":[],"mappings":";AACA,+DAA+D;AAC/D;AACA;AACA,iBAAiB;AACjB,mBAAmB;CAClB;;AAED;IACI,mBAAmB;CACtB;CACA","file":"app.component.css","sourcesContent":["\r\n/* Medium devices (desktops, laptops of size 992px and down) */ \r\n@media (max-width: 992px) { \r\n.navbar-nav {\r\nmargin-top: 40px; \r\nmargin-left: -15px;\r\n}\r\n\r\n.nav-item {\r\n    padding-left: 10px;\r\n}\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(true);
// imports


// module
exports.push([module.i, "iframe {\r\n    width: 100%;\r\n    height: 500px;\r\n    border: 0;\r\n}\r\n\r\n.chat-interface {\r\n   height: 500px;\r\n\r\n}\r\n.app-panel .card {\r\n    height: 485px;\r\n    display: block;\r\n}\r\n\r\n.display-4 {\r\n font-size: 14px;\r\n font-weight: 300;\r\n color: darkgrey;\r\n}\r\n.app-bio-pic {\r\n    display: block;\r\n    width: 150px;\r\n    height: 150px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n}\r\n\r\nimg {\r\n    margin: 0 auto;\r\n    width: 155px;\r\n}\r\n", "", {"version":3,"sources":["C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/app/home/home.component.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,cAAc;IACd,UAAU;CACb;;AAED;GACG,cAAc;;CAEhB;AACD;IACI,cAAc;IACd,eAAe;CAClB;;AAED;CACC,gBAAgB;CAChB,iBAAiB;CACjB,gBAAgB;CAChB;AACD;IACI,eAAe;IACf,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;CACtB;;AAED;IACI,eAAe;IACf,aAAa;CAChB","file":"home.component.css","sourcesContent":["iframe {\r\n    width: 100%;\r\n    height: 500px;\r\n    border: 0;\r\n}\r\n\r\n.chat-interface {\r\n   height: 500px;\r\n\r\n}\r\n.app-panel .card {\r\n    height: 485px;\r\n    display: block;\r\n}\r\n\r\n.display-4 {\r\n font-size: 14px;\r\n font-weight: 300;\r\n color: darkgrey;\r\n}\r\n.app-bio-pic {\r\n    display: block;\r\n    width: 150px;\r\n    height: 150px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n}\r\n\r\nimg {\r\n    margin: 0 auto;\r\n    width: 155px;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"login.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(true);
// imports


// module
exports.push([module.i, ".card {\r\nbackground-color: white;\r\n}\r\n\r\n.card-text {\r\n    min-height: 4.5rem;\r\n}\r\n\r\n.card:hover {\r\nbackground-color: #F4F4F4;\r\n}\r\nimg {\r\n    margin: 0 auto;\r\n    width: 155px;\r\n}\r\n\r\n.app-bio-pic {\r\n    display: block;\r\n    width: 150px;\r\n    height: 150px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*Small devices (portrait phones, less than 576px)*/\r\n@media (max-width: 575px) {\r\n }\r\n\r\n/*Small devices (landscape phones, less than 768px)*/\r\n@media (max-width: 767px) { \r\n        .card-text {\r\n    font-size: 12px;\r\n    min-height: 6rem;\r\n}\r\n}\r\n\r\n/*// Medium devices (tablets, less than 992px)*/\r\n@media (max-width: 991px) {\r\n    .card-text {\r\n    min-height: none;}}", "", {"version":3,"sources":["C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/app/selector/selector.component.styles.css"],"names":[],"mappings":"AAAA;AACA,wBAAwB;CACvB;;AAED;IACI,mBAAmB;CACtB;;AAED;AACA,0BAA0B;CACzB;AACD;IACI,eAAe;IACf,aAAa;CAChB;;AAED;IACI,eAAe;IACf,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;CACtB;;AAED,oDAAoD;AACpD;EACE;;AAEF,qDAAqD;AACrD;QACQ;IACJ,gBAAgB;IAChB,iBAAiB;CACpB;CACA;;AAED,gDAAgD;AAChD;IACI;IACA,iBAAiB,CAAC,CAAC","file":"selector.component.styles.css","sourcesContent":[".card {\r\nbackground-color: white;\r\n}\r\n\r\n.card-text {\r\n    min-height: 4.5rem;\r\n}\r\n\r\n.card:hover {\r\nbackground-color: #F4F4F4;\r\n}\r\nimg {\r\n    margin: 0 auto;\r\n    width: 155px;\r\n}\r\n\r\n.app-bio-pic {\r\n    display: block;\r\n    width: 150px;\r\n    height: 150px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*Small devices (portrait phones, less than 576px)*/\r\n@media (max-width: 575px) {\r\n }\r\n\r\n/*Small devices (landscape phones, less than 768px)*/\r\n@media (max-width: 767px) { \r\n        .card-text {\r\n    font-size: 12px;\r\n    min-height: 6rem;\r\n}\r\n}\r\n\r\n/*// Medium devices (tablets, less than 992px)*/\r\n@media (max-width: 991px) {\r\n    .card-text {\r\n    min-height: none;}}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"col-12 mx-auto mt-5\">\n<h1>What is this?</h1>\n<p class=\"display-4 mt-4\">\n  MindTank is the brainchild of our team's 54 intense hours at the Startup Weekend Hong Kong #11. An amazing event that took place during the second weekend of May 2017. <br /><br /> Our goal was to design, build, and train a chatbot-representation of a historical figure in less than two days, and this is exactly what we did. \n</p>\n</div>\n</div>\n"

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <nav class=\"navbar navbar-toggleable-md navbar-light\">\r\n    <div class=\"justify-content-between hidden-lg-up\">\r\n    <a class=\"navbar-brand hidden-md-down\" href=\"#\">MindTank</a>\r\n   <button class=\"navbar-toggler navbar-toggler-right mt-4\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-item nav-link\" [routerLink]=\"['']\">MindTank</a>\r\n        </li>\r\n          <li class=\"nav-item active\">\r\n          <a class=\"nav-item nav-link\" [routerLink]=\"['about']\">About</a>\r\n        </li>\r\n        \r\n        <!--\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-item nav-link\" [routerLink]=\"['login']\" *ngIf=\"!auth.authenticated()\">Log In</a>\r\n        </li> \r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-item nav-link\" (click)=\"auth.logout()\" *ngIf=\"auth.authenticated()\">Log Out</a>\r\n        </li>\r\n        -->\r\n      </ul>\r\n    </div>\r\n    </nav>\r\n    </div>\r\n  \r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-interface\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <iframe src=\"https://console.api.ai/api-client/demo/embedded/af7c5168-d8d2-4148-8b79-a8ac441c9ae2\"></iframe>\r\n        </div>\r\n        <div class=\"col-md-4 app-panel\">\r\n            <div class=\"app-bot-bio card pt-4 mb-2\">\r\n               <span class=\"app-bio-pic rounded-circle mx-auto d-block\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg\" alt=\"Responsive image\"></span>\r\n                <div class=\"app-bio card-block mt-3\">\r\n                    <h4 class=\"card-title\">Albert Einstein (1879 – 1955)</h4>\r\n                    <p class=\"card-text lead\">Albert Einstein was a German-born theoretical physicist. He developed the theory of relativity, one of the two pillars of modern physics. Einstein's work is also known for its influence on the philosophy of science.\r\n                    <a class=\"card-link\" href=\"https://en.wikipedia.org/wiki/Albert_Einstein\" target=\"_blank\">Wikipedia</a></p>\r\n                <p class=\"card-text lead\">Suggestions for subjects and viewpoints that mattered to Einstein: <span class=\"topics display-4\">Relativity Theory, Quantum Mechanics, Spirialty, Life and Death</span></p></div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Username</label>\r\n          <input type=\"text\" class=\"form-control\" #username placeholder=\"yours@example.com\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" #password placeholder=\"your password\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-default\" (click)=\"auth.login(username.value, password.value)\">Login</button>\r\n        <button type=\"submit\" class=\"btn btn-default\" (click)=\"auth.signUp(username.value, password.value)\">Sign Up</button>\r\n      </form>\r\n      <button type=\"submit\" class=\"btn btn-default btn-primary\" (click)=\"auth.googleLogin()\">Login with google</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\n  <h1 class=\"display-4 mb-5\">Who would you like to be inspired by today...?</h1>\n  <div class=\"card-deck row\">\n\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-center mb-4\" [routerLink]=\"['albert']\" role=\"button\">\n        <span class=\"app-bio-pic rounded-circle mx-auto d-block mt-4\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg\" alt=\"Responsive image\"></span>\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">Albert Einstein</h4>\n          <p class=\"card-text\">Albert Einstein was a German-born theoretical physicist. He developed the theory of relativity, one of the two\n            pillars of modern physics.</p>\n          <span class=\"btn btn-success\">Chat with Albert</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-center mb-4\">\n        <span class=\"app-bio-pic rounded-circle mx-auto d-block mt-4\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Sigmund_Freud_LIFE.jpg/400px-Sigmund_Freud_LIFE.jpg\" alt=\"Responsive image\"></span>\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">Sigmund Freud</h4>\n          <p class=\"card-text\">Sigmund Freud was an Austrian neurologist and the founder of psychoanalysis. a clinical method for treating psychopathology</p>\n          <a href=\"#\" class=\"btn btn-warning\">Coming Soon</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-center mb-4\">\n        <span class=\"app-bio-pic rounded-circle mx-auto d-block mt-4\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/440px-ErnestHemingway.jpg\" alt=\"Responsive image\"></span>\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">Ernest Hemingway</h4>\n          <p class=\"card-text\">Ernest Miller Hemingway (July 21, 1899 – July 2, 1961) was an American novelist, short story writer, and journalist.</p>\n          <a href=\"#\" class=\"btn btn-warning \">Coming Soon</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-lg-3\">\n      <div class=\"card text-center mb-4\">\n        <span class=\"app-bio-pic rounded-circle mx-auto d-block mt-4\"><img src=\"http://images.wisegeek.com/confucius.jpg\" alt=\"Responsive image\"></span>\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">Confucius</h4>\n          <p class=\"card-text\">Confucius was a Chinese teacher, editor, politician, and philosopher of the Spring and Autumn period of Chinese\n            history.</p>\n          <a href=\"#\" class=\"btn btn-warning\">Coming Soon</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(218);


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DOMAIN = 'jesperegelund.eu.auth0.com';
var CLIENT_ID = 'RI4v412uu7oPcBXvmxkjELZHUpzPOaNh';
var CALLBACK_URL = 'https://jesperegelund.github.io/mindtank/'; // or whatever your callback URL is
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js___default.a({
            domain: DOMAIN,
            clientID: CLIENT_ID,
            callbackOnLocationHash: true,
            callbackURL: CALLBACK_URL
        });
        var result = this.auth0.parseHash(window.location.hash);
        if (result && result.idToken) {
            localStorage.setItem('id_token', result.idToken);
            this.router.navigate(['/home']);
        }
        else if (result && result.error) {
            alert('error: ' + result.error);
        }
    }
    AuthService.prototype.signUp = function (username, password) {
        this.auth0.signup({
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            email: username,
            password: password,
        }, function (err) {
            if (err) {
                alert('something went wrong: ' + err.message);
            }
        });
    };
    ;
    AuthService.prototype.login = function (username, password) {
        this.auth0.login({
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            email: username,
            password: password,
        }, function (err) {
            if (err) {
                alert('something went wrong: ' + err.message);
            }
        });
    };
    AuthService.prototype.googleLogin = function () {
        this.auth0.login({
            connection: 'google-oauth2'
        }, function (err) {
            if (err) {
                alert('something went wrong: ' + err.message);
            }
        });
    };
    AuthService.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token'
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=C:/Users/je/OneDrive/Dokumenter/WebDev/mind-tank/angular2-cli-auth0-example/src/auth.service.js.map

/***/ })

},[462]);
//# sourceMappingURL=main.bundle.js.map