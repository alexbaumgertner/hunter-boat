({
    mustDeps: [
        {
            block: 'i-tabbed-pane'
        }
    ],

    shouldDeps: [
        {
            elem: 'menu-item'
        },
        {
            elem: 'tab'
        },
        {
            elem: 'tab',
            mods: { state: 'current' }
        }
    ]
})
