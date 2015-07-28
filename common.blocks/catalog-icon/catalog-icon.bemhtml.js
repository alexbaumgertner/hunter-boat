block('catalog-icon')(
    tag()('span'),
    content()(function() {
        return [{
            elem: 'img',
            tag: 'span'
        }, {
            elem: 'text',
            tag: 'span',
            mix: [{
                block: 'i-font',
                mods: {
                    face: 'hermes'
                }
            }],
            content: this.ctx.mods.type
        }];
    })
);
