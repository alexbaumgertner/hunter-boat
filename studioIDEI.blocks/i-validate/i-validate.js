/** @requires BEM */
/** @requires BEM */

/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('i-validate', {

    onSetMod : {

        'js' : function() {
            var _this = this;
            this.requiredFields = this.params.required.split(', ');
            this.isHandlersBinded = false;
            setTimeout(function () { _this.checkCompleted(); }, 0)
        },

        completed: function (modName, modVal, oldModVal) {
            this.trigger('completed', modVal);
        }

    },

    setSubmitButtonState: function (values) {
        var isCompleted = this.validateValues(values);

        if (isCompleted) {
            this.setMod('completed', 'yes');

        } else {
            this.setMod('completed', 'no');
        }

    },

    checkCompleted: function () {
        var _this = this;
        var currentValues = {};

        $.each(this.requiredFields, function (index, value) {

            var inputElem = _this.elem(value).children('input');
            // register required inputs changes
            if (!_this.isHandlersBinded) {
                inputElem.on('keyup change input', function () {
                    _this.checkCompleted();
                });
            }

            // get current value
            currentValues[value] = inputElem.val();
        });

        this.setSubmitButtonState(currentValues);
        this.isHandlersBinded = true;
    },

    validateValues: function (values) {
        var result = true;
        $.each(this.requiredFields, function (index, value) {

            if (values[value].length == 0) {
                result = false;
            }

        });
        return result;
    }

}, {


});

})();
