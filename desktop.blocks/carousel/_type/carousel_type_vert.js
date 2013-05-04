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

                this.frameTotal = Math.ceil((this.elem('item').length - this.params.frameItemsCount) / this.params.frameItemsStep) + 1; // 1 -- current frame

                // correct viewport width
                this.frameHeight = this.itemFullHeight * this.params.frameItemsCount;

                this.elem('viewport').css({ height: this.frameHeight });
                this.elem('item').css({ height: this.itemFullHeight });

                this.frameCurr = this.params.frameCurr;
            }

        },


        switchCarousel: function (direction) {

            if (direction === 'prev') {
                this.elem('items').animate({ 'top': '+=' + (this.itemFullHeight * this.params.frameItemsStep) });
                this.frameCurr = this.frameCurr - 1;

            } else {
                this.elem('items').animate({ 'top': '-=' + (this.itemFullHeight * this.params.frameItemsStep) });
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
