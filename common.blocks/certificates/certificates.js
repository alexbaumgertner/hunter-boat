/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('certificates', {

        onSetMod: {

            'js': function () {

                this.certificates = [];
                this.currentIndex = 0;

                // styling lightbox
                this.lightBoxSettings = {
                    style: {
                        'border': '1px solid #000'
                    }
                };

                var _this = this;

                this.elem('item').each(function (index, Elem) {
                    _this.certificates.push({
                        url: $(Elem).attr('rel'),
                        current: false
                    });
                });
            }

        },

        showLightbox: function (e) {

            this.certificates[this.currentIndex].current = false;

            this.currentIndex = this.elem('item').index(e.data.domElem);

            this.certificates[this.currentIndex].current = 'current';

            BEM.blocks['lightbox'].showData(this.certificates, this.lightBoxSettings);
        }

    }, {

        live: function () {
            this.liveBindTo('item', 'click', function (e) {
                this.showLightbox(e);
            });
        }

    });

})();
