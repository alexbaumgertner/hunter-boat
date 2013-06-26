({
    block: 'b-page',
    title: 'order-params',
    head: [
        { elem: 'css', url: '_order-params.css', ie: false},
        { elem: 'css', url: '_order-params', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'_order-params.js'},
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
                                                elemMods: { state: 'current' },
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
                                    block: 'order-page',
                                    content: [
                                        {
                                            elem: 'menu',
                                            content: [
                                                {
                                                    elem: 'menu-item',

                                                    content: 'Уточнение заказа'
                                                },
                                                {
                                                    elem: 'menu-limiter'
                                                },
                                                {
                                                    elem: 'menu-item',
                                                    content: 'Авторизация'
                                                },
                                                {
                                                    elem: 'menu-limiter'
                                                },
                                                {
                                                    elem: 'menu-item',
                                                    elemMods: { state: 'current' },
                                                    content: 'Параметры заказа'
                                                },
                                                {
                                                    elem: 'menu-limiter'
                                                },
                                                {
                                                    elem: 'menu-item',
                                                    content: 'Подтверждение заказа'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'content',
                                            content: [
                                                {
                                                    elem: 'tab',
                                                    elemMods: { state: 'current' },
                                                    content: [
                                                        {
                                                            block: 'radio-switcher',
                                                            content: [
                                                                {
                                                                    elem: 'header',
                                                                    content: 'Способ оплаты'
                                                                },
                                                                {
                                                                    elem: 'list',
                                                                    mix: [
                                                                        { block: 'tabbed-pane', js: { id: 'payment-variants' } }
                                                                    ],
                                                                    content: [
                                                                        {
                                                                            elem: 'item',
                                                                            content: { block: 'input', type: 'radio', name: 'pay-method', value: 'cash', checked: 'checked', label: 'Наличными' }
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: { block: 'input', type: 'radio', name: 'pay-method', value: 'cash', label: 'Банковской картой' }
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: { block: 'input', type: 'radio', name: 'pay-method', value: 'cash', label: 'Выписать счёт' }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'tabs',
                                                                    mix: [
                                                                        { block: 'tabbed-pane', js: { id: 'payment-variants' } }
                                                                    ],
                                                                    content: [
                                                                        {
                                                                            elem: 'tab',
                                                                            content: {
                                                                                block: 'b-text',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'p',
                                                                                        content: 'Строчка текста Наличными'
                                                                                    },
                                                                                    {
                                                                                        elem: 'p',
                                                                                        content: 'Строчка текста Наличными'
                                                                                    },
                                                                                    {
                                                                                        elem: 'p',
                                                                                        content: 'Строчка текста Наличными'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'tab',
                                                                            content: {
                                                                                block: 'b-text',
                                                                                content: [
                                                                                    {
                                                                                        elem: 'p',
                                                                                        content: 'Строчка текста Банковаская карта'
                                                                                    },
                                                                                    {
                                                                                        elem: 'p',
                                                                                        content: 'Строчка текста Банковаская карта'
                                                                                    },
                                                                                    {
                                                                                        elem: 'p',
                                                                                        content: 'Строчка текста Банковаская карта'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'tab',
                                                                            content: [
                                                                                {
                                                                                    block: 'company-legal-info',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'orgname',
                                                                                            content: {
                                                                                                block: 'fieldset',
                                                                                                legend: 'Введите информацию для выставления счета',
                                                                                                content: [
                                                                                                    {
                                                                                                        block: 'input',
                                                                                                        name: 'orgname',
                                                                                                        placeholder: 'Наименование организации'

                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem: 'address',
                                                                                            content: [
                                                                                                {
                                                                                                    block: 'fieldset',
                                                                                                    legend: 'Юридический адрес:',
                                                                                                    content: [
                                                                                                        {
                                                                                                            block: 'input',
                                                                                                            name: 'orgname',
                                                                                                            placeholder: 'Индекс',
                                                                                                            style: 'width: 218px;'
                                                                                                        },
                                                                                                        {
                                                                                                            block: 'input',
                                                                                                            name: 'orgname',
                                                                                                            placeholder: 'Город',
                                                                                                            style: 'width: 217px; margin: 0 0 0 15px;'
                                                                                                        },
                                                                                                        {
                                                                                                            block: 'input',
                                                                                                            name: 'orgname',
                                                                                                            placeholder: 'Адрес'
                                                                                                        },
                                                                                                        {
                                                                                                            block: 'input',
                                                                                                            name: 'orgname',
                                                                                                            placeholder: 'ИНН',
                                                                                                            style: 'width: 218px;'
                                                                                                        },
                                                                                                        {
                                                                                                            block: 'input',
                                                                                                            name: 'orgname',
                                                                                                            placeholder: 'КПП',
                                                                                                            style: 'width: 217px; margin: 0 0 0 15px;'
                                                                                                        }

                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            elem: 'banking-details',
                                                                                            content: {
                                                                                                block: 'fieldset',
                                                                                                content: [
                                                                                                    {
                                                                                                        block: 'input',
                                                                                                        name: 'orgname',
                                                                                                        placeholder: 'Название банка',
                                                                                                        style: 'width: 455px;'
                                                                                                    },
                                                                                                    {
                                                                                                        block: 'input',
                                                                                                        name: 'orgname',
                                                                                                        placeholder: 'Город (банка)',
                                                                                                        style: 'width: 300px; margin: 0 0 0 15px;'
                                                                                                    },
                                                                                                    {
                                                                                                        block: 'input',
                                                                                                        name: 'orgname',
                                                                                                        placeholder: 'БИК',
                                                                                                        style: 'width: 250px;'
                                                                                                    },
                                                                                                    {
                                                                                                        block: 'input',
                                                                                                        name: 'orgname',
                                                                                                        placeholder: 'Корреспондентский счет',
                                                                                                        style: 'width: 245px; margin: 0 0 0 15px;'
                                                                                                    },
                                                                                                    {
                                                                                                        block: 'input',
                                                                                                        name: 'orgname',
                                                                                                        placeholder: 'Расчетный счет',
                                                                                                        style: 'width: 245px; margin: 0 0 0 15px;'
                                                                                                    }

                                                                                                ]
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem: 'contact-person',
                                                                                            content: {
                                                                                                block: 'fieldset',
                                                                                                content: [
                                                                                                    {
                                                                                                        block: 'input',
                                                                                                        name: 'orgname',
                                                                                                        placeholder: 'Телефон ',
                                                                                                        style: 'width: 275px;'
                                                                                                    },
                                                                                                    {
                                                                                                        block: 'input',
                                                                                                        name: 'orgname',
                                                                                                        placeholder: 'Контактное лицо',
                                                                                                        style: 'width: 275px; margin: 0 0 0 15px;'
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
                                                        },
                                                        {
                                                            block: 'radio-switcher',
                                                            content: [
                                                                {
                                                                    elem: 'header',
                                                                    content: 'Получение товара'
                                                                },
                                                                {
                                                                    elem: 'list',
                                                                    mix: [
                                                                        { block: 'tabbed-pane', js: { id: 'delivery-variants' } }
                                                                    ],
                                                                    content: [
                                                                        {
                                                                            elem: 'item',
                                                                            mix: [
                                                                                { elem: 'menu-item' }
                                                                            ],
                                                                            content: { block: 'input', type: 'radio', name: 'delivery-method', value: 'cash', checked: 'checked', label: 'Самовывоз ' }
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            mix: [
                                                                                { elem: 'menu-item' }
                                                                            ],
                                                                            content: { block: 'input', type: 'radio', name: 'delivery-method', value: 'cash', label: 'Доставка по Санкт-Петербургу' }
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            mix: [
                                                                                { elem: 'menu-item' }
                                                                            ],
                                                                            content: { block: 'input', type: 'radio', name: 'delivery-method', value: 'cash', label: 'Доставка в регионы' }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'tabs',
                                                                    mix: [
                                                                        { block: 'tabbed-pane', js: { id: 'delivery-variants' } }
                                                                    ],
                                                                    content: [
                                                                        {
                                                                            elem: 'tab',
                                                                            content: {
                                                                                block: 'fieldset',
                                                                                legend: 'Где вам удобнее забрать товар?',
                                                                                content: [
                                                                                    {
                                                                                        block: 'select',
                                                                                        name: 'market',
                                                                                        title: 'Выберите магазин',
                                                                                        options: [
                                                                                            { content: 'Главный магазин', value: 0 },
                                                                                            { content: '1 магазин', value: 1},
                                                                                            { content: '2 магазин', value: 2 },
                                                                                            { content: '3 магазин', value: 3 }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'tab',
                                                                            content: [
                                                                                {
                                                                                    block: 'fieldset',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'region-delivery-info',
                                                                                            content: [
                                                                                                {
                                                                                                    elem: 'fio',
                                                                                                    content: {
                                                                                                        block: 'input',
                                                                                                        placeholder: 'ФИО',
                                                                                                        name: 'fio'
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    elem: 'phone',
                                                                                                    content: {
                                                                                                        block: 'input',
                                                                                                        placeholder: 'Телефон',
                                                                                                        name: 'phone'
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    elem: 'passport',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'textarea',
                                                                                                            content: {
                                                                                                                block: 'textarea',
                                                                                                                placeholder: 'Паспортные данные',
                                                                                                                name: 'passport'
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'label',
                                                                                                            content: 'Серия и номер паспорта <br> Где, кем и когда выдан. <br> Данные нужны для транспортной компании'
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    elem: 'address',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'textarea',
                                                                                                            content: {
                                                                                                                block: 'textarea',
                                                                                                                placeholder: 'Полный адрес доставки'
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'label',
                                                                                                            content: 'Укажите индекс, город, улицу, дом и корпус. Адрес необходим для транспортной компании.'
                                                                                                        }
                                                                                                    ]

                                                                                                },
                                                                                                {
                                                                                                    elem: 'select',
                                                                                                    content: {
                                                                                                        block: 'input',
                                                                                                        type: 'checkbox',
                                                                                                        name: 'agree',
                                                                                                        label: 'Я даю своё согласие компании ООО «Бот-Трейдинг» на обработку и передачу моей личной информации транспортной компании для оформления доставки моего заказа. '
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'tab',
                                                                            content: [
                                                                                {
                                                                                    block: 'fieldset',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'region-delivery-info',
                                                                                            content: [
                                                                                                {
                                                                                                    elem: 'fio',
                                                                                                    content: {
                                                                                                        block: 'input',
                                                                                                        placeholder: 'ФИО',
                                                                                                        name: 'fio'
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    elem: 'phone',
                                                                                                    content: {
                                                                                                        block: 'input',
                                                                                                        placeholder: 'Телефон',
                                                                                                        name: 'phone'
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    elem: 'passport',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'textarea',
                                                                                                            content: {
                                                                                                                block: 'textarea',
                                                                                                                placeholder: 'Паспортные данные',
                                                                                                                name: 'passport'
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'label',
                                                                                                            content: 'Серия и номер паспорта <br> Где, кем и когда выдан. <br> Данные нужны для транспортной компании'
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    elem: 'address',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'textarea',
                                                                                                            content: {
                                                                                                                block: 'textarea',
                                                                                                                placeholder: 'Полный адрес доставки'
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'label',
                                                                                                            content: 'Укажите индекс, город, улицу, дом и корпус. Адрес необходим для транспортной компании.'
                                                                                                        }
                                                                                                    ]

                                                                                                },
                                                                                                {
                                                                                                    elem: 'select',
                                                                                                    content: {
                                                                                                        block: 'input',
                                                                                                        type: 'checkbox',
                                                                                                        name: 'agree',
                                                                                                        label: 'Я даю своё согласие компании ООО «Бот-Трейдинг» на обработку и передачу моей личной информации транспортной компании для оформления доставки моего заказа. '
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
                                                            elem: 'next',
                                                            content: { block: 'button', mods: { type: 'submit', state: 'disabled' }, content: 'Далее' }
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
