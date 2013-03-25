({
    block  : 'b-page',
    title  : 'item',
    head   : [
        { elem: 'css', url: '_item.css', ie: false},
        { elem: 'css', url: '_item', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_item.js'},
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
                                    block  : 'catalog-links',
                                    content: [
                                        {
                                            elem   : 'title',
                                            content: {
                                                block  : 'b-link',
                                                url    : '/catalog/',
                                                content: 'Каталог'
                                            }
                                        },
                                        {
                                            elem   : 'list',
                                            content: [
                                                {
                                                    elem    : 'item',
                                                    elemMods: { section: 'new' },
                                                    content : { block: 'b-link', url: '/new/', content: {
                                                        block: 'catalog-icon', mods: { type: 'new' }
                                                    } }
                                                },
                                                {
                                                    elem    : 'item',
                                                    elemMods: { section: 'pop' },
                                                    content : { block: 'b-link', url: '/pop/', content: {
                                                        block: 'catalog-icon', mods: { type: 'pop' }
                                                    } }
                                                },
                                                {
                                                    elem    : 'item',
                                                    elemMods: { section: 'rec' },
                                                    content : { block: 'b-link', url: '/rec/', content: {
                                                        block: 'catalog-icon', mods: { type: 'rec' }
                                                    } }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block  : 'catalog-menu',
                                    content: [
                                        {
                                            elem    : 'section',
                                            elemMods: { state: 'current' },
                                            content : [
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
                                    block  : 'catalog-item',
                                    content: [
                                        {
                                            elem   : 'card',
                                            content: {
                                                block  : 'catalog-item-card',
                                                content: [
                                                    {
                                                        elem   : 'header',
                                                        content: [
                                                            {
                                                                elem   : 'header-text',
                                                                content: 'Надувная лодка Хантер 320 ЛК ЛЮКС'
                                                            },
                                                            {
                                                                elem   : 'header-icon',
                                                                content: { block: 'catalog-icon', mods: { type: 'new' } }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem   : 'buy-section',
                                                        content: [
                                                            {
                                                                elem   : 'price',
                                                                content: [
                                                                    {
                                                                        elem   : 'price-old',
                                                                        content: {
                                                                            block: 'price', mods: { currency: 'empty' }, value: 41000
                                                                        }
                                                                    },
                                                                    {
                                                                        elem   : 'price-new',
                                                                        content: {
                                                                            block: 'price', mods: { currency: 'dot-dash' }, value: 39900
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                elem: 'buy-button',
                                                                content: { block: 'button', mods: { type: 'buy' }, content: 'Заказать' }
                                                            },
                                                            {
                                                                elem: 'markdown-link',
                                                                content: {
                                                                    block: 'b-link',
                                                                    content: 'Купить эту лодку с уценкой',
                                                                    url: '/catalog/boats/hunter_320_LK_LUX/markdown'
                                                                }
                                                            }

                                                        ]
                                                    },
                                                    {
                                                        elem   : 'photos-list',
                                                        content: [
                                                            {
                                                                elem: 'photos-list-item',
                                                                mods: { state: 'current' },
                                                                url : 'img/catalog/boats/hunter_320_LK_LUX/photos/1_small.jpg'
                                                            },
                                                            {
                                                                elem: 'photos-list-item',
                                                                url : 'img/catalog/boats/hunter_320_LK_LUX/photos/2_small.jpg'
                                                            },
                                                            {
                                                                elem: 'photos-list-item',
                                                                url : 'img/catalog/boats/hunter_320_LK_LUX/photos/3_small.jpg'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'photo-big',
                                                        url : 'img/catalog/boats/hunter_320_LK_LUX/photos/1_medium.jpg'
                                                    },
                                                    {
                                                        elem   : 'colors',
                                                        content: [
                                                            { elem: 'colors-item', elemMods: { color: 'a0a0a0', state: 'current' }, content: 'серая' },
                                                            { elem: 'colors-item', elemMods: { color: '377530' }, content: 'зеленая' },
                                                        ]
                                                    },
                                                    {
                                                        elem   : 'links',
                                                        content: [
                                                            {
                                                                block   : 'b-link',
                                                                url    : '/catalog/boats/hunter_320_LK_LUX/photos',
                                                                content: 'Все фотографии Хантер 320 ЛК ЛЮКС'
                                                            }
                                                        ]
                                                    },
                                                    { elem: 'control', mods: { direction: 'prev' } },
                                                    { elem: 'control', mods: { direction: 'next' } }
                                                ]
                                            }
                                        },
                                        {
                                            elem   : 'info',
                                            content: [
                                                {
                                                    elem   : 'info-menu-list',
                                                    content: [
                                                        { elem: 'info-menu-item', content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'Описание', url: '/catalog/boats/1#desc', js: { section: 'desc' } } },
                                                        { elem: 'info-menu-item', elemMods: { state: 'current' }, content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'Характеристики', url: '/catalog/boats/1#spec', js: { section: 'spec' } } },
                                                        { elem: 'info-menu-item', content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'Комплектация', url: '/catalog/boats/1#set', js: { section: 'set' } } },
                                                        { elem: 'info-menu-item', content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'Отзывы', url: '/catalog/boats/1#reviews', js: { section: 'reviews' } } },
                                                    ]
                                                },
                                                {
                                                    elem: 'info-content-list',

                                                    content: [
                                                        {
                                                            elem: 'info-content-item',
                                                            elemMods: { state: 'current' },
                                                            content: {
                                                                block: 'enumeration-list',
                                                                mods: { spaceStyle: 'dotted' },
                                                                content: [
                                                                    {
                                                                        elem: 'item',
                                                                        key: 'Вес',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem : 'item',
                                                                        key  : 'Грузоподъемность',
                                                                        value: '450 кг'
                                                                    },
                                                                    {
                                                                        elem : 'item',
                                                                        key  : 'Диаметр баллона',
                                                                        value: '0543245 кг'
                                                                    },
                                                                    {
                                                                        elem : 'item',
                                                                        key  : 'Количество отсеков',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem : 'item',
                                                                        key  : 'Вес',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem : 'item',
                                                                        key  : 'Крепление банок',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem : 'item',
                                                                        key  : 'Пассажировместимость',
                                                                        value: '3 человека'
                                                                    },
                                                                    {
                                                                        elem : 'item',
                                                                        key  : 'Пол',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem : 'item',
                                                                        key  : 'Транец',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem : 'item',
                                                                        key  : 'Ширина',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem : 'item',
                                                                        key  : 'Длина',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem : 'item',
                                                                        key  : 'Рекомендованная мощность мотора кг',
                                                                        value: '8 лс'
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            elem: 'info-content-item',
                                                            content: {
                                                                block: 'product-reviews',
                                                                content: [
                                                                    {
                                                                        elem: 'review'
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block  : 'catalog-section-carousel',
                                    content: [
                                        { elem: 'control', elemMods: { direction: 'prev' }},
                                        { elem: 'control', elemMods: { direction: 'next' }},
                                        {
                                            elem   : 'header',
                                            content: [
                                                { elem: 'title', content: { block: 'b-link', content: 'Аксессуары к Хантер 350 ЛК ЛЮКС', url: '/motors' } },
                                                { elem: 'counter', content: '35' }
                                            ]

                                        },
                                        {
                                            elem   : 'list',
                                            content: [
                                                {
                                                    elem   : 'item',
                                                    content: [
                                                        { block: 'product-card', mods: { type: 'withoutDesc' } }
                                                    ]
                                                },
                                                {
                                                    elem   : 'item',
                                                    content: [
                                                        { block: 'product-card', mods: { type: 'withoutDesc' } },

                                                    ]
                                                } ,
                                                {
                                                    elem   : 'item',
                                                    content: [
                                                        { block: 'product-card', mods: { type: 'withoutDesc' } }
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
