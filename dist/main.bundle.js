webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_components_recap_recap_component__ = __webpack_require__("./src/app/components/recap/recap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_components_listing_listing_component__ = __webpack_require__("./src/app/components/listing/listing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'recap',
        component: __WEBPACK_IMPORTED_MODULE_3_app_components_recap_recap_component__["a" /* RecapComponent */]
    },
    {
        path: 'listing',
        component: __WEBPACK_IMPORTED_MODULE_4_app_components_listing_listing_component__["a" /* ListingComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_electron_service__ = __webpack_require__("./src/app/providers/electron.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animejs__ = __webpack_require__("./node_modules/animejs/anime.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_animejs__);
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
    function AppComponent(electronService, translate) {
        this.electronService = electronService;
        this.translate = translate;
        translate.setDefaultLang('en');
        if (electronService.isElectron()) {
            console.log('Mode electron');
            // Check if electron is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.ipcRenderer);
            // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.childProcess);
        }
        else {
            console.log('Mode web');
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        /* Reveal animation */
        ;
        (function (window) {
            'use strict';
            // Helper vars and functions.
            function extend(a, b) {
                for (var key in b) {
                    if (b.hasOwnProperty(key)) {
                        a[key] = b[key];
                    }
                }
                return a;
            }
            function createDOMEl(type, className, content) {
                var el = document.createElement(type);
                el.className = className || '';
                el.innerHTML = content || '';
                return el;
            }
            /**
             * RevealFx obj.
             */
            function RevealFx(el, options) {
                this.el = el;
                this.options = extend({}, this.options);
                extend(this.options, options);
                this._init();
            }
            /**
             * RevealFx options.
             */
            RevealFx.prototype.options = {
                // If true, then the content will be hidden until it´s "revealed".
                isContentHidden: true,
                // The animation/reveal settings. This can be set initially or passed when calling the reveal method.
                revealSettings: {
                    // Animation direction: left right (lr) || right left (rl) || top bottom (tb) || bottom top (bt).
                    direction: 'lr',
                    // Revealer´s background color.
                    bgcolor: '#f0f0f0',
                    // Animation speed. This is the speed to "cover" and also "uncover" the element (seperately, not the total time).
                    duration: 500,
                    // Animation easing. This is the easing to "cover" and also "uncover" the element.
                    easing: 'easeInOutQuint',
                    // percentage-based value representing how much of the area should be left covered.
                    coverArea: 0,
                    // Callback for when the revealer is covering the element (halfway through of the whole animation).
                    onCover: function (contentEl, revealerEl) { return false; },
                    // Callback for when the animation starts (animation start).
                    onStart: function (contentEl, revealerEl) { return false; },
                    // Callback for when the revealer has completed uncovering (animation end).
                    onComplete: function (contentEl, revealerEl) { return false; }
                }
            };
            /**
             * Init.
             */
            RevealFx.prototype._init = function () {
                this._layout();
            };
            /**
             * Build the necessary structure.
             */
            RevealFx.prototype._layout = function () {
                var position = getComputedStyle(this.el).position;
                if (position !== 'fixed' && position !== 'absolute' && position !== 'relative') {
                    this.el.style.position = 'relative';
                }
                // Content element.
                //this.content = createDOMEl('div', 'block-revealer__content', this.el.innerHTML);
                this.content = this.el.childNodes[0];
                if (this.options.isContentHidden) {
                    this.content.style.opacity = 0;
                }
                // Revealer element (the one that animates)
                this.revealer = createDOMEl('div', 'block-revealer__element', '');
                this.el.classList.add('block-revealer');
                //this.el.innerHTML = '';
                //this.el.appendChild(this.content);
                this.el.appendChild(this.revealer);
            };
            /**
             * Gets the revealer element´s transform and transform origin.
             */
            RevealFx.prototype._getTransformSettings = function (direction) {
                var val, origin, origin_2;
                switch (direction) {
                    case 'lr':
                        val = 'scale3d(0,1,1)';
                        origin = '0 50%';
                        origin_2 = '100% 50%';
                        break;
                    case 'rl':
                        val = 'scale3d(0,1,1)';
                        origin = '100% 50%';
                        origin_2 = '0 50%';
                        break;
                    case 'tb':
                        val = 'scale3d(1,0,1)';
                        origin = '50% 0';
                        origin_2 = '50% 100%';
                        break;
                    case 'bt':
                        val = 'scale3d(1,0,1)';
                        origin = '50% 100%';
                        origin_2 = '50% 0';
                        break;
                    default:
                        val = 'scale3d(0,1,1)';
                        origin = '0 50%';
                        origin_2 = '100% 50%';
                        break;
                }
                ;
                return {
                    // transform value.
                    val: val,
                    // initial and halfway/final transform origin.
                    origin: { initial: origin, halfway: origin_2 },
                };
            };
            /**
             * Reveal animation. If revealSettings is passed, then it will overwrite the options.revealSettings.
             */
            RevealFx.prototype.reveal = function (revealSettings) {
                // Do nothing if currently animating.
                if (this.isAnimating) {
                    return false;
                }
                this.isAnimating = true;
                // Set the revealer element´s transform and transform origin.
                var defaults = {
                    duration: 500,
                    easing: 'easeInOutQuint',
                    delay: 0,
                    bgcolor: '#f0f0f0',
                    direction: 'lr',
                    coverArea: 0
                }, revealSettings = revealSettings || this.options.revealSettings, direction = revealSettings.direction || defaults.direction, transformSettings = this._getTransformSettings(direction);
                this.revealer.style.WebkitTransform = this.revealer.style.transform = transformSettings.val;
                this.revealer.style.WebkitTransformOrigin = this.revealer.style.transformOrigin = transformSettings.origin.initial;
                // Set the Revealer´s background color.
                this.revealer.style.backgroundColor = revealSettings.bgcolor || defaults.bgcolor;
                // Show it. By default the revealer element has opacity = 0 (CSS).
                this.revealer.style.opacity = 1;
                // Animate it.
                var self = this, 
                // Second animation step.
                animationSettings_2 = {
                    complete: function () {
                        self.isAnimating = false;
                        if (typeof revealSettings.onComplete === 'function') {
                            revealSettings.onComplete(self.content, self.revealer);
                        }
                    }
                }, 
                // First animation step.
                animationSettings = {
                    delay: revealSettings.delay || defaults.delay,
                    complete: function () {
                        self.revealer.style.WebkitTransformOrigin = self.revealer.style.transformOrigin = transformSettings.origin.halfway;
                        if (typeof revealSettings.onCover === 'function') {
                            revealSettings.onCover(self.content, self.revealer);
                        }
                        __WEBPACK_IMPORTED_MODULE_3_animejs__(animationSettings_2);
                    }
                };
                animationSettings.targets = animationSettings_2.targets = this.revealer;
                animationSettings.duration = animationSettings_2.duration = revealSettings.duration || defaults.duration;
                animationSettings.easing = animationSettings_2.easing = revealSettings.easing || defaults.easing;
                var coverArea = revealSettings.coverArea || defaults.coverArea;
                if (direction === 'lr' || direction === 'rl') {
                    animationSettings.scaleX = [0, 1];
                    animationSettings_2.scaleX = [1, coverArea / 100];
                }
                else {
                    animationSettings.scaleY = [0, 1];
                    animationSettings_2.scaleY = [1, coverArea / 100];
                }
                if (typeof revealSettings.onStart === 'function') {
                    revealSettings.onStart(self.content, self.revealer);
                }
                __WEBPACK_IMPORTED_MODULE_3_animejs__(animationSettings);
            };
            window.RevealFx = RevealFx;
        })(window);
        /* Fin Reveal animation */
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_electron_service__["a" /* ElectronService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone_mix__ = __webpack_require__("./node_modules/zone.js/dist/zone-mix.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone_mix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone_mix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata__ = __webpack_require__("./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polyfills__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pdf_viewer__ = __webpack_require__("./node_modules/ng2-pdf-viewer/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_electron_service__ = __webpack_require__("./src/app/providers/electron.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_shared_header_header_component__ = __webpack_require__("./src/app/components/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_shared_sidebar_sidebar_component__ = __webpack_require__("./src/app/components/shared/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_listing_listing_component__ = __webpack_require__("./src/app/components/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_recap_recap_component__ = __webpack_require__("./src/app/components/recap/recap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_fileview_fileview_component__ = __webpack_require__("./src/app/components/fileview/fileview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_providers_filelist_service__ = __webpack_require__("./src/app/providers/filelist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Pour eviter erreur: static injector error


// NG Translate


// Service Electron

//Components










// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_shared_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_listing_listing_component__["a" /* ListingComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_recap_recap_component__["a" /* RecapComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_fileview_fileview_component__["a" /* FileviewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_pdf_viewer__["PdfViewerModule"],
                __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (HttpLoaderFactory),
                        deps: [__WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__providers_electron_service__["a" /* ElectronService */], __WEBPACK_IMPORTED_MODULE_20_app_providers_filelist_service__["a" /* FilelistService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n";

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/fileview/fileview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"iframe-block\">\n  <div class=\"iframe-block-inner\">\n      <pdf-viewer [src]=\"fileUrl\"\n                    [(page)]=\"page\"\n                    [rotation]=\"rotation\"\n                    [original-size]=\"originalSize\"\n                    [fit-to-page]=\"fitToPage\"\n                    (after-load-complete)=\"afterLoadComplete($event)\"\n                    [zoom]=\"zoom\"\n                    [show-all]=\"showAll\"\n                    [stick-to-page]=\"stickToPage\"\n                    [render-text]=\"renderText\"\n                    [external-link-target]=\"'blank'\"\n                    [autoresize]=\"autoresize\"\n                    (error)=\"onError($event)\"\n                    (on-progress)=\"onProgress($event)\"\n                    style=\"display: block; max-width: 100%;\">\n    </pdf-viewer>\n    <!--<iframe *ngIf=\"fileUrl\" type=\"application/pdf\" src=\"https://mozilla.github.io/pdf.js/web/viewer.html?file=test.pdf\" frameborder=\"0\"></iframe> Not work-->\n  </div>\n</div>\n ";

/***/ }),

/***/ "./src/app/components/fileview/fileview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/fileview/fileview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_providers_filelist_service__ = __webpack_require__("./src/app/providers/filelist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileviewComponent = (function () {
    function FileviewComponent(fileService) {
        this.fileService = fileService;
        this.pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
        this.page = 1;
        this.rotation = 0;
        this.zoom = 1.0;
        this.originalSize = false;
        this.renderText = false;
        this.isLoaded = false;
        this.stickToPage = false;
        this.showAll = true;
        this.autoresize = false;
        this.fitToPage = false;
        this.isOutlineShown = false;
    }
    FileviewComponent.prototype.ngOnInit = function () {
        //this.pdfSrc = this.fileService.getPDF();
    };
    FileviewComponent.prototype.ngOnChanges = function (changes) {
        var fileSrc = changes.fileUrl;
        console.log('prev value: ', fileSrc.previousValue);
        console.log('got name: ', fileSrc.currentValue);
    };
    FileviewComponent.prototype.onFileSelected = function () {
        var _this = this;
        var img = document.querySelector("#file");
        if (typeof (FileReader) !== 'undefined') {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.pdfSrc = e.target.result;
            };
            reader.readAsArrayBuffer(img.files[0]);
        }
    };
    FileviewComponent.prototype.onError = function (error) {
        console.log(error);
    };
    FileviewComponent.prototype.afterLoadComplete = function (pdf) {
        this.pdf = pdf;
        this.isLoaded = true;
        this.loadOutline();
    };
    FileviewComponent.prototype.loadOutline = function () {
        var _this = this;
        this.pdf.getOutline().then(function (outline) {
            _this.outline = outline;
        });
    };
    FileviewComponent.prototype.onProgress = function (progressData) {
        console.log(progressData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FileviewComponent.prototype, "fileUrl", void 0);
    FileviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fileview',
            template: __webpack_require__("./src/app/components/fileview/fileview.component.html"),
            styles: [__webpack_require__("./src/app/components/fileview/fileview.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_providers_filelist_service__["a" /* FilelistService */]])
    ], FileviewComponent);
    return FileviewComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<main>\n    <section id=\"veille\" class=\"uk-background-cover\" (click)='gotoViewPage()'>\n      <div class=\"logo-animated\">\n        <img src=\"" + __webpack_require__("./src/assets/img/square.jpg") + "\" alt=\"\" class=\"square uk-animation-slide-left-small\">\n        <div class=\"./../../../assets/uk-animation-slide-left-small\">\n          <img src=\"" + __webpack_require__("./src/assets/img/project.png") + "\" alt=\"\" class=\"project\"><br>\n          <img src=\"" + __webpack_require__("./src/assets/img/sub-square.png") + "\" alt=\"\" class=\"sub-square\">\n        </div>\n      </div>\n      <div class=\"btn-block\">\n        <div class=\"block-revealer__content\">\n            <h1 >Touchez l'écran pour commencer</h1>\n        </div>\n      </div>\n    </section>\n</main>\n";

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.container {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  /* pour anciens Chrome et Safari */\n  background-size: cover;\n  /* version standardisée */ }\n  .container .title {\n    color: white;\n    margin: 0;\n    padding: 50px 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var btn_block = new RevealFx(document.querySelector('#veille .btn-block'), {
            revealSettings: {
                bgcolor: '#878787',
                direction: 'lr',
                duration: 500,
                onCover: function (contentEl, revealerEl) {
                    contentEl.style.opacity = 1;
                }
            }
        });
        btn_block.reveal();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent.prototype.gotoViewPage = function () {
        this.router.navigate(['recap']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/listing/listing.component.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"block-revealer__content\">  \n  <div class=\"file-block-inner\">\n    <div *ngFor=\"let File of fileList;let i = index\" \n        (click)=\"gotoFileView($event,i);clicked = (clicked === File ? null :File)\"\n        [class.uk-card-primary]=\"clicked === File\" \n        class=\"file uk-card uk-card-small uk-card-default uk-card-body uk-invisible\">\n      <div  class=\"uk-grid-collapse\" uk-grid>\n        <div class=\"uk-width-auto@m\">\n          <img src=\"" + __webpack_require__("./src/assets/img/pdf.png") + "\" alt=\"\">\n        </div>\n        <div class=\"uk-width-expand@m\">\n          <h5 class=\"uk-text-truncate\">{{ File.name }}</h5>\n        </div>\n        <div class=\"uk-width-auto@m uk-flex uk-flex-middle\">\n          <p class=\"uk-text-muted\">16/01/2018</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ "./src/app/components/listing/listing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/listing/listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListingComponent = (function () {
    function ListingComponent() {
        this.onFileSelectedEvt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ListingComponent.prototype.ngOnInit = function () {
    };
    ListingComponent.prototype.gotoFileView = function (event, index) {
        console.log(event);
        this.onFileSelectedEvt.emit(this.fileList[index]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ListingComponent.prototype, "fileList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ListingComponent.prototype, "onFileSelectedEvt", void 0);
    ListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__("./src/app/components/listing/listing.component.html"),
            styles: [__webpack_require__("./src/app/components/listing/listing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/components/recap/recap.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"home\">\n  <div class=\"home-inner\">\n    <!--Header -->\n    <app-header></app-header>\n    <div class=\"content uk-grid-collapse\" uk-grid>\n      <app-sidebar [foldersList]=\"folders\" (onFolderSelectedEvt)=\"onFolderSelectChange($event)\" class=\"uk-width-1-4@m folder-block\"></app-sidebar>\n      <app-listing [fileList]=\"filesArr\" (onFileSelectedEvt)=\"onFileSelectChange($event)\" class=\"uk-width-1-4@m file-block\"></app-listing>\n      <app-fileview [fileUrl]=\"urlOfSelectedFile\" class=\"uk-width-expand@m\"></app-fileview>\n    </div>\n  </div>\n</section>  ";

/***/ }),

/***/ "./src/app/components/recap/recap.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/recap/recap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_walk__ = __webpack_require__("walk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_walk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_walk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs__ = __webpack_require__("fs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__("path");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_model_folder_model__ = __webpack_require__("./src/app/model/folder.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_model_file_model__ = __webpack_require__("./src/app/model/file.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RecapComponent = (function () {
    function RecapComponent(router) {
        this.router = router;
        this.basePath = __dirname + '../../CSE/';
        this.folders = new Array();
        this.filesArr = new Array();
        this.foldersName = new Array();
    }
    RecapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var folder_block = new RevealFx(document.querySelector('#home .folder-block'), {
            revealSettings: {
                bgcolor: '#878787',
                direction: 'lr',
                duration: 500,
                onCover: function (contentEl, revealerEl) {
                    contentEl.style.opacity = 1;
                }
            }
        });
        folder_block.reveal();
        var logo_block = new RevealFx(document.querySelector('#home .logo-block'), {
            revealSettings: {
                bgcolor: '#cb3a1a',
                direction: 'lr',
                duration: 500,
                onCover: function (contentEl, revealerEl) {
                    contentEl.style.opacity = 1;
                }
            }
        });
        logo_block.reveal();
        var options = {};
        var walker = __WEBPACK_IMPORTED_MODULE_1_walk__["walk"](__WEBPACK_IMPORTED_MODULE_3_path__["resolve"](__dirname, '..', '..', 'CSE'), options);
        walker.on('file', function (root, fileStats, next) {
            __WEBPACK_IMPORTED_MODULE_2_fs__["readFile"](fileStats.name, function () {
                // doStuff
                //console.log('FILES IN THIS DIRECTORIES', fileStats);
                next();
            });
        });
        walker.on('errors', function (root, nodeStatsArray, next) {
            next();
        });
        walker.on('directories', function (root, stat, next) {
            // console.log('root',root);
            console.log('stat Directories', stat);
            var newWalker;
            var _Folder;
            // console.log('LES DOSSIERS: ', stat);
            _this.foldersName = __WEBPACK_IMPORTED_MODULE_4_lodash__["map"](stat, 'name'); // console.log(_.zipObject(['name'], _.map(stat, 'name')));
            _this.foldersName.forEach(function (value) {
                // console.log('value', value);
                __WEBPACK_IMPORTED_MODULE_2_fs__["readdir"](root + '/' + value, function (err, files) {
                    // console.log('Length:', files.length);
                    if (files.length > 0) {
                        newWalker = __WEBPACK_IMPORTED_MODULE_1_walk__["walk"](__WEBPACK_IMPORTED_MODULE_3_path__["resolve"](__dirname, '..', '..', 'CSE', value));
                        var arrFile_1 = [];
                        newWalker.on('file', function (roots, fileStats, nexts) {
                            // console.log('The roots', roots);
                            console.log(fileStats);
                            if ((fileStats.name).substr(-3) === 'pdf') {
                                __WEBPACK_IMPORTED_MODULE_2_fs__["readFile"](fileStats.name, function () {
                                    // console.log('Fichier', fileStats);
                                    arrFile_1.push(new __WEBPACK_IMPORTED_MODULE_7_app_model_file_model__["a" /* File */](fileStats.name, roots, fileStats.type));
                                    nexts();
                                });
                            }
                        });
                        _Folder = new __WEBPACK_IMPORTED_MODULE_6_app_model_folder_model__["a" /* Folder */](value, root + '\\' + value, files.length, arrFile_1);
                        newWalker.on('errors', function (roots, nodeStatsArray, next_) {
                            next_();
                        });
                        newWalker.on('end', function () {
                            // console.log('all done');
                        });
                    }
                    else {
                        _Folder = new __WEBPACK_IMPORTED_MODULE_6_app_model_folder_model__["a" /* Folder */](value, root + '/' + value, files.length, []);
                    }
                    _this.folders.push(_Folder);
                });
            });
            // console.log('_folder', _Folder);
        });
        // console.log('foldersName:', this.foldersName);
        // console.log('Folders', this.folders);
        /*
        for (const dir of this.foldersName) {
          console.log('testeur', dir);
          newWalker = walk.walk(path.resolve(__dirname, '..', '..', 'CSE', dir));
  
          newWalker.on('file', (roots, fileStats, nexts) => {
            console.log(roots);
            fs.readFile(fileStats.name, () => {
              console.log('Fichier', fileStats);
              nexts();
            });
          });
  
          newWalker.on('errors', function (roots, nodeStatsArray, next_) {
            next_();
          });
  
        }
        */
        walker.on('end', function () {
            // console.log('all done');
        });
    };
    RecapComponent.prototype.onFolderSelectChange = function (event) {
        var file_block = new RevealFx(document.querySelector('#home .file-block'), {
            revealSettings: {
                bgcolor: '#878787',
                direction: 'lr',
                duration: 500,
                onStart: function (contentEl, revealerEl) { contentEl.style.opacity = 0; },
                onCover: function (contentEl, revealerEl) { contentEl.style.opacity = 1; },
                onComplete: function () {
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#home .file').removeClass('uk-invisible');
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#home .file').addClass('uk-animation-slide-top-small');
                    }, 100);
                }
            }
        });
        file_block.reveal();
        // Envoyer la liste de fichier à Listing
        this.filesArr = event.files;
    };
    RecapComponent.prototype.onFileSelectChange = function (event) {
        var iframe_block = new RevealFx(document.querySelector('#home .iframe-block'), {
            revealSettings: {
                bgcolor: '#cb3a1a',
                direction: 'lr',
                duration: 500,
                onStart: function (contentEl, revealerEl) { contentEl.style.opacity = 0; },
                onCover: function (contentEl, revealerEl) { contentEl.style.opacity = 1; }
            }
        });
        iframe_block.reveal();
        // Envoyer le pdf à ouvrir à fileview
        console.log('Event recu', event);
        var url = event.path + '\\' + event.name;
        console.log(url);
        this.fileSelected = event;
        this.urlOfSelectedFile = event.path + '\\' + event.name;
        // this.filesArr = event.files;
    };
    RecapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recap',
            template: __webpack_require__("./src/app/components/recap/recap.component.html"),
            styles: [__webpack_require__("./src/app/components/recap/recap.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], RecapComponent);
    return RecapComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/header/header.component.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"logo-block\">\n  <div class=\"block-revealer__content\">\n  <img src=\"" + __webpack_require__("./src/assets/img/logo.png") + "\" alt=\"\" class=\"logo\"  routerLink=\"\">\n  <h1>Activités du C.S.E.</h1>\n  </div>\n</div>\n";

/***/ }),

/***/ "./src/app/components/shared/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/shared/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"block-revealer__content\">  \n  <div class=\"folder-block-inner\" >\n    <!-- <h1>{{directoriesList|json}}</h1>-->\n    <div *ngFor=\"let folder of foldersList;let i = index\" \n          (click)=\"gotoFileListe($event,i);clicked = (clicked === folder ? null :folder)\"\n          [class.uk-card-primary]=\"clicked === folder\" \n\n          class=\"folder uk-card uk-card-small uk-card-default uk-card-body\">\n      <div class=\"uk-grid-collapse\" uk-grid>\n        <div class=\"uk-width-auto@m\">\n            <!--<img src=\"../../../../assets/img/folder.png\" alt=\"\">-->\n            <img src=\"{{folder.path}}\\icon.png\" alt=\"\">\n        </div>\n        <div class=\"uk-width-expand@m\">\n          <h5 class=\"uk-text-truncate\" >{{folder.name}}</h5>\n        </div>\n        <div class=\"uk-width-auto@m uk-flex uk-flex-middle\">\n          <span class=\"uk-label\" >{{folder.numberOfFiles}} fichiers</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n   ";

/***/ }),

/***/ "./src/app/components/shared/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ss-wrapper {\n  overflow: hidden;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n  float: left; }\n\n.ss-content {\n  height: 100%;\n  width: 100%;\n  padding: 0 32px 0 0;\n  position: relative;\n  right: -18px;\n  overflow: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.ss-scroll {\n  position: relative;\n  background: rgba(0, 0, 0, 0.1);\n  width: 9px;\n  border-radius: 4px;\n  top: 0;\n  z-index: 2;\n  cursor: pointer;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s linear;\n  transition: opacity 0.25s linear; }\n\n.ss-container:hover .ss-scroll {\n  opacity: 1; }\n\n.ss-grabbed {\n  -ms-user-select: none;\n      user-select: none;\n  -o-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/shared/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.isClassVisible = false;
        this.onFolderSelectedEvt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.basePath = __dirname + '../../CSE/';
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.gotoFileListe = function (event, index) {
        /*console.log('File', this.foldersList[index].files);console.log('Index: ', index);*/
        this.onFolderSelectedEvt.emit(this.foldersList[index]);
        this.isClassVisible = true;
        //this.router.navigate(['listing']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SidebarComponent.prototype, "foldersList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SidebarComponent.prototype, "onFolderSelectedEvt", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/model/file.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
var File = (function () {
    function File(name, path, type) {
        this.name = name;
        this.path = path;
        this.type = type;
    }
    return File;
}());



/***/ }),

/***/ "./src/app/model/folder.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Folder; });
var Folder = (function () {
    function Folder(name, path, numberOfFiles, files) {
        this.name = name;
        this.path = path;
        this.numberOfFiles = numberOfFiles;
        this.files = files;
    }
    return Folder;
}());



/***/ }),

/***/ "./src/app/providers/electron.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectronService = (function () {
    function ElectronService() {
        this.isElectron = function () {
            return window && window.process && window.process.type;
        };
        // Conditional imports
        if (this.isElectron()) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.childProcess = window.require('child_process');
        }
    }
    ElectronService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ElectronService);
    return ElectronService;
}());



/***/ }),

