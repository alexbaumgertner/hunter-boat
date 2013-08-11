/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('catalog-item-card', {

    onSetMod : {

        'js' : function() {


            var _this = this;

            this.loader = this.findBlockInside('content-loader');
            this.addToCartAnime  = this.findBlockOutside('b-page').findBlockInside('add-to-cart-anime');


            /* bind events */

            // set current photo
            this.elem('photos-list-item').bind('click', function (e) {
                _this.setMod($(e.currentTarget), 'state', 'current');
            });

            // set current color
            this.colorSelector = this.findBlockInside('color-selector');

            this.colorSelector && this.colorSelector.on('setColor', function (event, data) {
                _this.selectColor(data);
            });

            // add to cart
            this.elem('buy-button').bind('click', function (e) {
                e.preventDefault();
                _this.addToCartAnime.setMod('visible', 'yes');
            });


            /* show init photo loading */
            this.loader.setMod('state', 'processing');

            this.elem('photo-big-img').width() > 0 && this.loader.setMod('state', 'processing');

            this.elem('photo-big-img').load(function () {
                _this.loader.setMod('state', 'done');
            });

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
                    this.loader.setMod('state', 'processing');
                    this.elem('photo-big-img').attr('src', elem.attr('rel'));
                }
            }
        }
    },


    selectColor: function (color) {
        this.loader.setMod('state', 'processing');
        this.elem('photo-big-img').attr('src', this.photoBigColors[color]);
        this.elem('color-input').val(color);
    }

}, {

/*    live : function() {

        // set current photo
        this.liveBindTo('photos-list-item', 'click', function (e) {
            this.setMod(e.data.domElem, 'state', 'current');
        });

        // set current color
        this.liveInitOnBlockInsideEvent('setColor', 'color-selector', function (event, data) {
            this.selectColor(data);
        });

        // add to cart
        this.liveBindTo('buy-button', 'click', function (e) {
            e.preventDefault();
            this.setMod(this.elem('added-in-cart'), 'visible', 'yes');
        });
    }*/

});

})();
