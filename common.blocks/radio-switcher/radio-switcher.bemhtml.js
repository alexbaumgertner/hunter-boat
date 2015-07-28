block('radio-switcher')(
    js()(true),
    elem('list')(
        tag()('ul'),
        mix()([{
            block: 'tabbed-pane',
            elem: 'menu'
        }])
    ),
    elem('item')(
        tag()('li'),
        mix()([{
            block: 'tabbed-pane',
            elem: 'menu-item'
        }])
    ),
    elem('tabs')(
        tag()('ul'),
        mix()([{
            block: 'tabbed-pane',
            elem: 'tabs'
        }])
    ),
    elem('tab')(
        tag()('li'),
        mix()([{
            block: 'tabbed-pane',
            elem: 'tab'
        }])
    )
);
