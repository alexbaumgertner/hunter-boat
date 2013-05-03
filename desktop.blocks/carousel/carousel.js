/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    /* TODO: separate horiz / vert */

    BEM.DOM.decl('carousel', {

        onSetMod: {

            'js': function () {
                console.dir(this);
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

        refreshControlsAbility: function () {
            // TODO: optimize

            this.delMod(this.elem('control', 'direction'), 'state');

            console.log(this.frameCurr);

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
