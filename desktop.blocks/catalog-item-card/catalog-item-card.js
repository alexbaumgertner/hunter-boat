/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('catalog-item-card', {

    onSetMod : {

        'js' : function() {

            var _this = this;

            this.loader = this.findBlockInside('content-loader');

            /* show init photo loading */
            this.loader.setMod('state', 'processing');


            /* bind events */

            // set current photo
            this.elem('photos-list-item').bind('click', function (e) {
                _this.setMod($(e.currentTarget), 'state', 'current');
            });

            // set current color
            this.findBlockInside('color-selector').on('setColor', function (event, data) {
                _this.selectColor(data);
            });

            // add to cart
            this.elem('buy-button').bind('click', function (e) {
                e.preventDefault();
                _this.setMod(_this.elem('added-in-cart'), 'visible', 'yes');
            });

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
        },

        'added-in-cart': {
            'visible': {
                'yes': function (elem, modName, modVal, oldModVal) {
                    this.showAddToCartAnimation(elem);
                },

                'no': function (elem, modName, modVal, oldModVal) {
                    this.afterCurrentEvent(
                        function(){
                            this.domElem.submit();
                        }
                    );

                }
            }
        }
    },

    showAddToCartAnimation: function (elem) {
        var _this = this;
        var targetTopMargin = 16; // px
        var beforeAnimateTime = 1000; // ms
        var offsetBuyButton = this.elem('buy-button').offset();
        var positionX = offsetBuyButton.left + (this.elem('buy-button').outerWidth() / 2) - (elem.outerWidth() / 2);
        var positionY = offsetBuyButton.top + (this.elem('buy-button').outerHeight() / 2) - (elem.outerHeight() / 2);
        var targetDOMElem = _this.findBlockOutside('b-page').findBlockInside('cart-info').elem('link');

        // Show elem and..
        elem.css(
            {
                left: positionX,
                top: positionY
            })
            .promise()
            // ..after show wait beforeAnimateTime, then animate.
            .done(function(){
                elem.delay(beforeAnimateTime)
                    .animate({   left: targetDOMElem.offset().left,
                        'top': targetDOMElem.offset().top - targetTopMargin,
                        'width': 0,
                        'height': 0,
                        'padding': 0,
                        'font-size': 0,
                        'line-height': 0
                    },

                    // After animate hide this block..
                    function () {

                        _this.setMod(elem, 'visible', 'no');

                        // .. and clear styles
                        elem.css({
                            'width': '',
                            'height': '',
                            'padding': '',
                            'font-size': '',
                            'line-height': ''
                        });
                    });
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
