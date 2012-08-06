(function($) {
    "use strict";
    
    /**
     * All event handlers of the FirmListEventHandler module.
     */
    Tc.Module.FirmListEventHandler = {
        /**
         * This method called directly after this module init.
         */
        afterModuleInit: function() {
            var self = this;
            $('a', this.$ctx).live('click', function() {
                self.fire('firmClick', $(this).attr('id'), ['firmList']);
                return false;
            });
        },

        /**
         * Handles "searchSuccess" event from "search" channel.
         * @param {Object} data
         */
        afterSearchSuccess: function(data) {
            this.redrawFirmList(data);
        },

        /**
         * Handles "tmplInit" event from "tmpl" channel.
         * @param {Function} tmpl
         */
        afterTmplInit: function(tmpl) {
            this.tmpl = tmpl;
        }
    };
})(Tc.$);