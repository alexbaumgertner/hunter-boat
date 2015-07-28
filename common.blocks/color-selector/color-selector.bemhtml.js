block('color-selector')(
    tag()('span'),
    js()(true),
    elem('selector')(
        def()(function() {
            this.ctx.mods = this.ctx.mods || {};
            this.ctx.mods.color = this.ctx.value;
            this.ctx.mods.checked = this.ctx.checked ? 'yes' : 'no';
            return applyNext();
        }),
        tag()('span')
    )
);
