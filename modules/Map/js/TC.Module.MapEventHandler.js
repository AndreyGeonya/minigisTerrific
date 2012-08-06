(function($) {
    "use strict";
    
    /**
     * All event handlers of the Map module.
     */
    Tc.Module.MapEventHandler = {
        /**
         * This method called directly after this module init.
         */
        afterModuleInit: function() {
            this.initMap();          
        }
    };
})(Tc.$);