({
    block: 'b-page',
    mods: { page: 'index' },
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        {
            block: 'header',
            mods: { page: 'index' },
            attrs: {
                style: 'background: url("img/index-page/main-photo-1.jpg") no-repeat;'
            },
            content: [
                {
                    block: 'wrapper-fix-width',
                    mods: { width: '982' },
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
                                                url: 'cart',
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
                        {
                            block: 'header',
                            elem: 'index-title',
                            content: 'Почувствовать природу... <span style="padding: 0 0 0 50px;">легко!</span>'
                        },
                        {
                            block: 'products-promo-carousel',
                            mods: { style: 'compact' }
                        }
                    ]
                }
            ]
        },
        {
            block: 'content',
            mods: { page: 'index' },
            content: [
                {
                    block: 'wrapper-fix-width',
                    mods: { width: '982' },
                    content: [
                        {
                            block: 'content',
                            elem: 'column',
                            elemMods: { position: 'full' },
                            content: [
                                {
                                    block: 'index-page',
                                    content: [
                                        {
                                            block: 'b-link',
                                            mods: { linkto: 'catalog' },
                                            url: 'catalog.html'
                                        },
                                        {
                                            block: 'company-brief',
                                            content: [
                                                {
                                                    elem: 'column',
                                                    content: {
                                                        elem: 'work-for-you',
                                                        content: [
                                                            {
                                                                elem: 'work-for-you-year',
                                                                content: '4'
                                                            },
                                                            {
                                                                elem: 'work-for-you-text',
                                                                content: 'года работаем для вас'
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem: 'column',
                                                    elemMods: { position: 'center' },
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            content: 'Надувные лодки Хантер'
                                                        },
                                                        {
                                                            elem: 'text',
                                                            content: '«Производственно Торговая Компания Хантер» - новая организация пришедшая на смену «Бот-Трэйдинг» в результате расширения производства и подписания дилерских договоров на поставку и продажу подвесных лодочных моторов «HDX» и всемирно известных лодочных моторов «Yamaha». '
                                                        },
                                                        {
                                                            elem: 'link-to-all',
                                                            content: [
                                                                {
                                                                    block: 'b-link',
                                                                    url: '/about.html',
                                                                    content: 'Узнать все о нас'
                                                                }
                                                            ]
                                                        }

                                                    ]
                                                },
                                                {
                                                    elem: 'column',
                                                    attrs: { style: 'margin: 58px 0 0;' },
                                                    content: [
                                                        {
                                                            block: 'brands',
                                                            mods: { style: 'compact' },
                                                            content: {
                                                                elem: 'list',
                                                                content: [
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'item-header',
                                                                            content: { block: 'b-icon', alt: 'yamaha', url: 'img/content/brand-icons/yamaha-logo_small.png' }
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        attrs: { style: 'margin: 5px 0 -5px 15px;' },
                                                                        content: {
                                                                            elem: 'item-header',
                                                                            content: { block: 'b-icon', alt: 'hdx', url: 'img/content/brand-icons/hdx-logo_small.png' }
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'item-header',
                                                                            content: { block: 'b-icon', alt: 'nissamaran', url: 'img/content/brand-icons/nissamaran-logo_small.png' }
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'all-pros',
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            content: 'Сплошные плюсы!'
                                                        },
                                                        {
                                                            elem: 'list',
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    content: 'Производство в центре Санкт-Петербурга'
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: 'Широкий ассортимент: от простых до люксовых'
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: 'Немецкая лодочная ткань HEYTEX'
                                                                },
                                                                {
                                                                    elem: 'item',
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
                                            block: 'sale-stock',
                                            content: [
                                                {
                                                    elem: 'header',
                                                    content: 'Акции'
                                                },
                                                {
                                                    elem: 'list',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'product-card',
                                                                oldPrice: 65400
                                                            }
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'product-card',
                                                                oldPrice: 5400
                                                            }
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'product-card',
                                                                oldPrice: 15400
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
                                                    block: 'articles-tabs',
                                                    content: [
                                                        {
                                                            elem: 'menu',
                                                            content: [
                                                                {
                                                                    elem: 'menu-item',
                                                                    elemMods: { state: 'current' },
                                                                    content: [
                                                                        {
                                                                            elem: 'menu-item-header',
                                                                            content: 'Новости'
                                                                        },
                                                                        {
                                                                            elem: 'menu-item-counter',
                                                                            content: '21'
                                                                        }
                                                                    ]
                                                                },

                                                                {
                                                                    elem: 'menu-item',
                                                                    content: [
                                                                        {
                                                                            elem: 'menu-item-header',
                                                                            content: 'Статьи'
                                                                        },
                                                                        {
                                                                            elem: 'menu-item-counter',
                                                                            content: '12'
                                                                        }
                                                                    ]
                                                                },

                                                                {
                                                                    elem: 'menu-item',
                                                                    content: [
                                                                        {
                                                                            elem: 'menu-item-header',
                                                                            content: 'Отзывы'
                                                                        },
                                                                        {
                                                                            elem: 'menu-item-counter',
                                                                            content: '105'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'tabs',
                                                            content: [
                                                                {
                                                                    elem: 'tab',
                                                                    elemMods: { state: 'current' },
                                                                    content: [
                                                                        {
                                                                            block: 'article-anounce',
                                                                            content: [
                                                                                {
                                                                                    elem: 'date',
                                                                                    content: '21.10.10'
                                                                                },
                                                                                {
                                                                                    elem: 'title',
                                                                                    content: { block: 'b-link', url: '/', content: 'с Наступающим Новым 2013 годом' }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'article-anounce',
                                                                            content: [
                                                                                {
                                                                                    elem: 'date',
                                                                                    content: '04.08.01'
                                                                                },
                                                                                {
                                                                                    elem: 'title',
                                                                                    content: { block: 'b-link', url: '/', content: 'Сезонные скидки на надувные лодки Хантер' }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'article-anounce',
                                                                            content: [
                                                                                {
                                                                                    elem: 'date',
                                                                                    content: '23.25.07'
                                                                                },
                                                                                {
                                                                                    elem: 'title',
                                                                                    content: { block: 'b-link', url: '/', content: 'Новинка от «Бот-Трэйдинг» - Надувная килевая бюджетная лодка Хантер 320 ЛК' }
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'tab',
                                                                    content: [
                                                                        {
                                                                            block: 'article-anounce',
                                                                            content: [
                                                                                {
                                                                                    elem: 'date',
                                                                                    content: '21.10.10'
                                                                                },
                                                                                {
                                                                                    elem: 'title',
                                                                                    content: { block: 'b-link', url: '/', content: 'Статья с Наступающим Новым 2013 годом' }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'article-anounce',
                                                                            content: [
                                                                                {
                                                                                    elem: 'date',
                                                                                    content: '04.08.01'
                                                                                },
                                                                                {
                                                                                    elem: 'title',
                                                                                    content: { block: 'b-link', url: '/', content: 'Статья Сезонные скидки на надувные лодки Хантер' }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'article-anounce',
                                                                            content: [
                                                                                {
                                                                                    elem: 'date',
                                                                                    content: '23.25.07'
                                                                                },
                                                                                {
                                                                                    elem: 'title',
                                                                                    content: { block: 'b-link', url: '/', content: 'Статья Новинка от «Бот-Трэйдинг» - Надувная килевая бюджетная лодка Хантер 320 ЛК' }
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'tab',
                                                                    content: [
                                                                        {
                                                                            block: 'article-anounce',
                                                                            content: [
                                                                                {
                                                                                    elem: 'date',
                                                                                    content: '21.10.10'
                                                                                },
                                                                                {
                                                                                    elem: 'title',
                                                                                    content: { block: 'b-link', url: '/', content: 'Отзыв с Наступающим Новым 2013 годом' }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'article-anounce',
                                                                            content: [
                                                                                {
                                                                                    elem: 'date',
                                                                                    content: '04.08.01'
                                                                                },
                                                                                {
                                                                                    elem: 'title',
                                                                                    content: { block: 'b-link', url: '/', content: 'Отзыв Сезонные скидки на надувные лодки Хантер' }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'article-anounce',
                                                                            content: [
                                                                                {
                                                                                    elem: 'date',
                                                                                    content: '23.25.07'
                                                                                },
                                                                                {
                                                                                    elem: 'title',
                                                                                    content: { block: 'b-link', url: '/', content: 'Отзыв Новинка от «Бот-Трэйдинг» - Надувная килевая бюджетная лодка Хантер 320 ЛК' }
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'link-to-all',
                                                            content: {
                                                                block: 'b-link',
                                                                url: '/news/',
                                                                content: 'Все новости'
                                                            }
                                                        }

                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'column',
                                            content: [
                                                {
                                                    block: 'photoalbum-thumb',
                                                    content: [
                                                        {
                                                            elem: 'photo'
                                                        },
                                                        {
                                                            elem: 'title',
                                                            content: { block: 'b-link', url: '/', content: 'Тест драйв лодки Хантер 280 Т' }
                                                        },
                                                        {
                                                            elem: 'counter',
                                                            content: [
                                                                {
                                                                    elem: 'counter-value',
                                                                    content: '8'
                                                                },
                                                                {
                                                                    elem: 'counter-currency',
                                                                    content: 'фото'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-link',
                                                    mods: { 'linkto': 'photoalbums' },
                                                    url: '/photoalbums.html',
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
            block: 'footer',
            content: [
                {
                    block: 'wrapper-fix-width',
                    mods: { width: '982' },
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
