/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('add-to-cart-anime', {

        onSetMod: {

            'js': function () {
                this.formToSubmit = this.findBlockOutside('b-page').findBlockInside('catalog-item-card');
                this.buyButton = this.formToSubmit.elem('buy-button');
            },

            'visible': {
                'yes': function (elem, modName, modVal, oldModVal) {
                    this.showAddToCartAnimation(this.domElem);
                },

                'no': function (elem, modName, modVal, oldModVal) {
                    this.afterCurrentEvent(function () {
                        this.formToSubmit.domElem.submit();
                    });

                }
            }

        },


        showAddToCartAnimation: function (elem) {
            var _this = this;
            var targetTopMargin = 16; // px
            var beforeAnimateTime = 1000; // ms
            var offsetBuyButton = this.buyButton.offset();
            var positionX = offsetBuyButton.left + (this.buyButton.outerWidth() / 2) - (elem.outerWidth() / 2);
            var positionY = offsetBuyButton.top + (this.buyButton.outerHeight() / 2) - (elem.outerHeight() / 2);
            var targetDOMElem = _this.findBlockOutside('b-page').findBlockInside('cart-info').elem('link');

            // Show elem and..
            elem.css({
                    left: positionX,
                    top: positionY
                }).promise()// ..after show wait beforeAnimateTime, then animate.
                .done(function () {
                    elem.delay(beforeAnimateTime).animate({   left: targetDOMElem.offset().left,
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
        }


    }, {

/*        live: function () {
            *//* ... *//*
        }*/

    });

})();
