/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'map', modName: 'provider', modVal: 'google'}, {


    onSetMod : {

        'js' : function() {
            this.loadMapsApi();
        }

    },

    /**
     * API loader
     */
    loadMapsApi: function() {

        var _this = this;

        if (!window.google || !window.google.maps) {

            var apiScript = document.createElement('script');
            var apiCallback = 'googlemapsloaded';

            window[apiCallback] = function () {
                _this.onAPILoaded();
            };

            apiScript.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=" + apiCallback;
            document.getElementsByTagName('head')[0].appendChild(apiScript);

        } else {
            this.onAPILoaded();
        }

    },


    onAPILoaded: function () {
        this.initMap();
        this.showMarkers();
    },


    initMap: function () {

        var mapOptions = {
            zoom: this.params.zoom,
            center: new google.maps.LatLng(this.params.center[0], this.params.center[1]),
            mapTypeId: this.params.MapTypeId || google.maps.MapTypeId.ROADMAP
          }

          this.map = new google.maps.Map(this.elem('map')[0], mapOptions);
    },


    /**
     * get Map Markers
     * @returns {Array}
     */
    getMarkers: function () {

        var markersDOM = this.elem('marker');
        var markers = [];

        for (var i = 0, length = markersDOM.length; i < length; i++) {
            markers[i] = this.elemParams($(markersDOM[i]));
            markers[i].domRelElem = markersDOM[i];
        }

        return markers;

    },



    showMarkers: function () {
        this.markers = this.getMarkers();

        for (var i = 0, length = this.markers.length; i < length; i++) {
            this.showMarker(this.markers[i]);
        }
    },


    /**
     * https://developers.google.com/maps/documentation/javascript/overlays?hl=ru#Markers
     * @param options
     */
    showMarker: function (options) {
        var _this = this;


        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(options.center[1], options.center[0]),
            map     : this.map,
            title   : options.title,
            icon: options.icon,
            shadow: options.shadow
        });

        marker.domRelElem = options.domRelElem;


        // Add events listener

        // https://developers.google.com/maps/documentation/javascript/events?hl=ru#UIEvents
        google.maps.event.addListener(marker, 'mouseover', function () {
            marker.setIcon((marker.getIcon()).replace('hovered_no', 'hovered_yes'));
            _this.setMod($(marker.domRelElem), 'hovered', 'yes');
        });


        google.maps.event.addListener(marker, 'mouseout', function () {
            marker.setIcon((marker.getIcon()).replace('hovered_yes', 'hovered_no'));
            _this.setMod($(marker.domRelElem), 'hovered', 'no');
        });


        // TODO: think about refactor this:
        $(marker.domRelElem).hover(
            // mouse enter
            function () {
                marker.setIcon((marker.getIcon()).replace('hovered_no', 'hovered_yes'));
                _this.setMod($(marker.domRelElem), 'hovered', 'yes');
            },
            // mouse leave
            function(){
                marker.setIcon((marker.getIcon()).replace('hovered_yes', 'hovered_no'));
                _this.setMod($(marker.domRelElem), 'hovered', 'no');
            });
    }





















}, {

/*
    live : function() {
        */
/* ... *//*

    }
*/

});

})();
