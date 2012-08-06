(function($) {
    "use strict";
    
    /**
     * All event handlers of the Map module.
     */
    Tc.Module.MapEventHandler = {
        /**
         * Handles "tmplInit" event from "tmpl" channel.
         * @param {Function} tmpl
         */
        afterTmplInit: function(tmpl) {
            this.tmpl = tmpl;
            this.initMap();
        },

        /**
         * Handles "searchSuccess" event from "search" channel.
         * @param {Object} data
         */
        afterSearchSuccess: function(data) {
            this.redrawFirms(data);
        }
    };
})(Tc.$);