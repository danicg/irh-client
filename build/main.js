webpackJsonp([0],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = (function () {
    function AuthProvider(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.userDetails = null;
        this.user = afAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthProvider.prototype.login = function (user) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    AuthProvider.prototype.register = function (user) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    AuthProvider.prototype.getAuthState = function () {
        return this.afAuth.authState;
    };
    AuthProvider.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], AuthProvider);

//# sourceMappingURL=auth.provider.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = (function () {
    function UserProvider(afDataBase) {
        this.afDataBase = afDataBase;
    }
    UserProvider.prototype.createUser = function (user) {
        return this.afDataBase.database.ref("/users").child(user.uid).set({
            uid: user.uid,
            name: user.email.replace(/@.*/, ''),
            email: user.email
        });
    };
    UserProvider.prototype.getUsers = function () {
        return this.afDataBase.list('/users').valueChanges();
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], UserProvider);

//# sourceMappingURL=user.provider.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetTicketAuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_queue_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shops_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_reserve_service__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GetTicketAuthPage = (function () {
    function GetTicketAuthPage(navCtrl, shopService, afDataBase, userService, reserveService, queueService) {
        this.navCtrl = navCtrl;
        this.shopService = shopService;
        this.afDataBase = afDataBase;
        this.userService = userService;
        this.reserveService = reserveService;
        this.queueService = queueService;
        this.reserved = false;
        this.shops$ = this.shopService.listenShop();
    }
    GetTicketAuthPage.prototype.selectShop = function (shop) {
        this.selectedShop = shop;
    };
    GetTicketAuthPage.prototype.reserve = function () {
        this.objQueue = {
            userId: this.userService.user.uid,
            name: this.userService.user.name,
            timestamp: new Date().getTime(),
            wearCount: this.selectedWear,
            wearAvg: !this.userService.user.wearAvg ? this.selectedShop.wearAvg : this.userService.user.wearAvg
        };
        this.reserved = true;
        this.reserveService.setReserve({
            shop: this.selectedShop,
            number: this.objQueue.timestamp
        });
        this.afDataBase.database.ref("/queues").child(this.selectedShop.id).push(this.objQueue);
    };
    return GetTicketAuthPage;
}());
GetTicketAuthPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'get-ticket-auth',template:/*ion-inline-start:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\get-ticket-auth\get-ticket-auth.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Reservar probador</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div *ngIf="!reserved">\n\n  <h3>Zaras cercanos a tu ubicación y su trafico actual:</h3>\n\n  <div>\n\n    <shop-item (click)="selectShop(shop)" [shop]="shop" *ngFor="let shop of shops$ | async; let i = index">\n\n    </shop-item>\n\n  </div>\n\n\n\n  <select-wears *ngIf="selectedShop" (numWear)="selectedWear = $event;">\n\n\n\n  </select-wears>\n\n  <div class="box-rsvp" *ngIf="selectedWear">\n\n    <h5>Reservar turno en tienda: {{selectedShop.name}}</h5>\n\n    <h5>Numero de prendas: {{selectedWear}}</h5>\n\n    <button (click)="reserve()" ion-button>Reservar</button>\n\n  </div>\n\n  </div>\n\n  <div *ngIf="reserved">\n\n    <ion-card>\n\n      <ion-card-header class="header">\n\n        Probador reservado\n\n      </ion-card-header>\n\n      <ion-card-content class="content">\n\n        <p>\n\n          Has reservado turno en <span class="shop">{{selectedShop.name}}</span>\n\n        </p>\n\n        <p>\n\n          Tu número es: <span class="number">{{objQueue.timestamp}}</span>\n\n        </p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\get-ticket-auth\get-ticket-auth.html"*/,
        styles: ["\n    .box-rsvp {\n      margin: 30px;\n    }\n    .number {\n      font-size: 35px;\n    }\n    .shop {\n      font-size: 35px;      \n    }\n  "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__shared_shops_service__["a" /* ShopService */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_5__shared_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_6__shared_reserve_service__["a" /* ReserveService */],
        __WEBPACK_IMPORTED_MODULE_0__shared_queue_service__["a" /* QueueService */]])
], GetTicketAuthPage);

