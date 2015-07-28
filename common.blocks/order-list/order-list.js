/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('order-list', {

    onSetMod : {

        'js' : function() {

            var _this = this;
            this.totalPriceValue = this.findBlockInside(this.elem('total-value'), 'price').elem('value');

            // update count
            $.each(this.findBlocksInside('counter', 'input'), function (indexInArray, valueOfElement) {
                valueOfElement.bindTo('change', function (e) {
                    _this.updateTotalPrice();
                });
            });


            // delete item
            $.each(this.findBlocksInside('delete', 'button'), function (indexInArray, valueOfElement) {
                valueOfElement.bindTo('click', function (e) {
                    _this.deleteItem(e);
                });
            });

        }

    },

    deleteItem: function (e) {
        e.preventDefault();

        var _this = this;

        var item = this._getItemByEvent(e);
        
        $.get($(e.currentTarget).attr('href'), function () {
            item.remove();
            _this.updateTotalPrice();
        });


    },

    /**
     * update total price
     * trigger window event 'cart:update' with total price and count
     */
    updateTotalPrice: function () {
        var _this = this;
        var totalPrice = 0;
        var totalProducts = 0;

        $.each(this.findBlocksInside('counter', 'input'), function (indexInArray, valueOfElement) {

            var count = parseInt(valueOfElement.domElem.val(), 10);
            var item = valueOfElement.domElem.closest(_this.buildSelector('item'));

            var price = _this.findBlockInside(item, 'price').findElem('value').text().replace(/\D+/, '');

            totalPrice = totalPrice + count * price;
            totalProducts = totalProducts + count;
        });

        var thinSpace = '&thinsp;';
        var every3DigitRE = /(\d)(?=(\d{3})+(?!\d))/g;
        var totalPriceFormatted =  (totalPrice + '').replace(every3DigitRE, '$1' + thinSpace);

        this.totalPriceValue.html(totalPriceFormatted);

        $(window).trigger('cart:update', { totalPrice: totalPriceFormatted, totalProducts: totalProducts });
    },


    _getItemByEvent : function(e) {
        return $(e.currentTarget).closest(this.buildSelector('item'));
    }

}, {


});

})();
