/** @requires BEM */
/** @requires BEM.DOM */


(function(undefined) {

    var _this;

BEM.DOM.decl({ name: 'tabbed-pane', baseBlock: 'i-tabbed-pane'  }, {

    onSetMod : {

        'js' : function () {
            this.__base();

            _this = this;
            var radioInput = _this.findBlockInside({ block: 'input', modName: 'type', modVal: 'radio' });

            radioInput.elem('input').each(function (index, elem) {
                if (elem.checked) {

                    _this._setCurrentTab(radioInput.elem('input').index(elem));

                }
            });


        }

    }

}, {
/*
    live : function() {
        this.__base();
    }*/

});

})();
