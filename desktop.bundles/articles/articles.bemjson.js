({
    block: 'b-page',
    title: 'articles',
    head: [
        { elem: 'css', url: '_articles.css', ie: false},
        { elem: 'css', url: '_articles', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_articles.js'},
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
                                    block: 'articles',
                                    content: [
                                        {
                                            elem: 'header',
                                            content: 'Статьи'
                                        },
                                        {
                                            elem: 'list',
                                            content: (function () {
                                                var items = [];

                                                var photos = [
                                                    '/repair-boat-707/1_small.jpg', '/test-drive-101/1_small.jpg',
                                                    '/fix-and-replay/1_small.jpg', '/super-tent-1/1_small.jpg',
                                                    '/develop-505/1_small.jpg'
                                                ];

                                                var titles = [
                                                    'Tест – драйв надувной лодки Хантер 360',
                                                    'Сборка полов на лодке Хантер 320. Фотоинструкция',
                                                    'Ремонт надувной лодки ПВХ своими силами',
                                                    'Как собрать надувную лодку Хантер. Инструкция',
                                                    'Тюнинг гребной надувной лодки ПВХ'
                                                ];

                                                var contents = [
                                                    'Купил вашу лодку в магазине «Лодки-Питер» - очень порадовало качество изготовления. Но самое главное диаметр баллона – то что нужно для рыбалки.',
                                                    '',
                                                    'В жизни всякое бывает - то крысы появляются в самых неожиданных местах, да и торчащие из воды прутья арматуры сейчас уже не редкость на наших водоемах.',
                                                    'Итак, вы стали обладателем надувной лодки Хантер, не важно какого размера и какой модели. Главное что вы получили или забрали из магазина заветный рюкзак с самой...',
                                                    'Ситуация, когда наступает необходимость модернизировать свою надувную лодку, рано или поздно возникает у любого рыбака.'

                                                ];


                                                for (var i = 0; i < 5; i++) {

                                                    items.push({
                                                        elem: 'item',
                                                        content: {
                                                            block: 'article',
                                                            content: [
                                                                {
                                                                    elem: 'column',
                                                                    elemMods: { position: 'left' },
                                                                    content: [
                                                                        {
                                                                            elem: 'photo',
                                                                            src: 'img/news' + photos[(Math.floor(Math.random() * photos.length))]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'column',
                                                                    elemMods: { position: 'right' },
                                                                    content: [
                                                                        {
                                                                            elem: 'date',
                                                                            content: '28 марта 2011'
                                                                        },
                                                                        {
                                                                            elem: 'title',
                                                                            content: { block: 'b-link', url: '', content: titles[(Math.floor(Math.random() * titles.length))] }

                                                                        },
                                                                        {
                                                                            elem: 'content',
                                                                            content: contents[(Math.floor(Math.random() * contents.length))]
                                                                        },
                                                                        {
                                                                            elem: 'link',
                                                                            content: { block: 'b-link', url: '', content: 'Подробно' }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    });
                                                }



                                                return items;

                                            }()),
                                        },
                                        {
                                            elem: 'paginator',
                                            content: {
                                                block: 'paginator',
                                                itemsTotal: 15,
                                                itemsUrlPrefix: '/articles/',
                                                itemsVisible: 4,
                                                itemCurr: 2
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
