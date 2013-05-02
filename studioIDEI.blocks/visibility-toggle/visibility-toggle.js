/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('visibility-toggle', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    },

    toggleVisibility: function () {
        this.elem('content').toggle();
    }

}, {

    live : function() {
        this.liveBindTo('trigger', 'leftclick', function () {
            this.toggleVisibility();
        });
    }

});

})();
