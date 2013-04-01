({
    block  : 'b-page',
    title  : 'tabbed-pane',
    head   : [
        { elem: 'css', url: '_tabbed-pane.css', ie: false},
        { elem: 'css', url: '_tabbed-pane', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_tabbed-pane.js'},
    ],
    content: [
        {
            block  : 'tabbed-pane',
            mix    : [
                { block: 'tabbed-pane', elem: 'menu' }
            ],
            js     : { id: 'content-menu' },
            content: [
                {
                    elem   : 'menu-item',
                    elemMods: { state: 'current' },
                    content: 'first'
                },

                {
                    elem   : 'menu-item',
                    content: 'second'
                },

                {
                    elem   : 'menu-item',
                    content: 'third'
                }
            ]
        },
        {
            block: 'delimiter',
            attrs: {
                style: 'height: 50px; background: rgba(0, 0, 0, 0.1);'
            }
        },
        {
            block  : 'tabbed-pane',
            mix    : [
                { block: 'tabbed-pane', elem: 'tabs' }
            ],
            js     : { id: 'page-menu' },
            content: [
                {
                    elem   : 'tab',
                    content: 'tab first right'
                },
                {
                    elem   : 'tab',
                    content: 'tab second'
                },
                {
                    elem   : 'tab',
                    content: 'tab third'
                }
            ]
        },
        {
            block  : 'tabbed-pane',
            mix    : [
                { block: 'tabbed-pane', elem: 'tabs' }
            ],
            js     : { id: 'content-menu' },
            content: [
                {
                    elem   : 'tab',
                    content: 'tab 1',
                    elemMods: { state: 'current' }
                },
                {
                    elem   : 'tab',
                    content: 'tab 2'
                },
                {
                    elem   : 'tab',
                    content: 'tab 3'
                }
            ]
        }
    ]
})
