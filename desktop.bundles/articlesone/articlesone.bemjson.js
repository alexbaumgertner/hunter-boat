({
    block: 'b-page',
    title: 'articles_item',
    head: [
        { elem: 'css', url: '_articlesone.css', ie: false},
        { elem: 'css', url: '_articlesone', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_articlesone.js'},
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
                                    block: 'article-item',
                                    content: [
                                        {
                                            elem: 'top',
                                            content: [
                                                {
                                                    elem: 'header',
                                                    mix: [{ block: 'patternizer', js: { 'data-pattern': 'img/headers/Article-one.jpg' } }],
                                                    content: 'Статьи'
                                                },
                                                {
                                                    elem: 'link-to-all',
                                                    url: 'articles.html',
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
                                                    tag: 'p',
                                                    content: 'Новинку от компании «Бот-Трэйдинг» было решено испытать перед наступлением морозов, метелей и прочих природных катаклизмов,  обещанных нам Гидрометцентром. '
                                                },

                                                {
                                                    tag: 'p',
                                                    content: 'Прибыв утром на точку испытаний, и достав из «Газели» лодку мы начали готовить ее к спуску на воду и собственно тест-драйву. Для оценки всех мореходных качеств надувной лодки Хантер на тест были привезены три подвесных лодочных мотора – это Mercury 6 л.с 4 такта, Suzuki 15 2 такта (он же форсированная Суза 9,9), и Yamaha 25 л.с 2 такта,  что позволило оттестировать лодку под всеми возможными режимами в разных вариациях.'
                                                },
                                                {
                                                    tag: 'img',
                                                    attrs: {
                                                        src: 'http://hb.d-idei.ru/img/articles/test-article/2_small.jpg'
                                                    }
                                                },
                                                {
                                                    tag: 'img',
                                                    attrs: {
                                                        src: 'http://hb.d-idei.ru/img/articles/test-article/1_small.jpg'
                                                    }
                                                },
                                                {
                                                    tag: 'img',
                                                    attrs: {
                                                        src: 'http://hb.d-idei.ru/img/articles/test-article/3_small.jpg'
                                                    }
                                                },
                                                {
                                                    tag: 'p',
                                                    content: 'Новинку от компании «Бот-Трэйдинг» было решено испытать перед наступлением морозов, метелей и прочих природных катаклизмов,  обещанных нам Гидрометцентром. '
                                                },

                                                {
                                                    tag: 'p',
                                                    content: 'Прибыв утром на точку испытаний, и достав из «Газели» лодку мы начали готовить ее к спуску на воду и собственно тест-драйву. Для оценки всех мореходных качеств надувной лодки Хантер на тест были привезены три подвесных лодочных мотора – это Mercury 6 л.с 4 такта, Suzuki 15 2 такта (он же форсированная Суза 9,9), и Yamaha 25 л.с 2 такта,  что позволило оттестировать лодку под всеми возможными режимами в разных вариациях.'
                                                },
                                                {
                                                    tag: 'img',
                                                    attrs: {
                                                        src: 'http://hb.d-idei.ru/img/articles/test-article/6_small.jpg'
                                                    }
                                                },
                                                {
                                                    tag: 'img',
                                                    attrs: {
                                                        src: 'http://hb.d-idei.ru/img/articles/test-article/4_small.jpg'
                                                    }
                                                },
                                                {
                                                    tag: 'img',
                                                    attrs: {
                                                        src: 'http://hb.d-idei.ru/img/articles/test-article/5_small.jpg'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'modules',
                                            content: [
                                                {
                                                    elem: 'module',
                                                    content: { block: 'product-card', mods: { background: 'white-shadow' } },
                                                },
                                                {
                                                    elem: 'module',
                                                    content: 'место модуля'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'links',
                                            content: [
                                                {
                                                    elem: 'link',
                                                    elemMods: { direction: 'prev' },
                                                    content: { block: 'b-link', url: '/', content: 'Предыдущая статья' }
                                                },
                                                {
                                                    elem: 'link',
                                                    elemMods: { direction: 'next' },
                                                    content: { block: 'b-link', url: '/', content: 'Следующая статья' }
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
