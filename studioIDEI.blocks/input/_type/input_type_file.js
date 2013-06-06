/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ block: 'input', modName: 'type', modVal: 'file'}, {

        onSetMod: {

            'js': function () {

                var _this = this;

                this.elem('input').on('change', function () {
                    _this.showFileName();
                });

                this.domElem.hover(
                    function () {
                        _this.setMod('hovered', 'yes');
                    },
                    function () {
                        _this.delMod('hovered');
                        _this.delMod('focused');
                    });

                this.domElem.mousedown(function () {
                    _this.setMod('focused', 'yes');
                });

                this.domElem.mouseup(function () {
                    _this.delMod('focused');
                });

            }

        },

        showFileName: function () {

            var fileType = this.elem('input').val().split('.').slice(-1).join(''); // last .TEXT

            this.elem('file-title').text(this.elem('input').val().split(/[\\\/]+/).slice(-1)); // last behind \ or / text

            this.setMod(this.elem('file-title'), 'extension', fileType);

            this.setMod(this.elem('file-title'), 'visibility', 'visible');
        }

    }, {

        /*    live : function() {

         }*/

    });

})();
