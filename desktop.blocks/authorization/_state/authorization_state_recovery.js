/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'authorization', modName: 'state', modVal: 'recovery'}, {

    onSetMod : {

        'js' : function() {
            var _this = this;

            this.submitButton = this.findBlockInside({ block: 'button', modName: 'type', modVal: 'submit' });
            this.recoveryInput = this.findBlockInside('authorization-info').findBlockInside('input');

            this.setSubmitButtonState(this.recoveryInput.domElem.val());

            this.recoveryInput.domElem.on('keyup change input', function () {
                _this.setSubmitButtonState($(this).val())
            });
        }
    },



    setSubmitButtonState: function (enable) {
        console.log(enable);

        if (enable === 'yes') {
            this.submitButton.setMod('state', 'enabled');

        } else {
            this.submitButton.setMod('state', 'disabled');
        }

    }

}, {
    live: function () {
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
