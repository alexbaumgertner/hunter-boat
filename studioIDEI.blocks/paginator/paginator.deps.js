({
    shouldDeps: [
        {
            block: 'b-link'
        },
        {
            block: 'paginator',
            elems: ['list', 'item']
        },
        {
            block: 'paginator',
            elem: 'item',
            mods: { state: 'current' }
        }
    ]
})