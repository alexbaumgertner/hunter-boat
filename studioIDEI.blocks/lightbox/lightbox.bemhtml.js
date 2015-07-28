block('lightbox')(
    js()(true),
    content()([{
        elem: 'box',
        content: [{
            elem: 'close'
        }, {
            elem: 'control',
            elemMods: {
                direction: 'prev'
            }
        }, {
            elem: 'control',
            elemMods: {
                direction: 'next'
            }
        }, {
            elem: 'viewport',
            content: [{
                elem: 'img',
                tag: 'img'
            }, {
                elem: 'loader',
                content: {
                    block: 'content-loader'
                }
            }]
        }]
    }, {
        elem: 'mask'
    }])
);
