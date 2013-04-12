({
    block: 'b-page',
    title: 'where-to-buy',
    head: [
        { elem: 'css', url: '_where-to-buy.css', ie: false},
        { elem: 'css', url: '_where-to-buy', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'_where-to-buy.js'},
    ],
    content: [
            {
                block  : 'header',
                content: [
                    {
                        block  : 'wrapper-fix-width',
                        mods   : { width: '982' },
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
                block  : 'content',
                content: [
                    {
                        block  : 'wrapper-fix-width',
                        mods   : { width: '982' },
                        content: [
                            {
                                block   : 'content',
                                elem    : 'column',
                                elemMods: { position: 'full' },
                                content : [
                                    {
                                        block: 'where-to-by-page',
                                        content: [
                                            {
                                                elem: 'header',
                                                content: 'ГДЕ КУПИТЬ'
                                            },
                                            {
                                                elem: 'markets',
                                                content: [
                                                    {
                                                        elem   : 'column',
                                                        content: [
                                                            {
                                                                block  : 'markets-list',
                                                                content: [
                                                                    {
                                                                        elem   : 'item',
                                                                        content: {
                                                                            block  : 'market-card',
                                                                            mix    : [
                                                                                {
                                                                                    block: 'map',
                                                                                    mods : { provider: 'google' },
                                                                                    js   : {
                                                                                        id: 'markets'
                                                                                    }
                                                                                },
                                                                                {
                                                                                    block: 'map',
                                                                                    elem : 'marker',
                                                                                    js   : { center: [
                                                                                        30.399097, 59.915043
                                                                                    ],
                                                                                        title      : '«Hunterboat» - центральный офис',
                                                                                        icon       : 'img/google-map/map__marker_hovered_no.png',
                                                                                        shadow     : 'img/google-map/map__marker-shadow.png'
                                                                                    }
                                                                                }
                                                                            ],
                                                                            content: [
                                                                                {
                                                                                    elem   : 'title',
                                                                                    content: '«Hunterboat» - центральный офис'
                                                                                },
                                                                                {
                                                                                    elem   : 'address',
                                                                                    content: 'ул. Профессора Качалова. д.8 (Завод СПОРТ) '
                                                                                },
                                                                                {
                                                                                    elem   : 'phones',
                                                                                    content: [
                                                                                        'Тел: ', {
                                                                                            elem   : 'phone',
                                                                                            content: '(812) 654-32-57'
                                                                                        }, '; '
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'site',
                                                                                    content: {
                                                                                        block  : 'b-link',
                                                                                        content: 'www.hunterboat.ru',
                                                                                        url    : '/'
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        elem   : 'item',
                                                                        content: {
                                                                            block  : 'market-card',
                                                                            mix    : [
                                                                                {
                                                                                    block: 'map',
                                                                                    mods : { provider: 'google' },
                                                                                    js   : {
                                                                                        id: 'markets'
                                                                                    }
                                                                                },
                                                                                {
                                                                                    block: 'map',
                                                                                    elem : 'marker',
                                                                                    js   : { center: [
                                                                                        30.464512, 59.919211
                                                                                    ],
                                                                                        title      : 'Магазин «АктивФиш»',
                                                                                        icon: 'img/google-map/map__marker_hovered_no.png',
                                                                                        shadow: 'img/google-map/map__marker-shadow.png'
                                                                                    }
                                                                                }
                                                                            ],
                                                                            content: [
                                                                                {
                                                                                    elem   : 'title',
                                                                                    content: 'Магазин «АктивФиш»'
                                                                                },
                                                                                {
                                                                                    elem   : 'address',
                                                                                    content: 'м. Большевиков, ул. Коллонтай, д.18, ТК «Торговый двор»'
                                                                                },
                                                                                {
                                                                                    elem   : 'phones',
                                                                                    content: [
                                                                                        'Тел: ', {
                                                                                            elem   : 'phone',
                                                                                            content: '8 (911) 741-10-42'
                                                                                        }, '; '
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'site',
                                                                                    content: {
                                                                                        block  : 'b-link',
                                                                                        content: 'www.aktivfish.ru ',
                                                                                        url    : 'www.aktivfish.ru '
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                ]
                                                            },
                                                            {
                                                                block: 'b-text',
                                                                content: { elem: 'h5', content: 'Сеть магазинов «Лодки-Питер»' }
                                                            },
                                                            {
                                                                block  : 'markets-list',
                                                                attrs: {
                                                                    style: 'margin: 15px 0 0 0;'
                                                                },
                                                                content: [
                                                                    {
                                                                        elem   : 'item',
                                                                        content: {
                                                                            block  : 'market-card',
                                                                            mix    : [
                                                                                {
                                                                                    block: 'map',
                                                                                    mods : { provider: 'google' },
                                                                                    js   : {
                                                                                        id: 'markets'
                                                                                    }
                                                                                },
                                                                                {
                                                                                    block: 'map',
                                                                                    elem : 'marker',
                                                                                    js   : {
                                                                                        center: [30.389009, 59.96974],
                                                                                        title : 'Сеть магазинов «Лодки-Питер»',
                                                                                        icon  : 'img/google-map/map__marker_hovered_no.png',
                                                                                        shadow: 'img/google-map/map__marker-shadow.png'
                                                                                    }
                                                                                }
                                                                            ],
                                                                            content: [

                                                                                {
                                                                                    elem   : 'address',
                                                                                    content: 'Полюстровский проспект, д. 45'
                                                                                },
                                                                                {
                                                                                    elem   : 'phones',
                                                                                    content: [
                                                                                        'Тел: ', {
                                                                                            elem   : 'phone',
                                                                                            content: '(812) 600-11-84'
                                                                                        }, '; ', {
                                                                                            elem   : 'phone',
                                                                                            content: '(812) 600-11-85'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'site',
                                                                                    content: {
                                                                                        block  : 'b-link',
                                                                                        content: 'www.lodki-piter.ru ',
                                                                                        url    : 'www.lodki-piter.ru '
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        elem   : 'item',
                                                                        content: {
                                                                            block  : 'market-card',
                                                                            mix    : [
                                                                                {
                                                                                    block: 'map',
                                                                                    mods : { provider: 'google' },
                                                                                    js   : {
                                                                                        id: 'markets'
                                                                                    }
                                                                                },
                                                                                {
                                                                                    block: 'map',
                                                                                    elem : 'marker',
                                                                                    js   : {
                                                                                        center: [30.389009, 59.96974],
                                                                                        title : 'Сеть магазинов «Лодки-Питер»',
                                                                                        icon  : 'img/google-map/map__marker_hovered_no.png',
                                                                                        shadow: 'img/google-map/map__marker-shadow.png'
                                                                                    }
                                                                                }
                                                                            ],
                                                                            content: [

                                                                                {
                                                                                    elem   : 'address',
                                                                                    content: 'Полюстровский проспект, д. 45'
                                                                                },
                                                                                {
                                                                                    elem   : 'phones',
                                                                                    content: [
                                                                                        'Тел: ', {
                                                                                            elem   : 'phone',
                                                                                            content: '(812) 600-11-84'
                                                                                        }, '; ', {
                                                                                            elem   : 'phone',
                                                                                            content: '(812) 600-11-85'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'site',
                                                                                    content: {
                                                                                        block  : 'b-link',
                                                                                        content: 'www.lodki-piter.ru ',
                                                                                        url    : 'www.lodki-piter.ru '
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        elem   : 'item',
                                                                        content: {
                                                                            block  : 'market-card',
                                                                            mix    : [
                                                                                {
                                                                                    block: 'map',
                                                                                    mods : { provider: 'google' },
                                                                                    js   : {
                                                                                        id: 'markets'
                                                                                    }
                                                                                },
                                                                                {
                                                                                    block: 'map',
                                                                                    elem : 'marker',
                                                                                    js   : {
                                                                                        center: [30.389009, 59.96974],
                                                                                        title : 'Сеть магазинов «Лодки-Питер»',
                                                                                        icon  : 'img/google-map/map__marker_hovered_no.png',
                                                                                        shadow: 'img/google-map/map__marker-shadow.png'
                                                                                    }
                                                                                }
                                                                            ],
                                                                            content: [

                                                                                {
                                                                                    elem   : 'address',
                                                                                    content: 'Полюстровский проспект, д. 45'
                                                                                },
                                                                                {
                                                                                    elem   : 'phones',
                                                                                    content: [
                                                                                        'Тел: ', {
                                                                                            elem   : 'phone',
                                                                                            content: '(812) 600-11-84'
                                                                                        }, '; ', {
                                                                                            elem   : 'phone',
                                                                                            content: '(812) 600-11-85'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'site',
                                                                                    content: {
                                                                                        block  : 'b-link',
                                                                                        content: 'www.lodki-piter.ru ',
                                                                                        url    : 'www.lodki-piter.ru '
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        elem   : 'item',
                                                                        content: {
                                                                            block  : 'market-card',
                                                                            mix    : [
                                                                                {
                                                                                    block: 'map',
                                                                                    mods : { provider: 'google' },
                                                                                    js   : {
                                                                                        id: 'markets'
                                                                                    }
                                                                                },
                                                                                {
                                                                                    block: 'map',
                                                                                    elem : 'marker',
                                                                                    js   : {
                                                                                        center: [30.389009, 59.96974],
                                                                                        title : 'Сеть магазинов «Лодки-Питер»',
                                                                                        icon  : 'img/google-map/map__marker_hovered_no.png',
                                                                                        shadow: 'img/google-map/map__marker-shadow.png'
                                                                                    }
                                                                                }
                                                                            ],
                                                                            content: [

                                                                                {
                                                                                    elem   : 'address',
                                                                                    content: 'Полюстровский проспект, д. 45'
                                                                                },
                                                                                {
                                                                                    elem   : 'phones',
                                                                                    content: [
                                                                                        'Тел: ', {
                                                                                            elem   : 'phone',
                                                                                            content: '(812) 600-11-84'
                                                                                        }, '; ', {
                                                                                            elem   : 'phone',
                                                                                            content: '(812) 600-11-85'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'site',
                                                                                    content: {
                                                                                        block  : 'b-link',
                                                                                        content: 'www.lodki-piter.ru ',
                                                                                        url    : 'www.lodki-piter.ru '
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        elem   : 'item',
                                                                        content: {
                                                                            block  : 'market-card',
                                                                            mix    : [
                                                                                {
                                                                                    block: 'map',
                                                                                    mods : { provider: 'google' },
                                                                                    js   : {
                                                                                        id: 'markets'
                                                                                    }
                                                                                },
                                                                                {
                                                                                    block: 'map',
                                                                                    elem : 'marker',
                                                                                    js   : {
                                                                                        center: [30.389009, 59.96974],
                                                                                        title : 'Сеть магазинов «Лодки-Питер»',
                                                                                        icon  : 'img/google-map/map__marker_hovered_no.png',
                                                                                        shadow: 'img/google-map/map__marker-shadow.png'
                                                                                    }
                                                                                }
                                                                            ],
                                                                            content: [

                                                                                {
                                                                                    elem   : 'address',
                                                                                    content: 'Полюстровский проспект, д. 45'
                                                                                },
                                                                                {
                                                                                    elem   : 'phones',
                                                                                    content: [
                                                                                        'Тел: ', {
                                                                                            elem   : 'phone',
                                                                                            content: '(812) 600-11-84'
                                                                                        }, '; ', {
                                                                                            elem   : 'phone',
                                                                                            content: '(812) 600-11-85'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'site',
                                                                                    content: {
                                                                                        block  : 'b-link',
                                                                                        content: 'www.lodki-piter.ru ',
                                                                                        url    : 'www.lodki-piter.ru '
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        elem   : 'item',
                                                                        content: {
                                                                            block  : 'market-card',
                                                                            mix    : [
                                                                                {
                                                                                    block: 'map',
                                                                                    mods : { provider: 'google' },
                                                                                    js   : {
                                                                                        id: 'markets'
                                                                                    }
                                                                                },
                                                                                {
                                                                                    block: 'map',
                                                                                    elem : 'marker',
                                                                                    js   : {
                                                                                        center: [30.389009, 59.96974],
                                                                                        title : 'Сеть магазинов «Лодки-Питер»',
                                                                                        icon  : 'img/google-map/map__marker_hovered_no.png',
                                                                                        shadow: 'img/google-map/map__marker-shadow.png'
                                                                                    }
                                                                                }
                                                                            ],
                                                                            content: [

                                                                                {
                                                                                    elem   : 'address',
                                                                                    content: 'Полюстровский проспект, д. 45'
                                                                                },
                                                                                {
                                                                                    elem   : 'phones',
                                                                                    content: [
                                                                                        'Тел: ', {
                                                                                            elem   : 'phone',
                                                                                            content: '(812) 600-11-84'
                                                                                        }, '; ', {
                                                                                            elem   : 'phone',
                                                                                            content: '(812) 600-11-85'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'site',
                                                                                    content: {
                                                                                        block  : 'b-link',
                                                                                        content: 'www.lodki-piter.ru ',
                                                                                        url    : 'www.lodki-piter.ru '
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]

                                                    },
                                                    {
                                                        elem: 'column',
                                                        content: [
                                                            {
                                                                elem: 'header',
                                                                content: 'Санкт-Петербург'
                                                            },
                                                            {
                                                                block: 'map',
                                                                mods : { provider: 'google' },
                                                                js   : {
                                                                    id : 'markets',
                                                                    center: [
                                                                        59.917565, 30.388754
                                                                    ],
                                                                    zoom  : 10
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },

                                            { block: 'line', mods: { type: 'wavy-0081bd' } },

                                            {
                                                elem: 'shipping',
                                                content: {
                                                    block: 'b-text',
                                                    content: [
                                                        {
                                                            elem: 'h3',
                                                            content: 'Не можете найти лодку Хантер в вашем городе?'
                                                        },
                                                        {
                                                            elem: 'p',
                                                            content: 'Мы осуществляем доставку во все регионы России'
                                                        },
                                                        {
                                                            block: 'b-link',
                                                            url: '/shipping/',
                                                            content: 'Подробнее о доставке'
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
                block  : 'footer',
                content: [
                    {
                        block  : 'wrapper-fix-width',
                        mods   : { width: '982' },
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
                                        mods      : { color: '909090' },
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
