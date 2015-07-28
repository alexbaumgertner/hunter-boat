block('articles')(
    elem('header')(
        tag()('h3'),
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
