block('product-card').match(function() {
    return (!this.mods || this.mods.type !== 'withFullDesc');
})(
    content()(function() {
        return [{
            elem: 'icon',
            content: {
                block: 'catalog-icon',
                mods: {
                    type: (function() {
                        var mods = ['new', 'pop', 'rec'];
                        var random = Math.floor((Math.random() * mods.length));
                        return mods[random];
                    })()
                }
            }
        }, {
            elem: 'link-wrapper',
            tag: 'a',
            attrs: {
                href: '/item.html'
            },
            content: [{
                elem: 'photo',
                src: this.ctx.src
            }, {
                elem: 'title',
                tag: 'span',
                content: (function() {
                    var names = ['Хантер 320 Л ЛЮКС', 'Хантер 159 НР', 'Хантер 777 ЛЮКС', 'Хантер 320 ПВХ'];
                    var random = Math.floor((Math.random() * names.length));
                    return names[random];
                })()
            }]
        }, {
            elem: 'info',
            tag: 'span',
            content: [{
                elem: 'desc',
                content: (this.ctx.desc || (function() {
                    var descs = ['Лодка ПВХ', 'Гребная лодка', 'Лодка надувная', 'Лодка моторная ЛЮКС'];
                    var random = Math.floor((Math.random() * descs.length));
                    return descs[random];
                })())
            }, {
                elem: 'price',
                content: [{
                    block: 'price',
                    mods: {
                        currency: 'dot-dash',
                        variant: 'old'
                    },
                    value: this.ctx.oldPrice
                }, {
                    block: 'price',
                    mods: {
                        currency: 'dot-dash'
                    },
                    value: (this.ctx.price || Math.floor((Math.random() * 100000)))
                }]
            }]
        }];
    }),
    elem('photo')(
        tag()('img'),
        attrs()(function() {
            if (this.ctx.src) {
                return {
                    src: this.ctx.src
                };
            }
            var photos = ['hunter_250_ML', 'hunter_280_LT', 'hunter_290_L', 'hunter_320_LK_lux'];
            var random = Math.floor((Math.random() * photos.length));
            return {
                src: ('img/catalog/boats/' + photos[random] + '.png')
            };
        })
    )
);

block('product-card').elem('info').tag()('span');
