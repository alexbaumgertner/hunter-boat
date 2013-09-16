({
    block: 'b-page',
    title: 'order-specify',
    head: [
        { elem: 'css', url: '_order-specify.css', ie: false},
        { elem: 'css', url: '_order-specify', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'_order-specify.js'},
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
                                                elemMods: { state: 'current' },
                                                url: '/order.html',
                                                content: 'В заказе:'
                                            }
                                        },
                                        {
                                            elem: 'info',
                                            content: [
                                                {
                                                    elem: 'text',
                                                    content: ['товаров', { elem: 'total-products', content: 3 },  'на сумму']
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
                                    block: 'order-page',
                                    content: [
                                        {
                                            elem: 'menu',
                                            content: [
                                                {
                                                    elem: 'menu-item',
                                                    elemMods: { state: 'current' },
                                                    content: 'Уточнение заказа'
                                                },
                                                {
                                                    elem: 'menu-limiter'
                                                },
                                                {
                                                    elem: 'menu-item',
                                                    content: 'Авторизация'
                                                },
                                                {
                                                    elem: 'menu-limiter'
                                                },
                                                {
                                                    elem: 'menu-item',
                                                    content: 'Параметры заказа'
                                                },
                                                {
                                                    elem: 'menu-limiter'
                                                },
                                                {
                                                    elem: 'menu-item',
                                                    content: 'Подтверждение заказа'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'content',
                                            content: [
                                                {
                                                    elem: 'tab',
                                                    elemMods: { state: 'current' },
                                                    content: [
                                                        {
                                                            block: 'order-list',
                                                            content: [
                                                                {
                                                                    elem: 'header',
                                                                    content: [
                                                                        {
                                                                            elem: 'header-item',
                                                                            mix: [
                                                                                {  elem: 'item-photo' }
                                                                            ],
                                                                            content: 'Товар'
                                                                        },
                                                                        {
                                                                            elem: 'header-item',
                                                                            mix: [
                                                                                {  elem: 'item-desc' }
                                                                            ],
                                                                            content: ''
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
                                                                        },
                                                                        {
                                                                            elem: 'header-item',
                                                                            mix: [
                                                                                {  elem: 'delete' }
                                                                            ],
                                                                            content: 'Удалить'
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
                                                                                    elem: 'item-photo',
                                                                                    content: { elem: 'item-img', src: 'img/catalog/boats/hunter_320_LK_LUX/photos/1_small.jpg' }
                                                                                },
                                                                                {
                                                                                    elem: 'item-desc',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'item-name',
                                                                                            content: { block: 'b-link', content: 'Надувная лодка Хантер 290 Р', url: '' }
                                                                                        },
                                                                                        {
                                                                                            elem: 'item-qualif',
                                                                                            content: {
                                                                                                block: 'color-selector',
                                                                                                content: [
                                                                                                    { elem: 'selector', content: 'серая', value: 'gray' }
                                                                                                ]
                                                                                            }

                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'counter',
                                                                                    content: { block: 'input', value: 10, name: 'delete' }
                                                                                },
                                                                                {
                                                                                    elem: 'price',
                                                                                    content: { block: 'price', value: 38790, mods: { currency: 'empty' } }
                                                                                },
                                                                                {
                                                                                    elem: 'delete',
                                                                                    content: { block: 'button', attrs: { href: 'remove?orderid=7_gray' }, mods: { type: 'delete' } }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    elem: 'item-photo',
                                                                                    content: { elem: 'item-img', src: 'img/catalog/motors/yamaha_rx600/photos/1_small.jpg' }
                                                                                },
                                                                                {
                                                                                    elem: 'item-desc',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'item-name',
                                                                                            content: { block: 'b-link', content: 'Лодочный мотор HDX T 3.6 BMS', url: '' }
                                                                                        },
                                                                                        {
                                                                                            elem: 'item-qualif',
                                                                                            content: {
                                                                                                block: 'color-selector',
                                                                                                content: [
                                                                                                    { elem: 'selector', content: 'зеленая', value: 'green' }
                                                                                                ]
                                                                                            }

                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'counter',
                                                                                    content: { block: 'input', value: 10, name: 'delete' }
                                                                                },
                                                                                {
                                                                                    elem: 'price',
                                                                                    content: { block: 'price', value: 38790, mods: { currency: 'empty' } }
                                                                                },
                                                                                {
                                                                                    elem: 'delete',
                                                                                    content: { block: 'button', mods: { type: 'delete' } }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    elem: 'item-photo',
                                                                                    content: { elem: 'item-img', src: 'img/catalog/boat-addons/jilet_007/1_small.jpg' }
                                                                                },
                                                                                {
                                                                                    elem: 'item-desc',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'item-name',
                                                                                            content: { block: 'b-link', content: 'Жилет спасательный универсальный Хантер', url: '' }
                                                                                        },
                                                                                        {
                                                                                            elem: 'item-qualif'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'counter',
                                                                                    content: { block: 'input', value: 10, name: 'delete' }
                                                                                },
                                                                                {
                                                                                    elem: 'price',
                                                                                    content: { block: 'price', value: 850, mods: { currency: 'empty' } }
                                                                                },
                                                                                {
                                                                                    elem: 'delete',
                                                                                    content: { block: 'button', mods: { type: 'delete' } }
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'total',
                                                                    content: [
                                                                        {
                                                                            elem: 'total-text',
                                                                            content: 'Стоимость заказа:'
                                                                        },
                                                                        {
                                                                            elem: 'total-value',
                                                                            content: { block: 'price', value: 999999, mods: { currency: 'empty' } }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'info',
                                                                    content: 'Обращаем Ваше внимание, что окончательная стоимость заказа, если в нем присутствуют товары и/или услуги, участвующие в акции, будет подтверждена после обработки заказа сотрудником Компании.'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'next',
                                                            content: { block: 'button', mods: { type: 'submit' }, content: 'Далее' }
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
