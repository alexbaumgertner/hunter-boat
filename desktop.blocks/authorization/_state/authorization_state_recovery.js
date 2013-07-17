/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'authorization', modName: 'state', modVal: 'recovery'}, {

    onSetMod : {

        'js' : function() {
            var _this = this;

            this.recoveryInput = this.findBlockInside('authorization-info').findBlockInside('input');
            this.submitButton = this.findBlockInside({ block: 'button', modName: 'type', modVal: 'submit' });

            this.setSubmitButtonState(this.recoveryInput.domElem.val());

            this.recoveryInput.domElem.on('keyup change', function () {
                _this.setSubmitButtonState($(this).val())
            });
        }
    },



    setSubmitButtonState: function (email) {
        var simpleEmailRE = /^\S+@\S+$/;

        if (simpleEmailRE.test(email)) {
            this.submitButton.setMod('state', 'enabled');

        } else {
            this.submitButton.setMod('state', 'disabled');
        }
    }

}, {



});

})();
