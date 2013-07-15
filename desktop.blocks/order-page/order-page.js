/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ name: 'order-page', baseBlock: 'i-tabbed-pane'  }, {


    onSetMod: {

        js: function () {

            this.__base();
            this.on('current-tab', function (event, data) {
                this.setMod(data.prev, 'filled', 'yes');
            });

        }

    }

}, {


});

})();
