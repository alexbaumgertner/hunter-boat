block('signin').content()([{
    elem: 'header',
    content: 'Впервые здесь?'
}, {
    elem: 'info',
    content: 'Представьтесь и покупайте'
}, {
    elem: 'name',
    content: {
        block: 'input',
        placeholder: 'Имя и Фамилия',
        name: 'name'
    }
}, {
    elem: 'email',
    content: {
        block: 'input',
        placeholder: 'E-mail',
        name: 'email'
    }
}, {
    elem: 'text',
    content: 'В дальнейшем почта будет логином для авторизации на сайте'
}, {
    elem: 'phone',
    content: {
        block: 'input',
        placeholder: 'Телефон',
        name: 'phone'
    }
}, {
    elem: 'text',
    content: 'Наши менеджеры сами перезвонят для уточнения и подтверждения заказа'
}, {
    elem: 'error',
    content: ['Пользователь с такой почтой уже зарегистрирован.<br> Если это вы — воспользуйтесь ', {
        block: 'link',
        mix: [{
            block: 'authorization',
            elem: 'password-recovery'
        }],
        mods: {
            pseudo: 'yes'
        },
        content: 'восстановлением пароля'
    }, '.']
}]);
