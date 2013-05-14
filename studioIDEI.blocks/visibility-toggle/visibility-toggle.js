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
        // toggleMod : function(elem, modName, modVal1, modVal2, condition)
        this.toggleMod('content-visible', 'no', 'yes');
    }

}, {

    live : function() {
        this.liveBindTo('trigger', 'leftclick', function () {
            this.toggleVisibility();
        });
    }

});

})();
