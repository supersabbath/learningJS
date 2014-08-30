/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
define(["hybreed"],
    function (Hybreed) {

        /**
         * Ensure that you have installed the next cordova plugin in order to work correctly
         *
         *      https://github.com/danwilson/google-analytics-plugin.git
         */

        Hybreed.Analytics = {

            UA: null,

            setTrackingID: function (id) {
                if (Hybreed.mobile && Hybreed.online) {
                    this.UA = id;
                    analytics.startTrackerWithId(id);
                } else {
                    Hybreed.log("[Hybreed Analytics] Warning: No mobile environment detected. Cannot setup tracking ID.");
                }
            },

            trackView: function (viewTitle) {
                if (this.UA === null) {
                    Hybreed.log("[Hybreed Analytics] Warning: No application id found. Set it up first.");
                } else if (Hybreed.mobile && Hybreed.online) {
                    analytics.trackView(viewTitle);
                    Hybreed.log("[Hybreed Analytics] View Tracked: " + viewTitle);
                }
            },

            trackEvent: function (category, action, label, value) {
                if (this.UA === null) {
                    Hybreed.log("[Hybreed Analytics] Warning: No application id found. Set it up first.");
                } else if (Hybreed.mobile && Hybreed.online) {
                    analytics.trackEvent(category, action, label, value);
                    Hybreed.log("[Hybreed Analytics] Event Tracked: " + category + "-" + action + "-" + label + "-" + value);
                }
            }
        };
    });

