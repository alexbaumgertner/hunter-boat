block('photoalbums-carousel')(
    elem('list').tag()('ul'),
    elem('item').tag()('li'),
    elem('header').mix()([{
        block: 'i-font',
        mods: {
            face: 'hermes'
        }
    }])
);
