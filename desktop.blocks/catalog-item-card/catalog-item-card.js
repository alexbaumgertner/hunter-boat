/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('catalog-item-card', {

    onSetMod : {

        'js' : function() {
            this.photoBigColors = this.elemParams('photo-big-img');
        }

    },

    onElemSetMod: {

        'photos-list-item': {
            'state': {
                'current': function (elem, modName, modVal, oldModVal) {
                    var prev = this.elem('photos-list-item', 'state', 'current');
                    this.delMod(prev, 'state');

                    // set current big photo
                    this.elem('photo-big-img').attr('src', elem.attr('rel'));
                }
            }
        },

        'added-in-cart': {
            'visible': {
                'yes': function (elem, modName, modVal, oldModVal) {
                    console.log(elem);
                }
            }
        }
    },


    selectColor: function (color) {
        this.elem('photo-big-img').attr('src', this.photoBigColors[color]);
    }

}, {

    live : function() {

        // set current photo
        this.liveBindTo('photos-list-item', 'click', function (e) {
            this.setMod(e.data.domElem, 'state', 'current');
        });

        // set current color
        this.liveBindTo('color-selector', 'click', function (e) {
            this.selectColor(this.getMod(e.data.domElem, 'color'));
        });

        // add to cart
        this.liveBindTo('buy-button', 'click', function () {
            this.setMod(this.elem('added-in-cart'), 'visible', 'yes');
        });
    }

});

})();
