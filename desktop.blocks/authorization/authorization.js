/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('authorization', {

    onSetMod : {

        'js' : function() {

            var currentState = this.getMod('state');

            if (currentState) {
                this.setMod('state', currentState);
            } else {
                this.setMod('state', 'initial');
            }

            this.__self.liveBinds();
        },

        'state': function (modName, modVal, oldModVal) {

            this.elem('info').hide();

            if (modVal !== 'initial') {
                this.elem('entrance').hide();
                this.elem(modVal).show();

            } else {
                this.elem('entrance').show();
            }

        }

    }

}, {

    liveBinds: function () {

        this.liveBindTo('password-recovery', 'leftclick', function () {
            this.setMod('state', 'recovery');
        });

        this.liveBindTo('initial', 'leftclick', function () {
            this.setMod('state', 'initial');
        });
    }

});

})();
