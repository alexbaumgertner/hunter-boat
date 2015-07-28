/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('form', {

    onSetMod : {

        'js' : function() {

            this.bindTo('submit', function (e) {
                this.send(e);
            });

            this.messages = this.params.messages;
        }

    },

    send: function (e) {
        e.preventDefault();

        var _this = this;

        var responses = ['ok', 'error'];

        _this.showResponse(responses[(Math.floor(Math.random() * responses.length))]);

/*        $.post(this.domElem.attr('action'), this.domElem.serialize(), function(response){
            _this.showResponse(response);
        });*/
    },

    showResponse: function (response) {

        this.elem('status-info').html(this.messages[response]);

        this.setMod(this.elem('status-info'), 'visible', 'yes');

        this.setMod(this.elem('status-info'), 'result', response);
    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();
