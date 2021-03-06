/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('call-request', {

        onSetMod: {

            'js': function () {

                var _this = this;
                this.statusHiddenDelay = 4000; // ms

                this.textStatuses = {
                    'ok': 'Ваша заявка принята. <br> Спасибо!',
                    'error': 'Ошибка запроса. <br> Попробуйте пожалуйста позже'
                };

                /* find control elems */
                this.reqiuredField = this.findBlockInside({ block: 'input', modName: 'name', modVal: 'phone' });
                this.submitButton = this.findBlockInside({ block: 'button', modName: 'type', modVal: 'submit' });

                this.reqiuredField.on('completed', function(event, data) {
                    _this.reqiuredField.domElem.removeClass('error');
                });

                this.elem('closer').click(function () {
                    _this.setHidden();
                });
            },

            'status': function (modName, modVal, oldModVal) {
                this.elem('status').html(this.textStatuses[modVal]);
            }

        },

        setVisible: function (e) {
            this.alignForm(e);
            this.setMod(this.elem('form'), 'visibility', 'visible');
        },

        setHidden: function () {

            this.hiddenTimeout && clearTimeout(this.hiddenTimeout);

            this
                .setMod(this.elem('form'), 'visibility', 'hidden')
                .delMod('status');
        },

        sendRequest: function () {

            if (!this.validate()) {
                this.reqiuredField.domElem.addClass('error');

            } else {

                this.reqiuredField.domElem.removeClass('error');

                var button = this.findBlockInside('button');

                var data = this.elem('form').serialize();
                var action = this.elem('form').attr('action');
                var _this = this;

                $.post(action, data, function (data) {
                    _this.showStatus(data);
                });
            }
        },

        showStatus: function (data) {
            this.setMod('status', data);

            var _this = this;
            this.hiddenTimeout = setTimeout(function () {
                _this.setHidden();

            }, _this.statusHiddenDelay)
        },

        alignForm: function (e) {

            // event init element
            var targetOffset = $(e.target).offset();
            // left or right side of screen
            var targetElemAtCenterPagePosition = $(window).width() / 2 > targetOffset.left ? 'left' : 'right';

            var minMargin = 10; // px
            var positionX;
            var positionY;

            // get the X-coordinate
            if (targetElemAtCenterPagePosition === 'left') {
                // element in left side
                positionX = targetOffset.left;
            } else {
                // element in right side
                positionX = targetOffset.left - this.elem('form').width();
            }

            // get the Y-coordinate
            positionY = targetOffset.top - this.elem('form').height() / 2;
            // limit min margin at screen

            positionY < minMargin && (positionY = minMargin);


            // set layout position (at window)
            this.elem('form').css({
                left: positionX,
                top: positionY
            });
        },

        toggleSendButton: function (data) {
            if (data == 'yes') {
                this.submitButton.setMod('state', 'enabled');
            } else {
                this.submitButton.setMod('state', 'disabled');
            }
        },

        validate: function () {
            return this.reqiuredField.getMod('completed') == 'yes';
        }

    }, {

        live: function () {
            this.liveBindTo('opener', 'click', function (e) {
                this.setVisible(e);
            });

            this.liveBindTo('submit', function (e) {
                e.preventDefault();
                this.sendRequest();
            });
        }

    });

})();
