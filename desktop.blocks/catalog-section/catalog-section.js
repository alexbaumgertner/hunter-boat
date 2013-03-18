/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('catalog-section', {

    onSetMod : {

        'js' : function() {
            this.elem('header-line').width(this.elem('header').width() - this.elem('header-inner').outerWidth(true));
        }

    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();
