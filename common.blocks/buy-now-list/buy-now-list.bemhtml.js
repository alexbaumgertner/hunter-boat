block('buy-now-list')(
    elem('list').tag()('ul'),
    elem('item')(
        tag()('li'),
        content()(function() {
            return {
                block: 'link',
                url: this.ctx.url,
                content: this.ctx.name
            };
        })
    )
);
