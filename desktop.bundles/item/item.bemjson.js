({
    block: 'b-page',
    title: 'item',
    head: [
        { elem: 'css', url: '_item.css', ie: false},
        { elem: 'css', url: '_item', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_item.js'}
    ],
    content: [
        {
            block: 'add-to-cart-anime',
            content: 'Добавлено в заказ'
        },
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
                                                    content: ['товаров', { elem: 'total-products', content: 3 }, 'на сумму']
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
                                            elemMods: { state: 'current' },
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
                                    block: 'catalog-item',
                                    js: true,
                                    content: [
                                        {
                                            elem: 'card',
                                            content: {
                                                block: 'catalog-item-card',

                                                content: [
                                                    {
                                                        elem: 'header',
                                                        content: [
                                                            {
                                                                elem: 'header-text',
                                                                content: 'Надувная лодка Хантер 350 МЛ'
                                                            },
                                                            {
                                                                elem: 'header-icon',
                                                                content: { block: 'catalog-icon', mods: { type: 'new' } }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'buy-section',
                                                        content: [
                                                            {
                                                                elem: 'price',
                                                                content: [
                                                                    {
                                                                        elem: 'price-old',
                                                                        content: {
                                                                            block: 'price', mods: { currency: 'empty', old: 'yes' }, value: 41000
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'price-new',
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
                                                        elem: 'photos-list',
                                                        content: [
                                                            {
                                                                elem: 'photos-list-item',
                                                                elemMods: { state: 'current' },
                                                                url: 'img/catalog/boats/hunter_350_ML/01.jpg',
                                                                attrs: { rel: 'img/catalog/boats/hunter_350_ML/01.jpg' }
                                                            },
                                                            {
                                                                elem: 'photos-list-item',
                                                                url: 'img/catalog/boats/hunter_350_ML/02.jpg',
                                                                attrs: { rel: 'img/catalog/boats/hunter_350_ML/02.jpg' }
                                                            },
                                                            {
                                                                elem: 'photos-list-item',
                                                                url: 'img/catalog/boats/hunter_350_ML/03.jpg',
                                                                attrs: { rel: 'img/catalog/boats/hunter_350_ML/03.jpg' }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'photo-big',
                                                        content: [
                                                            {
                                                                block: 'content-loader'
                                                            },
                                                            {
                                                                elem: 'photo-big-img',
                                                                url: 'img/catalog/boats/hunter_350_ML/04.jpg',
                                                                js: {
                                                                    'green': 'img/catalog/boats/hunter_350_ML/04.jpg',
                                                                    'gray': 'img/catalog/boats/hunter_350_ML/05.jpg'
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'bottom-pad',
                                                        content: [
                                                            {
                                                                elem: 'colors',
                                                                content: {
                                                                    block: 'color-selector',
                                                                    content: [
                                                                        { elem: 'selector', content: 'серая', value: 'gray', mix: [
                                                                            { block: 'catalog-item-card', elem: 'color-selector', elemMods: { color: 'gray' } }
                                                                        ] },
                                                                        { elem: 'selector', content: 'зеленая', value: 'green', mix: [
                                                                            { block: 'catalog-item-card', elem: 'color-selector', elemMods: { color: 'green' } }
                                                                        ], checked: true  }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                elem: 'links',
                                                                content: [
                                                                    {
                                                                        block: 'b-link',
                                                                        url: '/catalog/boats/hunter_320_LK_LUX/photos',
                                                                        content: 'Все фотографии Хантер 320 ЛК ЛЮКС'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    { elem: 'control', content: { block: 'carousel', elem: 'control', elemMods: { direction: 'prev'  }} },
                                                    { elem: 'control', content: { block: 'carousel', elem: 'control', elemMods: { direction: 'next'  }} }
                                                ]
                                            }
                                        },
                                        {
                                            elem: 'info',
                                            content: [
                                                {
                                                    elem: 'info-menu-list',
                                                    content: [
                                                        { elem: 'info-menu-item', js: { section: 'desc' }, content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'Описание', url: '/catalog/boats/1#desc' } },
                                                        { elem: 'info-menu-item', js: { section: 'spec' }, elemMods: { state: 'current' }, content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'Характеристики', url: '/catalog/boats/1#spec' } },
                                                        { elem: 'info-menu-item', js: { section: 'set' }, content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'Комплектация', url: '/catalog/boats/1#set' } },
                                                        { elem: 'info-menu-item', js: { section: 'reviews' }, content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'Отзывы', url: '/catalog/boats/1#reviews' } },
                                                    ]
                                                },
                                                {
                                                    elem: 'info-content-list',

                                                    content: [
                                                        {
                                                            elem: 'info-content-item',
                                                            elemMods: { state: 'current', section: 'spec' },
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
                                                                        elem: 'item',
                                                                        key: 'Грузоподъемность',
                                                                        value: '450 кг'
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        key: 'Диаметр баллона',
                                                                        value: '0543245 кг'
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        key: 'Количество отсеков',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        key: 'Вес',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        key: 'Крепление банок',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        key: 'Пассажировместимость',
                                                                        value: '3 человека'
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        key: 'Пол',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        key: 'Транец',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        key: 'Ширина',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        key: 'Длина',
                                                                        value: '35 кг'
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        key: 'Рекомендованная мощность мотора кг',
                                                                        value: '8 лс'
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            elem: 'info-content-item',
                                                            elemMods: { section: 'reviews' },
                                                            content: {
                                                                block: 'reviews',
                                                                content: [
                                                                    {
                                                                        elem: 'list',
                                                                        content: (function () {
                                                                            var content = [];

                                                                            var names = [
                                                                                'Олег', 'Владимир', 'Наталия', 'Степан Никифорович', 'Федор'
                                                                            ];
                                                                            var cities = [
                                                                                'Санкт-Петербург', 'Севастополь', 'Великий Новгород', 'Калининград', 'Москва', 'Екатеринбург', ''
                                                                            ];

                                                                            var review = [
                                                                                'Купил вашу лодку в магазине «Лодки-Питер» - очень порадовало качество изготовления. Но самое главное диаметр баллона – то что нужно для рыбалки. Спасибо ….',
                                                                                'Заказывал лодку Хантер 280 РТ через сайт. Доставили вовремя, как раз ко дню рождения, менеджеры молодцы – постоянно информируют о движении товара. Так держать – сразу же дозаказал дополнительные полы -передали в Питере (доставили в гостиницу).',
                                                                                'БОЛЬШОЕ ВАМ СПАСИБО ПОЛУЧИЛ СВОЙ ЗАКАЗ ЛОДКУ БЫСТРО И БЕЗ ПРОБЛЕМ ЖЕЛАЮ ВАМ УДАЧИ И С НАСТУПАЮЩИМ НОВЫМ ГОДОМ. ',
                                                                                'Здравствуйте! Лодки получили, большое спасибо. Лодки замечательные! Если вашему предприятию это интересно, мы будем рады сотрудничеству с вами по следующим направлениям. Мы могли бы стать вашими представителями у нас в регионе и заняться реализацией Вашей продукции в Сыктывкаре и Республике Коми. Либо вы можете использовать наш производственный потенциал для производства лодок. ',
                                                                                'Заказывал лодку Хантер 280 РТ через сайт. Доставили вовремя, как раз ко дню рождения, менеджеры молодцы – постоянно информируют о движении товара. Так держать – сразу же дозаказал дополнительные полы -передали в Питере (доставили в гостиницу).',
                                                                            ];

                                                                            for (var i = 0; i < 7; i++) {
                                                                                content.push({
                                                                                    elem: 'item',
                                                                                    content: {
                                                                                        block: 'product-review',
                                                                                        content: [
                                                                                            {
                                                                                                elem: 'date',
                                                                                                content: '21 октября 2009 года'
                                                                                            },
                                                                                            {
                                                                                                elem: 'header',
                                                                                                content: [
                                                                                                    { elem: 'author', content: names[(Math.floor(Math.random() * names.length))] },

                                                                                                    { elem: 'author-address', content: cities[(Math.floor(Math.random() * cities.length))] }
                                                                                                ]
                                                                                            },
                                                                                            {
                                                                                                elem: 'content',
                                                                                                content: review[(Math.floor(Math.random() * review.length))]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                });
                                                                            }

                                                                            return content;

                                                                        }())
                                                                    },
                                                                    {
                                                                        elem: 'add',
                                                                        content: {
                                                                            block: 'b-link',
                                                                            url: '/catalog/boats/hunter_320_LK_LUX/review/add',
                                                                            mods: { pseudo: 'yes' },
                                                                            content: 'Оставить отзыв'
                                                                        }
                                                                    },

                                                                ]
                                                            }
                                                        },
                                                        {
                                                            elem: 'info-content-item',
                                                            elemMods: { section: 'set' },
                                                            content: [
                                                                {
                                                                    block: 'enumeration-list',
                                                                    mods: { spaceStyle: 'dotted' },
                                                                    content: [
                                                                        {
                                                                            elem: 'item',
                                                                            key: 'Лодка надувная Хантер 320 ЛК',
                                                                            value: '1 шт'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            key: 'Весло разборное',
                                                                            value: '2 шт'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            key: 'Помпа воздушная',
                                                                            value: '1 шт'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            key: 'Рюкзак + сумка на изделие',
                                                                            value: '35 кг'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            key: 'Паспорт на изделие',
                                                                            value: '35 кг'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            key: 'Ремкомплект',
                                                                            value: '35 кг'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            key: 'Банка (сидение)',
                                                                            value: '3 человека'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            key: 'Рюкзак + сумка на изделие',
                                                                            value: '35 кг'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            key: 'Паспорт на изделие',
                                                                            value: '35 кг'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            key: 'Ремкомплект',
                                                                            value: '35 кг'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            key: 'Банка (сидение)',
                                                                            value: '3 человека'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'accessories-list',
                                                                    content: [
                                                                        (function () {
                                                                            var content = [];

                                                                            for (var i = 0; i < 5; i++) {
                                                                                content.push({
                                                                                    elem: 'item',
                                                                                    content: {
                                                                                        elem: 'item-link',
                                                                                        tag: 'a',
                                                                                        attrs: { href: '/' },
                                                                                        content: {
                                                                                            elem: 'item-photo',
                                                                                            tag: 'img',
                                                                                            attrs: {
                                                                                                src: 'img/catalog/motors/place-holder_small.png'
                                                                                            }
                                                                                        }
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
                                                            elem: 'info-content-item',
                                                            elemMods: { section: 'desc' },
                                                            content: {
                                                                block: 'b-text',
                                                                content: [
                                                                    {
                                                                        elem: 'p',
                                                                        content: 'Параграф текста описания лодки, просто текст в теге р. Параграфов может быть несколько. Могут быть другие виды информации: список, ссылка.'
                                                                    },
                                                                    {
                                                                        elem: 'p',
                                                                        content: 'Еще одну новинку от компании ООО «ПТК Хантер» по достоинству оценят даже самые взыскательные рыбаки. Здесь есть все, что не обходимо для удачной и комфортной рыбалки командой из двух человек:'
                                                                    },
                                                                    {
                                                                        elem: 'ul',
                                                                        content: [
                                                                            {
                                                                                elem: 'li',
                                                                                content: 'Элемент списка в описании лоддки, маркер -- тире'
                                                                            },
                                                                            {
                                                                                elem: 'li',
                                                                                content: 'Носовой тент надувной лодки Хантер 320 ЛК ЛЮКС прекрасно защитит кокпит и пассажиров от брызг и ветра, как во время движения так и во время стоянки.'
                                                                            },
                                                                            {
                                                                                elem: 'li',
                                                                                content: 'Стационарный транец позволит установить подвесной лодочный мотор до 8 л.с, что позволит любителям рыбалки и активного отдыха на воде ощутить большую свободу передвижения и существенно расширить ореол рыбных мест.'
                                                                            },
                                                                            {
                                                                                elem: 'li',
                                                                                content: 'Установленные в базе держатели спиннинга по достоинству оценят любители троллинга и донной ловли. Теперь вам не прийдется ломать голову над тем как установить спинниг или бортовую удочку в надувной моторной лодке лодке.'
                                                                            }
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
                                },
                                { block: 'line', mods: { type: 'wavy-0081bd' } },
                                {
                                    block: 'catalog-section-carousel',
                                    content: [
                                        {
                                            elem: 'header',
                                            content: [
                                                { elem: 'title', elemMods: { size: 'small' }, content: { block: 'b-link', content: 'Рекомендуемые моторы для лодки', url: '/motors' } }
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
                                                                    src: 'img/catalog/motors/06.png'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    block: 'product-card',
                                                                    mods: { type: 'withoutDesc' },
                                                                    src: 'img/catalog/motors/06.png'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    block: 'product-card',
                                                                    mods: { type: 'withoutDesc' },
                                                                    src: 'img/catalog/motors/06.png'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    block: 'product-card',
                                                                    mods: { type: 'withoutDesc' },
                                                                    src: 'img/catalog/motors/06.png'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    block: 'product-card',
                                                                    mods: { type: 'withoutDesc' },
                                                                    src: 'img/catalog/motors/06.png'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    block: 'product-card',
                                                                    mods: { type: 'withoutDesc' },
                                                                    src: 'img/catalog/motors/06.png'
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
