({
    block  : 'b-page',
    title  : 'order',
    head   : [
        { elem: 'css', url: '_order.css', ie: false},
        { elem: 'css', url: '_order', ie: true },
        /*{ block: 'i-jquery', elem: 'core'},*/
        { elem: 'js', url: 'jquery-1.7.2.js'},
        { elem: 'js', url: '_order.js'},
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
                    mods   : { width: '982' },
                    content: [
                        {
                            block   : 'content',
                            elem    : 'column',
                            elemMods: { position: 'full' },
                            content : [
                                {
                                    block  : 'order-page',
                                    content: [
                                        {
                                            elem   : 'menu',
                                            content: [
                                                {
                                                    elem    : 'menu-item',
                                                    elemMods: { state: 'current' },
                                                    content : 'Уточнение заказа'
                                                },
                                                {
                                                    elem: 'menu-item',

                                                    content: 'Авторизация'
                                                },
                                                {
                                                    elem   : 'menu-item',
                                                    content: 'Параметры заказа'
                                                },
                                                {
                                                    elem   : 'menu-item',
                                                    content: 'Подтверждение заказа'
                                                }
                                            ]
                                        },
                                        {
                                            elem   : 'content',
                                            content: [
                                                {
                                                    elem    : 'tab',
                                                    elemMods: { state: 'current' },
                                                    content : [
                                                        {
                                                            block  : 'order-list',
                                                            content: [
                                                                {
                                                                    elem   : 'header',
                                                                    content: [
                                                                        {
                                                                            elem: 'header-item',
                                                                            mix : [
                                                                                {  elem: 'item-desc' }
                                                                            ],
                                                                            content: 'Товар'
                                                                        },
                                                                        {
                                                                            elem   : 'header-item',
                                                                            mix    : [
                                                                                {  elem: 'counter' }
                                                                            ],
                                                                            content: 'Кол-во'
                                                                        },
                                                                        {
                                                                            elem   : 'header-item',
                                                                            mix    : [
                                                                                {  elem: 'price' }
                                                                            ],
                                                                            content: 'Цена, руб.'
                                                                        },
                                                                        {
                                                                            elem   : 'header-item',
                                                                            mix    : [
                                                                                {  elem: 'delete' }
                                                                            ],
                                                                            content: 'Удалить'
                                                                        }

                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'list',
                                                                    content: [
                                                                        {
                                                                            elem   : 'item',
                                                                            content: [
                                                                                {
                                                                                    elem   : 'item-photo',
                                                                                    content: { elem: 'item-img', src: 'img/catalog/boats/hunter_320_LK_LUX/photos/1_small.jpg' }
                                                                                },
                                                                                {
                                                                                    elem   : 'item-desc',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'item-name',
                                                                                            content: { block: 'b-link', content: 'Надувная лодка Хантер 290 Р', url: '' }
                                                                                        },
                                                                                        {
                                                                                            elem   : 'item-qualif',
                                                                                            content: 'серая/зеденая'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'counter',
                                                                                    content: { block: 'input', value: 10, name: 'delete' }
                                                                                },
                                                                                {
                                                                                    elem   : 'price',
                                                                                    content: { block: 'price', value: 38790, mods: { currency: 'empty' } }
                                                                                },
                                                                                {
                                                                                    elem   : 'delete',
                                                                                    content: { block: 'button', mods: { type: 'delete' } }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            content: [
                                                                                {
                                                                                    elem   : 'item-photo',
                                                                                    content: { elem: 'item-img', src: 'img/catalog/motors/yamaha_rx600/photos/1_small.jpg' }
                                                                                },
                                                                                {
                                                                                    elem   : 'item-desc',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'item-name',
                                                                                            content: { block: 'b-link', content: 'Лодочный мотор HDX T 3.6 BMS', url: '' }
                                                                                        },
                                                                                        {
                                                                                            elem: 'item-qualif'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'counter',
                                                                                    content: { block: 'input', value: 10, name: 'delete' }
                                                                                },
                                                                                {
                                                                                    elem   : 'price',
                                                                                    content: { block: 'price', value: 38790, mods: { currency: 'empty' } }
                                                                                },
                                                                                {
                                                                                    elem   : 'delete',
                                                                                    content: { block: 'button', mods: { type: 'delete' } }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            content: [
                                                                                {
                                                                                    elem   : 'item-photo',
                                                                                    content: { elem: 'item-img', src: 'img/catalog/boat-addons/jilet_007/1_small.jpg' }
                                                                                },
                                                                                {
                                                                                    elem   : 'item-desc',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'item-name',
                                                                                            content: { block: 'b-link', content: 'Жилет спасательный универсальный Хантер', url: '' }
                                                                                        },
                                                                                        {
                                                                                            elem: 'item-qualif'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'counter',
                                                                                    content: { block: 'input', value: 10, name: 'delete' }
                                                                                },
                                                                                {
                                                                                    elem   : 'price',
                                                                                    content: { block: 'price', value: 38790, mods: { currency: 'empty' } }
                                                                                },
                                                                                {
                                                                                    elem   : 'delete',
                                                                                    content: { block: 'button', mods: { type: 'delete' } }
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'total',
                                                                    content: [
                                                                        {
                                                                            elem   : 'total-text',
                                                                            content: 'Стоимость заказа:'
                                                                        },
                                                                        {
                                                                            elem   : 'total-value',
                                                                            content: { block: 'price', value: 999999, mods: { currency: 'empty' } }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'info',
                                                                    content: 'Обращаем Ваше внимание, что окончательная стоимость заказа, если в нем присутствуют товары и/или услуги, участвующие в акции, будет подтверждена после обработки заказа сотрудником Компании.'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'next',
                                                            content: { block: 'button', mods: { type: 'submit' }, content: 'Далее' }
                                                        }
                                                    ],
                                                },
                                                {
                                                    elem   : 'tab',
                                                    content: [
                                                        {
                                                            block  : 'authorization',
                                                            content: [
                                                                {
                                                                    elem   : 'signup',
                                                                    content: {
                                                                        block  : 'signup',
                                                                        content: ''
                                                                    }
                                                                },
                                                                {
                                                                    elem   : 'signin',
                                                                    content: {
                                                                        block: 'signin'
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'next',
                                                            content: { block: 'button', mods: { type: 'submit', state: 'disable' }, content: 'Далее' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem   : 'tab',
                                                    content: [
                                                        {
                                                            block  : 'radio-switcher',
                                                            content: [
                                                                {
                                                                    elem   : 'header',
                                                                    content: 'Способ оплаты'
                                                                },
                                                                {
                                                                    elem: 'list',
                                                                    mix: [ { block: 'tabbed-pane', js: { id: 'payment-variants' } }, ],
                                                                    content: [
                                                                        {
                                                                            elem   : 'item',
                                                                            content: { block: 'input', type: 'radio', name: 'pay-method', value: 'cash', checked: 'checked', label: 'Наличными' }
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            content: { block: 'input', type: 'radio', name: 'pay-method', value: 'cash', label: 'Банковской картой' }
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            content: { block: 'input', type: 'radio', name: 'pay-method', value: 'cash', label: 'Выписать счёт' }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'tabs',
                                                                    mix: [ { block: 'tabbed-pane', js: { id: 'payment-variants' } }, ],
                                                                    content: [
                                                                        {
                                                                            elem   : 'tab',
                                                                            content: {
                                                                                block  : 'b-text',
                                                                                content: [
                                                                                    {
                                                                                        elem   : 'p',
                                                                                        content: 'Строчка текста Наличными'
                                                                                    },
                                                                                    {
                                                                                        elem   : 'p',
                                                                                        content: 'Строчка текста Наличными'
                                                                                    },
                                                                                    {
                                                                                        elem   : 'p',
                                                                                        content: 'Строчка текста Наличными'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            elem   : 'tab',
                                                                            content: {
                                                                                block  : 'b-text',
                                                                                content: [
                                                                                    {
                                                                                        elem   : 'p',
                                                                                        content: 'Строчка текста Банковаская карта'
                                                                                    },
                                                                                    {
                                                                                        elem   : 'p',
                                                                                        content: 'Строчка текста Банковаская карта'
                                                                                    },
                                                                                    {
                                                                                        elem   : 'p',
                                                                                        content: 'Строчка текста Банковаская карта'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            elem   : 'tab',
                                                                            content: [
                                                                                {
                                                                                    block  : 'company-legal-info',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'orgname',
                                                                                            content: {
                                                                                                block  : 'fieldset',
                                                                                                legend   : 'Введите информацию для выставления счета',
                                                                                                content: [
                                                                                                    {
                                                                                                        block      : 'input',
                                                                                                        name       : 'orgname',
                                                                                                        placeholder: 'Наименование организации'

                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem   : 'address',
                                                                                            content: [
                                                                                                {
                                                                                                    block  : 'fieldset',
                                                                                                    legend   : 'Юридический адрес:',
                                                                                                    content: [
                                                                                                        {
                                                                                                            block      : 'input',
                                                                                                            name       : 'orgname',
                                                                                                            placeholder: 'Индекс',
                                                                                                            style: 'width: 218px;'
                                                                                                        },
                                                                                                        {
                                                                                                            block      : 'input',
                                                                                                            name       : 'orgname',
                                                                                                            placeholder: 'Город',
                                                                                                            style: 'width: 217px; margin: 0 0 0 15px;'
                                                                                                        },
                                                                                                        {
                                                                                                            block      : 'input',
                                                                                                            name       : 'orgname',
                                                                                                            placeholder: 'Адрес'
                                                                                                        },
                                                                                                        {
                                                                                                            block      : 'input',
                                                                                                            name       : 'orgname',
                                                                                                            placeholder: 'ИНН',
                                                                                                            style: 'width: 218px;'
                                                                                                        },
                                                                                                        {
                                                                                                            block      : 'input',
                                                                                                            name       : 'orgname',
                                                                                                            placeholder: 'КПП',
                                                                                                            style: 'width: 217px; margin: 0 0 0 15px;'
                                                                                                        }

                                                                                                    ]
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            elem: 'banking-details',
                                                                                            content: {
                                                                                                block  : 'fieldset',
                                                                                                content: [
                                                                                                    {
                                                                                                        block      : 'input',
                                                                                                        name       : 'orgname',
                                                                                                        placeholder: 'Название банка',
                                                                                                        style: 'width: 455px;'
                                                                                                    },
                                                                                                    {
                                                                                                        block      : 'input',
                                                                                                        name       : 'orgname',
                                                                                                        placeholder: 'Город (банка)',
                                                                                                        style: 'width: 300px; margin: 0 0 0 15px;'
                                                                                                    },
                                                                                                    {
                                                                                                        block      : 'input',
                                                                                                        name       : 'orgname',
                                                                                                        placeholder: 'БИК',
                                                                                                        style: 'width: 250px;'
                                                                                                    },
                                                                                                    {
                                                                                                        block      : 'input',
                                                                                                        name       : 'orgname',
                                                                                                        placeholder: 'Корреспондентский счет',
                                                                                                        style: 'width: 245px; margin: 0 0 0 15px;'
                                                                                                    },
                                                                                                    {
                                                                                                        block      : 'input',
                                                                                                        name       : 'orgname',
                                                                                                        placeholder: 'Расчетный счет',
                                                                                                        style: 'width: 245px; margin: 0 0 0 15px;'
                                                                                                    }

                                                                                                ]
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem   : 'contact-person',
                                                                                            content: {
                                                                                                block  : 'fieldset',
                                                                                                content: [
                                                                                                    {
                                                                                                        block      : 'input',
                                                                                                        name       : 'orgname',
                                                                                                        placeholder: 'Телефон ',
                                                                                                        style: 'width: 275px;'
                                                                                                    },
                                                                                                    {
                                                                                                        block      : 'input',
                                                                                                        name       : 'orgname',
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
                                                            block  : 'radio-switcher',
                                                            content: [
                                                                {
                                                                    elem   : 'header',
                                                                    content: 'Получение товара'
                                                                },
                                                                {
                                                                    elem   : 'list',
                                                                    mix: [ { block: 'tabbed-pane', js: { id: 'delivery-variants' } }, ],
                                                                    content: [
                                                                        {
                                                                            elem   : 'item',
                                                                            mix    : [
                                                                                { elem: 'menu-item' }
                                                                            ],
                                                                            content: { block: 'input', type: 'radio', name: 'delivery-method', value: 'cash', checked: 'checked', label: 'Самовывоз ' }
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            mix    : [
                                                                                { elem: 'menu-item' }
                                                                            ],
                                                                            content: { block: 'input', type: 'radio', name: 'delivery-method', value: 'cash', label: 'Доставка по Санкт-Петербургу' }
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            mix    : [
                                                                                { elem: 'menu-item' }
                                                                            ],
                                                                            content: { block: 'input', type: 'radio', name: 'delivery-method', value: 'cash', label: 'Доставка в регионы' }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'tabs',
                                                                    mix: [ { block: 'tabbed-pane', js: { id: 'delivery-variants' } }, ],
                                                                    content: [
                                                                        {
                                                                            elem   : 'tab',
                                                                            content: {
                                                                                block  : 'fieldset',
                                                                                legend   : 'Где вам удобнее забрать товар?',
                                                                                content: [
                                                                                    {
                                                                                        block  : 'select',
                                                                                        name: 'market',
                                                                                        title  : 'Выберите магазин',
                                                                                        options: [
                                                                                            { content: 'Главный магазин', value: 0 },
                                                                                            { content: '1 магазин', value: 1},
                                                                                            { content: '2 магазин', value: 2 },
                                                                                            { content: '3 магазин', value: 3 },
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            elem   : 'tab',
                                                                            content: [
                                                                                {
                                                                                    block  : 'fieldset',
                                                                                    content: [
                                                                                        {
                                                                                            block  : 'region-delivery-info',
                                                                                            content: [
                                                                                                {
                                                                                                    elem   : 'fio',
                                                                                                    content: {
                                                                                                        block      : 'input',
                                                                                                        placeholder: 'ФИО',
                                                                                                        name       : 'fio'
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'phone',
                                                                                                    content: {
                                                                                                        block      : 'input',
                                                                                                        placeholder: 'Телефон',
                                                                                                        name       : 'phone'
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'passport',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem   : 'textarea',
                                                                                                            content: {
                                                                                                                block      : 'textarea',
                                                                                                                placeholder: 'Паспортные данные',
                                                                                                                name       : 'passport'
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            elem   : 'label',
                                                                                                            content: 'Серия и номер паспорта <br> Где, кем и когда выдан. <br> Данные нужны для транспортной компании'
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'address',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem   : 'textarea',
                                                                                                            content: {
                                                                                                                block      : 'textarea',
                                                                                                                placeholder: 'Полный адрес доставки'
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            elem   : 'label',
                                                                                                            content: 'Укажите индекс, город, улицу, дом и корпус. Адрес необходим для транспортной компании.'
                                                                                                        }
                                                                                                    ]

                                                                                                },
                                                                                                {
                                                                                                    elem   : 'select',
                                                                                                    content: {
                                                                                                        block: 'input',
                                                                                                        type : 'checkbox',
                                                                                                        name : 'agree',
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
                                                                            elem   : 'tab',
                                                                            content: [
                                                                                {
                                                                                    block  : 'fieldset',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'region-delivery-info',
                                                                                            content: [
                                                                                                {
                                                                                                    elem   : 'fio',
                                                                                                    content: {
                                                                                                        block      : 'input',
                                                                                                        placeholder: 'ФИО',
                                                                                                        name       : 'fio'
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'phone',
                                                                                                    content: {
                                                                                                        block      : 'input',
                                                                                                        placeholder: 'Телефон',
                                                                                                        name       : 'phone'
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    elem: 'passport',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem   : 'textarea',
                                                                                                            content: {
                                                                                                                block      : 'textarea',
                                                                                                                placeholder: 'Паспортные данные',
                                                                                                                name       : 'passport'
                                                                                                            },
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
                                                                                                            content:{
                                                                                                                block      : 'textarea',
                                                                                                                placeholder: 'Полный адрес доставки'
                                                                                                            },
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
                                                                                                        type : 'checkbox',
                                                                                                        name : 'agree',
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
                                                            elem   : 'next',
                                                            content: { block: 'button', mods: { type: 'submit', state: 'disable' }, content: 'Далее' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem   : 'tab',
                                                    content: [
                                                        {
                                                            block  : 'order-list',
                                                            mods: { type: 'simple' },
                                                            content: [
                                                                {
                                                                    elem   : 'header',
                                                                    content: [

                                                                        {
                                                                            elem: 'header-item',
                                                                            mix : [
                                                                                {  elem: 'item-desc' }
                                                                            ],
                                                                            content: 'Товар'

                                                                        },
                                                                        {
                                                                            elem   : 'header-item',
                                                                            mix    : [
                                                                                {  elem: 'counter' }
                                                                            ],
                                                                            content: 'Кол-во'
                                                                        },
                                                                        {
                                                                            elem   : 'header-item',
                                                                            mix    : [
                                                                                {  elem: 'price' }
                                                                            ],
                                                                            content: 'Цена, руб.'
                                                                        }

                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'list',
                                                                    content: [
                                                                        {
                                                                            elem   : 'item',
                                                                            content: [

                                                                                {
                                                                                    elem   : 'item-desc',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'item-name',
                                                                                            content: 'Надувная лодка Хантер 290 Р'
                                                                                        },
                                                                                        {
                                                                                            elem   : 'item-qualif',
                                                                                            content: 'серая'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'counter',
                                                                                    content: 1
                                                                                },
                                                                                {
                                                                                    elem   : 'price',
                                                                                    content: { block: 'price', value: 38790, mods: { currency: 'empty' } }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            content: [

                                                                                {
                                                                                    elem   : 'item-desc',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'item-name',
                                                                                            content: 'Лодочный мотор HDX T 3.6 BMS'
                                                                                        },
                                                                                        {
                                                                                            elem: 'item-qualif'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'counter',
                                                                                    content: 5
                                                                                },
                                                                                {
                                                                                    elem   : 'price',
                                                                                    content: { block: 'price', value: 38790, mods: { currency: 'empty' } }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem   : 'item',
                                                                            content: [

                                                                                {
                                                                                    elem   : 'item-desc',
                                                                                    content: [
                                                                                        {
                                                                                            elem   : 'item-name',
                                                                                            content: 'Жилет спасательный универсальный Хантер'
                                                                                        },
                                                                                        {
                                                                                            elem: 'item-qualif'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem   : 'counter',
                                                                                    content: 10
                                                                                },
                                                                                {
                                                                                    elem   : 'price',
                                                                                    content: { block: 'price', value: 38790, mods: { currency: 'empty' } }
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem   : 'total',
                                                                    content: [
                                                                        {
                                                                            elem   : 'total-text',
                                                                            content: 'Стоимость заказа:'
                                                                        },
                                                                        {
                                                                            elem   : 'total-value',
                                                                            content: { block: 'price', value: 999999, mods: { currency: 'empty' } }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block  : 'order-params-info',
                                                            content: [
                                                                {
                                                                    elem: 'header',
                                                                    content: 'Параметры заказа'
                                                                },
                                                                {
                                                                    elem   : 'delivery-place',
                                                                    content: 'Получение товара: самовывоз, Москва, ул. Амурская д.7., 24.03.2013'
                                                                },
                                                                {
                                                                    elem   : 'contact-person',
                                                                    content: 'Контактное лицо: Елизаров Максим'

                                                                },
                                                                {
                                                                    elem   : 'contact-phone',
                                                                    content: 'Мобильный телефон +7 (906) 229-73-36'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem   : 'confirm',
                                                            mix: [{ elem: 'next' }],
                                                            content: { block: 'button', mods: { type: 'submit', state: 'disable' }, content: 'Подтверждаю заказ' }
                                                        }
                                                    ],
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
