/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
define(["broker", "demo@hello/views/hello"],
    function (Broker, HelloView) {

        "use strict";

        return {

            startModule: function () {
                if (_.isUndefined(window.localStorage.username) || _.isUndefined(window.localStorage.password)) {
                    this.showMain();
                } else {
                    this.showMain();
                }
            },

            showMain: function () {
                var view = new HelloView.Main();
                Broker.events.trigger("app:show:content", view);
            }


        };
    });
