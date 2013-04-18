/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'map', modName: 'provider', modVal: 'yandex'}, {

    onSetMod : {

        'js' : function() {
            this.loadMapsApi();
        }

    },


    // загрузчик API
        loadMapsApi: function() {
            var _this = this;

            if (!window.ymaps) {
                var apiScript = document.createElement('script'),
                    apiCallback = 'ymapsloaded';

                window[apiCallback] = function () {
                    _this.onAPILoaded();
                }

                apiScript.src = 'http://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU&&onload=' + apiCallback;

                document.getElementsByTagName('head')[0].appendChild(apiScript);

            } else {

                this.onAPILoaded();
            }
        },

    onAPILoaded: function () {
        this.initMap();
    },

    /**
     * http://api.yandex.ru/maps/doc/jsapi/2.x/quick-start/tasks/quick-start.xml
     */
    initMap: function () {

        this.ymap = new ymaps.Map(this.elem('map')[0], {
            center: this.params.center,
            zoom  : this.params.zoom
        });


        // При создании метки указываем ее свойства:  текст для отображения в иконке и содержимое балуна,
        // который откроется при нажатии на эту метку
        this.placemark = new ymaps.Placemark(this.params.placemark.center, {
            // Свойства
            balloonContentBody  : this.params.placemark.content,
        }, {
            // Опции
            preset: 'twirl#blueStretchyIcon' // иконка растягивается под контент
        });

        // Добавляем метку на карту
        this.ymap.geoObjects.add(this.placemark);


    }



}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();
