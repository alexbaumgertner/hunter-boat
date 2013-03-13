/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('price', {

    onSetMod : {

        'js' : function() {

            var thinSpace = '&thinsp;';
            var every3DigitRE = /(\d)(?=(\d{3})+(?!\d))/g;
            var formattedValue = this.elem('value').html().replace(every3DigitRE, '$1' + thinSpace);

            this.elem('value').html(formattedValue);
        }

    }

}, {

/*    live : function() {

    }
*/

});

})();
