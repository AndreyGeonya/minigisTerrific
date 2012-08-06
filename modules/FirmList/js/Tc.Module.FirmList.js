(function($) {
    "use strict";
    
    Tc.Module.FirmList = Tc.Module.extend({
        /**
         * Tmpl engine function.
         * @type {Function}
         */
        tmpl: null,

        /**
         * Initializes the FirmList module.
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
            $.extend(this, Tc.Module.FirmListEventHandler);
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
         * Redraws firm list.
         * @param {Object} data
         */
        redrawFirmList: function(data) {
            var html;

            html = this.tmpl($('#tmpl-firmList').text(), data.result);
            this.$ctx[0].innerHTML = html;
        }
    });
})(Tc.$);