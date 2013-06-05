/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('lightbox', {

    onSetMod: {

        'js': function () {

            var _this = thisBlockInstance = this;

            this.showState = 'never';

            this.elem('close').on('click', function () {
                _this.hide();
            });

            this.elem('mask').on('click', function () {
                _this.hide();
            });

            this.elem('control').on('click', function(e){
                if (_this.getMod($(e.currentTarget), 'disable') === 'yes') return;

                var direction = _this.getMod($(e.currentTarget), 'direction');
                _this.switchItem(direction)
            });

            this.elem('img').load(function () {
                _this.imgOnLoad();
            });
        }

    },



    switchItem: function (direction) {

        if (direction == 'prev') {
            if (this.isFirst()) return;

            this.currentIndex = this.currentIndex - 1;

        } else if (direction == 'next') {
            if (this.isLast()) return;

            this.currentIndex = this.currentIndex + 1;

        } else if (direction == 'init') {
            // init align
            this.adjustPosition();

            this.currentIndex = this.getCurrentIndex();
        }

        this.setCurrentIndex(this.currentIndex);

        this.show();
    },


    show: function () {

        this.setMod(this.elem('mask'), 'visibility', 'visible');

        if (this.showState === 'never') {
            this.elem('close').hide();
            this.setMod(this.elem('control'), 'disable', 'yes');
            this.adjustPosition();
        }

        this.setMod('visibility', 'visible');

        this.showLoader();

        this.elem('img').attr('src', this.data[this.currentIndex].url); // have load handler, see onSetMod js
    },


    hide: function () {

        // enable window scroll
        $('body').css({ height: '', overflow: '' });

        this.setMod( 'visibility', 'hidden');
        this.setMod(this.elem('mask'), 'visibility', 'hidden');
        this.elem('img').attr('src', ''); // clear image

        this.showState = 'never';

        // in case...
        this.showLoader.interval && clearInterval(this.showLoader.interval);
    },


    isFirst: function () {
        return this.currentIndex === 0;
    },


    isLast: function () {
        return this.currentIndex === (this.data.length - 1);
    },


    /**
     *
     * @returns {number}
     */
    getCurrentIndex: function () {
        if (this.data.length === 1) return 0; // single item is this.data[0]

        for (var i = 0, length = this.data.length; i < length; i++) {
            if (this.data[i].current) return i;
        }
    },


    setCurrentIndex: function (index) {
        for (var i = 0, length = this.data.length; i < length; i++) {
            this.data[i].current = (i === index);
        }
    },


    adjustPosition: function () {
        var minTop = 100;
        var lightboxTop = $(window).scrollTop() + minTop;

        var imgWidth = this.elem('img').width();
        var imgHeight = this.elem('img').height();


        // layout positioning

        // 1) Y-position
        this.showState === 'never' && this.elem('box').css({ 'top': lightboxTop });

        // 2) X-position
        if (imgWidth > 0 && imgHeight > 0) {
            this.elem('box').css({ width: imgWidth, height: imgHeight });
        }

        // mask
        this.elem('mask').css({ height: $(document).height() });
    },


    showDirectionControls: function (action) {

        if (this.isFirst()) {
            this.setMod(this.elem('control', 'direction', 'prev'), 'disable', 'yes');

        } else {
            this.delMod(this.elem('control', 'direction', 'prev'), 'disable');
        }

        if (this.isLast()) {
            this.setMod(this.elem('control', 'direction', 'next'), 'disable', 'yes');

        } else {
            this.delMod(this.elem('control', 'direction', 'next'), 'disable');
        }

    },


    imgOnLoad: function () {
        this.showDirectionControls();
        this.adjustPosition();
        this.elem('close').show();
        this.hideLoader();
        this.showState = 'has';
    },


    showLoader: function () {
        this.elem('loader').show();
        var i = 0;
        var step = 10; // deg
        var interval = 10; // ms

        this.showLoader.interval = setInterval(function () {

            // TODO: refactor
            thisBlockInstance.elem('loader').css({
                '-webkit-transform': 'rotateZ(' + i + 'deg)',
                '-moz-transform': 'rotateZ(' + i + 'deg)',
                '-ms-transform': 'rotateZ(' + i + 'deg)',
                '-o-transform': 'rotateZ(' + i + 'deg)',
                'transform': 'rotateZ(' + i + 'deg)'
            });

            i = i + step;

        }, interval);
    },


    hideLoader: function () {
        this.elem('loader').hide();

        this.showLoader.interval && clearInterval(this.showLoader.interval);
    },

    /**
     * Styling img element
     * @param {Object} style. If not exist, then clear style
     */
    setStyle: function (style) {

        if (style) {
            this.elem('img').css(style);

        } else {
            this.elem('img').removeAttr('style');
        }
    }

}, {

    /**
     *
     * @param {Array|Object} data, must have url and state (current)
     * @param {Object} settings
     */
    showData: function (data, settings) {

        (jQuery.type(data) === 'object') && (data = [data]);

        // don't modify originally data
        thisBlockInstance.data = jQuery.extend(true, [], data);

        settings = settings || {};

        thisBlockInstance.setStyle(settings.style);
        thisBlockInstance.switchItem('init');
    }

});

})();
