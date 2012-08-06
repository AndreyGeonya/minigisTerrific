(function($) {
    "use strict";
    
    Tc.Module.Map = Tc.Module.extend({
        /**
         * Tmpl engine function.
         * @type {Function}
         */
        tmpl: null,

        /**
         * Map object.
         * @type {DG.Map}
         */
        map: null,

        /**
         * Firm markers.
         * @type {Object}
         */
        _firmMarkers: {},

        /**
         * Initializes the Search module.
         *
         * @constructor
         * @param {jQuery} $ctx the jquery context
         * @param {Sandbox} sandbox the sandbox to get the resources from
         * @param {String} modId the unique module id
         */
        init: function($ctx, sandbox, modId) {
            // call base constructor
            this._super($ctx, sandbox, modId);

            // mix event handlers
            $.extend(this, Tc.Module.MapEventHandler);
        },

        /**
         * This function will be called on add module to the app.
         */
        on: function(callback) {
            callback();
        },

        /**
         * Hook function to trigger events.
         */
        after: function() {
        },

        /**
         * Init map.
         */
        initMap: function() {
            var html, self = this;

            html = this.tmpl($('#tmpl-map').text(), {});
            this.$ctx[0].innerHTML = html;

            $.getScript("http://maps.api.2gis.ru/1.0?loadByRequire=1", function() {
                DG.load(function() {
                    self.map = new DG.Map('map');
                    self.map.setCenter(new DG.GeoPoint(37.47, 55.45));
                    self.map.setZoom(8);
                });
            });
        },

        /**
         * Draws firms on map.
         * @param {Object} data
         */
        redrawFirms: function(data) {
            this.map.markers.removeAll();
            this._firmMarkers = {};

            for(var i = 0; i < data.result.length; i++) {
                this._firmMarkers[data.result[i].id] = new DG.Markers.MarkerWithBalloon({
                    geoPoint: new DG.GeoPoint(data.result[i].lon, data.result[i].lat),
                    balloonOptions: {
                        contentHtml: data.result[i].name
                    }
                });
                this.map.markers.add(this._firmMarkers[data.result[i].id]);
            }

            this.map.setBounds(this.map.markers.getBounds());
        },

        /**
         * Displays firm info in balloon.
         * @param {String} id Firm ID
         */
        showFirm: function(id) {
            this._firmMarkers[id].showBalloon();
        }
    });
})(Tc.$);