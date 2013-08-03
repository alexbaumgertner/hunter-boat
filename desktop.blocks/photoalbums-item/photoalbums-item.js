/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('photoalbums-item', {

        onSetMod: {

            'js': function () {
                var _this = this;

                this.loader = this.findBlockInside('content-loader');

                /* show init photo loading */
                this.loader.setMod('state', 'processing');

                /* bind to photo choose */
                this.elem('photo').click(function (e) {
                    _this.setCurrFullPhoto(e);
                });

                /* bind to photo loaded */
                this.elem('current').load(function () {
                    _this.loader.setMod('state', 'done');
                });

            }

        },

        onElemSetMod: {

            'photo': {

                'state': {

                    'current': function (elem, modName, modVal, oldModVal) {

                        if (oldModVal == 'disabled') {
                            return false;
                        }

                        var prev = this.elem('photo', 'state', 'current');

                        this.delMod(prev, 'state');

                        this.loader.setMod('state', 'processing');

                        this.elem('current').attr('src', elem.attr('rel'));

                    }
                }
            }
        },

        setCurrFullPhoto: function (e) {
            this.setMod($(e.currentTarget), 'state', 'current');
        }

    }, {

/*        live: function () {
            this.liveBindTo('photo', 'click', function (e) {
                this.setCurrFullPhoto(e);
            });
        }*/

    });

})();
