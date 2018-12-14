(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n    width : 100%;\n}\n\n.label-peso{\n    font-weight: bold;\n    font-size: 1.1em;\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Scheda elettronica</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" href=\"#Addominali\">Addominali</a>\n      <a class=\"nav-item nav-link\" href=\"#Lombari\" *ngIf=\"!flagScheda\">Lombari</a>\n      <a class=\"nav-item nav-link\" href=\"#Polpacci\" *ngIf=\"flagScheda\">Polpacci</a>\n      <a class=\"nav-item nav-link\" href=\"#Gambe\" *ngIf=\"flagScheda\">Gambe</a>\n      <a class=\"nav-item nav-link\" href=\"#Pettorali\" *ngIf=\"!flagScheda\">Pettorali</a>\n      <a class=\"nav-item nav-link\" href=\"#Dorsali\" *ngIf=\"flagScheda\">Dorsali</a>\n      <a class=\"nav-item nav-link\" href=\"#Deltoidi\" *ngIf=\"!flagScheda\">Deltoidi</a>\n      <a class=\"nav-item nav-link\" href=\"#Bicipiti\" *ngIf=\"!flagScheda\">Bicipiti</a>\n      <a class=\"nav-item nav-link\" href=\"#Tricipiti\" *ngIf=\"flagScheda\">Tricipiti</a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n\n  <h4 class=\"display-4\">\n    Scheda <span *ngIf=\"flagScheda\">A</span><span *ngIf=\"!flagScheda\">B</span>\n  </h4>\n  <div class=\"\">\n    <button type=\"button\" class=\"btn\" (click)=\"cambiaScheda()\">Cambia scheda</button>\n  </div>\n  \n  <div *ngFor=\"let bodyPart of schedaAttiva\" class=\"body-part\" [id]=\"bodyPart.title\">\n    <hr />\n    <div class=\"sec-title\">\n      <p class=\"lead\">\n        {{bodyPart.title}}\n      </p>\n    </div>\n  \n    <div *ngFor=\"let exercise of bodyPart.esercizi\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-8\">\n            <div class=\"row\">\n              <p>{{exercise.descrizione}}</p>\n            </div>\n            <div class=\"row\">\n              <p>{{exercise.ripetizioni}} x {{exercise.serie}}</p>\n            </div>\n          </div>\n          <div class=\"col-4 text-center pt-3 label-peso\">\n            <p>{{exercise.peso}}</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row mb-3\">\n        <div class=\"col-8\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"completaSerie(schedaAttiva.indexOf(bodyPart), bodyPart.esercizi.indexOf(exercise))\">Completa serie</button>\n        </div>\n        <div class=\"col-4\">\n          <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"aumentaPeso(schedaAttiva.indexOf(bodyPart), bodyPart.esercizi.indexOf(exercise))\">+</button>\n        </div>\n      </div>\n      <div class=\"row mb-3\">\n        <div class=\"col-8\">\n          <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"saltaEsercizio(schedaAttiva.indexOf(bodyPart), bodyPart.esercizi.indexOf(exercise))\">Salta</button>\n        </div>\n        <div class=\"col-4\">\n          <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"diminuisciPeso(schedaAttiva.indexOf(bodyPart), bodyPart.esercizi.indexOf(exercise))\">-</button>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.scheda_A = [
            {
                "title": "Addominali",
                "esercizi": [
                    {
                        "descrizione": "Parallele",
                        "ripetizioni": 15,
                        "serie": 3,
                        "peso": 0
                    },
                    {
                        "descrizione": "Crunch",
                        "ripetizioni": 15,
                        "serie": 3,
                        "peso": 0
                    }
                ]
            },
            {
                "title": "Polpacci",
                "esercizi": [
                    {
                        "descrizione": "Donkey",
                        "ripetizioni": 15,
                        "serie": 3,
                        "peso": 40
                    }
                ]
            },
            {
                "title": "Gambe",
                "esercizi": [
                    {
                        "descrizione": "Squat",
                        "ripetizioni": 12,
                        "serie": 4,
                        "peso": 20
                    },
                    {
                        "descrizione": "Leg extension",
                        "ripetizioni": 10,
                        "serie": 3,
                        "peso": 45
                    }
                ]
            },
            {
                "title": "Dorsali",
                "esercizi": [
                    {
                        "descrizione": "Lateral machine",
                        "ripetizioni": 12,
                        "serie": 4,
                        "peso": 45
                    },
                    {
                        "descrizione": "Rematore",
                        "ripetizioni": 10,
                        "serie": 3,
                        "peso": 8
                    }
                ]
            },
            {
                "title": "Tricipiti",
                "esercizi": [
                    {
                        "descrizione": "Manubri controllati",
                        "ripetizioni": 12,
                        "serie": 4,
                        "peso": 7
                    },
                    {
                        "descrizione": "Cavi inversi",
                        "ripetizioni": 10,
                        "serie": 3,
                        "peso": 15
                    }
                ]
            }
        ];
        this.scheda_B = [
            {
                "title": "Addominali",
                "esercizi": [
                    {
                        "descrizione": "Parallele",
                        "ripetizioni": 15,
                        "serie": 3,
                        "peso": 0
                    },
                    {
                        "descrizione": "Crunch",
                        "ripetizioni": 15,
                        "serie": 3,
                        "peso": 0
                    }
                ]
            },
            {
                "title": "Dorsali",
                "esercizi": [
                    {
                        "descrizione": "Panca rossa",
                        "ripetizioni": 15,
                        "serie": 3,
                        "peso": 0
                    }
                ]
            },
            {
                "title": "Pettorali",
                "esercizi": [
                    {
                        "descrizione": "Panca piana",
                        "ripetizioni": 12,
                        "serie": 4,
                        "peso": 10
                    },
                    {
                        "descrizione": "Panca 30",
                        "ripetizioni": 10,
                        "serie": 3,
                        "peso": 10
                    }
                ]
            },
            {
                "title": "Deltoidi",
                "esercizi": [
                    {
                        "descrizione": "Croci",
                        "ripetizioni": 12,
                        "serie": 4,
                        "peso": 5
                    },
                    {
                        "descrizione": "Alzate frontali",
                        "ripetizioni": 10,
                        "serie": 3,
                        "peso": 5
                    }
                ]
            },
            {
                "title": "Bicipiti",
                "esercizi": [
                    {
                        "descrizione": "Bilanciere",
                        "ripetizioni": 12,
                        "serie": 4,
                        "peso": 22
                    },
                    {
                        "descrizione": "Manubri controllati",
                        "ripetizioni": 10,
                        "serie": 3,
                        "peso": 8
                    }
                ]
            }
        ];
        this.flagScheda = true; // true A, false B
        var self = this;
        self.schedaAttiva = self.scheda_A;
        /* CONTROLLI CACHE */
        //let cachedScheda = localStorage.getItem('schedaAttiva');
        //if(!cachedScheda) {
        //  self.schedaAttiva = self.scheda_A.valueOf();
        //  localStorage.setItem('schedaAttiva', self.schedaAttiva);
        //}
        //else
        //  self.schedaAttiva = cachedScheda;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.cambiaScheda = function () {
        var self = this;
        if (self.flagScheda) {
            self.schedaAttiva = self.scheda_B;
            self.flagScheda = false;
        }
        else {
            self.schedaAttiva = self.scheda_A;
            self.flagScheda = true;
        }
        console.log(self.scheda_A);
        console.log(self.scheda_B);
        console.log(self.flagScheda);
    };
    MainComponent.prototype.completaSerie = function (i, j) {
        var self = this;
        console.log("Serie completata");
        if (self.schedaAttiva[i].esercizi[j].serie > 1) {
            self.schedaAttiva[i].esercizi[j].serie--;
        }
        else {
            self.schedaAttiva[i].esercizi[j].serie = 0;
            /* nascondi sezione */
        }
        /* Salva in cache */
        localStorage.setItem('schedaAttiva', self.schedaAttiva);
    };
    MainComponent.prototype.saltaEsercizio = function (i, j) {
        var self = this;
        console.log("Esercizio saltato");
        self.schedaAttiva[i].esercizi[j].serie = 0;
        /* nascondi sezione */
        /* Salva in cache */
        localStorage.setItem('schedaAttiva', self.schedaAttiva);
    };
    MainComponent.prototype.aumentaPeso = function (i, j) {
        var self = this;
        console.log("Aumenta peso");
        self.schedaAttiva[i].esercizi[j].peso++;
        /* Salva in cache */
        localStorage.setItem('schedaAttiva', self.schedaAttiva);
    };
    MainComponent.prototype.diminuisciPeso = function (i, j) {
        var self = this;
        console.log("Diminuisci peso");
        if (self.schedaAttiva[i].esercizi[j].peso > 0) {
            self.schedaAttiva[i].esercizi[j].peso--;
        }
        /* Salva in cache */
        localStorage.setItem('schedaAttiva', self.schedaAttiva);
    };
    MainComponent.prototype.scrollingTo = function (id) {
        var delay = 1000;
        var offset = 70;
        $('html, body').animate({
            scrollTop: $("#" + id).offset().top - offset
        }, delay);
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());

// newVariable = originalVariable.valueOf();
// for objects you can use, b = Object.assign({},a);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/ARDbones/SchedaElettronica/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map