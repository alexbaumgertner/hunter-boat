block('textarea')(
    tag()('textarea'),
    attrs()(function() {
        return {
            placeholder: this.ctx.placeholder,
            name: this.ctx.name,
            size: this.ctx.size
        };
    })
);
