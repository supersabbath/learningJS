/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
require(["domReady", "hybreed", "config.prod", "application", "push"],
    function (domReady, Hybreed, config) {

        /*
         * domReady is RequireJS plugin that triggers when DOM is ready
         */
        domReady(function () {

            var onDeviceReady = function (desktop) {


                Hybreed.init(true);
                //googleAnalytics.init();

                if (Hybreed.mobile === true) {
                    navigator.splashscreen.hide();
                    Hybreed.checkNet();

                    /**
                     * Uncomment to activate Push Service.
                     * Set-up hybreed-push.js with your server and API tokens
                     */
                    //Hybreed.Push.init();
                }

                /**
                 * Google Analytics
                 */
                // Hybreed.Analytics.setTrackingID('UA-XXXXXXXX-X');

                Hybreed.log("[Hybreed Mobile] Init");
                var application = new Hybreed.Application(config);
                application.init();
                application.start();

            };

            Hybreed.getPlatform();

            if (Hybreed.mobile === true) {
                document.addEventListener("online", Hybreed.checkNet, false); // Cordova
                document.addEventListener("offline", Hybreed.checkNet, false); // Cordova
                document.addEventListener("deviceready", onDeviceReady, false); // This
            }
            else {
                // Polyfill for navigator.notification features to work in browser when debugging
                navigator.notification = {
                    alert: function (message) {
                        return alert(message);
                    }
                };
                return onDeviceReady(true);
            }

        });


    });