function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n    <hr>\n    <app-footer class=\"footer\"></app-footer>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/app-card/app-card.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/app-card/app-card.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonAppCardAppCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card card-container\">\n    <div style=\"background-image: url('assets/images/modules/{{cardImage}}')\" class=\"card-body card-image\">\n        <h3 class=\"card-title\">{{title}}</h3>\n<!--        <p class=\"card-text\">{{content}}</p>-->\n        <!--        <p class=\"lead card-button\">-->\n        <!--            <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Know more</a>-->\n        <!--        </p>-->\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/app-tile/app-tile.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/app-tile/app-tile.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonAppTileAppTileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tile job\">\n    <div class=\"header\">\n        <div class=\"count\"><i class=\"{{icon}}\"></i></div>\n    </div>\n    <div class=\"body\">\n        <div class=\"title\">{{heading}}</div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/carousel/carousel.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/carousel/carousel.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonCarouselCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n    <ul class=\"carousel-indicators\">\n        <li data-target=\"#demo\" *ngFor=\"let model of models; let i = index\" [attr.data-slide-to]=\"i\"\n            ngClass=\"i == 0 ? 'active' : ''\"></li>\n    </ul>\n\n    <div class=\"carousel-inner\">\n        <div *ngFor=\"let model of models\" class=\"carousel-item carousel-size-lg\"\n             [ngStyle]=\"getImageUrl(model)\" [ngClass]=\"{'active': model.id === 0}\">\n            <div class=\"carousel-content-container\">\n                <div class=\"carousel-content-heading\">\n                    <h1 class=\"carousel-content-text\" [ngStyle]=\"getTextScheme(model)\">{{model.title}}</h1>\n                </div>\n\n                <hr [ngStyle]=\"getBackgroundScheme(model)\">\n\n                <div class=\"carousel-content-sub\">\n                    <h5 style=\"word-spacing: 10px;\" class=\"carousel-subcontent-text\" [ngStyle]=\"getTextScheme(model)\">{{model.content}}</h5>\n                </div>\n\n                <div class=\"know-link\">\n                    <a class=\"btn btn-primary btn-md\" href=\"#\" role=\"button\">{{buttonText}}</a>\n                </div>\n            </div>\n\n\n        </div>\n\n\n        <!-- Left and right controls -->\n        <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\"></span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\"></span>\n        </a>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"contentLoaded\">\n    <footer class=\"site-footer\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-8\">\n                    <h4 class=\"site-footer-header\">About</h4>\n                    <p class=\"text-justify\">Astro Pundit is established to fullfil vision to eradicate the myths related to Astrology and Vastu . The Knowledge should bring light and prosperity in individual life..</p>\n                </div>\n\n                <!--            <div class=\"col-xs-6 col-md-3\">-->\n                <!--                <h6 class=\"site-footer-header\">Categories</h6>-->\n                <!--                <ul class=\"footer-links\">-->\n                <!--                    <li><a href=\"#\">Category 1</a></li>-->\n                <!--                    <li><a href=\"#\">Category 2</a></li>-->\n                <!--                    <li><a href=\"#\">Category 3</a></li>-->\n                <!--                    <li><a href=\"#\">Category 4</a></li>-->\n                <!--                    <li><a href=\"#\">Category 5</a></li>-->\n                <!--                    <li><a href=\"#\">Category 6</a></li>-->\n                <!--                </ul>-->\n                <!--            </div>-->\n\n                <div class=\"col-xs-6 col-md-4\">\n                    <h6 class=\"site-footer-header\">Quick Links</h6>\n                    <ul class=\"footer-links\">\n                        <li><a href=\"#\">About Us</a></li>\n                        <li><a href=\"#\">Contact Us</a></li>\n                        <li><a href=\"#\">Contribute</a></li>\n                        <li><a href=\"#\">Privacy Policy</a></li>\n                        <li><a href=\"#\">Disclaimer</a></li>\n                    </ul>\n                </div>\n            </div>\n            <hr>\n        </div>\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-8 col-sm-6 col-xs-12\">\n                    <p class=\"copyright-text\">Copyright &copy; {{year}} All Rights Reserved by\n                        <a href=\"#\">{{common.brand}}</a>.\n                    </p>\n                </div>\n\n                <div class=\"col-md-4 col-sm-6 col-xs-12\">\n                    <ul class=\"social-icons\">\n                        <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                        <li><a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                        <li><a class=\"instagram\" href=\"#\"><i class=\"fa fa-instagram\"></i></a></li>\n                        <li><a class=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"contentLoaded\">\n    <nav class=\"navbar navbar-expand-lg\">\n        <a class=\"navbar-brand\" href=\"#\"><h1>{{common.brand}}</h1></a>\n\n        <!--    Uncomment the below snippet if navigation is needed -->\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav ml-auto\">\n                <!--                <li class=\"nav-item\">-->\n                <!--                    <a class=\"nav-link\" href=\"#\">Home</a>-->\n                <!--                </li>-->\n                <!--                <li class=\"nav-item\">-->\n                <!--                    <a class=\"nav-link\" href=\"#\">About</a>-->\n                <!--                </li>-->\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" data-toggle=\"dropdown\">\n                        Language / भाषा\n                    </a>\n                    <div class=\"dropdown-menu\">\n                        <a class=\"dropdown-item\" (click)=\"chooseLanguage('en')\">English</a>\n                        <a class=\"dropdown-item\" (click)=\"chooseLanguage('hi')\">हिन्दी</a>\n                    </div>\n                </li>\n                <!--                <li class=\"nav-item\">-->\n                <!--                    <a class=\"nav-link\" href=\"#\">Contact</a>-->\n                <!--                </li>-->\n            </ul>\n        </div>\n    </nav>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"contentLoaded\">\n    <app-carousel [button]=\"common.knowMore\" [models]=\"appServices\" size=\"lg\"></app-carousel>\n    <h2 class=\"title\">{{aboutUsTitle}}</h2>\n\n    <hr>\n\n    <p *ngFor=\"let para of aboutUsContent\" class=\"lead\">{{para}}</p>\n    <h2 *ngIf=\"lang === 'en'\" class=\"title\">{{common.whyChooseUs}}</h2>\n\n    <hr>\n\n    <div class=\"tile-container\">\n        <app-tile *ngFor=\"let tile of tileContent1\" icon=\"{{tile.icon}}\" heading=\"{{tile.title}}\"></app-tile>\n    </div>\n\n    <div class=\"tile-container\">\n        <app-tile *ngFor=\"let tile of tileContent2\" icon=\"{{tile.icon}}\" heading=\"{{tile.title}}\"></app-tile>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/home/home.component */
    "./src/app/modules/home/home.component.ts");

    var routes = [{
      path: '**',
      component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(appService) {
        _classCallCheck(this, AppComponent);

        this.appService = appService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.appService.getLanguage();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _modules_services_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/services.module */
    "./src/app/modules/services.module.ts");
    /* harmony import */


    var _common_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./common/shared.module */
    "./src/app/common/shared.module.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _modules_services_module__WEBPACK_IMPORTED_MODULE_5__["ServicesModule"], _common_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppService = /*#__PURE__*/function () {
      function AppService(cookieService, http) {
        _classCallCheck(this, AppService);

        this.cookieService = cookieService;
        this.http = http;
        this.lang = 'en';
      }

      _createClass(AppService, [{
        key: "getConfig",
        value: function getConfig() {
          return this.common;
        }
      }, {
        key: "readAssets",
        value: function readAssets(content) {
          this.getLanguage();
          var url;

          switch (content) {
            case "modules":
              {
                url = this.lang === 'en' ? "../assets/i8n/en/services.json" : "../assets/i8n/hi/services.json";
                return this.getJSON(url);
              }

            case "about":
              {
                url = this.lang === 'en' ? "../assets/i8n/en/about.json" : "../assets/i8n/hi/about.json";
                return this.getJSON(url);
              }

            case "tiles":
              {
                url = this.lang === 'en' ? "../assets/i8n/en/tile-content.json" : "../assets/i8n/hi/tile-content.json";
                return this.getJSON(url);
              }

            case "common":
              {
                url = this.lang === 'en' ? "../assets/i8n/en/common.json" : "../assets/i8n/hi/common.json";
                return this.getJSON(url);
              }
          }
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(lang) {
          this.cookieService["delete"]("astro-lang");
          this.cookieService.set("astro-lang", lang);
          this.lang = lang;
        }
      }, {
        key: "getLanguage",
        value: function getLanguage() {
          var langStored = this.cookieService.get("astro-lang");
          if (langStored) this.lang = langStored;
          return this.lang;
        }
      }, {
        key: "getJSON",
        value: function getJSON(url) {
          return this.http.get(url);
        }
      }]);

      return AppService;
    }();

    AppService.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppService);
    /***/
  },

  /***/
  "./src/app/common/app-card/app-card.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/common/app-card/app-card.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonAppCardAppCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-container {\n  height: 300px;\n}\n.card-container:hover {\n  box-shadow: 5px 10px #868e96;\n  transition: all 0.2s linear;\n  cursor: pointer;\n}\n.card-container .card-button {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.card-container .card-image {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.card-container .card-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hd2F0YTAyL215X3Byb2plY3RzL2FzdHJvLXByb2plY3Qvc3JjL2FwcC9jb21tb24vYXBwLWNhcmQvYXBwLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9hcHAtY2FyZC9hcHAtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUNERjtBREdFO0VBQ0UsNEJBQUE7RUFHQSwyQkFBQTtFQUNBLGVBQUE7QUNESjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FES0U7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNISjtBRE1FO0VBQ0Usa0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9hcHAtY2FyZC9hcHAtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdXRpbGl0aWVzL2NvbG9ycGFsZXR0ZVwiO1xuXG4uY2FyZC1jb250YWluZXIge1xuICBoZWlnaHQ6IDMwMHB4O1xuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4ICRncmF5LTYwMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jYXJkLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJVxuICB9XG5cbiAgLmNhcmQtaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cblxuICAuY2FyZC10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59IiwiLmNhcmQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbi5jYXJkLWNvbnRhaW5lcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDVweCAxMHB4ICM4NjhlOTY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZC1pbWFnZSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/common/app-card/app-card.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/common/app-card/app-card.component.ts ***!
    \*******************************************************/

  /*! exports provided: AppCardComponent */

  /***/
  function srcAppCommonAppCardAppCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppCardComponent", function () {
      return AppCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppCardComponent = /*#__PURE__*/function () {
      function AppCardComponent() {
        _classCallCheck(this, AppCardComponent);
      }

      _createClass(AppCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppCardComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title')], AppCardComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('content')], AppCardComponent.prototype, "content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cardImage')], AppCardComponent.prototype, "cardImage", void 0);
    AppCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/app-card/app-card.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app-card.component.scss */
      "./src/app/common/app-card/app-card.component.scss"))["default"]]
    })], AppCardComponent);
    /***/
  },

  /***/
  "./src/app/common/app-tile/app-tile.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/common/app-tile/app-tile.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonAppTileAppTileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tile {\n  width: 160px;\n  height: 180px;\n  border-radius: 4px;\n  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.15);\n  margin-top: 20px;\n  margin-left: 20px;\n  float: left;\n}\n\n.tile.wide {\n  width: 340px;\n}\n\n.tile .header {\n  height: 120px;\n  background-color: #f4f4f4;\n  border-radius: 4px 4px 0 0;\n  color: white;\n  font-weight: 300;\n}\n\n.tile.wide .header .left, .tile.wide .header .right {\n  width: 160px;\n  float: left;\n}\n\n.tile .header .count {\n  font-size: 48px;\n  text-align: center;\n  padding: 10px 0 0;\n}\n\n.tile .header .title {\n  font-size: 20px;\n  text-align: center;\n}\n\n.tile .body {\n  height: 60px;\n  border-radius: 0 0 4px 4px;\n  color: #333333;\n  background-color: white;\n}\n\n.tile .body .title {\n  text-align: center;\n  font-size: 20px;\n  padding-top: 2%;\n}\n\n.tile.wide .body .title {\n  padding: 4%;\n}\n\n.tile.job .header {\n  background: linear-gradient(to bottom right, #ef7f00, #f7b200);\n}\n\n.tile.job .body {\n  color: #ef7f00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hd2F0YTAyL215X3Byb2plY3RzL2FzdHJvLXByb2plY3Qvc3JjL2FwcC9jb21tb24vYXBwLXRpbGUvYXBwLXRpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9hcHAtdGlsZS9hcHAtdGlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsOERBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9hcHAtdGlsZS9hcHAtdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWxlIHtcbiAgd2lkdGg6MTYwcHg7XG4gIGhlaWdodDoxODBweDtcbiAgYm9yZGVyLXJhZGl1czo0cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjE1KTtcbiAgbWFyZ2luLXRvcDoyMHB4O1xuICBtYXJnaW4tbGVmdDoyMHB4O1xuICBmbG9hdDpsZWZ0O1xufVxuXG4udGlsZS53aWRlIHtcbiAgd2lkdGg6IDM0MHB4O1xufVxuXG4udGlsZSAuaGVhZGVyIHtcbiAgaGVpZ2h0OjEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmNGY0ZjQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6MzAwO1xufVxuXG4udGlsZS53aWRlIC5oZWFkZXIgLmxlZnQsIC50aWxlLndpZGUgLmhlYWRlciAucmlnaHQge1xuICB3aWR0aDoxNjBweDtcbiAgZmxvYXQ6bGVmdDtcbn1cblxuLnRpbGUgLmhlYWRlciAuY291bnQge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBwYWRkaW5nOjEwcHggMCAwO1xufVxuXG4udGlsZSAuaGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi50aWxlIC5ib2R5IHtcbiAgaGVpZ2h0OjYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xuICBjb2xvcjojMzMzMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuXG4udGlsZSAuYm9keSAudGl0bGUge1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgZm9udC1zaXplOjIwcHg7XG4gIHBhZGRpbmctdG9wOjIlO1xufVxuXG4udGlsZS53aWRlIC5ib2R5IC50aXRsZSB7XG4gIHBhZGRpbmc6NCU7XG59XG5cbi50aWxlLmpvYiAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2VmN2YwMCwgI2Y3YjIwMCk7XG59XG5cbi50aWxlLmpvYiAgLmJvZHkge1xuICBjb2xvcjogI2VmN2YwMDtcbn1cbiIsIi50aWxlIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGlsZS53aWRlIHtcbiAgd2lkdGg6IDM0MHB4O1xufVxuXG4udGlsZSAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRpbGUud2lkZSAuaGVhZGVyIC5sZWZ0LCAudGlsZS53aWRlIC5oZWFkZXIgLnJpZ2h0IHtcbiAgd2lkdGg6IDE2MHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRpbGUgLmhlYWRlciAuY291bnQge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwIDA7XG59XG5cbi50aWxlIC5oZWFkZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aWxlIC5ib2R5IHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGlsZSAuYm9keSAudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDIlO1xufVxuXG4udGlsZS53aWRlIC5ib2R5IC50aXRsZSB7XG4gIHBhZGRpbmc6IDQlO1xufVxuXG4udGlsZS5qb2IgLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNlZjdmMDAsICNmN2IyMDApO1xufVxuXG4udGlsZS5qb2IgLmJvZHkge1xuICBjb2xvcjogI2VmN2YwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/common/app-tile/app-tile.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/common/app-tile/app-tile.component.ts ***!
    \*******************************************************/

  /*! exports provided: AppTileComponent */

  /***/
  function srcAppCommonAppTileAppTileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppTileComponent", function () {
      return AppTileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppTileComponent = /*#__PURE__*/function () {
      function AppTileComponent() {
        _classCallCheck(this, AppTileComponent);
      }

      _createClass(AppTileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppTileComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("icon")], AppTileComponent.prototype, "icon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("heading")], AppTileComponent.prototype, "heading", void 0);
    AppTileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app-tile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/app-tile/app-tile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app-tile.component.scss */
      "./src/app/common/app-tile/app-tile.component.scss"))["default"]]
    })], AppTileComponent);
    /***/
  },

  /***/
  "./src/app/common/carousel/carousel.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/common/carousel/carousel.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonCarouselCarouselComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".carousel-inner {\n  opacity: 0.7;\n}\n.carousel-inner .carousel-item {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.carousel-inner .know-link {\n  text-align: center;\n}\n.carousel-inner .carousel-content-container {\n  width: 600px;\n  float: right;\n  padding: 10px;\n  margin: 10px;\n}\n.carousel-inner .carousel-content-container .carousel-content-heading {\n  text-align: center;\n}\n.carousel-inner .carousel-content-container .carousel-content-heading .carousel-content-text {\n  font-weight: 600;\n}\n.carousel-inner .carousel-content-container .carousel-content-sub {\n  text-align: center;\n  margin-left: auto;\n  margin-right: 0;\n}\n.carousel-inner .carousel-content-container .carousel-content-sub .carousel-subcontent-text {\n  font-weight: 500;\n}\n.carousel-size-lg {\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hd2F0YTAyL215X3Byb2plY3RzL2FzdHJvLXByb2plY3Qvc3JjL2FwcC9jb21tb24vY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBRENFO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0FDQUo7QURHRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNESjtBREdJO0VBQ0Usa0JBQUE7QUNETjtBREdNO0VBQ0UsZ0JBQUE7QUNEUjtBREtJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNITjtBREtNO0VBQ0UsZ0JBQUE7QUNIUjtBRFNBO0VBQ0UsYUFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWlubmVyIHtcbiAgb3BhY2l0eTogMC43O1xuXG4gIC5jYXJvdXNlbC1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xuICB9XG5cbiAgLmtub3ctbGluayB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNhcm91c2VsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuXG4gICAgLmNhcm91c2VsLWNvbnRlbnQtaGVhZGluZyB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC5jYXJvdXNlbC1jb250ZW50LXRleHQge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJvdXNlbC1jb250ZW50LXN1YiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICAgLmNhcm91c2VsLXN1YmNvbnRlbnQtdGV4dCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jYXJvdXNlbC1zaXplLWxnIHtcbiAgaGVpZ2h0OiA1MDBweDtcbn0iLCIuY2Fyb3VzZWwtaW5uZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uY2Fyb3VzZWwtaW5uZXIgLmtub3ctbGluayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtY29udGVudC1jb250YWluZXIge1xuICB3aWR0aDogNjAwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1jb250ZW50LWNvbnRhaW5lciAuY2Fyb3VzZWwtY29udGVudC1oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1jb250ZW50LWNvbnRhaW5lciAuY2Fyb3VzZWwtY29udGVudC1oZWFkaW5nIC5jYXJvdXNlbC1jb250ZW50LXRleHQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1jb250ZW50LWNvbnRhaW5lciAuY2Fyb3VzZWwtY29udGVudC1zdWIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWNvbnRlbnQtY29udGFpbmVyIC5jYXJvdXNlbC1jb250ZW50LXN1YiAuY2Fyb3VzZWwtc3ViY29udGVudC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNhcm91c2VsLXNpemUtbGcge1xuICBoZWlnaHQ6IDUwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/common/carousel/carousel.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/common/carousel/carousel.component.ts ***!
    \*******************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppCommonCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CarouselComponent = /*#__PURE__*/function () {
      function CarouselComponent() {
        _classCallCheck(this, CarouselComponent);
      }

      _createClass(CarouselComponent, [{
        key: "getImageUrl",
        value: function getImageUrl(model) {
          return {
            'background-image': 'url(' + 'assets/images/modules/' + model.image + ')'
          };
        }
      }, {
        key: "getTextScheme",
        value: function getTextScheme(model) {
          return model.scheme === 'dark' ? {
            'color': 'black'
          } : {
            'color': 'white'
          };
        }
      }, {
        key: "getBackgroundScheme",
        value: function getBackgroundScheme(model) {
          return model.scheme === 'dark' ? {
            'background-color': 'black'
          } : {
            'background-color': 'white'
          };
        }
      }]);

      return CarouselComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("models")], CarouselComponent.prototype, "models", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("size")], CarouselComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("button")], CarouselComponent.prototype, "buttonText", void 0);
    CarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-carousel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/carousel/carousel.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./carousel.component.scss */
      "./src/app/common/carousel/carousel.component.scss"))["default"]]
    })], CarouselComponent);
    /***/
  },

  /***/
  "./src/app/common/footer/footer.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/common/footer/footer.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".site-footer {\n  padding: 45px 0 20px;\n  font-size: 15px;\n  line-height: 24px;\n}\n.site-footer .site-footer hr {\n  border-top-color: #868e96;\n  opacity: 0.5;\n}\n.site-footer .site-footer hr.small {\n  margin: 20px 0;\n}\n.site-footer .site-footer h6 {\n  color: #fff;\n  font-size: 16px;\n  text-transform: uppercase;\n  margin-top: 5px;\n  letter-spacing: 2px;\n}\n.site-footer .site-footer a {\n  color: #343a40;\n}\n.site-footer .site-footer a:hover {\n  color: #3366cc;\n  text-decoration: none;\n}\n.site-footer .footer-links {\n  padding-left: 0;\n  list-style: none;\n}\n.site-footer .site-footer-header {\n  color: orange;\n}\n.site-footer .footer-links li {\n  display: block;\n}\n.site-footer .footer-links a {\n  color: #868e96;\n}\n.site-footer .footer-links a:active, .site-footer .footer-links a:focus, .site-footer .footer-links a:hover {\n  color: #3366cc;\n  text-decoration: none;\n}\n.site-footer .footer-links.inline li {\n  display: inline-block;\n}\n.site-footer .site-footer .social-icons {\n  text-align: right;\n}\n.site-footer .site-footer .social-icons a {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  margin-left: 6px;\n  margin-right: 0;\n  border-radius: 100%;\n  background-color: #343a40;\n}\n.site-footer .copyright-text {\n  padding-top: 10px;\n  margin: 0;\n}\n@media (max-width: 991px) {\n  .site-footer .site-footer [class^=col-] {\n    margin-bottom: 30px;\n  }\n}\n@media (max-width: 767px) {\n  .site-footer .site-footer {\n    padding-bottom: 0;\n  }\n  .site-footer .site-footer .copyright-text, .site-footer .site-footer .social-icons {\n    text-align: center;\n  }\n}\n.site-footer .social-icons {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.site-footer .social-icons li {\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.site-footer .social-icons li.title {\n  margin-right: 15px;\n  text-transform: uppercase;\n  color: #f8f9fa;\n  font-weight: 700;\n  font-size: 13px;\n}\n.site-footer .social-icons a {\n  font-size: 30px;\n  display: inline-block;\n  line-height: 44px;\n  width: 44px;\n  height: 44px;\n  text-align: center;\n  margin-right: 8px;\n  border-radius: 100%;\n  transition: all 0.2s linear;\n}\n.site-footer .social-icons.size-sm a {\n  line-height: 34px;\n  height: 34px;\n  width: 34px;\n  font-size: 14px;\n}\n.site-footer .social-icons a.facebook {\n  color: #3b5998;\n}\n.site-footer .social-icons a.facebook:hover {\n  color: white;\n  background-color: #3b5998;\n}\n.site-footer .social-icons a.twitter {\n  color: #00aced;\n}\n.site-footer .social-icons a.twitter:hover {\n  color: white;\n  background-color: #00aced;\n}\n.site-footer .social-icons a.instagram {\n  color: #ea4c89;\n}\n.site-footer .social-icons a.instagram:hover {\n  color: white;\n  background-color: #ea4c89;\n}\n.site-footer .social-icons a.linkedin {\n  color: #007bb6;\n}\n.site-footer .social-icons a.linkedin:hover {\n  color: white;\n  background-color: #007bb6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hd2F0YTAyL215X3Byb2plY3RzL2FzdHJvLXByb2plY3Qvc3JjL2FwcC9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXdhdGEwMi9teV9wcm9qZWN0cy9hc3Ryby1wcm9qZWN0L3NyYy91dGlsaXRpZXMvX2NvbG9ycGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNERjtBREdFO0VBQ0UseUJFTk87RUZPUCxZQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7QUNGSjtBREtFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0hKO0FETUU7RUFDRSxjRXRCTztBRGtCWDtBRE9FO0VBQ0UsY0VyQlE7RUZzQlIscUJBQUE7QUNMSjtBRFFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDTko7QURTRTtFQUNFLGFFNUJNO0FEcUJWO0FEVUU7RUFDRSxjQUFBO0FDUko7QURXRTtFQUNFLGNFN0NPO0FEb0NYO0FEWUU7RUFDRSxjRTNDUTtFRjRDUixxQkFBQTtBQ1ZKO0FEYUU7RUFDRSxxQkFBQTtBQ1hKO0FEY0U7RUFDRSxpQkFBQTtBQ1pKO0FEZUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkU1REc7QUQrQ1A7QURnQkU7RUFDRSxpQkFBQTtFQUNBLFNBQUE7QUNkSjtBRGlCRTtFQUNFO0lBQ0UsbUJBQUE7RUNmSjtBQUNGO0FEa0JFO0VBQ0U7SUFDRSxpQkFBQTtFQ2hCSjtFRGtCRTtJQUNFLGtCQUFBO0VDaEJKO0FBQ0Y7QURtQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2pCSjtBRG9CRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNsQko7QURxQkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0UzR087RUY0R1AsZ0JBQUE7RUFDQSxlQUFBO0FDbkJKO0FEc0JFO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUdBLDJCQUFBO0FDcEJKO0FEdUJFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNyQko7QUR5Qkk7RUFDRSxjRXpISztBRGtHWDtBRHlCTTtFQUNFLFlBQUE7RUFDQSx5QkU3SEc7QURzR1g7QUQyQkk7RUFDRSxjRS9ISTtBRHNHVjtBRDJCTTtFQUNFLFlBQUE7RUFDQSx5QkVuSUU7QUQwR1Y7QUQ2Qkk7RUFDRSxjRXpJTTtBRDhHWjtBRDZCTTtFQUNFLFlBQUE7RUFDQSx5QkU3SUk7QURrSFo7QUQrQkk7RUFDRSxjRW5KSztBRHNIWDtBRCtCTTtFQUNFLFlBQUE7RUFDQSx5QkV2Skc7QUQwSFgiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdXRpbGl0aWVzL2NvbG9ycGFsZXR0ZVwiO1xuXG4uc2l0ZS1mb290ZXIge1xuICBwYWRkaW5nOiA0NXB4IDAgMjBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcblxuICAuc2l0ZS1mb290ZXIgaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICRncmF5LTYwMDtcbiAgICBvcGFjaXR5OiAwLjVcbiAgfVxuXG4gIC5zaXRlLWZvb3RlciBoci5zbWFsbCB7XG4gICAgbWFyZ2luOiAyMHB4IDBcbiAgfVxuXG4gIC5zaXRlLWZvb3RlciBoNiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHhcbiAgfVxuXG4gIC5zaXRlLWZvb3RlciBhIHtcbiAgICBjb2xvcjogJGdyYXktODAwO1xuICB9XG5cbiAgLnNpdGUtZm9vdGVyIGE6aG92ZXIge1xuICAgIGNvbG9yOiAkYmx1ZS1kYXJrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5mb290ZXItbGlua3Mge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lXG4gIH1cblxuICAuc2l0ZS1mb290ZXItaGVhZGVyIHtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gIH1cblxuICAuZm9vdGVyLWxpbmtzIGxpIHtcbiAgICBkaXNwbGF5OiBibG9ja1xuICB9XG5cbiAgLmZvb3Rlci1saW5rcyBhIHtcbiAgICBjb2xvcjogJGdyYXktNjAwXG4gIH1cblxuICAuZm9vdGVyLWxpbmtzIGE6YWN0aXZlLCAuZm9vdGVyLWxpbmtzIGE6Zm9jdXMsIC5mb290ZXItbGlua3MgYTpob3ZlciB7XG4gICAgY29sb3I6ICRibHVlLWRhcms7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLmZvb3Rlci1saW5rcy5pbmxpbmUgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICB9XG5cbiAgLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0XG4gIH1cblxuICAuc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyBhIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya1xuICB9XG5cbiAgLmNvcHlyaWdodC10ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW46IDBcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5zaXRlLWZvb3RlciBbY2xhc3NePWNvbC1dIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHhcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuc2l0ZS1mb290ZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDBcbiAgICB9XG4gICAgLnNpdGUtZm9vdGVyIC5jb3B5cmlnaHQtdGV4dCwgLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgfVxuICB9XG5cbiAgLnNvY2lhbC1pY29ucyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZVxuICB9XG5cbiAgLnNvY2lhbC1pY29ucyBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDRweFxuICB9XG5cbiAgLnNvY2lhbC1pY29ucyBsaS50aXRsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICRncmF5LTEwMDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTNweFxuICB9XG5cbiAgLnNvY2lhbC1pY29ucyBhIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyXG4gIH1cblxuICAuc29jaWFsLWljb25zLnNpemUtc20gYSB7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIHdpZHRoOiAzNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweFxuICB9XG5cbiAgLnNvY2lhbC1pY29ucyB7XG4gICAgYS5mYWNlYm9vayB7XG4gICAgICBjb2xvcjogJGZhY2Vib29rO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmFjZWJvb2tcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhLnR3aXR0ZXIge1xuICAgICAgY29sb3I6ICR0d2l0dGVyO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHdpdHRlclxuICAgICAgfVxuICAgIH1cblxuICAgIGEuaW5zdGFncmFtIHtcbiAgICAgIGNvbG9yOiAkaW5zdGFncmFtO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5zdGFncmFtXG4gICAgICB9XG4gICAgfVxuXG4gICAgYS5saW5rZWRpbiB7XG4gICAgICBjb2xvcjogJGxpbmtlZGluO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlua2VkaW5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiLnNpdGUtZm9vdGVyIHtcbiAgcGFkZGluZzogNDVweCAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4uc2l0ZS1mb290ZXIgLnNpdGUtZm9vdGVyIGhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzg2OGU5NjtcbiAgb3BhY2l0eTogMC41O1xufVxuLnNpdGUtZm9vdGVyIC5zaXRlLWZvb3RlciBoci5zbWFsbCB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnNpdGUtZm9vdGVyIC5zaXRlLWZvb3RlciBoNiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5zaXRlLWZvb3RlciAuc2l0ZS1mb290ZXIgYSB7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuLnNpdGUtZm9vdGVyIC5zaXRlLWZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6ICMzMzY2Y2M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zaXRlLWZvb3RlciAuZm9vdGVyLWxpbmtzIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnNpdGUtZm9vdGVyIC5zaXRlLWZvb3Rlci1oZWFkZXIge1xuICBjb2xvcjogb3JhbmdlO1xufVxuLnNpdGUtZm9vdGVyIC5mb290ZXItbGlua3MgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zaXRlLWZvb3RlciAuZm9vdGVyLWxpbmtzIGEge1xuICBjb2xvcjogIzg2OGU5Njtcbn1cbi5zaXRlLWZvb3RlciAuZm9vdGVyLWxpbmtzIGE6YWN0aXZlLCAuc2l0ZS1mb290ZXIgLmZvb3Rlci1saW5rcyBhOmZvY3VzLCAuc2l0ZS1mb290ZXIgLmZvb3Rlci1saW5rcyBhOmhvdmVyIHtcbiAgY29sb3I6ICMzMzY2Y2M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zaXRlLWZvb3RlciAuZm9vdGVyLWxpbmtzLmlubGluZSBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5zaXRlLWZvb3RlciAuc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnNpdGUtZm9vdGVyIC5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIGEge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xufVxuLnNpdGUtZm9vdGVyIC5jb3B5cmlnaHQtdGV4dCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW46IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnNpdGUtZm9vdGVyIC5zaXRlLWZvb3RlciBbY2xhc3NePWNvbC1dIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNpdGUtZm9vdGVyIC5zaXRlLWZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbiAgLnNpdGUtZm9vdGVyIC5zaXRlLWZvb3RlciAuY29weXJpZ2h0LXRleHQsIC5zaXRlLWZvb3RlciAuc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyBsaS50aXRsZSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmOGY5ZmE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIGEge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zLnNpemUtc20gYSB7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAzNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyBhLmZhY2Vib29rIHtcbiAgY29sb3I6ICMzYjU5OTg7XG59XG4uc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyBhLmZhY2Vib29rOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMgYS50d2l0dGVyIHtcbiAgY29sb3I6ICMwMGFjZWQ7XG59XG4uc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyBhLnR3aXR0ZXI6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFjZWQ7XG59XG4uc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyBhLmluc3RhZ3JhbSB7XG4gIGNvbG9yOiAjZWE0Yzg5O1xufVxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMgYS5pbnN0YWdyYW06aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTRjODk7XG59XG4uc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyBhLmxpbmtlZGluIHtcbiAgY29sb3I6ICMwMDdiYjY7XG59XG4uc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyBhLmxpbmtlZGluOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmI2O1xufSIsIiRncmF5LTEwMDogI2Y4ZjlmYTtcbiRncmF5LTIwMDogI2U5ZWNlZjtcbiRncmF5LTYwMDogIzg2OGU5NjtcbiRncmF5LTgwMDogIzM0M2E0MDtcblxuJHJlZDogI2RjMzU0NTtcbiR5ZWxsb3c6ICNmZmMxMDc7XG4kZ3JlZW46ICMwMDY2MDA7XG4kYmx1ZS1kYXJrOiAjMzM2NmNjO1xuJGN5YW46ICMxN2EyYjg7XG4kZGFyazogIzM0M2E0MDtcbiRwcmltYXJ5OiBvcmFuZ2U7XG5cblxuJGZhY2Vib29rOiAjM2I1OTk4O1xuJGxpbmtlZGluOiAjMDA3YmI2O1xuJGluc3RhZ3JhbTogI2VhNGM4OTtcbiR0d2l0dGVyOiAjMDBhY2VkO1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/common/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/common/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppCommonFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(appService) {
        _classCallCheck(this, FooterComponent);

        this.appService = appService;
        this.year = new Date().getFullYear();
        this.populateContent();
      }

      _createClass(FooterComponent, [{
        key: "populateContent",
        value: function populateContent() {
          this.getCommonContent();
        }
      }, {
        key: "getCommonContent",
        value: function getCommonContent() {
          var _this = this;

          this.appService.readAssets("common").subscribe(function (data) {
            _this.common = data;
            _this.contentLoaded = true;
          });
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/footer/footer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/common/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/common/header/header.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/common/header/header.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/common/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/common/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppCommonHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(appService) {
        _classCallCheck(this, HeaderComponent);

        this.appService = appService;
        this.populateContent();
      }

      _createClass(HeaderComponent, [{
        key: "populateContent",
        value: function populateContent() {
          this.getCommonContent();
        }
      }, {
        key: "getCommonContent",
        value: function getCommonContent() {
          var _this2 = this;

          this.appService.readAssets("common").subscribe(function (data) {
            _this2.common = data;
            _this2.contentLoaded = true;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "chooseLanguage",
        value: function chooseLanguage(lang) {
          this.appService.setLanguage(lang);
          location.reload();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }];
    };

    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/header/header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/common/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/common/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/common/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppCommonSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/common/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/common/footer/footer.component.ts");
    /* harmony import */


    var _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-card/app-card.component */
    "./src/app/common/app-card/app-card.component.ts");
    /* harmony import */


    var _app_tile_app_tile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-tile/app-tile.component */
    "./src/app/common/app-tile/app-tile.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./carousel/carousel.component */
    "./src/app/common/carousel/carousel.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_4__["AppCardComponent"], _app_tile_app_tile_component__WEBPACK_IMPORTED_MODULE_5__["AppTileComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
      exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_4__["AppCardComponent"], _app_tile_app_tile_component__WEBPACK_IMPORTED_MODULE_5__["AppTileComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/modules/home/home.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/modules/home/home.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  text-align: center;\n  margin: 30px;\n}\n\n.tile-container {\n  display: flex;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hd2F0YTAyL215X3Byb2plY3RzL2FzdHJvLXByb2plY3Qvc3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweDtcbn1cblxuLnRpbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHlcbn0iLCIudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweDtcbn1cblxuLnRpbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/home/home.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/home/home.component.ts ***!
    \************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppModulesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(appService, router) {
        _classCallCheck(this, HomeComponent);

        this.appService = appService;
        this.router = router;
        this.appServices = [];
        this.lang = this.appService.getLanguage();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.populateContent();
        }
      }, {
        key: "populateContent",
        value: function populateContent() {
          this.getModules();
          this.getAboutContent();
          this.getTileContent();
          this.getCommonContent();
        }
      }, {
        key: "getModules",
        value: function getModules() {
          var _this3 = this;

          this.appService.readAssets("modules").subscribe(function (data) {
            _this3.appServices = data;
          });
        }
      }, {
        key: "getCommonContent",
        value: function getCommonContent() {
          var _this4 = this;

          this.appService.readAssets("common").subscribe(function (data) {
            _this4.common = data;
            _this4.contentLoaded = true;
          });
        }
      }, {
        key: "getAboutContent",
        value: function getAboutContent() {
          var _this5 = this;

          this.appService.readAssets("about").subscribe(function (data) {
            _this5.aboutUsTitle = data.title;
            _this5.aboutUsContent = data.para;
          });
        }
      }, {
        key: "getTileContent",
        value: function getTileContent() {
          var _this6 = this;

          this.appService.readAssets("tiles").subscribe(function (data) {
            _this6.tileContent1 = data['set1'];
            _this6.tileContent2 = data['set2'];
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/modules/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/modules/services.module.ts":
  /*!********************************************!*\
    !*** ./src/app/modules/services.module.ts ***!
    \********************************************/

  /*! exports provided: ServicesModule */

  /***/
  function srcAppModulesServicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesModule", function () {
      return ServicesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/modules/home/home.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/shared.module */
    "./src/app/common/shared.module.ts");

    var ServicesModule = function ServicesModule() {
      _classCallCheck(this, ServicesModule);
    };

    ServicesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _common_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
      providers: [],
      bootstrap: []
    })], ServicesModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/awata02/my_projects/astro-project/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map