//# sourceMappingURL=get-ticket-auth.js.map

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MicroserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MicroserviceService = (function () {
    function MicroserviceService(_http) {
        this._http = _http;
        this.path = 'http://h2729551.stratoserver.net:9090';
    }
    MicroserviceService.prototype.occupateRoom = function (shopId, roomId, userPayload) {
        return this._http.post(this.path + "/" + shopId + "/" + roomId, { user: userPayload });
    };
    MicroserviceService.prototype.desoccupateRoom = function (shopId, roomId) {
        return this._http.post(this.path + "/" + shopId + "/" + roomId, {});
    };
    return MicroserviceService;
}());
MicroserviceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], MicroserviceService);

//# sourceMappingURL=microservice.service.js.map

/***/ }),

/***/ 200:
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
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_queue_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shops_service__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, shopService, queueService) {
        this.navCtrl = navCtrl;
        this.shopService = shopService;
        this.queueService = queueService;
        this.nextUserGranVia$ = this.queueService.getNextUser('/granvia');
        this.nextUserPreciados$ = this.queueService.getNextUser('/preciados');
        this.nextUserSol$ = this.queueService.getNextUser('/sol');
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Tablones de siguiente en tiendas</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <wall-next-person\n\n    nameShop="Zara Gran Vía:"\n\n    [user]="nextUserGranVia$ | async">\n\n  </wall-next-person>\n\n\n\n  <wall-next-person\n\n    nameShop="Zara Preciados:"\n\n    [user]="nextUserPreciados$ | async">\n\n  </wall-next-person>\n\n\n\n  <wall-next-person\n\n    nameShop="Zara Sol:"\n\n    [user]="nextUserSol$ | async">\n\n  </wall-next-person>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\home\home.html"*/,
        styles: ["\n    wall-next-person {\n      margin: 30px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__shared_shops_service__["a" /* ShopService */],
        __WEBPACK_IMPORTED_MODULE_2__shared_queue_service__["a" /* QueueService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_provider__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_user_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get_ticket_auth_get_ticket_auth__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authProvider, userProvider, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.userProvider = userProvider;
        this.userService = userService;
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginPage.prototype.login = function (user) {
        var _this = this;
        this.authProvider.login(user).then(function (result) {
            if (result) {
                _this.userService.listenUser(result.uid);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__get_ticket_auth_get_ticket_auth__["a" /* GetTicketAuthPage */]);
            }
        }).catch(function (e) {
            _this.error = e;
        });
    };
    LoginPage.prototype.register = function (user) {
        var _this = this;
        user.wearAvg = 0;
        user.wearCount = 0;
        this.authProvider.register(user)
            .then(function (authData) {
            _this.userService.listenUser(authData.uid);
            return _this.userProvider.createUser(authData);
        }).then(function (result) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__get_ticket_auth_get_ticket_auth__["a" /* GetTicketAuthPage */]);
        }).catch(function (e) {
            _this.error = e;
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Email Address</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Password</ion-label>\n\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button block (click)="login(user)">Login</button>\n\n  <button ion-button block color="light" (click)="register(user)">Register</button>\n\n\n\n  <p ion-text color="danger">{{error}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_provider__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_provider__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_4__shared_user_service__["a" /* UserService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReserveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_queue_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_user_service__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReserveService = (function () {
    function ReserveService(afDataBase, userService, queueService) {
        this.afDataBase = afDataBase;
        this.userService = userService;
        this.queueService = queueService;
        this.reserved = false;
    }
    ReserveService.prototype.setReserve = function (reserve) {
        if (this.reserved) {
            this.reserved = true;
            this.reserve = reserve;
            this.listenShopChanges(reserve.shop.id);
        }
    };
    ReserveService.prototype.listenShopChanges = function (path) {
        var _this = this;
        this.queueService.listenQueue(path)
            .filter(function (e) {
            return !!!e.find(function (obj) { return obj.userId === _this.userService.user.uid; });
        })
            .subscribe(function (e) {
            console.log('reserves', e);
            _this.reserved = false;
        });
    };
    ReserveService.prototype.getReserve = function () {
        return this.reserve;
    };
    return ReserveService;
}());
ReserveService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__shared_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3__shared_queue_service__["a" /* QueueService */]])
], ReserveService);

