block('input')(
    def()(function() {
        this.ctx.mods = this.ctx.mods || {};
        this.ctx.mods.type = this.ctx.type || 'text';
        return applyNext();
    }),
    tag()('input'),
    attrs()(function() {
        return {
            placeholder: this.ctx.placeholder,
            name: this.ctx.name,
            size: this.ctx.size,
            type: this.ctx.type,
            value: this.ctx.value,
            style: this.ctx.style
        };
    }),
    match(function() {
        return this.ctx.label;
    })(
        js()(function() {
            return {
                id: this.ctx.name
            };
        }),
        tag()('span'),
        content()(function() {
            return [{
                elem: 'input',
                tag: 'input',
                attrs: {
                    id: this.generateId(),
                    type: this.ctx.type,
                    name: this.ctx.name,
                    value: this.ctx.value,
                    checked: this.ctx.checked
                }
            }, {
                elem: 'control',
                tag: 'span'
            }, {
                elem: 'label',
                tag: 'label',
                content: this.ctx.label,
                attrs: {
                    'for': this.generateId()
                }
            }];
        })
    ),
    match(function() {
        return this.ctx.type === 'file';
    })(
        js()(true),
        tag()('span'),
        content()(function() {
            return [{
                elem: 'browse-button',
                tag: 'span',
                content: this.ctx.content
            }, {
                elem: 'input',
                tag: 'input',
                attrs: {
                    type: 'file',
                    name: this.ctx.name
                }
            }, {
                elem: 'file-title',
                tag: 'span',
                mods: {
                    visibility: 'hidden'
                }
            }];
        })
    )
);
