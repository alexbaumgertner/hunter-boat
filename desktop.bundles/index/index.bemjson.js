({
    block: 'page',
    mods: {page: 'index'},
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: '_index.css'}
    ],
    scripts: [{elem: 'js', url: '_index.js'}],
    content: [
        {
            block: 'header',
            mods: {page: 'index'},
            js: {logoImagesLength: 4},
            content: [
                {
                    block: 'wrapper-fix-width',
                    mods: {width: '962'},
                    content: [
                        {
                            block: 'header',
                            elem: 'column',
                            elemMods: {position: 'left'},
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
                            elemMods: {position: 'right'},
                            content: [
                                {
                                    block: 'cart-info',
                                    content: [
                                        {
                                            elem: 'link',
                                            content: {
                                                block: 'link',
                                                url: 'order.html',
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
                                                    content: {
                                                        block: 'price',
                                                        mods: {currency: 'dot-dash'},
                                                        value: '95000'
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'contacts',
                                    mods: {color: '000000'},
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
                                                block: 'link',
                                                mods: {pseudo: 'yes'},
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
                                                        elemMods: {section: 'catalog'},
                                                        name: 'Каталог',
                                                        url: '/catalog.html'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            elem: 'section',
                                            attrs: {
                                                style: 'margin-right: 0;'
                                            },
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
                        {
                            block: 'header',
                            elem: 'index-title',
                            content: [
                                'Почувствовать природу...', {
                                    elem: 'index-title-word',
                                    content: 'легко!'
                                }
                            ]
                        },
                        {
                            block: 'index-promo-carousel',
                            js: {
                                "settings": {
                                    'delayInitTime': 1500, // ms
                                    'durationInitTime': 800,
                                    'delayLoopTime': 2000
                                },
                                "slides": [
                                    {
                                        "title": "Надувные электро лодки Хантер",
                                        "text": "позволят добраться <br> до самых заветных мест рыбалки или отдыха.",
                                        "sub-text": "4 модели",
                                        "price-current": "9800",
                                        "src": "http://hb.d-idei.ru/img/index-page/01.png",
                                        "url": "http://hb.d-idei.ru/img/index-page/01.png"
                                    },
                                    {
                                        "title": "Супер моторные лодки Хантер",
                                        "text": "позволят доплыть <br> до самых заветных мест рыбалки или отдыха.",
                                        "sub-text": "2 модели",
                                        "price-current": "5400",
                                        "src": "http://hb.d-idei.ru/img/index-page/02.png",
                                        "url": "http://hb.d-idei.ru/img/index-page/02.png"
                                    },
                                    {
                                        "title": "Надувные лодки Хантер",
                                        "text": "довезут вас <br> до самых заветных мест рыбалки или отдыха.",
                                        "sub-text": "7 моделей",
                                        "price-current": "3500",
                                        "src": "http://hb.d-idei.ru/img/index-page/03.png",
                                        "url": "http://hb.d-idei.ru/img/index-page/03.png"
                                    },
                                    {
                                        "title": "Быстрые моторные лодки Хантер",
                                        "text": "позволят хорошо порыбачить и отдохнуть",
                                        "sub-text": "6 моделей",
                                        "price-current": "2100",
                                        "src": "http://hb.d-idei.ru/img/index-page/04.png",
                                        "url": "http://hb.d-idei.ru/img/index-page/04.png"
                                    }
                                ]
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
                                            elemMods: {state: 'current'}
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
                                            content: {
                                                block: 'link', mix: [
                                                    {block: 'index-promo-carousel', elem: 'url'}
                                                ], url: '/', content: 'Надувные моторные лодки Хантер'
                                            }
                                        },
                                        {
                                            elem: 'text',
                                            content: {
                                                elem: 'text-inner',
                                                content: 'позволят добраться <br> до самых заветных мест рыбалки или отдыха.'
                                            }
                                        },
                                        {
                                            elem: 'sub-text',
                                            content: '12 моделей'
                                        },
                                        {
                                            elem: 'price-current',
                                            content: [
                                                'от', {
                                                    block: 'price',
                                                    mods: {currency: 'dot-dash'},
                                                    value: 9800

                                                }
                                            ]
                                        },

                                        {
                                            elem: 'photo',
                                            url: 'img/index-page/01.png'
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
            mods: {page: 'index'},
            content: [
                {
                    block: 'wrapper-fix-width',
                    mods: {width: '962'},
                    content: [
                        {
                            block: 'content',
                            elem: 'column',
                            elemMods: {position: 'full'},
                            content: [
                                {
                                    block: 'index-page',
                                    content: [
                                        {
                                            block: 'link',
                                            mods: {linkto: 'catalog'},
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
                                                    elemMods: {position: 'center'},
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
                                                                    block: 'link',
                                                                    url: '/about.html',
                                                                    content: 'Узнать все о нас'
                                                                }
                                                            ]
                                                        }

                                                    ]
                                                },
                                                {
                                                    elem: 'column',
                                                    attrs: {style: 'margin: 58px 0 0;'},
                                                    content: [
                                                        {
                                                            block: 'brands',
                                                            mods: {style: 'compact'},
                                                            content: {
                                                                elem: 'list',
                                                                content: [
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'item-header',
                                                                            content: {
                                                                                block: 'b-icon',
                                                                                alt: 'yamaha',
                                                                                url: 'img/content/brand-icons/yamaha-logo_small.png'
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        attrs: {style: 'margin: 5px 0 -5px 15px;'},
                                                                        content: {
                                                                            elem: 'item-header',
                                                                            content: {
                                                                                block: 'b-icon',
                                                                                alt: 'hdx',
                                                                                url: 'img/content/brand-icons/hdx-logo_small.png'
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        content: {
                                                                            elem: 'item-header',
                                                                            content: {
                                                                                block: 'b-icon',
                                                                                alt: 'nissamaran',
                                                                                url: 'img/content/brand-icons/nissamaran-logo_small.png'
                                                                            }
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
                                                                    attrs: {
                                                                        style: 'margin-right: 0;width: 210px;'
                                                                    },
                                                                    content: 'Гарантия качества: сертифицированные лодки'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },

                                        {block: 'line', mods: {type: 'wavy-0081bd'}},

                                        {
                                            block: 'sale-stock',
                                            mix: [
                                                {
                                                    block: 'carousel',
                                                    mods: {type: 'horiz'},
                                                    js: {frameCurr: 1, frameItemsCount: 3, frameItemsStep: 3}
                                                }
                                            ],
                                            content: [
                                                {
                                                    block: 'carousel',
                                                    elem: 'control',
                                                    elemMods: {direction: 'prev'},
                                                    content: {
                                                        block: 'button',
                                                        mods: {direction: 'prev', type: 'carousel-horiz'}
                                                    }
                                                },
                                                {
                                                    block: 'carousel',
                                                    elem: 'control',
                                                    elemMods: {direction: 'next'},
                                                    content: {
                                                        block: 'button',
                                                        mods: {direction: 'next', type: 'carousel-horiz'}
                                                    }
                                                },
                                                {
                                                    elem: 'header',
                                                    content: 'Акции'
                                                },
                                                {
                                                    block: 'carousel',
                                                    elem: 'viewport',
                                                    content: {
                                                        block: 'sale-stock',
                                                        elem: 'list',
                                                        mix: [
                                                            {block: 'carousel', elem: 'items'}
                                                        ],
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                mix: [
                                                                    {block: 'carousel', elem: 'item'}
                                                                ],
                                                                content: {
                                                                    block: 'product-card',
                                                                    oldPrice: 65400
                                                                }
                                                            },
                                                            {
                                                                elem: 'item',
                                                                mix: [
                                                                    {block: 'carousel', elem: 'item'}
                                                                ],
                                                                content: {
                                                                    block: 'product-card',
                                                                    oldPrice: 5400
                                                                }
                                                            },
                                                            {
                                                                elem: 'item',
                                                                mix: [
                                                                    {block: 'carousel', elem: 'item'}
                                                                ],
                                                                content: {
                                                                    block: 'product-card',
                                                                    oldPrice: 15400
                                                                }
                                                            },
                                                            {
                                                                elem: 'item',
                                                                mix: [
                                                                    {block: 'carousel', elem: 'item'}
                                                                ],
                                                                content: {
                                                                    block: 'product-card',
                                                                    oldPrice: 15400
                                                                }
                                                            },
                                                            {
                                                                elem: 'item',
                                                                mix: [
                                                                    {block: 'carousel', elem: 'item'}
                                                                ],
                                                                content: {
                                                                    block: 'product-card',
                                                                    oldPrice: 15400
                                                                }
                                                            },
                                                            {
                                                                elem: 'item',
                                                                mix: [
                                                                    {block: 'carousel', elem: 'item'}
                                                                ],
                                                                content: {
                                                                    block: 'product-card',
                                                                    oldPrice: 15400
                                                                }
                                                            },
                                                            {
                                                                elem: 'item',
                                                                mix: [
                                                                    {block: 'carousel', elem: 'item'}
                                                                ],
                                                                content: {
                                                                    block: 'product-card',
                                                                    oldPrice: 15400
                                                                }
                                                            },
                                                            {
                                                                elem: 'item',
                                                                mix: [
                                                                    {block: 'carousel', elem: 'item'}
                                                                ],
                                                                content: {
                                                                    block: 'product-card',
                                                                    oldPrice: 15400
                                                                }
                                                            },
                                                            {
                                                                elem: 'item',
                                                                mix: [
                                                                    {block: 'carousel', elem: 'item'}
                                                                ],
                                                                content: {
                                                                    block: 'product-card',
                                                                    oldPrice: 15400
                                                                }
                                                            },
                                                            {
                                                                elem: 'item',
                                                                mix: [
                                                                    {block: 'carousel', elem: 'item'}
                                                                ],
                                                                content: {
                                                                    block: 'product-card',
                                                                    oldPrice: 15400
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },

                                        {block: 'line', mods: {type: 'wavy-0081bd'}},

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
                                                                    elemMods: {state: 'current'},
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
                                                                    elemMods: {state: 'current'},
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
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        url: 'newsone.html',
                                                                                        content: 'с Наступающим Новым 2013 годом'
                                                                                    }
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
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        url: '/',
                                                                                        content: 'Сезонные скидки на надувные лодки Хантер'
                                                                                    }
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
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        url: '/',
                                                                                        content: 'Новинка от «Бот-Трэйдинг» - Надувная килевая бюджетная лодка Хантер 320 ЛК'
                                                                                    }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'link-to-all',
                                                                            content: {
                                                                                block: 'link',
                                                                                url: 'news.html',
                                                                                content: 'Все новости'
                                                                            }
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
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        url: 'articlesone.html',
                                                                                        content: 'Статья с Наступающим Новым 2013 годом'
                                                                                    }
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
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        url: '/',
                                                                                        content: 'Статья Сезонные скидки на надувные лодки Хантер'
                                                                                    }
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
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        url: '/',
                                                                                        content: 'Статья Новинка от «Бот-Трэйдинг» - Надувная килевая бюджетная лодка Хантер 320 ЛК'
                                                                                    }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'link-to-all',
                                                                            content: {
                                                                                block: 'link',
                                                                                url: 'articles.html',
                                                                                content: 'Все статьи'
                                                                            }
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
                                                                                    mix: [{
                                                                                        block: 'text-truncate',
                                                                                        js: {stringLength: 50}
                                                                                    }],
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        url: 'reviews.html',
                                                                                        content: 'Отзыв с Наступающим Новым 2013 годом Отзыв с Наступающим Новым 2013 годом'
                                                                                    }
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
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        url: '/',
                                                                                        content: 'Отзыв Сезонные скидки на надувные лодки Хантер'
                                                                                    }
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
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        url: '/',
                                                                                        content: 'Отзыв Новинка от «Бот-Трэйдинг» - Надувная килевая бюджетная лодка Хантер 320 ЛК'
                                                                                    }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'link-to-all',
                                                                            content: {
                                                                                block: 'link',
                                                                                url: 'reviews.html',
                                                                                content: 'Все отзывы'
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
                                                            content: {
                                                                block: 'link',
                                                                url: '/photoalbum.html',
                                                                content: 'Тест драйв лодки Хантер 280 Т'
                                                            }
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
                                                    block: 'link',
                                                    mods: {'linkto': 'photoalbums'},
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
                    mods: {width: '962'},
                    content: [
                        {
                            block: 'footer',
                            elem: 'column',
                            elemMods: {position: 'left'},
                            content: [
                                {
                                    block: 'contacts',
                                    mods: {color: 'e5e5e5'},
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
                                                block: 'link',
                                                mods: {pseudo: 'yes'},
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
                            elemMods: {position: 'center'},
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
                            elemMods: {position: 'right'},
                            content: [
                                {
                                    block: 'studio-idei',
                                    mods: {color: '909090'},
                                    projectUrl: 'project-url'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
