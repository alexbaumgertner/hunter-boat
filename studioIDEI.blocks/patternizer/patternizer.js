/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('patternizer', {

    onSetMod : {

        'js' : function() {

            if (this.domElem.css('text-transform') === "uppercase") {
                this.domElem.html(this.domElem.html().toUpperCase());
            }

            this.domElem.attr('data-pattern', this.params['data-pattern']);

            this.domElem.patternizer();
        }

    }

}, {



});

})();
