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

        // event init element
        var targetOffset = $(e.target).offset();
        // left or right side of screen
        var targetElemAtCenterPagePosition = $(window).width() / 2 > targetOffset.left ? 'left' : 'right';


        // get the X-coordinate
        var positionX;
        if (targetElemAtCenterPagePosition === 'left') {
            // element in left side
            positionX = targetOffset.left;
        } else {
            // element in right side
            positionX = targetOffset.left - this.elem('form').width();
        }

        // get the Y-coordinate
        var positionY = targetOffset.top - this.elem('form').height() / 2;
        // limit min margin at screen
        var minMargin = 10; // px
        positionY < minMargin && (positionY = minMargin);


        // set layout position (at window)
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
