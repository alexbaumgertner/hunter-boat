({
    mustDeps: [
        {
            block: 'i-bem',
            elem: 'dom',
            mods: { init: 'auto' }
        },
        { block: 'bemhtml' },
        { block: 'i-polyfill', elem: 'css3' }
    ],
    shouldDeps: [
        {
            block: 'b-page',
            elem: 'body'
        }
    ],
    noDeps: [
        {
            block: 'i-bem',
            elem: 'html'
        }
    ]
})
