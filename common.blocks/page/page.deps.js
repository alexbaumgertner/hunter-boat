({
    mustDeps: [
        {
            block: 'i-bem',
            elem: 'dom',
            mods: { init: 'auto' }
        },
        { block: 'i-polyfill', elems: ['css3'] }
    ],
    shouldDeps: [
        {
            block: 'b-page',
            elems: ['body']
        }
    ]
});

