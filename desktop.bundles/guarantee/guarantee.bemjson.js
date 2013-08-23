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
                                            /*mix: [
                                                { block: 'patternizer', js: { 'data-pattern': 'img/headers/About-company.jpg' } }
                                            ],*/
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
                                                                            attrs: { style: 'margin: 25px 0 0 20px; width: 370px;' },
                                                                            elemMods: { 'list-type': 'blue-circle' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;' },
                                                                                    content: 'В ходе эксплуатации надувной лодки «Хантер» старайтесь не допускать механических повреждений ткани ПВХ, воздействия на поверхность ткани кислот и сильнодействующих растворителей.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;' },
                                                                                    content: 'Руководствуйтесь только паспортными данными при выборе подвесного лодочного мотора и не используйте лодку в режимах превышающих установленных производителем.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;' },
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
                                                            attrs: {
                                                                style: 'font-style: italic;  width: 310px;'
                                                            },
                                                            content: [
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            elem: 'img',
                                                                            attrs: {
                                                                                src: 'img/content/guarantee/ros-test.png',
                                                                                style: 'margin: -70px 0 30px 0;'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'p',
                                                                            attrs: { style: 'font-size: 13px;' },
                                                                            content: 'Перед началом эксплуатации надувной лодки «Хантер» рекомендуем Вам изучит паспорт изделия и проверить правильность заполнения данных о продаже.'
                                                                        },
                                                                        {
                                                                            elem: 'p',
                                                                            attrs: { style: 'font-size: 13px;' },
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
                                                            attrs: {
                                                                style: 'text-align:center;margin: 0 0 45px 0;'
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'section-header',
                                                                    attrs: { style: 'margin: 0;' },
                                                                    content: 'Гарантийные сроки:'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'guarantee-diagram',
                                                            content: [
                                                                {
                                                                    elem: 'picture'
                                                                },
                                                                {
                                                                    elem: 'legend',
                                                                    attrs: { style: 'top: 10px;left:110px;' },
                                                                    content: [
                                                                        {
                                                                            elem: 'legend-header',
                                                                            content: '60 месяцев'
                                                                        },
                                                                        {
                                                                            elem: 'legend-text',
                                                                            content: 'со дня продажи на материал ПВХ в случае образования естественных трещин, пористости и следов гниения.'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'legend',
                                                                    attrs: { style: 'top: 10px;left: 615px;' },
                                                                    content: [
                                                                        {
                                                                            elem: 'legend-header',
                                                                            content: '24 месяцев'
                                                                        },
                                                                        {
                                                                            elem: 'legend-text',
                                                                            content: 'на клееные швы надувной лодки в случае их расклеивания или травления.'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'legend',
                                                                    attrs: { style: 'top: 140px;left: 615px;' },
                                                                    content: [
                                                                        {
                                                                            elem: 'legend-header',
                                                                            content: '12 месяцев'
                                                                        },
                                                                        {
                                                                            elem: 'legend-text',
                                                                            content: 'на фурнитуру, включая клапана, уключины, фиксаторы весел, держатели банок, леерные и транспортировочные рамы — для всех моделей.'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'legend',
                                                                    attrs: { style: 'top: 285px;left: 615px;' },
                                                                    content: [
                                                                        {
                                                                            elem: 'legend-header',
                                                                            content: '6 месяцев'
                                                                        },
                                                                        {
                                                                            elem: 'legend-text',
                                                                            content: 'на транспортировочные сумки, полы, реечный настил, весла, банки и помпы для всех моделей надувных лодок «Хантер».'
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
                                                            elem: 'column',
                                                            elemMods: { position: 'left' },
                                                            content: [
                                                                {
                                                                    block: 'b-text',
                                                                    content: [
                                                                        {
                                                                            block: 'info-page',
                                                                            elem: 'section-title',
                                                                            attrs: { style: 'margin: 0 0 0 22px;' },
                                                                            content: {
                                                                                elem: 'section-header',
                                                                                attrs: { style: 'font-size: 25px;' },
                                                                                content: 'Гарантийное обслуживание'
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'ul',
                                                                            elemMods: { 'list-type': 'blue-circle' },
                                                                            attrs: {
                                                                                style: 'margin: 40px 0 0 20px;'
                                                                            },
                                                                            content: [
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;' },
                                                                                    content: 'Если обнаруженный дефект соответствует условиям гарантийных обязательств, то он будет устранён за счёт изготовителя, а если дефект был получен по вине покупателя, то ремонт будет произведен за его счет.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;' },
                                                                                    content: 'В случае возникновения гарантийных обязательств доставка лодки от терминала транспортной компании в г.Санкт Петербург за счет производителя. Если случай признан не гарантийным транспортировка в сервис центр ООО «ПТК Хантер» осуществляется за счет покупателя.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;' },
                                                                                    content: 'Лодка и её комплектующие сдаются на ремонт в чистом и просушенном виде. Рассмотрения гарантийного случая и гарантийный ремонт осуществляется в установленные законом сроки.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;' },
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
                                                            attrs: { style: 'padding: 0 0 0 40px;' },
                                                            content: [
                                                                {
                                                                    elem: 'section-title',
                                                                    attrs: {
                                                                        style: 'margin: 0 0 0 20px;'
                                                                    },
                                                                    content: [
                                                                        {
                                                                            elem: 'section-header',
                                                                            attrs: { style: 'font-size: 25px;' },
                                                                            content: 'Гарантия <span style="color: red;">не</span> распостраняется в случаях:'
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
                                                                            elem: 'ul',
                                                                            elemMods: { 'list-type': 'dash' },
                                                                            attrs: {
                                                                                style: 'font-size: 14px; line-height: 20px;'
                                                                            },
                                                                            content: [
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;margin: 0 0 15px 0;' },
                                                                                    content: 'Нарушения инструкции по уходу и эксплуатации.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;margin: 0 0 15px 0;' },
                                                                                    content: 'Несчастного случая или аварии.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;margin: 0 0 15px 0;' },
                                                                                    content: 'Использовании не оригинальных деталей и аксессуаров.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;margin: 0 0 15px 0;' },
                                                                                    content: 'Вследствие самостоятельного ремонта или ремонт неспециализированным сервисом.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;margin: 0 0 15px 0;' },
                                                                                    content: 'Механических повреждений, возникших в процессе эксплуатации надувной лодки или ее компонентов '
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;margin: 0 0 15px 0;' },
                                                                                    content: 'Если изделие хранилось, было собрано или установлено неправильно, использовалось с нарушением норм эксплуатации или не по назначению'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;margin: 0 0 15px 0;' },
                                                                                    content: 'Гарантия не распространяется на случайные повреждения, связанные со спуском лодки на воду, буксировкой, хранением и транспортировкой.'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'line-height: 20px;margin: 0 0 15px 0;' },
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
                                                {
                                                    elem: 'separator',
                                                    content: { block: 'line', mods: { type: 'wavy-0081bd' } }
                                                },
                                                {
                                                    elem: 'section',
                                                    content: [
                                                        {
                                                            elem: 'info-box',
                                                            attrs: {
                                                                style: 'width: 560px;'
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'section-title',
                                                                    attrs: { style: 'margin: 0 0 0 30px;' },
                                                                    content: {
                                                                        elem: 'section-header',
                                                                        attrs: { style: 'font-size: 26px;' },
                                                                        content: 'Обмен и возврат товара'
                                                                    }
                                                                },
                                                                {
                                                                    block: 'b-text',
                                                                    attrs: { style: 'margin: 30px 0 0 30px;' },
                                                                    content: [
                                                                        {
                                                                            elem: 'p',
                                                                            content: 'При возникновении гарантийного случая обмен лодки на новую производится только при соблюдении следующих условий:'
                                                                        },
                                                                        {
                                                                            elem: 'ol',
                                                                            attrs: {
                                                                                style: 'margin: 0;font-size: 14px;margin: 20px 0 0 0;font-weight: bold;'
                                                                            },
                                                                            content: [
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'margin: 0 0 0 20px;line-height: 20px;' },
                                                                                    content: 'Лодка не была на воде'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'margin: 0 0 0 20px;line-height: 20px;' },
                                                                                    content: 'Лодка и комплектующие не имеют никаких механических повреждений'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'margin: 0 0 0 20px;line-height: 20px;' },
                                                                                    content: 'Комплектация лодки соответствует паспорту изделия'
                                                                                },
                                                                                {
                                                                                    elem: 'li',
                                                                                    attrs: { style: 'margin: 0 0 0 20px;line-height: 20px;' },
                                                                                    content: 'Лодка имеет не устранимый дефект'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'p',
                                                                            attrs: { style: 'margin: 30px 0 20px 0;' },
                                                                            content: 'Во всех остальных случаях осуществляется гарантийный ремонт.'
                                                                        }
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            block: 'b-text',
                                                            attrs: {
                                                                style: 'margin: 50px auto 0;width: 490px;text-align: center;font-weight: bold;'
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'p',
                                                                    content: 'При наступлении гарантийного случая Вы всегда можете обратиться к нам за помощью, квалифицированные менеджеры нашей компании всегда проконсультируют Вас.'
                                                                },
                                                                {
                                                                    elem: 'p',
                                                                    attrs: {
                                                                        style: 'margin: 20px 0 0 0;font-size: 17px;'
                                                                    },
                                                                    content: 'пн-пт 9:00-18:00 &nbsp; &nbsp; +7 (812) 654-32-55'
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
