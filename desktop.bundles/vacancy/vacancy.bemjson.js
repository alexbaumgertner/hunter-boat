({
    block  : 'b-page',
    title  : 'vacancy',
    head   : [
        { elem: 'css', url: '_vacancy.css', ie: false},
        { elem: 'css', url: '_vacancy', ie: true },
        /*{ block: 'i-jquery', elem: 'core'},*/
        { elem: 'js', url: 'jquery-1.7.2.js'},
        { elem: 'js', url: '_vacancy.js'},
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
                                                    content: { block: 'price', mods: { currency: 'RUB' }, value: '95000' }
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
                    mods   : { width: '982' },
                    content: [
                        {
                            block   : 'content',
                            elem    : 'column',
                            elemMods: { position: 'full' },
                            content : [
                                {
                                    block  : 'vacancies',
                                    content: [
                                        {
                                            elem   : 'top',
                                            content: [
                                                {
                                                    elem   : 'header',
                                                    content: 'Вакансии'
                                                },
                                                {
                                                    elem   : 'text',
                                                    content: [
                                                        'Если Вы заинтересованы в работе в стабильной и сильной ', { block: 'b-link', url: '/', content: 'компании' } , ' просим Вас ознакомиться со списком открытых вакансии:'
                                                    ]
                                                },
                                                {
                                                    elem   : 'info',
                                                    content: 'По вопросу вакансий звоните:  <p>(812) 654-32-55/<p> <p>8 (911) 779-65-59</p>'
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'list',
                                            content: [
                                                {
                                                    elem   : 'item',
                                                    content: {
                                                        block  : 'vacancy',
                                                        content: [
                                                            {
                                                                elem   : 'title',
                                                                content: 'Сборщик - склейщик надувных лодок (установка дна)'
                                                            },
                                                            {
                                                                elem   : 'desc',
                                                                content: [
                                                                    {
                                                                        elem   : 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem   : 'desc-name',
                                                                                content: 'Требования:'

                                                                            },
                                                                            {
                                                                                elem   : 'desc-content',
                                                                                content: {
                                                                                    block  : 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'ul',
                                                                                            elemMods: { 'list-type': 'none' },
                                                                                            content: [
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: 'Желателен опыт работы на аналогичной должности;'
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: 'Без вредных привычек;'
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: 'Ответственность и коммуникабельность, аккуратность, умение работать в коллективе;'
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: 'Мужчина;'
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem   : 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem   : 'desc-name',
                                                                                content: 'Обязанности:'

                                                                            },
                                                                            {
                                                                                elem   : 'desc-content',
                                                                                content: {
                                                                                    block  : 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'p',
                                                                                            content: 'Установка днищ из ткани ПВХ на надувные лодки. Возможно обучение. Работа в графике. Зарплата сдельная от <em>35 000 руб</em>. выплачивается еженедельно.'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem   : 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem   : 'desc-name',
                                                                                content: 'Условия:'

                                                                            },
                                                                            {
                                                                                elem   : 'desc-content',
                                                                                content: {
                                                                                    block  : 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'p',
                                                                                            content: 'Полный рабочий день , работа в графике, выполнение плана, оформление по ТК РФ.'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem   : 'item',
                                                    content: {
                                                        block  : 'vacancy',
                                                        content: [
                                                            {
                                                                elem   : 'title',
                                                                content: 'Сборщик - склейщик надувных лодок (установка дна)'
                                                            },
                                                            {
                                                                elem   : 'desc',
                                                                content: [
                                                                    {
                                                                        elem   : 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem   : 'desc-name',
                                                                                content: 'Требования:'

                                                                            },
                                                                            {
                                                                                elem   : 'desc-content',
                                                                                content: {
                                                                                    block  : 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'ul',
                                                                                            elemMods: { 'list-type': 'none' },
                                                                                            content: [
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: 'Желателен опыт работы на аналогичной должности;'
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: 'Без вредных привычек;'
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: 'Ответственность и коммуникабельность, аккуратность, умение работать в коллективе;'
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: 'Мужчина;'
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem   : 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem   : 'desc-name',
                                                                                content: 'Обязанности:'

                                                                            },
                                                                            {
                                                                                elem   : 'desc-content',
                                                                                content: {
                                                                                    block  : 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'p',
                                                                                            content: 'Установка днищ из ткани ПВХ на надувные лодки. Возможно обучение. Работа в графике. Зарплата сдельная от <em>35 000 руб</em>. выплачивается еженедельно.'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem   : 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem   : 'desc-name',
                                                                                content: 'Условия:'

                                                                            },
                                                                            {
                                                                                elem   : 'desc-content',
                                                                                content: {
                                                                                    block  : 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'p',
                                                                                            content: 'Полный рабочий день , работа в графике, выполнение плана, оформление по ТК РФ.'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem   : 'item',
                                                    content: {
                                                        block  : 'vacancy',
                                                        content: [
                                                            {
                                                                elem   : 'title',
                                                                content: 'Сборщик - склейщик надувных лодок (установка дна)'
                                                            },
                                                            {
                                                                elem   : 'desc',
                                                                content: [
                                                                    {
                                                                        elem   : 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem   : 'desc-name',
                                                                                content: 'Требования:'

                                                                            },
                                                                            {
                                                                                elem   : 'desc-content',
                                                                                content: {
                                                                                    block  : 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'ul',
                                                                                            elemMods: { 'list-type': 'none' },
                                                                                            content: [
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: 'Желателен опыт работы на аналогичной должности;'
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: 'Без вредных привычек;'
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: 'Ответственность и коммуникабельность, аккуратность, умение работать в коллективе;'
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: 'Мужчина;'
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem   : 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem   : 'desc-name',
                                                                                content: 'Обязанности:'

                                                                            },
                                                                            {
                                                                                elem   : 'desc-content',
                                                                                content: {
                                                                                    block  : 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'p',
                                                                                            content: 'Установка днищ из ткани ПВХ на надувные лодки. Возможно обучение. Работа в графике. Зарплата сдельная от <em>35 000 руб</em>. выплачивается еженедельно.'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem   : 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem   : 'desc-name',
                                                                                content: 'Условия:'

                                                                            },
                                                                            {
                                                                                elem   : 'desc-content',
                                                                                content: {
                                                                                    block  : 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'p',
                                                                                            content: 'Полный рабочий день , работа в графике, выполнение плана, оформление по ТК РФ.'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
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