/***/ "./src/app/providers/filelist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilelistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilelistService = (function () {
    function FilelistService() {
    }
    FilelistService.prototype.getPDF = function () {
        return '/assets/demo.pdf';
    };
    FilelistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FilelistService);
    return FilelistService;
}());



/***/ }),

/***/ "./src/assets/img/logo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/logo.png";

/***/ }),

/***/ "./src/assets/img/pdf.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/pdf.png";

/***/ }),

/***/ "./src/assets/img/project.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/project.png";

/***/ }),

/***/ "./src/assets/img/square.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/square.jpg";

/***/ }),

/***/ "./src/assets/img/sub-square.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/img/sub-square.png";

/***/ }),

/***/ "./src/environments/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// This file contains development variables. (When you work in DEV MODE)
// This file is use by webpack. Please don't rename it and don't move it to another directory.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments__ = __webpack_require__("./src/environments/index.ts");




if (__WEBPACK_IMPORTED_MODULE_3_environments__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */], {
    preserveWhitespaces: false
})
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone_mix__ = __webpack_require__("./node_modules/zone.js/dist/zone-mix.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone_mix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone_mix__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ "crypto":
/***/ (function(module, exports) {

if(typeof require('crypto') === 'undefined') {var e = new Error("Cannot find module \"require('crypto')\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = require('crypto');

/***/ }),

/***/ "events":
/***/ (function(module, exports) {

if(typeof require('events') === 'undefined') {var e = new Error("Cannot find module \"require('events')\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = require('events');

/***/ }),

/***/ "fs":
/***/ (function(module, exports) {

module.exports = require('fs');

/***/ }),

/***/ "http":
/***/ (function(module, exports) {

module.exports = require('http');

/***/ }),

/***/ "https":
/***/ (function(module, exports) {

module.exports = require('https');

/***/ }),

/***/ "jquery":
/***/ (function(module, exports) {

module.exports = require('jquery');

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require('lodash');

/***/ }),

/***/ "path":
/***/ (function(module, exports) {

module.exports = require('path');

/***/ }),

/***/ "url":
/***/ (function(module, exports) {

module.exports = require('url');

/***/ }),

/***/ "walk":
/***/ (function(module, exports) {

module.exports = require('walk');

/***/ }),

/***/ "zlib":
/***/ (function(module, exports) {

if(typeof require('zlib') === 'undefined') {var e = new Error("Cannot find module \"require('zlib')\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = require('zlib');

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
//# sourceMappingURL=main.bundle.js.map