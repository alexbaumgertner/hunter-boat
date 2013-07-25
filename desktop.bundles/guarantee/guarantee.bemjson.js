({
    block: 'b-page',
    title: 'guarantee',
    head: [
        { elem: 'css', url: '_guarantee.css', ie: false},
        { elem: 'css', url: '_guarantee', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_guarantee.js'},
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
                                    mods: { theme: 'bottom-glow' },
                                    content: [
                                        {
                                            elem: 'header',
                                            mix: [
                                                { block: 'patternizer', js: { 'data-pattern': 'img/headers/About-company.jpg' } }
                                            ],
                                            content: 'Гарантия'
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
                                                                            content: 'Уважаемый покупатель, компания ООО «ПТК Хантер» благодарит Вас за ваш выбор!'
                                                                        },
                                                                        {
                                                                            elem: 'ul',
                                                                            elemMods: { 'list-type': 'blue-circle' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'В ходе эксплуатации надувной лодки «Хантер» старайтесь не допускать механических повреждений ткани ПВХ, воздействия на поверхность ткани кислот и сильнодействующих растворителей.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Руководствуйтесь только паспортными данными при выборе подвесного лодочного мотора и не используйте лодку в режимах превышающих установленных производителем.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'При соблюдении всех рекомендаций, а так же бережном и внимательном отношении, надувные лодки «Хантер» прослужат Вам долгое время.'
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
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'img'
                                                                        },
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'Перед началом эксплуатации надувной лодки «Хантер» рекомендуем Вам изучит паспорт изделия и проверить правильность заполнения данных о продаже.'
                                                                        },
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'Гарантия на лодку распространяется только в том случае, если в паспорте указана дата продажи и стоит печать продавца.'
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
                                                            elem: 'section-title',
                                                            content: [
                                                                {
                                                                    elem: 'section-header',
                                                                    attrs: { style: 'margin: 0;' },
                                                                    content: 'Гарантийные сроки'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'guarantee-diagram'
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
                                                            attrs: { style: 'width: 580px;padding: 0;' },
                                                            content: [
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            block: 'info-page',
                                                                            elem: 'section-title',
                                                                            content: {
                                                                                elem: 'section-header',
                                                                                content: 'Гарантийное обслуживание'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'ul',
                                                                            elemMods: { 'list-type': 'blue-circle' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Если обнаруженный дефект соответствует условиям гарантийных обязательств, то он будет устранён за счёт изготовителя, а если дефект был получен по вине покупателя, то ремонт будет произведен за его счет.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'В случае возникновения гарантийных обязательств доставка лодки от терминала транспортной компании в г.Санкт Петербург за счет производителя. Если случай признан не гарантийным транспортировка в сервис центр ООО «ПТК Хантер» осуществляется за счет покупателя.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Лодка и её комплектующие сдаются на ремонт в чистом и просушенном виде. Рассмотрения гарантийного случая и гарантийный ремонт осуществляется в установленные законом сроки.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'При наступлении гарантийного случая - незамедлительно свяжитесь для консультации с продавцом Вашей лодки. Отправка лодки на гарантийный ремонт осуществляется строго через уполномоченного продавца.'
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
                                                                            content: 'Гарантия <span style="color: red;">не</span> распостраняется в случаях::'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'ul',
                                                                            elemMods: { 'list-type': 'dash' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Нарушения инструкции по уходу и эксплуатации.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Несчастного случая или аварии.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Использовании не оригинальных деталей и аксессуаров.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Вследствие самостоятельного ремонта или ремонт неспециализированным сервисом.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Механических повреждений, возникших в процессе эксплуатации надувной лодки или ее компонентов '
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Если изделие хранилось, было собрано или установлено неправильно, использовалось с нарушением норм эксплуатации или не по назначению'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Гарантия не распространяется на случайные повреждения, связанные со спуском лодки на воду, буксировкой, хранением и транспортировкой.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    content: 'Гарантия не распространяется на естественный износ изделий и старение материала. '
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
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
