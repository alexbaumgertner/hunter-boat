block('photoalbum-thumb')(
    elem('counter-value')(
        tag()('span'),
        content()(function() {
            return Math.floor((Math.random() * 100));
        })
    ),
    elem('counter-currency').tag()('span'),
    elem('link')(
        tag()('a'),
        mix()([{
            block: 'link'
        }]),
        attrs()(function() {
            return {
                href: this.ctx.url
            };
        })
    ),
    elem('title').content()(function() {
        return (function() {
            var titles = ['Надувные лодки Хантер', 'Тест драйв лодки Хантер 280 Т', 'Фото-отчет с теста лодки Хантер 280 RT', 'Рыбалка с лодкой Хантер 280 Р', 'Долгожданная премьера лодка Хантер 320 Л', 'Надувная лодка Хантер 320 - зеленый цвет'];
            return titles[(Math.floor((Math.random() * titles.length)))];
        })();
    }),
    elem('photo')(
        tag()('img'),
        attrs()(function() {
            return {
                src: (function() {
                    var photos = ['/repair-boat-707/1_small.jpg', '/test-drive-101/1_small.jpg', '/fix-and-replay/1_small.jpg', '/super-tent-1/1_small.jpg', '/develop-505/1_small.jpg'];
                    return ('img/photoalbums' + photos[(Math.floor((Math.random() * photos.length)))]);
                })()
            };
        })
    )
);
