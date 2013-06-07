({
    block: 'b-page',
    title: 'catalog',
    head: [
        { elem: 'css', url: '_catalog.css', ie: false},
        { elem: 'css', url: '_catalog', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_catalog.js'},
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
                        },
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
                            block: 'promo',
                            content: [
                                {
                                    elem: 'column',
                                    elemMods: { position: 'left' },
                                    content: [
                                        {
                                            block: 'buy-now-list',
                                            content: [
                                                {
                                                    elem: 'header',
                                                    content: 'Прямо сейчас покупают:'
                                                },
                                                {
                                                    elem: 'list',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            name: 'Хантер 290 Л',
                                                            url: '/catalog/333'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            name: 'Лодочный мотор Yamaha 6CMHS',
                                                            url: '/catalog/333'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            name: 'Хантер 390 ЛЮКС',
                                                            url: '/catalog/333'
                                                        }
                                                    ]
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'column',
                                    elemMods: { position: 'right' },
                                    content: [
                                        {
                                            block: 'products-promo-carousel',
                                            js: true,
                                            content: [
                                                {
                                                    elem: 'item',
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            content: 'Надувная лодка Хантер <em>360</em>'
                                                        },
                                                        {
                                                            elem: 'price',
                                                            content: [
                                                                { elem: 'price-old', content: '41000' },
                                                                { elem: 'price-new', content: {
                                                                    block: 'price',
                                                                    mods: { currency: 'dot-dash'},
                                                                    value: '39900'  }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'photo',
                                                            src: 'img/catalog/boats/hunter_big.png'
                                                        },
                                                        {
                                                            elem: 'links',
                                                            content: [
                                                                {
                                                                    elem: 'link-to-info',
                                                                    content: { block: 'b-link', content: 'Узнать все о Хантер 360', url: '/catalog/111#all-info' }
                                                                },
                                                                {
                                                                    elem: 'link-to-order',
                                                                    content: { block: 'b-link', content: 'Заказать', url: '/catalog/111/order' }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'controlls',
                                                            content: [
                                                                { elem: 'switch', elemMods: { state: 'current' } },
                                                                { elem: 'switch' },
                                                                { elem: 'switch' }
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
                            block: 'content',
                            elem: 'column',
                            elemMods: { position: 'left' },
                            content: [
                                {
                                    block: 'catalog-menu',
                                    content: [
                                        {
                                            elem: 'header',
                                            content: 'Каталог'
                                        },
                                        {
                                            elem: 'section',
                                            content: [
                                                {
                                                    elem: 'section-header',
                                                    content: 'Надувные лодки',
                                                    url: '/catalog/boats/inflatable/'
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
                        },
                        {
                            block: 'content',
                            elem: 'column',
                            elemMods: { position: 'right' },
                            content: [
                                {
                                    block: 'catalog-index-page',
                                    content: [
                                        {
                                            elem: 'products',
                                            content: [
                                                {
                                                    elem: 'menu',
                                                    content: [
                                                        {
                                                            elem: 'menu-item',
                                                            elemMods: { state: 'current' },
                                                            content: [
                                                                {
                                                                    elem: 'menu-item-title',
                                                                    content: 'Новинки'
                                                                },
                                                                {
                                                                    elem: 'menu-item-counter',
                                                                    content: '3'
                                                                }
                                                            ]
                                                        },

                                                        {
                                                            elem: 'menu-item',
                                                            content: [
                                                                {
                                                                    elem: 'menu-item-title',
                                                                    content: 'Популярное'
                                                                },
                                                                {
                                                                    elem: 'menu-item-counter',
                                                                    content: '3'
                                                                }
                                                            ]
                                                        },

                                                        {
                                                            elem: 'menu-item',
                                                            content: [
                                                                {
                                                                    elem: 'menu-item-title',
                                                                    content: 'Рекомендуемое'
                                                                },
                                                                {
                                                                    elem: 'menu-item-counter',
                                                                    content: '3'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'products-content',
                                                    content: [
                                                        {
                                                            elem: 'tabs',
                                                            content: [
                                                                {
                                                                    elem: 'tab',
                                                                    elemMods: { state: 'current' },
                                                                    content: {
                                                                        block: 'catalog-section',
                                                                        content: [
                                                                            {
                                                                                elem: 'list',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card',
                                                                                            src: 'img/catalog/boats/01.jpg'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card',
                                                                                            src: 'img/catalog/boats/02.jpg'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card',
                                                                                            src: 'img/catalog/boats/03.jpg'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card',
                                                                                            src: 'img/catalog/boats/04.jpg'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card',
                                                                                            src: 'img/catalog/boats/05.jpg'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            elem: 'link-to-all',
                                                                                            content: {
                                                                                                block: 'b-link',
                                                                                                mods: { pseudo: 'yes' },
                                                                                                url: '/catalog/news',
                                                                                                content: 'Показать все новинки'
                                                                                            }
                                                                                        }

                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'tab',
                                                                    content: {
                                                                        block: 'catalog-section',
                                                                        content: [
                                                                            {
                                                                                elem: 'list',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            elem: 'link-to-all',
                                                                                            content: {
                                                                                                block: 'b-link',
                                                                                                mods: { pseudo: 'yes' },
                                                                                                url: '/catalog/news',
                                                                                                content: 'Показать все новинки'
                                                                                            }
                                                                                        }

                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'tab',
                                                                    content: {
                                                                        block: 'catalog-section',
                                                                        content: [
                                                                            {
                                                                                elem: 'list',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            block: 'product-card'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        content: {
                                                                                            elem: 'link-to-all',
                                                                                            content: {
                                                                                                block: 'b-link',
                                                                                                mods: { pseudo: 'yes' },
                                                                                                url: '/catalog/news',
                                                                                                content: 'Показать все новинки'
                                                                                            }
                                                                                        }

                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
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
                                                    block: 'catalog-section-carousel',
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            content: [
                                                                { elem: 'title', content: { block: 'b-link', content: 'Лодочные моторы', url: '/motors' } },
                                                                { elem: 'counter', content: '35' }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'carousel',
                                                            content: {
                                                                block: 'carousel',
                                                                js: {
                                                                    frameCurr: 1,
                                                                    frameItemsCount: 1,
                                                                    frameItemsStep: 1
                                                                },
                                                                content: {
                                                                    elem: 'items',
                                                                    content: [
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'product-card',
                                                                                    mods: { type: 'withFullDesc' },
                                                                                    content: [
                                                                                        [
                                                                                            {
                                                                                                elem: 'photo',
                                                                                                tag: 'img',
                                                                                                attrs: {
                                                                                                    src: 'img/catalog/motors/06.png'
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                elem: 'info',
                                                                                                content: [
                                                                                                    {
                                                                                                        elem: 'title',
                                                                                                        content: { block: 'b-link', url: 'catalog/boats/', content: 'Лодочный мотор Yamaha 6CMHS' }
                                                                                                    },
                                                                                                    {
                                                                                                        elem: 'desc',
                                                                                                        content: 'Yamaha 6CMHS - 2x тактный мотос с 2 цилиндрами при рабочем объеме 165 куб. см. развивает мощность 6 л.с. и весит 27 килограмм. Такое соотношение мощность/вес приводит к улучшению и без того отличных динамичемских характетистик.'                                                                                    },
                                                                                                    {
                                                                                                        elem: 'price',
                                                                                                        content: {
                                                                                                            block: 'price',
                                                                                                            mods: { currency: 'dot-dash' },
                                                                                                            value: 66500
                                                                                                        }
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'product-card',
                                                                                    mods: { type: 'withFullDesc' },
                                                                                    content: [
                                                                                        [
                                                                                            {
                                                                                                elem: 'photo',
                                                                                                tag: 'img',
                                                                                                attrs: {
                                                                                                    src: 'img/catalog/motors/place-holder.jpg'
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                elem: 'info',
                                                                                                content: [
                                                                                                    {
                                                                                                        elem: 'title',
                                                                                                        content: { block: 'b-link', url: 'catalog/boats/', content: 'Лодочный мотор Yamaha 6CMHS' }
                                                                                                    },
                                                                                                    {
                                                                                                        elem: 'desc',
                                                                                                        content: 'Yamaha 6CMHS - 2x тактный мотос с 2 цилиндрами при рабочем объеме 165 куб. см. развивает мощность 6 л.с. и весит 27 килограмм. Такое соотношение мощность/вес приводит к улучшению и без того отличных динамичемских характетистик.'                                                                                    },
                                                                                                    {
                                                                                                        elem: 'price',
                                                                                                        content: {
                                                                                                            block: 'price',
                                                                                                            mods: { currency: 'dot-dash' },
                                                                                                            value: 66500
                                                                                                        }
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        }

                                                    ]
                                                },
                                                {
                                                    block: 'catalog-section-carousel',

                                                    content: [

                                                        {
                                                            elem: 'header',
                                                            content: [
                                                                { elem: 'title', content: { block: 'b-link', content: 'Аксессуары к лодками', url: '/motors' } },
                                                                { elem: 'counter', content: '35' }
                                                            ]

                                                        },
                                                        {
                                                            elem: 'carousel',
                                                            content: {
                                                                block: 'carousel',
                                                                js: {
                                                                    frameCurr: 1,
                                                                    frameItemsCount: 3,
                                                                    frameItemsStep: 1
                                                                },
                                                                content: {
                                                                    elem: 'items',
                                                                    content: [
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'product-card',
                                                                                    mods: { type: 'withoutDesc' },
                                                                                    src: 'img/catalog/boat-addons/07.png'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'product-card',
                                                                                    mods: { type: 'withoutDesc' },
                                                                                    src: 'img/catalog/boat-addons/08.png'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'product-card',
                                                                                    mods: { type: 'withoutDesc' },
                                                                                    src: 'img/catalog/boat-addons/09.png'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'product-card',
                                                                                    mods: { type: 'withoutDesc' }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'product-card',
                                                                                    mods: { type: 'withoutDesc' }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'product-card',
                                                                                    mods: { type: 'withoutDesc' }
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
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
