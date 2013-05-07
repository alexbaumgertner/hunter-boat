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
                            block: 'index-promo-carousel',
                            js: {
                                "slides": [{"title":"\u041d\u0430\u0434\u0443\u0432\u043d\u044b\u0435 \u043c\u043e\u0442\u043e\u0440\u043d\u044b\u0435 \u043b\u043e\u0434\u043a\u0438 \u0425\u0430\u043d\u0442\u0435\u0440","text":"\u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0442 \u0434\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f <br> \u0434\u043e \u0441\u0430\u043c\u044b\u0445 \u0437\u0430\u0432\u0435\u0442\u043d\u044b\u0445 \u043c\u0435\u0441\u0442 \u0440\u044b\u0431\u0430\u043b\u043a\u0438 \u0438\u043b\u0438 \u043e\u0442\u0434\u044b\u0445\u0430.","sub-text":"7 \u043c\u043e\u0434\u0435\u043b\u0435\u0439","start-price":"9800","url":"\/files\/images\/index-page\/carousel_1.png"},{"title":"\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u043e\u0442\u043e\u0440\u043d\u044b\u0435 \u043b\u043e\u0434\u043a\u0438 \u0425\u0430\u043d\u0442\u0435\u0440","text":"\u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0442 \u0434\u043e\u043f\u043b\u044b\u0442\u044c <br> \u0434\u043e \u0441\u0430\u043c\u044b\u0445 \u0437\u0430\u0432\u0435\u0442\u043d\u044b\u0445 \u043c\u0435\u0441\u0442 \u0440\u044b\u0431\u0430\u043b\u043a\u0438 \u0438\u043b\u0438 \u043e\u0442\u0434\u044b\u0445\u0430.","sub-text":"15 \u043c\u043e\u0434\u0435\u043b\u0435\u0439","start-price":"7800","url":"\/files\/images\/index-page\/carousel_1.png"},{"title":"\u0421\u0443\u043f\u0435\u0440-\u043c\u043e\u0442\u043e\u0440\u044b \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439","text":"\u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0442 \u0434\u043e\u0435\u0445\u0430\u0442\u044c <br> \u0434\u043e \u0441\u0430\u043c\u044b\u0445 \u0437\u0430\u0432\u0435\u0442\u043d\u044b\u0445 \u043c\u0435\u0441\u0442 \u0440\u044b\u0431\u0430\u043b\u043a\u0438 \u0438\u043b\u0438 \u043e\u0442\u0434\u044b\u0445\u0430.","sub-text":"5 \u043c\u043e\u0434\u0435\u043b\u0435\u0439","start-price":"5800","url":"\/files\/images\/index-page\/carousel_1.png"},{"title":"\u042d\u043a\u0441\u0442\u0440\u0430-\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u044d\u0445\u043e\u043b\u043e\u0442","text":"\u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0442 \u043d\u0430\u0439\u0442\u0438 <br> \u0434\u043e \u0441\u0430\u043c\u044b\u0445 \u0437\u0430\u0432\u0435\u0442\u043d\u044b\u0445 \u043c\u0435\u0441\u0442 \u0440\u044b\u0431\u0430\u043b\u043a\u0438 \u0438\u043b\u0438 \u043e\u0442\u0434\u044b\u0445\u0430.","sub-text":"10 \u043c\u043e\u0434\u0435\u043b\u0435\u0439","start-price":"10800","url":"\/files\/images\/index-page\/carousel_1.png"}]
                            },
                            content: [
                                {
                                    elem: 'menu',
                                    content: [
                                        {
                                            elem: 'menu-item'
                                        },
                                        {
                                            elem: 'menu-item',
                                            elemMods: { state: 'current' }
                                        },
                                        {
                                            elem: 'menu-item'
                                        },
                                        {
                                            elem: 'menu-item'
                                        }
                                    ]
                                },
                                {
                                    elem: 'content',
                                    content: [
                                        {
                                            elem: 'title',
                                            content: { block: 'b-link', url: '/', content: 'Надувные моторные лодки Хантер' }
                                        },
                                        {
                                            elem: 'text',
                                            content: { elem: 'text-inner',  content: 'позволят добраться <br> до самых заветных мест рыбалки или отдыха.' }
                                        },
                                        {
                                            elem: 'sub-text',
                                            content: '12 моделей'
                                        },
                                        {
                                            elem: 'price',
                                            content: [
                                                'от',
                                                {
                                                    block: 'price',
                                                    mods: { currency: 'dot-dash' },
                                                    value: 9800

                                                }
                                            ]
                                        },

                                        {
                                            elem: 'photo',
                                            url: 'img/index-page/carousel_1.png'
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
            mods: { page: 'index' },
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
