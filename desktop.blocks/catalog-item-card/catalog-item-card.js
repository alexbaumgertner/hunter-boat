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
        this.liveBindTo('buy-button', 'click', function (e) {
            e.preventDefault();
            this.setMod(this.elem('added-in-cart'), 'visible', 'yes');
        });
    }

});

})();
