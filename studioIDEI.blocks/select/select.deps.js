({
    mustDeps: [
        {
            block: 'i-jquery',
            elem: 'leftclick'
        }
    ],
    shouldDeps: [
        {
            elems: ['native-control', 'custom-control', 'option', 'custom-options', 'custom-option', 'title']
        },
        {
            elem: 'custom-options',
            mods: { 'visible': 'yes' }
        },
        {
            elem: 'custom-control',
            mods: { 'active': 'yes' }
        }
    ]
})