//# sourceMappingURL=reserve.service.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersListPage = (function () {
    function UsersListPage(navCtrl, navParams, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.users$ = this.userProvider.getUsers();
    }
    return UsersListPage;
}());
UsersListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'users-list',template:/*ion-inline-start:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\usersList\usersList.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>User List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let user of users$ | async">\n\n      {{user.email}}\n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\usersList\usersList.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_provider__["a" /* UserProvider */]])
], UsersListPage);

//# sourceMappingURL=usersList.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_load_data_provider__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadDataPage = (function () {
    function LoadDataPage(navCtrl, navParams, loadDataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadDataProvider = loadDataProvider;
    }
    LoadDataPage.prototype.loadShops = function () {
        this.loadDataProvider.createShops();
    };
    LoadDataPage.prototype.loadQueues = function () {
        this.loadDataProvider.createQueues();
    };
    return LoadDataPage;
}());
LoadDataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'load-data',template:/*ion-inline-start:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\load-data\load-data.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>User List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button (click)="loadShops()">\n\n      Load Shops\n\n    </button>\n\n    <button (click)="loadQueues()">\n\n      Load Queues\n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\load-data\load-data.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_load_data_provider__["a" /* LoadDataProvider */]])
], LoadDataPage);

//# sourceMappingURL=load-data.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_load_queue__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_load_shops__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoadDataProvider = (function () {
    function LoadDataProvider(afDataBase) {
        this.afDataBase = afDataBase;
    }
    LoadDataProvider.prototype.createShops = function () {
        var _this = this;
        Object.keys(__WEBPACK_IMPORTED_MODULE_4__shared_load_shops__["a" /* shops */]).forEach(function (key) {
            _this.afDataBase.database.ref("/shops").child(key).set(__WEBPACK_IMPORTED_MODULE_4__shared_load_shops__["a" /* shops */][key]);
        });
    };
    LoadDataProvider.prototype.createQueues = function () {
        var _this = this;
        Object.keys(__WEBPACK_IMPORTED_MODULE_0__shared_load_queue__["a" /* queues */]).forEach(function (keyShop) {
            __WEBPACK_IMPORTED_MODULE_0__shared_load_queue__["a" /* queues */][keyShop].forEach(function (data) {
                _this.afDataBase.database.ref("/queues").child(keyShop).push(data);
            });
        });
    };
    return LoadDataProvider;
}());
LoadDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], LoadDataProvider);

