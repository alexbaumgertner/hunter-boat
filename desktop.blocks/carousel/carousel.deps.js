({
    mustDeps: [
        {
            block: 'i-jquery',
            elem: 'leftclick'
        }
    ],

    shouldDeps: [

        {
            mods: { type: [ 'horiz', 'vert' ] }
        },
        {
            block: 'button',
            mods: { 'type': ['carousel-horiz', 'carousel-vert'], 'direction': ['prev', 'next'], state: ['disabled'] }
        },
        {
            elem: 'control',
            mods: { 'direction': ['prev', 'next'], state: ['disabled'] }
        },
        {
            elems: ['viewport']
        }

    ]
})
