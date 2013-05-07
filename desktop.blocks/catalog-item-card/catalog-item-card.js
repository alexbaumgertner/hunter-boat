/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('catalog-item-card', {

    onSetMod : {

        'js' : function() {
            this.photoBigColors = this.elemParams('photo-big-img');
        }

    },

    onElemSetMod: {

        'photos-list-item': {
            'state': {
                'current': function (elem, modName, modVal, oldModVal) {
                    var prev = this.elem('photos-list-item', 'state', 'current');
                    this.delMod(prev, 'state');

                    // set current big photo
                    this.elem('photo-big-img').attr('src', elem.attr('rel'));
                }
            }
        }
    },


    selectColor: function (color) {
        this.elem('photo-big-img').attr('src', this.photoBigColors[color]);
    }

}, {

    live : function() {

        this.liveBindTo('photos-list-item', 'click', function (e) {
            this.setMod(e.data.domElem, 'state', 'current');
        });

        this.liveBindTo('color-selector', 'click', function (e) {
            this.selectColor(this.getMod(e.data.domElem, 'color'));
        });
    }

});

})();
