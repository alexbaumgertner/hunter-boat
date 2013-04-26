/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ block: 'carousel', modName: 'type', modVal: 'vert'}, {

        onSetMod: {

            'js': function () {
                this.itemFullHeight = this.elem('item').outerHeight(true);
                this.frameHeight = this.elem('viewport').height();
                this.frameTotal = Math.round(this.itemFullHeight * this.elem('item').length / this.frameHeight);
            }

        },


        switchCarousel: function (direction) {

            if (direction === 'prev') {
                this.elem('items').animate({ 'top': '+=' + this.itemFullHeight });
                this.frameCurr = this.frameCurr - 1;

            } else {
                this.elem('items').animate({ 'top': '-=' + this.itemFullHeight });
                this.frameCurr = this.frameCurr + 1;
            }

            this.refreshControlsAbility();

        }

    }, {

/*        live: function () {
            *//* ... *//*
        }*/

    });

})();
