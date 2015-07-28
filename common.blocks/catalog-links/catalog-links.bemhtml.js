block('catalog-links')(
    elem('title')(
        tag()('span'),
        mix()([{
            block: 'i-font',
            mods: {
                face: 'hermes'
            }
        }])
    ),
    elem('list').tag()('ul'),
    elem('item').tag()('li')
);
