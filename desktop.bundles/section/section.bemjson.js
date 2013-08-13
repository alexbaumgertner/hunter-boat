({
    block: 'b-page',
    title: 'section',
    head: [
        { elem: 'css', url: '_section.css', ie: false},
        { elem: 'css', url: '_section', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_section.js'}
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
                                                        elemMods: { section: 'catalog', state: 'current' },
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
                            elemMods: { position: 'left' },
                            content: [
                                {
                                    block: 'catalog-links',
                                    content: [
                                        {
                                            elem: 'title',
                                            content: {
                                                block: 'b-link',
                                                url: '/catalog/',
                                                content: 'Каталог'
                                            }
                                        },
                                        {
                                            elem: 'list',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    elemMods: { section: 'new' },
                                                    content: { block: 'b-link', url: '/new/', content: {
                                                        block: 'catalog-icon', mods: { type: 'new' }
                                                    } }
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { section: 'pop' },
                                                    content: { block: 'b-link', url: '/pop/', content: {
                                                        block: 'catalog-icon', mods: { type: 'pop' }
                                                    } }
                                                },
                                                {
                                                    elem: 'item',
                                                    elemMods: { section: 'rec' },
                                                    content: { block: 'b-link', url: '/rec/', content: {
                                                        block: 'catalog-icon', mods: { type: 'rec' }
                                                    } }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'catalog-menu',
                                    content: [
                                        {
                                            elem: 'section',
                                            content: [
                                                {
                                                    elem: 'section-header',
                                                    content: 'Надувные лодки',
                                                    url: '/catalog/boats/'
                                                },
                                                {
                                                    elem: 'list',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: 'Гребные',
                                                            url: '/catalog/boats/inflatable/rowing/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: 'Моторные',
                                                            url: '/catalog/boats/inflatable/motor/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: 'Моторно-гребные',
                                                            url: '/catalog/boats/inflatable/motor-rowing/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: '«Люкс»',
                                                            url: '/catalog/boats/inflatable/lux/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            elemMods: { marker: 'percent' },
                                                            content: 'Уценка',
                                                            url: '/catalog/boats/inflatable/markdown/'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'section',
                                            content: [
                                                {
                                                    elem: 'section-header',
                                                    content: 'Подвесные моторы',
                                                    url: '/catalog/boats/inflatable/'
                                                },
                                                {
                                                    elem: 'list',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: 'Гребные',
                                                            url: '/catalog/boats/section/inflatable/rowing/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: 'Моторные',
                                                            url: '/catalog/boats/section/inflatable/motor/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: 'Моторно-гребные',
                                                            url: '/catalog/boats/section/inflatable/motor-rowing/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: '«Люкс»',
                                                            url: '/catalog/boats/section/inflatable/lux/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: 'Уценка',
                                                            url: '/catalog/boats/section/inflatable/markdown/'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'section',
                                            content: [
                                                {
                                                    elem: 'section-header',
                                                    content: 'Электромоторы',
                                                    url: '/catalog/boats/inflatable/'
                                                },
                                                {
                                                    elem: 'list',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: 'Nissamaran',
                                                            url: '/catalog/boats/section/inflatable/rowing/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: 'HDX',
                                                            url: '/catalog/boats/section/inflatable/motor/'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'section',
                                            content: [
                                                {
                                                    elem: 'section-header',
                                                    content: 'Аксессуары к лодкам',
                                                    url: '/catalog/boats/аксессуары/'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'section',
                                            content: [
                                                {
                                                    elem: 'section-header',
                                                    content: 'Спасательные жилеты',
                                                    url: '/catalog/boats/спасжилеты/'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'section',
                                            content: [
                                                {
                                                    elem: 'section-header',
                                                    content: 'Тенты к надувным лодкам',
                                                    url: '/catalog/boats/тенты/'
                                                },
                                                {
                                                    elem: 'list',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: 'Носовые',
                                                            url: '/catalog/тенты/носовые/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: 'Трансформеры',
                                                            url: '/catalog/тенты/трансформеры/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: 'Транспортировочные',
                                                            url: '/catalog/тенты/транспортировочные/'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: 'Тент-крыша',
                                                            url: '/catalog/тенты/крыша/'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                { 
                                    block: 'info-blocks', 
                                    content: [
                                   
                                    {
                                        block: 'info-block',
                                        mods: { type: 'shipping' },
                                        content: [
                                            {
                                                elem: 'photo'
                                            },
                                            {
                                                elem: 'title',
                                                content: 'Доставка'
                                            },
                                            {
                                                elem: 'desc',
                                                content: 'Доставка транспортными компаниями и курьером почтой Росии'
                                            },
                                            {
                                                elem: 'link',
                                                content: {
                                                    block: 'b-link',
                                                    url: '/shipping/',
                                                    content: 'Подробнее о доставке'
                                                }
                                            }
                                        ]
                                }
                                    ] 
                                }
                            ]
                        },
                        {
                            block: 'content',
                            elem: 'column',
                            elemMods: { position: 'right' },
                            content: [
                                {
                                    block: 'catalog-page',
                                    js: true,
                                    content: [
                                        {
                                            elem: 'header',
                                            content: 'Надувные лодки'
                                        },
                                        {
                                            elem: 'menu',
                                            content: [
                                                {
                                                    elem: 'menu-item',
                                                    elemMods: { state: 'current', sortProperty: 'type' },
                                                    content: { elem: 'menu-item-title', content: 'по типу' }
                                                },

                                                {
                                                    elem: 'menu-item',
                                                    elemMods: { sortProperty: 'price', order: 'desc' },
                                                    content: { elem: 'menu-item-title', content: 'по цене' }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'content',
                                            content: [
                                                {
                                                    block: 'catalog-section',
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            content: [
                                                                {
                                                                    elem: 'header-inner',
                                                                    content: [
                                                                        {
                                                                            elem: 'title',
                                                                            content: 'Гребные'
                                                                        },
                                                                        {
                                                                            elem: 'counter',
                                                                            content: '3'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'header-line'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'list',
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка моторная ЛЮКС', price: 82326 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка моторная ЛЮКС',
                                                                        price: 82326
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка надувная', price: 98965 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка надувная',
                                                                        price: 98965
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Гребная лодка', price: 46566 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Гребная лодка',
                                                                        price: 46566

                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка ПВХ', price: 75799 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка ПВХ',
                                                                        price: 75799
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка моторная ЛЮКС', price: 85876 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка моторная ЛЮКС',
                                                                        price: 85876
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'catalog-section',
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            content: [
                                                                {
                                                                    elem: 'header-inner',
                                                                    content: [
                                                                        {
                                                                            elem: 'title',
                                                                            content: 'Моторные'
                                                                        },
                                                                        {
                                                                            elem: 'counter',
                                                                            content: '7'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'header-line'
                                                                }

                                                            ]
                                                        },
                                                        {
                                                            elem: 'list',
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка моторная ЛЮКС', price: 82326 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка моторная ЛЮКС',
                                                                        price: 82326
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка надувная', price: 98965 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка надувная',
                                                                        price: 98965
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Гребная лодка', price: 46566 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Гребная лодка',
                                                                        price: 46566

                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка ПВХ', price: 75799 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка ПВХ',
                                                                        price: 75799
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка моторная ЛЮКС', price: 85876 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка моторная ЛЮКС',
                                                                        price: 85876
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка моторная ЛЮКС', price: 82326 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка моторная ЛЮКС',
                                                                        price: 82326
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка надувная', price: 98965 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка надувная',
                                                                        price: 98965
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Гребная лодка', price: 46566 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Гребная лодка',
                                                                        price: 46566

                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка ПВХ', price: 75799 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка ПВХ',
                                                                        price: 75799
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка моторная ЛЮКС', price: 85876 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка моторная ЛЮКС',
                                                                        price: 85876
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'catalog-section',
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            content: [
                                                                {
                                                                    elem: 'header-inner',
                                                                    content: [
                                                                        {
                                                                            elem: 'title',
                                                                            content: 'Моторно-гребные'
                                                                        },
                                                                        {
                                                                            elem: 'counter',
                                                                            content: '4'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'header-line'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'list',
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка моторная ЛЮКС', price: 82326 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка моторная ЛЮКС',
                                                                        price: 82326
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка надувная', price: 98965 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка надувная',
                                                                        price: 98965
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Гребная лодка', price: 46566 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Гребная лодка',
                                                                        price: 46566

                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка ПВХ', price: 75799 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка ПВХ',
                                                                        price: 75799
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка моторная ЛЮКС', price: 85876 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка моторная ЛЮКС',
                                                                        price: 85876
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'catalog-section',
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            content: [
                                                                {
                                                                    elem: 'header-inner',
                                                                    content: [
                                                                        {
                                                                            elem: 'title',
                                                                            content: 'Люкс'
                                                                        },
                                                                        {
                                                                            elem: 'counter',
                                                                            content: '30'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'header-line'
                                                                }

                                                            ]
                                                        },
                                                        {
                                                            elem: 'list',
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка моторная ЛЮКС', price: 82326 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка моторная ЛЮКС',
                                                                        price: 82326
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка надувная', price: 98965 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка надувная',
                                                                        price: 98965
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Гребная лодка', price: 46566 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Гребная лодка',
                                                                        price: 46566

                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка ПВХ', price: 75799 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка ПВХ',
                                                                        price: 75799
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: [
                                                                        { block: 'i-sortable', elem: 'item', js: { 'type': 'Лодка моторная ЛЮКС', price: 85876 } }
                                                                    ],
                                                                    content: {
                                                                        block: 'product-card',
                                                                        desc: 'Лодка моторная ЛЮКС',
                                                                        price: 85876
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
