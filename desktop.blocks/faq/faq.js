/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('faq', {

        onElemSetMod: {

            'item': {

                'state': {
                    'opened': function (elem) {
                        elem.find(this.buildSelector('answer')).slideDown();
                    },

                    'closed': function (elem) {
                        elem.find(this.buildSelector('answer')).slideUp();
                    }
                }

            }
        }

    }, {
        live: function () {
            this.liveBindTo('item', 'leftclick', function (e) {
                this.toggleMod(e.data.domElem, 'state', 'opened', 'closed');
            });
        }

    });

})();
