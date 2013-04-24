/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

BEM.DOM.decl('catalog-page', {

        onSetMod: {

            'js': function () {

            }

        },

        onElemSetMod: {

            'menu-item': {

                'state': {

                    'current': function (elem, modName, modVal, oldModVal) {

                        if (oldModVal == 'disabled') {
                            return false;
                        }

                        var prev = this.elem('menu-item', 'state', 'current');
                        this.delMod(prev, 'state').trigger('current', {
                            prev: prev,
                            current: elem
                        });
                    }
                }
            }
        },

        onItemSelectorClick: function (e) {
            var item = this._getItemByEvent(e);
            this.setMod(item, 'state', 'current');
        },


        _getItemByEvent: function (e) {
            return e.data.domElem.closest(this.buildSelector('menu-item'));
        }

    },

    {

        live : function() {
            this.liveBindTo('menu-item', 'leftclick', function(e) {
                this.onItemSelectorClick(e);
            });
        }

    });

})();