//# sourceMappingURL=load-data.provider.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_microservice_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shops_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_queue_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomsPage = (function () {
    function RoomsPage(navCtrl, queueService, shopService, micoservice) {
        this.navCtrl = navCtrl;
        this.queueService = queueService;
        this.shopService = shopService;
        this.micoservice = micoservice;
    }
    RoomsPage.prototype.ngOnInit = function () {
        this.shops$ = this.shopService.listenShop();
    };
    RoomsPage.prototype.updateRoom = function (roomId, occupied) {
        var _this = this;
        if (!occupied) {
            this.queueService.popUser('/granvia').then(function (user) {
                _this.micoservice.occupateRoom('granvia', roomId, user).subscribe(function (e) { return console.log(e); });
            });
        }
        else {
            this.micoservice.desoccupateRoom('granvia', roomId).subscribe(function (e) { return console.log(e); });
        }
    };
    RoomsPage.prototype.selectShop = function (shop) {
        this.selectedShop = shop;
        this.queue$ = this.queueService.listenQueue("/" + this.selectedShop);
        this.rooms$ = this.shopService.listenShop("/" + this.selectedShop + "/rooms");
    };
    return RoomsPage;
}());
RoomsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'rooms',template:/*ion-inline-start:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\rooms\rooms.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Rooms</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content padding>\n\n    <div>\n\n      <div (click)="selectShop(shop.id)" *ngFor="let shop of shops$ | async; let i = index">\n\n        <h4>{{shop.name}}</h4>\n\n        Tiempo de espera aprox en probadores: XX:XX\n\n      </div>\n\n    </div>\n\n    <div class="container-bussines">\n\n      <show-queue>\n\n          <show-queue-item *ngFor="let user of queue$ | async ; let i = index" [ticket]="user.timestamp" [userId]="user.userId">\n\n          </show-queue-item>\n\n      </show-queue>\n\n      <show-room>\n\n        <show-room-item *ngFor="let room of rooms$ | async; let i = index" [roomId]="room.id" [occupied]="room.occupied" (click)="updateRoom(room.id, room.occupied)">\n\n        </show-room-item>\n\n      </show-room>\n\n    </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\andy\workspace\hackathon\irh-client\src\pages\rooms\rooms.html"*/,
        styles: ["\n    .container-bussines{\n      display: flex;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__shared_queue_service__["a" /* QueueService */], __WEBPACK_IMPORTED_MODULE_1__shared_shops_service__["a" /* ShopService */], __WEBPACK_IMPORTED_MODULE_0__shared_microservice_service__["a" /* MicroserviceService */]])
], RoomsPage);

