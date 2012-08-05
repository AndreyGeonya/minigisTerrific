(function($) {
    "use strict";
    
    /**
     * All event handlers of the Search module.
     *
     * @method init
     * @constructor
     * @param {Tc.Module.Search} module Module, event handler belongs to.
     */
    Tc.Module.SearchEventHandler = {
        /**
         * Handles "tmplInit" event from "tmpl" channel
         * @param {Function} tmpl
         */
        afterTmplInit: function(tmpl) {
            this.tmpl = tmpl;
            this.drawSearchForm();
        }
    };
})(Tc.$);