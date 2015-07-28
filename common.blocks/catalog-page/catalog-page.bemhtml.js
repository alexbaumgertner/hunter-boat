block('catalog-page')(
    elem('menu-item').tag()('span'),
    elem('menu-item-title').tag()('span'),
    elem('header')(
        tag()('h3'),
        mix()([{
            block: 'i-font',
            mods: {
                face: 'hermes'
            }
        }])
    )
);
