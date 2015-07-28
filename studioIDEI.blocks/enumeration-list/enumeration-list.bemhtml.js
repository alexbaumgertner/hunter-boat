block('enumeration-list')(
    tag()('ul'),
    elem('item')(
        tag()('li'),
        content()(function() {
            return [{
                elem: 'key',
                tag: 'span',
                content: this.ctx.key
            }, {
                elem: 'value',
                tag: 'span',
                content: this.ctx.value
            }];
        })
    )
);
