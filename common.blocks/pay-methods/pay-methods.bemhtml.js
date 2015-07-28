block('pay-methods')(
    js()(true),
    tag()('ul'),
    elem('method').tag()('li'),
    elem('method-more').tag()('li'),
    elem('method-img')(
        tag()('img'),
        attrs()(function() {
            return {
                src: this.ctx.url
            };
        })
    )
);
