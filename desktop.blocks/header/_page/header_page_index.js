/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ block: 'header', modName: 'page', modVal: 'index' }, {

        onSetMod: {

            'js': function () {
                this.logoImagesLength = this.params.logoImagesLength;
                this.setCurrentImage();
            }

        },

        setCurrentImage: function () {
            this.setMod('image', this.generateImageIndex());
        },

        generateImageIndex: function () {

            var index = Math.floor(Math.random() * this.logoImagesLength) + 1;

            /* Корректировка значение (начало) */
            // Если поддерживается сохранение, то..
            if (window.localStorage) {
                // ..получить прердыдущее значение.
                var prevIndex = parseInt(localStorage.getItem('header-page-index'));

                // Если текущее равно предыдущему, изменить текущее значение:
                if (index == prevIndex) {
                    // если не последнее возможное, то на единицу вперед или
                    if (index < this.logoImagesLength ) {
                        index = index + 1;
                    // на единицу назад
                    } else {
                        index = index - 1;
                    }
                }
                // сохранить текущее значение
                localStorage.setItem('header-page-index', index);
            }
             /* Корректировка значение (конец) */

            return index;
        }

    }, {

        /*    live : function() {
         *//* ... *//*
         }*/

    });

})();
