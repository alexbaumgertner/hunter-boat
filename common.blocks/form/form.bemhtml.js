block('form')(
    tag()('form'),
    attrs()(function() {
        return {
            action: this.ctx.action,
            method: this.ctx.method
        };
    }),
    elem('header').mix()([{
        block: 'i-font',
        mods: {
            face: 'hermes'
        }
    }]),
    elem('validate').tag()('span'),
    elem('send-button').tag()('span'),
    elem('author-info-item').tag()('span')
);
