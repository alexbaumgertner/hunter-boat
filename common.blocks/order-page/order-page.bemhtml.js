block('order-page')(
    js()(true),
    elem('menu')(
        tag()('ul'),
        js()({
            id: 'order-page-sections'
        })
    ),
    elem('content').js()({
        id: 'order-page-sections'
    }),
    elem('menu-item')(
        tag()('li'),
        mix()([{
            block: 'i-font',
            mods: {
                face: 'hermes'
            }
        }])
    ),
    elem('menu-limiter')(
        tag()('li'),
        content()('→')
    )
);
