/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ block: 'input', modName: 'validate', modVal: 'yes'}, {

        onSetMod: {

            'js': function () {
                var _this = this;

                /* RexExp patterns */
                this.validatePatterns = {

                    'email': /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    'string': /.+/
                };

                this.currentPattern = this.validatePatterns[this.params.pattern];
                this.minLength = this.params.minLength;

                setTimeout(
                    function () {
                        _this.validate(_this.domElem.val())
                    },
                    0 );

                // event 'input' is html5 event http://www.w3.org/TR/2012/WD-html5-20121025/single-page.html#event-input-input
                // this -- is block
                this.bindTo('keyup, change, input', function (e) {
                    this.validate(this.domElem.val());
                });
            },

            completed: function (modName, modVal, oldModVal) {
                this.trigger('completed', modVal);
            }

        },



        validate: function (val) {

            var isCompleted = this.currentPattern.test(val);

            /* check min length */
            this.minLength && ( val.length < this.minLength && (isCompleted = false) );

            if (isCompleted) {
                this.setMod('completed', 'yes');

            } else {
                this.setMod('completed', 'no');
            }
        }

    }, {

        /*    live : function() {
         *//* ... *//*
         }*/

    });

})();
