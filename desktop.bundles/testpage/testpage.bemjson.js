({
    block: 'b-page',
    title: 'testpage',
    head: [
        { elem: 'css', url: '_testpage.css', ie: false},
        { elem: 'css', url: '_testpage', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_testpage.js'},
    ],
    content: [
        {
            block: 'lightbox',
            mods: { visibility: 'hidden' }
        },
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
                                                mix: [
                                                    { block: 'call-request', js: { id: 'call' } },
                                                    { block: 'call-request', elem: 'opener' }
                                                ],
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
                                                        elemMods: { state: 'current' },
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
                            attrs: { style: 'margin: 50px;' },
                            elemMods: { position: 'full' },
                            content: [
                                {
                                    block: 'form',
                                    js: {
                                        messages: {
                                            error: 'К сожалению, в данный момент ваш вопрос не может быть отправлен. Приносим извинения за временные неудобства.',
                                            ok: 'Спасибо за ваш вопрос! <br> В ближайшее время ответ на него будет опубликован на нашем сайте.'
                                        }
                                    },
                                    method: 'post',
                                    action: '/',
                                    mods: { type: 'add-question' },
                                    content: [
                                        {
                                            elem: 'header',
                                            content: 'Вы можете задать свой вопрос'
                                        },
                                        {
                                            elem: 'status-info'
                                        },
                                        {
                                            elem: 'author-info',
                                            content: [
                                                {
                                                    elem: 'author-info-item',
                                                    content: {
                                                        block: 'input',
                                                        mods: { reqiured: 'yes' },
                                                        name: 'name',
                                                        placeholder: 'Имя'
                                                    }
                                                },
                                                {
                                                    elem: 'author-info-item',
                                                    content: {
                                                        block: 'input',
                                                        name: 'city',
                                                        placeholder: 'Город'
                                                    }
                                                },
                                                {
                                                    elem: 'author-info-item',
                                                    content: {
                                                        block: 'input',
                                                        mods: { reqiured: 'yes' },
                                                        name: 'email',
                                                        placeholder: 'E-mail'
                                                    }
                                                },

                                                {
                                                    elem: 'author-info-item',
                                                    content: {
                                                        block: 'input',
                                                        name: 'phone',
                                                        placeholder: 'Телефон'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'question',
                                            content: {
                                                block: 'textarea',
                                                name: 'question',
                                                placeholder: 'Ваш вопрос'
                                            }
                                        },
                                        {
                                            elem: 'send-panel',
                                            content: [
                                                {
                                                    elem: 'send-button',
                                                    content: { block: 'button', mods: { type: 'submit' }, content: 'Задать вопрос' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    attrs: {
                                        style: 'margin: 100px 0;'
                                    }
                                },
                                {
                                    block: 'form',
                                    js: {
                                        messages: {
                                            error: 'К сожалению, в данный момент ваше сообщение не может быть отправлено. Приносим извинения за временные неудобства.',
                                            ok: 'Спасибо за ваш отзыв! <br> В ближайшее время он будет опубликован на нашем сайте.'
                                        }
                                    },
                                    method: 'post',
                                    action: '/faq/questions/add',
                                    mods: { type: 'add-question' },
                                    content: [
                                        {
                                            elem: 'header',
                                            content: 'Вы можете написать свой отзыв'
                                        },
                                        {
                                            elem: 'status-info'
                                        },
                                        {
                                            elem: 'author-info',
                                            content: [
                                                {
                                                    elem: 'author-info-item',
                                                    content: {
                                                        block: 'input',
                                                        mods: { reqiured: 'yes' },
                                                        name: 'name',
                                                        placeholder: 'Имя'
                                                    }
                                                },
                                                {
                                                    elem: 'author-info-item',
                                                    content: {
                                                        block: 'input',
                                                        name: 'city',
                                                        placeholder: 'Город'
                                                    }
                                                },
                                                {
                                                    elem: 'author-info-item',
                                                    content: {
                                                        block: 'input',
                                                        mods: { reqiured: 'yes' },
                                                        name: 'email',
                                                        placeholder: 'E-mail'
                                                    }
                                                },

                                                {
                                                    elem: 'author-info-item',
                                                    content: {
                                                        block: 'input',
                                                        name: 'phone',
                                                        placeholder: 'Телефон'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'question',
                                            content: {
                                                block: 'textarea',
                                                name: 'question',
                                                placeholder: 'Ваш вопрос'
                                            }
                                        },
                                        {
                                            elem: 'send-panel',
                                            content: [
                                                {
                                                    elem: 'send-button',
                                                    content: { block: 'button', mods: { type: 'submit' }, content: 'Задать вопрос' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    attrs: {
                                        style: 'margin: 100px 0;'
                                    }
                                },
                                {
                                    block: 'form',
                                    js: {
                                        messages: {
                                            error: 'К сожалению, в данный момент ваша заявка не может быть отправлена. Приносим извинения за временные неудобства.',
                                            ok: 'Спасибо за вашу заявку! <br> В ближайшее время с вами свяжется менеджер нашей компании.'
                                        }
                                    },
                                    method: 'post',
                                    action: '/faq/questions/add',
                                    mods: { type: 'add-question' },
                                    content: [
                                        {
                                            elem: 'header',
                                            content: 'Оптовикам'
                                        },
                                        {
                                            elem: 'status-info'
                                        },
                                        {
                                            elem: 'author-info',
                                            content: [
                                                {
                                                    elem: 'author-info-item',
                                                    content: {
                                                        block: 'input',
                                                        mods: { reqiured: 'yes' },
                                                        name: 'name',
                                                        placeholder: 'Имя'
                                                    }
                                                },
                                                {
                                                    elem: 'author-info-item',
                                                    content: {
                                                        block: 'input',
                                                        name: 'city',
                                                        placeholder: 'Город'
                                                    }
                                                },
                                                {
                                                    elem: 'author-info-item',
                                                    content: {
                                                        block: 'input',
                                                        mods: { reqiured: 'yes' },
                                                        name: 'email',
                                                        placeholder: 'E-mail'
                                                    }
                                                },

                                                {
                                                    elem: 'author-info-item',
                                                    content: {
                                                        block: 'input',
                                                        name: 'phone',
                                                        placeholder: 'Телефон'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'question',
                                            content: {
                                                block: 'textarea',
                                                name: 'question',
                                                placeholder: 'Ваш вопрос'
                                            }
                                        },
                                        {
                                            elem: 'send-panel',
                                            content: [
                                                {
                                                    elem: 'send-button',
                                                    content: { block: 'button', mods: { type: 'submit' }, content: 'Задать вопрос' }
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
        },
        {
            block: 'call-request',
            js: { id: 'call' },
            content: {
                elem: 'form',
                elemMods: { visibility: 'hidden' },
                content: [
                    {
                        elem: 'closer',
                        content: 'x'
                    },
                    {
                        elem: 'status',
                        content: 'Статус отправки формы'
                    },
                    {
                        elem: 'name',
                        content: {
                            block: 'input',
                            mods: { reqiured: 'yes', validate: 'yes' },
                            js: { pattern: 'string' },
                            name: 'name',
                            placeholder: 'Ваше имя'
                        }
                    },
                    {
                        elem: 'phone',
                        content: {
                            block: 'input',
                            mods: { reqiured: 'yes', validate: 'yes', name: 'phone' },
                            js: { pattern: 'string', minLength: 6 },
                            name: 'phone',
                            placeholder: 'Телефон'
                        }
                    },
                    {
                        elem: 'button',
                        content: { block: 'button', mods: { type: 'submit' }, content: 'Позвоните мне' }
                    }
                ]
            }
        }

    ]
})
