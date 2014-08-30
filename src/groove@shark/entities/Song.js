/**
 * Created by cem on 29/08/14.
 */


define(["backbone", "hybreed", "broker"], function (Backbone, Hybreed, Broker) {


    var SongModel,
        SongCollection,
        API;

    SongModel = Backbone.Model.extend({
        name:"shortTitle"

    });

    SongCollection = Backbone.Collection.extend({

        initialize: function (options) {
            if (!_.isUndefined(options) && !_.isNull(options)) {
                this.url = options.url;
            }
        },

        model: SongModel,

        parse: function (res) {
            if (_.isObject(res.page.items)) {
                return res.page.items;
            } else {
                return res;
            }
        }
    });

    Broker.reqres.setHandler("groove@shark:entities:song", function () {
        Hybreed.log("[groove@shark] entity request: Song");
        return API.getSongEntities();
    });

    API = {
        getSongEntities: function () {
            var songs;
            songs = new SongCollection({url: "http://www.rtve.es/api/audios.json"});
            return songs;
        }
    };
});