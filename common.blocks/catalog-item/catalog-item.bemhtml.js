block('catalog-item')(
    elem('info-menu-list').tag()('ul'),
    elem('info-menu-item')(
        tag()('li'),
        mix()([{
            block: 'i-font',
            mods: {
                face: 'hermes'
            }
        }])
    )
);
