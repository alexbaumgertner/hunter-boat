/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('call-request', {

    onSetMod : {

        'js' : function() {

            var _this = this;

            this.elem('closer').click(function () {
                _this.setHidden();
            });
        }

    },

    setVisible: function (e) {
        this.alignForm(e);
        this.setMod(this.elem('form'), 'visibility', 'visible');
    },

    setHidden: function () {
        this.setMod(this.elem('form'), 'visibility', 'hidden');
    },


    alignForm: function (e) {
        this.elem('form').css({
            top: e.pageY - (this.elem('form').height() / 2),
            left: e.pageX - (this.elem('form').width() / 2)
        });
    }

}, {

    live : function() {
         this.liveBindTo('opener', 'click', function (e) {
             this.setVisible(e);
         });
    }

});

})();
