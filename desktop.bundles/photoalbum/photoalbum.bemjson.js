({
    block: 'b-page',
    title: 'photoalbum',
    head: [
        { elem: 'css', url: '_photoalbum.css', ie: false},
        { elem: 'css', url: '_photoalbum', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_photoalbum.js'}
    ],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'wrapper-fix-width',
                    mods: { width: '962' },
                    content: [
                        {
                            block: 'header',
                            elem: 'column',
                            elemMods: { position: 'left' },
                            content: [
                                {
                                    block: 'logo',
                                    content: 'HUNTERBOAT'
                                }
                            ]
                        },
                        {
                            block: 'header',
                            elem: 'column',
                            elemMods: { position: 'right' },
                            content: [
                                {
                                    block: 'cart-info',
                                    content: [
                                        {
                                            elem: 'link',
                                            content: {
                                                block: 'b-link',
                                                url: '/order.html',
                                                content: 'В заказе:'
                                            }
                                        },
                                        {
                                            elem: 'info',
                                            content: [
                                                {
                                                    elem: 'text',
                                                    content: '3 товара на сумму'
                                                },
                                                {
                                                    elem: 'total-price',
                                                    content: { block: 'price', mods: { currency: 'dot-dash' }, value: '95000' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'contacts',
                                    mods: { color: '000000' },
                                    content: [
                                        {
                                            elem: 'phone',
                                            content: [
                                                {
                                                    elem: 'phone-city-code',
                                                    content: '812'
                                                },
                                                {
                                                    elem: 'phone-number',
                                                    content: '320-02-60'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'link',
                                            content: {
                                                block: 'b-link',
                                                mods: { pseudo: 'yes' },
                                                content: 'Обратный звонок'
                                            }
                                        }
                                    ]
                                },
                                {
                                    block: 'main-menu',
                                    content: [
                                        {
                                            elem: 'section',
                                            content: {
                                                elem: 'list',
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        elemMods: { section: 'catalog' },
                                                        name: 'Каталог',
                                                        url: '/catalog.html'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            elem: 'section',
                                            content: {
                                                elem: 'list',
                                                content: [
                                                    {
                                                        elem: 'item',

                                                        name: 'О компании',
                                                        url: '/about.html'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        name: 'Отзывы',
                                                        url: '/reviews.html'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        name: 'Вопрос-ответ',
                                                        url: '/faq.html'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        elemMods: { state: 'current' },
                                                        name: 'Фотографии',
                                                        url: '/photoalbums.html'
                                                    },
                                                    {
                                                        elem: 'item',
                                                        name: 'Оптовикам',
                                                        url: '/dealers.html'
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                {
                                    block: 'buyer-menu',
                                    content: [
                                        {
                                            elem: 'item',
                                            name: 'Как купить',
                                            url: '/how-to-buy.html'
                                        },
                                        {
                                            elem: 'item',
                                            name: 'Где купить',
                                            url: '/where-to-buy.html'
                                        },
                                        {
                                            elem: 'item',
                                            name: 'Доставка',
                                            url: '/delivery.html'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'wrapper-fix-width',
                    mods: { width: '962' },
                    content: [
                        {
                            block: 'content',
                            elem: 'column',
                            elemMods: { position: 'full' },
                            content: [
                                {
                                    block: 'photoalbum-page',
                                    content: [
                                        {
                                            elem: 'header',
                                            content: 'Фотографии'
                                        },
                                        {
                                            elem: 'item',
                                            content: {

                                                block: 'photoalbums-item',
                                                content: [
                                                    {
                                                        elem: 'header',
                                                        content: 'Тест – драйв надувной лодки Хантер 360'
                                                    },
                                                    {
                                                        elem: 'content',
                                                        content: [
                                                            {
                                                                elem: 'current',
                                                                tag: 'img',
                                                                attrs: {
                                                                    src: 'img/photoalbums/develop-505/1_medium.jpg'
                                                                }
                                                            },
                                                            {
                                                                elem: 'carousel',
                                                                content: {
                                                                    block: 'carousel',
                                                                    mods: { type: 'vert' },
                                                                    js: {
                                                                        frameCurr: 1,
                                                                        frameItemsCount: 6,
                                                                        frameItemsStep: 3
                                                                    },
                                                                    content: {
                                                                        elem: 'items',
                                                                        mix: [
                                                                            { block: 'photoalbums-item', elem: 'photo-list' }
                                                                        ],
                                                                        content: (function () {
                                                                                    var items = [];

                                                                                    for (var i = 0; i < 24; i++) {

                                                                                        items.push({
                                                                                            elem: 'item',
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'photoalbums-item',
                                                                                                    elem: 'photo',
                                                                                                    elemMods: (function () {
                                                                                                        if (i === 0) {return { state: 'current' };}
                                                                                                    }()),
                                                                                                    tag: 'img',
                                                                                                    attrs: {
                                                                                                        src: 'img/photoalbums/develop-505/' + (i === 0 ? 2 : Math.floor((Math.random() * 6) + 1)) + '_small.jpg',
                                                                                                        rel: 'img/photoalbums/develop-505/' + (i === 0 ? 2 : Math.floor((Math.random() * 6) + 1)) + '_small.jpg',
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    block: 'photoalbums-item',
                                                                                                    elem: 'photo',
                                                                                                    tag: 'img',
                                                                                                    attrs: {
                                                                                                        src: 'img/photoalbums/develop-505/' + Math.floor((Math.random() * 6) + 1) + '_small.jpg',
                                                                                                        rel: 'img/photoalbums/develop-505/' + Math.floor((Math.random() * 6) + 1) + '_small.jpg',
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        })

                                                                                    }

                                                                                    return items;
                                                                                }())
                                                                    }
                                                                }

                                                            }
                                                        ]
                                                    }
                                                ]

                                            }
                                        },
                                        {
                                            elem: 'other',
                                            content: {
                                                block: 'photoalbums-carousel',
                                                content: [
                                                    {
                                                        elem: 'header',
                                                        content: 'ДРУГИЕ АЛЬБОМЫ'
                                                    },
                                                    {
                                                        elem: 'carousel',
                                                        content: {
                                                            block: 'carousel',
                                                            js: {
                                                                frameCurr: 1,
                                                                frameItemsCount: 4,
                                                                frameItemsStep: 2
                                                            },
                                                            content: {
                                                                elem: 'items',
                                                                content: (function () {
                                                                    var items = [];

                                                                    for (var i = 0; i < 15; i++) {

                                                                        items.push({
                                                                            elem: 'item',
                                                                            content: {
                                                                                block: 'photoalbum-thumb',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'photo'
                                                                                    },
                                                                                    {
                                                                                        elem: 'title',
                                                                                        content: { block: 'b-link', url: '/', content: 'Тест драйв лодки Хантер 280 Т' }
                                                                                    },
                                                                                    {
                                                                                        elem: 'counter',
                                                                                        content: [
                                                                                            {
                                                                                                elem: 'counter-value',
                                                                                                content: '8'
                                                                                            },
                                                                                            {
                                                                                                elem: 'counter-currency',
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
                                                        }
                                                    }
                                                ]
                                            }

                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            block: 'footer',
            content: [
                {
                    block: 'wrapper-fix-width',
                    mods: { width: '962' },
                    content: [
                        {
                            block: 'footer',
                            elem: 'column',
                            elemMods: { position: 'left' },
                            content: [
                                {
                                    block: 'contacts',
                                    mods: { color: 'e5e5e5' },
                                    content: [
                                        {
                                            elem: 'phone',
                                            content: [
                                                {
                                                    elem: 'phone-city-code',
                                                    content: '812'
                                                },
                                                {
                                                    elem: 'phone-number',
                                                    content: '320-02-60'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'link',
                                            content: {
                                                block: 'b-link',
                                                mods: { pseudo: 'yes' },
                                                content: 'Обратный звонок'
                                            }
                                        },
                                        {
                                            elem: 'address',
                                            content: 'Санкт-Петербург, ул. Профессора Качалова, 8'
                                        }
                                    ]
                                },
                                {
                                    block: 'copyright',
                                    content: 'ООО «Производственно-торговая Компания Хантер — производство и продажа надувных лодок Хантер» '
                                }
                            ]
                        },
                        {
                            block: 'footer',
                            elem: 'column',
                            elemMods: { position: 'center' },
                            content: [
                                {
                                    block: 'search'
                                },
                                {
                                    block: 'menu',
                                    content: [
                                        {
                                            elem: 'item',
                                            name: 'Вакансии',
                                            url: '/vacancy.html'
                                        },
                                        {
                                            elem: 'item',
                                            name: 'Отзывы',
                                            url: '/reviews.html'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'footer',
                            elem: 'column',
                            elemMods: { position: 'right' },
                            content: [
                                {
                                    block: 'studio-idei',
                                    mods: { color: '909090' },
                                    projectUrl: 'project-url'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
