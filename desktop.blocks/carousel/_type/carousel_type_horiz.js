/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ block: 'carousel', modName: 'type', modVal: 'horiz'}, {

        onSetMod: {

            'js': function () {

                this.bindTo('control', 'leftclick', function (e) {
                    this.onControlClick(e);
                });

                this.frameWidth = this.elem('viewport').innerWidth();

                this.itemFullWidth = Math.floor(this.frameWidth / this.params.frameItemsCount);

                // correct viewport width
                this.frameWidth = this.itemFullWidth * this.params.frameItemsCount;

                this.elem('viewport').css({ width: this.frameWidth });
                this.elem('item').css({ width: this.itemFullWidth });


                this.frameTotal = Math.round(this.itemFullWidth * this.elem('item').length / this.frameWidth);
                this.frameCurr = this.params.frameCurr;
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

/*        live: function () {
            this.liveBindTo('control', 'leftclick', function (e) {
                this.onControlClick(e);
            });
        }*/
    });

})();
