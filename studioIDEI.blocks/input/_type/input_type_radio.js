/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'input', modName: 'type', modVal: 'radio'}, {

    onSetMod : {

        'js' : function() {

        }

    },

    check: function (e) {
        this.delMod(this.elem('control'), 'checked');
        this.setMod(e.data.domElem.find(this.buildSelector('control')), 'checked', 'yes');
    }

}, {

    live : function() {
        this.liveBindTo('leftclick', function (e) {
            this.check(e);
        });
    }

});

})();
