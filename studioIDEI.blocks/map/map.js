/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {


BEM.DOM.decl('map', {

    onSetMod : {

        'js' : function() {
            this.loadScript();
            window.initialize = this.initialize;
        }

    },


    initialize: function () {

        var mapOptions = {
            zoom     : 15,
            center   : new google.maps.LatLng(59.83833838966272, 30.3659059444274532),
            mapTypeId: google.maps.MapTypeId.ROADMAP,

            // map controlls

            // zoom
            zoomControl       : true,
            zoomControlOptions: {
                style   : google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.LEFT_CENTER
            },

            // panorama
            panControl: true,
            panControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            }
        };

        var map = new google.maps.Map(document.getElementById("google_map_canvas"), mapOptions);


        // add marker
        var contentString = [];
        contentString.push('<div id="infowindowContent" style="color: #000000;">');
        contentString.push('<strong>167968, Санкт-Петербург<br> Витебский пр., 87, к. 3</strong>');
        contentString.push('<div style="margin: 7px 0 0 0; color: #3b3b3b; font-size: 14px; font-style: italic;">09:00 - 22:00</div>');
        contentString.push('<div style="margin: 12px 0 0 0; font-size: 18px;">(812) 297-82-11</div>');
        contentString.push('</div>');

        var infowindow = new google.maps.InfoWindow({
            content: contentString.join('')
        });


        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(59.836902, 30.368159),
            map     : map,
            title   : "СпекртГаз"
        });
        infowindow.open(map, marker);

        /* open infoWindow by click */
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });

    },

    loadScript: function () {

        var script = document.createElement("script");

        script.type = "text/javascript";
        script.src = "http://maps.googleapis.com/maps/api/js?sensor=true&callback=initialize";
        document.body.appendChild(script);
    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();
