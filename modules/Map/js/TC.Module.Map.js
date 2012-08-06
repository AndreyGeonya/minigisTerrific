(function($) {
    "use strict";
    
    Tc.Module.Map = Tc.Module.extend({
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
            this.afterModuleInit();
        },

        /**
         * Draws html form.
         */
        drawMap: function() {
        },

        /**
         * Init map.
         */
        initMap: function() {            
            $.getScript("http://maps.api.2gis.ru/1.0?loadByRequire=1", function() {
                var map = $('#map')[0];
                DG.load(function() {
                    console.log('test');
                });            
            });


        },

        /**
         * Draws firms on map.
         */
        drawFirmMarkers: function() {

        }
    });
})(Tc.$);