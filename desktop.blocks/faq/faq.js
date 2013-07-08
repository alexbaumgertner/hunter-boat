/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('faq', {

        onSetMod: {

            js: function () {
                var _this = this;

                // set init state
                this.elem('item').each(function(index, elem) {
                    _this.setAnswerVisibility($(elem), _this.getMod($(elem), 'state'));
                });

                // bind to left click
                this.elem('item').bind('leftclick', function (e) {
                    _this.toggleMod($(e.currentTarget), 'state', 'opened', 'closed');
                });
            }

        },

        onElemSetMod: {

            'item': {

                'state': function (elem, modName, modVal, oldModVal) {
                    this.setAnswerVisibility(elem, modVal);
                }

            }
        },

        setAnswerVisibility: function (elem, state) {
            var answer =  elem.children(this.buildSelector('answer'));

            if (state === 'opened') {
                answer.animate({ opacity: 1, height: answer.data('initHeight') });
            } else {
                answer.data('initHeight') || answer.data('initHeight', answer.height());
                answer.animate({ opacity: 0, height: 0 });
            }
        }

    }, {
/*        live: function () {
        }*/

    });

})();
