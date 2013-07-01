/** @requires BEM */
/** @requires BEM */

(function(undefined) {

BEM.DOM.decl('i-sortable', {

    onSetMod : {

        'js' : function() {
            var _this = this;
            this.extractedElems = [];

            this.elem('item').each(function (index, elem) {
                var params = _this.elemParams($(elem));

                if (params) {
                    _this.extractedElems.push({
                        params: params,
                        node: elem
                    })
                }
            });

        },

        'sorted-by': {

            '*':function () {
                this.domElem.html(this.getItemsNodes().join(''));
            }

        }

    },

    getItemsNodes: function () {
        var nodes = [];

        $.each(this.extractedElems, function(key, value) {
            nodes.push(value.node.outerHTML);
        });
        return nodes;
    },

    /**
     * Sort this.extractedElems
     * @param sortParam
     * @param direction
     * @returns {Array}
     */
    sortElemsBy: function(sortParam, direction) {
        direction || (direction = 'asc');
        var compareResult;

        this.extractedElems.sort(function (prev, next) {

            if (typeof prev['params'][sortParam] === 'number') {
                compareResult =  prev['params'][sortParam] - next['params'][sortParam];

            // string
            } else {
                compareResult = prev['params'][sortParam].localeCompare(next['params'][sortParam]);
            }

            // change sort direction
            direction === 'asc' || (compareResult = -compareResult);

            return compareResult;

        });

        this.setMod('sorted-by', sortParam);
        this.setMod('sorted-direction', direction);
        return this.extractedElems;
    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

    sortElemsBy: function(sortParam, direction) {
        this.sortElemsBy(sortParam, direction);
    }

});

})();
