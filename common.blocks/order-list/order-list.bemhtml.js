block('order-list')(
    js()(true),
    elem('header').tag()('ul'),
    elem('header-item').tag()('li'),
    elem('list').tag()('ul'),
    elem('item').tag()('li'),
    elem('item-photo').tag()('span'),
    elem('item-img')(
        tag()('img'),
        attrs()(function() {
            return {
                src: this.ctx.src
            };
        })
    ),
    elem('item-desc').tag()('span'),
    elem('item-qualif').tag()('span'),
    elem('item-name').tag()('span'),
    elem('counter').tag()('span'),
    elem('price').tag()('span'),
    elem('delete').tag()('span'),
    elem('info').tag()('span'),
    elem('total-text').tag()('span'),
    elem('total-value').tag()('span')
);
