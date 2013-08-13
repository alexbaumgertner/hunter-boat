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
                    e.preventDefault();
                    _this.deleteItem(_this._getItemByEvent(e));
                });
            });

        }

    },

    deleteItem: function (item) {
        item.remove();
        this.updateTotalPrice();

    },

    updateTotalPrice: function () {
        var _this = this;
        var totalPrice = 0;

        $.each(this.findBlocksInside('counter', 'input'), function (indexInArray, valueOfElement) {

            var count = valueOfElement.domElem.val();
            var item = valueOfElement.domElem.closest(_this.buildSelector('item'));

            var price = _this.findBlockInside(item, 'price').findElem('value').text().replace(/\D+/, '');

            totalPrice = totalPrice + count * price;
        });

        var thinSpace = '&thinsp;';
        var every3DigitRE = /(\d)(?=(\d{3})+(?!\d))/g;
        var totalPriceFormatted =  (totalPrice + '').replace(every3DigitRE, '$1' + thinSpace);

        this.totalPriceValue.html(totalPriceFormatted);
    },


    _getItemByEvent : function(e) {
        return $(e.currentTarget).closest(this.buildSelector('item'));
    }

}, {


});

})();
