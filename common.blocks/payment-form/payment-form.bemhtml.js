block('payment-form')(
    js()({
        keyboardLayoutError: 'Смените раскладку'
    }),
    elem('number-input')(
        tag()('input'),
        attrs()({
            maxlength: 4
        })
    ),
    elem('owner-input').tag()('input'),
    elem('code-input')(
        tag()('input'),
        attrs()({
            maxlength: 3
        })
    ),
    elem('valid-period-select-day-month')(
        tag()('select'),
        content()([{
            tag: 'option',
            content: '1-январь'
        }, {
            tag: 'option',
            content: '1-февраль'
        }, {
            tag: 'option',
            content: '1-март'
        }, {
            tag: 'option',
            content: '1-апрель'
        }])
    ),
    elem('valid-period-select-year')(
        tag()('select'),
        content()([{
            tag: 'option',
            content: '2013'
        }, {
            tag: 'option',
            content: '2014'
        }, {
            tag: 'option',
            content: '2015'
        }, {
            tag: 'option',
            content: '2016'
        }])
    )
);
