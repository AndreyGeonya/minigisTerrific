(function($) {
    "use strict";
    Tc.Module.Search = Tc.Module.extend({
        /**
         * Tmpl engine object.
         */
        tmpl: null,

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
            $.extend(this, Tc.Module.SearchEventHandler);
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
        after: function() {},

        /**
         * Draws html form.
         */
        drawSearchForm: function() {
            var html;

            html = this.tmpl($('#tmpl-search').text(), {});
            this.$ctx[0].innerHTML = html;
        }
    });
})(Tc.$);