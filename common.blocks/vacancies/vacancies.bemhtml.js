block('vacancies')(
    elem('header')(
        tag()('h3'),
        mix()([{
            block: 'i-font',
            mods: {
                face: 'hermes'
            }
        }])
    ),
    elem('text').tag()('span'),
    elem('info').tag()('span'),
    elem('list').tag()('ul'),
    elem('item').tag()('li')
);
