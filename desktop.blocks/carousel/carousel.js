/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('carousel', {

        onSetMod: {

            'js': function () {
                this.itemFullWidth = this.elem('item').outerWidth(true);
                this.frameWidth = this.elem('viewport').width();
                this.frameTotal = Math.round(this.itemFullWidth * this.elem('item').length / this.frameWidth);
                this.frameItemsCount = Math.ceil(this.frameWidth / this.itemFullWidth);
                this.frameCurr = 1; // start by first
            }

        },

        onControlClick: function (e) {

            var domElem = e.data.domElem;

            if (this.getMod(domElem, 'state') === 'disabled') {
                return;
            }

            var direction = this.getMod(domElem, 'direction');

            this.switchCarousel(direction);
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

        },

        refreshControlsAbility: function () {
            // TODO: optinize

            this.delMod(this.elem('control', 'direction'), 'state');

            if (this.frameCurr === 1) {
                this.setMod(this.elem('control', 'direction', 'prev'), 'state', 'disabled');

            } else {
                this.delMod(this.elem('control', 'direction', 'prev'), 'state');
            }

            if (this.frameCurr === this.frameTotal) {
                this.setMod(this.elem('control', 'direction', 'next'), 'state', 'disabled');

            } else {
                this.delMod(this.elem('control', 'direction', 'next'), 'state');
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
