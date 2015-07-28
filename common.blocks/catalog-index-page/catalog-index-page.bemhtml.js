block('catalog-index-page')(
    js()(true),
    elem('menu-item').tag()('span'),
    elem('menu-item-title')(
        mix()([{
            block: 'i-font',
            mods: {
                face: 'hermes'
            }
        }]),
        tag()('span')
    ),
    elem('menu-item-counter').tag()('span')
);
