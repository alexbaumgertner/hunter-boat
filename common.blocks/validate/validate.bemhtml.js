block('validate').content()(function() {
    return [{
        elem: 'input',
        tag: 'span',
        content: {
            block: 'input',
            mods: {
                reqiured: 'yes'
            },
            placeholder: 'Введите код',
            name: 'captcha'
        }
    }, {
        elem: 'captcha',
        tag: 'span',
        content: [{
            elem: 'captcha-image',
            tag: 'img',
            attrs: {
                src: ('img/validate/captcha/' + this.ctx.id + '.gif')
            }
        }, {
            elem: 'captcha-reload',
            content: 'Обновить капчу'
        }]
    }];
});
