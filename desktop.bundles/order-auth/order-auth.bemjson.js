({
    block: 'b-page',
    title: 'order-auth',
    head: [
        { elem: 'css', url: '_order-auth.css', ie: false},
        { elem: 'css', url: '_order-auth', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_order-auth.js'},
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
                                                    elemMods: { filled: 'yes' },
                                                    content: 'Уточнение заказа'
                                                },
                                                {
                                                    elem: 'menu-limiter'
                                                },
                                                {
                                                    elem: 'menu-item',
                                                    elemMods: { state: 'current' },
                                                    content: 'Авторизация'
                                                },
                                                {
                                                    elem: 'menu-limiter'
                                                },
                                                {
                                                    elem: 'menu-item',
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
                                                            block: 'authorization',
                                                            js: true,
                                                            content: [
                                                                {
                                                                    elem: 'entrance',
                                                                    content: [
                                                                        {
                                                                            elem: 'signin',
                                                                            content: {
                                                                                block: 'signin'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'signup',
                                                                            content: {
                                                                                block: 'signup'
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'recovery',
                                                                    mix: [ { elem: 'info' } ],
                                                                    content: {
                                                                        block: 'authorization-info',
                                                                        content: [
                                                                            {
                                                                                elem: 'header',
                                                                                content: 'Восстановление пароля'
                                                                            },
                                                                            {
                                                                                elem: 'text',
                                                                                content: 'Введите почтовый ящик, указанный при регистрации. На него будет отправлен новый пароль.'
                                                                            },
                                                                            {
                                                                                elem: 'input',
                                                                                content: { block: 'input', placeholder: 'E-mail', name: 'email' }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'successful-registration',
                                                                    mix: [ { elem: 'info' } ],
                                                                    content: {
                                                                        block: 'authorization-info',
                                                                        content: [
                                                                            {
                                                                                elem: 'header',
                                                                                content: 'Вы успешно зарегистрированы на сайте hunterboat.ru'
                                                                            },
                                                                            {
                                                                                elem: 'text',
                                                                                content: [
                                                                                    {
                                                                                        tag: 'p',
                                                                                        content: 'Вы можете продолжить оформление заказа прямо сейчас, без дополнительных подтверждений.'
                                                                                    },
                                                                                    {
                                                                                        tag: 'p',
                                                                                        content: 'Данные, указанные вами при регистрации, а также пароль для авторизации на сайте в будущем отправлены на почтовый ящик, который вы указали при регистрации.'
                                                                                    },
                                                                                    {
                                                                                        tag: 'p',
                                                                                        content: 'Спасибо!'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'mail-send',
                                                                    mix: [ { elem: 'info' } ],
                                                                    content: {
                                                                        block: 'authorization-info',
                                                                        content: [
                                                                            {
                                                                                elem: 'header',
                                                                                content: 'Письмо успешно отправлено'
                                                                            },
                                                                            {
                                                                                elem: 'text',
                                                                                content: 'Вам на почту выслан новый пароль. <br> Используйте его при авторизации на сайте.'
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'unregistered-user',
                                                                    mix: [ { elem: 'info' } ],
                                                                    content: {
                                                                        block: 'authorization-info',
                                                                        content: [
                                                                            {
                                                                                elem: 'header',
                                                                                content: 'Пользователь с таким почтовым ящиком не зарегистрирован.'
                                                                            },
                                                                            {
                                                                                elem: 'text',
                                                                                content: [
                                                                                    {
                                                                                        tag: 'p',
                                                                                        content: [
                                                                                            'Может быть, вы ошиблись при вводе почтового ящика. Вы можете ',
                                                                                            { block: 'b-link', mods: { pseudo: 'yes'}, mix:[{ block: 'authorization', elem: 'initial' }], content: 'попробовать'},
                                                                                            ' снова.'
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        tag: 'p',
                                                                                        content: 'Либо зарегистрироваться на сайте прямо сейчас. <br> Это займёт не более 1 минуты.'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'next',
                                                            content: { block: 'button', mods: { type: 'submit' }, content: 'Продолжить' }
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