//# sourceMappingURL=rooms.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(315);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_microservice_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_show_room_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_select_wears_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_wall_next_person__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_show_queue_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shop_item_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_pipes__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environment__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_list_list__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_usersList_usersList__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_load_data_load_data__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_user_profile_user_profile__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_auth_provider__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_user_provider__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_load_data_provider__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_get_ticket_auth_get_ticket_auth__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_rooms_rooms__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_queue_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_shops_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_user_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_reserve_service__ = __webpack_require__(293);
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
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_usersList_usersList__["a" /* UsersListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_load_data_load_data__["a" /* LoadDataPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_get_ticket_auth_get_ticket_auth__["a" /* GetTicketAuthPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_select_wears_component__["a" /* SelectWearsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_show_queue_component__["a" /* ShowQueueComponent */],
            __WEBPACK_IMPORTED_MODULE_2__components_show_room_component__["a" /* ShowRoomComponent */],
            __WEBPACK_IMPORTED_MODULE_2__components_show_room_component__["b" /* ShowRoomItemComponent */],
            __WEBPACK_IMPORTED_MODULE_28__pages_rooms_rooms__["a" /* RoomsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_user_profile_user_profile__["a" /* UserProfile */],
            __WEBPACK_IMPORTED_MODULE_6__components_shop_item_component__["a" /* ShopItem */],
            __WEBPACK_IMPORTED_MODULE_4__components_wall_next_person__["a" /* WallNextPerson */],
            __WEBPACK_IMPORTED_MODULE_7__shared_pipes__["a" /* FormatTimePipe */],
            __WEBPACK_IMPORTED_MODULE_5__components_show_queue_component__["b" /* ShowQueueItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_usersList_usersList__["a" /* UsersListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_load_data_load_data__["a" /* LoadDataPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_get_ticket_auth_get_ticket_auth__["a" /* GetTicketAuthPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_rooms_rooms__["a" /* RoomsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_user_profile_user_profile__["a" /* UserProfile */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_24__providers_auth_provider__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_user_provider__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_load_data_provider__["a" /* LoadDataProvider */],
            __WEBPACK_IMPORTED_MODULE_29__shared_queue_service__["a" /* QueueService */],
            __WEBPACK_IMPORTED_MODULE_30__shared_shops_service__["a" /* ShopService */],
            __WEBPACK_IMPORTED_MODULE_31__shared_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__shared_microservice_service__["a" /* MicroserviceService */],
            __WEBPACK_IMPORTED_MODULE_32__shared_reserve_service__["a" /* ReserveService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShowRoomItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowRoomItemComponent = (function () {
    function ShowRoomItemComponent() {
        this.occupied = false;
    }
    return ShowRoomItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('roomId'),
    __metadata("design:type", String)
], ShowRoomItemComponent.prototype, "roomId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('occupied'),
    __metadata("design:type", Object)
], ShowRoomItemComponent.prototype, "occupied", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('turn'),
    __metadata("design:type", Number)
], ShowRoomItemComponent.prototype, "turn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('wearCount'),
    __metadata("design:type", Number)
], ShowRoomItemComponent.prototype, "wearCount", void 0);
ShowRoomItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'show-room-item',
        template: "\n  <ion-card>\n    <ion-card-header class=\"room\">\n      <div class=\"title\"> Probador {{roomId}}</div> <div class=\"semaphore\" [class.occupied]=\"occupied\"></div>\n    </ion-card-header>\n    <hr *ngIf=\"occupied\">\n    <ion-card-content *ngIf=\"occupied\">\n      Turno: {{ turn }}\n      <br>\n      WearCount: {{ wearCount }}\n    </ion-card-content>\n  </ion-card>\n  ",
        styles: ["\n    .semaphore {\n      width: 20px;\n      height: 20px;\n      border-radius: 10px;\n      background-color: green;\n    }\n    .title{\n      position: relative;\n      margin-right: 10px;\n    }\n    .occupied {\n      background-color: red;\n    }\n    .room{\n      cursor: pointer;\n    }\n    .room{\n      display:flex;\n    }\n  "]
    })
], ShowRoomItemComponent);

var ShowRoomComponent = (function () {
    function ShowRoomComponent() {
    }
    return ShowRoomComponent;
}());
ShowRoomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'show-room',
        template: "\n  <div class=\"show-room\">\n    <ng-content></ng-content>\n  </div>\n  ",
        styles: ["\n    .show-room{\n      display: flex;\n    }\n"]
    })
], ShowRoomComponent);

//# sourceMappingURL=show-room.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectWearsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectWearsComponent = (function () {
    function SelectWearsComponent() {
        this.numWear = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    return SelectWearsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], SelectWearsComponent.prototype, "numWear", void 0);
SelectWearsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'select-wears',
        template: "\n    <ion-label>Selecciona el n\u00FAmero de prendas</ion-label>\n    <div class=\"select-wears\">\n      <button ion-button (click)=\"numWear.emit(1) && selected = 1\">1</button>\n      <button ion-button (click)=\"numWear.emit(2) && selected = 2\">2</button>\n      <button ion-button (click)=\"numWear.emit(3) && selected = 3\">3</button>\n      <button ion-button (click)=\"numWear.emit(4) && selected = 4\">4</button>\n      <button ion-button (click)=\"numWear.emit(5) && selected = 5\">5</button>\n    </div>\n  ",
        styles: ["\n    .select-wears{\n      display: flex;\n    }\n  "]
    })
], SelectWearsComponent);

//# sourceMappingURL=select-wears.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallNextPerson; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WallNextPerson = (function () {
    function WallNextPerson() {
    }
    return WallNextPerson;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('nameShop'),
    __metadata("design:type", String)
], WallNextPerson.prototype, "shop", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('user'),
    __metadata("design:type", Object)
], WallNextPerson.prototype, "user", void 0);
WallNextPerson = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'wall-next-person',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewEncapsulation */].None,
        styles: ["\n  .header {\n    \n  }\n  .content {\n    \n  }\n  .number {\n    font-size: 35px;\n  }\n  .name {\n    font-size: 25px;    \n  }\n  "],
        template: "\n  <ion-card>\n    <ion-card-header class=\"header\">\n      {{shop}}\n    </ion-card-header>\n    <ion-card-content class=\"content\">\n      <span *ngIf=\"user\" class=\"number\">{{user?.timestamp}}</span> es tu turno en los probadores durante: 02:00min.\n      <span *ngIf=\"!user\">Los probadores est\u00E1n vacios.</span>\n    </ion-card-content>\n  </ion-card>\n  "
    })
], WallNextPerson);

