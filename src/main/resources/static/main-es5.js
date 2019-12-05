(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/carousel/carousel.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/carousel/carousel.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <div class=\"overlay\"></div>\r\n    <video playsinline=\"playsinline\" autoplay=\"autoplay\" muted=\"muted\" loop=\"loop\">\r\n        <source src=\"https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4\" type=\"video/mp4\">\r\n    </video>\r\n    <div class=\"container h-100\">\r\n        <div class=\"d-flex h-100 text-center align-items-center\">\r\n            <div class=\"w-100 text-white\">\r\n                <h1 class=\"display-3\">Bienvenue sur BoVoyages</h1>\r\n                <h3 style=\"color: #ae9f6a;\">Venez voir toutes nos plus belles destinations</h3>\r\n                <h5 class=\"lead mb-0\" ><a routerLink=\"/voyages\" style=\"color: #ae9f6a;\">Voir toutes les destinations</a><br></h5>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/destination-details/destination-details.component.html": 
        /*!********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/destination-details/destination-details.component.html ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top: 100px;\">\r\n    <!-- <p>Destination {{destination?.id}} {{destination?.region}} {{destination?.images[0]}}\r\n        {{destination?.datesVoyages[0].dateAller}}</p> -->\r\n\r\n    <ngb-carousel #carousel interval=\"3000\">\r\n        <ng-template ngbSlide *ngFor=\"let img of destination?.images\">\r\n            <div class=\"carousel-caption\">\r\n                <h3> Destination {{destination?.region}} </h3>\r\n            </div>\r\n\r\n            <div class=\"picsum-img-wrapper\">\r\n                <img [src]=\"'http://127.0.0.1:8081/'+img\" alt=\"images d'une destination\"\r\n                    style=\"width: 100%; height: 100%;\">\r\n                    \r\n                <!-- <img [src]=\"'http://127.0.0.1:8080/'+img\" alt=\"images d'une destination\"\r\n                style=\"width: 100%; height: 100%;\"> -->\r\n            </div>\r\n\r\n        </ng-template>\r\n    </ngb-carousel>\r\n    <hr>\r\n    <div class=\"row py-5\">\r\n            <div class=\"col-lg-10 mx-auto\">\r\n        \r\n              <div class=\"card mb-4\">\r\n                <div class=\"card-body p-5\">\r\n                  <h4 class=\"mb-4\">Description de la destination</h4>\r\n                  <div class=\"custom-scrollbar-css p-2\">\r\n                    <p class=\"font-italic\">\r\n                        {{destination?.descriptif}} <br>\r\n                        </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n    </div>\r\n\r\n\r\n    <hr>\r\n\r\n    <div>\r\n        <div class=\"table-wrapper\">\r\n            <div class=\"table-title\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <h2><b>Trouvez vos dates de voyages :</b></h2>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                            <label class=\"btn btn-info active\">\r\n                                <input type=\"radio\" name=\"status\" value=\"all\" checked=\"checked\"> Tout\r\n                            </label>\r\n                            <label class=\"btn btn-success\">\r\n                                <input type=\"radio\" name=\"status\" value=\"active\"> Actif\r\n                            </label>\r\n                            <label class=\"btn btn-warning\">\r\n                                <input type=\"radio\" name=\"status\" value=\"inactive\"> Quelques places\r\n                            </label>\r\n                            <label class=\"btn btn-danger\">\r\n                                <input type=\"radio\" name=\"status\" value=\"expired\"> Expiré\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <table class=\"table table-striped table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th>Dates Aller</th>\r\n                        <th>Dates Retour</th>\r\n                        <th>Prix HT</th>\r\n                        <th>Promotion</th>\r\n                        <th>Status</th>\r\n                        <th>Commander</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!-- <div *ngIf=\"destination$ | async as destination;  else loading\"> -->\r\n                    <!-- <div *ngFor=\"let dv of destination?.datesVoyages\"> -->\r\n                    <tr data-status=\"active\" *ngFor=\"let dv of destination?.datesVoyages; let i = index;\">\r\n                        <td>{{i+1}}</td>\r\n                        <td>Du {{dv?.dateAller | date: 'dd/MM/yyyy'}}</td>\r\n                        <td>Au {{dv?.dateRetour | date: 'dd/MM/yyyy'}}</td>\r\n                        <td>{{dv?.tarifUnitaireHT}} €</td>\r\n                        <td>{{dv?.promotion}}</td>\r\n                        <td><span class=\"label label-success\">Active</span></td>\r\n                        <td><a [routerLink]=\"['/voyage-creation', dv?.id]\" class=\"btn btn-sm manage\">Commander ce voyage</a></td>\r\n                    </tr>\r\n                    <!-- </div> -->\r\n                     <!-- </div> -->\r\n                    <!-- <ng-template #loading>\r\n                            Loading destination...\r\n                    </ng-template> -->\r\n                    <!-- <ng-template #loadingOrError>\r\n                            <div *ngIf=\"errorLoading$ | async; else loading\">\r\n                              Error loading the list of users. Please try again later.\r\n                            </div>\r\n                            <ng-template #loading>\r\n                              Loading users...\r\n                            </ng-template>\r\n                    </ng-template> -->\r\n                    <!-- <tr data-status=\"inactive\">\r\n                        <td>2</td>\r\n                        <td><a href=\"#\">quisquamut.net</a></td>\r\n                        <td>05/08/2014</td>\r\n                        <td><span class=\"label label-warning\">Inactive</span></td>\r\n                        <td>Australia</td>\r\n                        <td><a href=\"#\" class=\"btn btn-sm manage\">Manage</a></td>\r\n                    </tr>\r\n                    <tr data-status=\"active\">\r\n                        <td>3</td>\r\n                        <td><a href=\"#\">convallissed.com</a></td>\r\n                        <td>11/05/2015</td>\r\n                        <td><span class=\"label label-success\">Active</span></td>\r\n                        <td>United Kingdom</td>\r\n                        <td><a href=\"#\" class=\"btn btn-sm manage\">Manage</a></td>\r\n                    </tr>\r\n                    <tr data-status=\"expired\">\r\n                        <td>4</td>\r\n                        <td><a href=\"#\">phasellusri.org</a></td>\r\n                        <td>06/09/2016</td>\r\n                        <td><span class=\"label label-danger\">Expired</span></td>\r\n                        <td>Romania</td>\r\n                        <td><a href=\"#\" class=\"btn btn-sm manage\">Manage</a></td>\r\n                    </tr>\r\n                    <tr data-status=\"inactive\">\r\n                        <td>5</td>\r\n                        <td><a href=\"#\">facilisleo.com</a></td>\r\n                        <td>12/08/2017</td>\r\n                        <td><span class=\"label label-warning\">Inactive</span></td>\r\n                        <td>Germany</td>\r\n                        <td><a href=\"#\" class=\"btn btn-sm manage\">Manage</a></td>\r\n                    </tr> -->\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/footer/footer.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/footer/footer.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Footer -->\r\n<footer id=\"sticky-footer\" class=\"page-footer font-small\" style=\"background: #33b5e5;\">\r\n\r\n    <!-- Footer Links -->\r\n    <div class=\"container\">\r\n  \r\n      <!-- Grid row-->\r\n      <div class=\"row text-center d-flex justify-content-center pt-5 mb-3\">\r\n  \r\n        <!-- Grid column -->\r\n        <div class=\"col-md-2 mb-3\">\r\n          <h6 class=\"text-uppercase font-weight-bold\">\r\n            <a href=\"#!\">About us</a>\r\n          </h6>\r\n        </div>\r\n        <!-- Grid column -->\r\n  \r\n        <!-- Grid column -->\r\n        <div class=\"col-md-2 mb-3\">\r\n          <h6 class=\"text-uppercase font-weight-bold\">\r\n            <a href=\"#!\">Products</a>\r\n          </h6>\r\n        </div>\r\n        <!-- Grid column -->\r\n  \r\n        <!-- Grid column -->\r\n        <div class=\"col-md-2 mb-3\">\r\n          <h6 class=\"text-uppercase font-weight-bold\">\r\n            <a href=\"#!\">Awards</a>\r\n          </h6>\r\n        </div>\r\n        <!-- Grid column -->\r\n  \r\n        <!-- Grid column -->\r\n        <div class=\"col-md-2 mb-3\">\r\n          <h6 class=\"text-uppercase font-weight-bold\">\r\n            <a href=\"#!\">Help</a>\r\n          </h6>\r\n        </div>\r\n        <!-- Grid column -->\r\n  \r\n        <!-- Grid column -->\r\n        <div class=\"col-md-2 mb-3\">\r\n          <h6 class=\"text-uppercase font-weight-bold\">\r\n            <a href=\"#!\">Contact</a>\r\n          </h6>\r\n        </div>\r\n        <!-- Grid column -->\r\n  \r\n      </div>\r\n      <!-- Grid row-->\r\n      <hr class=\"rgba-white-light\" style=\"margin: 0 15%;\">\r\n  \r\n      <!-- Grid row-->\r\n      <div class=\"row d-flex text-center justify-content-center mb-md-0 mb-4\">\r\n  \r\n        <!-- Grid column -->\r\n        <div class=\"col-md-8 col-12 mt-5\">\r\n          <p style=\"line-height: 1.7rem\">Suivez nous sur les réseaux sociaux et soyez informés en direct des toutes dernières promotion</p>\r\n        </div>\r\n        <!-- Grid column -->\r\n  \r\n      </div>\r\n      <!-- Grid row-->\r\n      <hr class=\"clearfix d-md-none rgba-white-light\" style=\"margin: 10% 15% 5%;\">\r\n  \r\n      <!-- Grid row-->\r\n      <div class=\"row pb-3\">\r\n  \r\n        <!-- Grid column -->\r\n        <div class=\"col-md-12\">\r\n  \r\n            <div class=\"col-12 social padding\">\r\n                <a href=\"#\"><i class=\"fa fa-facebook-official fa-3x\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"#\"><i class=\"fa fa-instagram fa-3x\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"#\"><i class=\"fa fa-twitter fa-3x\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"#\"><i class=\"fa fa-google-plus fa-3x\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"#\"><i class=\"fa fa-envelope fa-3x\" aria-hidden=\"true\"></i></a>\r\n            </div>\r\n  \r\n        </div>\r\n        <!-- Grid column -->\r\n  \r\n      </div>\r\n      <!-- Grid row-->\r\n  \r\n    </div>\r\n    <!-- Footer Links -->\r\n  \r\n    <!-- Copyright -->\r\n    <div class=\"footer-copyright text-center py-3\">© 2019 Copyright :\r\n      <a href=\"#\"> https://europadigital.com </a>\r\n    </div>\r\n    <!-- Copyright -->\r\n  \r\n  </footer>\r\n  <!-- Footer -->\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/navbar/navbar.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/navbar/navbar.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar\" style=\"background: #33b5e5;\">\r\n\r\n  <a class=\"navbar-brand\" routerLink=\"/home\">Bienvenue sur BoVoyages</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\"\r\n    aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\r\n    (click)=\"isMenuCollapsed = !isMenuCollapsed\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div [ngbCollapse]=\"isMenuCollapsed\" class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/home\" (click)=\"isMenuCollapsed = true\">Accueil<span\r\n            class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/voyages\" (click)=\"isMenuCollapsed = true\">Nos voyages </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/voyages-commandes\" (click)=\"isMenuCollapsed = true\">Vos commandes</a>\r\n      </li>\r\n    </ul>\r\n  <button type=\"button\" class=\"btn btn-light\" (click)=\"onLogOut()\">{{LogInOut}}</button>\r\n  <!-- *ngIf=\"isAuth\" -->\r\n  <span class=\"badge badge-warning\">{{userName}}</span>\r\n    <!-- <p class=\"my-2 my-sm-0\">{{user.nom}}</p> -->\r\n    <!-- Si isAuth est != de false => login -->\r\n    <!-- <button class=\"btn btn-primary\" type=\"button\" (click)=\"onLogIn()\" *ngIf=\"!isAuth\">Log in</button>  -->\r\n    <!-- <button class=\"btn btn-primary\" type=\"button\" (click)=\"onLogOut()\" *ngIf=\"isAuth\">Log out</button> -->\r\n\r\n    <!-- <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form> -->\r\n\r\n  </div>\r\n  <!-- <app-user-component></app-user-component> -->\r\n</nav>\r\n\r\n<!-- Navbar End -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/voyages-details/voyages-details.component.html": 
        /*!************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/voyages-details/voyages-details.component.html ***!
          \************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/login/login.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/login/login.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br><br><br>\r\n<div class=\"login-form\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"login(f)\">\r\n        <div class=\"avatar\">\r\n            <img [src]=\"'assets/avatar.png'\" alt=\"avatar\" />\r\n        </div>\r\n        <h2 class=\"text-center\">Login</h2>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" name=\"nom\" ngModel placeholder=\"Nom\"\r\n                #nom=\"ngModel\" required minlength=\"3\">\r\n            <div *ngIf=\"nom.invalid && (nom.touched || nom.dirty)\">\r\n                <p *ngIf=\"nom.errors.required\" class=\"text-center invalid\">\r\n                Username is required\r\n                </p>\r\n                <p *ngIf=\"nom.errors.minlength\" class=\"text-center invalid\">\r\n                    min length is 3\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" ngModel placeholder=\"Password\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Sign in</button>\r\n        </div>\r\n        <p *ngIf=\"error\">{{error}}</p>\r\n        <div class=\"clearfix text-center\">\r\n            <a [routerLink]=\"['/signup']\">Créer un compte</a>\r\n        </div>\r\n    </form>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/signup/signup.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/signup/signup.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br><br><br><br>\r\n<div class=\"centrer\"><h2>Création d'un compte utilisateur:</h2></div>\r\n<br>\r\n<div class=\"container form-group\">\r\n    <form #userForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(userForm)\">\r\n        <label>Nom d'utilisateur:</label>\r\n        <input type=\"text\" ngModel name=\"nom\" id =\"nom\" class=\"form-control\" placeholder=\"Nom d'utilisateur\" required>\r\n       <br>\r\n        <div ngModelGroup=\"passwords\" #passwords=\"ngModelGroup\" appCheckPassword>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"exampleInputPassword1\">Mot de passe:</label>\r\n\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Mot de passe\" #passwordA=\"ngModel\" name=\"passwordA\"\r\n\t\t\t\t required id=\"passwordA\" [(ngModel)]=\"password1\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group mt-1\">\r\n\t\t\t\t<label for=\"exampleInputPassword2\">Retapez votre mot de passe:</label>\r\n\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Retapez votre mot de passe\" #passwordB=\"ngModel\" name=\"passwordB\"\r\n\t\t\t\t required id=\"passwordB\" [(ngModel)]=\"password2\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"passwordB.invalid && (passwordA.dirty || passwordA.touched)\" class=\"alert alert-danger\">\r\n\t\t\tVeuillez confirmer votre mot de passe.\r\n\t\t</div>\r\n\t\t<div *ngIf=\"passwords.errors?.passwordCheck && (passwordB.dirty || passwordB.touched)\" class=\"alert alert-danger\">\r\n\t\t\tLes mots de passe sont différents.\r\n\t\t</div>\r\n        \r\n        <br>\r\n        <p *ngIf=\"error\">{{error}}</p>\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"passwords.invalid\">Créer le compte</button>\r\n    </form>\r\n</div>\r\n<br><br><br>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyage-confirmation-commande/voyage-confirmation-commande.component.html": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyage-confirmation-commande/voyage-confirmation-commande.component.html ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top: 100px;\">\n    <div\n        style=\"display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;\">\n        We're thrilled to have you here! Get ready to dive into your new account. </div>\n    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n        <!-- LOGO -->\n        <tr>\n            <td bgcolor=\"#33b5e5\" align=\"center\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\n                    <tr>\n                        <td align=\"center\" valign=\"top\" style=\"padding: 40px 10px 40px 10px;\"> </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n        <tr>\n            <td bgcolor=\"#33b5e5\" align=\"center\" style=\"padding: 0px 10px 0px 10px;\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\n                    <tr>\n                        <td bgcolor=\"#ffffff\" align=\"center\" valign=\"top\"\n                            style=\"padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;\">\n                            <h1 style=\"font-size: 48px; font-weight: 400; margin: 2;\">Félicitations!</h1> <img\n                                src=\"assets/success.jpg\" width=\"500\" height=\"120\"\n                                style=\"display: block; border: 0px;\" />\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n        <tr>\n            <td bgcolor=\"#f4f4f4\" align=\"center\" style=\"padding: 0px 10px 0px 10px;\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\n                    <tr>\n                        <td bgcolor=\"#ffffff\" align=\"left\"\n                            style=\"padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\n                            <p style=\"margin: 0;\"><b>Nous avons le plaisir de vous confirmer la validation de votre voyage ! <br> Vous allez recevoir un courriel de confirmation sous peu.</b>\n                            </p>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td bgcolor=\"#ffffff\" align=\"left\"\n                            style=\"padding: 0px 30px 0px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\n                            <p style=\"margin: 0;\">En cas de non réception de la confirmation de votre voyage par email, vous pouvez nous contacter a cette adresse : </p>\n                        </td>\n                    </tr> <!-- COPY -->\n                    <tr>\n                        <td bgcolor=\"#ffffff\" align=\"left\"\n                            style=\"padding: 20px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\n                            <p style=\"margin: 0;\"><a href=\"#\" target=\"_blank\"\n                                    style=\"color: #33b5e5;\">https://bovoyages/contact.com</a></p>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td bgcolor=\"#ffffff\" align=\"left\"\n                            style=\"padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\n                            <p style=\"margin: 0;\">N'hésitez pas à nous contacter si vous avez la moindre question, nous serons ravis de vous répondre !</p>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td bgcolor=\"#ffffff\" align=\"left\"\n                            style=\"padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\n                            <p style=\"margin: 0;\">Au plaisir de vous retrouver,<br>BoVoyages</p>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td bgcolor=\"#ffffff\" align=\"left\">\n                            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                                <tr>\n                                    <td bgcolor=\"#ffffff\" align=\"center\" style=\"padding: 20px 30px 60px 30px;\">\n                                        <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                                            <tr>\n                                                <td align=\"center\" style=\"border-radius: 3px;\" bgcolor=\"#33b5e5\"><a\n                                                    [routerLink]=\"['/home']\"\n                                                        style=\"font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #33b5e5; display: inline-block;\">Accueil</a></td>\n                                            </tr>\n                                        </table>\n                                    </td>\n                                </tr>\n                            </table>\n                        </td>\n                    </tr> <!-- COPY -->\n                </table>\n            </td>\n        </tr>\n        <tr>\n            <td bgcolor=\"#f4f4f4\" align=\"center\" style=\"padding: 30px 10px 0px 10px;\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px; margin-bottom: 50px;\">\n                    <tr>\n                        <td bgcolor=\"#b3e5fc\" align=\"center\"\n                            style=\"padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\n                            <h2 style=\"font-size: 20px; font-weight: 400; color: #111111; margin: 0;\">Une erreur dans la réalisation de votre voyage ?\n                            </h2>\n                            <p style=\"margin: 0;\"><a [routerLink]=\"['/voyages-commandes']\" style=\"color: #111111;\">Vous pouvez le modifier en cliquant ici.</a></p>\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n        <!-- <tr>\n            <td bgcolor=\"#f4f4f4\" align=\"center\" style=\"padding: 0px 10px 0px 10px;\">\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\n                    <tr>\n                        <td bgcolor=\"#f4f4f4\" align=\"left\"\n                            style=\"padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;\">\n                            <br>\n                            <p style=\"margin: 0;\">If these emails get annoying, please feel free to <a href=\"#\"\n                                    target=\"_blank\" style=\"color: #111111; font-weight: 700;\">unsubscribe</a>.</p>\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr> -->\n    </table>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyage-creation/voyage-creation.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyage-creation/voyage-creation.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top: 100px;\">\r\n\r\n    <div class=\"mb-4\">\r\n        <h6 class=\"flex-container text-uppercase\">\r\n            <div class=\"displayDate\">\r\n                <div><i class=\"fa fa-calendar-o fa-2x\" aria-hidden=\"true\"></i> Départ le {{datesVoyages?.dateAller | date: 'dd/MM/yyyy'}}</div>\r\n                <div> au {{datesVoyages?.dateRetour | date: 'dd/MM/yyyy'}}</div>\r\n            </div>\r\n        </h6>\r\n        <!-- Gradient divider -->\r\n        <hr data-content=\"ET\" class=\"hr-text\">\r\n    </div>\r\n    <div>\r\n        <!-- <p *ngIf=\"addParticipants()\"><label> Civilité : </label><span style=\"margin-right: 10px;\" [innerHTML]=\"displayCivilite\"></span><label>Nom : </label><span style=\"margin-right: 10px;\" [innerHTML]=\"displayNom\"></span><label> Prénom : </label> <span style=\"margin-right: 10px;\" [innerHTML]=\"displayPrenom\"></span><label> Date de naissance : </label><span style=\"margin-right: 10px;\" [innerHTML]=\"displayDateNaissance\"></span></p> -->\r\n        <!-- <section class=\"main\" *ngIf=\"voyageurs.length > 0\"> -->\r\n        <!-- <p *ngFor=\"let voyageur of voyageurs\">\r\n                <li><label>Civilité : </label><span style=\"margin-right: 10px;\">{{voyageur.civilite}}</span><label>Nom : </label><span style=\"margin-right: 10px;\">{{voyageur.nom}}</span><label>Prénom : </label><span style=\"margin-right: 10px;\">{{voyageur.prenom}}</span><label>Date de naissance : </label><span style=\"margin-right: 10px;\">{{voyageur.dateNaissance}}</span></li>\r\n            </p> -->\r\n        <!-- </section> -->\r\n    </div>\r\n\r\n    <div>\r\n        <div class=\"table-wrapper\">\r\n            <div class=\"table-title\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <h2><b>Participants du voyage :</b></h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <table class=\"table table-striped table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th>Civilité</th>\r\n                        <th>Nom</th>\r\n                        <th>Prénom</th>\r\n                        <th>Date de naissance</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let voyageur of voyageurs; let i = index;\">\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{voyageur.civilite}}</td>\r\n                        <td>{{voyageur.nom}}</td>\r\n                        <td>{{voyageur.prenom}}</td>\r\n                        <td>{{voyageur.dateNaissance}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"form-group\">\r\n        \r\n    </form> -->\r\n    <!-- <h4>Ajouter un participant</h4>\r\n    <div class=\"row\">\r\n        <div class=\"input-group\" style=\"width:25%\">\r\n            <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-white btn-minuse btn-default\" type=\"button\"  [disabled]=\"\">-</button>\r\n            </span>\r\n            <input type=\"text\" class=\"form-control no-padding add-color text-center height-25\" maxlength=\"3\" value=\"0\">\r\n            <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-red btn-pluss btn-default\" type=\"button\">+</button>\r\n            </span>\r\n        </div>\r\n    </div> -->\r\n    <div class=container>\r\n    <div class=\"\">\r\n    <div class=\"\">\r\n    <table class=\"table table-striped\">\r\n        <tbody>\r\n            <tr>\r\n                <td colspan=\"1\">\r\n                    <!-- <form class=\"form-horizontal\" method=\"post\" > -->\r\n                    <form [formGroup]=\"form\" class=\"form-horizontal\" method=\"post\" #f=\"ngForm\"\r\n                        (ngSubmit)=\"onSubmit(form)\">\r\n                        <fieldset>\r\n                            <legend>Entrez les informations du participant</legend>\r\n                            <!-- <div formArrayName=\"participants\"> -->\r\n                            <!-- <div *ngFor=\"let control of participants?.controls; let i=index;\"> -->\r\n                            <!-- <div [formGroupName] = \"i\"> -->\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-md-4 control-label\">Civilité</label>\r\n                                <div class=\"\">\r\n                                    <div class=\"input-group\">\r\n                                        <span style=\"margin-right: 10px;\">\r\n                                            <i class=\"fa fa-user fa-2x\" aria-hidden=\"true\"></i></span>\r\n                                        <select [(ngModel)]=\"voyageur.civilite\" formControlName=\"civilite\"\r\n                                            class=\"form-control\" required ngModel>\r\n                                            <option value=\"\">Veuillez choisir une civilité</option>\r\n                                            <option *ngFor=\"let opt of civilites\" [value]=\"opt\">{{ opt }}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-md-4 control-label\">Prénom </label>\r\n                                <div class=\"\">\r\n                                    <div class=\"input-group\">\r\n                                        <span style=\"margin-right: 10px;\">\r\n                                            <i class=\"fa fa-user fa-2x\" aria-hidden=\"true\"></i></span>\r\n                                        <input [(ngModel)]=\"voyageur.prenom\" formControlName=\"prenom\" id=\"prenom\"\r\n                                            name=\"prenom\" placeholder=\"Prénom\" class=\"form-control\" required=\"true\"\r\n                                            value=\"\" type=\"text\" required ngModel>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-md-4 control-label\">Nom </label>\r\n                                <div class=\"\">\r\n                                    <div class=\"input-group\">\r\n                                        <span style=\"margin-right: 10px;\">\r\n                                            <i class=\"fa fa-user fa-2x\" aria-hidden=\"true\"></i></span>\r\n                                        <input [(ngModel)]=\"voyageur.nom\" formControlName=\"nom\" id=\"nom\" name=\"nom\"\r\n                                            placeholder=\"Nom\" class=\"form-control\" required=\"true\" value=\"\" type=\"text\"\r\n                                            required ngModel>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-md-4 control-label\">Date de naissance</label>\r\n                                <div class=\"\">\r\n                                    <div class=\"input-group\"><span style=\"margin-right: 10px;\"><i\r\n                                                class=\"fa fa-birthday-cake fa-2x\" aria-hidden=\"true\"></i></span>\r\n                                        <input [(ngModel)]=\"voyageur.dateNaissance\" formControlName=\"dateNaissance\"\r\n                                            id=\"dateNaissance\" name=\"dateNaissance\" placeholder=\"Date de naissance\"\r\n                                            class=\"form-control\" required=\"true\" type=\"date\" value=\"\" required ngModel>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- </div> -->\r\n                            <!-- </div>\r\n                            </div> -->\r\n                            <button (click)=\"addParticipants()\" type=\"button\" class=\"btn btn-primary\">Ajouter un\r\n                                participant</button>\r\n                            <button class=\"btn btn-primary pull-right\"\r\n                                type=\"submit\">Commander le voyage</button>\r\n                        </fieldset>\r\n                    </form>\r\n                    <div class=\"col-sm-10\">\r\n\r\n                    </div>\r\n                </td>\r\n\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    </div>\r\n</div>\r\n</div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyage-liste/voyage-liste.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyage-liste/voyage-liste.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container py-5\" style=\"margin-top:5%;\">\r\n    <!-- For Demo Purpose -->\r\n    <header class=\"text-center\">\r\n        <h2 class=\"display-8 font-weight-bold\">Nos destinations</h2>\r\n        <h5 class=\"font-italic text-muted mb-0\">Idées de vacances et destinations populaires</h5>\r\n    </header>\r\n\r\n   \r\n\r\n    <!-- VOYAGE -->\r\n    <div class=\"py-5\">\r\n        <h3 class=\"font-weight-bold mb-0\">Consulter nos voyages</h3>\r\n        <p class=\"font-italic text-muted mb-4\">Idées de séjours, vacances ...</p>\r\n    \r\n     <!-- BAR DE RECHERCHE -->\r\n\r\n     <!-- <select id=\"boot-multiselect-demo\" multiple=\"multiple\">\r\n            <option value=\"jQuery\">jQuery Tutorials</option>\r\n            <option value=\"Bootstrap\">Bootstrap Framework</option>\r\n            <option value=\"HTML\">HTML</option>\r\n            <option value=\"CSS\" >CSS</option>\r\n            <option value=\"Angular\">Angular</option>\r\n            <option value=\"Angular\">javascript</option>\r\n            <option value=\"Java\">Java</option>\r\n            <option value=\"Python\">Python</option>\r\n            <option value=\"MySQL\">MySQL</option>\r\n            <option value=\"Oracle\">Oracle</option>\r\n    </select> -->\r\n    \r\n        <!-- / -->\r\n\r\n        <div class=\"row\">\r\n            <!-- IMAGE-->\r\n            <div *ngFor=\"let dateVoyage of datesVoyages; let i = index;\" class=\"col-lg-6 mb-3 mb-lg-0 separation\">\r\n                <div  class=\"hover hover-1 text-white rounded\">\r\n                    <a [routerLink]=\"['/destination-details', dateVoyage.fk_destination]\" style=\"color: #fafafa;\">\r\n                        <!-- <a [routerLink]=\"[]\" style=\"color:  #fafafa;\"> -->\r\n                    \r\n                    <img *ngIf=\"dateVoyage.imageURL\" [src]=\"'http://127.0.0.1:8081/'+ dateVoyage.imageURL\">\r\n                    <img *ngIf=\"!dateVoyage.imageURL\" src=\"http://127.0.0.1:8081/default-image.png\">\r\n                    <!-- <img *ngIf=\"dateVoyage.imageURL\" [src]=\"'http://192.168.1.46:8080/'+ dateVoyage.imageURL\">\r\n                    <img *ngIf=\"!dateVoyage.imageURL\" src=\"http://192.168.1.46:8080/default-image.png\"> -->\r\n                        <div class=\"hover-overlay\"></div>\r\n                        <div class=\"hover-1-content px-5 py-4\">\r\n                            <h3 class=\"hover-1-title text-uppercase font-weight-bold mb-0\" style=\"text-shadow: 1px 1px 1px #424242\"> <span\r\n                                    class=\"font-weight-light\"> Destination </span>{{dateVoyage.nmDestination}}</h3>\r\n                            <p style=\"text-shadow: 1px 1px 1px #424242;\" class=\"hover-1-description font-weight-light mb-0\">Trouvez vite nos voyages à partir de : {{dateVoyage.tarifUnitaireHT}} € !</p>\r\n                        </div>\r\n                    </a>\r\n                    </div>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n  \r\n\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyage/voyage.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyage/voyage.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-voyage-liste></app-voyage-liste>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component.html": 
        /*!*************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component.html ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<br>\r\n<br>\r\n<table class=\"table table-striped table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <th>region</th>\r\n                <th>dateAller</th>\r\n                <th>dateRetour</th>\r\n                <th>prixTotalHT</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>{{voyage?.region}}</td>\r\n                <td>{{voyage?.dateVoyage.dateAller | date : 'short'}}</td>\r\n                <td>{{voyage?.dateVoyage.dateRetour | date : 'short'}}</td>\r\n                <td>{{voyage?.prixTotalHT}}€</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <th>civilite</th>\r\n                <th>nom</th>\r\n                <th>prenom</th>\r\n                <th>dateNaissance</th>\r\n                <th>             </th>\r\n            </tr>\r\n        </thead>\r\n        </table>\r\n        <div *ngFor=\"let voyageur of voyage?.voyageurs; let i = index;\">\r\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n            <table class=\"table table-striped table-hover\">\r\n                <tbody>\r\n                    <tr>\r\n                        <td>\r\n                            <input id=\"index\" name=\"index\"\r\n                                        class=\"form-control\" [(ngModel)]=\"i\"\r\n                                        type=\"hidden\" required ngModel>\r\n                        </td>\r\n                        <td>\r\n                            <input id=\"id\" name=\"id\"\r\n                                class=\"form-control\" [(ngModel)]=\"voyageur.id\"\r\n                                type=\"hidden\" required ngModel>\r\n                        </td>\r\n                        <td>\r\n                            <input id=\"civilite\" name=\"civilite\"\r\n                                class=\"form-control\" required=\"true\" [(ngModel)]=\"voyageur.civilite\"\r\n                                type=\"text\" required ngModel>\r\n                        </td>\r\n                        <td>\r\n                        <input id=\"nom\" name=\"nom\"\r\n                                    class=\"form-control\" required=\"true\" [(ngModel)]=\"voyageur.nom\"\r\n                                    type=\"text\" required ngModel>\r\n                        </td>\r\n                        <td>\r\n                        <input id=\"prenom\" name=\"prenom\"\r\n                                            class=\"form-control\" required=\"true\" [(ngModel)]=\"voyageur.prenom\"\r\n                                            type=\"text\" required ngModel>\r\n                        </td>\r\n                        <td>\r\n                        <input id=\"dateNaissance\" name=\"dateNaissance\"\r\n                                            class=\"form-control\" required=\"true\" [ngModel] =\"voyageur.dateNaissance | date:'yyyy-MM-dd'\" type=\"date\" required ngModel>\r\n                        </td>\r\n                        <td>\r\n                            <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">modifier</button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </form>\r\n    </div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyages-commandes/voyages-commandes.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyages-commandes/voyages-commandes.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<br>\r\n<br>\r\n<table class=\"table table-striped table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <th>#</th>\r\n            <th>region</th>\r\n            <th>dateAller</th>\r\n            <th>dateRetour</th>\r\n            <th>prixTotalHT</th>\r\n            <th>detail du voyage</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let voyage of voyages; let i = index;\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{voyage?.region}}</td>\r\n            <td>{{voyage?.dateVoyage.dateAller | date : 'short'}}</td>\r\n            <td>{{voyage?.dateVoyage.dateRetour | date : 'short'}}</td>\r\n            <td>{{voyage?.prixTotalHT}}€</td>\r\n            <td><a class=\"btn btn-primary btn-lg btn-block\" [routerLink]=\"['/voyages-commandes-detail', voyage?.id]\">Modifier</a></td>\r\n        </tr>\r\n    </tbody>\r\n</table>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _voyage_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voyage/components/carousel/carousel.component */ "./src/app/voyage/components/carousel/carousel.component.ts");
            /* harmony import */ var _voyage_pages_voyage_voyage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voyage/pages/voyage/voyage.component */ "./src/app/voyage/pages/voyage/voyage.component.ts");
            /* harmony import */ var _voyage_components_destination_details_destination_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./voyage/components/destination-details/destination-details.component */ "./src/app/voyage/components/destination-details/destination-details.component.ts");
            /* harmony import */ var _voyage_pages_voyage_creation_voyage_creation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voyage/pages/voyage-creation/voyage-creation.component */ "./src/app/voyage/pages/voyage-creation/voyage-creation.component.ts");
            /* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
            /* harmony import */ var _voyage_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./voyage/pages/login/login.component */ "./src/app/voyage/pages/login/login.component.ts");
            /* harmony import */ var _voyage_pages_voyages_commandes_voyages_commandes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./voyage/pages/voyages-commandes/voyages-commandes.component */ "./src/app/voyage/pages/voyages-commandes/voyages-commandes.component.ts");
            /* harmony import */ var _voyage_pages_voyages_commandes_detail_voyages_commandes_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component */ "./src/app/voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component.ts");
            /* harmony import */ var _voyage_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./voyage/pages/signup/signup.component */ "./src/app/voyage/pages/signup/signup.component.ts");
            /* harmony import */ var _voyage_pages_voyage_confirmation_commande_voyage_confirmation_commande_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./voyage/pages/voyage-confirmation-commande/voyage-confirmation-commande.component */ "./src/app/voyage/pages/voyage-confirmation-commande/voyage-confirmation-commande.component.ts");
            var routes = [
                {
                    path: 'login', component: _voyage_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
                },
                {
                    path: 'home', component: _voyage_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]
                },
                {
                    path: 'voyages', component: _voyage_pages_voyage_voyage_component__WEBPACK_IMPORTED_MODULE_4__["VoyageComponent"]
                },
                {
                    path: 'destination-details/:id', component: _voyage_components_destination_details_destination_details_component__WEBPACK_IMPORTED_MODULE_5__["DestinationDetailsComponent"]
                },
                {
                    path: 'voyage-creation/:id', component: _voyage_pages_voyage_creation_voyage_creation_component__WEBPACK_IMPORTED_MODULE_6__["VoyageCreationComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]]
                },
                {
                    path: 'voyage-confirmation', component: _voyage_pages_voyage_confirmation_commande_voyage_confirmation_commande_component__WEBPACK_IMPORTED_MODULE_12__["VoyageConfirmationCommandeComponent"]
                },
                {
                    path: 'voyages-commandes', component: _voyage_pages_voyages_commandes_voyages_commandes_component__WEBPACK_IMPORTED_MODULE_9__["VoyagesCommandesComponent"]
                },
                {
                    path: 'voyages-commandes-detail/:id', component: _voyage_pages_voyages_commandes_detail_voyages_commandes_detail_component__WEBPACK_IMPORTED_MODULE_10__["VoyagesCommandesDetailComponent"]
                },
                {
                    path: 'signup', component: _voyage_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                },
                {
                    path: '**', redirectTo: 'home' //ou 'page-not-found'
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Boboyages-Angular';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _voyage_pages_voyage_voyage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./voyage/pages/voyage/voyage.component */ "./src/app/voyage/pages/voyage/voyage.component.ts");
            /* harmony import */ var _voyage_pages_voyage_liste_voyage_liste_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voyage/pages/voyage-liste/voyage-liste.component */ "./src/app/voyage/pages/voyage-liste/voyage-liste.component.ts");
            /* harmony import */ var _voyage_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./voyage/components/navbar/navbar.component */ "./src/app/voyage/components/navbar/navbar.component.ts");
            /* harmony import */ var _voyage_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./voyage/components/footer/footer.component */ "./src/app/voyage/components/footer/footer.component.ts");
            /* harmony import */ var _device_bg_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./device-bg.directive */ "./src/app/device-bg.directive.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _voyage_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./voyage/components/carousel/carousel.component */ "./src/app/voyage/components/carousel/carousel.component.ts");
            /* harmony import */ var _voyage_components_voyages_details_voyages_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./voyage/components/voyages-details/voyages-details.component */ "./src/app/voyage/components/voyages-details/voyages-details.component.ts");
            /* harmony import */ var _voyage_components_destination_details_destination_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./voyage/components/destination-details/destination-details.component */ "./src/app/voyage/components/destination-details/destination-details.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _voyage_pages_voyage_creation_voyage_creation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./voyage/pages/voyage-creation/voyage-creation.component */ "./src/app/voyage/pages/voyage-creation/voyage-creation.component.ts");
            /* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
            /* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _voyage_pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./voyage/pages/login/login.component */ "./src/app/voyage/pages/login/login.component.ts");
            /* harmony import */ var _voyage_pages_voyages_commandes_voyages_commandes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./voyage/pages/voyages-commandes/voyages-commandes.component */ "./src/app/voyage/pages/voyages-commandes/voyages-commandes.component.ts");
            /* harmony import */ var _voyage_pages_voyages_commandes_detail_voyages_commandes_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component */ "./src/app/voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component.ts");
            /* harmony import */ var _voyage_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./voyage/pages/signup/signup.component */ "./src/app/voyage/pages/signup/signup.component.ts");
            /* harmony import */ var _voyage_pages_signup_check_password_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./voyage/pages/signup/check-password.directive */ "./src/app/voyage/pages/signup/check-password.directive.ts");
            /* harmony import */ var _voyage_pages_voyage_confirmation_commande_voyage_confirmation_commande_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./voyage/pages/voyage-confirmation-commande/voyage-confirmation-commande.component */ "./src/app/voyage/pages/voyage-confirmation-commande/voyage-confirmation-commande.component.ts");
            // import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
            // import { InMemoryDataServiceService } from 'src/app/in-memory-data-service.service';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _voyage_pages_voyage_voyage_component__WEBPACK_IMPORTED_MODULE_5__["VoyageComponent"],
                        _voyage_pages_voyage_liste_voyage_liste_component__WEBPACK_IMPORTED_MODULE_6__["VoyageListeComponent"],
                        _voyage_components_voyages_details_voyages_details_component__WEBPACK_IMPORTED_MODULE_12__["VoyagesDetailsComponent"],
                        _voyage_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                        _voyage_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                        _device_bg_directive__WEBPACK_IMPORTED_MODULE_9__["DeviceBgDirective"],
                        _voyage_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"],
                        _voyage_components_destination_details_destination_details_component__WEBPACK_IMPORTED_MODULE_13__["DestinationDetailsComponent"],
                        _voyage_pages_voyage_creation_voyage_creation_component__WEBPACK_IMPORTED_MODULE_16__["VoyageCreationComponent"],
                        _voyage_pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                        _voyage_pages_voyages_commandes_voyages_commandes_component__WEBPACK_IMPORTED_MODULE_19__["VoyagesCommandesComponent"],
                        _voyage_pages_voyages_commandes_detail_voyages_commandes_detail_component__WEBPACK_IMPORTED_MODULE_20__["VoyagesCommandesDetailComponent"],
                        _voyage_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
                        _voyage_pages_signup_check_password_directive__WEBPACK_IMPORTED_MODULE_22__["CheckPasswordDirective"],
                        _voyage_pages_voyage_confirmation_commande_voyage_confirmation_commande_component__WEBPACK_IMPORTED_MODULE_23__["VoyageConfirmationCommandeComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                        ng2_validation__WEBPACK_IMPORTED_MODULE_17__["CustomFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
                        //   HttpClientInMemoryWebApiModule.forRoot(
                        //     InMemoryDataServiceService, {dataEncapsulation:false} 
                        // ),
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth-guard.service.ts": 
        /*!***************************************!*\
          !*** ./src/app/auth-guard.service.ts ***!
          \***************************************/
        /*! exports provided: AuthGuardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () { return AuthGuardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            var AuthGuardService = /** @class */ (function () {
                function AuthGuardService(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
                //   if(!this.authService.isLoggedIn()) {
                //     this.router.navigate(['/login']);
                //   }
                //   return this.authService.isLoggedIn();
                // }
                AuthGuardService.prototype.canActivate = function (next, state) {
                    var url = state.url;
                    return this.checkLogin(url);
                };
                AuthGuardService.prototype.checkLogin = function (url) {
                    if (this.authService.isLoggedIn()) {
                        return true;
                    }
                    // Store the attempted URL for redirecting
                    this.authService.redirectUrl = url;
                    // Navigate to the login page with extras
                    this.router.navigate(['/login']);
                    return this.authService.isLoggedIn();
                };
                return AuthGuardService;
            }());
            AuthGuardService.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuardService);
            /***/ 
        }),
        /***/ "./src/app/auth.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/auth.service.ts ***!
          \*********************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
            var AuthService = /** @class */ (function () {
                function AuthService(router, httpClient, userService) {
                    this.router = router;
                    this.httpClient = httpClient;
                    this.userService = userService;
                    this.isAuth = false;
                    this.LogInOut = "LogIn";
                    this.userName = "Déconnecté";
                    this.getLoggedInName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.getLoggedInOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                AuthService.prototype.isLoggedIn = function () {
                    this.isAuth = JSON.parse(localStorage.getItem('auth'));
                    return this.isAuth;
                };
                AuthService.prototype.signUp = function (user, cb) {
                    var _this = this;
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                        .set('nom', user.nom)
                        .set('password', user.passwords.passwordA);
                    this.httpClient.post('user/new', params).subscribe(function (status) {
                        if (status) {
                            _this.httpClient.post('connexion', params).subscribe(function (status) {
                                if (status) {
                                    _this.isAuth = true;
                                    _this.router.navigate([_this.redirectUrl]);
                                    localStorage.setItem('auth', 'true');
                                    localStorage.setItem('userName', user.nom);
                                    localStorage.setItem('LogInOut', 'LogOut');
                                    _this.getLoggedInName.emit(user.nom);
                                    _this.getLoggedInOut.emit('LogOut');
                                }
                                else {
                                    cb("Identifiants incorrects");
                                }
                            }, function (err) { return cb("Identifiants incorrects"); });
                        }
                        else {
                            cb("Le nom d'utilisateur choisi est déjà pris, merci de renseigner un autre nom d'utilisateur.");
                        }
                    }, function (err) { return cb("Le nom d'utilisateur choisi est déjà pris, merci de renseigner un autre nom d'utilisateur."); });
                };
                AuthService.prototype.logIn = function (user, cb) {
                    var _this = this;
                    console.log(user.nom, user.password);
                    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
                        .set('nom', user.nom)
                        .set('password', user.password);
                    this.httpClient.post('connexion', params).subscribe(function (status) {
                        if (status) {
                            _this.isAuth = true;
                            _this.router.navigate([_this.redirectUrl]);
                            localStorage.setItem('auth', 'true');
                            localStorage.setItem('userName', user.nom);
                            localStorage.setItem('LogInOut', 'LogOut');
                            _this.getLoggedInName.emit(user.nom);
                            _this.getLoggedInOut.emit('LogOut');
                        }
                        else {
                            cb("Identifiants incorrects");
                        }
                    }, function (err) { return cb("Identifiants incorrects"); });
                };
                AuthService.prototype.logOut = function () {
                    this.isAuth = false;
                    localStorage.removeItem('auth');
                    this.getLoggedInName.emit('Déconnecté');
                    this.getLoggedInOut.emit('LogIn');
                    localStorage.setItem('userName', 'Déconnecté');
                    localStorage.setItem('LogInOut', 'LogIn');
                    this.router.navigate(['/home']);
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], AuthService.prototype, "getLoggedInName", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], AuthService.prototype, "getLoggedInOut", void 0);
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/device-bg.directive.ts": 
        /*!****************************************!*\
          !*** ./src/app/device-bg.directive.ts ***!
          \****************************************/
        /*! exports provided: DeviceBgDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceBgDirective", function () { return DeviceBgDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DeviceBgDirective = /** @class */ (function () {
                function DeviceBgDirective() {
                }
                return DeviceBgDirective;
            }());
            DeviceBgDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[appDeviceBg]'
                })
            ], DeviceBgDirective);
            /***/ 
        }),
        /***/ "./src/app/shared/user.ts": 
        /*!********************************!*\
          !*** ./src/app/shared/user.ts ***!
          \********************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User(nom) {
                    this.nom = nom;
                }
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/app/user.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/user.service.ts ***!
          \*********************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/user */ "./src/app/shared/user.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var UserService = /** @class */ (function () {
                function UserService() {
                    this.user = new _shared_user__WEBPACK_IMPORTED_MODULE_2__["User"]('Erwan');
                }
                UserService.prototype.getUser = function () {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.user);
                };
                UserService.prototype.setUser = function (user) {
                    this.user = user;
                };
                return UserService;
            }());
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/voyage/components/carousel/carousel.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/voyage/components/carousel/carousel.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* \r\nbody{\r\n\tmargin-top: 65px; \r\n}\r\n.container{\r\n\tmargin-top: 65px; \r\n} */\r\nheader {\r\n  position: relative;\r\n  background-color: black;\r\n  height: 75vh;\r\n  min-height: 25rem;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\nheader video {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  z-index: 0;\r\n  transform: translateX(-50%) translateY(-50%);\r\n}\r\nheader .container {\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\nheader .overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: black;\r\n  opacity: 0.5;\r\n  z-index: 1;\r\n}\r\n@media (pointer: coarse) and (hover: none) {\r\n  header {\r\n    background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;\r\n  }\r\n  header video {\r\n    display: none;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm95YWdlL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSDtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUlWLDRDQUE0QztBQUM5QztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUVBO0VBQ0U7SUFDRSx3R0FBd0c7RUFDMUc7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdm95YWdlL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxyXG5ib2R5e1xyXG5cdG1hcmdpbi10b3A6IDY1cHg7IFxyXG59XHJcbi5jb250YWluZXJ7XHJcblx0bWFyZ2luLXRvcDogNjVweDsgXHJcbn0gKi9cclxuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiA3NXZoO1xyXG4gIG1pbi1oZWlnaHQ6IDI1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmhlYWRlciB2aWRlbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgei1pbmRleDogMDtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG5oZWFkZXIgLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmhlYWRlciAub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIGFuZCAoaG92ZXI6IG5vbmUpIHtcclxuICBoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vWFQ1T0luYUVsTXcvMTYwMHg5MDAnKSBibGFjayBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBzY3JvbGw7XHJcbiAgfVxyXG4gIGhlYWRlciB2aWRlbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/voyage/components/carousel/carousel.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/voyage/components/carousel/carousel.component.ts ***!
          \******************************************************************/
        /*! exports provided: CarouselComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () { return CarouselComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CarouselComponent = /** @class */ (function () {
                function CarouselComponent() {
                }
                CarouselComponent.prototype.ngOnInit = function () {
                };
                return CarouselComponent;
            }());
            CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-carousel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/carousel/carousel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carousel.component.css */ "./src/app/voyage/components/carousel/carousel.component.css")).default]
                })
            ], CarouselComponent);
            /***/ 
        }),
        /***/ "./src/app/voyage/components/destination-details/destination-details.component.css": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/voyage/components/destination-details/destination-details.component.css ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/******** Carousel **************/\r\nngb-carousel .picsum-img-wrapper {\r\n    position: relative;\r\n    height: 0;\r\n    padding-top: 55%; /* Keep ratio for 900x500 images */\r\n  }\r\nngb-carousel .picsum-img-wrapper>img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n/****************** Descriptif  ************************/\r\n/*\r\n*\r\n* ==========================================\r\n* CUSTOM UTIL CLASSES\r\n* ==========================================\r\n*\r\n*/\r\n.custom-scrollbar-js,\r\n.custom-scrollbar-css {\r\n  height: 200px;\r\n}\r\n/* Custom Scrollbar using CSS */\r\n.custom-scrollbar-css {\r\n  overflow-y: scroll;\r\n}\r\n/* scrollbar width */\r\n.custom-scrollbar-css::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n/* scrollbar track */\r\n.custom-scrollbar-css::-webkit-scrollbar-track {\r\n  background: #eee;\r\n}\r\n/* scrollbar handle */\r\n.custom-scrollbar-css::-webkit-scrollbar-thumb {\r\n  border-radius: 1rem;\r\n  background-color: #00d2ff;\r\n  background-image: linear-gradient(to top, #00d2ff 0%, #3a7bd5 100%);\r\n}\r\n/**************** Tableau  *******************/\r\n.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle) {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n.btn-group>.btn:first-child {\r\n  margin-left: 0;\r\n}\r\n.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\r\n  border-radius: 0;\r\n}\r\n.btn-group .btn+.btn, .btn-group .btn+.btn-group, .btn-group .btn-group+.btn, .btn-group .btn-group+.btn-group {\r\n  margin-left: -1px;\r\n}\r\n.btn-group>.btn:last-child:not(:first-child), .btn-group>.dropdown-toggle:not(:first-child) {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n[data-toggle=buttons]>.btn input[type=checkbox], [data-toggle=buttons]>.btn input[type=radio], [data-toggle=buttons]>.btn-group>.btn input[type=checkbox], [data-toggle=buttons]>.btn-group>.btn input[type=radio] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}\r\ninput[type=checkbox], input[type=radio] {\r\n  margin: 4px 0 0;\r\n  margin-top: 1px\\9;\r\n  line-height: normal;\r\n}\r\n.table-wrapper {\r\n    width: 850px;\r\n    background: #fff;\r\n    padding: 20px 30px 5px;\r\n    margin: 30px auto;\r\n    box-shadow: 0 0 1px 0 rgba(0,0,0,.25);\r\n}\r\n.table-title .btn-group {\r\nfloat: right;\r\n}\r\n.table-title .btn {\r\nmin-width: 50px;\r\nborder-radius: 2px;\r\nborder: none;\r\npadding: 6px 12px;\r\nfont-size: 95%;\r\noutline: none !important;\r\nheight: 30px;\r\n}\r\n.table-title {\r\nborder-bottom: 1px solid #e9e9e9;\r\npadding-bottom: 15px;\r\nmargin-bottom: 5px;\r\nbackground: rgb(0, 50, 74);\r\nmargin: -20px -31px 10px;\r\npadding: 15px 30px;\r\ncolor: #fff;\r\n}\r\n.table-title h2 {\r\nmargin: 2px 0 0;\r\nfont-size: 24px;\r\n}\r\ntable.table tr th, table.table tr td {\r\n    border-color: #e9e9e9;\r\npadding: 12px 15px;\r\nvertical-align: middle;\r\n}\r\ntable.table tr th:first-child {\r\nwidth: 40px;\r\n}\r\ntable.table tr th:last-child {\r\nwidth: 100px;\r\n}\r\ntable.table-striped tbody tr:nth-of-type(odd) {\r\n  background-color: #fcfcfc;\r\n}\r\ntable.table-striped.table-hover tbody tr:hover {\r\nbackground: #f5f5f5;\r\n}\r\ntable.table td a {\r\n    color: #2196f3;\r\n}\r\ntable.table td .btn.manage {\r\npadding: 2px 10px;\r\nbackground: #37BC9B;\r\ncolor: #fff;\r\nborder-radius: 2px;\r\n}\r\ntable.table td .btn.manage:hover {\r\nbackground: #2e9c81;\t\t\r\n}\r\n.label {\r\n  display: inline;\r\n  padding: .2em .6em .3em;\r\n  font-size: 75%;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  color: #fff;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: .25em;\r\n}\r\n.label-success {\r\n  background-color: #5cb85c;\r\n}\r\n.label-danger {\r\n  background-color: #d9534f;\r\n}\r\n.label-warning {\r\n  background-color: #f0ad4e;\r\n}\r\n/**************  *************************************/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm95YWdlL2NvbXBvbmVudHMvZGVzdGluYXRpb24tZGV0YWlscy9kZXN0aW5hdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0IsRUFBRSxrQ0FBa0M7RUFDdEQ7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0VBQ1Y7QUFFQSx3REFBd0Q7QUFDeEQ7Ozs7OztDQU1EO0FBQ0Q7O0VBRUUsYUFBYTtBQUNmO0FBR0EsK0JBQStCO0FBQy9CO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsVUFBVTtBQUNaO0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtRUFBbUU7QUFDckU7QUFHRSw4Q0FBOEM7QUFDaEQ7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIscUNBQXFDO0FBQ3pDO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Qsd0JBQXdCO0FBQ3hCLFlBQVk7QUFDWjtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLHdCQUF3QjtBQUN4QixrQkFBa0I7QUFDbEIsV0FBVztBQUNYO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsZUFBZTtBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0Esc0RBQXNEIiwiZmlsZSI6InNyYy9hcHAvdm95YWdlL2NvbXBvbmVudHMvZGVzdGluYXRpb24tZGV0YWlscy9kZXN0aW5hdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKiogQ2Fyb3VzZWwgKioqKioqKioqKioqKiovXHJcbm5nYi1jYXJvdXNlbCAucGljc3VtLWltZy13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBhZGRpbmctdG9wOiA1NSU7IC8qIEtlZXAgcmF0aW8gZm9yIDkwMHg1MDAgaW1hZ2VzICovXHJcbiAgfVxyXG4gIFxyXG4gIG5nYi1jYXJvdXNlbCAucGljc3VtLWltZy13cmFwcGVyPmltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKioqIERlc2NyaXB0aWYgICoqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvKlxyXG4qXHJcbiogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogQ1VTVE9NIFVUSUwgQ0xBU1NFU1xyXG4qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qXHJcbiovXHJcbi5jdXN0b20tc2Nyb2xsYmFyLWpzLFxyXG4uY3VzdG9tLXNjcm9sbGJhci1jc3Mge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBDdXN0b20gU2Nyb2xsYmFyIHVzaW5nIENTUyAqL1xyXG4uY3VzdG9tLXNjcm9sbGJhci1jc3Mge1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLyogc2Nyb2xsYmFyIHdpZHRoICovXHJcbi5jdXN0b20tc2Nyb2xsYmFyLWNzczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbi8qIHNjcm9sbGJhciB0cmFjayAqL1xyXG4uY3VzdG9tLXNjcm9sbGJhci1jc3M6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG59XHJcblxyXG4vKiBzY3JvbGxiYXIgaGFuZGxlICovXHJcbi5jdXN0b20tc2Nyb2xsYmFyLWNzczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDJmZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDBkMmZmIDAlLCAjM2E3YmQ1IDEwMCUpO1xyXG59XHJcblxyXG5cclxuICAvKioqKioqKioqKioqKioqKiBUYWJsZWF1ICAqKioqKioqKioqKioqKioqKioqL1xyXG4uYnRuLWdyb3VwPi5idG46Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSkge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4uYnRuLWdyb3VwPi5idG46Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi5idG4tZ3JvdXA+LmJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4uYnRuLWdyb3VwIC5idG4rLmJ0biwgLmJ0bi1ncm91cCAuYnRuKy5idG4tZ3JvdXAsIC5idG4tZ3JvdXAgLmJ0bi1ncm91cCsuYnRuLCAuYnRuLWdyb3VwIC5idG4tZ3JvdXArLmJ0bi1ncm91cCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbn1cclxuLmJ0bi1ncm91cD4uYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCksIC5idG4tZ3JvdXA+LmRyb3Bkb3duLXRvZ2dsZTpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcbltkYXRhLXRvZ2dsZT1idXR0b25zXT4uYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdLCBbZGF0YS10b2dnbGU9YnV0dG9uc10+LmJ0biBpbnB1dFt0eXBlPXJhZGlvXSwgW2RhdGEtdG9nZ2xlPWJ1dHRvbnNdPi5idG4tZ3JvdXA+LmJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSwgW2RhdGEtdG9nZ2xlPWJ1dHRvbnNdPi5idG4tZ3JvdXA+LmJ0biBpbnB1dFt0eXBlPXJhZGlvXSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNsaXA6IHJlY3QoMCwwLDAsMCk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1jaGVja2JveF0sIGlucHV0W3R5cGU9cmFkaW9dIHtcclxuICBtYXJnaW46IDRweCAwIDA7XHJcbiAgbWFyZ2luLXRvcDogMXB4XFw5O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi50YWJsZS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA4NTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHggNXB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSgwLDAsMCwuMjUpO1xyXG59XHJcbi50YWJsZS10aXRsZSAuYnRuLWdyb3VwIHtcclxuZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi50YWJsZS10aXRsZSAuYnRuIHtcclxubWluLXdpZHRoOiA1MHB4O1xyXG5ib3JkZXItcmFkaXVzOiAycHg7XHJcbmJvcmRlcjogbm9uZTtcclxucGFkZGluZzogNnB4IDEycHg7XHJcbmZvbnQtc2l6ZTogOTUlO1xyXG5vdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbmhlaWdodDogMzBweDtcclxufVxyXG4udGFibGUtdGl0bGUge1xyXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcclxucGFkZGluZy1ib3R0b206IDE1cHg7XHJcbm1hcmdpbi1ib3R0b206IDVweDtcclxuYmFja2dyb3VuZDogcmdiKDAsIDUwLCA3NCk7XHJcbm1hcmdpbjogLTIwcHggLTMxcHggMTBweDtcclxucGFkZGluZzogMTVweCAzMHB4O1xyXG5jb2xvcjogI2ZmZjtcclxufVxyXG4udGFibGUtdGl0bGUgaDIge1xyXG5tYXJnaW46IDJweCAwIDA7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxufVxyXG50YWJsZS50YWJsZSB0ciB0aCwgdGFibGUudGFibGUgdHIgdGQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTllOWU5O1xyXG5wYWRkaW5nOiAxMnB4IDE1cHg7XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxudGFibGUudGFibGUgdHIgdGg6Zmlyc3QtY2hpbGQge1xyXG53aWR0aDogNDBweDtcclxufVxyXG50YWJsZS50YWJsZSB0ciB0aDpsYXN0LWNoaWxkIHtcclxud2lkdGg6IDEwMHB4O1xyXG59XHJcbnRhYmxlLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcclxufVxyXG50YWJsZS50YWJsZS1zdHJpcGVkLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHtcclxuYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG50YWJsZS50YWJsZSB0ZCBhIHtcclxuICAgIGNvbG9yOiAjMjE5NmYzO1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIC5idG4ubWFuYWdlIHtcclxucGFkZGluZzogMnB4IDEwcHg7XHJcbmJhY2tncm91bmQ6ICMzN0JDOUI7XHJcbmNvbG9yOiAjZmZmO1xyXG5ib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxudGFibGUudGFibGUgdGQgLmJ0bi5tYW5hZ2U6aG92ZXIge1xyXG5iYWNrZ3JvdW5kOiAjMmU5YzgxO1x0XHRcclxufVxyXG4ubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nOiAuMmVtIC42ZW0gLjNlbTtcclxuICBmb250LXNpemU6IDc1JTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICBib3JkZXItcmFkaXVzOiAuMjVlbTtcclxufVxyXG5cclxuLmxhYmVsLXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbn1cclxuLmxhYmVsLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcclxufVxyXG4ubGFiZWwtd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcclxufVxyXG4vKioqKioqKioqKioqKiogICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovIl19 */");
            /***/ 
        }),
        /***/ "./src/app/voyage/components/destination-details/destination-details.component.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/voyage/components/destination-details/destination-details.component.ts ***!
          \****************************************************************************************/
        /*! exports provided: DestinationDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationDetailsComponent", function () { return DestinationDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_services_destination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/destination.service */ "./src/app/voyage/shared/services/destination.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var DestinationDetailsComponent = /** @class */ (function () {
                function DestinationDetailsComponent(destinationService, activatedRoute, router) {
                    this.destinationService = destinationService;
                    this.activatedRoute = activatedRoute;
                    this.router = router;
                    this.images = ["monimage.jpg", "lalaa.png"];
                    this.loadingError$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    this.subscriptions = [];
                }
                DestinationDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.activatedRoute.paramMap.subscribe(function (map) {
                        var id = +map.get('id');
                        _this.destinationService.getDestinationById(id).subscribe(function (destination) {
                            _this.destination = destination;
                            // Object.assign({}, [this.destination]);
                            // JSON.stringify(this.destination)
                            // this.subscriptions = this.destination;
                            console.log(_this.destination);
                        }, function (error) { return console.log(" Error is : " + error); }, function () { return console.log("finished"); });
                        console.log(_this.sub);
                    });
                    $(document).ready(function () {
                        $(".btn-group .btn").click(function () {
                            var inputValue = $(this).find("input").val();
                            if (inputValue != 'all') {
                                var target = $('table tr[data-status="' + inputValue + '"]');
                                $("table tbody tr").not(target).hide();
                                target.fadeIn();
                            }
                            else {
                                $("table tbody tr").fadeIn();
                            }
                        });
                        // Changing the class of status label to support Bootstrap 4
                        var bs = $.fn.tooltip.Constructor.VERSION;
                        var str = bs.split(".");
                        if (str[0] == 4) {
                            $(".label").each(function () {
                                var classStr = $(this).attr("class");
                                var newClassStr = classStr.replace(/label/g, "badge");
                                $(this).removeAttr("class").addClass(newClassStr);
                            });
                        }
                    });
                };
                return DestinationDetailsComponent;
            }());
            DestinationDetailsComponent.ctorParameters = function () { return [
                { type: _shared_services_destination_service__WEBPACK_IMPORTED_MODULE_3__["DestinationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DestinationDetailsComponent.prototype, "destination", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', { static: true })
            ], DestinationDetailsComponent.prototype, "carousel", void 0);
            DestinationDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-destination-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./destination-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/destination-details/destination-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./destination-details.component.css */ "./src/app/voyage/components/destination-details/destination-details.component.css")).default]
                })
            ], DestinationDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/voyage/components/footer/footer.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/voyage/components/footer/footer.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#sticky-footer {\r\n    /* flex-shrink: none; */\r\n    /* position: fixed; */\r\n   left: 0;\r\n   bottom: 0;\r\n   width: 100%;\r\n   color: white;\r\n   text-align: center;\r\n}\r\n\r\n.fa{\r\n    margin-right: 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm95YWdlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtHQUN0QixPQUFPO0dBQ1AsU0FBUztHQUNULFdBQVc7R0FDWCxZQUFZO0dBQ1osa0JBQWtCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdm95YWdlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N0aWNreS1mb290ZXIge1xyXG4gICAgLyogZmxleC1zaHJpbms6IG5vbmU7ICovXHJcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgIGxlZnQ6IDA7XHJcbiAgIGJvdHRvbTogMDtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/voyage/components/footer/footer.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/voyage/components/footer/footer.component.ts ***!
          \**************************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/voyage/components/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/voyage/components/navbar/navbar.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/voyage/components/navbar/navbar.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZveWFnZS9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/voyage/components/navbar/navbar.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/voyage/components/navbar/navbar.component.ts ***!
          \**************************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
            /* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent(userService, authService) {
                    var _this = this;
                    this.userService = userService;
                    this.authService = authService;
                    this.isMenuCollapsed = true;
                    this.isAuth = false;
                    this.userName = localStorage.getItem('userName');
                    this.LogInOut = localStorage.getItem('LogInOut');
                    authService.getLoggedInName.subscribe(function (name) { return _this.changeName(name); });
                    authService.getLoggedInOut.subscribe(function (loginout) { return _this.changeLogger(loginout); });
                }
                NavbarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.getUser().subscribe(function (user) { _this.user = user; });
                    this.isAuth = this.authService.isLoggedIn();
                };
                // onLogIn() {
                //   this.authService.logIn();
                //   this.isAuth = this.authService.isLoggedIn();
                // }
                NavbarComponent.prototype.onLogOut = function () {
                    this.authService.logOut();
                    this.isAuth = this.authService.isLoggedIn();
                };
                NavbarComponent.prototype.changeName = function (name) {
                    this.userName = name;
                };
                NavbarComponent.prototype.changeLogger = function (loginout) {
                    this.LogInOut = loginout;
                };
                return NavbarComponent;
            }());
            NavbarComponent.ctorParameters = function () { return [
                { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/voyage/components/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/voyage/components/voyages-details/voyages-details.component.css": 
        /*!*********************************************************************************!*\
          !*** ./src/app/voyage/components/voyages-details/voyages-details.component.css ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZveWFnZS9jb21wb25lbnRzL3ZveWFnZXMtZGV0YWlscy92b3lhZ2VzLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/voyage/components/voyages-details/voyages-details.component.ts": 
        /*!********************************************************************************!*\
          !*** ./src/app/voyage/components/voyages-details/voyages-details.component.ts ***!
          \********************************************************************************/
        /*! exports provided: VoyagesDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoyagesDetailsComponent", function () { return VoyagesDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var VoyagesDetailsComponent = /** @class */ (function () {
                function VoyagesDetailsComponent() {
                }
                VoyagesDetailsComponent.prototype.ngOnInit = function () {
                    console.log(this.voyage);
                };
                return VoyagesDetailsComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], VoyagesDetailsComponent.prototype, "voyage", void 0);
            VoyagesDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-voyages-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voyages-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/components/voyages-details/voyages-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voyages-details.component.css */ "./src/app/voyage/components/voyages-details/voyages-details.component.css")).default]
                })
            ], VoyagesDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/login/login.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/voyage/pages/login/login.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-control {\r\n    min-height: 41px;\r\n    background: #fff;\r\n    box-shadow: none !important;\r\n    border-color: #e3e3e3;\r\n}\r\n.form-control:focus {\r\n    border-color: #70c5c0;\r\n}\r\n.form-control, .btn {        \r\n    border-radius: 2px;\r\n}\r\n.login-form {\r\n    width: 350px;\r\n    margin: 0 auto;\r\n    padding: 100px 0 30px;\t\t\r\n}\r\n.login-form form {\r\n    color: #7a7a7a;\r\n    border-radius: 2px;\r\n    margin-bottom: 15px;\r\n    font-size: 13px;\r\n    background: #ececec;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\t\r\n    position: relative;\t\r\n}\r\n.login-form h2 {\r\n    font-size: 22px;\r\n    margin: 35px 0 25px;\r\n}\r\n.login-form .avatar {\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: -50px;\r\n    width: 95px;\r\n    height: 95px;\r\n    border-radius: 50%;\r\n    z-index: 9;\r\n    background: #70c5c0;\r\n    padding: 15px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\r\n}\r\n.login-form .avatar img {\r\n    width: 100%;\r\n}\r\n.login-form input[type=\"checkbox\"] {\r\n    margin-top: 2px;\r\n}\r\n.login-form .btn {        \r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    background: #70c5c0;\r\n    border: none;\r\n    margin-bottom: 20px;\r\n}\r\n.login-form .btn:hover, .login-form .btn:focus {\r\n    background: #50b8b3;\r\n    outline: none !important;\r\n}\r\n.login-form a {\r\n    color: #fff;\r\n    text-decoration: underline;\r\n}\r\n.login-form a:hover {\r\n    text-decoration: none;\r\n}\r\n.login-form form a {\r\n    color: #7a7a7a;\r\n    text-decoration: none;\r\n}\r\n.login-form form a:hover {\r\n    text-decoration: underline;\r\n}\r\n.invalid {\r\n    color: red;\r\n}\r\n.ng-invalid input {\r\n    border: 1px solid red;\r\n}\r\n.ng-valid {\r\n    border: 1px solid #70c5c0 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm95YWdlL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC92b3lhZ2UvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWluLWhlaWdodDogNDFweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNlM2UzZTM7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICM3MGM1YzA7XHJcbn1cclxuLmZvcm0tY29udHJvbCwgLmJ0biB7ICAgICAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4ubG9naW4tZm9ybSB7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDEwMHB4IDAgMzBweDtcdFx0XHJcbn1cclxuLmxvZ2luLWZvcm0gZm9ybSB7XHJcbiAgICBjb2xvcjogIzdhN2E3YTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgcGFkZGluZzogMzBweDtcdFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1x0XHJcbn1cclxuLmxvZ2luLWZvcm0gaDIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luOiAzNXB4IDAgMjVweDtcclxufVxyXG4ubG9naW4tZm9ybSAuYXZhdGFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgaGVpZ2h0OiA5NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJhY2tncm91bmQ6ICM3MGM1YzA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbi5sb2dpbi1mb3JtIC5hdmF0YXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHRcclxuLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4ubG9naW4tZm9ybSAuYnRuIHsgICAgICAgIFxyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzBjNWMwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubG9naW4tZm9ybSAuYnRuOmhvdmVyLCAubG9naW4tZm9ybSAuYnRuOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICM1MGI4YjM7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn0gICAgXHJcbi5sb2dpbi1mb3JtIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4ubG9naW4tZm9ybSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubG9naW4tZm9ybSBmb3JtIGEge1xyXG4gICAgY29sb3I6ICM3YTdhN2E7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmxvZ2luLWZvcm0gZm9ybSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5pbnZhbGlkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLm5nLWludmFsaWQgaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbi5uZy12YWxpZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzBjNWMwICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/login/login.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/voyage/pages/login/login.component.ts ***!
          \*******************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(authService, userService) {
                    this.authService = authService;
                    this.userService = userService;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.onLogOut = function () {
                    this.authService.logOut();
                    this.isAuth = this.authService.isLoggedIn();
                };
                LoginComponent.prototype.login = function (f) {
                    var _this = this;
                    this.authService.logIn(f.value, function (error) { return _this.error = error; });
                    this.isAuth = this.authService.isLoggedIn();
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/voyage/pages/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/signup/check-password.directive.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/voyage/pages/signup/check-password.directive.ts ***!
          \*****************************************************************/
        /*! exports provided: CheckPasswordDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPasswordDirective", function () { return CheckPasswordDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var CheckPasswordDirective_1;
            function validatePassword() {
                return function (control) {
                    var isValid = false;
                    if (control && control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                        var group = control;
                        if (group.controls['passwordA'] && group.controls['passwordB']) {
                            isValid = group.controls['passwordA'].value == group.controls['passwordB'].value;
                        }
                    }
                    if (isValid) {
                        return null;
                    }
                    else {
                        return { 'passwordCheck': 'failed' };
                    }
                };
            }
            var CheckPasswordDirective = CheckPasswordDirective_1 = /** @class */ (function () {
                function CheckPasswordDirective() {
                    this.valFn = validatePassword();
                }
                CheckPasswordDirective.prototype.validate = function (c) {
                    return this.valFn(c);
                };
                return CheckPasswordDirective;
            }());
            CheckPasswordDirective = CheckPasswordDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[appCheckPassword]',
                    providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: CheckPasswordDirective_1, multi: true }]
                })
            ], CheckPasswordDirective);
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/signup/signup.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/voyage/pages/signup/signup.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".centrer {\r\n    text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm95YWdlL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZveWFnZS9wYWdlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/signup/signup.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/voyage/pages/signup/signup.component.ts ***!
          \*********************************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(authService) {
                    this.authService = authService;
                }
                SignupComponent.prototype.ngOnInit = function () {
                };
                SignupComponent.prototype.onFormSubmit = function (userForm) {
                    var _this = this;
                    // console.log(userForm.value);
                    this.authService.signUp(userForm.value, function (error) { return _this.error = error; });
                };
                SignupComponent.prototype.resetUserForm = function (userForm) {
                    userForm.resetForm();
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/voyage/pages/signup/signup.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/voyage-confirmation-commande/voyage-confirmation-commande.component.css": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/voyage/pages/voyage-confirmation-commande/voyage-confirmation-commande.component.css ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@media screen {\r\n    @font-face {\r\n        font-family: 'Lato';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');\r\n    }\r\n\r\n    @font-face {\r\n        font-family: 'Lato';\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');\r\n    }\r\n\r\n    @font-face {\r\n        font-family: 'Lato';\r\n        font-style: italic;\r\n        font-weight: 400;\r\n        src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');\r\n    }\r\n\r\n    @font-face {\r\n        font-family: 'Lato';\r\n        font-style: italic;\r\n        font-weight: 700;\r\n        src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');\r\n    }\r\n}\r\n\r\n/* CLIENT-SPECIFIC STYLES */\r\n\r\nbody,\r\ntable,\r\ntd,\r\na {\r\n    -webkit-text-size-adjust: 100%;\r\n    -ms-text-size-adjust: 100%;\r\n}\r\n\r\ntable,\r\ntd {\r\n    mso-table-lspace: 0pt;\r\n    mso-table-rspace: 0pt;\r\n}\r\n\r\nimg {\r\n    -ms-interpolation-mode: bicubic;\r\n}\r\n\r\n/* RESET STYLES */\r\n\r\nimg {\r\n    border: 0;\r\n    height: auto;\r\n    line-height: 100%;\r\n    outline: none;\r\n    text-decoration: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse !important;\r\n}\r\n\r\nbody {\r\n    height: 100% !important;\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n    width: 100% !important;\r\n}\r\n\r\n/* iOS BLUE LINKS */\r\n\r\na[x-apple-data-detectors] {\r\n    color: inherit !important;\r\n    text-decoration: none !important;\r\n    font-size: inherit !important;\r\n    font-family: inherit !important;\r\n    font-weight: inherit !important;\r\n    line-height: inherit !important;\r\n}\r\n\r\n/* MOBILE STYLES */\r\n\r\n@media screen and (max-width:600px) {\r\n    h1 {\r\n        font-size: 32px !important;\r\n        line-height: 32px !important;\r\n    }\r\n}\r\n\r\n/* ANDROID CENTER FIX */\r\n\r\ndiv[style*=\"margin: 16px 0;\"] {\r\n    margin: 0 !important;\r\n}                \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm95YWdlL3BhZ2VzL3ZveWFnZS1jb25maXJtYXRpb24tY29tbWFuZGUvdm95YWdlLWNvbmZpcm1hdGlvbi1jb21tYW5kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQiw0SkFBNEo7SUFDaEs7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixzSkFBc0o7SUFDMUo7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQiwwSkFBMEo7SUFDOUo7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixtS0FBbUs7SUFDdks7QUFDSjs7QUFFQSwyQkFBMkI7O0FBQzNCOzs7O0lBSUksOEJBQThCO0lBQzlCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBLGlCQUFpQjs7QUFDakI7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBLG1CQUFtQjs7QUFDbkI7SUFDSSx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLCtCQUErQjtBQUNuQzs7QUFFQSxrQkFBa0I7O0FBQ2xCO0lBQ0k7UUFDSSwwQkFBMEI7UUFDMUIsNEJBQTRCO0lBQ2hDO0FBQ0o7O0FBRUEsdUJBQXVCOztBQUN2QjtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3ZveWFnZS9wYWdlcy92b3lhZ2UtY29uZmlybWF0aW9uLWNvbW1hbmRlL3ZveWFnZS1jb25maXJtYXRpb24tY29tbWFuZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4ge1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBzcmM6IGxvY2FsKCdMYXRvIFJlZ3VsYXInKSwgbG9jYWwoJ0xhdG8tUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2xhdG8vdjExL3FJSVlSVS1vUk9rSWs4dmZ2eHc2UXZlc1pXMnhPUS14c05xTzQ3bTU1REEud29mZikgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQnKSwgbG9jYWwoJ0xhdG8tQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2xhdG8vdjExL3FkZ1VHNFUwOUhuSndoWUktdUsxOHdMVXVFcFR5b1VzdHFFbTVBTWxKbzQud29mZikgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBzcmM6IGxvY2FsKCdMYXRvIEl0YWxpYycpLCBsb2NhbCgnTGF0by1JdGFsaWMnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9sYXRvL3YxMS9SWXlaTm9lRmdiMGw3VzNWdTFhU1dPdnZEaW4xcEs4YUt0ZUxwZVo1YzBBLndvZmYpIGZvcm1hdCgnd29mZicpO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnTGF0by1Cb2xkSXRhbGljJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbGF0by92MTEvSGtGX3FJMXhfbm94bHhocmhNUVlFTE8zTGRjQVpZV2w5U2k2dnZ4TC1xVS53b2ZmKSBmb3JtYXQoJ3dvZmYnKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQ0xJRU5ULVNQRUNJRklDIFNUWUxFUyAqL1xyXG5ib2R5LFxyXG50YWJsZSxcclxudGQsXHJcbmEge1xyXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbn1cclxuXHJcbnRhYmxlLFxyXG50ZCB7XHJcbiAgICBtc28tdGFibGUtbHNwYWNlOiAwcHQ7XHJcbiAgICBtc28tdGFibGUtcnNwYWNlOiAwcHQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljO1xyXG59XHJcblxyXG4vKiBSRVNFVCBTVFlMRVMgKi9cclxuaW1nIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBpT1MgQkxVRSBMSU5LUyAqL1xyXG5hW3gtYXBwbGUtZGF0YS1kZXRlY3RvcnNdIHtcclxuICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBNT0JJTEUgU1RZTEVTICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDMycHggIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBTkRST0lEIENFTlRFUiBGSVggKi9cclxuZGl2W3N0eWxlKj1cIm1hcmdpbjogMTZweCAwO1wiXSB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufSAgICAgICAgICAgICAgICAiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/voyage-confirmation-commande/voyage-confirmation-commande.component.ts": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/voyage/pages/voyage-confirmation-commande/voyage-confirmation-commande.component.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: VoyageConfirmationCommandeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoyageConfirmationCommandeComponent", function () { return VoyageConfirmationCommandeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var VoyageConfirmationCommandeComponent = /** @class */ (function () {
                function VoyageConfirmationCommandeComponent() {
                }
                VoyageConfirmationCommandeComponent.prototype.ngOnInit = function () {
                };
                return VoyageConfirmationCommandeComponent;
            }());
            VoyageConfirmationCommandeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-voyage-confirmation-commande',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voyage-confirmation-commande.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyage-confirmation-commande/voyage-confirmation-commande.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voyage-confirmation-commande.component.css */ "./src/app/voyage/pages/voyage-confirmation-commande/voyage-confirmation-commande.component.css")).default]
                })
            ], VoyageConfirmationCommandeComponent);
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/voyage-creation/voyage-creation.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/voyage/pages/voyage-creation/voyage-creation.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".displayDate{\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  /****************  ******************************/\r\n  \r\n  hr.hr-text {\r\n    position: relative;\r\n    border: none;\r\n    height: 1px;\r\n    background: #999;\r\n}\r\n  \r\n  hr.hr-text::before {\r\n    content: attr(data-content);\r\n    display: inline-block;\r\n    background: #fff;\r\n    font-weight: bold;\r\n    font-size: 0.85rem;\r\n    color: #999;\r\n    border-radius: 30rem;\r\n    padding: 0.2rem 2rem;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n  \r\n  .date-right {\r\n    margin-right: 500px;\r\n}\r\n  \r\n  /*************** Bouton + - *******************/\r\n  \r\n  .btn-default {\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #ccc;\r\n}\r\n  \r\n  /********************** tableau  *********************/\r\n  \r\n  .btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle) {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n  \r\n  .btn-group>.btn:first-child {\r\n  margin-left: 0;\r\n}\r\n  \r\n  .btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\r\n  border-radius: 0;\r\n}\r\n  \r\n  .btn-group .btn+.btn, .btn-group .btn+.btn-group, .btn-group .btn-group+.btn, .btn-group .btn-group+.btn-group {\r\n  margin-left: -1px;\r\n}\r\n  \r\n  .btn-group>.btn:last-child:not(:first-child), .btn-group>.dropdown-toggle:not(:first-child) {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n  \r\n  [data-toggle=buttons]>.btn input[type=checkbox], [data-toggle=buttons]>.btn input[type=radio], [data-toggle=buttons]>.btn-group>.btn input[type=checkbox], [data-toggle=buttons]>.btn-group>.btn input[type=radio] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}\r\n  \r\n  input[type=checkbox], input[type=radio] {\r\n  margin: 4px 0 0;\r\n  margin-top: 1px\\9;\r\n  line-height: normal;\r\n}\r\n  \r\n  .table-wrapper {\r\n    width: 850px;\r\n    background: #fff;\r\n    padding: 20px 30px 5px;\r\n    margin: 30px auto;\r\n    box-shadow: 0 0 1px 0 rgba(0,0,0,.25);\r\n}\r\n  \r\n  .table-title .btn-group {\r\nfloat: right;\r\n}\r\n  \r\n  .table-title .btn {\r\nmin-width: 50px;\r\nborder-radius: 2px;\r\nborder: none;\r\npadding: 6px 12px;\r\nfont-size: 95%;\r\noutline: none !important;\r\nheight: 30px;\r\n}\r\n  \r\n  .table-title {\r\nborder-bottom: 1px solid #e9e9e9;\r\npadding-bottom: 15px;\r\nmargin-bottom: 5px;\r\nbackground: rgb(0, 50, 74);\r\nmargin: -20px -31px 10px;\r\npadding: 15px 30px;\r\ncolor: #fff;\r\n}\r\n  \r\n  .table-title h2 {\r\nmargin: 2px 0 0;\r\nfont-size: 24px;\r\n}\r\n  \r\n  table.table tr th, table.table tr td {\r\n    border-color: #e9e9e9;\r\npadding: 12px 15px;\r\nvertical-align: middle;\r\n}\r\n  \r\n  table.table tr th:first-child {\r\nwidth: 40px;\r\n}\r\n  \r\n  table.table tr th:last-child {\r\nwidth: 100px;\r\n}\r\n  \r\n  table.table-striped tbody tr:nth-of-type(odd) {\r\n  background-color: #fcfcfc;\r\n}\r\n  \r\n  table.table-striped.table-hover tbody tr:hover {\r\nbackground: #f5f5f5;\r\n}\r\n  \r\n  table.table td a {\r\n    color: #2196f3;\r\n}\r\n  \r\n  table.table td .btn.manage {\r\npadding: 2px 10px;\r\nbackground: #37BC9B;\r\ncolor: #fff;\r\nborder-radius: 2px;\r\n}\r\n  \r\n  table.table td .btn.manage:hover {\r\nbackground: #2e9c81;\t\t\r\n}\r\n  \r\n  .label {\r\n  display: inline;\r\n  padding: .2em .6em .3em;\r\n  font-size: 75%;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  color: #fff;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: .25em;\r\n}\r\n  \r\n  .label-success {\r\n  background-color: #5cb85c;\r\n}\r\n  \r\n  .label-danger {\r\n  background-color: #d9534f;\r\n}\r\n  \r\n  .label-warning {\r\n  background-color: #f0ad4e;\r\n}\r\n  \r\n  /**************  *************************************/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm95YWdlL3BhZ2VzL3ZveWFnZS1jcmVhdGlvbi92b3lhZ2UtY3JlYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7O0VBRUEsaURBQWlEOztFQUVuRDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7RUFFQTtJQUNJLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDOztFQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztFQUdBLCtDQUErQzs7RUFFL0M7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7RUFFQSxzREFBc0Q7O0VBQ3JEO0lBQ0csMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQzs7RUFDQTtFQUNFLGNBQWM7QUFDaEI7O0VBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0VBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztFQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0VBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7RUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixxQ0FBcUM7QUFDekM7O0VBQ0E7QUFDQSxZQUFZO0FBQ1o7O0VBQ0E7QUFDQSxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsY0FBYztBQUNkLHdCQUF3QjtBQUN4QixZQUFZO0FBQ1o7O0VBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBQ3hCLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1g7O0VBQ0E7QUFDQSxlQUFlO0FBQ2YsZUFBZTtBQUNmOztFQUNBO0lBQ0kscUJBQXFCO0FBQ3pCLGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEI7O0VBQ0E7QUFDQSxXQUFXO0FBQ1g7O0VBQ0E7QUFDQSxZQUFZO0FBQ1o7O0VBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0VBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0VBQ0E7SUFDSSxjQUFjO0FBQ2xCOztFQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCOztFQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztFQUNBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsb0JBQW9CO0FBQ3RCOztFQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztFQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztFQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztFQUNBLHNEQUFzRCIsImZpbGUiOiJzcmMvYXBwL3ZveWFnZS9wYWdlcy92b3lhZ2UtY3JlYXRpb24vdm95YWdlLWNyZWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheURhdGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICBcclxuICAvKioqKioqKioqKioqKioqKiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaHIuaHItdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk7XHJcbn1cclxuXHJcbmhyLmhyLXRleHQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtY29udGVudCk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcmVtO1xyXG4gICAgcGFkZGluZzogMC4ycmVtIDJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uZGF0ZS1yaWdodCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwMHB4O1xyXG59XHJcbiAgXHJcblxyXG4vKioqKioqKioqKioqKioqIEJvdXRvbiArIC0gKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5idG4tZGVmYXVsdCB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqIHRhYmxlYXUgICoqKioqKioqKioqKioqKioqKioqKi9cclxuIC5idG4tZ3JvdXA+LmJ0bjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcbi5idG4tZ3JvdXA+LmJ0bjpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLmJ0bi1ncm91cD4uYnRuOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi5idG4tZ3JvdXAgLmJ0bisuYnRuLCAuYnRuLWdyb3VwIC5idG4rLmJ0bi1ncm91cCwgLmJ0bi1ncm91cCAuYnRuLWdyb3VwKy5idG4sIC5idG4tZ3JvdXAgLmJ0bi1ncm91cCsuYnRuLWdyb3VwIHtcclxuICBtYXJnaW4tbGVmdDogLTFweDtcclxufVxyXG4uYnRuLWdyb3VwPi5idG46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSwgLmJ0bi1ncm91cD4uZHJvcGRvd24tdG9nZ2xlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuW2RhdGEtdG9nZ2xlPWJ1dHRvbnNdPi5idG4gaW5wdXRbdHlwZT1jaGVja2JveF0sIFtkYXRhLXRvZ2dsZT1idXR0b25zXT4uYnRuIGlucHV0W3R5cGU9cmFkaW9dLCBbZGF0YS10b2dnbGU9YnV0dG9uc10+LmJ0bi1ncm91cD4uYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdLCBbZGF0YS10b2dnbGU9YnV0dG9uc10+LmJ0bi1ncm91cD4uYnRuIGlucHV0W3R5cGU9cmFkaW9dIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY2xpcDogcmVjdCgwLDAsMCwwKTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10ge1xyXG4gIG1hcmdpbjogNHB4IDAgMDtcclxuICBtYXJnaW4tdG9wOiAxcHhcXDk7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnRhYmxlLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDg1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweCA1cHg7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCByZ2JhKDAsMCwwLC4yNSk7XHJcbn1cclxuLnRhYmxlLXRpdGxlIC5idG4tZ3JvdXAge1xyXG5mbG9hdDogcmlnaHQ7XHJcbn1cclxuLnRhYmxlLXRpdGxlIC5idG4ge1xyXG5taW4td2lkdGg6IDUwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDJweDtcclxuYm9yZGVyOiBub25lO1xyXG5wYWRkaW5nOiA2cHggMTJweDtcclxuZm9udC1zaXplOiA5NSU7XHJcbm91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi50YWJsZS10aXRsZSB7XHJcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xyXG5wYWRkaW5nLWJvdHRvbTogMTVweDtcclxubWFyZ2luLWJvdHRvbTogNXB4O1xyXG5iYWNrZ3JvdW5kOiByZ2IoMCwgNTAsIDc0KTtcclxubWFyZ2luOiAtMjBweCAtMzFweCAxMHB4O1xyXG5wYWRkaW5nOiAxNXB4IDMwcHg7XHJcbmNvbG9yOiAjZmZmO1xyXG59XHJcbi50YWJsZS10aXRsZSBoMiB7XHJcbm1hcmdpbjogMnB4IDAgMDtcclxuZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRyIHRoLCB0YWJsZS50YWJsZSB0ciB0ZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlOWU5ZTk7XHJcbnBhZGRpbmc6IDEycHggMTVweDtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG50YWJsZS50YWJsZSB0ciB0aDpmaXJzdC1jaGlsZCB7XHJcbndpZHRoOiA0MHB4O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRyIHRoOmxhc3QtY2hpbGQge1xyXG53aWR0aDogMTAwcHg7XHJcbn1cclxudGFibGUudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xyXG59XHJcbnRhYmxlLnRhYmxlLXN0cmlwZWQudGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIge1xyXG5iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcbnRhYmxlLnRhYmxlIHRkIGEge1xyXG4gICAgY29sb3I6ICMyMTk2ZjM7XHJcbn1cclxudGFibGUudGFibGUgdGQgLmJ0bi5tYW5hZ2Uge1xyXG5wYWRkaW5nOiAycHggMTBweDtcclxuYmFja2dyb3VuZDogIzM3QkM5QjtcclxuY29sb3I6ICNmZmY7XHJcbmJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG50YWJsZS50YWJsZSB0ZCAuYnRuLm1hbmFnZTpob3ZlciB7XHJcbmJhY2tncm91bmQ6ICMyZTljODE7XHRcdFxyXG59XHJcbi5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmc6IC4yZW0gLjZlbSAuM2VtO1xyXG4gIGZvbnQtc2l6ZTogNzUlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xyXG59XHJcblxyXG4ubGFiZWwtc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YztcclxufVxyXG4ubGFiZWwtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xyXG59XHJcbi5sYWJlbC13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlO1xyXG59XHJcbi8qKioqKioqKioqKioqKiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/voyage-creation/voyage-creation.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/voyage/pages/voyage-creation/voyage-creation.component.ts ***!
          \***************************************************************************/
        /*! exports provided: VoyageCreationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoyageCreationComponent", function () { return VoyageCreationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_services_destination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/destination.service */ "./src/app/voyage/shared/services/destination.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_services_voyage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/voyage.service */ "./src/app/voyage/shared/services/voyage.service.ts");
            /* harmony import */ var _shared_entities_voyageurs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/entities/voyageurs */ "./src/app/voyage/shared/entities/voyageurs.ts");
            /* harmony import */ var _shared_services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/client.service */ "./src/app/voyage/shared/services/client.service.ts");
            var VoyageCreationComponent = /** @class */ (function () {
                function VoyageCreationComponent(destinationService, activatedRoute, router, voyageService, clientService) {
                    this.destinationService = destinationService;
                    this.activatedRoute = activatedRoute;
                    this.router = router;
                    this.voyageService = voyageService;
                    this.clientService = clientService;
                    this.voyageurs = [];
                    this.voyageur = new _shared_entities_voyageurs__WEBPACK_IMPORTED_MODULE_6__["Voyageur"]();
                    this.civilites = [
                        'Mlle',
                        'Mme',
                        'M'
                    ];
                }
                ;
                // get participants():FormArray{
                //   return this.form.get('participants') as FormArray
                // }
                VoyageCreationComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activatedRoute.paramMap.subscribe(function (map) {
                        var id = +map.get('id');
                        _this.destinationService.getdatesVoyages(id).subscribe(function (datesVoyages) {
                            _this.datesVoyages = datesVoyages;
                            console.log(_this.datesVoyages);
                            _this.destinationService.getDestinationById(_this.datesVoyages.fk_destination).subscribe(function (destination) { _this.destination = destination; });
                        }, function (error) { return console.log(" Error is : " + error); }, function () { return console.log("finished"); });
                    });
                    this.createFormControls();
                    this.createForm();
                    this.clientService.getClientByNom(localStorage.getItem('userName')).subscribe(function (client) { _this.client = client; });
                };
                VoyageCreationComponent.prototype.createFormControls = function () {
                    // this.form = new FormGroup({
                    // 'participants' : new FormArray([
                    // new FormControl({
                    this.civilite = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                        this.nom = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                        this.prenom = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                        this.dateNaissance = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
                    // })
                    // ])
                    // })
                };
                VoyageCreationComponent.prototype.createForm = function () {
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                        nom: this.nom,
                        prenom: this.prenom,
                        dateNaissance: this.dateNaissance,
                        civilite: this.civilite
                    });
                    // this.voyageurs.push();
                };
                VoyageCreationComponent.prototype.onSubmit = function () {
                    // if(this.form.valid){
                    console.warn("voyageurs : " + JSON.stringify(this.voyageurs));
                    console.log("Console, oh belle console, dis moi quelle est ma destination! " + JSON.stringify(this.destination));
                    // this.voyageService.createVoyageObject(this.voyageurs, this.client, this.datesVoyages);
                    // console.log("ce que je demande de créer : "+JSON.stringify(this.voyageService.createVoyageObject(this.voyageService.createVoyageObject(this.voyageurs, this.client, this.datesVoyages, this.destination.descriptif, this.destination.region));
                    this.voyageService.createVoyage(this.voyageService.createVoyageObject(this.voyageurs, this.client, this.datesVoyages, this.destination.descriptif, this.destination.region));
                    console.log("formulaire envoyé !");
                    this.router.navigate(['/voyage-confirmation']);
                    // this.destination.descriptif, this.destination.region
                    // }
                };
                VoyageCreationComponent.prototype.addParticipants = function () {
                    // console.log(form.value);
                    // this.voyageurs.push(voyageurs);
                    // return this;
                    // this.displayNom = this.nom.value;
                    // this.displayPrenom = this.prenom.value;
                    // this.displayCivilite = this.civilites.value;
                    // this.displayDateNaissance = this.dateNaissance.value;
                    // for(let i=0; i<voyageur.size; i++){
                    //   voyageur[i].nom = this.form.get('nom').value;
                    //   voyageur[i].prenom = this.form.get('prenom').value;
                    //   voyageur[i].dateNaissance = this.form.get('dateNaissance').value;
                    // }
                    // this.voyageService.createVoyageur(form.value);
                    // (error) => this.error = error
                    this.voyageurs.push(this.voyageur);
                    // this.form.reset();
                    this.voyageur = new _shared_entities_voyageurs__WEBPACK_IMPORTED_MODULE_6__["Voyageur"]();
                    console.log(this.voyageurs);
                };
                return VoyageCreationComponent;
            }());
            VoyageCreationComponent.ctorParameters = function () { return [
                { type: _shared_services_destination_service__WEBPACK_IMPORTED_MODULE_3__["DestinationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _shared_services_voyage_service__WEBPACK_IMPORTED_MODULE_5__["VoyageService"] },
                { type: _shared_services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], VoyageCreationComponent.prototype, "datesVoyages", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], VoyageCreationComponent.prototype, "destination", void 0);
            VoyageCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-voyage-creation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voyage-creation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyage-creation/voyage-creation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voyage-creation.component.css */ "./src/app/voyage/pages/voyage-creation/voyage-creation.component.css")).default]
                })
            ], VoyageCreationComponent);
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/voyage-liste/voyage-liste.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/voyage/pages/voyage-liste/voyage-liste.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".separation{\r\n  padding-bottom: 100px !important; \r\n  padding-right: 30px !important;\r\n}\r\n\r\n.hover {\r\n    overflow: hidden;\r\n    position: relative;\r\n    padding-bottom: 60%;\r\n  }\r\n\r\n.hover-overlay {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 90;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.hover img {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n.hover-content {\r\n    position: relative;\r\n    z-index: 99;\r\n  }\r\n\r\n/* DEMO 1 ============================== */\r\n\r\n.hover-1 img {\r\n    width: 105%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: -5%;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n.hover-1-content {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 99;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.hover-1 .hover-overlay {\r\n    background: rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n.hover-1-description {\r\n    transform: translateY(0.5rem);\r\n    transition: all 0.4s;\r\n    opacity: 0;\r\n  }\r\n\r\n.hover-1:hover .hover-1-content {\r\n    bottom: 2rem;\r\n  }\r\n\r\n.hover-1:hover .hover-1-description {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n\r\n.hover-1:hover img {\r\n    left: 0;\r\n  }\r\n\r\n.hover-1:hover .hover-overlay {\r\n    opacity: 0;\r\n  }\r\n\r\n/* DEMO 2 ============================== */\r\n\r\n.hover-2 .hover-overlay {\r\n    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));\r\n  }\r\n\r\n.hover-2-title {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    text-align: center;\r\n    width: 100%;\r\n    z-index: 99;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n.hover-2-description {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 0;\r\n    opacity: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    z-index: 99;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n.hover-2:hover .hover-2-title {\r\n    transform: translateY(-1.5rem);\r\n  }\r\n\r\n.hover-2:hover .hover-2-description {\r\n    bottom: 0.5rem;\r\n    opacity: 1;\r\n  }\r\n\r\n.hover-2:hover .hover-overlay {\r\n    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1));\r\n  }\r\n\r\n/* DEMO 3 ============================== */\r\n\r\n.hover-3::after {\r\n    content: '';\r\n    width: calc(100% - 3rem);\r\n    height: calc(100% - 3rem);\r\n    border: 1px solid #fff;\r\n    position: absolute;\r\n    top: 1.5rem;\r\n    left: 1.5rem;\r\n    z-index: 90;\r\n    transition: all 0.3s;\r\n    transform: scale(1.1);\r\n    opacity: 0;\r\n    display: block;\r\n    opacity: 0;\r\n  }\r\n\r\n.hover-3-content {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    width: 100%;\r\n    transform: translateY(-50%);\r\n    text-align: center;\r\n    z-index: 99;\r\n  }\r\n\r\n.hover-3-description {\r\n    opacity: 0;\r\n    transform: scale(1.3);\r\n    transition: all 0.3s;\r\n  }\r\n\r\n.hover-3 img {\r\n    width: 110%;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n\r\n.hover-3 .hover-overlay {\r\n    background: rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n.hover-3:hover img {\r\n    width: 100%;\r\n  }\r\n\r\n.hover-3:hover::after {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n\r\n.hover-3:hover .hover-3-description {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n\r\n.hover-3:hover .hover-overlay {\r\n    background: rgba(0, 0, 0, 0.8);\r\n  }\r\n\r\n/* DEMO 4 ============================== */\r\n\r\n.hover-4 img {\r\n    width: 110%;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n\r\n.hover-4 .hover-overlay {\r\n    background: rgba(0, 0, 0, 0.4);\r\n    z-index: 90;\r\n  }\r\n\r\n.hover-4-title {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    padding: 3rem;\r\n    z-index: 99;\r\n  }\r\n\r\n.hover-4-description {\r\n    position: absolute;\r\n    top: 2rem;\r\n    left: 2rem;\r\n    text-align: right;\r\n    border-right: 3px solid #fff;\r\n    padding: 0 1rem;\r\n    z-index: 99;\r\n    transform: translateX(-1.5rem);\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n@media (min-width: 992px) {\r\n    .hover-4-description {\r\n      width: 50%;\r\n    }\r\n  }\r\n\r\n.hover-4:hover img {\r\n    width: 100%;\r\n  }\r\n\r\n.hover-4:hover::after {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n\r\n.hover-4:hover .hover-4-description {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n\r\n.hover-4:hover .hover-overlay {\r\n    background: rgba(0, 0, 0, 0.8);\r\n  }\r\n\r\n/* DEMO 5 ============================== */\r\n\r\n.hover-5::after {\r\n    content: '';\r\n    width: 100%;\r\n    height: 10px;\r\n    background: #47c650;\r\n    position: absolute;\r\n    bottom: -10px;\r\n    left: 0;\r\n    display: block;\r\n    transition: all 0.3s;\r\n    z-index: 999;\r\n  }\r\n\r\n.hover-5 .hover-overlay {\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n.hover-5-title {\r\n    position: absolute;\r\n    bottom: 1rem;\r\n    left: 0;\r\n    transition: all 0.3s;\r\n    padding: 2rem 3rem;\r\n    z-index: 99;\r\n  }\r\n\r\n.hover-5-title span {\r\n    transition: all 0.4s;\r\n    opacity: 0;\r\n    color: #47c650;\r\n  }\r\n\r\n.hover-5:hover .hover-overlay {\r\n    background: rgba(0, 0, 0, 0.8);\r\n  }\r\n\r\n.hover-5:hover .hover-5-title {\r\n    bottom: 0;\r\n  }\r\n\r\n.hover-5:hover .hover-5-title span {\r\n    opacity: 1;\r\n  }\r\n\r\n.hover-5:hover::after {\r\n    bottom: 0;\r\n  }\r\n\r\n/*\r\n  *\r\n  * ==========================================\r\n  * FOR DEMO PURPOSES\r\n  * ==========================================\r\n  *\r\n  */\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    background-color: #fafafa;\r\n  }\r\n\r\n/* .bootstrap-select .bs-ok-default::after {\r\n    width: 0.3em;\r\n    height: 0.6em;\r\n    border-width: 0 0.1em 0.1em 0;\r\n    transform: rotate(45deg) translateY(0.5rem);\r\n}\r\n\r\n.btn.dropdown-toggle:focus {\r\n    outline: none !important;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm95YWdlL3BhZ2VzL3ZveWFnZS1saXN0ZS92b3lhZ2UtbGlzdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyw4QkFBOEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztBQUdBLDBDQUEwQzs7QUFDMUM7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1Qsb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsVUFBVTtFQUNaOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxPQUFPO0VBQ1Q7O0FBRUE7SUFDRSxVQUFVO0VBQ1o7O0FBR0EsMENBQTBDOztBQUMxQztJQUNFLDJFQUEyRTtFQUM3RTs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaOztBQUVBO0lBQ0UsMkVBQTJFO0VBQzdFOztBQUdBLDBDQUEwQzs7QUFDMUM7SUFDRSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7O0FBRUE7SUFDRSw4QkFBOEI7RUFDaEM7O0FBR0EsMENBQTBDOztBQUMxQztJQUNFLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLDhCQUE4QjtJQUM5QixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixhQUFhO0lBQ2IsV0FBVztFQUNiOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1Ysb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7O0FBRUE7SUFDRSw4QkFBOEI7RUFDaEM7O0FBR0EsMENBQTBDOztBQUMxQztJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLE9BQU87SUFDUCxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztBQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsU0FBUztFQUNYOztBQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUVBO0lBQ0UsU0FBUztFQUNYOztBQUVBOzs7Ozs7R0FNQzs7QUFDRDtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7O0FBRUE7Ozs7Ozs7OztHQVNDIiwiZmlsZSI6InNyYy9hcHAvdm95YWdlL3BhZ2VzL3ZveWFnZS1saXN0ZS92b3lhZ2UtbGlzdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXBhcmF0aW9ue1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweCAhaW1wb3J0YW50OyBcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ob3ZlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwJTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLW92ZXJsYXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIERFTU8gMSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAuaG92ZXItMSBpbWcge1xyXG4gICAgd2lkdGg6IDEwNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAtNSU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLTEtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLTEgLmhvdmVyLW92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXItMS1kZXNjcmlwdGlvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC41cmVtKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLTE6aG92ZXIgLmhvdmVyLTEtY29udGVudCB7XHJcbiAgICBib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Zlci0xOmhvdmVyIC5ob3Zlci0xLWRlc2NyaXB0aW9uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Zlci0xOmhvdmVyIGltZyB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXItMTpob3ZlciAuaG92ZXItb3ZlcmxheSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBERU1PIDIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgLmhvdmVyLTIgLmhvdmVyLW92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjQpLCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXItMi10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Zlci0yLWRlc2NyaXB0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXItMjpob3ZlciAuaG92ZXItMi10aXRsZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNXJlbSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Zlci0yOmhvdmVyIC5ob3Zlci0yLWRlc2NyaXB0aW9uIHtcclxuICAgIGJvdHRvbTogMC41cmVtO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLTI6aG92ZXIgLmhvdmVyLW92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjkpLCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBERU1PIDMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgLmhvdmVyLTM6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDNyZW0pO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzcmVtKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEuNXJlbTtcclxuICAgIGxlZnQ6IDEuNXJlbTtcclxuICAgIHotaW5kZXg6IDkwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXItMy1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Zlci0zLWRlc2NyaXB0aW9uIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLTMgaW1nIHtcclxuICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLTMgLmhvdmVyLW92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXItMzpob3ZlciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Zlci0zOmhvdmVyOjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXItMzpob3ZlciAuaG92ZXItMy1kZXNjcmlwdGlvbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXItMzpob3ZlciAuaG92ZXItb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIERFTU8gNCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAuaG92ZXItNCBpbWcge1xyXG4gICAgd2lkdGg6IDExMCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXItNCAuaG92ZXItb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICB6LWluZGV4OiA5MDtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLTQtdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Zlci00LWRlc2NyaXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGxlZnQ6IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS41cmVtKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuaG92ZXItNC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Zlci00OmhvdmVyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLTQ6aG92ZXI6OmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Zlci00OmhvdmVyIC5ob3Zlci00LWRlc2NyaXB0aW9uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Zlci00OmhvdmVyIC5ob3Zlci1vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogREVNTyA1ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIC5ob3Zlci01OjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzQ3YzY1MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLTUgLmhvdmVyLW92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXItNS10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDFyZW07XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBwYWRkaW5nOiAycmVtIDNyZW07XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLTUtdGl0bGUgc3BhbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjb2xvcjogIzQ3YzY1MDtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLTU6aG92ZXIgLmhvdmVyLW92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXItNTpob3ZlciAuaG92ZXItNS10aXRsZSB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Zlci01OmhvdmVyIC5ob3Zlci01LXRpdGxlIHNwYW4ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyLTU6aG92ZXI6OmFmdGVyIHtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgLypcclxuICAqXHJcbiAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAqIEZPUiBERU1PIFBVUlBPU0VTXHJcbiAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAqXHJcbiAgKi9cclxuICBib2R5IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICB9XHJcblxyXG4gIC8qIC5ib290c3RyYXAtc2VsZWN0IC5icy1vay1kZWZhdWx0OjphZnRlciB7XHJcbiAgICB3aWR0aDogMC4zZW07XHJcbiAgICBoZWlnaHQ6IDAuNmVtO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAuMWVtIDAuMWVtIDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSgwLjVyZW0pO1xyXG59XHJcblxyXG4uYnRuLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/voyage-liste/voyage-liste.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/voyage/pages/voyage-liste/voyage-liste.component.ts ***!
          \*********************************************************************/
        /*! exports provided: VoyageListeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoyageListeComponent", function () { return VoyageListeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_services_destination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/destination.service */ "./src/app/voyage/shared/services/destination.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var VoyageListeComponent = /** @class */ (function () {
                function VoyageListeComponent(destinationService, router) {
                    this.destinationService = destinationService;
                    this.router = router;
                }
                VoyageListeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.destinationService.getAllDestinationsMoinsCher().subscribe(function (datesVoyages) { _this.datesVoyages = datesVoyages; });
                    console.log(this.datesVoyages);
                    //  this.destinationService.getAllDestinationsMoinsCher().subscribe(
                    //    (datesVoyages) => { this.datesVoyages = datesVoyages}
                    //  )
                    //  $('select').selectpicker();
                    //  $(document).ready(function() {
                    //   $('.mdb-select').materialSelect();
                    // });
                    //   $(document).ready(function() {
                    //     $('#boot-multiselect-demo').multiselect({
                    //     includeSelectAllOption: true,
                    //     buttonWidth: 250,
                    //     enableFiltering: true
                    // });
                    // });
                };
                return VoyageListeComponent;
            }());
            VoyageListeComponent.ctorParameters = function () { return [
                { type: _shared_services_destination_service__WEBPACK_IMPORTED_MODULE_2__["DestinationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            VoyageListeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-voyage-liste',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voyage-liste.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyage-liste/voyage-liste.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voyage-liste.component.css */ "./src/app/voyage/pages/voyage-liste/voyage-liste.component.css")).default]
                })
            ], VoyageListeComponent);
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/voyage/voyage.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/voyage/pages/voyage/voyage.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZveWFnZS9wYWdlcy92b3lhZ2Uvdm95YWdlLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/voyage/voyage.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/voyage/pages/voyage/voyage.component.ts ***!
          \*********************************************************/
        /*! exports provided: VoyageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoyageComponent", function () { return VoyageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var VoyageComponent = /** @class */ (function () {
                function VoyageComponent() {
                }
                VoyageComponent.prototype.ngOnInit = function () {
                };
                return VoyageComponent;
            }());
            VoyageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-voyage',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voyage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyage/voyage.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voyage.component.css */ "./src/app/voyage/pages/voyage/voyage.component.css")).default]
                })
            ], VoyageComponent);
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component.css": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component.css ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZveWFnZS9wYWdlcy92b3lhZ2VzLWNvbW1hbmRlcy1kZXRhaWwvdm95YWdlcy1jb21tYW5kZXMtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component.ts ***!
          \*********************************************************************************************/
        /*! exports provided: VoyagesCommandesDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoyagesCommandesDetailComponent", function () { return VoyagesCommandesDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_services_voyage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/voyage.service */ "./src/app/voyage/shared/services/voyage.service.ts");
            var VoyagesCommandesDetailComponent = /** @class */ (function () {
                function VoyagesCommandesDetailComponent(authService, route, voyageService) {
                    var _this = this;
                    this.authService = authService;
                    this.route = route;
                    this.voyageService = voyageService;
                    this.userName = localStorage.getItem('userName');
                    this.LogInOut = localStorage.getItem('LogInOut');
                    authService.getLoggedInName.subscribe(function (name) { return _this.changeName(name); });
                    authService.getLoggedInOut.subscribe(function (loginout) { return _this.changeLogger(loginout); });
                }
                VoyagesCommandesDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.voyageService.getVoyageById(this.route.snapshot.params['id']).subscribe(function (voyage) {
                        _this.voyage = voyage;
                        // Object.assign({}, [this.destination]);
                        // JSON.stringify(this.destination)
                        // this.subscriptions = this.destination;
                        console.log(_this.voyage);
                    }, function (error) { return console.log(" Error of voyage : " + error); }, function () { return console.log("voyage finished"); });
                };
                VoyagesCommandesDetailComponent.prototype.changeName = function (name) {
                    this.userName = name;
                };
                VoyagesCommandesDetailComponent.prototype.changeLogger = function (loginout) {
                    this.LogInOut = loginout;
                };
                VoyagesCommandesDetailComponent.prototype.onSubmit = function (f) {
                    var _this = this;
                    this.voyage.voyageurs[f.value.index].civilite = f.value.civilite;
                    this.voyage.voyageurs[f.value.index].nom = f.value.nom;
                    this.voyage.voyageurs[f.value.index].prenom = f.value.prenom;
                    this.voyage.voyageurs[f.value.index].dateNaissance = f.value.dateNaissance;
                    this.voyageService.updateVoyage(this.voyage).subscribe(function (voyage) {
                        _this.voyage = voyage;
                        console.log(_this.voyage);
                    }, function (error) { return console.log(" Error of voyage : " + error); });
                };
                return VoyagesCommandesDetailComponent;
            }());
            VoyagesCommandesDetailComponent.ctorParameters = function () { return [
                { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _shared_services_voyage_service__WEBPACK_IMPORTED_MODULE_4__["VoyageService"] }
            ]; };
            VoyagesCommandesDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-voyages-commandes-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voyages-commandes-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voyages-commandes-detail.component.css */ "./src/app/voyage/pages/voyages-commandes-detail/voyages-commandes-detail.component.css")).default]
                })
            ], VoyagesCommandesDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/voyages-commandes/voyages-commandes.component.css": 
        /*!********************************************************************************!*\
          !*** ./src/app/voyage/pages/voyages-commandes/voyages-commandes.component.css ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZveWFnZS9wYWdlcy92b3lhZ2VzLWNvbW1hbmRlcy92b3lhZ2VzLWNvbW1hbmRlcy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/voyage/pages/voyages-commandes/voyages-commandes.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/voyage/pages/voyages-commandes/voyages-commandes.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: VoyagesCommandesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoyagesCommandesComponent", function () { return VoyagesCommandesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
            /* harmony import */ var _shared_services_voyage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/voyage.service */ "./src/app/voyage/shared/services/voyage.service.ts");
            /* harmony import */ var _shared_services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/client.service */ "./src/app/voyage/shared/services/client.service.ts");
            /* harmony import */ var _shared_entities_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/entities/client */ "./src/app/voyage/shared/entities/client.ts");
            var VoyagesCommandesComponent = /** @class */ (function () {
                function VoyagesCommandesComponent(userService, authService, voyageService, clientService) {
                    var _this = this;
                    this.userService = userService;
                    this.authService = authService;
                    this.voyageService = voyageService;
                    this.clientService = clientService;
                    this.userName = localStorage.getItem('userName');
                    this.LogInOut = localStorage.getItem('LogInOut');
                    authService.getLoggedInName.subscribe(function (name) { return _this.changeName(name); });
                    authService.getLoggedInOut.subscribe(function (loginout) { return _this.changeLogger(loginout); });
                }
                VoyagesCommandesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.clientService.getClientByNom(this.userName).subscribe(function (client) {
                        _this.client = new _shared_entities_client__WEBPACK_IMPORTED_MODULE_6__["Client"](client.id, _this.userName);
                        // Object.assign({}, [this.destination]);
                        // JSON.stringify(this.destination)
                        // this.subscriptions = this.destination;
                        console.log(_this.client.name);
                    }, function (error) { return console.log(" Error of client is : " + error); }, function () { return _this.voyageService.getVoyagesClient(_this.client).subscribe(function (voyage) {
                        _this.voyages = voyage;
                        // Object.assign({}, [this.destination]);
                        // JSON.stringify(this.destination)
                        // this.subscriptions = this.destination;
                        console.log(_this.voyages);
                    }, function (error) { return console.log(" Error of voyages : " + error); }, function () { return console.log("voyages finished"); }); });
                };
                VoyagesCommandesComponent.prototype.changeName = function (name) {
                    this.userName = name;
                };
                VoyagesCommandesComponent.prototype.changeLogger = function (loginout) {
                    this.LogInOut = loginout;
                };
                return VoyagesCommandesComponent;
            }());
            VoyagesCommandesComponent.ctorParameters = function () { return [
                { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _shared_services_voyage_service__WEBPACK_IMPORTED_MODULE_4__["VoyageService"] },
                { type: _shared_services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"] }
            ]; };
            VoyagesCommandesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-voyages-commandes',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voyages-commandes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voyage/pages/voyages-commandes/voyages-commandes.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voyages-commandes.component.css */ "./src/app/voyage/pages/voyages-commandes/voyages-commandes.component.css")).default]
                })
            ], VoyagesCommandesComponent);
            /***/ 
        }),
        /***/ "./src/app/voyage/shared/entities/client.ts": 
        /*!**************************************************!*\
          !*** ./src/app/voyage/shared/entities/client.ts ***!
          \**************************************************/
        /*! exports provided: Client */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function () { return Client; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Client = /** @class */ (function () {
                function Client(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Client;
            }());
            /***/ 
        }),
        /***/ "./src/app/voyage/shared/entities/voyage.ts": 
        /*!**************************************************!*\
          !*** ./src/app/voyage/shared/entities/voyage.ts ***!
          \**************************************************/
        /*! exports provided: Voyage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Voyage", function () { return Voyage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Voyage = /** @class */ (function () {
                function Voyage(values) {
                    if (values === void 0) { values = {}; }
                    Object.assign(this, values);
                }
                return Voyage;
            }());
            /***/ 
        }),
        /***/ "./src/app/voyage/shared/entities/voyageurs.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/voyage/shared/entities/voyageurs.ts ***!
          \*****************************************************/
        /*! exports provided: Voyageur */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Voyageur", function () { return Voyageur; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Voyageur = /** @class */ (function () {
                // constructor(id:number, civilite:string, prenom:string, nom:string, dateNaissance:Date){
                //     this.id = id;
                //     this.civilite = civilite;
                //     this.prenom = prenom;
                //     this.nom = nom;
                //     this.dateNaissance = dateNaissance;
                // }
                function Voyageur(values) {
                    if (values === void 0) { values = {}; }
                    Object.assign(this, values);
                }
                return Voyageur;
            }());
            /***/ 
        }),
        /***/ "./src/app/voyage/shared/services/client.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/voyage/shared/services/client.service.ts ***!
          \**********************************************************/
        /*! exports provided: ClientService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function () { return ClientService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ClientService = /** @class */ (function () {
                function ClientService(httpClient) {
                    this.httpClient = httpClient;
                }
                ClientService.prototype.getClientByNom = function (nom) {
                    return this.httpClient.get('/client/' + nom);
                };
                return ClientService;
            }());
            ClientService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ClientService);
            /***/ 
        }),
        /***/ "./src/app/voyage/shared/services/destination.service.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/voyage/shared/services/destination.service.ts ***!
          \***************************************************************/
        /*! exports provided: DestinationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationService", function () { return DestinationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var DestinationService = /** @class */ (function () {
                // private client = new Client(1, "raoul");
                // private voyageurs = new Voyageur(1, "M", "Jean", "Robert", new Date());
                // private voyages = [
                //   new Voyage(1, "london", "il pleut un peu", this.datesVoyages, this.client, this.voyageurs),
                //   new Voyage(1, "Paris", "C'est cool quand les gens ne ralent pas trop", this.datesVoyages, this.client, this.voyageurs),
                //   new Voyage(1, "Cracovie", "la famille", this.datesVoyages, this.client, this.voyageurs)
                // ];
                function DestinationService(httpClient) {
                    this.httpClient = httpClient;
                }
                // client = new Client(client.id, client.name);
                //=> GET localhost:4200/
                // getVoyages(): Observable<Voyage> {
                //   return this.httpClient.get<Voyage[]>(this.url).pipe(
                //     map(result => result.map(voyage => new Voyage(voyage.id, voyage.region, voyage.descriptif, voyage.datesVoyages, voyage.client, voyage.voyageurs)))
                //   );
                // }
                // private datesVoyages = new DatesVoyages(1, new Date(),new Date(), 200, 10, 0, 0, "image1.png");
                // private datesVoyages = [
                //   new DatesVoyages(1, new Date(), new Date(), 500, 9, 0, 0, 1, "london", "canada_1.jpg"),
                //   new DatesVoyages(2, new Date(), new Date(), 1000, 9, 0, 0, 3, "Paris", "guadeloupe_2.jpg"),
                //   new DatesVoyages(3, new Date(), new Date(), 40, 9, 0, 0, 4,"Cracovie", "saint-barth_2.jpg")
                // ];
                // getAllDestinationsMoinsCher():Promise<DatesVoyages[]>{
                //   return new Promise<DatesVoyages[]>( (resolve, reject) =>
                //   {
                //     resolve(this.datesVoyages)
                //   })
                // }
                DestinationService.prototype.getAllDestinationsMoinsCher = function () {
                    // return of(this.datesVoyages);
                    return this.httpClient.get('/destinations/uniques');
                };
                // getAllDestinationsMoinsCher(){
                //   return this.httpClient.get<DatesVoyages[]>('destinations/uniques').map((res: Response) => res.json())
                // }
                DestinationService.prototype.getDestinationById = function (id) {
                    return this.httpClient.get("/destinations/" + id);
                };
                DestinationService.prototype.getdatesVoyages = function (id) {
                    return this.httpClient.get("datesvoyages/" + id);
                };
                return DestinationService;
            }());
            DestinationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DestinationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DestinationService);
            /***/ 
        }),
        /***/ "./src/app/voyage/shared/services/voyage.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/voyage/shared/services/voyage.service.ts ***!
          \**********************************************************/
        /*! exports provided: VoyageService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoyageService", function () { return VoyageService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _entities_voyage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/voyage */ "./src/app/voyage/shared/entities/voyage.ts");
            /* harmony import */ var _destination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./destination.service */ "./src/app/voyage/shared/services/destination.service.ts");
            var VoyageService = /** @class */ (function () {
                function VoyageService(httpClient, destinationService) {
                    this.httpClient = httpClient;
                    this.destinationService = destinationService;
                    // private url = "";
                    // private datesVoyages = new DatesVoyages(1, new Date(),new Date(), 200, 10, 0, 0, "image1.png");
                    // private client = new Client(1, "raoul");
                    // private voyageurs = new Voyageur(1, "M", "Jean", "Robert", new Date());
                    // private voyages = [
                    //   new Voyage(1, "london", "il pleut un peu", this.datesVoyages, this.client, this.voyageurs),
                    //   new Voyage(1, "Paris", "C'est cool quand les gens ne ralent pas trop", this.datesVoyages, this.client, this.voyageurs),
                    //   new Voyage(1, "Cracovie", "la famille", this.datesVoyages, this.client, this.voyageurs)
                    // ];
                    this.voyage = new _entities_voyage__WEBPACK_IMPORTED_MODULE_3__["Voyage"]();
                }
                VoyageService.prototype.createVoyage = function (voyage) {
                    var _this = this;
                    console.log("le voyage reçu par createVoyage " + JSON.stringify(this.voyage));
                    voyage = this.voyage;
                    console.log("Le voyage qui s'apprete a etre envoyé à la requête " + JSON.stringify(voyage));
                    console.log("la requete : " + JSON.stringify(this.httpClient.post("/voyage/order", voyage)));
                    this.httpClient.post("/voyage/new", voyage).subscribe(function (voyage) { _this.voyage; });
                    console.log("je récupère : " + JSON.stringify(this.voyage));
                    return this.voyage;
                };
                VoyageService.prototype.createVoyageObject = function (voyageurs, client, datesVoyages, description, region) {
                    this.voyage.voyageurs = voyageurs;
                    this.voyage.client = client;
                    this.voyage.dateVoyage = datesVoyages;
                    this.voyage.descriptif = description;
                    this.voyage.region = region;
                    console.log("createVoyageObject " + JSON.stringify(this.voyage));
                    return this.voyage;
                    // this.voyageur.nom = voyageurForm.nom;
                    // const params = new HttpParams().set('civilite', voyageur.civilite).set('nom', voyageur.nom).set('prenom', voyageur.prenom).set('dateNaissance', voyageur.dateNaissance);
                };
                // client = new Client(client.id, client.name);
                //=> GET localhost:4200/
                VoyageService.prototype.getVoyageById = function (id) {
                    return this.httpClient.get('/voyage/' + id);
                };
                VoyageService.prototype.getVoyagesClient = function (client) {
                    return this.httpClient.post('/voyage/client/all', { 'id': client.id, 'nom': client.name });
                };
                VoyageService.prototype.updateVoyage = function (voyage) {
                    return this.httpClient.post('/voyage/new', voyage);
                };
                return VoyageService;
            }());
            VoyageService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _destination_service__WEBPACK_IMPORTED_MODULE_4__["DestinationService"] }
            ]; };
            VoyageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], VoyageService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\workspace-angular-ln\Bon dossier FINAL\Bovoyages-FINAL\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map