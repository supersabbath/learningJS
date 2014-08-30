    /*
     *
     * This file is part of the Hybreed package.
     * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
     *
     * For the full copyright and license information, please view the LICENSE
     * file that was distributed with this source code.
     *
     */
    define(["broker", "groove@shark/views/groover","hybreed"],
        function (Broker, HomeView, Hybreed) {

            "use strict";

            return {

                startModule: function () {
              //      if (_.isUndefined(window.localStorage.username) || _.isUndefined(window.localStorage.password)) {
              //          this.showLogin();
              //      } else {
                        this.showMain();
              //      }
                },

                showMain: function () {
                    if ((Hybreed.mobile && Hybreed.online) || (!Hybreed.mobile && navigator.onLine)) {
                        // CASO A.1: Disponemos de conexion, procedemos a la descarga de apps.
                        Hybreed.log("[Groove@Shark] Con conexion");
                        this.getSongs();
                    }
                },

                getSongs: function () {
                    var that = this;
                    var songCollection = Broker.reqres.request("groove@shark:entities:song");
                    songCollection.fetch()
                        .then(function (songs) {

                            that.createView(songCollection);

                        })
                        .fail(function () {
                            // error log
                            Hybreed.log("[Groove@Shark] Error al recuperar los programas");

                        });
                },

                createView: function (songs) {

                    var view = new HomeView.Main({collection: songs});
                    Broker.events.trigger("app:show:content", view);}
            };

        });