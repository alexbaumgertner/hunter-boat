({
    block: 'b-page',
    title: 'where-to-buy',
    head: [
        { elem: 'css', url: '_where-to-buy.css', ie: false},
        { elem: 'css', url: '_where-to-buy', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_where-to-buy.js'}
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
                                            name: 'Как купить',
                                            url: '/how-to-buy.html'
                                        },
                                        {
                                            elem: 'item',
                                            elemMods: { state: 'current' },
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
                                    block: 'where-to-by-page',
                                    content: [
                                        {
                                            elem: 'header',
                                            mix: [
                                                { block: 'patternizer', js: { 'data-pattern': 'img/headers/Where-to-buy.jpg' } }
                                            ],
                                            content: 'ГДЕ КУПИТЬ'
                                        },
                                        {
                                            elem: 'markets',
                                            content: [
                                                {
                                                    elem: 'column',
                                                    content: [
                                                        {
                                                            block: 'markets-list',
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'market-card',
                                                                        mix: [
                                                                            {
                                                                                block: 'map',
                                                                                mods: { provider: 'google' },
                                                                                js: {
                                                                                    id: 'markets'
                                                                                }
                                                                            },
                                                                            {
                                                                                block: 'map',
                                                                                elem: 'marker',
                                                                                js: { center: [
                                                                                    30.399097, 59.915043
                                                                                ],
                                                                                    title: '«Hunterboat» - центральный офис',
                                                                                    icon: 'img/google-map/map__marker_hovered_no.png',
                                                                                    shadow: 'img/google-map/map__marker-shadow.png'
                                                                                }
                                                                            }
                                                                        ],
                                                                        content: [
                                                                            {
                                                                                elem: 'title',
                                                                                content: '«Hunterboat» - центральный офис'
                                                                            },
                                                                            {
                                                                                elem: 'address',
                                                                                content: 'ул. Профессора Качалова. д.8 (Завод СПОРТ) '
                                                                            },
                                                                            {
                                                                                elem: 'phones',
                                                                                content: [
                                                                                    'Тел: ', {
                                                                                        elem: 'phone',
                                                                                        content: '(812) 654-32-57'
                                                                                    }, '; '
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'site',
                                                                                content: {
                                                                                    block: 'b-link',
                                                                                    content: 'www.hunterboat.ru',
                                                                                    url: '/'
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'market-card',
                                                                        mix: [
                                                                            {
                                                                                block: 'map',
                                                                                mods: { provider: 'google' },
                                                                                js: {
                                                                                    id: 'markets'
                                                                                }
                                                                            },
                                                                            {
                                                                                block: 'map',
                                                                                elem: 'marker',
                                                                                js: { center: [
                                                                                    30.464512, 59.919211
                                                                                ],
                                                                                    title: 'Магазин «АктивФиш»',
                                                                                    icon: 'img/google-map/map__marker_hovered_no.png',
                                                                                    shadow: 'img/google-map/map__marker-shadow.png'
                                                                                }
                                                                            }
                                                                        ],
                                                                        content: [
                                                                            {
                                                                                elem: 'title',
                                                                                content: 'Магазин «АктивФиш»'
                                                                            },
                                                                            {
                                                                                elem: 'address',
                                                                                content: 'м. Большевиков, ул. Коллонтай, д.18, ТК «Торговый двор»'
                                                                            },
                                                                            {
                                                                                elem: 'phones',
                                                                                content: [
                                                                                    'Тел: ', {
                                                                                        elem: 'phone',
                                                                                        content: '8 (911) 741-10-42'
                                                                                    }, '; '
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'site',
                                                                                content: {
                                                                                    block: 'b-link',
                                                                                    content: 'www.aktivfish.ru ',
                                                                                    url: 'www.aktivfish.ru '
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-text',
                                                            content: { elem: 'h5', content: 'Сеть магазинов «Лодки-Питер»' }
                                                        },
                                                        {
                                                            block: 'markets-list',
                                                            attrs: {
                                                                style: 'margin: 15px 0 0 0;'
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'market-card',
                                                                        mix: [
                                                                            {
                                                                                block: 'map',
                                                                                mods: { provider: 'google' },
                                                                                js: {
                                                                                    id: 'markets'
                                                                                }
                                                                            },
                                                                            {
                                                                                block: 'map',
                                                                                elem: 'marker',
                                                                                js: {
                                                                                    center: [30.389009, 59.96974],
                                                                                    title: 'Сеть магазинов «Лодки-Питер»',
                                                                                    icon: 'img/google-map/map__marker_hovered_no.png',
                                                                                    shadow: 'img/google-map/map__marker-shadow.png'
                                                                                }
                                                                            }
                                                                        ],
                                                                        content: [

                                                                            {
                                                                                elem: 'address',
                                                                                content: 'Полюстровский проспект, д. 45'
                                                                            },
                                                                            {
                                                                                elem: 'phones',
                                                                                content: [
                                                                                    'Тел: ', {
                                                                                        elem: 'phone',
                                                                                        content: '(812) 600-11-84'
                                                                                    }, '; ', {
                                                                                        elem: 'phone',
                                                                                        content: '(812) 600-11-85'
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'site',
                                                                                content: {
                                                                                    block: 'b-link',
                                                                                    content: 'www.lodki-piter.ru ',
                                                                                    url: 'www.lodki-piter.ru '
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'market-card',
                                                                        mix: [
                                                                            {
                                                                                block: 'map',
                                                                                mods: { provider: 'google' },
                                                                                js: {
                                                                                    id: 'markets'
                                                                                }
                                                                            },
                                                                            {
                                                                                block: 'map',
                                                                                elem: 'marker',
                                                                                js: {
                                                                                    center: [30.389009, 59.96974],
                                                                                    title: 'Сеть магазинов «Лодки-Питер»',
                                                                                    icon: 'img/google-map/map__marker_hovered_no.png',
                                                                                    shadow: 'img/google-map/map__marker-shadow.png'
                                                                                }
                                                                            }
                                                                        ],
                                                                        content: [

                                                                            {
                                                                                elem: 'address',
                                                                                content: 'Полюстровский проспект, д. 45'
                                                                            },
                                                                            {
                                                                                elem: 'phones',
                                                                                content: [
                                                                                    'Тел: ', {
                                                                                        elem: 'phone',
                                                                                        content: '(812) 600-11-84'
                                                                                    }, '; ', {
                                                                                        elem: 'phone',
                                                                                        content: '(812) 600-11-85'
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'site',
                                                                                content: {
                                                                                    block: 'b-link',
                                                                                    content: 'www.lodki-piter.ru ',
                                                                                    url: 'www.lodki-piter.ru '
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'market-card',
                                                                        mix: [
                                                                            {
                                                                                block: 'map',
                                                                                mods: { provider: 'google' },
                                                                                js: {
                                                                                    id: 'markets'
                                                                                }
                                                                            },
                                                                            {
                                                                                block: 'map',
                                                                                elem: 'marker',
                                                                                js: {
                                                                                    center: [30.389009, 59.96974],
                                                                                    title: 'Сеть магазинов «Лодки-Питер»',
                                                                                    icon: 'img/google-map/map__marker_hovered_no.png',
                                                                                    shadow: 'img/google-map/map__marker-shadow.png'
                                                                                }
                                                                            }
                                                                        ],
                                                                        content: [

                                                                            {
                                                                                elem: 'address',
                                                                                content: 'Полюстровский проспект, д. 45'
                                                                            },
                                                                            {
                                                                                elem: 'phones',
                                                                                content: [
                                                                                    'Тел: ', {
                                                                                        elem: 'phone',
                                                                                        content: '(812) 600-11-84'
                                                                                    }, '; ', {
                                                                                        elem: 'phone',
                                                                                        content: '(812) 600-11-85'
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'site',
                                                                                content: {
                                                                                    block: 'b-link',
                                                                                    content: 'www.lodki-piter.ru ',
                                                                                    url: 'www.lodki-piter.ru '
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'market-card',
                                                                        mix: [
                                                                            {
                                                                                block: 'map',
                                                                                mods: { provider: 'google' },
                                                                                js: {
                                                                                    id: 'markets'
                                                                                }
                                                                            },
                                                                            {
                                                                                block: 'map',
                                                                                elem: 'marker',
                                                                                js: {
                                                                                    center: [30.389009, 59.96974],
                                                                                    title: 'Сеть магазинов «Лодки-Питер»',
                                                                                    icon: 'img/google-map/map__marker_hovered_no.png',
                                                                                    shadow: 'img/google-map/map__marker-shadow.png'
                                                                                }
                                                                            }
                                                                        ],
                                                                        content: [

                                                                            {
                                                                                elem: 'address',
                                                                                content: 'Полюстровский проспект, д. 45'
                                                                            },
                                                                            {
                                                                                elem: 'phones',
                                                                                content: [
                                                                                    'Тел: ', {
                                                                                        elem: 'phone',
                                                                                        content: '(812) 600-11-84'
                                                                                    }, '; ', {
                                                                                        elem: 'phone',
                                                                                        content: '(812) 600-11-85'
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'site',
                                                                                content: {
                                                                                    block: 'b-link',
                                                                                    content: 'www.lodki-piter.ru ',
                                                                                    url: 'www.lodki-piter.ru '
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
                                                    attrs: { style: 'margin-top: -60px;' },
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            content: 'Санкт-Петербург'
                                                        },
                                                        {
                                                            block: 'map',
                                                            mods: { provider: 'google' },
                                                            js: {
                                                                id: 'markets',
                                                                center: [
                                                                    59.917565, 30.388754
                                                                ],
                                                                zoom: 10
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },

                                        {
                                            elem: 'affiliates',
                                            content: [
                                                {
                                                    elem: 'column',
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            content: 'Москва'
                                                        },
                                                        {
                                                            block: 'markets-list',
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'market-card',
                                                                            content: [
                                                                                {
                                                                                    elem: 'title',
                                                                                    content: 'Магазин «Лодки & Палатки»'
                                                                                },
                                                                                {
                                                                                    elem: 'address',
                                                                                    content: '14 км МКАД, Птичий рынок, павильон 34-35A'
                                                                                },
                                                                                {
                                                                                    elem: 'phones',
                                                                                    content: [
                                                                                        'Тел: ', {
                                                                                            elem: 'phone',
                                                                                            content: '8-906-725-50-44'
                                                                                        }, '; ', {
                                                                                            elem: 'phone',
                                                                                            content: '8 (495) 782-33-64'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'site',
                                                                                    content: {
                                                                                        block: 'b-link',
                                                                                        content: 'www.lodki-palatki.ru',
                                                                                        url: 'http://www.lodki-palatki.ru'
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
                                                    elem: 'column',
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            content: 'Уральский и Сибирский округ'
                                                        },
                                                        {
                                                            block: 'markets-list',
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    content: [
                                                                        {
                                                                            block: 'market-card',
                                                                            content: [
                                                                                {
                                                                                    elem: 'title',
                                                                                    content: 'Спортивный магазин «СпортЕсть»'
                                                                                },
                                                                                {
                                                                                    elem: 'address',
                                                                                    content: 'Екатеринбург, улича Первомайская, дом 71, корпус «Б», офис 1'
                                                                                },
                                                                                {
                                                                                    elem: 'phones',
                                                                                    content: [
                                                                                        'Тел: ', {
                                                                                            elem: 'phone',
                                                                                            content: '+7 (343) 204-97-77'
                                                                                        }, '; ', {
                                                                                            elem: 'phone',
                                                                                            content: '+7 (343) 375-20-38'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'site',
                                                                                    content: {
                                                                                        block: 'b-link',
                                                                                        content: 'www.sportest.ru',
                                                                                        url: 'http://www.sportest.ru'
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
                                        },

                                        { block: 'line', mods: { type: 'wavy-0081bd' } },

                                        {
                                            elem: 'shipping',
                                            content: {
                                                block: 'b-text',
                                                content: [
                                                    {
                                                        elem: 'p',
                                                        content: [
                                                            'Информацию об официальном представителе в вашем городе вы можете уточнить по телефону +7 (812) 677 82 55 или по электронной почте ',
                                                            {  block: 'b-link', url: 'mailto:sales@hunterboat.ru', content: 'sales@hunterboat.ru' },
                                                            ' и ',
                                                            {  block: 'b-link', url: 'mailto:hunter@hunterboat.ru', content: 'hunter@hunterboat.ru' }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'p',
                                                        content: [
                                                            'Мы осуществляем доставку лодок «Хантер» во все регионы России, Подробнее в разделе ',
                                                            {
                                                                block: 'b-link',
                                                                url: '/delivery',
                                                                content: 'Доставка' }
                                                        ]
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
