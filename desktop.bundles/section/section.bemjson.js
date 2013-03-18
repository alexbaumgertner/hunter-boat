({
    block  : 'b-page',
    title  : 'section',
    head   : [
        { elem: 'css', url: '_section.css', ie: false},
        { elem: 'css', url: '_section', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_section.js'},
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
                            block  : 'header',
                            elem   : 'column',
                            elemMods: { position: 'left' },
                            content: [
                                {
                                    block  : 'logo',
                                    content: 'HUNTERBOAT'
                                }
                            ]
                        },

                        {
                            block  : 'header',
                            elem   : 'column',
                            elemMods: { position: 'right' },
                            content: [
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
                                    mods: { color: '000000' },
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
                                            elem   : 'section',
                                            elemMods: { background: 'red' },
                                            content: {
                                                elem: 'list',
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
                                                elem: 'list',
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
                            block  : 'content',
                            elem   : 'column',
                            elemMods: { position: 'left' },
                            content: [
                                {
                                    block  : 'catalog-links',
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
                                            elem   : 'list',
                                            content: [
                                                {
                                                    elem    : 'item',
                                                    elemMods: { section: 'new' },
                                                    content : { block: 'b-link', url: '/new/', content: 'new' }
                                                },
                                                {
                                                    elem    : 'item',
                                                    elemMods: { section: 'pop' },
                                                    content : { block: 'b-link', url: '/pop/', content: 'pop' }
                                                },
                                                {
                                                    elem    : 'item',
                                                    elemMods: { section: 'rec' },
                                                    content : { block: 'b-link', url: '/rec/', content: 'rec' }
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
                                                            content: 'Люкс',
                                                            url    : '/catalog/boats/inflatable/lux/'
                                                        },
                                                        {
                                                            elem   : 'item',
                                                            elemMods: { marker: 'precent' },
                                                            content: 'Уценка',
                                                            url    : '/catalog/boats/inflatable/markdown/'
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
                                                            content: 'Люкс',
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
                            block  : 'content',
                            elem   : 'column',
                            elemMods: { position: 'right' },
                            content: [
                                {
                                    block  : 'catalog-page',
                                    content: [
                                        {
                                            elem   : 'header',
                                            content: 'Надувные лодки'
                                        },
                                        {
                                            elem   : 'menu',
                                            content: [
                                                {
                                                    elem: 'menu-item',
                                                    elemMods: { state: 'current' },
                                                    content: { elem: 'menu-item-title', content: 'по типу'  }
                                                },

                                                {
                                                    elem: 'menu-item',
                                                    content: { elem: 'menu-item-title', content: 'по цене'  }
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'content',
                                            content: [
                                                {
                                                    block  : 'catalog-section',
                                                    content: [
                                                        {
                                                            elem   : 'header',
                                                            content: [
                                                                {
                                                                    elem   : 'title',
                                                                    content: 'Гребные'
                                                                },
                                                                {
                                                                    elem   : 'counter',
                                                                    content: '3'
                                                                }
                                                            ]
                                                        },
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
                                                                    elem    : 'item',
                                                                    elemMods: { type: 'link-to-all' },
                                                                    content : 'Показать все'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block  : 'catalog-section',
                                                    content: [
                                                        {
                                                            elem   : 'header',
                                                            content: [
                                                                {
                                                                    elem   : 'title',
                                                                    content: 'Моторные'
                                                                },
                                                                {
                                                                    elem   : 'counter',
                                                                    content: '7'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'list',
                                                            content: [
                                                                (function () {
                                                                    var content = [];

                                                                    for (var i = 0; i < 7; i++) {
                                                                        content.push({
                                                                            elem   : 'item',
                                                                            content: {
                                                                                block: 'product-card'
                                                                            }
                                                                        });
                                                                    }

                                                                    return content;
                                                                }()), {
                                                                    elem    : 'item',
                                                                    elemMods: { type: 'link-to-all' },
                                                                    content : 'Показать все'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block  : 'catalog-section',
                                                    content: [
                                                        {
                                                            elem   : 'header',
                                                            content: [
                                                                {
                                                                    elem   : 'title',
                                                                    content: 'Моторно-гребные'
                                                                },
                                                                {
                                                                    elem   : 'counter',
                                                                    content: '4'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'list',
                                                            content: [
                                                                (function () {
                                                                    var content = [];

                                                                    for (var i = 0; i < 4; i++) {
                                                                        content.push({
                                                                            elem   : 'item',
                                                                            content: {
                                                                                block: 'product-card'
                                                                            }
                                                                        });
                                                                    }

                                                                    return content;
                                                                }())
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block  : 'catalog-section',
                                                    content: [
                                                        {
                                                            elem   : 'header',
                                                            content: [
                                                                {
                                                                    elem   : 'title',
                                                                    content: 'Люкс'
                                                                },
                                                                {
                                                                    elem   : 'counter',
                                                                    content: '3'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'list',
                                                            content: [
                                                                (function () {
                                                                    var content = [];

                                                                    for (var i = 0; i < 2; i++) {
                                                                        content.push({
                                                                            elem   : 'item',
                                                                            content: {
                                                                                block: 'product-card'
                                                                            }
                                                                        });
                                                                    }

                                                                    return content;
                                                                }())
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
            block  : 'footer',
            content: [
                {
                    block  : 'wrapper-fix-width',
                    mods   : { width: '960' },
                    content: [
                        {
                            block: 'footer',
                            elem   : 'column',
                            elemMods: { position: 'left' },
                            content: [
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
                                    content: 'ООО "Производственно-торговая Компания Хантер - производство и продажа надувных лодок Хантер " '
                                }
                            ]
                        },
                        {
                            block: 'footer',
                            elem   : 'column',
                            elemMods: { position: 'center' },
                            content: [
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
                            block: 'footer',
                            elem   : 'column',
                            elemMods: { position: 'right' },
                            content: [
                                {
                                    block     : 'studio-idei',
                                    mods      : { color: 'fff1d6' },
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
