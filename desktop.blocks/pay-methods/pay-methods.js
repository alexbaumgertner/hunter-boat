/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('pay-methods', {

    onSetMod : {

        'js' : function() {
            /* скрыть все дополнительные тексты */

            this.elem('method-more').hide();

            this.bindTo('more-link', 'click', function (e) {
                this.openMoreText(e);
            });
        }

    }, // onSetMod (end)

    onElemSetMod: {

        'more-link': {

            'state': {

                'current': function (elem, modName, modVal, oldModVal) {
                    var prev = this.elem('more-link', 'state', 'current');
                    var currIndex = this.elem('more-link').index(elem);
                    var currItem = this.elem('method-more').eq(currIndex);

                    this.delMod(prev, 'state');
                    this.elem('method-more').hide();

                    currItem.show();
                }
            }
        }

    }, // onElemSetMod (end)

    openMoreText: function (e) {
        this.setMod(e.data.domElem, 'state', 'current');
    }

}, {

/*    live : function() {
        this.liveBindTo('more-link', 'click', function(e){
            this.openMoreText(e);
        });
    }*/

});

})();
