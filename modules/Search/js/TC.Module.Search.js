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
        after: function() {
            this.afterModuleInit();
        },

        /**
         * Draws html form.
         */
        drawSearchForm: function() {
            var html;

            html = this.tmpl($('#tmpl-search').text(), {});
            this.$ctx[0].innerHTML = html;
        },

        /**
         * Search firms.
         */
        search: function() {
            $.ajax({
                url: 'http://catalog.api.2gis.ru/search',
                data: {
                    what: $('#what', this.$ctx).attr('value'),
                    where: $('#where', this.$ctx).attr('value'),
                    key: Tc.Module.Search.API_KEY,
                    version: Tc.Module.Search.API_VERSION,
                    output: 'jsonp'
                },
                dataType: 'jsonp',
                success: function(data) {
                    if(data.response_code == '200') {
                        this.fire('searchSuccess', data, ['search']);
                    }
                    else {
                        this.fire('searchError', data.error_message, ['search']);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    this.fire('searchError', textStatus, ['search']);
                },
                context: this
            });
        }
    });

    /**
     * @const
     * @type {String}
     */
    Tc.Module.Search.API_KEY = 'rujrdp3400',

    /**
     * @const
     * @type {Number}
     */
    Tc.Module.Search.API_VERSION = 1.3
})(Tc.$);