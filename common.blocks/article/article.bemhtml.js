block('article').elem('photo')(
    tag()('img'),
    attrs()(function() {
        return {
            src: this.ctx.src
        };
    })
);
