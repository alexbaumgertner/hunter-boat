/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ block: 'header', modName: 'page', modVal: 'index'}, {

        onSetMod: {

            'js': function () {
                this.logoImagesLength = 4; // from css sprite
                this.setCurrentImage();
            }

        },

        setCurrentImage: function () {
            if (!localStorage) {
                return;
            }

            var currentImage = parseInt(localStorage.getItem('header-page-index'));

            if (!currentImage || currentImage > this.logoImagesLength) {
                currentImage = 1;
            }

            this.setMod('image', currentImage);

            currentImage = 1 + currentImage;

            localStorage.setItem('header-page-index', currentImage);
        }

    }, {

        /*    live : function() {
         *//* ... *//*
         }*/

    });

})();
