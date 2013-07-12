/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'input', modName: 'type', modVal: 'radio'}, {

    onSetMod : {

        'js' : function() {
            var _this = this;

            // set init state
            this.elem('input').each(function (index, elem) {
                if (elem.checked) {
                    _this.check($(elem).parent()[0]);
                }
            });

            this.domElem.bind('leftclick', function(e) {
                _this.check(e.currentTarget);
            });
        }

    },

    check: function (elem) {
        var checkedControl = $(elem).find(this.buildSelector('control'));

        this
            .delMod(this.elem('control'), 'checked')
            .setMod(checkedControl, 'checked', 'yes')
            .trigger('check', { current: elem });
    }

}, {

/*    live : function() {
    }
    */

});

})();
