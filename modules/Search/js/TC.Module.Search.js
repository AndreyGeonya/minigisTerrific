(function($) {
    "use strict";
    Tc.Module.Search = Tc.Module.extend({
        /**
         * Initializes the Search module.
         *
         * @method init
         * @constructor
         * @param {jQuery} $ctx the jquery context
         * @param {Sandbox} sandbox the sandbox to get the resources from
         * @param {String} modId the unique module id
         */
        init: function($ctx, sandbox, modId) {
            // call base constructor
            this._super($ctx, sandbox, modId);
            
            console.log('init Search!');
        },

        on: function() {
            
        }
    });
})(Tc.$);
