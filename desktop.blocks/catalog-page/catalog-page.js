/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('catalog-page', {

    onSetMod : {

        'js' : function() {
            var _this = this;

            this.elem('menu-item-title').click(function () {
                _this.toggleMod($(this), 'order', 'asc', 'desc');
            });
        }

    }

}, {

    /*live : function() {
        *//* ... *//*
    }*/

});

})();
