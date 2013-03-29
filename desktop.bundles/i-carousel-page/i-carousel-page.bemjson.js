({
    block  : 'b-page',
    title  : 'i-carousel-page',
    head   : [
        { elem: 'css', url: '_i-carousel-page.css', ie: false},
        { elem: 'css', url: '_i-carousel-page', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_i-carousel-page.js'},
    ],
    content: {
        block  : 'test-container',
        attrs  : {
            style: 'width: 725px; margin: 100px auto;'
        },
        content: {
            block  : 'photoalbums-carousel',
            js: 'true',
            mix    : [
                { block: 'i-carousel', mods: { type: 'horiz' } }
            ],
            content: [

                {
                    elem   : 'header',
                    content: 'ДРУГИЕ АЛЬБОМЫ'
                },
                {
                    elem   : 'carouser',
                    content: [
                        {
                            elem    : 'control',
                            elemMods: { direction: 'prev' },
                            content: { block: 'button', mods: { type: 'carousel-horiz', direction: 'prev', state: 'enabled' } }
                        },
                        {
                            elem    : 'control',
                            elemMods: { direction: 'next' },
                            content: { block: 'button', mods: { type: 'carousel-horiz', direction: 'next', state: 'enabled' } }
                        },
                        {
                            elem   : 'viewport',
                            content: [
                                {
                                    elem   : 'list',
                                    content: (function () {
                                        var items = [];

                                        for (var i = 0; i < 10; i++) {

                                            items.push({
                                                elem   : 'item',
                                                content: {
                                                    block  : 'photoalbum-thumb',
                                                    content: [
                                                        {
                                                            elem: 'photo'
                                                        },
                                                        {
                                                            elem   : 'title',
                                                            content: { block: 'b-link', url: '/', content: 'Тест драйв лодки Хантер 280 Т' }
                                                        },
                                                        {
                                                            elem   : 'counter',
                                                            content: [
                                                                {
                                                                    elem   : 'counter-value',
                                                                    content: '8'
                                                                },
                                                                {
                                                                    elem   : 'counter-currency',
                                                                    content: 'фото'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            })

                                        }

                                        return items;
                                    }())
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

})
