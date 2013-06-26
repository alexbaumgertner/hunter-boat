/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('authorization', {

    onSetMod : {

        'js' : function() {

            var currentState = window.location.hash.split('#')[1];

            if (currentState) {
                this.setMod('state', currentState);
            } else {
                this.setMod('state', 'initial');
            }

            this.__self.liveBinds();
        },

        'state': {

            '*': function (modName, modVal, curModVal) {

                this.elem('info').hide();

                if (modVal !== 'initial') {
                    this.elem('signin').add(this.elem('signup')).hide();
                    this.elem(modVal).show();

                } else {
                    this.elem('signin').add(this.elem('signup')).show();
                }

            }
        }

    }

}, {

    liveBinds: function () {

        this.liveBindTo('password-recovery', 'leftclick', function () {
            window.location.hash = 'recovery';
            this.setMod('state', 'recovery');
        });

        this.liveBindTo('initial', 'leftclick', function () {
            window.location.hash = 'initial';
            this.setMod('state', 'initial');
        });
    }

});

})();
