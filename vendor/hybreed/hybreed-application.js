/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
define(["hybreed", "broker", "marionette"], function (Hybreed, Broker, Marionette) {

    Hybreed.Application = function (config) {

        var app = new Marionette.Application();

        Broker.reqres.setHandler("config:defines", function () {
            return config.defines;
        });

        app.addRegions(config.regions);

        app.addInitializer(function () {

            $.each(config.init.commands, function (index, command) {
                Broker.commands.execute(config.init.commands[index]);
            });

            return true;
        });

        $.each(config.regions, function (region) {
            Broker.events.on("app:show:" + region, function (view) {
                return app[region].show(view);
            });
            Broker.events.on("app:hide:" + region, function () {
                console.log("hiding/closing region");
                return app[region].close();

            });
        });

        this.init = function () {
            app.on("initialize:after", function () {
                if (!Backbone.history.started) {
                    return Backbone.history.start();
                }
            });
        };

        this.start = function () {
            app.start();
        };
    };
});