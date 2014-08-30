/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
define(["marionette", "groove@shark/config", "hybreed", "i18n!groove@shark/nls/strings","iscroll"], function (Marionette, Config, Hybreed, Strings) {

    "use strict";

    return {
        Main: Marionette.ItemView.extend({

            template: _.template(Config.html_groove, {strings: Strings}),
            tagName: "div",
            className: "list",


            onShow: function () {
                Hybreed.log ("Groover Start!");
                /* Hide the spinner and center the #content div */
                $('.spinner').css('visibility', 'hidden');
        /*        Hybreed.centerTarget("#content");
                $('.listening').css('display', 'none');
                $('.received').css('display', 'block');
        */
                /*
                var scroller = new IScroll("#groove-songs-list", {
                    useTransition: true,
                    tap:true
                }); */
            }
        })

    };

});

