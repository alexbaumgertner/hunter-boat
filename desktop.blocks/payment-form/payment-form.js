/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('payment-form', {

        onSetMod: {

            'js': function () {

            }

        },

        /**
         * Переключение текущего поля ввода при заполнении предыдущего
         * @param e
         */
        switchField: function (e) {

            var field = e.data.domElem,
                last_length = field.data('last_length') || 0,
                cur_length = field.val().length,
                max_length = parseInt(field.attr('maxlength')) || 3,
                selection = this.__self.getSelectionRange(field[0]),
                lastNumberInputIndex = 3;

                    /*          console.log('cur_length: ' + cur_length);
                                console.log('last_length: ' + last_length);
                                console.log('max_length: ' + max_length);
                                console.log('selection: ' + selection);
                                console.log('selection.start: ' + selection.start);
                    */

            if (cur_length > last_length &&
                cur_length == max_length &&
                selection &&
                selection.start == cur_length) {

                // need to switch field
                if (field.index() < lastNumberInputIndex) {
                    // switch to next number-input
                    field.next().focus();
                } else {
                    // switch to valid-period-select-day-month
                    this.elem('valid-period-select-day-month').focus();
                }
            }
            field.data('last_length', cur_length);

        },


        /**
         * Проверка раскладки клавиатуры
         * @param e event
         */
        checkKeyboardLayout: function (e) {
            var rusLayoutREGX = /([а-яА-Я]+)/;
            var inputElemVal  = e.data.domElem.val();

            if (inputElemVal.match(rusLayoutREGX)) {
                this.elem('owner-error').html(this.params['keyboardLayoutError']);
                this.setMod(this.elem('owner-error'), 'visible', 'yes');

            } else {
                this.delMod(this.elem('owner-error'), 'visible');
            }
        }

    }, {

        live: function () {

            this.liveBindTo('number-input', 'keyup change', function (e) {
                this.switchField(e);
            });

            this.liveBindTo('owner-input', 'keyup change', function (e) {
                this.checkKeyboardLayout(e);
            });



        },

        /**
         * @url: http://chikuyonok.ru/2010/07/simple-things/
         * @param elem jQuery
         * @returns {*}
         */
        getSelectionRange: function (elem) {
            if ('selectionStart' in elem) { // W3C's DOM
                return {
                    start: elem.selectionStart,
                    end: elem.selectionEnd
                };
            } else if (document.selection) { // IE
                elem.focus();

                var range = document.selection.createRange(), content = elem.value;

                if (range === null) {
                    return {
                        start: 0,
                        end: content.length
                    };
                }

                var re = elem.createTextRange();
                var rc = re.duplicate();
                re.moveToBookmark(range.getBookmark());
                rc.setEndPoint('EndToStart', re);

                return {
                    start: rc.text.length,
                    end: rc.text.length + range.text.length
                };
            } else {
                return null;
            }
        }


    });

})();
