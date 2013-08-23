({
    block: 'b-page',
    title: 'how-to-buy',
    head: [
        { elem: 'css', url: '_how-to-buy.css', ie: false},
        { elem: 'css', url: '_how-to-buy', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_how-to-buy.js'}
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
                                                mix: [
                                                    { block: 'call-request', js: { id: 'call' } },
                                                    { block: 'call-request', elem: 'opener' }
                                                ],
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
                                                        name: 'Фотоальбомы',
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
                                            elemMods: { section: 'catalog', state: 'current' },
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
                                    block: 'how-to-buy-page',
                                    content: [
                                        {
                                            elem: 'header',
                                            mix: [{ block: 'patternizer', js: { 'data-pattern': 'img/headers/How-to-buy.jpg' } }],
                                            content: 'Как купить лодку'
                                        },
                                        {
                                            elem: 'content',
                                            content: [
                                                {
                                                    elem: 'section',
                                                    attrs: { style: 'height: 440px; position: relative;' },
                                                    content: [
                                                        {
                                                            elem: 'section-header',
                                                            content: 'Сделать заказ на сайте'
                                                        },
                                                        {
                                                            elem: 'section-text',
                                                            attrs: { style: 'width: 240px;' },
                                                            content: {
                                                                block: 'b-text',
                                                                content: [
                                                                    {
                                                                        elem: 'p',
                                                                        content: [
                                                                            'Выбирайте товары в каталоге, добавляйте их в заказ и оформляйте его без регистрации в, ',
                                                                            { block: 'b-link', url: '/', content: 'интернет-магазине' },
                                                                            ' «HunterBoat». '
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem: 'p',
                                                                        content: 'Наши менеджеры отреагируют на ваш заказ в течение одного рабочего дня и обязательно свяжутся с вами!'
                                                                    },
                                                                    {
                                                                        elem: 'p',
                                                                        attrs: { style: 'margin-top: 50px;font-size: 17px;' },
                                                                        content: [
                                                                            'Оптовикам ',
                                                                            { block: 'b-link', url: '/dealers.html', content: 'сюда' }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem: 'img',
                                                                        attrs: {
                                                                            src: 'img/content/how-to-buy/how-to-buy.png',
                                                                            alt: 'В карточке товара нажмите Заказать, потом перейдите в корзину',
                                                                            style: 'position: absolute; top: -50px; left: 203px;'
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'section',
                                                    content: [
                                                        {
                                                            elem: 'section-column',
                                                            content: [
                                                                {
                                                                    elem: 'section-header',
                                                                    content: 'или по телефону'
                                                                },
                                                                {
                                                                    elem: 'section-text',
                                                                    content: {
                                                                        block: 'b-text',
                                                                        content: [
                                                                            {
                                                                                elem: 'p',
                                                                                content: [
                                                                                    'Позвоните по телефону ',
                                                                                    { elem: 'strong', content: '+7(812) 320-02-60' },
                                                                                    ' и сделайте заказ у наших менеджеров.'
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'p',
                                                                                content: [
                                                                                    'Или закажите ', {
                                                                                        block: 'b-link',
                                                                                        mods: { pseudo: 'yes' },
                                                                                        mix: [
                                                                                            { block: 'call-request', js: { id: 'call' } },
                                                                                            { block: 'call-request', elem: 'opener' }
                                                                                        ],
                                                                                        content: 'обратный звонок',
                                                                                        url: ''
                                                                                    },
                                                                                    ' и мы сами вам позвоним в удобное для вас время.'
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'section-column',
                                                            content: [
                                                                {
                                                                    elem: 'section-header',
                                                                    content: '..или купить в магазине '
                                                                },
                                                                {
                                                                    elem: 'section-text',
                                                                    content: {
                                                                        block: 'b-text',
                                                                        content: [
                                                                            {
                                                                                elem: 'p',
                                                                                content: 'Купить лодки «Хантер» можно в магазинах Санкт-Петербурга и Москвы.'
                                                                            },
                                                                            {
                                                                                elem: 'p',
                                                                                attrs: {
                                                                                    style: 'margin-top: 30px;'
                                                                                },
                                                                                content: { block: 'b-link', url: '/where-to-buy.html', content: 'Адреса магазинов' }
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
                                                mix: [
                                                    { block: 'call-request', js: { id: 'call' } },
                                                    { block: 'call-request', elem: 'opener' }
                                                ],
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
        },
        {
            block: 'call-request',
            js: { id: 'call' },
            content: {
                elem: 'form',
                elemMods: { visibility: 'hidden' },
                content: [
                    {
                        elem: 'closer',
                        content: 'x'
                    },
                    {
                        elem: 'name',
                        content: {
                            block: 'input',
                            mods: { reqiured: 'yes' },
                            name: 'name',
                            placeholder: 'Ваше имя'
                        }
                    },
                    {
                        elem: 'phone',
                        content: {
                            block: 'input',
                            mods: { reqiured: 'yes' },
                            name: 'phone',
                            placeholder: 'Телефон'
                        }
                    },
                    {
                        elem: 'button',
                        content: { block: 'button', mods: { type: 'submit' }, content: 'Позвоните мне' }
                    }
                ]
            }
        }
    ]
})
