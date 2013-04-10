/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('radio-switcher', {

    onSetMod : {

        'js' : function() {
           console.log(this.findBlocksInside('tabbed-pane'));
        }

    }

}, {
/*

    live : function() {
        */
/* ... *//*

    }
*/

});

})();
