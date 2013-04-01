/** @requires BEM */
/** @requires BEM */

(function(undefined) {

BEM.DOM.decl('i-carousel', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    },

    onControlClick: function (e) {

        console.log(this.getMod('type'));

        var buttonPrev = this.findBlockInside({ block : 'button', modName : 'direction', modVal : 'prev' });

        if (this.getMod(e.data.domElem, 'direction') == 'next') {
            buttonPrev.setMod('state', 'enabled');
            $(this.elem('list')[0]).animate({ left: '-=' + this.elem('item').outerWidth(true) })

        } else {
            $(this.elem('list')[0]).animate({ left: '+=' + this.elem('item').outerWidth(true) })
        }

    }

}, {

    live : function() {
        this.liveBindTo('control', 'leftclick', function(e) {
            this.onControlClick(e);
        });
    }

});

})();
