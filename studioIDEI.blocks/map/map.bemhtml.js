block('map')(
    attrs()(function() {
        return {
            id: this.generateId()
        };
    }),
    js()(function() {
        this.ctx.js.mapID = this.generateId();
        return this.ctx.js;
    }),
    content()([{
        elem: 'map'
    }])
);
