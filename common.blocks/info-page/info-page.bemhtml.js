block('info-page')(
    elem('header')(
        tag()('h3'),
        mix()([{
            block: 'i-font',
            mods: {
                face: 'hermes'
            }
        }])
    ),
    elem('section-header')(
        tag()('h4'),
        mix()([{
            block: 'i-font',
            mods: {
                face: 'hermes'
            }
        }])
    ),
    elem('sections').tag()('ul'),
    elem('section').tag()('li'),
    elem('separator').tag()('li'),
    elem('column').tag()('span')
);
