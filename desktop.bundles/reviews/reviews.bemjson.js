({
    block  : 'b-page',
    title  : 'reviews',
    head   : [
        { elem: 'css', url: '_reviews.css', ie: false},
        { elem: 'css', url: '_reviews', ie: true },
        /*{ block: 'i-jquery', elem: 'core'},*/
        { elem: 'js', url: 'jquery-1.7.2.js'},
        { elem: 'js', url: '_reviews.js'},
    ],
    content: [
        {
            block  : 'header',
            content: [
                {
                                                    block  : 'wrapper-fix-width',
                                                    mods   : { width: '982' },
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
                                                                                url    : '/order.html',
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
                                                                            content : {
                                                                                elem   : 'list',
                                                                                content: [
                                                                                    {
                                                                                        elem    : 'item',
                                                                                        elemMods: { section: 'catalog' },
                                                                                        name    : 'Каталог',
                                                                                        url     : '/catalog.html'
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
                                                                                        url : '/about.html'
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        elemMods: { state: 'current' },
                                                                                        name: 'Отзывы',
                                                                                        url : '/reviews.html'
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        name: 'Вопрос-ответ',
                                                                                        url : '/faq.html'
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        name: 'Фотографии',
                                                                                        url : '/photoalbums.html'
                                                                                    },
                                                                                    {
                                                                                        elem: 'item',
                                                                                        name: 'Оптовикам',
                                                                                        url : '/dealers.html'
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
                                                                            url : '/how-to-buy.html'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            name: 'Где купить',
                                                                            url : '/where-to-buy.html'
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            name: 'Доставка',
                                                                            url : '/delivery.html'
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
            block  : 'content',
            content: [
                {
                    block  : 'wrapper-fix-width',
                    mods   : { width: '982' },
                    content: [
                        {
                            block   : 'content',
                            elem    : 'column',
                            elemMods: { position: 'full' },
                            content : [
                                {
                                    block  : 'reviews',

                                    content: [
                                        {
                                            elem   : 'header',

                                            content: 'Отзывы',
                                            mix: [{ block: 'text-mask', image: 'template/mask/'}]
                                        },
                                        {
                                            elem   : 'list',
                                            content: (function () {
                                                var content = [];

                                                var names = ['Олег', 'Владимир', 'Наталия', 'Степан Никифорович', 'Федор'];
                                                var cities = ['Санкт-Петербург', 'Севастополь', 'Великий Новгород', 'Калининград', 'Москва', 'Екатеринбург', ''];

                                                var review = [
                                                'Купил вашу лодку в магазине «Лодки-Питер» - очень порадовало качество изготовления. Но самое главное диаметр баллона – то что нужно для рыбалки. Спасибо ….',
                                                'Заказывал лодку Хантер 280 РТ через сайт. Доставили вовремя, как раз ко дню рождения, менеджеры молодцы – постоянно информируют о движении товара. Так держать – сразу же дозаказал дополнительные полы -передали в Питере (доставили в гостиницу).',
                                                'БОЛЬШОЕ ВАМ СПАСИБО ПОЛУЧИЛ СВОЙ ЗАКАЗ ЛОДКУ БЫСТРО И БЕЗ ПРОБЛЕМ ЖЕЛАЮ ВАМ УДАЧИ И С НАСТУПАЮЩИМ НОВЫМ ГОДОМ. ',
                                                'Здравствуйте! Лодки получили, большое спасибо. Лодки замечательные! Если вашему предприятию это интересно, мы будем рады сотрудничеству с вами по следующим направлениям. Мы могли бы стать вашими представителями у нас в регионе и заняться реализацией Вашей продукции в Сыктывкаре и Республике Коми. Либо вы можете использовать наш производственный потенциал для производства лодок. ',
                                                'Заказывал лодку Хантер 280 РТ через сайт. Доставили вовремя, как раз ко дню рождения, менеджеры молодцы – постоянно информируют о движении товара. Так держать – сразу же дозаказал дополнительные полы -передали в Питере (доставили в гостиницу).',
                                                ];

                                                for (var i = 0; i < 7; i++) {
                                                    content.push({
                                                        elem   : 'item',
                                                        content: {
                                                            block  : 'product-review',
                                                            mods: { style: 'two-col' },
                                                            content: [
                                                                {
                                                                    elem: 'column',
                                                                    elemMods: { position: 'left' },
                                                                    content : {
                                                                        elem   : 'date',
                                                                        content: '21 октября 2009 года'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'column',
                                                                    elemMods: { position: 'right' },
                                                                    content: [
                                                                        {
                                                                            elem   : 'header',
                                                                            content: [
                                                                                { elem: 'author', content: names[(Math.floor(Math.random() * names.length))] },

                                                                                { elem: 'author-address', content: cities[(Math.floor(Math.random() * cities.length))] }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem   : 'content',
                                                                            content: review[(Math.floor(Math.random() * review.length))]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    });
                                                }

                                                return content;

                                            } ())
                                        },
                                        {
                                            elem: 'add',
                                            content: {
                                                block: 'b-link',
                                                url: '/'
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
            block  : 'footer',
            content: [
                {
                    block  : 'wrapper-fix-width',
                    mods   : { width: '982' },
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
                                    mods      : { color: '909090' },
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
