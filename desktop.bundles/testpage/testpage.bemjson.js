({
    block: 'b-page',
    title: 'testpage',
    head: [
        { elem: 'css', url: '_testpage.css', ie: false},
        { elem: 'css', url: '_testpage', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_testpage.js'},
    ],
    content: [
        {
            block: 'sortable-table',
            js: true,
            mix: [ { block: 'i-sortable' } ]
        }
    ]
})
