/** @requires BEM */
/** @requires BEM.DOM */


(function(undefined) {

BEM.DOM.decl('i-tabbed-pane', {

    onSetMod : {

        'js' : function () {
            var _this = this;

            this.on('current-tab', function(event, data) {
                 // open tab equal current 'menu-item' elem index
                // findElem instead elem for loaded content
                _this._setCurrentTab(_this.findElem('menu-item').index(data.current));
            });

            this.elem('menu-item').on('leftclick', function (e) {
                _this._onMenuItemClick($(e.currentTarget));
            });

        }

    },


    onElemSetMod: {

        'menu-item': {

            state: {

                current: function (elem, modName, modVal, oldModVal) {

                    if (oldModVal == 'disabled') return false;

                    var prev = this.findElem('menu-item', 'state', 'current');

                    this
                        .delMod(prev, 'state')
                        .trigger('current-tab', {
                            prev   : prev,
                            current: elem
                        });

                }
            }

        },

        'tab': {

            state: {

                current: function () {
                    // del mode current from prev elem
                    this.delMod(this.elem('tab', 'state', 'current'), 'state');
                }
            }
        }

    },


    _onMenuItemClick: function ($elem) {
        this.setMod($elem, 'state', 'current');
    },


    _setCurrentTab: function (index) {
        this.setMod($(this.findElem('tab')[index]), 'state', 'current');
    }

}, {
/*
    live : function() {

    }*/

});

})();
