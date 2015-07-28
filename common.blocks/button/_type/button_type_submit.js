/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'button', modName: 'type', modVal: 'submit'}, {

    onSetMod : {

        'js' : function() {
            /* ... */
        },

        state: function (modName, modVal, oldModVal) {

            if (modVal === 'disabled') {
                this.domElem.attr('disabled', 'disabled');

            } else if (modVal === 'enabled') {
                this.domElem.removeAttr('disabled');
            }
        }

    }

}, {


});

})();
