({
    block: 'b-page',
    title: 'how-to-pay',
    head: [
        { elem: 'css', url: '_how-to-pay.css', ie: false},
        { elem: 'css', url: '_how-to-pay', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_how-to-pay.js'},
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
                                    block: 'info-page',
                                    content: [
                                        {
                                            elem: 'header',
                                            mix: [
                                             { block: 'patternizer', js: { 'data-pattern': 'img/headers/How-to-pay.jpg' } }
                                             ],
                                            content: 'Способы оплаты'
                                        },
                                        {
                                            elem: 'sections',
                                            content: [
                                                {
                                                    elem: 'section',
                                                    attrs: { style: 'margin: 70px 0 60px 0;' },
                                                    content: [
                                                        {
                                                            block: 'pay-methods',
                                                            content: [
                                                                {
                                                                    elem: 'method',
                                                                    content: [
                                                                        {
                                                                            elem: 'method-img',
                                                                            url: 'img/content/how-to-pay/bank.png'
                                                                        },
                                                                        {
                                                                            elem: 'method-text',
                                                                            content: 'Оплата по счету через любое отделение Сбербанка или любого коммерческого банка'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'method',
                                                                    content: [
                                                                        {
                                                                            elem: 'method-img',
                                                                            url: 'img/content/how-to-pay/cash.png'
                                                                        },
                                                                        {
                                                                            elem: 'method-text',
                                                                            content: 'Оплата наличными курьеру при доставке'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'method',
                                                                    content: [
                                                                        {
                                                                            elem: 'method-img',
                                                                            url: 'img/content/how-to-pay/office.png'
                                                                        },
                                                                        {
                                                                            elem: 'method-text',
                                                                            content: 'Оплата в офисе компании по адресу: <br> Санкт-Петербург, ул. Профессора Качалова, 8'
                                                                        }
                                                                    ]
                                                                },
                                                                ,
                                                                {
                                                                    elem: 'method',
                                                                    elemMods: { 'future': 'yes' },
                                                                    content: [
                                                                        {
                                                                            elem: 'method-img',
                                                                            url: 'img/content/how-to-pay/card.png'
                                                                        },
                                                                        {
                                                                            elem: 'method-text',
                                                                            content: 'Онлайн оплата по кредитной карте'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'separator',
                                                    attrs: { 'style': 'width: 940px;' },
                                                    content: { block: 'line', mods: { type: 'wavy-0081bd' } }
                                                },
                                                {
                                                    elem: 'section',
                                                    content: [
                                                        {
                                                            elem: 'column',
                                                            elemMods: { position: 'left' },
                                                            attrs: { style: 'width: 410px; margin: 0 0 0 55px;' },
                                                            content: [
                                                                {
                                                                    elem: 'section-title',
                                                                    attrs: { style: 'margin: 0 0 35px 0;' },
                                                                    content: [
                                                                        {
                                                                            elem: 'section-header',
                                                                            attrs: { style: 'font-size: 25px;' },
                                                                            content: 'Порядок оплаты по безналу'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'p',
                                                                            content: ['После оформления заказа и согласовании суммы ', { block: 'b-link', url: '/delivery', content: 'доставки' }, ' доставки, мы высылаем Вам счет. Данный документ подтверждает, что перечисленные в нем товары, согласно вашего заказа, зарезервированы на нашем складе. Счет необходимо оплатить в течение 10 рабочих дней со дня его получения.']
                                                                        },
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'После поступления денег на наш расчетный счет (это занимает от 1 до 3 дней), мы высылаем вам товар транспортной компанией или курьеской почтой России (EMS). Все необходимые финансовые документы вкладываются в отправление.'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'column',
                                                            elemMods: { position: 'right' },
                                                            attrs: { style: 'width: 300px; padding: 0 0 0 50px;' },
                                                            content: [
                                                                {
                                                                    elem: 'section-title',
                                                                    attrs: { style: 'margin: 0 0 35px 30px;' },
                                                                    content: [
                                                                        {
                                                                            elem: 'section-header',
                                                                            attrs: { style: 'font-size: 25px;' },
                                                                            content: 'Оплата при доставке'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    attrs: {
                                                                        style: 'margin: 0 0 0 30px;'
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'В случае отправки товара курьерской почтой России (EMS) — оплата доставки включается в счет.'
                                                                        },
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'Доставку транспортными компаниями заранее оплачивать не надо. Оплата доставки товара осуществляется при получении заказа в транспортной компании.'
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
