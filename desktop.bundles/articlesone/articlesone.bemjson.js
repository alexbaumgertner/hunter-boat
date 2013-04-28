({
    block: 'b-page',
    title: 'articles_item',
    head: [
        { elem: 'css', url: '_articlesone.css', ie: false},
        { elem: 'css', url: '_articlesone', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_articlesone.js'},
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
                                    block: 'article-item',
                                    content: [
                                        {
                                            elem: 'top',
                                            content: [
                                                {
                                                    elem: 'header',
                                                    content: 'Статьи'
                                                },
                                                {
                                                    elem: 'link-to-all',
                                                    url: 'articles.html',
                                                    content: 'К списку всех статей'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'title',
                                            content: 'Тест – драйв надувной лодки Хантер 360'
                                        },
                                        {
                                            elem: 'date',
                                            content: '21 октября 2009'
                                        },
                                        {
                                            elem: 'content',
                                            content: [
                                                {
                                                    block: 'b-text',
                                                    content: [
                                                        {
                                                            elem: 'p',
                                                            content: 'Новинку от компании «Бот-Трэйдинг» было решено испытать перед наступлением морозов, метелей и прочих природных катаклизмов,  обещанных нам Гидрометцентром. '
                                                        },
                                                        {
                                                            elem: 'p',
                                                            content: 'Прибыв утром на точку испытаний, и достав из «Газели» лодку мы начали готовить ее к спуску на воду и собственно тест-драйву. Для оценки всех мореходных качеств надувной лодки Хантер на тест были привезены три подвесных лодочных мотора – это Mercury 6 л.с 4 такта, Suzuki 15 2 такта (он же форсированная Суза 9,9), и Yamaha 25 л.с 2 такта,  что позволило оттестировать лодку под всеми возможными режимами в разных вариациях.'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'articles-images',
                                                    content: [
                                                        {
                                                            elem: 'image',
                                                            src: ''
                                                        },
                                                        {
                                                            elem: 'image',
                                                            src: ''
                                                        },
                                                        {
                                                            elem: 'image',
                                                            src: ''
                                                        },
                                                        {
                                                            elem: 'image',
                                                            src: ''
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-text',
                                                    content: [
                                                        {
                                                            elem: 'p',
                                                            content: 'Сборка лодки не составляет большого труда, даже при температуре близкой к нулю. Электропомпа быстро накачала баллоны до нужного давления, а удобный в сборке пол позволил собрать лодку меньше чем за двадцать минут.'
                                                        },
                                                        {
                                                            elem: 'p',
                                                            content: 'Баллоны лодки изготавливаются  из классической лодочной ткани ПВХ немецкого концерна Heytex или же концерна Mehler Texnologies. Ткани этих поставщиков хорошо зарекомендовали себя на российском рынке и уже долгие годы считаются одними из лучших. Плотность используемой ткани составляет 950 гр/м.куб – что является оптимальным для лодок такого размера.'
                                                        },
                                                        {
                                                            elem: 'p',
                                                            content: 'Немного про пайольный пол лодки Хантер 360. Пол состоит из пяти пайол, которые скреплены между собой алюминиевыми профилями, стрингер длиной 1.5 м. объединяет четыре секции пола, что придает полу монолитную структуру, и избавляет пассажиров от неприятных ощущений при движении. Пайолы надувной лодки Хантер 360 выполнены из водостойкой фанеры толщиной 12 мм с противоскользящим покрытием и обладают достаточной жесткостью. '
                                                        },
                                                        {
                                                            elem: 'p',
                                                            content: 'Внешний вид лодки впечатляет своими габаритами. Объем кокпита, пожалуй самый большой в классе, что позволяет разместится большой компании, или же занять свободное место грузом. Современные обводы, переменный диаметр баллона, клиновидная форма лодки, удобное расположение ручек, продуманная эргономика кокпита, передвижные банки, качественная фурнитура  – вот неоспоримые преимущества Хантер 360, которые способны оценить самые взыскательные рыбаки.'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'articles-images',
                                                    content: [
                                                        {
                                                            elem: 'image',
                                                            src: ''
                                                        },
                                                        {
                                                            elem: 'image',
                                                            src: ''
                                                        },
                                                        {
                                                            elem: 'image',
                                                            src: ''
                                                        },
                                                        {
                                                            elem: 'image',
                                                            src: ''
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-text',
                                                    content: [
                                                        {
                                                            elem: 'p',
                                                            content: 'Спуск на воду оказался легким и удобным благодаря  ручкам смонтированным вдоль борта лодки, а так же лееру который проходит от кормовой до носовой части.'
                                                        },
                                                        {
                                                            elem: 'p',
                                                            content: 'Итак, первый этап теста – испытания лодки с маломощным мотором в 6 л.с. Установка мотора не составила большого труда, и уже через пять минут лодка была готова к первому выходу.  Шкипер весом 90 кг без труда вывел лодку в режим глиссирования менее чем за 4 сек.  Средняя скорость с одним человеком на борту составила 24 км/ч. Добавив в лодку еще одного человека – средняя скорость лодки составила 22 км/ч. Выход на глиссирование с двумя людьми на борту составил всего 14 секунд. Первые выводы напросились сами собой – надувная лодка Хантер 360 легко выходит в глиссирующий режим, даже под маломощным мотором, отличается хорошей управляемостью как в поворотах так и на прямой,  исключены рыскания, а приподнятый нос лодки защищает людей от зыбрызгивания при движении по волнам. Установленный вдоль всего кокпита, леер позволяет пассажирам и шкиперу чувствовать себя безопастно, т.к. держаться за него можно в любом месте.'
                                                        },
                                                        {
                                                            elem: 'p',
                                                            content: 'При смене мотора на  15 л.с Suzuki (к сожалению не «чистокровка», а модернизированный подвесной лодочный мотор Suzuki 9.9 DF) cкорость движения с одним шкипером весом 90 кг составила  - 39 км/ч, с одним шкипером (90 кг) и пассажиром на борту (70 кг) – 35 км/ч,  шкипер (90 кг) + 2 пассажира на борту (175 кг) – 31,5 км/ч. Время выхода на глиссирование распределилось в следующем порядке – в первом случае – менее 2 сек., во втором – 3-4 секунды, в третьем – 7 сек. Заезд в комбинации шкипер (90 кг) + три пассажира (250 кг) – скорость движения составила - 28 км/ч. Внутренний объем кокпита надувной лодки позволяет без труда разместится двум пассажирам на одной банке.'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'articles-images',
                                                    content: [
                                                        {
                                                            elem: 'image',
                                                            src: ''
                                                        },
                                                        {
                                                            elem: 'image',
                                                            src: ''
                                                        },
                                                        {
                                                            elem: 'image',
                                                            src: ''
                                                        },
                                                        {
                                                            elem: 'image',
                                                            src: ''
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'b-text',
                                                    content: [
                                                        {
                                                            elem: 'p',
                                                            content: 'После проведенного тест-драйва о лодке Хантер 360 можно сказать следующее - на рынке появилась достойная лодка, не уступающая по своим ходовым и техническим характеристикам, более именитым собратьям, но имеющая свои отличительные черты:'
                                                        },
                                                        {
                                                            elem: 'ul',
                                                            elemMods: { 'list-type': 'dash' },
                                                            content: [
                                                                {
                                                                    elem: 'li',
                                                                    content: 'переменный диаметр баллона – придал лодке современный внешний вид;'
                                                                },
                                                                {
                                                                    elem: 'li',
                                                                    content: 'клиновидная форма обводов – обеспечила лодке Хантер 360 достойную управляемостью и хорошие скоростные характеристики;'
                                                                },
                                                                {
                                                                    elem: 'li',
                                                                    content: 'внутренний объем кокпита – не оставит равнодушным, ни одного рыбака;'
                                                                },
                                                                {
                                                                    elem: 'li',
                                                                    content: 'качественная фурнитура и продуманная эргономика создадут комфорт как во время движения, так и во время стоянки;'
                                                                },
                                                                {
                                                                    elem: 'li',
                                                                    content: 'киль с уникальным размещением центра дает отличную управляемость под любым мотором и на всех скоростях;'
                                                                },
                                                                {
                                                                    elem: 'li',
                                                                    content: 'приподнятый нос придает лодке завершенные и современные формы и позволяет избежать забрызгивания во время движения по волнам.'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'articles-videos',
                                                    content: [
                                                        {
                                                            elem: 'video',
                                                            content: ''
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            elem: 'links',
                                            content: [
                                                {
                                                    elem: 'link',
                                                    elemMods: { direction: 'prev' },
                                                    content: { block: 'b-link', url: '/', content: 'Предыдущая статья' }
                                                },
                                                {
                                                    elem: 'link',
                                                    elemMods: { direction: 'next' },
                                                    content: { block: 'b-link', url: '/', content: 'Следующая статья' }
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
