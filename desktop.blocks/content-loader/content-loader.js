/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('content-loader', {

        onSetMod: {

            'js': function () {
                /* ... */
            },

            'state': {

                'processing': function () {
                    this.showLoader();
                },

                'done': function () {
                    this.hideLoader();
                }
            }

        },

        
        /*  */

        showLoader: function () {
            this.domElem.show();
            var initAngle = 0; // deg
            var step = -2; // deg
            this.rotateLoader(initAngle, step);
        },


        hideLoader: function () {
            this.domElem.hide();
            this.showLoader.timeout && clearTimeout(this.showLoader.timeout);

            // clear style
            this.elem('icon').css({
                '-webkit-transform': '',
                '-moz-transform': '',
                '-ms-transform': '',
                '-o-transform': '',
                'transform': ''
            });
        },



        /**
         * Loop rotation 'loader' elem
         * @param angle
         * @param step
         */
        rotateLoader: function (angle, step) {
            var _this = this;

            this.showLoader.timeout = setTimeout(function () {
                // set css style
                _this.elem('icon').css({
                    '-webkit-transform': 'rotateZ(' + angle + 'deg)',
                    '-moz-transform': 'rotateZ(' + angle + 'deg)',
                    '-ms-transform': 'rotateZ(' + angle + 'deg)',
                    '-o-transform': 'rotateZ(' + angle + 'deg)',
                    'transform': 'rotateZ(' + angle + 'deg)'
                }).promise()// after css applied
                    .done(function () {
                        // fire next step css style setter
                        _this.rotateLoader(angle + step, step);
                    });
            }, 0);
        }

    }, {

/*        live: function () {
            *//* init by invoker *//*
        }*/

    });

})();
