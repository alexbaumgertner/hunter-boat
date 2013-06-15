({
    block: 'b-page',
    title: 'payment',
    head: [
        { elem: 'css', url: '_payment.css', ie: false},
        { elem: 'css', url: '_payment', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_payment.js'},
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
                            elemMods: { position: 'right' }
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
                                    block: 'payment-page',
                                    content: [
                                        {
                                            elem: 'title',
                                            content: [
                                                {
                                                    elem: 'header',
                                                    content: 'Оплата заказа'
                                                },
                                                {
                                                    elem: 'number',
                                                    content: '№ 633760'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'content',
                                            content: [
                                                {
                                                    block: 'payment-form',
                                                    content: [
                                                        {
                                                            elem: 'info',
                                                            content: 'Сумма платежа: <strong>570.00 RUR</strong>'
                                                        },
                                                        {
                                                            elem: 'number',
                                                            content: [
                                                                {
                                                                    elem: 'input-title',
                                                                    content: 'Номер карты:'
                                                                },
                                                                {
                                                                    elem: 'input-value',
                                                                    content: [
                                                                        {
                                                                            elem: 'number-input'
                                                                        },
                                                                        {
                                                                            elem: 'number-input'
                                                                        },
                                                                        {
                                                                            elem: 'number-input'
                                                                        },
                                                                        {
                                                                            elem: 'number-input'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'valid-period',
                                                            content: [
                                                                {
                                                                    elem: 'input-title',
                                                                    content: 'Срок действия:'
                                                                },
                                                                {
                                                                    elem: 'input-value',
                                                                    content: [
                                                                        {
                                                                            elem: 'valid-period-select-day-month'
                                                                        },
                                                                        {
                                                                            elem: 'valid-period-select-year'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'owner',
                                                            content: [
                                                                {
                                                                    elem: 'input-title',
                                                                    content: 'Имя владельца:'
                                                                },
                                                                {
                                                                    elem: 'input-value',
                                                                    content: [
                                                                        {
                                                                            elem: 'owner-input'
                                                                        },
                                                                        {
                                                                            elem: 'input-info',
                                                                            content: 'латинскими буквами (как на карте)'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'code',
                                                            content: [
                                                                {
                                                                    elem: 'input-title',
                                                                    content: 'CVV/CVC код:'
                                                                },
                                                                {
                                                                    elem: 'input-value',
                                                                    content: [
                                                                        {
                                                                            elem: 'code-input'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'input-info',
                                                                    content: '(три последние цифры)'
                                                                }
                                                            ]

                                                        },
                                                        {
                                                            elem: 'submit',
                                                            content: {
                                                                block: 'button',
                                                                mods: { type: 'submit' },
                                                                content: 'Оплатить'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'payment-info',
                                                    content: [
                                                        {
                                                            elem: 'alfa-bank-logo',
                                                            url: 'img/content/payment/alfabank.png'
                                                        },
                                                        {
                                                            elem: 'security-header',
                                                            content: 'ПЛАТЁЖ  БЕЗОПАСЕН'
                                                        },
                                                        {
                                                            elem: 'security-info',
                                                            content: 'Передача информации защищена 256-битным сертификатом SSL, подписанным компанией Thawte.'
                                                        },
                                                        {
                                                            elem: 'pay-systems',
                                                            url: 'img/content/payment/secure.png'
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
    ]
})