//# sourceMappingURL=wall-next-person.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShowQueueItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowQueueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowQueueItemComponent = (function () {
    function ShowQueueItemComponent() {
    }
    return ShowQueueItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('ticket'),
    __metadata("design:type", String)
], ShowQueueItemComponent.prototype, "ticket", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('userId'),
    __metadata("design:type", String)
], ShowQueueItemComponent.prototype, "userId", void 0);
ShowQueueItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'show-queue-item',
        template: "\n  <div class=\"show-queue-item\">\n    {{ticket}}\n  </div>\n  ",
        styles: ["\n  .show-queue-item {\n    padding: 10px;\n    margin: 5px;\n    border-radius: 5px;\n    border: solid 1px #eee;\n  }"]
    })
], ShowQueueItemComponent);

var ShowQueueComponent = (function () {
    function ShowQueueComponent() {
        this.length = null;
        this.time = null;
    }
    return ShowQueueComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('length'),
    __metadata("design:type", Object)
], ShowQueueComponent.prototype, "length", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('time'),
    __metadata("design:type", Object)
], ShowQueueComponent.prototype, "time", void 0);
ShowQueueComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'show-queue',
        template: "\n    <ion-card *ngIf=\"length || length === 0\">\n      <ion-card-header *ngIf=\"length<=0\">Cola vacia</ion-card-header>\n      <ion-card-header *ngIf=\"length>0\">{{length}} restantes<br>Tiempo estimado: {{time}}</ion-card-header>\n      <hr *ngIf=\"length>0\">\n      <ion-card-content *ngIf=\"length>0\">\n          <ng-content></ng-content>\n      </ion-card-content>\n    </ion-card>\n\n  ",
        styles: ["\n  "]
    })
], ShowQueueComponent);

