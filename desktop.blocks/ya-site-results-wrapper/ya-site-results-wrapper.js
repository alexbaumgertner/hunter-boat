/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('ya-site-results-wrapper', {

    onSetMod : {

        'js' : function() {
            (function (w, d, c) {

                // load search api
                if (!d.getElementById('site_yandex_net_v2_0_js_all')) {
                    var s = d.createElement('script'), h = d.getElementsByTagName('script')[0];
                    s.type = 'text/javascript';
                    s.id = 'site_yandex_net_v2_0_js_all';
                    s.async = true;
                    s.charset = 'utf-8';
                    s.src = (d.location.protocol === 'https:' ? 'https:' : 'http:') + '//site.yandex.net/v2.0/js/all.js';
                    h.parentNode.insertBefore(s, h);
                }

                (w[c] || (w[c] = [])).push(function () {
                    Ya.Site.Results.init();
                })
            })(window, document, 'yandex_site_callbacks');
        }

    }

}, {



});

})();
