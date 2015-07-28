block('sale-stock')(
    elem('list').tag()('ul'),
    elem('item')(
        tag()('li'),
        content()(function() {
            return {
                elem: 'item-inner',
                content: applyNext()
            };
        })
    )
);
