block('fieldset')(
    tag()('fieldset'),
    match(function() {
        return this.ctx.legend;
    }).content()(function() {
        return [{
            elem: 'legend',
            tag: 'legend',
            content: this.ctx.legend
        }, this.ctx.content];
    })
);
