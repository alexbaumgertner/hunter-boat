/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('faq', {

        onSetMod: {

            js: function () {
                var _this = this;

                // bind to left click
                this.elem('item').bind('leftclick', function (e) {
                    _this.toggleMod($(e.currentTarget), 'state', 'opened', 'closed');
                });
            }

        },

        onElemSetMod: {

            'item': {

                'state': function (elem, modName, modVal, oldModVal) {
                    var answer =  elem.children(this.buildSelector('answer'));

                    answer.animate({
                        "height": "toggle",
                        "opacity": "toggle"
                    });

                }
            }
        }

    }, {
/*        live: function () {
        }*/

    });

})();
