({
    block: 'b-page',
    title: 'vacancy',
    head: [
        { elem: 'css', url: '_vacancy.css', ie: false},
        { elem: 'css', url: '_vacancy', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_vacancy.js'}
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
                        }
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
                                    block: 'vacancies',
                                    content: [
                                        {
                                            elem: 'top',
                                            content: [
                                                {
                                                    elem: 'header',
                                                    mix: [{ block: 'patternizer', js: { 'data-pattern': 'img/headers/Vacancy.jpg' } }],
                                                    content: 'Вакансии'
                                                },
                                                {
                                                    elem: 'text',
                                                    content: [
                                                        'Если Вы заинтересованы в работе в стабильной и сильной ',
                                                        { block: 'b-link', url: '/', content: 'компании' } ,
                                                        ' просим Вас ознакомиться со списком открытых вакансии:'
                                                    ]
                                                },
                                                {
                                                    elem: 'info',
                                                    content: [
                                                        {
                                                            elem: 'info-header',
                                                            content: 'По вопросу вакансий звоните:'
                                                        },
                                                        {
                                                            elem: 'info-phone',
                                                            content: '8 (812) 654-32-55'
                                                        },
                                                        {
                                                            elem: 'info-phone',
                                                            content: '8 (911) 779-65-59'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'list',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    content: {
                                                        block: 'vacancy',
                                                        content: [
                                                            {
                                                                elem: 'title',
                                                                content: 'Сборщик - склейщик надувных лодок (установка дна)'
                                                            },
                                                            {
                                                                elem: 'desc',
                                                                content: [
                                                                    {
                                                                        elem: 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem: 'desc-name',
                                                                                content: 'Требования:'

                                                                            },
                                                                            {
                                                                                elem: 'desc-content',
                                                                                content: {
                                                                                    block: 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'ul',
                                                                                            elemMods: { 'list-type': 'none' },
                                                                                            content: [
                                                                                                {
                                                                                                    elem: 'li',
                                                                                                    content: 'Желателен опыт работы на аналогичной должности;'
                                                                                                },
                                                                                                {
                                                                                                    elem: 'li',
                                                                                                    content: 'Без вредных привычек;'
                                                                                                },
                                                                                                {
                                                                                                    elem: 'li',
                                                                                                    content: 'Ответственность и коммуникабельность, аккуратность, умение работать в коллективе;'
                                                                                                },
                                                                                                {
                                                                                                    elem: 'li',
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
                                                                        elem: 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem: 'desc-name',
                                                                                content: 'Обязанности:'

                                                                            },
                                                                            {
                                                                                elem: 'desc-content',
                                                                                content: {
                                                                                    block: 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'p',
                                                                                            content: 'Установка днищ из ткани ПВХ на надувные лодки. Возможно обучение. Работа в графике. Зарплата сдельная от <em>35 000 руб</em>. выплачивается еженедельно.'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem: 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem: 'desc-name',
                                                                                content: 'Условия:'

                                                                            },
                                                                            {
                                                                                elem: 'desc-content',
                                                                                content: {
                                                                                    block: 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'p',
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
                                                { block: 'line', mods: { type: 'wavy-0081bd' } },
                                                {
                                                    elem: 'item',
                                                    content: {
                                                        block: 'vacancy',
                                                        content: [
                                                            {
                                                                elem: 'title',
                                                                content: 'Сборщик - склейщик надувных лодок (установка дна)'
                                                            },
                                                            {
                                                                elem: 'desc',
                                                                content: [
                                                                    {
                                                                        elem: 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem: 'desc-name',
                                                                                content: 'Требования:'

                                                                            },
                                                                            {
                                                                                elem: 'desc-content',
                                                                                content: {
                                                                                    block: 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'ul',
                                                                                            elemMods: { 'list-type': 'none' },
                                                                                            content: [
                                                                                                {
                                                                                                    elem: 'li',
                                                                                                    content: 'Желателен опыт работы на аналогичной должности;'
                                                                                                },
                                                                                                {
                                                                                                    elem: 'li',
                                                                                                    content: 'Без вредных привычек;'
                                                                                                },
                                                                                                {
                                                                                                    elem: 'li',
                                                                                                    content: 'Ответственность и коммуникабельность, аккуратность, умение работать в коллективе;'
                                                                                                },
                                                                                                {
                                                                                                    elem: 'li',
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
                                                                        elem: 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem: 'desc-name',
                                                                                content: 'Обязанности:'

                                                                            },
                                                                            {
                                                                                elem: 'desc-content',
                                                                                content: {
                                                                                    block: 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'p',
                                                                                            content: 'Установка днищ из ткани ПВХ на надувные лодки. Возможно обучение. Работа в графике. Зарплата сдельная от <em>35 000 руб</em>. выплачивается еженедельно.'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem: 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem: 'desc-name',
                                                                                content: 'Условия:'

                                                                            },
                                                                            {
                                                                                elem: 'desc-content',
                                                                                content: {
                                                                                    block: 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'p',
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
                                                { block: 'line', mods: { type: 'wavy-0081bd' } },
                                                {
                                                    elem: 'item',
                                                    content: {
                                                        block: 'vacancy',
                                                        content: [
                                                            {
                                                                elem: 'title',
                                                                content: 'Сборщик - склейщик надувных лодок (установка дна)'
                                                            },
                                                            {
                                                                elem: 'desc',
                                                                content: [
                                                                    {
                                                                        elem: 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem: 'desc-name',
                                                                                content: 'Требования:'

                                                                            },
                                                                            {
                                                                                elem: 'desc-content',
                                                                                content: {
                                                                                    block: 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'ul',
                                                                                            elemMods: { 'list-type': 'none' },
                                                                                            content: [
                                                                                                {
                                                                                                    elem: 'li',
                                                                                                    content: 'Желателен опыт работы на аналогичной должности;'
                                                                                                },
                                                                                                {
                                                                                                    elem: 'li',
                                                                                                    content: 'Без вредных привычек;'
                                                                                                },
                                                                                                {
                                                                                                    elem: 'li',
                                                                                                    content: 'Ответственность и коммуникабельность, аккуратность, умение работать в коллективе;'
                                                                                                },
                                                                                                {
                                                                                                    elem: 'li',
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
                                                                        elem: 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem: 'desc-name',
                                                                                content: 'Обязанности:'

                                                                            },
                                                                            {
                                                                                elem: 'desc-content',
                                                                                content: {
                                                                                    block: 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'p',
                                                                                            content: 'Установка днищ из ткани ПВХ на надувные лодки. Возможно обучение. Работа в графике. Зарплата сдельная от <em>35 000 руб</em>. выплачивается еженедельно.'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        elem: 'desc-item',
                                                                        content: [
                                                                            {
                                                                                elem: 'desc-name',
                                                                                content: 'Условия:'

                                                                            },
                                                                            {
                                                                                elem: 'desc-content',
                                                                                content: {
                                                                                    block: 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'p',
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
