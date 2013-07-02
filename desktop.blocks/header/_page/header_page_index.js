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
            this.setMod('image', Math.floor(Math.random() * this.logoImagesLength) + 1);
        }

    }, {

        /*    live : function() {
         *//* ... *//*
         }*/

    });

})();
