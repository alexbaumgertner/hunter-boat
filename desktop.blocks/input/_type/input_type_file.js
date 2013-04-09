/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'input', modName: 'type', modVal: 'file'}, {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    },

    showFileName: function () {

        var fileType = this.elem('input').val().split('.').slice(-1).join(''); // last .TEXT

        this.elem('file-title').text(this.elem('input').val().split(/[\\\/]+/).slice(-1)); // last behind \ or / text

        this.setMod(this.elem('file-title'), 'extension', fileType);

        this.setMod(this.elem('file-title'), 'visibility', 'visible');
    }

}, {

    live : function() {
        this.liveBindTo('input', 'change', function () {
            this.showFileName();
        });
    }

});

})();
