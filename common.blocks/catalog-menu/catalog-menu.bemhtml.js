block('catalog-menu')(
    elem('list').tag()('ul'),
    elem('item')(
        tag()('li'),
        content()(function() {
            return {
                block: 'link',
                content: this.ctx.content,
                url: this.ctx.url
            };
        })
    ),
    elem('section-header').content()(function() {
        return {
            block: 'link',
            content: this.ctx.content,
            url: this.ctx.url
        };
    }),
    elem('header').mix()([{
        block: 'i-font',
        mods: {
            face: 'hermes'
        }
    }])
);
