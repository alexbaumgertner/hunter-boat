({
    block: 'b-page',
    title: 'item',
    head: [
        { elem: 'css', url: '_item.css', ie: false},
        { elem: 'css', url: '_item', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'_item.js'},
    ],
    content: [
        'block content'
    ]
})
