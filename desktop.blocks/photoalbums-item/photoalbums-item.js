/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('photoalbums-item', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    },

    onElemSetMod: {

        'photo': {

            'state': {

                'current': function (elem, modName, modVal, oldModVal) {

                    if (oldModVal == 'disabled') return false;

                    var prev = this.elem('photo', 'state', 'current');

                    this.delMod(prev, 'state');

                    this.elem('current').attr('src', elem.attr('rel'));

                }
            }
        }
    },

    setCurrFullPhoto: function (e) {
        this.setMod(e.data.domElem, 'state', 'current');
    }

}, {

    live : function() {
        this.liveBindTo('photo', 'click', function (e) {
            this.setCurrFullPhoto(e);
        });
    }

});

})();
