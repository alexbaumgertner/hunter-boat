({
    block  : 'b-page',
    title  : 'Title of the page',
    favicon: '/favicon.ico',
    head   : [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        /*{ block: 'i-jquery', elem: 'core'},*/
        { elem: 'js', url: 'jquery-1.7.2.js'},
        { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content: [
        {
            block  : 'header',
            mods: { page: 'index' },
            attrs: {
                style: 'background: url("img/index-page/main-photo-1.jpg") no-repeat;'
            },
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
                        {
                            block: 'header',
                            elem: 'index-title',
                            content: 'Почувствовать природу... легко!'
                        },
                        {
                            block: 'products-promo-carousel',
                            mods: { style: 'compact' }
                        }
                    ]
                },
            ]
        },
        {
            block  : 'content',
            mods: { page: 'index' },
            content: [
                {
                    block  : 'wrapper-fix-width',
                    mods   : { width: '960' },
                    content: [
                        {
                            block   : 'content',
                            elem    : 'column',
                            elemMods: { position: 'full' },
                            content : [
                                {
                                    block: 'index-page',
                                    content: [
                                        {
                                            block  : 'company-brief',
                                            content: [
                                                {
                                                    elem   : 'column',
                                                    content: {
                                                        elem   : 'work-for-you',
                                                        content: [
                                                            {
                                                                elem   : 'work-for-you-year',
                                                                content: '4'
                                                            },
                                                            {
                                                                elem   : 'work-for-you-text',
                                                                content: 'года работаем для вас'
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem   : 'column',
                                                    elemMods: { position: 'center' },
                                                    content: [
                                                        {
                                                            elem   : 'header',
                                                            content: 'Надувные лодки Хантер'
                                                        },
                                                        {
                                                            elem   : 'text',
                                                            content: '«Производственно Торговая Компания Хантер» - новая организация пришедшая на смену «Бот-Трэйдинг» в результате расширения производства и подписания дилерских договоров на поставку и продажу подвесных лодочных моторов «HDX» и всемирно известных лодочных моторов «Yamaha». '
                                                        },
                                                        {
                                                            block   : 'b-link',
                                                            url    : '/about/',
                                                            content: 'Узнать все о нас'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem   : 'column',
                                                    content: [
                                                        {
                                                            block  : 'brands',
                                                            mods   : { style: 'compact' },
                                                            content: {
                                                                elem   : 'list',
                                                                content: [
                                                                    {
                                                                        elem   : 'item',
                                                                        content: {
                                                                            elem   : 'item-header',
                                                                            content: { block: 'b-icon', alt: 'yamaha', url: 'img/content/brand-icons/yamaha-logo.png' }
                                                                        }
                                                                    },
                                                                    {
                                                                        elem   : 'item',
                                                                        attrs: { style: 'margin: 5px 0 -5px 15px;' },
                                                                        content: {
                                                                            elem   : 'item-header',
                                                                            content: { block: 'b-icon', alt: 'hdx', url: 'img/content/brand-icons/hdx-logo.png' }
                                                                        }
                                                                    },
                                                                    {
                                                                        elem   : 'item',
                                                                        content: {
                                                                            elem   : 'item-header',
                                                                            content: { block: 'b-icon', alt: 'nissamaran', url: 'img/content/brand-icons/nissamaran-logo.png' }
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block  : 'all-pros',
                                                    content: [
                                                        {
                                                            elem   : 'header',
                                                            content: 'Сплошные плюсы!'
                                                        },
                                                        {
                                                            elem   : 'list',
                                                            content: [
                                                                {
                                                                    elem   : 'item',
                                                                    content: 'Производство в центре Санкт-Петербурга'
                                                                },
                                                                {
                                                                    elem   : 'item',
                                                                    content: 'Широкий ассортимент: от простых до люксовых'
                                                                },
                                                                {
                                                                    elem   : 'item',
                                                                    content: 'Немецкая лодочная ткань HEYTEX'
                                                                },
                                                                {
                                                                    elem   : 'item',
                                                                    content: 'Гарантия качества: сертифицированные лодки'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        { block: 'line', mods: { type: 'wavy-0081bd' } },
                                        {
                                            block  : 'sale-stock',
                                            content: [
                                                {
                                                    elem   : 'header',
                                                    content: 'Акции'
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
                                                        }
                                                    ]
                                                }
                                            ]
                                        },

                                        { block: 'line', mods: { type: 'wavy-0081bd' } },

                                        {
                                            elem: 'column',
                                            content: [
                                                {
                                                    block  : 'articles-tabs',
                                                    content: [
                                                        {
                                                            elem   : 'menu',
                                                            content: [
                                                                {
                                                                    elem   : 'menu-item',
                                                                    content: [
                                                                        {
                                                                            elem   : 'menu-item-header',
                                                                            content: 'Новости'
                                                                        },
                                                                        {
                                                                            elem   : 'menu-item-counter',
                                                                            content: '21'
                                                                        }
                                                                    ]
                                                                },

                                                                {
                                                                    elem   : 'menu-item',
                                                                    content: [
                                                                        {
                                                                            elem   : 'menu-item-header',
                                                                            content: 'Статьи'
                                                                        },
                                                                        {
                                                                            elem   : 'menu-item-counter',
                                                                            content: '12'
                                                                        }
                                                                    ]
                                                                },

                                                                {
                                                                    elem   : 'menu-item',
                                                                    content: [
                                                                        {
                                                                            elem   : 'menu-item-header',
                                                                            content: 'Отзывы'
                                                                        },
                                                                        {
                                                                            elem   : 'menu-item-counter',
                                                                            content: '105'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'tabs',
                                                            content: [
                                                                {
                                                                    elem   : 'tab',
                                                                    content: [
                                                                        {
                                                                            block  : 'article-anounce',
                                                                            content: [
                                                                                {
                                                                                    elem   : 'date',
                                                                                    content: '21.10.1201'
                                                                                },
                                                                                {
                                                                                    elem   : 'title',
                                                                                    content: { block: 'b-link', url: '/', content: 'с Наступающим Новым 2013 годом' }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block  : 'article-anounce',
                                                                            content: [
                                                                                {
                                                                                    elem   : 'date',
                                                                                    content: '04.08.3000'
                                                                                },
                                                                                {
                                                                                    elem   : 'title',
                                                                                    content: { block: 'b-link', url: '/', content: 'Сезонные скидки на надувные лодки Хантер' }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block  : 'article-anounce',
                                                                            content: [
                                                                                {
                                                                                    elem   : 'date',
                                                                                    content: '23.25.1424'
                                                                                },
                                                                                {
                                                                                    elem   : 'title',
                                                                                    content: { block: 'b-link', url: '/', content: 'Новинка от «Бот-Трэйдинг» - Надувная килевая бюджетная лодка Хантер 320 ЛК' }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block  : 'b-link',
                                                                            url    : '/news/',
                                                                            content: 'Все новости'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            elem: 'column',
                                            attrs: {
                                                style: 'margin-left: 110px; text-align: center;'
                                            },
                                            content: [
                                                {
                                                    block  : 'photoalbum-thumb',
                                                    content: [
                                                        {
                                                            elem: 'photo'
                                                        },
                                                        {
                                                            elem   : 'title',
                                                            content: { block: 'b-link', url: '/', content: 'Тест драйв лодки Хантер 280 Т' }
                                                        },
                                                        {
                                                            elem   : 'counter',
                                                            content: [
                                                                {
                                                                    elem   : 'counter-value',
                                                                    content: '8'
                                                                },
                                                                {
                                                                    elem   : 'counter-currency',
                                                                    content: 'фото'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block  : 'b-link',
                                                    url    : '/photoalbums/',
                                                    content: 'Фотогалерея'
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
