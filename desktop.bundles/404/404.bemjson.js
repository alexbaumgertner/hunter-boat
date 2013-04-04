({
    block  : 'b-page',
    title  : '404',
    head   : [
        { elem: 'css', url: '_404.css', ie: false},
        { elem: 'css', url: '_404', ie: true },
        /*{ block: 'i-jquery', elem: 'core'},*/
        { elem: 'js', url: 'jquery-1.7.2.js'},
        { elem: 'js', url: '_404.js'},
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
                                                    content: { block: 'price', mods: { currency: 'dot-dash' }, value: '95000' }
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
            block: 'not-found',
            content: [
                {
                    elem: 'header',
                    content: 'Ошибка 404'
                },
                {
                    elem: 'content',
                    content: 'Неправильно набран адрес, или такой страницы не существует.'
                }
            ]
        }
    ]
})
