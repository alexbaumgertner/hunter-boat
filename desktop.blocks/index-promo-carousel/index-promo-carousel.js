/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('index-promo-carousel', {

        onSetMod: {

            'js': function () {
                /* ... */

                var _this = this;

                this.domElem.hide();

                this.bindTo('menu-item', 'leftclick', function (e) {
                    this.setCarouselItem(this.elem('menu-item').index(e.data.domElem));
                });

                setTimeout(function () {
                    _this.startCarousel()
                }, 2000); // 2 sec

            }
        },

        onElemSetMod: {

            'menu-item': {

                'state': {
                    current: function (elem, modName, modVal, oldModVal) {

                        if (oldModVal == 'disabled') {
                            return false;
                        }

                        var prev = this.findElem('menu-item', 'state', 'current');

                        this.delMod(prev, 'state');

                    }
                }
            }
        },



        startCarousel: function () {
            var _this = this;
            this.domElem.fadeIn(800, function () {
                _this.loopCarousel()
            });
        },


        loopCarousel: function () {
            this.currItemId = 0;

            var _this = this;

            setInterval(function () {
                _this.currItemId = _this.currItemId + 1;
                _this.setCarouselItem(_this.currItemId);
            }, 4000);

        },

        setCarouselItem: function (id) {

            var slides = this.params['slides'];


            if (id >= slides.length) {
                id = 0;
            }

            this.currItemId = id;

            this.setMod($(this.elem('menu-item').get(id)), 'state', 'current');

            var currSlide = slides[id];

            this.elem('title').children('.b-link').html(currSlide['title']);
            this.elem('text-inner').html(currSlide['text']);
            this.elem('sub-text').html(currSlide['sub-text']);

            this.elem('price').find('.price__value').html(currSlide['start-price']);

            this.elem('photo').attr('src', currSlide['url']);

        }

    }, {

        /*    live : function() {
         *//* ... *//*
         }*/

    });

})();
