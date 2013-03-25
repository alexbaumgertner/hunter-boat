({
    block: 'b-page',
    title: 'reviews',
    head: [
        { elem: 'css', url: '_reviews.css', ie: false},
        { elem: 'css', url: '_reviews', ie: true },
                /*{ block: 'i-jquery', elem: 'core'},*/
        { elem: 'js', url: 'jquery-1.7.2.js'},
        { elem: 'js', url:'_reviews.js'},
    ],
    content: [
            {
                block  : 'header',
                content: [
                    {
                        block  : 'wrapper-fix-width',
                        mods   : { width: '960' },
                        content: [
                            {
                                block   : 'header',
                                elem    : 'column',
                                elemMods: { position: 'left' },
                                content : [
                                    {
                                        block  : 'logo',
                                        content: 'HUNTERBOAT'
                                    }
                                ]
                            },

                            {
                                block   : 'header',
                                elem    : 'column',
                                elemMods: { position: 'right' },
                                content : [
                                    {
                                        block  : 'cart-info',
                                        content: [
                                            {
                                                elem   : 'link',
                                                content: {
                                                    block  : 'b-link',
                                                    url    : 'cart',
                                                    content: 'В заказе:'
                                                }
                                            },
                                            {
                                                elem   : 'info',
                                                content: [
                                                    {
                                                        elem   : 'text',
                                                        content: '3 товара на сумму'
                                                    },
                                                    {
                                                        elem   : 'total-price',
                                                        content: { block: 'price', mods: { currency: 'RUB' }, value: '95000' }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block  : 'contacts',
                                        mods   : { color: '000000' },
                                        content: [
                                            {
                                                elem   : 'phone',
                                                content: [
                                                    {
                                                        elem   : 'phone-city-code',
                                                        content: '812'
                                                    },
                                                    {
                                                        elem   : 'phone-number',
                                                        content: '320-02-60'
                                                    }
                                                ]
                                            },
                                            {
                                                elem   : 'link',
                                                content: {
                                                    block  : 'b-link',
                                                    mods   : { pseudo: 'yes' },
                                                    content: 'Обратный звонок'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        block  : 'main-menu',
                                        content: [
                                            {
                                                elem    : 'section',
                                                elemMods: { background: 'red' },
                                                content : {
                                                    elem   : 'list',
                                                    content: [
                                                        {
                                                            elem    : 'item',
                                                            elemMods: { section: 'catalog' },
                                                            name    : 'Каталог',
                                                            url     : '/catalog/'
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                elem   : 'section',
                                                content: {
                                                    elem   : 'list',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            name: 'О компании',
                                                            url : '/about/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            name: 'Отзывы',
                                                            url : '/feedback/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            name: 'Вопрос-ответ',
                                                            url : '/faq/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            name: 'Фотографии',
                                                            url : '/photos/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            name: 'Оптовикам',
                                                            url : '/wholesale/'
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        block  : 'buyer-menu',
                                        content: [
                                            {
                                                elem: 'item',
                                                name: 'Как купить',
                                                url : '/howtobuy/'
                                            },
                                            {
                                                elem: 'item',
                                                name: 'Где купить',
                                                url : '/wheretobuy/'
                                            },
                                            {
                                                elem: 'item',
                                                name: 'Доставка',
                                                url : '/shipping/'
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                block  : 'content',
                content: [
                    {
                        block  : 'wrapper-fix-width',
                        mods   : { width: '960' },
                        content: [
                            {
                                block   : 'content',
                                elem    : 'column',
                                elemMods: { position: 'left' },
                                content : []
                            },
                            {
                                block   : 'content',
                                elem    : 'column',
                                elemMods: { position: 'right' },
                                content : []
                            }
                        ]
                    }

                ]
            },
            {
                block  : 'footer',
                content: [
                    {
                        block  : 'wrapper-fix-width',
                        mods   : { width: '960' },
                        content: [
                            {
                                block   : 'footer',
                                elem    : 'column',
                                elemMods: { position: 'left' },
                                content : [
                                    {
                                        block  : 'contacts',
                                        mods   : { color: 'e5e5e5' },
                                        content: [
                                            {
                                                elem   : 'phone',
                                                content: [
                                                    {
                                                        elem   : 'phone-city-code',
                                                        content: '812'
                                                    },
                                                    {
                                                        elem   : 'phone-number',
                                                        content: '320-02-60'
                                                    }
                                                ]
                                            },
                                            {
                                                elem   : 'link',
                                                content: {
                                                    block  : 'b-link',
                                                    mods   : { pseudo: 'yes' },
                                                    content: 'Обратный звонок'
                                                }
                                            },
                                            {
                                                elem   : 'address',
                                                content: 'Санкт-Петербург, ул. Профессора Качалова, 8'
                                            }
                                        ]
                                    },
                                    {
                                        block  : 'copyright',
                                        content: 'ООО «Производственно-торговая Компания Хантер — производство и продажа надувных лодок Хантер» '
                                    }
                                ]
                            },
                            {
                                block   : 'footer',
                                elem    : 'column',
                                elemMods: { position: 'center' },
                                content : [
                                    {
                                        block: 'search'
                                    },
                                    {
                                        block  : 'menu',
                                        content: [
                                            {
                                                elem: 'item',
                                                name: 'Вакансии',
                                                url : '/vacancies/'
                                            },
                                            {
                                                elem: 'item',
                                                name: 'Отзывы',
                                                url : '/feedback/'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                block   : 'footer',
                                elem    : 'column',
                                elemMods: { position: 'right' },
                                content : [
                                    {
                                        block     : 'studio-idei',
                                        mods      : { color: '865151' },
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
