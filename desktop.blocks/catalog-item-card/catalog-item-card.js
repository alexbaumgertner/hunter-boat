(function(undefined) {

BEM.DOM.decl('catalog-item-card', {

    onSetMod : {

        'js' : function() {


            var _this = this;

            this.loader = this.findBlockInside('content-loader');
            this.addToCartAnime = this.findBlockOutside('b-page').findBlockInside('add-to-cart-anime');
            this.cartInfo = this.findBlockOutside('b-page').findBlockInside('cart-info');


            /* bind events */

            // set current photos-list-item
            this.elem('photos-list-item').bind('click', function (e) {
                _this.setMod($(e.currentTarget), 'state', 'current');
            });

            // set current photo
            this.elem('photos-list-photo').bind('click', function (e) {
                // set current big photo
                _this.loader.setMod('state', 'processing');
                _this.elem('photo-big-img').attr('src', $(e.currentTarget).attr('rel'));

                // show/hide color selector
                var color = _this.getMod($(e.currentTarget), 'color');

                if (color) {
                    var selector = _this.colorSelector.elem('selector', 'color', color);

                    _this.colorSelector.setMod(selector, 'checked', 'yes');
                    _this.colorSelector.domElem.show();

                } else {
                    _this.colorSelector.domElem.hide();
                }

            });

            // set current color
            this.colorSelector = this.findBlockInside('color-selector');

            this.colorSelector && this.colorSelector.on('setColor', function (event, data) {
                _this.selectColor(data);
            });

            // bind to submit
            this.bindTo('submit', function (e) {
                e.preventDefault();

                /* show animate */
                _this.addToCartAnime.setMod('visible', 'yes');

                /* if addToCartAnime doesn't exist, then send request */
                !_this.addToCartAnime && _this.addToCart();
            });


            this.addToCartAnime.on('completed', function (event, data) {
                _this.addToCart();
            });


            /* show init photo loading */
            this.loader.setMod('state', 'processing');

            /* if photo cached, done */
            this.elem('photo-big-img').width() > 0 && this.loader.setMod('state', 'done');

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
                }
            }
        }
    },


    addToCart: function () {
        var _this = this;

        jQuery.post(_this.domElem.attr('action'), _this.domElem.serialize(), function(response) {
            var response = JSON.parse(response);
            _this.cartInfo.elem('total-products').html(response['total-products']);
            _this.cartInfo.elem('total-price').html(response['total-price']);
            _this.cartInfo.domElem.css({ opacity: 1 });
            _this.addToCartAnime.setMod('visible', 'no');
        });
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
