/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('faq-item', {

    onSetMod : {

        'js' : function() {
            var _this = this;

            this.elem('answer').each(function(index, element) {
                $(element).data('height', $(element).height());
            });

            this.bindTo('question', 'leftclick', function (e) {
                _this.toggleMod('opened', 'yes', 'no', _this.hasMod('opened', 'no'));
            });


            if (this.hasMod('opened', 'no')) {
                this.elem('answer')
                    .hide()
                    .css({
                        'height': 0,
                        'opacity': 0
                    });
            }

        },

        'opened': {

            'yes': function () {

                this.elem('answer')
                    .show()
                    .animate({
                        'height': this.elem('answer').data('height'),
                        'opacity': 1
                });
            },

            'no': function () {
                this.elem('answer').animate({
                    'height': 0,
                    'opacity': 0
                });
            }
        }

    }

}, {

/*    live : function() {

    }*/

});

})();
