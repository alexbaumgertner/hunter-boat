block('paginator')(
    content()(function() {
        var _this = this;
        return applyCtx({
            elem: 'list',
            tag: 'ul',
            content: (function() {
                var content = [];
                for (var i = 0;
                    (i < _this.ctx.itemsVisible);
                    (i++)) {
                    var itemIndex = (i + 1);
                    if ((itemIndex !== _this.ctx.itemCurr)) {
                        content.push({
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                content: itemIndex,
                                url: (_this.ctx.itemsUrlPrefix + itemIndex)
                            }
                        });
                    } else {
                        content.push({
                            elem: 'item',
                            elemMods: {
                                state: 'current'
                            },
                            content: itemIndex
                        });
                    }
                }
                return content;
            })()
        });
    }),
    elem('item').tag()('li')
);
