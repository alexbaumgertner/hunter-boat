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

        var positionX = e.pageX - (this.elem('form').width() / 2);
        var positionY = e.pageY - (this.elem('form').height() / 2);

        // limit min margin at screen
        var minMargin = 10; // px

        positionX < minMargin && (positionX = minMargin);
        positionY < minMargin && (positionY = minMargin);

        this.elem('form').css({
            left: positionX,
            top: positionY
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