//# sourceMappingURL=show-queue.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    firebase: {
        apiKey: "AIzaSyCvrBiFoHCb73j5SajWs4nwCddRj8W7ERc",
        authDomain: "hackatoninditex.firebaseapp.com",
        databaseURL: "https://hackatoninditex.firebaseio.com",
        projectId: "hackatoninditex",
        storageBucket: "hackatoninditex.appspot.com",
        messagingSenderId: "958263387207"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_provider__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_usersList_usersList__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_load_data_load_data__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_get_ticket_auth_get_ticket_auth__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_rooms_rooms__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_queue_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shops_service__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authProvider, queueService, shopService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authProvider = authProvider;
        this.queueService = queueService;
        this.shopService = shopService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Panel de tiendas', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Lista de usuarios', component: __WEBPACK_IMPORTED_MODULE_8__pages_usersList_usersList__["a" /* UsersListPage */] },
            { title: 'LoadData', component: __WEBPACK_IMPORTED_MODULE_9__pages_load_data_load_data__["a" /* LoadDataPage */] },
            { title: 'Reservar probador', component: __WEBPACK_IMPORTED_MODULE_10__pages_get_ticket_auth_get_ticket_auth__["a" /* GetTicketAuthPage */] },
            { title: 'App en Tienda', component: __WEBPACK_IMPORTED_MODULE_11__pages_rooms_rooms__["a" /* RoomsPage */] },
            { title: 'App en Tienda', component: __WEBPACK_IMPORTED_MODULE_11__pages_rooms_rooms__["a" /* RoomsPage */] },
        ];
        // Observable queue
        this.queueService.listenQueue('/granvia')
            .subscribe(function (e) {
            console.log('queue', e);
        });
        // Observable shops
        this.shopService.listenShop()
            .subscribe(function (e) {
            console.log('shops', e);
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.onLogout = function () {
        this.authProvider.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\andy\workspace\hackathon\irh-client\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button *ngIf="authProvider.user | async" menuClose ion-item icon-start (click)="onLogout()">\n\n        <ion-icon name="person" item-start></ion-icon>\n\n          Logout\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\andy\workspace\hackathon\irh-client\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__providers_auth_provider__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_12__shared_queue_service__["a" /* QueueService */],
        __WEBPACK_IMPORTED_MODULE_13__shared_shops_service__["a" /* ShopService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return queues; });
var queues = {
    "granvia": new Array(5).fill({
        userId: "oRt6cJAgGDa8VIdo15g1zRLmnxL2",
        name: "danicaldera",
        timestamp: new Date().getTime(),
        wearCount: 3,
        wearAvg: 300000
    }),
    "sol": new Array(5).fill({
        userId: "oRt6cJAgGDa8VIdo15g1zRLmnxL2",
        name: "danicaldera2",
        timestamp: new Date().getTime(),
        wearCount: 3,
        wearAvg: 150000
    })
};
//# sourceMappingURL=load-queue.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shops; });
// This is just some sample data so you don't have to think of your own!
// This is just some sample data so you don't have to think of your own!
var shops = {
    "granvia": {
        "id": "granvia",
        "name": "Zara Gran Vía",
        "geolocation": {
            "lat": 0,
            "lng": 0
        },
        "wearAvg": 0,
        "wearCount": 0,
        "amountTimeSpent": 0,
        "rooms": {
            "0": {
                "id": 0,
                "occupied": false,
                "tsStart": null,
                "userId": null
            },
            "1": {
                "id": 1,
                "occupied": false,
                "tsStart": null,
                "userId": null
            },
            "2": {
                "id": 2,
                "occupied": false,
                "tsStart": null,
                "userId": null
            },
            "3": {
                "id": 3,
                "occupied": false,
                "tsStart": null,
                "userId": null
            }
        }
    },
    "preciados": {
        "id": "preciados",
        "name": "Zara Preciados",
        "geolocation": {
            "lat": 0,
            "lng": 0
        },
        "wearAvg": 0,
        "wearCount": 0,
        "amountTimeSpent": 0,
        "rooms": {
            "0": {
                "id": 0,
                "occupied": false,
                "tsStart": null,
                "userId": null
            },
            "1": {
                "id": 1,
                "occupied": false,
                "tsStart": null,
                "userId": null
            },
            "2": {
                "id": 2,
                "occupied": false,
                "tsStart": null,
                "userId": null
            },
            "3": {
                "id": 3,
                "occupied": false,
                "tsStart": null,
                "userId": null
            }
        }
    },
    "sol": {
        "id": "sol",
        "name": "Zara Sol",
        "geolocation": {
            "lat": 0,
            "lng": 0
        },
        "wearAvg": 0,
        "wearCount": 0,
        "amountTimeSpent": 0,
        "rooms": {
            "0": {
                "id": 0,
                "occupied": false,
                "tsStart": null,
                "userId": null
            },
            "1": {
                "id": 1,
                "occupied": false,
                "tsStart": null,
                "userId": null
            },
            "2": {
                "id": 2,
                "occupied": false,
                "tsStart": null,
                "userId": null
            },
            "3": {
                "id": 3,
                "occupied": false,
                "tsStart": null,
                "userId": null
            }
        }
    }
};
//# sourceMappingURL=load-shops.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfile = (function () {
    function UserProfile() {
    }
    UserProfile.prototype.ngOnInit = function () { };
    return UserProfile;
}());
UserProfile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'user-profile',
        template: "\n    <ion-header>\n      <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>Tu reserva</ion-title>\n      </ion-navbar>\n    </ion-header>\n    \n    <ion-content padding>\n    \n  test\n    \n    </ion-content>\n  "
    }),
    __metadata("design:paramtypes", [])
], UserProfile);

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_shop__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_shop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_shop__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopItem = (function () {
    function ShopItem() {
    }
    return ShopItem;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_shop__["Shop"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_shop__["Shop"]) === "function" && _a || Object)
], ShopItem.prototype, "shop", void 0);
ShopItem = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'shop-item',
        template: "\n    <h4>{{shop.name}}</h4>\n    Tiempo de espera aprox en probadores: {{shop.estimatedWaitTime | formatTime}}\n  "
    }),
    __metadata("design:paramtypes", [])
], ShopItem);

var _a;
//# sourceMappingURL=shop-item.component.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var FormatTimePipe = (function () {
    function FormatTimePipe() {
    }
    FormatTimePipe.prototype.transform = function (value) {
        return this.formatTime(value);
    };
    FormatTimePipe.prototype.formatTime = function (s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
        return this.addZero(hrs) + ':' + this.addZero(mins);
    };
    FormatTimePipe.prototype.addZero = function (unitTime) {
        var unitTimeStr = unitTime.toString();
        if (unitTimeStr.length === 1) {
            return '0' + unitTimeStr;
        }
        return unitTimeStr;
    };
    return FormatTimePipe;
}());
FormatTimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'formatTime' })
], FormatTimePipe);

//# sourceMappingURL=pipes.js.map

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

//# sourceMappingURL=shop.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import * as fromRoot from './reducers';
//import firebase = require('nativescript-plugin-firebase');
//import { MONUMENTS_UPDATE } from './reducers/monuments';
var QueueService = (function () {
    function QueueService(afDataBase) {
        this.afDataBase = afDataBase;
        this.queuesPath = '/queues';
    }
    QueueService.prototype.getTimeEstimatedQueue = function (path) {
        var _this = this;
        return this.afDataBase.list(this.queuesPath + path).valueChanges()
            .switchMap(function (e) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.formatTime(_this.calculateTime(e)));
        });
    };
    QueueService.prototype.listenQueue = function (path) {
        return this.afDataBase.list(this.queuesPath + path).valueChanges();
    };
    QueueService.prototype.getNextUser = function (path) {
        return this.afDataBase.list(this.queuesPath + path).valueChanges()
            .switchMap(function (e) {
            console.log('e', e);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(e[0]);
        });
    };
    QueueService.prototype.calculateTime = function (queue) {
        return queue
            .reduce(function (acum, e) { return e.wearAvg * e.wearCount + acum; }, 0);
    };
    QueueService.prototype.formatTime = function (s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
        return this.addZero(hrs) + ':' + this.addZero(mins) + ':' + this.addZero(secs);
    };
    QueueService.prototype.addZero = function (unitTime) {
        var unitTimeStr = unitTime.toString();
        if (unitTimeStr.length === 1) {
            return '0' + unitTimeStr;
        }
        return unitTimeStr;
    };
    QueueService.prototype.popUser = function (path) {
        var _this = this;
        var user = null;
        return this.afDataBase.database.ref(this.queuesPath + path).once('value').then(function (value) {
            var object = value.val();
            var key = Object.keys(object)[0];
            user = object[key];
            _this.removeItemFromList(path, key);
            return user;
        });
    };
    QueueService.prototype.removeItemFromList = function (path, key) {
        this.afDataBase.list(this.queuesPath + path).remove(key);
    };
    return QueueService;
}());
QueueService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], QueueService);

//# sourceMappingURL=queue.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopService = (function () {
    function ShopService(afDataBase) {
        this.afDataBase = afDataBase;
        this.shopsPath = '/shops';
    }
    ShopService.prototype.listenShop = function (path) {
        if (path === void 0) { path = ''; }
        if (path) {
            return this.afDataBase.object(this.shopsPath + path).valueChanges();
        }
        return this.afDataBase.list(this.shopsPath + path).valueChanges();
    };
    return ShopService;
}());
ShopService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], ShopService);

//# sourceMappingURL=shops.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(afDataBase) {
        this.afDataBase = afDataBase;
        this.userPath = '/users';
    }
    UserService.prototype.listenUser = function (uid) {
        var _this = this;
        this.afDataBase.object(this.userPath + "/" + uid).valueChanges()
            .subscribe(function (e) {
            _this.user = e;
            console.log(e);
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ })

},[298]);
//# sourceMappingURL=main.js.map