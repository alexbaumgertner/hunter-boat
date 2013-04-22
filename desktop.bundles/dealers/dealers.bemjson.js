({
    block: 'b-page',
    title: 'dealers',
    head: [
        { elem: 'css', url: '_dealers.css', ie: false},
        { elem: 'css', url: '_dealers', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_dealers.js'}
    ],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'wrapper-fix-width',
                    mods: { width: '982' },
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
                                                        elemMods: { state: 'current' },
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
                    mods: { width: '982' },
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
                                                { block: 'text-mask', image: 'template/mask/'}
                                            ],
                                            content: 'ОПТОВИКАМ'
                                        },
                                        {
                                            elem: 'sections',
                                            content: [
                                                {
                                                    elem: 'section',
                                                    content: [
                                                        {
                                                            elem: 'column',
                                                            elemMods: { position: 'left' },
                                                            content: [
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'ООО «Производственно Торговая Компания Хантер» является одним из крупнейших производителей надувных лодок ПВХ , а также официальным представителем таких брендов как «Yamaha» и «HDX».  Ассортимент надувных лодок ПВХ «Хантер»  и ценовая политика компании направлены на долгосрочное и взаимовыгодное сотрудничество.'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    attrs: {
                                                                        style: 'width: 230px;margin: 40px 0 0 50px; text-align: center;'
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'По вопросам звоните и пишите:'
                                                                        },
                                                                        {
                                                                            elem: 'p',
                                                                            content: [
                                                                                { elem: 'strong', attrs: { style: 'font-size: 20px;margin: 15px 0 5px; display: block;' }, content: '+7(812) 677-82-55' },
                                                                                { block: 'b-link', url: 'mailto:sales@hunterboat.ru', attrs: { style: 'font-size: 18px; text-decoration: none; border-bottom: none;' }, content: ' sales@hunterboat.ru' }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'column',
                                                            elemMods: { position: 'right' },
                                                            attrs: { style: 'margin: -55px 0 0 0;' },
                                                            content: {
                                                                block: 'b-text',
                                                                content: [
                                                                    {
                                                                        elem: 'p',
                                                                        attrs: { style: 'font-size: 16px;margin: 0 0 35px 25px;' },
                                                                        content: 'Выгодные условия для партнёров:'
                                                                    },
                                                                    {
                                                                        elem: 'ul',
                                                                        attrs: { style: 'width: 335px;' },
                                                                        elemMods: { 'list-type': 'blue-circle' },
                                                                        content: [
                                                                            {
                                                                                elem: 'li',
                                                                                content: 'Удобная система заказов.'
                                                                            },
                                                                            {
                                                                                elem: 'li',
                                                                                content: 'Гибкая система скидок.'
                                                                            },
                                                                            {
                                                                                elem: 'li',
                                                                                content: 'Постоянное наличие всего ассортимента надувных лодок на нашем складе.'
                                                                            },
                                                                            {
                                                                                elem: 'li',
                                                                                content: 'Бесперебойные поставки продукции во все регионы РФ.'
                                                                            },
                                                                            {
                                                                                elem: 'li',
                                                                                content: 'Рекламная, консультационная, гарантийная и постгарантийная поддержка.'
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'separator',
                                                    content: { block: 'line', mods: { type: 'wavy-0081bd' } }
                                                },
                                                {
                                                    elem: 'section',
                                                    content: [
                                                        {
                                                            elem: 'column',
                                                            elemMods: { position: 'left' },
                                                            content: [
                                                                {
                                                                    elem: 'section-title',
                                                                    content: [
                                                                        {
                                                                            elem: 'section-header',
                                                                            content: 'Заявка для оптовых партнеров'
                                                                        },
                                                                        {
                                                                            elem: 'section-sub-header',
                                                                            content: 'Если Вы хотите получить оптовый прайс лист и стать нашим оптовым партнером, пожалуйста, заполните форму заявки.'
                                                                        },
                                                                        {
                                                                            block: 'wholesale-partners-form',
                                                                            content: [
                                                                                {
                                                                                    block: 'input',
                                                                                    name: 'orgname',
                                                                                    placeholder: 'Наименование организации ООО или ИП '
                                                                                },
                                                                                {
                                                                                    block: 'input',
                                                                                    name: 'orgname',
                                                                                    placeholder: 'Название магазина '
                                                                                },
                                                                                {
                                                                                    block: 'input',
                                                                                    name: 'orgname',
                                                                                    attrs: { style: 'width: 345px;' },
                                                                                    placeholder: 'Контактное лицо '
                                                                                },
                                                                                {
                                                                                    block: 'input',
                                                                                    name: 'orgname',
                                                                                    attrs: { style: 'width: 345px;' },
                                                                                    placeholder: 'Телефон'
                                                                                },
                                                                                {
                                                                                    block: 'input',
                                                                                    name: 'orgname',
                                                                                    attrs: { style: 'width: 345px;' },
                                                                                    placeholder: 'E-mail'
                                                                                },
                                                                                {
                                                                                    block: 'input',
                                                                                    name: 'orgname',
                                                                                    attrs: { style: 'width: 345px;' },
                                                                                    placeholder: 'Сайт магазина'
                                                                                },
                                                                                {
                                                                                    block: 'input',
                                                                                    name: 'orgname',
                                                                                    placeholder: 'Фактический адрес'
                                                                                },
                                                                                {
                                                                                    block: 'textarea',
                                                                                    name: 'orgname',
                                                                                    placeholder: 'Реквизиты компании'
                                                                                },
                                                                                {
                                                                                    elem: 'send-file',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'send-file-tip',
                                                                                            content: 'Вы можете приложить файл с реквизитами'
                                                                                        },
                                                                                        {
                                                                                            block: 'input',
                                                                                            content: 'Выберите файл',
                                                                                            name: 'file',
                                                                                            type: 'file'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    block: 'button',
                                                                                    mods: { type: 'submit' },
                                                                                    content: 'Отправить заявку'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'column',
                                                            elemMods: { position: 'right' },
                                                            content: [
                                                                {
                                                                    elem: 'section-title',
                                                                    content: [
                                                                        {
                                                                            elem: 'section-header',
                                                                            content: 'Региональные дилеры'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'dealers',
                                                                    content: [
                                                                        {
                                                                            elem: 'header',
                                                                            content: 'В Москве и Московской области:'
                                                                        },
                                                                        {
                                                                            elem: 'list',
                                                                            content: [
                                                                                {
                                                                                    elem: 'item',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'icon',
                                                                                            content: {
                                                                                                block: 'b-icon',
                                                                                                url: 'img/content/dealers-icons/lodki-piter.png'
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem: 'info',
                                                                                            content: [
                                                                                                {
                                                                                                    elem: 'title',
                                                                                                    content: 'ООО «Лодки – Палатки»'
                                                                                                },
                                                                                                {
                                                                                                    elem: 'site',
                                                                                                    content: { block: 'b-link', url: 'www.lp-mos.ru', content: 'www.lp-mos.ru' }
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
                                                                    block: 'dealers',
                                                                    content: [
                                                                        {
                                                                            elem: 'header',
                                                                            content: 'В Санкт Петербурге и  Ленобласти:'
                                                                        },
                                                                        {
                                                                            elem: 'list',
                                                                            content: [
                                                                                {
                                                                                    elem: 'item',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'icon',
                                                                                            content: {
                                                                                                block: 'b-icon',
                                                                                                url: 'img/content/dealers-icons/lodki-piter.png'
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem: 'info',
                                                                                            content: [
                                                                                                {
                                                                                                    elem: 'title',
                                                                                                    content: 'ООО «Лодки – Палатки»'
                                                                                                },
                                                                                                {
                                                                                                    elem: 'site',
                                                                                                    content: { block: 'b-link', url: 'www.lp-mos.ru', content: 'www.lp-mos.ru' }
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'item',
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'icon',
                                                                                            content: {
                                                                                                block: 'b-icon',
                                                                                                url: 'img/content/dealers-icons/lodki-piter1.png'
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem: 'info',
                                                                                            content: [
                                                                                                {
                                                                                                    elem: 'title',
                                                                                                    content: 'ООО «Лодки – Палатки»'
                                                                                                },
                                                                                                {
                                                                                                    elem: 'site',
                                                                                                    content: { block: 'b-link', url: 'www.lp-mos.ru', content: 'www.lp-mos.ru' }
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
                                                    elem: 'separator',
                                                    content: { block: 'line', mods: { type: 'wavy-0081bd' } }
                                                },
                                                {
                                                    elem: 'section',
                                                    content: [
                                                        {
                                                            block: 'b-text',
                                                            attrs: { style: 'width: 440px; margin: 0 auto 50px; font-size: 14px; line-height: 20px;text-align: center;' },
                                                            content: [
                                                                {
                                                                    elem: 'p',
                                                                    content: 'При совершении первых заказов  рекомендуем вам ознакомиться с графиком популярности надувных лодок Хантер.  '
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'section-title',
                                                            attrs: { style: 'text-align: center; margin: 0 0 70px 0;' },
                                                            content: [
                                                                {
                                                                    elem: 'section-header',
                                                                    attrs: { style: 'margin: 0 0 5px 0;' },
                                                                    content: 'Популярность моделей лодок Хантер'
                                                                },
                                                                {
                                                                    elem: 'section-sub-header',
                                                                    attrs: { style: 'color: #868686;' },
                                                                    content: 'по данным за 2013 год'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'image',
                                                            tag: 'img',
                                                            attrs: { src: 'img/content/diagrams/boat_model_hunter_popularity_2013.png' }
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
                    mods: { width: '982' },
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
