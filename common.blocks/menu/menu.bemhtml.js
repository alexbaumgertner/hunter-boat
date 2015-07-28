block('menu')(
    tag()('ul'),
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
