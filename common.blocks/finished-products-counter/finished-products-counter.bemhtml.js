block('finished-products-counter')(
    elem('value').tag()('span'),
    elem('value-item')(
        mix()([{
            block: 'i-font',
            mods: {
                face: 'hermes'
            }
        }]),
        tag()('span')
    ),
    elem('text').tag()('span')
);
