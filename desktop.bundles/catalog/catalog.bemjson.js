({
    block  : 'b-page',
    title  : 'catalog',
    head   : [
        { elem: 'css', url: '_catalog.css', ie: false},
        { elem: 'css', url: '_catalog', ie: true },
        /*{ block: 'i-jquery', elem: 'core'},*/
        { elem: 'js', url: 'jquery-1.6.2.min.js'},
        { elem: 'js', url: '_catalog.js'},
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
                            content : [
                                {
                                    block  : 'buy-now-list',
                                    content: [
                                        {
                                            elem: 'item',
                                            name: 'Хантер 290 Л',
                                            url : '/catalog/333'
                                        },
                                        {
                                            elem: 'item',
                                            name: 'Лодочный мотор Yamaha 6CMHS',
                                            url : '/catalog/333'
                                        },
                                        {
                                            elem: 'item',
                                            name: 'Хантер 390 ЛЮКС',
                                            url : '/catalog/333'
                                        }
                                    ]
                                },
                                {
                                    block  : 'catalog-menu',
                                    content: [
                                        {
                                            elem   : 'header',
                                            content: 'Каталог'
                                        },
                                        {
                                            elem   : 'section',
                                            content: [
                                                {
                                                    elem   : 'section-header',
                                                    content: 'Надувные лодки',
                                                    url    : '/catalog/boats/inflatable/'
                                                },
                                                {
                                                    elem   : 'list',
                                                    content: [
                                                        {
                                                            elem   : 'item',
                                                            content: 'Гребные',
                                                            url    : '/catalog/boats/inflatable/rowing/'
                                                        },
                                                        {
                                                            elem   : 'item',
                                                            content: 'Моторные',
                                                            url    : '/catalog/boats/inflatable/motor/'
                                                        },
                                                        {
                                                            elem   : 'item',
                                                            content: 'Моторно-гребные',
                                                            url    : '/catalog/boats/inflatable/motor-rowing/'
                                                        },
                                                        {
                                                            elem   : 'item',
                                                            content: '«Люкс»',
                                                            url    : '/catalog/boats/inflatable/lux/'
                                                        },
                                                        {
                                                            elem    : 'item',
                                                            elemMods: { marker: 'percent' },
                                                            content : 'Уценка',
                                                            url     : '/catalog/boats/inflatable/markdown/'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'section',
                                            content: [
                                                {
                                                    elem   : 'section-header',
                                                    content: 'Подвесные моторы',
                                                    url    : '/catalog/boats/inflatable/'
                                                },
                                                {
                                                    elem   : 'list',
                                                    content: [
                                                        {
                                                            elem   : 'item',
                                                            content: 'Гребные',
                                                            url    : '/catalog/boats/section/inflatable/rowing/'
                                                        },
                                                        {
                                                            elem   : 'item',
                                                            content: 'Моторные',
                                                            url    : '/catalog/boats/section/inflatable/motor/'
                                                        },
                                                        {
                                                            elem   : 'item',
                                                            content: 'Моторно-гребные',
                                                            url    : '/catalog/boats/section/inflatable/motor-rowing/'
                                                        },
                                                        {
                                                            elem   : 'item',
                                                            content: '«Люкс»',
                                                            url    : '/catalog/boats/section/inflatable/lux/'
                                                        },
                                                        {
                                                            elem   : 'item',
                                                            content: 'Уценка',
                                                            url    : '/catalog/boats/section/inflatable/markdown/'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'section',
                                            content: [
                                                {
                                                    elem   : 'section-header',
                                                    content: 'Электромоторы',
                                                    url    : '/catalog/boats/inflatable/'
                                                },
                                                {
                                                    elem   : 'list',
                                                    content: [
                                                        {
                                                            elem   : 'item',
                                                            content: 'Nissamaran',
                                                            url    : '/catalog/boats/section/inflatable/rowing/'
                                                        },
                                                        {
                                                            elem   : 'item',
                                                            content: 'HDX',
                                                            url    : '/catalog/boats/section/inflatable/motor/'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'section',
                                            content: [
                                                {
                                                    elem   : 'section-header',
                                                    content: 'Аксессуары к лодкам',
                                                    url    : '/catalog/boats/аксессуары/'
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'section',
                                            content: [
                                                {
                                                    elem   : 'section-header',
                                                    content: 'Спасательные жилеты',
                                                    url    : '/catalog/boats/спасжилеты/'
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'section',
                                            content: [
                                                {
                                                    elem   : 'section-header',
                                                    content: 'Тенты к надувным лодкам',
                                                    url    : '/catalog/boats/тенты/'
                                                },
                                                {
                                                    elem   : 'list',
                                                    content: [
                                                        {
                                                            elem   : 'item',
                                                            content: 'Носовые',
                                                            url    : '/catalog/тенты/носовые/'
                                                        },
                                                        {
                                                            elem   : 'item',
                                                            content: 'Трансформеры',
                                                            url    : '/catalog/тенты/трансформеры/'
                                                        },
                                                        {
                                                            elem   : 'item',
                                                            content: 'Транспортировочные',
                                                            url    : '/catalog/тенты/транспортировочные/'
                                                        },
                                                        {
                                                            elem   : 'item',
                                                            content: 'Тент-крыша',
                                                            url    : '/catalog/тенты/крыша/'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block  : 'info-block',
                                    mods   : { type: 'shipping' },
                                    content: [
                                        {
                                            elem: 'photo'
                                        },
                                        {
                                            elem   : 'title',
                                            content: 'Доставка'
                                        },
                                        {
                                            elem   : 'desc',
                                            content: 'Доставка транспортными компаниями и курьером почтой Росии'
                                        },
                                        {
                                            elem   : 'link',
                                            content: {
                                                block  : 'b-link',
                                                url    : '/shipping/',
                                                content: 'Подробнее о доставке'
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block   : 'content',
                            elem    : 'column',
                            elemMods: { position: 'right' },
                            content : [
                                {
                                    block  : 'products-promo-carousel',
                                    content: [
                                        {
                                            elem   : 'item',
                                            content: [
                                                {
                                                    elem   : 'header',
                                                    content: 'Надувная лодка Хантер 360'
                                                },
                                                {
                                                    elem   : 'price',
                                                    content: [
                                                        { elem: 'price-old', content: '41000' },
                                                        { elem: 'price-new', content: { block: 'price', mods: { currency: 'RUB', value: '39900' } } }
                                                    ]
                                                },
                                                {
                                                    elem   : 'link-to-info',
                                                    content: { block: 'b-link', content: 'Узнать все о Хантер 360', url: '/catalog/111#all-info' }
                                                },
                                                {
                                                    elem   : 'link-to-order',
                                                    content: { block: 'b-link', content: 'Заказать', url: '/catalog/111/order' }
                                                },
                                                {
                                                    elem   : 'controlls',
                                                    content: [
                                                        { elem: 'switch' },
                                                        { elem: 'switch' },
                                                        { elem: 'switch' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block  : 'catalog-index-page',
                                    content: [
                                        {
                                            elem   : 'products',
                                            content: [
                                                {
                                                    elem   : 'menu',
                                                    content: [
                                                        {
                                                            elem    : 'menu-item',
                                                            elemMods: { state: 'current' },
                                                            content : [
                                                                {
                                                                    elem   : 'menu-item-title',
                                                                    content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'Новинки' }
                                                                },
                                                                {
                                                                    elem   : 'menu-item-counter',
                                                                    content: '3'
                                                                }
                                                            ]
                                                        },

                                                        {
                                                            elem   : 'menu-item',
                                                            content: [
                                                                {
                                                                    elem   : 'menu-item-title',
                                                                    content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'Популярное' }
                                                                },
                                                                {
                                                                    elem   : 'menu-item-counter',
                                                                    content: '3'
                                                                }
                                                            ]
                                                        },

                                                        {
                                                            elem   : 'menu-item',
                                                            content: [
                                                                {
                                                                    elem   : 'menu-item-title',
                                                                    content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'Рекомендуемое' }
                                                                },
                                                                {
                                                                    elem   : 'menu-item-counter',
                                                                    content: '3'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem   : 'products-content',
                                                    content: [
                                                        {
                                                            block  : 'catalog-section',
                                                            content: [
                                                                {
                                                                    elem   : 'list',
                                                                    content: [
                                                                        {
                                                                            elem   : 'item',
                                                                            content: {
                                                                                block: 'product-card'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            content: {
                                                                                block: 'product-card'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            content: {
                                                                                block: 'product-card'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            content: {
                                                                                block: 'product-card'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            content: {
                                                                                block: 'product-card'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            content: {
                                                                                block: 'b-link',
                                                                                mods: { pseudo: 'yes' },
                                                                                url: '/catalog/news',
                                                                                content: 'Показать все новинки'
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'catalog-section',
                                                            elem: 'header-line',
                                                            attrs: { 'style': 'width: 100%;' }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'carousels',
                                            content: [
                                                {
                                                    block  : 'catalog-section-carousel',
                                                    content: [
                                                        {
                                                            elem: 'controlls'
                                                        },
                                                        {
                                                            elem: 'header'
                                                        },
                                                        {
                                                            elem: 'item'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block  : 'catalog-section-carousel',
                                                    content: [
                                                        {
                                                            elem: 'controlls'
                                                        },
                                                        {
                                                            elem: 'header'
                                                        },
                                                        {
                                                            elem: 'item'
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
