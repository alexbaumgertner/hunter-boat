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
            console.log(this.getMod(e.data.domElem, 'direction'));
            console.log(this.itemFullWidth);
        }

    }, {

        live: function () {
            this.liveBindTo('control', 'leftclick', function (e) {
                this.onControlClick(e);
            });
        }

    });

})();
