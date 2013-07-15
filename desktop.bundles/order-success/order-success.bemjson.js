({
    block: 'b-page',
    title: 'order-success',
    head: [
        { elem: 'css', url: '_order-success.css', ie: false},
        { elem: 'css', url: '_order-success', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_order-success.js'},
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
                                    block: 'order-success-page',
                                    content: [
                                        {
                                            elem: 'column',
                                            elemMods: { position: 'left' },
                                            content: {
                                                block: 'order-success',
                                                content: [
                                                    {
                                                        elem: 'header',
                                                        content: [
                                                            'Заказ ', { elem: 'number', content: '№ 0001' }, ' успешно оформлен'
                                                        ]
                                                    },
                                                    {
                                                        elem: 'content',
                                                        content: [
                                                            {
                                                                block: 'order-list',
                                                                mods: { type: 'check' },
                                                                content: [
                                                                    {
                                                                        elem: 'header',
                                                                        content: [
                                                                            {
                                                                                elem: 'header-item',
                                                                                mix: [
                                                                                    {  elem: 'item-desc' }
                                                                                ],
                                                                                content: 'Товар'
                                                                            },
                                                                            {
                                                                                elem: 'header-item',
                                                                                mix: [
                                                                                    {  elem: 'counter' }
                                                                                ],
                                                                                content: 'Кол-во'
                                                                            },
                                                                            {
                                                                                elem: 'header-item',
                                                                                mix: [
                                                                                    {  elem: 'price' }
                                                                                ],
                                                                                content: 'Цена, руб.'
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem: 'list',
                                                                        content: [
                                                                            {
                                                                                elem: 'item',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'item-desc',
                                                                                        content: [
                                                                                            {
                                                                                                elem: 'item-name',
                                                                                                content: 'Надувная лодка Хантер 290 Р'
                                                                                            },
                                                                                            {
                                                                                                elem: 'item-qualif',
                                                                                                content: 'зеленая'
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        elem: 'counter',
                                                                                        content: '1'
                                                                                    },
                                                                                    {
                                                                                        elem: 'price',
                                                                                        content: { block: 'price', value: 308790, mods: { currency: 'empty' } }
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'item',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'item-desc',
                                                                                        content: [
                                                                                            {
                                                                                                elem: 'item-name',
                                                                                                content: 'Лодочный мотор HDX T 3.6 BMS'
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        elem: 'counter',
                                                                                        content: '3'
                                                                                    },
                                                                                    {
                                                                                        elem: 'price',
                                                                                        content: { block: 'price', value: 38790, mods: { currency: 'empty' } }
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'item',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'item-desc',
                                                                                        content: [
                                                                                            {
                                                                                                elem: 'item-name',
                                                                                                content: 'Жилет спасательный пылевлагосвето-защищенный универсальный Хантер'
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        elem: 'counter',
                                                                                        content: '10'
                                                                                    },
                                                                                    {
                                                                                        elem: 'price',
                                                                                        content: { block: 'price', value: 850, mods: { currency: 'empty' } }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem: 'total',
                                                                        mix: [
                                                                            { block: 'order-success', elem: 'total' }
                                                                        ],
                                                                        content: [
                                                                            {
                                                                                elem: 'total-text',
                                                                                content: 'Сумма:'
                                                                            },
                                                                            {
                                                                                elem: 'total-value',
                                                                                content: { block: 'price', value: 999999, mods: { currency: 'empty' } }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem: 'info',
                                                                        content: {
                                                                            block: 'order-list-info',
                                                                            content: [
                                                                                {
                                                                                    elem: 'item',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'item-title',
                                                                                            content: 'Оплата товара:'
                                                                                        },
                                                                                        {
                                                                                            elem: 'item-text',
                                                                                            content: 'оплата по карте успешно проведена'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'item',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'item-title',
                                                                                            content: 'Получение товара:'
                                                                                        },
                                                                                        {
                                                                                            elem: 'item-text',
                                                                                            content: 'самовывоз, Москва, ул. Амурская д.7., 24.03.2013'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'item',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'item-title',
                                                                                            content: 'Контактное лицо:'
                                                                                        },
                                                                                        {
                                                                                            elem: 'item-text',
                                                                                            content: 'Елизаров Максим'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'item',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'item-title',
                                                                                            content: 'Мобильный телефон:'
                                                                                        },
                                                                                        {
                                                                                            elem: 'item-text',
                                                                                            content: '+7 (906) 229-73-36'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'footer',
                                                        content: 'Спасибо!'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            elem: 'column',
                                            elemMods: { position: 'right' },
                                            content: [
                                                {
                                                    elem: 'info',
                                                    content: 'Ваш заказ обработан. Наши менедженры свяжутся с вами.'
                                                },
                                                {
                                                    elem: 'print',
                                                    content: {
                                                        block: 'b-link',
                                                        url: '#print',
                                                        content: 'распечатать чек'
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
