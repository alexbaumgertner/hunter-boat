/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

BEM.DOM.decl('catalog-page', {

        onSetMod: {

            'js': function () {
                console.dir(this);
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

            if (this.hasMod(item, 'sortProperty')) {
                this.onItemPriceSelectorClick(item);
            }

        },


        onItemPriceSelectorClick: function (item) {

            if (!this.hasMod(item, 'state', 'current'))  return false;

            this.toggleMod(item, 'order', 'desc', 'asc');

            console.log('todo sorting');

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
