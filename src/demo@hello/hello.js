/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
require.config({
    paths: {
        "demo@hello": "src/demo@hello"
        // @build (keep line)
    }
});

define(["broker", "demo@hello/controller", "hybreed"], function (Broker, Controller, Hybreed) {

    "use strict";

    var API;

    /* Show the spinner and center it */
    //Hybreed.centerTarget("#spinner");
    $('#spinner').css('visibility', 'visible');

    Broker.commands.setHandler("demo@hello:start", function () {
        API.start();
    });

    API = {

        start: function () {
            return Controller.startModule();
        }
    };
});

