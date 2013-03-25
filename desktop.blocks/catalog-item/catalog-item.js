/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('catalog-item', {

    onSetMod : {

        'js' : function() {
            /* ... */
            var _this = this;

            this.elem('info-menu-item').on('click', function () {
                if (_this.getMod($(this), 'state') === 'current') return;

                _this.setMod($(this), 'state', 'current');
            });
        }

    },

    onElemSetMod: {
        'info-menu-item': {
            state: {
                current: function (elem, modName, modVal, oldModVal) {
                    var current = this.elem('info-menu-item', 'state', 'current');

                    this.delMod(current, 'state');

                    this._setSection(this.elemParams(elem).section);
                }
            }
        },

        'info-content-item': {
            state: {
                current: function (elem, modName, modVal, oldModVal) {
                    var current = this.elem('info-content-item', 'state', 'current');
                    this.delMod(current, 'state');
                }
            }
        }
    },

    _setSection: function (section) {
        var curElem = this.elem('info-content-item', 'section', section);

        this.setMod(curElem, 'state', 'current');
    }

}, {
/*
    live : function() {
        *//* ... *//*
    }*/

});

})();
