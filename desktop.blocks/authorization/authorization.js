/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('authorization', {

    onSetMod : {

        'js' : function() {
            /* ... */
        },

        'state': {

            'recovery': function () {
                console.log('recovery');
            }
        }

    }

}, {

    live : function() {
        this.liveBindTo('password-recovery', 'leftclick', function () {
            this.setMod('state', 'recovery');
        });
    }

});

})();
