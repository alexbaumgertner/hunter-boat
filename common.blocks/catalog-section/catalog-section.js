/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('catalog-section', {

    onSetMod : {

        'js' : function() {
            var headerLineWidth = Math.floor(this.elem('header').width() - this.elem('header-inner').outerWidth(true));

            this.elem('header-line')
                .width(headerLineWidth);
        }

    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();
