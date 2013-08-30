/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('cart-info', {

    onSetMod : {

        'js' : function() {
            var _this = this;
            this.totalPriceValue = _this.findBlockInside(_this.elem('total-price'), 'price').elem('value');

            // event by order-list $(window).trigger('cart:update', { totalPrice: totalPrice, totalProducts: totalProducts });

            $(window).bind('cart:update', function(event, data) {

                // show or hide block
                if (data.totalProducts > 0) {
                    _this.delMod('empty');
                } else {
                    _this.setMod('empty', 'yes');
                }
            
                _this.elem('total-products').html(data.totalProducts);
                _this.totalPriceValue.html(data.totalPrice);
            });
        }

    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();
