/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ block: 'carousel', modName: 'type', modVal: 'vert'}, {

        onSetMod: {

            'js': function () {

                this.bindTo('control', 'leftclick', function (e) {
                    this.onControlClick(e);
                });

                // viewport size
                this.frameHeight = this.elem('viewport').innerHeight();

                this.itemFullHeight = Math.floor(this.frameHeight / this.params.frameItemsCount);

                this.frameTotal = Math.round(this.itemFullHeight * this.elem('item').length / this.frameHeight);

                // correct viewport width
                this.frameHeight = this.itemFullHeight * this.params.frameItemsCount; // item with margins

                this.elem('viewport').css({ height: this.frameHeight });

                var itemMarginAndBorderHeight = this.elem('item').outerHeight(true) -  this.elem('item').innerHeight();
                this.elem('item').css({ height: this.itemFullHeight - itemMarginAndBorderHeight });

                this.frameCurr = this.params.frameCurr;
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
