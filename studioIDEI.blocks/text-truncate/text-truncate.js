/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('text-truncate', {

    onSetMod : {

        'js' : function() {

            var text = this.domElem.text();

            if (text.length > this.params.letterLength) {

                this.domElem.html(text.substring(0, this.params.letterLength) + "&hellip;" );
            }
        }

    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();
