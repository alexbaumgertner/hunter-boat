block('carousel')(
    def()(function() {
        this.ctx.mods || (this.ctx.mods = {});
        this.ctx.mods.type || (this.ctx.mods.type = 'horiz');
        this._carouselType = this.ctx.mods.type;
        return applyNext();
    }),
    content()(function() {
        return [{
            elem: 'control',
            elemMods: {
                direction: 'prev'
            },
            content: {
                block: 'button',
                mods: {
                    direction: 'prev',
                    type: ('carousel-' + this._carouselType)
                }
            }
        }, {
            elem: 'control',
            elemMods: {
                direction: 'next'
            },
            content: {
                block: 'button',
                mods: {
                    direction: 'next',
                    type: ('carousel-' + this._carouselType)
                }
            }
        }, {
            elem: 'viewport',
            content: applyNext()
        }];
    }),
    elem('items').tag()('ul'),
    elem('item').tag()('li')
);
