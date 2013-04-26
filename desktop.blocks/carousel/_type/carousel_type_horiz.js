/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ block: 'carousel', modName: 'type', modVal: 'horiz'}, {

        onSetMod: {

            'js': function () {
                this.itemFullWidth = this.elem('item').outerWidth(true);
                this.frameWidth = this.elem('viewport').width();
                this.frameTotal = Math.round(this.itemFullWidth * this.elem('item').length / this.frameWidth);
            }

        },

        switchCarousel: function (direction) {

            if (direction === 'prev') {
                this.elem('items').animate({ 'left': '+=' + this.itemFullWidth });
                this.frameCurr = this.frameCurr - 1;

            } else {
                this.elem('items').animate({ 'left': '-=' + this.itemFullWidth });
                this.frameCurr = this.frameCurr + 1;
            }

            this.refreshControlsAbility();

        }

    }, {

        /* live : function() {
         *//* ... *//*
         }*/

    });

})();
