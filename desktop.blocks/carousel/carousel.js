/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('carousel', {

        onSetMod: {

            'js': function () {
                this.itemFullWidth = this.elem('item').outerWidth(true);
            }

        },

        onControlClick: function (e) {
            var direction = this.getMod(e.data.domElem, 'direction');

            this.switchCarousel(direction);
        },


        switchCarousel: function (direction) {

            if (direction === 'prev') {
                this.elem('items').animate({ 'left': '-=' + this.itemFullWidth });

            } else {
                this.elem('items').animate({ 'left': '+=' + this.itemFullWidth });
            }


        }


    }, {

        live: function () {
            this.liveBindTo('control', 'leftclick', function (e) {
                this.onControlClick(e);
            });
        }

    });

})();
