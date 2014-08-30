/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
define(["hybreed", "broker", "marionette"],
    function (Hybreed, Broker, Marionette) {

        /**
         * Ensure that you have installed the next cordova plugin in order to work correctly
         *
         *      org.jboss.aerogear.cordova.push
         */

        Hybreed.Push = {

            successHandler: function (message) {
                Hybreed.log("[Hybreed Push Service] Registration Success: " + message);
            },

            errorHandler: function (message) {
                Hybreed.log("[Hybreed Push Service] Registration Failed: " + message);

            },

            onNotification: function (e) {
                // alert(e.alert);
                //var notify = document.getElementById("notify");
                //notify.innerHTML = e.alert;
                navigator.notification.alert(e.alert, function(){}, "Mensaje Recibido", "Aceptar");
                alert(e.alert);
            },

            conf: null,

            configIOS: {
                senderID: "492580885002",
                pushServerURL: "https://aerogear-lefebvre.rhcloud.com/",
                variantID: "530515ee-462c-445f-b64e-6aff023cb097",
                variantSecret: "a90c5d4a-b9e3-46cb-a700-eb80bd8a2918"
            },

            configAndroid: {
                senderID: "198327611500",
                pushServerURL: "https://aerogear-lefebvre.rhcloud.com/",
                variantID: "9a0da702-cae1-42ec-b406-a3f20b941667",
                variantSecret: "d27308ab-8a0a-412d-b894-bbe1e4dff3ba"
            },



            init: function () {
                console.log("initializing Push...");

                switch (Hybreed.platform){
                    case "ios":
                        this.conf = this.configIOS;
                        this.register();
                        break;
                    case "android":
                        this.conf = this.configAndroid;
                        this.register();
                        break;
                    default :
                        Hybreed.log("[Hybreed Push Service] WARNING: No configuration found for platform " + Hybreed.platform);
                }
            },

            register: function (){
                push.register(
                    this.successHandler,
                    this.errorHandler,
                    {
                        "badge": "true",
                        "sound": "true",
                        "alert": "true",
                        ecb: "this.onNotification",
                        pushConfig: this.conf
                    });
            }
        };

});