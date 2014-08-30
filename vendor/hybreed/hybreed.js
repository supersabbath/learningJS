/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
define(["jquery", "fastclick"], function ($, Fastclick) {

    var Hybreed,
        Version = "3.3.0";

    Hybreed = {
        enabled: true,
        el: null,
        online: false,
        mobile: false,
        platform: null
    };

    Hybreed.init = function (b) {

        Hybreed.debug(b);
        Hybreed.log("[Hybreed] Init");
        Hybreed.log("[Hybreed] Version " + Version);
        Hybreed.log("[Hybreed] PixelRatio: " + window.devicePixelRatio + " (" + window.screen.width + "x" + window.screen.height + ")");

        $.support.cors = true;
        $.ajaxSetup({
            cache: true,
            timeout: 20000
        });

        // JQuery Configuration : Ajax Errors
        $(document).ajaxError(function (event, request, settings) {
            return console.log(request.status + " " + request.statusText + " " + request.responseText + "\n" + settings.url);
        });

        // ontouchstart: enable CSS active pseudo styles in iOS
        document.addEventListener("touchstart", (function () {
        }), false);

        var fastclick = new Fastclick(document.body);

        /**
         * prevent ugly selection of text and elements in your UI
         * prevent UI elements from displaying a context menu on long-tap
         */
        if (Hybreed.platform === "ios") {
            document.documentElement.style.webkitTouchCallout = 'none';
            document.documentElement.style.webkitUserSelect = 'none';
            document.documentElement.style.cursor = 'default';
        }

        /**
         * prevent ugly selection of text and elements in your UI
         * prevent UI elements from displaying a context menu on long-tap
         */
        if (Hybreed.platform === "android") {
            document.addEventListener('longpress', function (e) {
                return false;
            });
            document.addEventListener('longclick', function (e) {
                return false;
            });
            document.documentElement.style.cursor = 'default';
        }
    };

    Hybreed.checkNet = function () {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';

        Hybreed.log('[Hybreed] Connection type: ' + states[networkState]);

        if (networkState === Connection.NONE && !navigator.onLine) {
            Hybreed.online = false;
        }
        else {
            Hybreed.online = true;
        }
    };

    Hybreed.getLocation = function () {
        var suc = function (p) {
            alert(p.coords.latitude + " " + p.coords.longitude);
        };
        var locFail = function () {
        };
        navigator.geolocation.getCurrentPosition(suc, locFail);
    };

    Hybreed.getPlatform = function () {
        var platforms = {
            android: /Android/,
            ios: /(iPad)|(iPhone)|(iPod)/,
            blackberry10: /(BB11)/,
            blackberry: /(PlayBook)|(BlackBerry)/,
            windows8: /MSAppHost/,
            windowsphone: /Windows Phone/,
        };
        for (var key in platforms) {
            if (platforms[key].exec(navigator.userAgent)) {
                Hybreed.platform = key;
                Hybreed.mobile = true;
                break;
            }
        }
    };

    Hybreed.debug = function (b) {
        Hybreed.debugEnabled = b;
        Hybreed.el = $("#debugLog");
        return Hybreed.log("[Hybreed] Debugging: " + b);
    };

    Hybreed.log = function (text) {
        if (Hybreed.debugEnabled) {
            console.log(text);
            // return Hybreed.el.prepend("<p>" + text + "</p>");
        }
    };

    Hybreed.truncateString = function (str, length) {
        var ellipsis, str1;
        str1 = void 0;
        if (str.length <= length) {
            return str;
        }
        ellipsis = "...";
        str1 = str.slice(0, length);
        return str1 + ellipsis;
    };

    Hybreed.millisecondsToTime = function (milli) {

        function addZ(n) {
            return (n < 10 ? '0' : '') + n;
        }

        var milliseconds, minutes, seconds;
        milliseconds = milli % 1000;
        seconds = Math.floor((milli / 1000) % 60);
        minutes = Math.floor((milli / (60 * 1000)) % 60);
        return addZ(minutes) + ":" + addZ(seconds);
    };

    Hybreed.centerTarget = function (target) {
        var targetNode = document.getElementById(target);
        //targetNode.style.marginTop = ((window.innerHeight - targetNode.style.height) / 2) + "px";
        //console.log("[Hybreed] Centertarget at " + ((window.innerHeight - targetNode.style.height) / 2) + "px");
        $(target).css('marginTop', (($(target).parent().innerHeight() - $(target).position().top - $(target).height()) / 2) + "px");
    };

    return Hybreed;
});
