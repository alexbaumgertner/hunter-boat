({
    block: 'b-page',
    title: 'delivery',
    head: [
        { elem: 'css', url: '_delivery.css', ie: false},
        { elem: 'css', url: '_delivery', ie: true },
                /*{ block: 'i-jquery', elem: 'core'},*/
        { elem: 'js', url: 'jquery-1.7.2.js'},
        { elem: 'js', url:'_delivery.js'},
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
                                                                                    url    : '/order.html',
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
                                                                                content : {
                                                                                    elem   : 'list',
                                                                                    content: [
                                                                                        {
                                                                                            elem    : 'item',
                                                                                            elemMods: { section: 'catalog' },
                                                                                            name    : 'Каталог',
                                                                                            url     : '/catalog.html'
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
                                                                                            url : '/about.html'
                                                                                        },
                                                                                        {
                                                                                            elem: 'item',
                                                                                            name: 'Отзывы',
                                                                                            url : '/reviews.html'
                                                                                        },
                                                                                        {
                                                                                            elem: 'item',
                                                                                            name: 'Вопрос-ответ',
                                                                                            url : '/faq.html'
                                                                                        },
                                                                                        {
                                                                                            elem: 'item',
                                                                                            name: 'Фотографии',
                                                                                            url : '/photoalbums.html'
                                                                                        },
                                                                                        {
                                                                                            elem: 'item',
                                                                                            name: 'Оптовикам',
                                                                                            url : '/dealers.html'
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
                                                                                url : '/how-to-buy.html'
                                                                            },
                                                                            {
                                                                                elem: 'item',
                                                                                name: 'Где купить',
                                                                                url : '/where-to-buy.html'
                                                                            },
                                                                            {
                                                                                elem: 'item',
                                                                                elemMods: { state: 'current' },
                                                                                name: 'Доставка',
                                                                                url : '/delivery.html'
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
                                        block: 'delivery-info',
                                        content: [
                                            {
                                                elem: 'header',
                                                content: 'Доставка'
                                            },
                                            {
                                                elem: 'sections',
                                                content: [
                                                    {
                                                        elem: 'section',
                                                        content: [
                                                            {
                                                                elem: 'section-header',
                                                                content: 'Самовывоз'
                                                            },
                                                            {
                                                                elem: 'section-content',
                                                                content: {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'C 10.00 до 17.30  по рабочим дням по адресу: Санкт Петербург,  ул. Магнитогорская д. 11'
                                                                        },
                                                                        {
                                                                            elem: 'ul',
                                                                            elemMods: { 'list-type': 'blue-circle' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Предварительно свяжитесь с менеджером по телефону:  +7 (812) 320-02-60'
                                                                                },
                                                                                {
                                                                                    elem   : 'li',
                                                                                    content: 'При себе нужно иметь паспорт или любой документ, удостоверяющий личность.'
                                                                                },
                                                                                {
                                                                                    elem   : 'li',
                                                                                    content: 'На месте проверяйте комплектацию товара. В офисе компании лодки не накачиваются.'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'section',
                                                        content: [
                                                            {
                                                                elem: 'section-header',
                                                                content: 'Курьером по Санкт-Петербургу'
                                                            },
                                                            {
                                                                elem: 'section-content',
                                                                content: {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'С 9.00 до 21.00  по рабочим дням (в выходные - по согласованию). Стоимость доставки - 500 рублей в пределах КАД.'
                                                                        },
                                                                        {
                                                                            elem: 'ul',
                                                                            elemMods: { 'list-type': 'blue-circle' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Доставка осуществляется до подъезда.'
                                                                                },
                                                                                {
                                                                                    elem   : 'li',
                                                                                    content: 'Доставка в населенные пункты  и ближайший пригород Всеволожск, Колтуши, Янино, Красное село, Горелово, Девяткино, Мурино, Ольгино, Кронштадт , Шушары, Колпино, Сестрорецк, Петергоф, Ломоносов - по согласованию.'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'section',
                                                        content: [
                                                            {
                                                                elem: 'section-header',
                                                                content: 'Транспортной компанией по России'
                                                            },
                                                            {
                                                                elem: 'section-content',
                                                                content: [
                                                                    {
                                                                        block  : 'b-text',
                                                                        content: [
                                                                            {
                                                                                elem   : 'p',
                                                                                content: 'Мы осуществляем доставку любой удобной для вас транспортной компанией. Стоимость доставки рассчитывается для каждого заказа индивидуально.'
                                                                            },
                                                                            {
                                                                                elem    : 'ul',
                                                                                elemMods: { 'list-type': 'blue-circle' },
                                                                                content : [
                                                                                    {
                                                                                        elem   : 'li',
                                                                                        content: 'Доставка заказа до терминала в транспортной компании в Санкт-Петербурге - бесплатно.'
                                                                                    },
                                                                                    {
                                                                                        elem   : 'li',
                                                                                        content: 'После прибытия груза на терминал в вашем городе, представитель ТК связывается с вами  и сообщает информацию, необходимую для получения груза. Вы оплачиваете доставку при получении товара.'
                                                                                    },
                                                                                    {
                                                                                        elem   : 'li',
                                                                                        content: 'При приеме товара в транспортной компании Вам необходимо проверить внешний вид и  целостность упаковки товара, в противном случае транспортная компания не будет принимать претензии по его перевозке.'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        block: 'shipping-calc',
                                                                        content: [
                                                                            {
                                                                                elem: 'header',
                                                                                content: [
                                                                                    {
                                                                                        tag: '',
                                                                                        content: 'Расчёт стоимости доставки '
                                                                                    },
                                                                                    {
                                                                                        block: 'b-link',
                                                                                        url: '/shipping-calc/',
                                                                                        content: 'транспортными компаниям'
                                                                                    },
                                                                                    {
                                                                                        tag: '',
                                                                                        content: ':'
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                elem: 'content',
                                                                                content: {
                                                                                    block: 'b-text',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'ul',
                                                                                            elemMods: { 'list-type': 'none' },
                                                                                            content: [
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: [
                                                                                                        {
                                                                                                            block: 'b-icon',
                                                                                                            url  : 'img/delivery/icons/delovie_linii.png'
                                                                                                        },
                                                                                                        {
                                                                                                            block  : 'b-link',
                                                                                                            url    : '/',
                                                                                                            content: '«Деловые линии»'
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: [
                                                                                                        {
                                                                                                            block: 'b-icon',
                                                                                                            url  : 'img/delivery/icons/jeldorexpedicia.png'
                                                                                                        },
                                                                                                        {
                                                                                                            block  : 'b-link',
                                                                                                            url    : '/',
                                                                                                            content: '«Желдорэкспедиция» '
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: [
                                                                                                        {
                                                                                                            block: 'b-icon',
                                                                                                            url  : 'img/delivery/icons/avtotreiding.png'
                                                                                                        },
                                                                                                        {
                                                                                                            block  : 'b-link',
                                                                                                            url    : '/',
                                                                                                            content: '«Автотрейдинг» '
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    elem   : 'li',
                                                                                                    content: [
                                                                                                        {
                                                                                                            block: 'b-icon',
                                                                                                            url  : 'img/delivery/icons/pek.png'
                                                                                                        },
                                                                                                        {
                                                                                                            block  : 'b-link',
                                                                                                            url    : '/',
                                                                                                            content: '«ПЭК» '
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
                                                    },
                                                    {
                                                        elem: 'section',
                                                        content: [
                                                            {
                                                                elem: 'section-header',
                                                                elemMods: { deliveryman: 'EMS' },
                                                                content: 'Курьерской службой EMS (Почта России)'
                                                            },
                                                            {
                                                                elem: 'section-content',
                                                                content: [
                                                                    {
                                                                        block  : 'b-text',
                                                                        content: [
                                                                            {
                                                                                elem   : 'p',
                                                                                content: 'EMS – это отдельное подразделение почты России, которое обеспечивает быструю курьерскую доставку грузов по России.'
                                                                            },
                                                                            {
                                                                                elem    : 'ul',
                                                                                elemMods: { 'list-type': 'blue-circle' },
                                                                                content : [
                                                                                    {
                                                                                        elem   : 'li',
                                                                                        content: 'Доставка производится только для товаров весом до 31,5 кг и не превышающих 150 см в длину. '
                                                                                    },
                                                                                    {
                                                                                        elem   : 'li',
                                                                                        content: 'Доставка службой EMS возможна только после 100% оплаты стоимости доставки. '
                                                                                    },
                                                                                    {
                                                                                        elem   : 'li',
                                                                                        content: 'Обращаем ваше внимание, что служба EMS осуществляет доставку каждого места отдельно. Например: если вы заказали у нас Лодку Хантер 280 ЛТ и носовой тент – каждое место рассчитывается в доставке отдельно.'
                                                                                    },
                                                                                    {
                                                                                        elem   : 'li',
                                                                                        content: 'Отправка товара наложенным платежом не осуществляется.'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        block: 'shipping-calc',
                                                                        content: { block: 'b-link', url: '', content: 'Калькулятор доставки EMS' }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'links',
                                                content: [
                                                    {
                                                        block: 'b-link',
                                                        mods: { pseudo: 'yes' },
                                                        content: 'Технические данные упакованных лодок '
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
