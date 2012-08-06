(function($) {
    "use strict";
    
    /**
     * All event handlers of the Search module.
     */
    Tc.Module.SearchEventHandler = {
        /**
         * This method called directly after this module init.
         */
        afterModuleInit: function() {
            $('#searchBtn', this.$ctx).live('click', $.proxy(this.search, this));
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