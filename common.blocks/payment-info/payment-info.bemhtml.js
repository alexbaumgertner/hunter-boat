block('payment-info')(
    elem('alfa-bank-logo')(
        tag()('img'),
        attrs()(function() {
            return {
                src: this.ctx.url
            };
        })
    ),
    elem('pay-systems')(
        tag()('img'),
        attrs()(function() {
            return {
                src: this.ctx.url
            };
        })
    )
);
