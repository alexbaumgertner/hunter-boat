/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('studio-idei', {

    onSetMod : {

        'js' : function() {
            this.logoImagesLength = 8; // from css sprite
            this.setCurrentImage();
        }

    },

    setCurrentImage: function() {
        if (window.localStorage) {

            var currentImage = parseInt(localStorage.getItem('studio-idei-logo'));

            if (!currentImage || currentImage > this.logoImagesLength) {
                currentImage = 1;
            }

            this.setMod(this.elem('logo'), 'image', currentImage);

            currentImage = 1 + currentImage;

            localStorage.setItem('studio-idei-logo', currentImage);
        }
    }

}, {


});

})();
