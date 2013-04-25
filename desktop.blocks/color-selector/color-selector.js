/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('color-selector', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    },

    onElemSetMod: {

        'selector': {

            'checked': {

                'yes': function (elem, modName, modVal, oldModVal) {

                    var prev = this.elem('selector', 'checked', 'yes');

                    this.delMod(prev, 'checked').trigger('setColor', modVal);
                    
                }
            }
        }

    },

    onItemSelectorClick: function (e) {
        var item = e.data.domElem;
        this.setMod(item, 'checked', 'yes');

    }

}, {

    live : function() {
        this.liveBindTo('selector', 'leftclick', function (e) {
        
            this.onItemSelectorClick(e);
        
        });
    }

});

})();
