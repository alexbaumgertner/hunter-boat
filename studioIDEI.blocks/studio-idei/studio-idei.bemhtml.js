block('studio-idei')(
    js()(true),
    content()(function() {
        return [{
            elem: 'process',
            mix: [{
                block: 'b-link'
            }],
            content: 'Создание сайта',
            url: this.ctx.projectUrl
        }, {
            elem: 'name',
            mix: [{
                block: 'b-link',
                url: 'http://www.d-idei.ru/'
            }],
            content: [{
                elem: 'logo'
            }, {
                elem: 'text',
                content: 'студия «IDEI»'
            }]
        }, {
            elem: 'year',
            content: (new Date()).getFullYear()
        }];
    }),
    elem('name')(
        tag()('a'),
        attrs()({
            href: 'http://www.d-idei.ru/'
        })
    ),
    elem('process')(
        tag()('a'),
        attrs()(function() {
            return {
                href: this.ctx.url
            };
        })
    )
);
