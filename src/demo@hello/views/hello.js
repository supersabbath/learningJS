/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
define(["marionette", "demo@hello/config", "hybreed", "i18n!demo@hello/nls/strings"], function (Marionette, Config, Hybreed, Strings) {

    "use strict";

    return {
        Main: Marionette.ItemView.extend({

            template: _.template(Config.html_hello, {strings: Strings}),

            tagName: "div",
            className: "app",

            onShow: function () {

                /* Hide the spinner and center the #content div */
                $('.spinner').css('visibility', 'hidden');

                Hybreed.centerTarget("#content");

                $('.listening').css('display', 'none');
                $('.received').css('display', 'block');

            }
        })

    };

});

