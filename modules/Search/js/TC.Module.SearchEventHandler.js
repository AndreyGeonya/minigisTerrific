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
         * This method called directly after this module inited.
         */
        afterModuleInit: function() {
            $('#searchBtn', this.$ctx).live('click', this.search);
        },

        /**
         * Handles "tmplInit" event from "tmpl" channel.
         * @param {Function} tmpl
         */
        afterTmplInit: function(tmpl) {
            this.tmpl = tmpl;
            this.drawSearchForm();
        }
    };
})(Tc.$);