block('article-item')(
    elem('title').tag()('h3'),
    elem('link-to-all')(
        tag()('span'),
        content()(function() {
            return {
                block: 'link',
                content: this.ctx.content,
                url: this.ctx.url
            };
        })
    ),
    elem('link').content()(function() {
        return {
            block: 'link',
            content: this.ctx.content,
            url: this.ctx.url
        };
    }),
    elem('header')(
        tag()('h3'),
        mix()([{
            block: 'i-font',
            mods: {
                face: 'hermes'
            }
        }])
    )
);
