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

            '*':function (modName, modVal, oldModVal) {
                this.sortElemsBy(modVal, this.getMod('sorted-direction'));
            }
        },

        'sorted-direction': {

            '*':function (modName, modVal, oldModVal) {
                this.sortElemsBy(this.getMod('sorted-by'), modVal);
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
     * Sort this.extractedElems and update html
     * @param sortParam
     * @param direction
     * @returns {Array}
     */
    sortElemsBy: function(sortParam, direction) {

        direction || (direction = 'asc');
        var compareResult;

        /* Sort elems (begin) */
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
        /* Sort elems (end) */

        // update html
        this.domElem.html(this.getItemsNodes().join(''));
        return this.extractedElems;
    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();
