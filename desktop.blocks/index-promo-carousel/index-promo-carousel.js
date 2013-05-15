/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('index-promo-carousel', {

        onSetMod: {

            'js': function () {
                /* ... */

                this.currItemId = this.elem('menu-item').index(this.elem('menu-item', 'state', 'current')); //
                this.delayInitTime = 2000; // 2 sec
                this.durationInitTime = 800; // 0.8 sec of fadeIn
                this.delayLoopTime = 4000; // 4 sec

                var _this = this;

                this.domElem.hide();

                this.bindTo('menu-item', 'leftclick', function (e) {
                    this.setCarouselItem(this.elem('menu-item').index(e.data.domElem));
                });

                setTimeout(function () {
                    _this.startCarousel()
                }, this.delayInitTime);

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
            var pageHeader = this.findBlockOutside('header');
            pageHeader.setMod(pageHeader.elem('index-title-word'), 'visibility', 'visible');

            this.domElem.fadeIn(this.durationInitTime, function () {
                _this.loopCarousel()
            });
        },


        /**
         * show infinity loop of items, modify this.currItemId
         */
        loopCarousel: function () {
            var _this = this;

            // set next item after this.delayLoopTime
            var timeOut = setTimeout(function () {
                _this.currItemId = _this.currItemId + 1;
                // set curr item
                _this.setCarouselItem(_this.currItemId, function () {
                    clearTimeout(timeOut);
                    _this.loopCarousel();
                });
            }, this.delayLoopTime);

        },

        /**
         *
         * @param id of slide item
         * @param callback fire when all modifiable elements done modificate
         */
        setCarouselItem: function (id, callback) {


            var _this = this;


            if (id >= this.params['slides'].length) {
                id = 0;
            }
            this.currItemId = id;

            var currSlide = this.params['slides'][id];

            this.setMod($(this.elem('menu-item').get(id)), 'state', 'current');

            // save modifiable blocks to hide/show them
            this.modifyContentElems = this.modifyContentElems ||
                this.elem('title')
                    .add(this.elem('text-inner'))
                    .add(this.elem('sub-text'))
                    .add(this.elem('price'));

            // use promise+done because fade out/in of collection of elements (callback fire every elem animation)

            // hide modifiable. blocks
            this.modifyContentElems.fadeOut('fast')
                .promise()
                .done( function () {
                        _this.elem('title').children('.b-link').html(currSlide['title']);
                        _this.elem('text-inner').html(currSlide['text']);
                        _this.elem('sub-text').html(currSlide['sub-text']);
                        _this.elem('price').find('.price__value').html(currSlide['start-price']);
                        _this.elem('photo').attr('src', currSlide['url']);

                    // show modifiable blocks
                    _this.modifyContentElems.fadeIn('slow')
                        .promise()
                        .done(function () {
                        callback && typeof callback === 'function' && callback();
                    });
            });



        }

    }, {

/*        live: function () {
TODO: live init after elem photo Img loaded
        }*/

    });

})();
