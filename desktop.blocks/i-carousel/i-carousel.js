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
        console.log(this.getMod(e.data.domElem, 'direction'));
        console.log(this.elem('list'));
        console.log('-=' + this.elem('item').outerWidth(true));

        if (this.getMod(e.data.domElem, 'direction') == 'next') {
            $(this.elem('list')[0]).animate({ left: '-=' + this.elem('item').outerWidth(true) })

        } else {
            $(this.elem('list')[0]).animate({ left: '+=' + this.elem('item').outerWidth(true) })
        }

        console.log(this.elem('viewport').outerWidth());
        console.log(this.elem('item').outerWidth(true));
    }

}, {

    live : function() {
        this.liveBindTo('control', 'leftclick', function(e) {
            this.onControlClick(e);
        });
    }

});

})();
