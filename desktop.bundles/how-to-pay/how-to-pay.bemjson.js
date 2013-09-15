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
                                                            mix: [ { block: 'pay-methods', elem: 'menu' } ],
                                                            js: { id: 'pay-methods' },
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
                                                                        },
                                                                        {
                                                                            elem: 'more-link',
                                                                            mix: [
                                                                                { block: 'pay-methods', elem: 'menu-item' }
                                                                            ],
                                                                            content: {
                                                                                block: 'b-link',
                                                                                mods: { pseudo: 'yes' },
                                                                                content: 'Подробнее'
                                                                            }
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
                                                                        },
                                                                        {
                                                                            elem: 'more-link',
                                                                            mix: [
                                                                                { block: 'pay-methods', elem: 'menu-item' }
                                                                            ],
                                                                            content: {
                                                                                block: 'b-link',
                                                                                mods: { pseudo: 'yes' },
                                                                                content: 'Подробнее'
                                                                            }
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
                                                                        },
                                                                        {
                                                                            elem: 'more-link',
                                                                            mix: [
                                                                                { block: 'pay-methods', elem: 'menu-item' }
                                                                            ],
                                                                            content: {
                                                                                block: 'b-link',
                                                                                mods: { pseudo: 'yes' },
                                                                                content: 'Подробнее'
                                                                            }
                                                                        }
                                                                    ]
                                                                },
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
                                                            block: 'pay-methods',
                                                            js: { id: 'pay-methods' },
                                                            content: [
                                                                {
                                                                    elem: 'method-more',
                                                                    content: [
                                                                        {
                                                                            elem: 'method-more-header',
                                                                            mix: [
                                                                                { block: 'i-font', mods: { face: 'hermes' } }
                                                                            ],
                                                                            content: 'Порядок оплаты товара'
                                                                        },
                                                                        {
                                                                            elem: 'method-more-text',
                                                                            content: [
                                                                                {
                                                                                    block: 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'ol',
                                                                                            content: [
                                                                                                {
                                                                                                    elem: 'li',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'p',
                                                                                                            content: ['После оформления заказа и согласовании суммы ', { block: 'b-link', url: 'delivery.html', content: 'доставки' }, ' мы высылаем Вам счет.']
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'ul',
                                                                                                            elemMods: { 'list-type': 'blue-circle' },
                                                                                                            content: [
                                                                                                                {
                                                                                                                    elem: 'li',
                                                                                                                    content: 'Для Вашего удобства в приложении Вы также найдете квитанцию на оплату, где уже заполнены реквизиты нашей компании, Вам нужно ее только распечатать и вписать свои данные. '
                                                                                                                },
                                                                                                                {
                                                                                                                    elem: 'li',
                                                                                                                    content: 'Счет отправляется для того, чтобы вписать в квитанцию точную сумму Вашего заказа, а также указать номер счета и назначение платежа. '
                                                                                                                },
                                                                                                                {
                                                                                                                    elem: 'li',
                                                                                                                    content: 'Копию оплаченной квитанции присылать нет необходимости, т.к. отправка будет осуществлена после поступления денег на наш расчетный счет. '
                                                                                                                }
                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    elem: 'li',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'p',
                                                                                                            content: 'Счет необходимо оплатить в течение 10 рабочих дней со дня его получения. '
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'ul',
                                                                                                            elemMods: { 'list-type': 'blue-circle' },
                                                                                                            content: [
                                                                                                                {
                                                                                                                    elem: 'li',
                                                                                                                    content: 'Пожалуйста, <strong>сохраняйте банковскую квитанцию</strong> до тех пор, пока не убедитесь, что переведенные средства поступили к нам на расчетный счет. В будущем квитанция также пригодится Вам для регистрации лодки или мотора в ГИМС.'
                                                                                                                },
                                                                                                                {
                                                                                                                    elem: 'li',
                                                                                                                    content: 'Обращаем Ваше внимание, что мы не располагаем информацией о размерах суммы комиссии за перечисление денег и сроках их перевода в банках Вашего региона. '
                                                                                                                },
                                                                                                                {
                                                                                                                    elem: 'li',
                                                                                                                    content: 'Копию оплаченной квитанции присылать нет необходимости, т.к. отправка будет осуществлена после поступления денег на наш расчетный счет. '
                                                                                                                }
                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    elem: 'li',
                                                                                                    content: [
                                                                                                        {
                                                                                                            elem: 'p',
                                                                                                            content: 'После поступления денег на наш расчетный счет (это занимает в среднем от 1 до 3 дней), мы высылаем вам товар транспортной компанией или курьеской почтой России (EMS). Все необходимые документы (счет и товарная накладная) вкладываются в отправление. Уведомление об отгрузке товара с нашего склада вы получите по электронной почте. '
                                                                                                        },
                                                                                                        {
                                                                                                            elem: 'ul',
                                                                                                            elemMods: { 'list-type': 'blue-circle' },
                                                                                                            content: [
                                                                                                                {
                                                                                                                    elem: 'li',
                                                                                                                    content: 'В случае отправки товара курьерской почтой России (EMS) - оплата доставки включается в счет.'
                                                                                                                },
                                                                                                                {
                                                                                                                    elem: 'li',
                                                                                                                    content: 'Доставку транспортными компаниями заранее оплачивать не надо. Оплата доставки товара осуществляется при получении заказа в транспортной компании.  '
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
                                                                    elem: 'method-more',
                                                                    content: [
                                                                        {
                                                                            elem:'method-more-header',
                                                                            mix: [ { block: 'i-font', mods: { face: 'hermes' } } ],
                                                                            content: 'Порядок оплаты  наличными курьеру'
                                                                        },
                                                                        {
                                                                            elem: 'method-more-text',
                                                                            content: '<p>Это простой и&nbsp;удобный способ оплаты, который возможен при курьерской доставке по&nbsp;г . ' +
                                                                                'Санкт-Петербургу и&nbsp;в&nbsp;близлежащие пригороды.</p><p>При получении своего заказа&nbsp;' +
                                                                                'Вы оплачиваете его стоимость наличными деньгами курьеру. Вместе с&nbsp;заказом курьер выдаст ' +
                                                                                'Вам все необходимые документы.</p><p>При расчете с&nbsp;курьером, желательно, подготовить' +
                                                                                ' деньги без сдачи.</p>'
                                                                        }
                                                                    ]

                                                                },
                                                                {
                                                                    elem: 'method-more',
                                                                    content: [
                                                                        {
                                                                            elem:'method-more-header',
                                                                            mix: [ { block: 'i-font', mods: { face: 'hermes' } } ],
                                                                            content: 'Порядок оплаты в офисе'
                                                                        },
                                                                        {
                                                                            elem: 'method-more-text',
                                                                            content: '<p>В&nbsp;случае самовывоза заказанного вами товара, Вы&nbsp;можете провести оплату наличными у&nbsp;нас ' +
                                                                                'в&nbsp;офисе. Вместе с&nbsp;заказом наши менеджеры передадут Вам все необходимые документы. ' +
                                                                                'Банковские карты к&nbsp;оплате временно не&nbsp;принимаются.</p>'
                                                                        }
                                                                    ]

                                                                },
                                                                {
                                                                    elem: 'method-more',
                                                                    mix: [ { block: 'pay-methods', elem: 'item' } ],
                                                                    content: [
                                                                        {
                                                                            elem:'method-more-header',
                                                                            mix: [ { block: 'i-font', mods: { face: 'hermes' } } ],
                                                                            content: 'Порядок оплаты онлайн'
                                                                        },
                                                                        {
                                                                            elem: 'method-more-text',
                                                                            content: ''
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
