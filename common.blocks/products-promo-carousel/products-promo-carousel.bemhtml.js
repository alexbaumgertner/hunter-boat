block('products-promo-carousel')(
    elem('header').mix()([{
        block: 'i-font',
        mods: {
            face: 'hermes'
        }
    }]),
    elem('prices').mix()([{
        block: 'i-font',
        mods: {
            face: 'hermes'
        }
    }]),
    elem('price-old').tag()('span'),
    elem('price-current').tag()('span'),
    elem('photo')(
        tag()('img'),
        attrs()(function() {
            return {
                src: this.ctx.src,
                alt: this.ctx.src
            };
        })
    ),
    elem('url')(
        tag()('a'),
        attrs()(function() {
            return {
                href: this.ctx.url
            };
        })
    )
);
