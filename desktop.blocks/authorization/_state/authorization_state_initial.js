/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'authorization', modName: 'state', modVal: 'initial'}, {

    onSetMod : {

        'js' : function() {
            this.submitButton = this.findBlockInside({ block: 'button', modName: 'type', modVal: 'submit' });
        }

    },

    setSubmitButtonState: function (enable) {

        if (enable === 'yes') {
            this.submitButton.setMod('state', 'enabled');

        } else {
            this.submitButton.setMod('state', 'disabled');
        }

    }

}, {

    live : function() {
                // set current state
        this.liveInitOnBlockInsideEvent('completed', 'signin', function (event, data) {
            this.setSubmitButtonState(data);
        });
        this.liveInitOnBlockInsideEvent('completed', 'signup', function (event, data) {
            this.setSubmitButtonState(data);
        });
        this.liveInitOnBlockInsideEvent('completed', 'input', function (event, data) {
            this.setSubmitButtonState(data);
        });

    }

});

})();
