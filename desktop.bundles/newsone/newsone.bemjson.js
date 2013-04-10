({
    block: 'b-page',
    title: 'news_item',
    head: [
        { elem: 'css', url: '_newsone.css', ie: false},
        { elem: 'css', url: '_newsone', ie: true },
        /*{ block: 'i-jquery', elem: 'core'},*/
        { elem: 'js', url: 'jquery-1.7.2.js'},
        { elem: 'js', url:'_newsone.js'},
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
                                elemMods: { position: 'full' },
                                content : [
                                    {
                                        block  : 'article-item',
                                        content: [
                                            {
                                                elem: 'top',
                                                content: [
                                                    {
                                                        elem: 'header',
                                                        content: 'Новости'
                                                    },
                                                    {
                                                        elem: 'link-to-all',
                                                        url: 'news/all',
                                                        content: 'К списку всех статей'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'title',
                                                content: 'Тест – драйв надувной лодки Хантер 360'
                                            },
                                            {
                                                elem: 'date',
                                                content: '21 октября 2009'
                                            },
                                            {
                                                elem: 'content',
                                                content: [
                                                    {
                                                        block  : 'b-text',
                                                        content: [
                                                            {
                                                                elem   : 'p',
                                                                content: 'Новинку от компании «Бот-Трэйдинг» было решено испытать перед наступлением морозов, метелей и прочих природных катаклизмов,  обещанных нам Гидрометцентром. '
                                                            },
                                                            {
                                                                elem   : 'p',
                                                                content: 'Прибыв утром на точку испытаний, и достав из «Газели» лодку мы начали готовить ее к спуску на воду и собственно тест-драйву. Для оценки всех мореходных качеств надувной лодки Хантер на тест были привезены три подвесных лодочных мотора – это Mercury 6 л.с 4 такта, Suzuki 15 2 такта (он же форсированная Суза 9,9), и Yamaha 25 л.с 2 такта,  что позволило оттестировать лодку под всеми возможными режимами в разных вариациях.'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block  : 'articles-images',
                                                        content: [
                                                            {
                                                                elem: 'image',
                                                                src : ''
                                                            },
                                                            {
                                                                elem: 'image',
                                                                src : ''
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block  : 'b-text',
                                                        arrts: { 'style': 'display: inline-block' },
                                                        content: [
                                                            {
                                                                elem   : 'p',
                                                                content: 'Упаковка надувной лодки Хантер 360 состоит из двух сумок: одна сумка - непосредственно лодка с банками, веслами и помпой, вторая сумка рассчитана только на пайольные полы, стрингера упакованы в отдельный чехол. Важно отметить, что упаковочные сумки надувной лодки Хантер 360 выполнены из сверхпрочной ткани D 600, с качественной фурнитурой и удобными ручками.  '
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block  : 'b-text',
                                                        content: [
                                                            {
                                                                elem   : 'p',
                                                                content: 'После проведенного тест-драйва о лодке Хантер 360 можно сказать следующее - на рынке появилась достойная лодка, не уступающая по своим ходовым и техническим характеристикам, более именитым собратьям, но имеющая свои отличительные черты:'
                                                            },
                                                            {
                                                                elem: 'p',
                                                                content: 'Прибыв утром на точку испытаний, и достав из «Газели» лодку мы начали готовить ее к спуску на воду и собственно тест-драйву. Для оценки всех мореходных качеств надувной лодки Хантер на тест были привезены три подвесных лодочных мотора – это Mercury 6 л.с 4 такта, Suzuki 15 2 такта (он же форсированная Суза 9,9), и Yamaha 25 л.с 2 такта,  что позволило оттестировать лодку под всеми возможными режимами в разных вариациях.'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'links',
                                                content: [
                                                    {
                                                        elem: 'link',
                                                        elemMods: { direction: 'prev' },
                                                        content: { block: 'b-link', url: '/', content: 'Предыдущая новость' }
                                                    },
                                                    {
                                                        elem: 'link',
                                                        elemMods: { direction: 'next' },
                                                        content: { block: 'b-link', url: '/', content: 'Следующая новость' }
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
