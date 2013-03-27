/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('faq', {

    onSetMod : {

        'js' : function() {
            var _this = this;

            this.elem('item').on('click', function () {
                _this.toggleMod($(this), 'state', 'opened', 'closed');
            });
        }

    }

}, {
/*
    live : function() {
        *//* ... *//*
    }*/

});

})();
