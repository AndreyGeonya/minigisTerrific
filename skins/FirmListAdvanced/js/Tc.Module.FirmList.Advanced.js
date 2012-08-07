(function($) {
    /**
     * Advanced Skin implementation for the FirmList module.
     * @constructor
     */
    Tc.Module.FirmList.Advanced = function(parent) {
        /**
         * Redraws firm list.
         * The former/original method may be called via parent.<method>().
         * Override the appropriate methods from the decorated module.
         * @param {Object} data
         */
        this.redrawFirmList = function(data) {
            var html;

            console.log('Вы искали ' + data.what);

            html = this.tmpl($('#tmpl-firmListAdvanced').text(), data.result);
            this.$ctx[0].innerHTML = html;
        };
    };
})(Tc.$);