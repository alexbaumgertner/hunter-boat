/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('products-promo-carousel', {

    onSetMod : {

        'js' : function() {
            var _this = this;

           this.elem('switch').on('click', function(){
               _this._switchCarousel(this)
           });
        }

    },

    onElemSetMod: {

        'switch': {

            'state': {

                current: function (elem, modName, modVal, oldModVal) {

                    if (oldModVal == 'disabled') return false;

                    var prev = this.elem('switch', 'state', 'current');

                    this.delMod(prev, 'state');

                }

            }

        }


    },


    _switchCarousel: function (elem) {
        this.setMod($(elem), 'state', 'current');
    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();
