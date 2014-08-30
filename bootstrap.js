/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

var ENV = window.ENV || "mobile";

requirejs.config({

    baseUrl: ".",
    deps: ["vendor/hybreed/hybreed-" + ENV],
    paths: {

        // @Hybreed

        // Common Vendors
        "backbone.babysitter": "vendor/common/backbone.babysitter-0.0.6",
        "backbone.basicauth": "vendor/common/backbone.basicauth-0.4.0",
        "backbone.dualstorage": "vendor/common/backbone.dualstorage-1.1.0",
        "backbone.eventbinder": "vendor/common/backbone.eventbinder-1.0.2",
        "backbone.fetch-cache": "vendor/common/backbone.fetch-cache-1.3.0",
        "marionette": "vendor/common/backbone.marionette-1.5.0",
        "backbone.poller": "vendor/common/backbone.poller-0.2.8",
        "backbone.statemanager": "vendor/common/backbone.statemanager-0.0.3",
        "backbone.wreqr": "vendor/common/backbone.wreqr-0.2.0",
        "backbone": "vendor/common/backbone-1.1.0",
        "tableling": "vendor/common/tableling-0.0.21",
        "underscore": "vendor/common/underscore-1.5.2",

        // Hybreed common files
        "hybreed": "vendor/hybreed/hybreed",
        "application": "vendor/hybreed/hybreed-application",
        "push": "vendor/hybreed/hybreed-push",
        "broker": "vendor/hybreed/hybreed-broker",
        "analytics": "vendor/hybreed/hybreed-analytics",
        "mobile": "vendor/hybreed/hybreed-mobile",

        // JQuery Vendors
        "columnizer": "vendor/jquery/jquery.columnizer-1.6.1",
        "swipe": "vendor/jquery/jquery.touchswipe-1.6.5",
        "jquery": "vendor/jquery/jquery-2.0.3",
        "globalize": "vendor/jquery/jquery-globalize-0.1.1",
        "cultures": "vendor/jquery/jquery-globalize-cultures-es",

        // Mobile Vendors
        "d8": "vendor/mobile/d8-0.4.0",
        "fastclick": "vendor/mobile/fastclick-0.6.11",
        "ftcolumn": "vendor/mobile/ftcolumnflow",
        "hammer": "vendor/mobile/hammer-1.0.5",
        "iscroll": "vendor/mobile/iscroll",
        "uuid": "vendor/mobile/math-uuid-1.4",
        "sugar": "vendor/mobile/sugar-1.3.9",

        // RequireJS Vendors
        "css-builder": "vendor/require/css-builder-0.1.0",
        "normalize": "vendor/require/css-normalize-0.1.0",
        "css": "vendor/require/css-require-0.1.0",
        "domReady": "vendor/require/domready-2.0.1",
        "i18n": "vendor/require/i18n-2.0.4",
        "text": "vendor/require/text-2.0.10",

        // Testing Vendors
        "chai": "vendor/test/chai-1.8.1",
        "mocha": "vendor/test/mocha-1.14.0",
        "sinon": "vendor/test/sinon-1.7.3",
        "sinon-chai": "vendor/test/sinon-chai-2.4.0",
        "squire": "vendor/test/squire"

    },

    "shim": {
        "jquery": {
            "exports": "$"
        },
        "underscore": {
            "exports": "_"
        },
        "backbone": {
            "deps": ["hybreed", "underscore"],
            "exports": "Backbone"
        },
        "backbone.statemanager": {
            "deps": ["underscore", "backbone"],
            "exports": "StateManager"
        },
        "mocha": {
            "exports": "mocha"
        },
        "sinon": {
            "exports": "sinon"
        },
        "tableling": {
            "deps": ["backbone", "marionette", "backbone.babysitter", "backbone.wreqr"],
            "exports": "Tableling"
        },
        "d8": {
            "exports": "D8"
        }
    }

    /* Set this variable to force a determined language, by default it will use navigator.language */
    //"locale": "es"
});

/*
 * Error handling RequireJS error console output
 */
requirejs.onError = function (err) {
    window.console.log("[Bootstrap] Require error of type '" + err.requireType + "'");
    window.console.log("[Bootstrap] Require cannot load module '" + err.requireModules + "'");
    window.console.log("[Bootstrap] Require message '" + err.message + "'");
};

/*
 * Cultures (globalize) Loaded within require as globalize->cultures
 */
require(["globalize"], function () {
    var lang = window.localStorage.getItem("locale") ||
        window.navigator.userLanguage || window.navigator.language;
    Globalize.culture(lang);
});
