/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('select', {

        onSetMod: {

            'js': function () {
                /* ... */
            }

        },

        onElemSetMod: {

            'custom-options': {

                'visible': function (elem, modName, modVal, oldModVal) {

                    if (modVal === 'yes') {
                        this.setMod(this.elem('custom-control'), 'active', 'yes');

                    } else {
                        this.delMod(this.elem('custom-control'), 'active');
                    }
                }
            }

        },

        selectOption: function (e) {
            var optionIndex = this.elem('custom-option').index(e.data.domElem);
            var optionsDomElems = this.elem('option');

            optionsDomElems.eq(optionIndex).prop('selected', 'selected');

            this.elem('title').html(e.data.domElem.text());
            this.setMod(this.elem('title'), 'changed', 'yes');
        }

    }, {

        live: function () {
            this.liveBindTo('custom-option', 'leftclick', function (e) {
                this.selectOption(e);
            });

            this.liveBindTo('custom-control', 'leftclick', function () {
                this.toggleMod(this.elem('custom-options'), 'visible', 'yes');
            });
        }

    });

})();
