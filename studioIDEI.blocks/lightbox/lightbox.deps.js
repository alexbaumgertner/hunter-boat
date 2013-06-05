({
    shouldDeps: [
        { mods: { visibility: [ 'visible', 'hidden' ] } },
        {
            elems: ['box','close','control','viewport','img', 'loader', 'mask']
        },
        {
            elem: 'control',
            mods: { direction: [ 'prev', 'next' ], 'disable': 'yes' }
        },
        {
            elem: 'mask',
            mods: { visibility: [ 'visible', 'hidden' ] }
        }
    ]
})