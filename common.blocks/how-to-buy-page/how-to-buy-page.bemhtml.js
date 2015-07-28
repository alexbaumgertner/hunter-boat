block('how-to-buy-page')(
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
    elem('section-column').tag()('span')
);
