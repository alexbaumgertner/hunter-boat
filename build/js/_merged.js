/* ../../bem-bl/blocks-common/i-jquery/__inherit/i-jquery__inherit.js begin */
/**
 * Inheritance plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (dfilatov@yandex-team.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.3.5
 */

(function($) {

var hasIntrospection = (function(){_}).toString().indexOf('_') > -1,
    emptyBase = function() {},
    objCreate = Object.create || function(ptp) {
        var inheritance = function() {};
        inheritance.prototype = ptp;
        return new inheritance();
    },
    needCheckProps = true,
    testPropObj = { toString : '' };

for(var i in testPropObj) { // fucking ie hasn't toString, valueOf in for
    testPropObj.hasOwnProperty(i) && (needCheckProps = false);
}

var specProps = needCheckProps? ['toString', 'valueOf'] : null;

function override(base, result, add) {

    var hasSpecProps = false;
    if(needCheckProps) {
        var addList = [];
        $.each(specProps, function() {
            add.hasOwnProperty(this) && (hasSpecProps = true) && addList.push({
                name : this,
                val  : add[this]
            });
        });
        if(hasSpecProps) {
            $.each(add, function(name) {
                addList.push({
                    name : name,
                    val  : this
                });
            });
            add = addList;
        }
    }

    $.each(add, function(name, prop) {
        if(hasSpecProps) {
            name = prop.name;
            prop = prop.val;
        }
        if($.isFunction(prop) &&
           (!hasIntrospection || prop.toString().indexOf('.__base') > -1)) {

            var baseMethod = base[name] || function() {};
            result[name] = function() {
                var baseSaved = this.__base;
                this.__base = baseMethod;
                var result = prop.apply(this, arguments);
                this.__base = baseSaved;
                return result;
            };

        }
        else {
            result[name] = prop;
        }

    });

}

$.inherit = function() {

    var args = arguments,
        hasBase = $.isFunction(args[0]),
        base = hasBase? args[0] : emptyBase,
        props = args[hasBase? 1 : 0] || {},
        staticProps = args[hasBase? 2 : 1],
        result = props.__constructor || (hasBase && base.prototype.__constructor)?
            function() {
                return this.__constructor.apply(this, arguments);
            } : function() {};

    if(!hasBase) {
        result.prototype = props;
        result.prototype.__self = result.prototype.constructor = result;
        return $.extend(result, staticProps);
    }

    $.extend(result, base);

    var basePtp = base.prototype,
        resultPtp = result.prototype = objCreate(basePtp);

    resultPtp.__self = resultPtp.constructor = result;

    override(basePtp, resultPtp, props);
    staticProps && override(base, result, staticProps);

    return result;

};

$.inheritSelf = function(base, props, staticProps) {

    var basePtp = base.prototype;

    override(basePtp, basePtp, props);
    staticProps && override(base, base, staticProps);

    return base;

};

})(jQuery);
/* ../../bem-bl/blocks-common/i-jquery/__inherit/i-jquery__inherit.js end */
;
/* ../../bem-bl/blocks-common/i-jquery/__identify/i-jquery__identify.js begin */
/**
 * Identify plugin
 *
 * @version 1.0.0
 */

(function($) {

var counter = 0,
    expando = '__' + (+new Date),
    get = function() {
        return 'uniq' + ++counter;
    };

/**
 * Makes unique ID
 * @param {Object} [obj] Object that needs to be identified
 * @param {Boolean} [onlyGet=false] Return a unique value only if it had already been assigned before
 * @returns {String} ID
 */
$.identify = function(obj, onlyGet) {

    if(!obj) return get();

    var key = 'uniqueID' in obj? 'uniqueID' : expando; // Use when possible. native uniqueID for elements in IE

    return onlyGet || key in obj?
        obj[key] :
        obj[key] = get();

};

})(jQuery);
/* ../../bem-bl/blocks-common/i-jquery/__identify/i-jquery__identify.js end */
;
/* ../../bem-bl/blocks-common/i-jquery/__is-empty-object/i-jquery__is-empty-object.js begin */
(function($) {

$.isEmptyObject || ($.isEmptyObject = function(obj) {
        for(var i in obj) return false;
        return true;
    });

})(jQuery);

/* ../../bem-bl/blocks-common/i-jquery/__is-empty-object/i-jquery__is-empty-object.js end */
;
/* ../../bem-bl/blocks-common/i-jquery/__debounce/i-jquery__debounce.js begin */
/**
 * Debounce and throttle function's decorator plugin 1.0.6
 *
 * Copyright (c) 2009 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function($) {

$.extend({

    debounce : function(fn, timeout, invokeAsap, ctx) {

        if(arguments.length == 3 && typeof invokeAsap != 'boolean') {
            ctx = invokeAsap;
            invokeAsap = false;
        }

        var timer;

        return function() {

            var args = arguments;
            ctx = ctx || this;

            invokeAsap && !timer && fn.apply(ctx, args);

            clearTimeout(timer);

            timer = setTimeout(function() {
                invokeAsap || fn.apply(ctx, args);
                timer = null;
            }, timeout);

        };

    },

    throttle : function(fn, timeout, ctx) {

        var timer, args, needInvoke;

        return function() {

            args = arguments;
            needInvoke = true;
            ctx = ctx || this;

            timer || (function() {
                if(needInvoke) {
                    fn.apply(ctx, args);
                    needInvoke = false;
                    timer = setTimeout(arguments.callee, timeout);
                }
                else {
                    timer = null;
                }
            })();

        };

    }

});

})(jQuery);
/* ../../bem-bl/blocks-common/i-jquery/__debounce/i-jquery__debounce.js end */
;
/* ../../bem-bl/blocks-common/i-jquery/__observable/i-jquery__observable.js begin */
/**
 * Observable plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.0.0
 * @requires $.identify
 * @requires $.inherit
 */

(function($) {

var storageExpando = '__' + +new Date + 'storage',
    getFnId = function(fn, ctx) {
        return $.identify(fn) + (ctx? $.identify(ctx) : '');
    },
    Observable = /** @lends $.observable.prototype */{

        /**
         * Builds full event name
         * @protected
         * @param {String} e Event type
         * @returns {String}
         */
        buildEventName : function(e) {

            return e;

        },

        /**
         * Adding event handler
         * @param {String} e Event type
         * @param {Object} [data] Additional data that the handler gets as e.data
         * @param {Function} fn Handler
         * @param {Object} [ctx] Handler context
         * @returns {$.observable}
         */
        on : function(e, data, fn, ctx, _special) {

            if(typeof e == 'string') {
                if($.isFunction(data)) {
                    ctx = fn;
                    fn = data;
                    data = undefined;
                }

                var id = getFnId(fn, ctx),
                    storage = this[storageExpando] || (this[storageExpando] = {}),
                    eList = e.split(' '),
                    i = 0,
                    eStorage;

                while(e = eList[i++]) {
                    e = this.buildEventName(e);
                    eStorage = storage[e] || (storage[e] = { ids : {}, list : {} });

                    if(!(id in eStorage.ids)) {
                        var list = eStorage.list,
                            item = { fn : fn, data : data, ctx : ctx, special : _special };
                        if(list.last) {
                            list.last.next = item;
                            item.prev = list.last;
                        } else {
                            list.first = item;
                        }

                        eStorage.ids[id] = list.last = item;
                    }
                }
            } else {
                var _this = this;
                $.each(e, function(e, fn) {
                    _this.on(e, fn, data, _special);
                });
            }

            return this;

        },

        onFirst : function(e, data, fn, ctx) {

            return this.on(e, data, fn, ctx, { one : true });

        },

        /**
         * Removing event handler(s)
         * @param {String} [e] Event type
         * @param {Function} [fn] Handler
         * @param {Object} [ctx] Handler context
         * @returns {$.observable}
         */
        un : function(e, fn, ctx) {

            if(typeof e == 'string' || typeof e == 'undefined') {
                var storage = this[storageExpando];
                if(storage) {
                    if(e) { // if event type was passed
                        var eList = e.split(' '),
                            i = 0,
                            eStorage;
                        while(e = eList[i++]) {
                            e = this.buildEventName(e);
                            if(eStorage = storage[e]) {
                                if(fn) {  // if specific handler was passed
                                    var id = getFnId(fn, ctx),
                                        ids = eStorage.ids;
                                    if(id in ids) {
                                        var list = eStorage.list,
                                            item = ids[id],
                                            prev = item.prev,
                                            next = item.next;

                                        if(prev) {
                                            prev.next = next;
                                        }
                                        else if(item === list.first) {
                                            list.first = next;
                                        }

                                        if(next) {
                                            next.prev = prev;
                                        }
                                        else if(item === list.last) {
                                            list.last = prev;
                                        }

                                        delete ids[id];
                                    }
                                } else {
                                    delete this[storageExpando][e];
                                }
                            }
                        }
                    } else {
                        delete this[storageExpando];
                    }
                }
            } else {
                var _this = this;
                $.each(e, function(e, fn) {
                    _this.un(e, fn, ctx);
                });
            }

            return this;

        },

        /**
         * Fires event handlers
         * @param {String|$.Event} e Event
         * @param {Object} [data] Additional data
         * @returns {$.observable}
         */
        trigger : function(e, data) {

            var _this = this,
                storage = _this[storageExpando],
                rawType;

            typeof e === 'string'?
                e = $.Event(_this.buildEventName(rawType = e)) :
                e.type = _this.buildEventName(rawType = e.type);

            e.target || (e.target = _this);

            if(storage && (storage = storage[e.type])) {
                var item = storage.list.first,
                    ret;
                while(item) {
                    e.data = item.data;
                    ret = item.fn.call(item.ctx || _this, e, data);
                    if(typeof ret !== 'undefined') {
                        e.result = ret;
                        if(ret === false) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }

                    item.special && item.special.one &&
                        _this.un(rawType, item.fn, item.ctx);
                    item = item.next;
                }
            }

            return this;

        }

    };

$.observable = $.inherit(Observable, Observable);

})(jQuery);
/* ../../bem-bl/blocks-common/i-jquery/__observable/i-jquery__observable.js end */
;
/* ../../bem-bl/blocks-common/i-bem/i-bem.js begin */
/** @requires jquery.inherit */
/** @requires jquery.isEmptyObject */
/** @requires jquery.identify */
/** @requires jquery.observable */

(function($, undefined) {

/**
 * Storage for deferred functions
 * @private
 * @type Array
 */
var afterCurrentEventFns = [],

/**
 * Storage for block declarations (hash by block name)
 * @private
 * @type Object
 */
    blocks = {},

/**
 * Communication channels
 * @static
 * @private
 * @type Object
 */
    channels = {};

/**
 * Builds the name of the handler method for setting a modifier
 * @static
 * @private
 * @param {String} elemName Element name
 * @param {String} modName Modifier name
 * @param {String} modVal Modifier value
 * @returns {String}
 */
function buildModFnName(elemName, modName, modVal) {

    return (elemName? '__elem_' + elemName : '') +
           '__mod' +
           (modName? '_' + modName : '') +
           (modVal? '_' + modVal : '');

}

/**
 * Transforms a hash of modifier handlers to methods
 * @static
 * @private
 * @param {Object} modFns
 * @param {Object} props
 * @param {String} [elemName]
 */
function modFnsToProps(modFns, props, elemName) {

    $.isFunction(modFns)?
        (props[buildModFnName(elemName, '*', '*')] = modFns) :
        $.each(modFns, function(modName, modFn) {
            $.isFunction(modFn)?
                (props[buildModFnName(elemName, modName, '*')] = modFn) :
                $.each(modFn, function(modVal, modFn) {
                    props[buildModFnName(elemName, modName, modVal)] = modFn;
                });
        });

}

function buildCheckMod(modName, modVal) {

    return modVal?
        Array.isArray(modVal)?
            function(block) {
                var i = 0, len = modVal.length;
                while(i < len)
                    if(block.hasMod(modName, modVal[i++]))
                        return true;
                return false;
            } :
            function(block) {
                return block.hasMod(modName, modVal);
            } :
        function(block) {
            return block.hasMod(modName);
        };

}

/** @namespace */
this.BEM = $.inherit($.observable, /** @lends BEM.prototype */ {

    /**
     * @class Base block for creating BEM blocks
     * @constructs
     * @private
     * @param {Object} mods Block modifiers
     * @param {Object} params Block parameters
     * @param {Boolean} [initImmediately=true]
     */
    __constructor : function(mods, params, initImmediately) {

        var _this = this;

        /**
         * Cache of block modifiers
         * @private
         * @type Object
         */
        _this._modCache = mods || {};

        /**
         * Current modifiers in the stack
         * @private
         * @type Object
         */
        _this._processingMods = {};

        /**
         * The block's parameters, taking into account the defaults
         * @protected
         * @type Object
         */
        _this._params = params; // это нужно для правильной сборки параметров у блока из нескольких нод
        _this.params = null;

        initImmediately !== false?
            _this._init() :
            _this.afterCurrentEvent(function() {
                _this._init();
            });

    },

    /**
     * Initializes the block
     * @private
     */
    _init : function() {

        if(!this._initing && !this.hasMod('js', 'inited')) {
            this._initing = true;

            if(!this.params) {
                this.params = $.extend(this.getDefaultParams(), this._params);
                delete this._params;
            }

            this.setMod('js', 'inited');
            delete this._initing;
            this.hasMod('js', 'inited') && this.trigger('init');
        }

        return this;

    },

    /**
     * Changes the context of the function being passed
     * @protected
     * @param {Function} fn
     * @param {Object} [ctx=this] Context
     * @returns {Function} Function with a modified context
     */
    changeThis : function(fn, ctx) {

        return fn.bind(ctx || this);

    },

    /**
     * Executes the function in the context of the block, after the "current event"
     * @protected
     * @param {Function} fn
     * @param {Object} [ctx] Context
     */
    afterCurrentEvent : function(fn, ctx) {

        this.__self.afterCurrentEvent(this.changeThis(fn, ctx));

    },

    /**
     * Executes the block's event handlers and live event handlers
     * @protected
     * @param {String} e Event name
     * @param {Object} [data] Additional information
     * @returns {BEM}
     */
    trigger : function(e, data) {

        this
            .__base(e = this.buildEvent(e), data)
            .__self.trigger(e, data);

        return this;

    },

    buildEvent : function(e) {

        typeof e == 'string' && (e = $.Event(e));
        e.block = this;

        return e;

    },

    /**
     * Checks whether a block or nested element has a modifier
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {Boolean}
     */
    hasMod : function(elem, modName, modVal) {

        var len = arguments.length,
            invert = false;

        if(len == 1) {
            modVal = '';
            modName = elem;
            elem = undefined;
            invert = true;
        }
        else if(len == 2) {
            if(typeof elem == 'string') {
                modVal = modName;
                modName = elem;
                elem = undefined;
            }
            else {
                modVal = '';
                invert = true;
            }
        }

        var res = this.getMod(elem, modName) === modVal;
        return invert? !res : res;

    },

    /**
     * Returns the value of the modifier of the block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @returns {String} Modifier value
     */
    getMod : function(elem, modName) {

        var type = typeof elem;
        if(type === 'string' || type === 'undefined') { // elem either omitted or undefined
            modName = elem || modName;
            var modCache = this._modCache;
            return modName in modCache?
                modCache[modName] :
                modCache[modName] = this._extractModVal(modName);
        }

        return this._getElemMod(modName, elem);

    },

    /**
     * Returns the value of the modifier of the nested element
     * @private
     * @param {String} modName Modifier name
     * @param {Object} elem Nested element
     * @param {Object} [elem] Nested element name
     * @returns {String} Modifier value
     */
    _getElemMod : function(modName, elem, elemName) {

        return this._extractModVal(modName, elem, elemName);

    },

    /**
     * Returns values of modifiers of the block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} [modName1, ..., modNameN] Modifier names
     * @returns {Object} Hash of modifier values
     */
    getMods : function(elem) {

        var hasElem = elem && typeof elem != 'string',
            _this = this,
            modNames = [].slice.call(arguments, hasElem? 1 : 0),
            res = _this._extractMods(modNames, hasElem? elem : undefined);

        if(!hasElem) { // caching
            modNames.length?
                modNames.forEach(function(name) {
                    _this._modCache[name] = res[name];
                }):
                _this._modCache = res;
        }

        return res;

    },

    /**
     * Sets the modifier for a block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @returns {BEM}
     */
    setMod : function(elem, modName, modVal) {

        if(typeof modVal == 'undefined') {
            modVal = modName;
            modName = elem;
            elem = undefined;
        }

        var _this = this;

        if(!elem || elem[0]) {

            var modId = (elem && elem[0]? $.identify(elem[0]) : '') + '_' + modName;

            if(this._processingMods[modId]) return _this;

            var elemName,
                curModVal = elem?
                    _this._getElemMod(modName, elem, elemName = _this.__self._extractElemNameFrom(elem)) :
                    _this.getMod(modName);

            if(curModVal === modVal) return _this;

            this._processingMods[modId] = true;

            var needSetMod = true,
                modFnParams = [modName, modVal, curModVal];

            elem && modFnParams.unshift(elem);

            [['*', '*'], [modName, '*'], [modName, modVal]].forEach(function(mod) {
                needSetMod = _this._callModFn(elemName, mod[0], mod[1], modFnParams) !== false && needSetMod;
            });

            !elem && needSetMod && (_this._modCache[modName] = modVal);

            needSetMod && _this._afterSetMod(modName, modVal, curModVal, elem, elemName);

            delete this._processingMods[modId];
        }

        return _this;

    },

    /**
     * Function after successfully changing the modifier of the block/nested element
     * @protected
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {String} oldModVal Old modifier value
     * @param {Object} [elem] Nested element
     * @param {String} [elemName] Element name
     */
    _afterSetMod : function(modName, modVal, oldModVal, elem, elemName) {},

    /**
     * Sets a modifier for a block/nested element, depending on conditions.
     * If the condition parameter is passed: when true, modVal1 is set; when false, modVal2 is set.
     * If the condition parameter is not passed: modVal1 is set if modVal2 was set, or vice versa.
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal1 First modifier value
     * @param {String} [modVal2] Second modifier value
     * @param {Boolean} [condition] Condition
     * @returns {BEM}
     */
    toggleMod : function(elem, modName, modVal1, modVal2, condition) {

        if(typeof elem == 'string') { // if this is a block
            condition = modVal2;
            modVal2 = modVal1;
            modVal1 = modName;
            modName = elem;
            elem = undefined;
        }
        if(typeof modVal2 == 'undefined') {
            modVal2 = '';
        } else if(typeof modVal2 == 'boolean') {
            condition = modVal2;
            modVal2 = '';
        }

        var modVal = this.getMod(elem, modName);
        (modVal == modVal1 || modVal == modVal2) &&
            this.setMod(
                elem,
                modName,
                typeof condition === 'boolean'?
                    (condition? modVal1 : modVal2) :
                    this.hasMod(elem, modName, modVal1)? modVal2 : modVal1);

        return this;

    },

    /**
     * Removes a modifier from a block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @returns {BEM}
     */
    delMod : function(elem, modName) {

        if(!modName) {
            modName = elem;
            elem = undefined;
        }

        return this.setMod(elem, modName, '');

    },

    /**
     * Executes handlers for setting modifiers
     * @private
     * @param {String} elemName Element name
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {Array} modFnParams Handler parameters
     */
    _callModFn : function(elemName, modName, modVal, modFnParams) {

        var modFnName = buildModFnName(elemName, modName, modVal);
        return this[modFnName]?
           this[modFnName].apply(this, modFnParams) :
           undefined;

    },

    /**
     * Retrieves the value of the modifier
     * @private
     * @param {String} modName Modifier name
     * @param {Object} [elem] Element
     * @returns {String} Modifier value
     */
    _extractModVal : function(modName, elem) {

        return '';

    },

    /**
     * Retrieves name/value for a list of modifiers
     * @private
     * @param {Array} modNames Names of modifiers
     * @param {Object} [elem] Element
     * @returns {Object} Hash of modifier values by name
     */
    _extractMods : function(modNames, elem) {

        return {};

    },

    /**
     * Returns a named communication channel
     * @param {String} [id='default'] Channel ID
     * @param {Boolean} [drop=false] Destroy the channel
     * @returns {$.observable|undefined} Communication channel
     */
    channel : function(id, drop) {

        return this.__self.channel(id, drop);

    },

    /**
     * Returns a block's default parameters
     * @returns {Object}
     */
    getDefaultParams : function() {

        return {};

    },

    /**
     * Helper for cleaning up block properties
     * @param {Object} [obj=this]
     */
    del : function(obj) {

        var args = [].slice.call(arguments);
        typeof obj == 'string' && args.unshift(this);
        this.__self.del.apply(this.__self, args);
        return this;

	},

    /**
     * Deletes a block
     */
    destruct : function() {}

}, /** @lends BEM */{

    _name : 'i-bem',

    /**
     * Storage for block declarations (hash by block name)
     * @static
     * @protected
     * @type Object
     */
    blocks : blocks,

    /**
     * Declares blocks and creates a block class
     * @static
     * @protected
     * @param {String|Object} decl Block name (simple syntax) or description
     * @param {String} decl.block|decl.name Block name
     * @param {String} [decl.baseBlock] Name of the parent block
     * @param {String} [decl.modName] Modifier name
     * @param {String} [decl.modVal] Modifier value
     * @param {Object} [props] Methods
     * @param {Object} [staticProps] Static methods
     */
    decl : function(decl, props, staticProps) {

        if(typeof decl == 'string')
            decl = { block : decl };
        else if(decl.name) {
            decl.block = decl.name;
        }

        if(decl.baseBlock && !blocks[decl.baseBlock])
            throw('baseBlock "' + decl.baseBlock + '" for "' + decl.block + '" is undefined');

        props || (props = {});

        if(props.onSetMod) {
            modFnsToProps(props.onSetMod, props);
            delete props.onSetMod;
        }

        if(props.onElemSetMod) {
            $.each(props.onElemSetMod, function(elemName, modFns) {
                modFnsToProps(modFns, props, elemName);
            });
            delete props.onElemSetMod;
        }

        var baseBlock = blocks[decl.baseBlock || decl.block] || this;

        if(decl.modName) {
            var checkMod = buildCheckMod(decl.modName, decl.modVal);
            $.each(props, function(name, prop) {
                $.isFunction(prop) &&
                    (props[name] = function() {
                        var method;
                        if(checkMod(this)) {
                            method = prop;
                        } else {
                            var baseMethod = baseBlock.prototype[name];
                            baseMethod && baseMethod !== props[name] &&
                                (method = this.__base);
                        }
                        return method?
                            method.apply(this, arguments) :
                            undefined;
                    });
            });
        }

        if(staticProps && typeof staticProps.live === 'boolean') {
            var live = staticProps.live;
            staticProps.live = function() {
                return live;
            };
        }

        var block;
        decl.block == baseBlock._name?
            // makes a new "live" if the old one was already executed
            (block = $.inheritSelf(baseBlock, props, staticProps))._processLive(true) :
            (block = blocks[decl.block] = $.inherit(baseBlock, props, staticProps))._name = decl.block;

        return block;

    },

    /**
     * Processes a block's live properties
     * @private
     * @param {Boolean} [heedLive=false] Whether to take into account that the block already processed its live properties
     * @returns {Boolean} Whether the block is a live block
     */
    _processLive : function(heedLive) {

        return false;

    },

    /**
     * Factory method for creating an instance of the block named
     * @static
     * @param {String|Object} block Block name or description
     * @param {Object} [params] Block parameters
     * @returns {BEM}
     */
    create : function(block, params) {

        typeof block == 'string' && (block = { block : block });

        return new blocks[block.block](block.mods, params);

    },

    /**
     * Returns the name of the current block
     * @static
     * @protected
     * @returns {String}
     */
    getName : function() {

        return this._name;

    },

    /**
     * Retrieves the name of an element nested in a block
     * @static
     * @private
     * @param {Object} elem Nested element
     * @returns {String|undefined}
     */
    _extractElemNameFrom : function(elem) {},

    /**
     * Adds a function to the queue for executing after the "current event"
     * @static
     * @protected
     * @param {Function} fn
     * @param {Object} ctx
     */
    afterCurrentEvent : function(fn, ctx) {

        afterCurrentEventFns.push({ fn : fn, ctx : ctx }) == 1 &&
            setTimeout(this._runAfterCurrentEventFns, 0);

    },

    /**
     * Executes the queue
     * @private
     */
    _runAfterCurrentEventFns : function() {

        var fnsLen = afterCurrentEventFns.length;
        if(fnsLen) {
            var fnObj,
                fnsCopy = afterCurrentEventFns.splice(0, fnsLen);

            while(fnObj = fnsCopy.shift()) fnObj.fn.call(fnObj.ctx || this);
        }

    },

    /**
     * Changes the context of the function being passed
     * @protected
     * @param {Function} fn
     * @param {Object} ctx Context
     * @returns {Function} Function with a modified context
     */
    changeThis : function(fn, ctx) {

        return fn.bind(ctx || this);

    },

    /**
     * Helper for cleaning out properties
     * @param {Object} [obj=this]
     */
    del : function(obj) {

        var delInThis = typeof obj == 'string',
            i = delInThis? 0 : 1,
            len = arguments.length;
        delInThis && (obj = this);

        while(i < len) delete obj[arguments[i++]];

        return this;

	},

    /**
     * Returns/destroys a named communication channel
     * @param {String} [id='default'] Channel ID
     * @param {Boolean} [drop=false] Destroy the channel
     * @returns {$.observable|undefined} Communication channel
     */
    channel : function(id, drop) {

        if(typeof id == 'boolean') {
            drop = id;
            id = undefined;
        }

        id || (id = 'default');

        if(drop) {
            if(channels[id]) {
                channels[id].un();
                delete channels[id];
            }
            return;
        }

        return channels[id] || (channels[id] = new $.observable());

    }

});

})(jQuery);
/* ../../bem-bl/blocks-common/i-bem/i-bem.js end */
;
/* ../../bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js begin */
(function() {

/**
 * Возвращает массив свойств объекта
 * @param {Object} obj объект
 * @returns {Array}
 */
Object.keys || (Object.keys = function(obj) {
    var res = [];

    for(var i in obj) obj.hasOwnProperty(i) &&
        res.push(i);

    return res;
});

})();
/* ../../bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js end */
;
/* ../../bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js begin */
(function() {

var ptp = Array.prototype,
    toStr = Object.prototype.toString,
    methods = {

        /**
         * Finds the index of an element in an array
         * @param {Object} item
         * @param {Number} [fromIdx] Starting from index (length - 1 - fromIdx, if fromIdx < 0)
         * @returns {Number} Element index or -1, if not found
         */
        indexOf : function(item, fromIdx) {

            fromIdx = +(fromIdx || 0);

            var t = this, len = t.length;

            if(len > 0 && fromIdx < len) {
                fromIdx = fromIdx < 0? Math.ceil(fromIdx) : Math.floor(fromIdx);
                fromIdx < -len && (fromIdx = 0);
                fromIdx < 0 && (fromIdx = fromIdx + len);

                while(fromIdx < len) {
                    if(fromIdx in t && t[fromIdx] === item)
                        return fromIdx;
                    ++fromIdx;
                }
            }

            return -1;

        },

        /**
         * Calls the callback for each element
         * @param {Function} callback Called for each element
         * @param {Object} [ctx=null] Callback context
         */
        forEach : function(callback, ctx) {

            var i = -1, t = this, len = t.length;
            while(++i < len) i in t &&
                (ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t));

        },

        /**
         * Creates array B from array A so that B[i] = callback(A[i])
         * @param {Function} callback Called for each element
         * @param {Object} [ctx=null] Callback context
         * @returns {Array}
         */
        map : function(callback, ctx) {

            var i = -1, t = this, len = t.length,
                res = new Array(len);

            while(++i < len) i in t &&
                (res[i] = ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t));

            return res;

        },

        /**
         * Creates an array containing only the elements from the source array that the callback returns true for. 
         * @param {Function} callback Called for each element
         * @param {Object} [ctx] Callback context
         * @returns {Array}
         */
        filter : function(callback, ctx) {

            var i = -1, t = this, len = t.length,
                res = [];

            while(++i < len) i in t &&
                (ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)) && res.push(t[i]);

            return res;

        },

        /**
         * Wraps the array using an accumulator
         * @param {Function} callback Called for each element
         * @param {Object} [initialVal] Initial value of the accumulator
         * @returns {Object} Accumulator
         */
        reduce : function(callback, initialVal) {

            var i = -1, t = this, len = t.length,
                res;

            if(arguments.length < 2) {
                while(++i < len) {
                    if(i in t) {
                        res = t[i];
                        break;
                    }
                }
            }
            else {
                res = initialVal;
            }

            while(++i < len) i in t &&
                (res = callback(res, t[i], i, t));

            return res;

        },

        /**
         * Checks whether at least one element in the array meets the condition in the callback
         * @param {Function} callback
         * @param {Object} [ctx=this] Callback context
         * @returns {Boolean}
         */
        some : function(callback, ctx) {

            var i = -1, t = this, len = t.length;

            while(++i < len)
                if(i in t && (ctx ? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)))
                    return true;

            return false;

        },

        /**
         * Checks whether every element in the array meets the condition in the callback
         * @param {Function} callback
         * @param {Object} [ctx=this] Context of the callback call
         * @returns {Boolean}
         */
        every : function(callback, ctx) {

            var i = -1, t = this, len = t.length;

            while(++i < len)
                if(i in t && !(ctx ? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)))
                    return false;

            return true;

        }

    };

for(var name in methods)
    ptp[name] || (ptp[name] = methods[name]);

Array.isArray || (Array.isArray = function(obj) {
    return toStr.call(obj) === '[object Array]';
});

})();
/* ../../bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js end */
;
/* ../../bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js begin */
(function() {

var slice = Array.prototype.slice;

Function.prototype.bind || (Function.prototype.bind = function(ctx) {

    var fn = this,
        args = slice.call(arguments, 1);

    return function () {
        return fn.apply(ctx, args.concat(slice.call(arguments)));
    }

});

})();
/* ../../bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js end */
;
/* ../../bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js begin */
/** @fileOverview Module for internal BEM helpers */
/** @requires BEM */

(function(BEM, $, undefined) {

/**
 * Separator for modifiers and their values
 * @const
 * @type String
 */
var MOD_DELIM = '_',

/**
 * Separator between names of a block and a nested element
 * @const
 * @type String
 */
    ELEM_DELIM = '__',

/**
 * Pattern for acceptable element and modifier names
 * @const
 * @type String
 */
    NAME_PATTERN = '[a-zA-Z0-9-]+';

function buildModPostfix(modName, modVal, buffer) {

    buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);

}

function buildBlockClass(name, modName, modVal, buffer) {

    buffer.push(name);
    modVal && buildModPostfix(modName, modVal, buffer);

}

function buildElemClass(block, name, modName, modVal, buffer) {

    buildBlockClass(block, undefined, undefined, buffer);
    buffer.push(ELEM_DELIM, name);
    modVal && buildModPostfix(modName, modVal, buffer);

}

BEM.INTERNAL = {

    NAME_PATTERN : NAME_PATTERN,

    MOD_DELIM : MOD_DELIM,
    ELEM_DELIM : ELEM_DELIM,

    buildModPostfix : function(modName, modVal, buffer) {

        var res = buffer || [];
        buildModPostfix(modName, modVal, res);
        return buffer? res : res.join('');

    },

    /**
     * Builds the class of a block or element with a modifier
     * @private
     * @param {String} block Block name
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @param {Array} [buffer] Buffer
     * @returns {String|Array} Class or buffer string (depending on whether the buffer parameter is present)
     */
    buildClass : function(block, elem, modName, modVal, buffer) {

        var typeOf = typeof modName;
        if(typeOf == 'string') {
            if(typeof modVal != 'string') {
                buffer = modVal;
                modVal = modName;
                modName = elem;
                elem = undefined;
            }
        } else if(typeOf != 'undefined') {
            buffer = modName;
            modName = undefined;
        } else if(elem && typeof elem != 'string') {
            buffer = elem;
            elem = undefined;
        }

        if(!(elem || modName || buffer)) { // оптимизация для самого простого случая
            return block;
        }

        var res = buffer || [];

        elem?
            buildElemClass(block, elem, modName, modVal, res) :
            buildBlockClass(block, modName, modVal, res);

        return buffer? res : res.join('');

    },

    /**
     * Builds full classes for a buffer or element with modifiers
     * @private
     * @param {String} block Block name
     * @param {String} [elem] Element name
     * @param {Object} [mods] Modifiers
     * @param {Array} [buffer] Buffer
     * @returns {String|Array} Class or buffer string (depending on whether the buffer parameter is present)
     */
    buildClasses : function(block, elem, mods, buffer) {

        if(elem && typeof elem != 'string') {
            buffer = mods;
            mods = elem;
            elem = undefined;
        }

        var res = buffer || [];

        elem?
            buildElemClass(block, elem, undefined, undefined, res) :
            buildBlockClass(block, undefined, undefined, res);

        mods && $.each(mods, function(modName, modVal) {
            if(modVal) {
                res.push(' ');
                elem?
                    buildElemClass(block, elem, modName, modVal, res) :
                    buildBlockClass(block, modName, modVal, res);
            }
        });

        return buffer? res : res.join('');

        /*var typeOf = typeof elem;
        if(typeOf != 'string' && typeOf != 'undefined') {
            buffer = mods;
            mods = elem;
            elem = undefined;
        }
        if($.isArray(mods)) {
            buffer = mods;
            mods = undefined;
        }

        var res = buffer || [];
        buildClasses(block, elem, mods, res);
        return buffer? res : res.join('');*/

    }

}

})(BEM, jQuery);
/* ../../bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js end */
;
/* ../../bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js begin */
/** @requires BEM */
/** @requires BEM.INTERNAL */

(function(BEM, $, undefined) {

var win = $(window),
    doc = $(document),

/**
 * Storage for DOM elements by unique key
 * @private
 * @type Object
 */
    uniqIdToDomElems = {},

/**
 * Storage for blocks by unique key
 * @static
 * @private
 * @type Object
 */
    uniqIdToBlock = {},

/**
 * Storage for block parameters
 * @private
 * @type Object
 */
    domElemToParams = {},

/**
 * Storage for liveCtx event handlers
 * @private
 * @type Object
 */
    liveEventCtxStorage = {},

/**
 * Storage for liveClass event handlers
 * @private
 * @type Object
 */
    liveClassEventStorage = {},

    blocks = BEM.blocks,

    INTERNAL = BEM.INTERNAL,

    NAME_PATTERN = INTERNAL.NAME_PATTERN,

    MOD_DELIM = INTERNAL.MOD_DELIM,
    ELEM_DELIM = INTERNAL.ELEM_DELIM,

    buildModPostfix = INTERNAL.buildModPostfix,
    buildClass = INTERNAL.buildClass;

/**
 * Initializes blocks on a DOM element
 * @private
 * @param {jQuery} domElem DOM element
 * @param {String} uniqInitId ID of the "initialization wave"
 */
function init(domElem, uniqInitId) {

    var domNode = domElem[0];
    $.each(getParams(domNode), function(blockName, params) {
        processParams(params, domNode, blockName, uniqInitId);
        var block = uniqIdToBlock[params.uniqId];
        if(block) {
            if(block.domElem.index(domNode) < 0) {
                block.domElem = block.domElem.add(domElem);
                $.extend(block._params, params);
            }
        } else {
            initBlock(blockName, domElem, params);
        }
    });

}

/**
 * Initializes a specific block on a DOM element, or returns the existing block if it was already created
 * @private
 * @param {String} blockName Block name
 * @param {jQuery} domElem DOM element
 * @param {Object} [params] Initialization parameters
 * @param {Boolean} [forceLive] Force live initialization
 * @param {Function} [callback] Handler to call after complete initialization
 */
function initBlock(blockName, domElem, params, forceLive, callback) {

    if(typeof params == 'boolean') {
        callback = forceLive;
        forceLive = params;
        params = undefined;
    }

    var domNode = domElem[0];
    params = processParams(params || getParams(domNode)[blockName], domNode, blockName);

    var uniqId = params.uniqId;
    if(uniqIdToBlock[uniqId]) {
        return uniqIdToBlock[uniqId]._init();
    }

    uniqIdToDomElems[uniqId] = uniqIdToDomElems[uniqId]?
        uniqIdToDomElems[uniqId].add(domElem) :
        domElem;

    var parentDomNode = domNode.parentNode;
    if(!parentDomNode || parentDomNode.nodeType === 11) { // jquery doesn't unique disconnected node
        $.unique(uniqIdToDomElems[uniqId]);
    }

    var blockClass = blocks[blockName] || DOM.decl(blockName, {}, { live : true });
    if(!(blockClass._liveInitable = !!blockClass._processLive()) || forceLive || params.live === false) {
        var block = new blockClass(uniqIdToDomElems[uniqId], params, !!forceLive);
        delete uniqIdToDomElems[uniqId];
        callback && callback.apply(block, Array.prototype.slice.call(arguments, 4));
        return block;
    }

}

/**
 * Processes and adds necessary block parameters
 * @private
 * @param {Object} params Initialization parameters
 * @param {HTMLElement} domNode DOM node
 * @param {String} blockName Block name
 * @param {String} [uniqInitId] ID of the "initialization wave"
 */
function processParams(params, domNode, blockName, uniqInitId) {

    (params || (params = {})).uniqId ||
        (params.uniqId = (params.id? blockName + '-id-' + params.id : $.identify()) + (uniqInitId || $.identify()));

    var domUniqId = $.identify(domNode),
        domParams = domElemToParams[domUniqId] || (domElemToParams[domUniqId] = {});

    domParams[blockName] || (domParams[blockName] = params);

    return params;

}

/**
 * Helper for searching for a DOM element using a selector inside the context, including the context itself
 * @private
 * @param {jQuery} ctx Context
 * @param {String} selector CSS selector
 * @param {Boolean} [excludeSelf=false] Exclude context from search
 * @returns {jQuery}
 */
function findDomElem(ctx, selector, excludeSelf) {

    var res = ctx.find(selector);
    return excludeSelf?
       res :
       res.add(ctx.filter(selector));

}

/**
 * Returns parameters of a block's DOM element
 * @private
 * @param {HTMLElement} domNode DOM node
 * @returns {Object}
 */
function getParams(domNode) {

    var uniqId = $.identify(domNode);
    return domElemToParams[uniqId] ||
           (domElemToParams[uniqId] = extractParams(domNode));

}

/**
 * Retrieves block parameters from a DOM element
 * @private
 * @param {HTMLElement} domNode DOM node
 * @returns {Object}
 */
function extractParams(domNode) {

    var fn = domNode.onclick || domNode.ondblclick;
    if(!fn && domNode.tagName.toLowerCase() == 'body') { // LEGO-2027 in FF onclick doesn't work on body
        var elem = $(domNode),
            attr = elem.attr('onclick') || elem.attr('ondblclick');
        attr && (fn = Function(attr));
    }
    return fn? fn() : {};

}

/**
 * Cleans up all the BEM storages associated with a DOM node
 * @private
 * @param {HTMLElement} domNode DOM node
 */
function cleanupDomNode(domNode) {

    delete domElemToParams[$.identify(domNode)];

}

/**
 * Uncople DOM node from the block. If this is the last node, then destroys the block.
 * @private
 * @param {BEM.DOM} block block
 * @param {HTMLElement} domNode DOM node
 */
function removeDomNodeFromBlock(block, domNode) {

    block.domElem.length === 1?
        block.destruct(true) :
        block.domElem = block.domElem.not(domNode);

}

/**
 * Returns a DOM node for calculating the window size in IE
 * @returns {HTMLElement}
 */
function getClientNode() {

    return doc[0][$.support.boxModel? 'documentElement' : 'body'];

}

/**
 * Returns a block on a DOM element and initializes it if necessary
 * @param {String} blockName Block name
 * @param {Object} params Block parameters
 * @returns {BEM}
 */
$.fn.bem = function(blockName, params) {
    return initBlock(blockName, this, params, true);
};

/**
 * @namespace
 * @name BEM.DOM
 */
var DOM = BEM.DOM = BEM.decl('i-bem__dom',/** @lends BEM.DOM.prototype */{
    /**
     * @class Base block for creating BEM blocks that have DOM representation
     * @constructs
     * @private
     * @param {jQuery} domElem DOM element that the block is created on
     * @param {Object} params Block parameters
     * @param {Boolean} [initImmediately=true]
     */
    __constructor : function(domElem, params, initImmediately) {

        var _this = this;

        /**
         * Block's DOM elements
         * @protected
         * @type jQuery
         */
        _this.domElem = domElem;

        /**
         * Cache for names of events on DOM elements
         * @private
         * @type Object
         */
        _this._eventNameCache = {};

        /**
         * Cache for elements
         * @private
         * @type Object
         */
        _this._elemCache = {};

        /**
         * Unique block ID
         * @private
         * @type String
         */
        uniqIdToBlock[_this._uniqId = params.uniqId || $.identify(_this)] = _this;

        /**
         * Flag for whether it's necessary to unbind from the document and window when destroying the block
         * @private
         * @type Boolean
         */
        _this._needSpecialUnbind = false;

        _this.__base(null, params, initImmediately);

    },

    /**
     * Finds blocks inside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM[]}
     */
    findBlocksInside : function(elem, block) {

        return this._findBlocks('find', elem, block);

    },

    /**
     * Finds the first block inside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM}
     */
    findBlockInside : function(elem, block) {

        return this._findBlocks('find', elem, block, true);

    },

    /**
     * Finds blocks outside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM[]}
     */
    findBlocksOutside : function(elem, block) {

        return this._findBlocks('parents', elem, block);

    },

    /**
     * Finds the first block outside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM}
     */
    findBlockOutside : function(elem, block) {

        return this._findBlocks('closest', elem, block)[0] || null;

    },

    /**
     * Finds blocks on DOM elements of the current block or its elements
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM[]}
     */
    findBlocksOn : function(elem, block) {

        return this._findBlocks('', elem, block);

    },

    /**
     * Finds the first block on DOM elements of the current block or its elements
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM}
     */
    findBlockOn : function(elem, block) {

        return this._findBlocks('', elem, block, true);

    },

    _findBlocks : function(select, elem, block, onlyFirst) {

        if(!block) {
            block = elem;
            elem = undefined;
        }

        var ctxElem = elem?
                (typeof elem == 'string'? this.findElem(elem) : elem) :
                this.domElem,
            isSimpleBlock = typeof block == 'string',
            blockName = isSimpleBlock? block : (block.block || block.blockName),
            selector = '.' +
                (isSimpleBlock?
                    buildClass(blockName) :
                    buildClass(blockName, block.modName, block.modVal)) +
                (onlyFirst? ':first' : ''),
            domElems = ctxElem.filter(selector);

        select && (domElems = domElems.add(ctxElem[select](selector)));

        if(onlyFirst) {
            return domElems[0]? initBlock(blockName, domElems.eq(0), true) : null;
        }

        var res = [],
            uniqIds = {};

        $.each(domElems, function(i, domElem) {
            var block = initBlock(blockName, $(domElem), true);
            if(!uniqIds[block._uniqId]) {
                uniqIds[block._uniqId] = true;
                res.push(block);
            }
        });

        return res;

    },

    /**
     * Adds an event handler for any DOM element
     * @protected
     * @param {jQuery} domElem DOM element where the event will be listened for
     * @param {String|Object} event Event name or event object
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindToDomElem : function(domElem, event, fn) {

        var _this = this;

        fn?
            domElem.bind(
                _this._buildEventName(event),
                function(e) {
                    (e.data || (e.data = {})).domElem = $(this);
                    return fn.apply(_this, arguments);
                }
            ) :
            $.each(event, function(event, fn) {
                _this.bindToDomElem(domElem, event, fn);
            });

        return _this;

    },

    /**
     * Adds an event handler to the document
     * @protected
     * @param {String} event Event name
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindToDoc : function(event, fn) {

        this._needSpecialUnbind = true;
        return this.bindToDomElem(doc, event, fn);

    },

    /**
     * Adds an event handler to the window
     * @protected
     * @param {String} event Event name
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindToWin : function(event, fn) {

        this._needSpecialUnbind = true;
        return this.bindToDomElem(win, event, fn);

    },

    /**
     * Adds an event handler to the block's main DOM elements or its nested elements
     * @protected
     * @param {jQuery|String} [elem] Element
     * @param {String} event Event name
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindTo : function(elem, event, fn) {

        if(!event || $.isFunction(event)) { // if there is no element
            fn = event;
            event = elem;
            elem = this.domElem;
        } else if(typeof elem == 'string') {
            elem = this.elem(elem);
        }

        return this.bindToDomElem(elem, event, fn);

    },

    /**
     * Removes event handlers from any DOM element
     * @protected
     * @param {jQuery} domElem DOM element where the event was being listened for
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFromDomElem : function(domElem, event) {

        domElem.unbind(this._buildEventName(event));
        return this;

    },

    /**
     * Removes event handler from document
     * @protected
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFromDoc : function(event) {

        return this.unbindFromDomElem(doc, event);

    },

    /**
     * Removes event handler from window
     * @protected
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFromWin : function(event) {

        return this.unbindFromDomElem(win, event);

    },

    /**
     * Removes event handlers from the block's main DOM elements or its nested elements
     * @protected
     * @param {jQuery|String} [elem] Nested element
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFrom : function(elem, event) {

        if(!event) {
            event = elem;
            elem = this.domElem;
        } else if(typeof elem == 'string') {
            elem = this.elem(elem);
        }

        return this.unbindFromDomElem(elem, event);

    },

    /**
     * Builds a full name for an event
     * @private
     * @param {String} event Event name
     * @returns {String}
     */
    _buildEventName : function(event) {

        var _this = this;
        return event.indexOf(' ') > 1?
            event.split(' ').map(function(e) {
                return _this._buildOneEventName(e);
            }).join(' ') :
            _this._buildOneEventName(event);

    },

    /**
     * Builds a full name for a single event
     * @private
     * @param {String} event Event name
     * @returns {String}
     */
    _buildOneEventName : function(event) {

        var _this = this,
            eventNameCache = _this._eventNameCache;

        if(event in eventNameCache) return eventNameCache[event];

        var uniq = '.' + _this._uniqId;

        if(event.indexOf('.') < 0) return eventNameCache[event] = event + uniq;

        var lego = '.bem_' + _this.__self._name;

        return eventNameCache[event] = event.split('.').map(function(e, i) {
            return i == 0? e + lego : lego + '_' + e;
        }).join('') + uniq;

    },

    /**
     * Triggers block event handlers and live event handlers
     * @protected
     * @param {String} e Event name
     * @param {Object} [data] Additional information
     * @returns {BEM}
     */
    trigger : function(e, data) {

        this
            .__base(e = this.buildEvent(e), data)
            .domElem && this._ctxTrigger(e, data);

        return this;

    },

    _ctxTrigger : function(e, data) {

        var _this = this,
            storage = liveEventCtxStorage[_this.__self._buildCtxEventName(e.type)],
            ctxIds = {};

        storage && _this.domElem.each(function() {
            var ctx = this,
                counter = storage.counter;
            while(ctx && counter) {
                var ctxId = $.identify(ctx, true);
                if(ctxId) {
                    if(ctxIds[ctxId]) break;
                    var storageCtx = storage.ctxs[ctxId];
                    if(storageCtx) {
                        $.each(storageCtx, function(uniqId, handler) {
                            handler.fn.call(
                                handler.ctx || _this,
                                e,
                                data);
                        });
                        counter--;
                    }
                    ctxIds[ctxId] = true;
                }
                ctx = ctx.parentNode;
            }
        });

    },

    /**
     * Sets a modifier for a block/nested element
     * @protected
     * @param {jQuery} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @returns {BEM}
     */
    setMod : function(elem, modName, modVal) {

        if(elem && typeof modVal != 'undefined' && elem.length > 1) {
            var _this = this;
            elem.each(function() {
                var item = $(this);
                item.__bemElemName = elem.__bemElemName;
                _this.setMod(item, modName, modVal);
            });
            return _this;
        }
        return this.__base(elem, modName, modVal);

    },

    /**
     * Retrieves modifier value from the DOM node's CSS class
     * @private
     * @param {String} modName Modifier name
     * @param {jQuery} [elem] Nested element
     * @param {String} [elemName] Name of the nested element
     * @returns {String} Modifier value
     */
    _extractModVal : function(modName, elem, elemName) {

        var domNode = (elem || this.domElem)[0],
            matches;

        domNode &&
            (matches = domNode.className
                .match(this.__self._buildModValRE(modName, elemName || elem)));

        return matches? matches[2] : '';

    },

    /**
     * Retrieves a name/value list of modifiers
     * @private
     * @param {Array} [modNames] Names of modifiers
     * @param {Object} [elem] Element
     * @returns {Object} Hash of modifier values by names
     */
    _extractMods : function(modNames, elem) {

        var res = {},
            extractAll = !modNames.length,
            countMatched = 0;

        ((elem || this.domElem)[0].className
            .match(this.__self._buildModValRE(
                '(' + (extractAll? NAME_PATTERN : modNames.join('|')) + ')',
                elem,
                'g')) || []).forEach(function(className) {
                    var iModVal = (className = className.trim()).lastIndexOf(MOD_DELIM),
                        iModName = className.substr(0, iModVal - 1).lastIndexOf(MOD_DELIM);
                    res[className.substr(iModName + 1, iModVal - iModName - 1)] = className.substr(iModVal + 1);
                    ++countMatched;
                });

        // empty modifier values are not reflected in classes; they must be filled with empty values
        countMatched < modNames.length && modNames.forEach(function(modName) {
            modName in res || (res[modName] = '');
        });

        return res;

    },

    /**
     * Sets a modifier's CSS class for a block's DOM element or nested element
     * @private
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {String} oldModVal Old modifier value
     * @param {jQuery} [elem] Element
     * @param {String} [elemName] Element name
     */
    _afterSetMod : function(modName, modVal, oldModVal, elem, elemName) {

        var _self = this.__self,
            classPrefix = _self._buildModClassPrefix(modName, elemName),
            classRE = _self._buildModValRE(modName, elemName),
            needDel = modVal === '';

        (elem || this.domElem).each(function() {
            var className = this.className;
            className.indexOf(classPrefix) > -1?
                this.className = className.replace(
                    classRE,
                    (needDel? '' : '$1' + classPrefix + modVal) + '$3') :
                needDel || $(this).addClass(classPrefix + modVal);
        });

        elemName && this
            .dropElemCache(elemName, modName, oldModVal)
            .dropElemCache(elemName, modName, modVal);

    },

    /**
     * Finds elements nested in a block
     * @protected
     * @param {String|jQuery} [ctx=this.domElem] Element where search is being performed
     * @param {String} names Nested element name (or names separated by spaces)
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {jQuery} DOM elements
     */
    findElem : function(ctx, names, modName, modVal) {

        if(arguments.length % 2) { // if the number of arguments is one or three
            modVal = modName;
            modName = names;
            names = ctx;
            ctx = this.domElem;
        } else if(typeof ctx == 'string') {
            ctx = this.findElem(ctx);
        }

        var _self = this.__self,
            selector = '.' +
                names.split(' ').map(function(name) {
                    return buildClass(_self._name, name, modName, modVal);
                }).join(',.');
        return findDomElem(ctx, selector);

    },

    /**
     * Finds elements nested in a block
     * @protected
     * @param {String} name Nested element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {jQuery} DOM elements
     */
    _elem : function(name, modName, modVal) {

        var key = name + buildModPostfix(modName, modVal),
            res;

        if(!(res = this._elemCache[key])) {
            res = this._elemCache[key] = this.findElem(name, modName, modVal);
            res.__bemElemName = name;
        }

        return res;

    },

    /**
     * Lazy search for elements nested in a block (caches results)
     * @protected
     * @param {String} names Nested element name (or names separated by spaces)
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {jQuery} DOM elements
     */
    elem : function(names, modName, modVal) {

        if(modName && typeof modName != 'string') {
            modName.__bemElemName = names;
            return modName;
        }

        if(names.indexOf(' ') < 0) {
            return this._elem(names, modName, modVal);
        }

        var res = $([]),
            _this = this;
        names.split(' ').forEach(function(name) {
            res = res.add(_this._elem(name, modName, modVal));
        });
        return res;

    },

    /**
     * Clearing the cache for elements
     * @protected
     * @param {String} names Nested element name (or names separated by spaces)
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {BEM}
     */
    dropElemCache : function(names, modName, modVal) {

        if(names) {
            var _this = this,
                modPostfix = buildModPostfix(modName, modVal);
            names.indexOf(' ') < 0?
                delete _this._elemCache[names + modPostfix] :
                names.split(' ').forEach(function(name) {
                    delete _this._elemCache[name + modPostfix];
                });
        } else {
            this._elemCache = {};
        }

        return this;

    },

    /**
     * Retrieves parameters of a block element
     * @param {String|jQuery} elem Element
     * @returns {Object} Parameters
     */
    elemParams : function(elem) {

        var elemName;
        if(typeof elem ==  'string') {
            elemName = elem;
            elem = this.elem(elem);
        } else {
            elemName = this.__self._extractElemNameFrom(elem);
        }

        return extractParams(elem[0])[buildClass(this.__self.getName(), elemName)] || {};

    },

    /**
     * Checks whether a DOM element is in a block
     * @protected
     * @param {jQuery} domElem DOM element
     * @returns {Boolean}
     */
    containsDomElem : function(domElem) {

        var res = false;

        this.domElem.each(function() {
            return !(res = domElem.parents().andSelf().index(this) > -1);
        });

        return res;

    },

    /**
     * Builds a CSS selector corresponding to a block/element and modifier
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {String}
     */
    buildSelector : function(elem, modName, modVal) {

        return this.__self.buildSelector(elem, modName, modVal);

    },

    /**
     * Deletes a block
     * @param {Boolean} [keepDOM=false] Whether to keep the block's DOM nodes in the document
     */
    destruct : function(keepDOM) {

        var _this = this,
            _self = _this.__self;

        _this._isDestructing = true;

        _this._needSpecialUnbind && _self.doc.add(_self.win).unbind('.' + _this._uniqId);

        _this.dropElemCache().domElem.each(function(i, domNode) {
            var params = getParams(domNode);
            $.each(params, function(blockName, blockParams) {
                var block = uniqIdToBlock[blockParams.uniqId];
                if(block) {
                    if(!block._isDestructing) {
                        removeDomNodeFromBlock(block, domNode);
                        delete params[blockName];
                    }
                }
                else {
                    delete uniqIdToDomElems[blockParams.uniqId];
                }
            });
            $.isEmptyObject(params) && cleanupDomNode(domNode);
        });

        keepDOM || _this.domElem.remove();

        delete uniqIdToBlock[_this.un()._uniqId];
        delete _this.domElem;
        delete _this._elemCache;

        _this.__base();

    }

}, /** @lends BEM.DOM */{

    /**
     * Document shortcut
     * @protected
     * @type jQuery
     */
    doc : doc,

    /**
     * Window shortcut
     * @protected
     * @type jQuery
     */
    win : win,

    /**
     * Processes a block's live properties
     * @private
     * @param {Boolean} [heedLive=false] Whether to take into account that the block already processed its live properties
     * @returns {Boolean} Whether the block is a live block
     */
    _processLive : function(heedLive) {

        var _this = this,
            res = _this._liveInitable;

        if('live' in _this) {
            var noLive = typeof res == 'undefined';

            if(noLive ^ heedLive) {
                res = _this.live() !== false;
                _this.live = function() {};
            }
        }

        return res;

    },

    /**
     * Initializes blocks on a fragment of the DOM tree
     * @static
     * @protected
     * @param {jQuery} [ctx=document] Root DOM node
     * @returns {jQuery} ctx Initialization context
     */
    init : function(ctx, callback, callbackCtx) {

        if(!ctx || $.isFunction(ctx)) {
            callbackCtx = callback;
            callback = ctx;
            ctx = doc;
        }

        var uniqInitId = $.identify();
        findDomElem(ctx, '.i-bem').each(function() {
            init($(this), uniqInitId);
        });

        callback && this.afterCurrentEvent(
            function() {
                callback.call(callbackCtx || this, ctx);
            });

        // makes initialization completely synchronous
        this._runAfterCurrentEventFns();

        return ctx;

    },

    /**
     * Destroys blocks on a fragment of the DOM tree
     * @static
     * @protected
     * @param {Boolean} [keepDOM=false] Whether to keep DOM nodes in the document
     * @param {jQuery} ctx Root DOM node
     * @param {Boolean} [excludeSelf=false] Exclude the context
     */
    destruct : function(keepDOM, ctx, excludeSelf) {

        if(typeof keepDOM != 'boolean') {
            excludeSelf = ctx;
            ctx = keepDOM;
            keepDOM = undefined;
        }

        findDomElem(ctx, '.i-bem', excludeSelf).each(function(i, domNode) {
            var params = getParams(this);
            $.each(params, function(blockName, blockParams) {
                if(blockParams.uniqId) {
                    var block = uniqIdToBlock[blockParams.uniqId];
                    if(block) {
                        removeDomNodeFromBlock(block, domNode);
                        delete params[blockName];
                    }
                    else {
                        delete uniqIdToDomElems[blockParams.uniqId];
                    }
                }
            });
            $.isEmptyObject(params) && cleanupDomNode(this);
        });
        keepDOM || (excludeSelf? ctx.empty() : ctx.remove());

    },

    /**
     * Replaces a fragment of the DOM tree inside the context, destroying old blocks and intializing new ones
     * @static
     * @protected
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content New content
     * @param {Function} [callback] Handler to be called after initialization
     * @param {Object} [callbackCtx] Handler's context
     */
    update : function(ctx, content, callback, callbackCtx) {

        this.destruct(ctx, true);
        this.init(ctx.html(content), callback, callbackCtx);

    },

    /**
     * Changes a fragment of the DOM tree including the context and initializes blocks.
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content Content to be added
     */
    replace : function(ctx, content) {

        this.destruct(true, ctx);
        this.init($(content).replaceAll(ctx));

    },

    /**
     * Adds a fragment of the DOM tree at the end of the context and initializes blocks
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content Content to be added
     */
    append : function(ctx, content) {

        this.init($(content).appendTo(ctx));

    },

    /**
     * Adds a fragment of the DOM tree at the beginning of the context and initializes blocks
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content Content to be added
     */
    prepend : function(ctx, content) {

        this.init($(content).prependTo(ctx));

    },

    /**
     * Adds a fragment of the DOM tree before the context and initializes blocks
     * @param {jQuery} ctx Contextual DOM node
     * @param {jQuery|String} content Content to be added
     */
    before : function(ctx, content) {

        this.init($(content).insertBefore(ctx));

    },

    /**
     * Adds a fragment of the DOM tree after the context and initializes blocks
     * @param {jQuery} ctx Contextual DOM node
     * @param {jQuery|String} content Content to be added
     */
    after : function(ctx, content) {

        this.init($(content).insertAfter(ctx));

    },

    /**
     * Builds a full name for a live event
     * @static
     * @private
     * @param {String} e Event name
     * @returns {String}
     */
    _buildCtxEventName : function(e) {

        return this._name + ':' + e;

    },

    _liveClassBind : function(className, e, callback, invokeOnInit) {

        var _this = this;
        if(e.indexOf(' ') > -1) {
            e.split(' ').forEach(function(e) {
                _this._liveClassBind(className, e, callback, invokeOnInit);
            });
        }
        else {
            var storage = liveClassEventStorage[e],
                uniqId = $.identify(callback);

            if(!storage) {
                storage = liveClassEventStorage[e] = {};
                doc.bind(e, _this.changeThis(_this._liveClassTrigger, _this));
            }

            storage = storage[className] || (storage[className] = { uniqIds : {}, fns : [] });

            if(!(uniqId in storage.uniqIds)) {
                storage.fns.push({ uniqId : uniqId, fn : _this._buildLiveEventFn(callback, invokeOnInit) });
                storage.uniqIds[uniqId] = storage.fns.length - 1;
            }
        }

        return this;

    },

    _liveClassUnbind : function(className, e, callback) {

        var storage = liveClassEventStorage[e];
        if(storage) {
            if(callback) {
                if(storage = storage[className]) {
                    var uniqId = $.identify(callback);
                    if(uniqId in storage.uniqIds) {
                        var i = storage.uniqIds[uniqId],
                            len = storage.fns.length - 1;
                        storage.fns.splice(i, 1);
                        while(i < len) storage.uniqIds[storage.fns[i++].uniqId] = i - 1;
                        delete storage.uniqIds[uniqId];
                    }
                }
            } else {
                delete storage[className];
            }
        }

        return this;

    },

    _liveClassTrigger : function(e) {

        var storage = liveClassEventStorage[e.type];
        if(storage) {
            var node = e.target, classNames = [];
            for(var className in storage) storage.hasOwnProperty(className) && classNames.push(className);
            do {
                var nodeClassName = ' ' + node.className + ' ', i = 0;
                while(className = classNames[i++]) {
                    if(nodeClassName.indexOf(' ' + className + ' ') > -1) {
                        var j = 0, fns = storage[className].fns, fn, stopPropagationAndPreventDefault = false;
                        while(fn = fns[j++])
                            if(fn.fn.call($(node), e) === false) stopPropagationAndPreventDefault = true;

                        stopPropagationAndPreventDefault && e.preventDefault();
                        if(stopPropagationAndPreventDefault || e.isPropagationStopped()) return;

                        classNames.splice(--i, 1);
                    }
                }
            } while(classNames.length && (node = node.parentNode));
        }

    },

    _buildLiveEventFn : function(callback, invokeOnInit) {

        var _this = this;
        return function(e) {
            var args = [
                    _this._name,
                    ((e.data || (e.data = {})).domElem = $(this)).closest(_this.buildSelector()),
                    true ],
                block = initBlock.apply(null, invokeOnInit? args.concat([callback, e]) : args);

            if(block && !invokeOnInit && callback)
                return callback.apply(block, arguments);
        };

    },

    /**
     * Helper for live initialization for an event on DOM elements of a block or its elements
     * @static
     * @protected
     * @param {String} [elemName] Element name or names (separated by spaces)
     * @param {String} event Event name
     * @param {Function} [callback] Handler to call after successful initialization
     */
    liveInitOnEvent : function(elemName, event, callback) {

        return this.liveBindTo(elemName, event, callback, true);

    },

    /**
     * Helper for subscribing to live events on DOM elements of a block or its elements
     * @static
     * @protected
     * @param {String|Object} [to] Description (object with modName, modVal, elem) or name of the element or elements (space-separated)
     * @param {String} event Event name
     * @param {Function} [callback] Handler
     */
    liveBindTo : function(to, event, callback, invokeOnInit) {

        if(!event || $.isFunction(event)) {
            callback = event;
            event = to;
            to = undefined;
        }

        if(!to || typeof to == 'string') {
            to = { elem : to };
        }

        to.elemName && (to.elem = to.elemName);

        var _this = this;

        if(to.elem && to.elem.indexOf(' ') > 0) {
            to.elem.split(' ').forEach(function(elem) {
                _this._liveClassBind(
                    buildClass(_this._name, elem, to.modName, to.modVal),
                    event,
                    callback,
                    invokeOnInit);
            });
            return _this;
        }

        return _this._liveClassBind(
            buildClass(_this._name, to.elem, to.modName, to.modVal),
            event,
            callback,
            invokeOnInit);

    },

    /**
     * Helper for unsubscribing from live events on DOM elements of a block or its elements
     * @static
     * @protected
     * @param {String} [elem] Name of the element or elements (space-separated)
     * @param {String} event Event name
     * @param {Function} [callback] Handler
     */
    liveUnbindFrom : function(elem, event, callback) {

        var _this = this;

        if(elem.indexOf(' ') > 1) {
            elem.split(' ').forEach(function(elem) {
                _this._liveClassUnbind(
                    buildClass(_this._name, elem),
                    event,
                    callback);
            });
            return _this;
        }

        return _this._liveClassUnbind(
            buildClass(_this._name, elem),
            event,
            callback);

    },

    /**
     * Helper for live initialization when a different block is initialized
     * @static
     * @private
     * @param {String} event Event name
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} callback Handler to be called after successful initialization in the new block's context
     * @param {String} findFnName Name of the method for searching
     */
    _liveInitOnBlockEvent : function(event, blockName, callback, findFnName) {

        var name = this._name;
        blocks[blockName].on(event, function(e) {
            var args = arguments,
                blocks = e.block[findFnName](name);

            callback && blocks.forEach(function(block) {
                callback.apply(block, args);
            });
        });
        return this;

    },

    /**
     * Helper for live initialization for a different block's event on the current block's DOM element
     * @static
     * @protected
     * @param {String} event Event name
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} callback Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockEvent : function(event, blockName, callback) {

        return this._liveInitOnBlockEvent(event, blockName, callback, 'findBlocksOn');

    },

    /**
     * Helper for live initialization for a different block's event inside the current block
     * @static
     * @protected
     * @param {String} event Event name
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} [callback] Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockInsideEvent : function(event, blockName, callback) {

        return this._liveInitOnBlockEvent(event, blockName, callback, 'findBlocksOutside');

    },

    /**
     * Helper for live initialization when a different block is initialized on a DOM element of the current block
     * @deprecated - use liveInitOnBlockEvent
     * @static
     * @protected
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} callback Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockInit : function(blockName, callback) {

        return this.liveInitOnBlockEvent('init', blockName, callback);

    },

    /**
     * Helper for live initialization when a different block is initialized inside the current block
     * @deprecated - use liveInitOnBlockInsideEvent
     * @static
     * @protected
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} [callback] Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockInsideInit : function(blockName, callback) {

        return this.liveInitOnBlockInsideEvent('init', blockName, callback);

    },

    /**
     * Adds a live event handler to a block, based on a specified element where the event will be listened for
     * @static
     * @protected
     * @param {jQuery} [ctx] The element in which the event will be listened for
     * @param {String} e Event name
     * @param {Object} [data] Additional information that the handler gets as e.data
     * @param {Function} fn Handler
     * @param {Object} [fnCtx] Handler's context
     */
    on : function(ctx, e, data, fn, fnCtx) {

        return ctx.jquery?
            this._liveCtxBind(ctx, e, data, fn, fnCtx) :
            this.__base(ctx, e, data, fn);

    },

    /**
     * Removes the live event handler from a block, based on a specified element where the event was being listened for
     * @static
     * @protected
     * @param {jQuery} [ctx] The element in which the event was being listened for
     * @param {String} e Event name
     * @param {Function} [fn] Handler
     * @param {Object} [fnCtx] Handler context
     */
    un : function(ctx, e, fn, fnCtx) {

        return ctx.jquery?
            this._liveCtxUnbind(ctx, e, fn, fnCtx) :
            this.__base(ctx, e, fn);

    },

    /**
     * Adds a live event handler to a block, based on a specified element where the event will be listened for
     * @deprecated Use on
     * @static
     * @protected
     * @param {jQuery} ctx The element in which the event will be listened for
     * @param {String} e Event name
     * @param {Object} [data] Additional information that the handler gets as e.data
     * @param {Function} fn Handler
     * @param {Object} [fnCtx] Handler context
     */
    liveCtxBind : function(ctx, e, data, fn, fnCtx) {

        return this._liveCtxBind(ctx, e, data, fn, fnCtx);

    },

    /**
     * Adds a live event handler to a block, based on a specified element where the event will be listened for
     * @static
     * @private
     * @param {jQuery} ctx The element in which the event will be listened for
     * @param {String} e  Event name
     * @param {Object} [data] Additional information that the handler gets as e.data
     * @param {Function} fn Handler
     * @param {Object} [fnCtx] Handler context
     */
    _liveCtxBind : function(ctx, e, data, fn, fnCtx) {

        var _this = this;

        if(typeof e == 'string') {
            if($.isFunction(data)) {
                fnCtx = fn;
                fn = data;
                data = undefined;
            }

            if(e.indexOf(' ') > -1) {
                e.split(' ').forEach(function(e) {
                    _this._liveCtxBind(ctx, e, data, fn, fnCtx);
                });
            } else {
                var ctxE = _this._buildCtxEventName(e),
                    storage = liveEventCtxStorage[ctxE] ||
                        (liveEventCtxStorage[ctxE] = { counter : 0, ctxs : {} });

                ctx.each(function() {
                    var ctxId = $.identify(this),
                        ctxStorage = storage.ctxs[ctxId];
                    if(!ctxStorage) {
                        ctxStorage = storage.ctxs[ctxId] = {};
                        ++storage.counter;
                    }
                    ctxStorage[$.identify(fn) + (fnCtx? $.identify(fnCtx) : '')] = {
                        fn   : fn,
                        data : data,
                        ctx  : fnCtx
                    };
                });
            }
        } else {
            $.each(e, function(e, fn) {
                _this._liveCtxBind(ctx, e, fn, data);
            });
        }

        return _this;

    },

    /**
     * Removes a live event handler from a block, based on a specified element where the event was being listened for
     * @deprecated Use on
     * @static
     * @protected
     * @param {jQuery} ctx The element in which the event was being listened for
     * @param {String} e Event name
     * @param {Function} [fn] Handler
     * @param {Object} [fnCtx] Handler context
     */
    liveCtxUnbind : function(ctx, e, fn, fnCtx) {

        return this._liveCtxUnbind(ctx, e, fn, fnCtx);

    },

    /**
     * Removes a live event handler from a block, based on a specified element where the event was being listened for
     * @static
     * @private
     * @param {jQuery} ctx The element in which the event was being listened for
     * @param {String} e Event name
     * @param {Function} [fn] Handler
     * @param {Object} [fnCtx] Handler context
     */
    _liveCtxUnbind : function(ctx, e, fn, fnCtx) {

        var _this = this,
            storage = liveEventCtxStorage[e =_this._buildCtxEventName(e)];

        if(storage) {
            ctx.each(function() {
                var ctxId = $.identify(this, true),
                    ctxStorage;
                if(ctxId && (ctxStorage = storage.ctxs[ctxId])) {
                    fn && delete ctxStorage[$.identify(fn) + (fnCtx? $.identify(fnCtx) : '')];
                    if(!fn || $.isEmptyObject(ctxStorage)) {
                        storage.counter--;
                        delete storage.ctxs[ctxId];
                    }
                }
            });
            storage.counter || delete liveEventCtxStorage[e];
        }

        return _this;

    },

    /**
     * Retrieves the name of an element nested in a block
     * @static
     * @private
     * @param {jQuery} elem Nested element
     * @returns {String|undefined}
     */
    _extractElemNameFrom : function(elem) {

        if(elem.__bemElemName) return elem.__bemElemName;

        var matches = elem[0].className.match(this._buildElemNameRE());
        return matches? matches[1] : undefined;

    },

    /**
     * Retrieves block parameters from a DOM element
     * @static
     * @param {HTMLElement} domNode DOM node
     * @returns {Object}
     */
    extractParams : extractParams,

    /**
     * Builds a prefix for the CSS class of a DOM element or nested element of the block, based on modifier name
     * @static
     * @private
     * @param {String} modName Modifier name
     * @param {jQuery|String} [elem] Element
     * @returns {String}
     */
    _buildModClassPrefix : function(modName, elem) {

        return buildClass(this._name) +
               (elem?
                   ELEM_DELIM + (typeof elem === 'string'? elem : this._extractElemNameFrom(elem)) :
                   '') +
               MOD_DELIM + modName + MOD_DELIM;

    },

    /**
     * Builds a regular expression for extracting modifier values from a DOM element or nested element of a block
     * @static
     * @private
     * @param {String} modName Modifier name
     * @param {jQuery|String} [elem] Element
     * @param {String} [quantifiers] Regular expression quantifiers
     * @returns {RegExp}
     */
    _buildModValRE : function(modName, elem, quantifiers) {

        return new RegExp('(\\s?)' + this._buildModClassPrefix(modName, elem) + '(' + NAME_PATTERN + ')(\\s|$)', quantifiers);

    },

    /**
     * Builds a regular expression for extracting names of elements nested in a block
     * @static
     * @private
     * @returns {RegExp}
     */
    _buildElemNameRE : function() {

        return new RegExp(this._name + ELEM_DELIM + '(' + NAME_PATTERN + ')(?:\\s|$)');

    },

    /**
     * Builds a CSS selector corresponding to the block/element and modifier
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {String}
     */
    buildSelector : function(elem, modName, modVal) {

        return '.' + buildClass(this._name, elem, modName, modVal);

    },

    /**
     * Returns a block instance by unique ID
     * @deprecated
     * @param {String} [uniqId]
     * @returns {BEM.DOM}
     */
    getBlockByUniqId : function(uniqId) {

        return uniqIdToBlock[uniqId];

    },

    /**
     * Returns the size of the current window
     * @returns {Object} Object with width and height fields
     */
    getWindowSize : function() {

        return {
            width  : win.width(),
            height : win.height()
        };

    }

});

})(BEM, jQuery);

/* ../../bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js end */
;
/* ../../bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js begin */
(function() {

String.prototype.trim || (String.prototype.trim = function () {

    var str = this.replace(/^\s\s*/, ''),
        ws = /\s/,
        i = str.length;

    while(ws.test(str.charAt(--i)));

    return str.slice(0, i + 1);

});

})();
/* ../../bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js end */
;
/* ../../bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js begin */
/* дефолтная инициализация */
$(function() {
    BEM.DOM.init();
});
/* ../../bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js end */
;
/* ../../desktop.blocks/cart-info/cart-info.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('cart-info', {

    onSetMod : {

        'js' : function() {
            var _this = this;
            this.totalPriceValue = _this.findBlockInside(_this.elem('total-price'), 'price').elem('value');

            // event by order-list $(window).trigger('cart:update', { totalPrice: totalPrice, totalProducts: totalProducts });

            $(window).bind('cart:update', function(event, data) {
                _this.elem('total-products').html(data.totalProducts);
                _this.totalPriceValue.html(data.totalPrice);
            });
        }

    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();

/* ../../desktop.blocks/cart-info/cart-info.js end */
;
/* ../../studioIDEI.blocks/price/price.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('price', {

    onSetMod : {

        'js' : function() {

            var thinSpace = '&thinsp;';
            var every3DigitRE = /(\d)(?=(\d{3})+(?!\d))/g;
            var formattedValue =  this.elem('value').html() && this.elem('value').html().replace(every3DigitRE, '$1' + thinSpace);

            this.elem('value').html(formattedValue);
        }

    }

}, {

/*    live : function() {

    }
*/

});

})();

/* ../../studioIDEI.blocks/price/price.js end */
;
/* ../../bem-bl/blocks-common/i-jquery/__leftclick/i-jquery__leftclick.js begin */
/**
 * leftClick event plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.0.0
 */

(function($) {

var leftClick = $.event.special.leftclick = {

    setup : function() {

        $(this).bind('click', leftClick.handler);

    },

    teardown : function() {

        $(this).unbind('click', leftClick.handler);

    },

    handler : function(e) {

        if(!e.button) {
            e.type = 'leftclick';
            $.event.handle.apply(this, arguments);
            e.type = 'click';
        }

    }

};

})(jQuery);
/* ../../bem-bl/blocks-common/i-jquery/__leftclick/i-jquery__leftclick.js end */
;
/* ../../bem-bl/blocks-desktop/b-link/_pseudo/b-link_pseudo_yes.js begin */
BEM.DOM.decl({'name': 'b-link', 'modName': 'pseudo', 'modVal': 'yes'}, {

    _onClick : function(e) {

        e.preventDefault();

        this.hasMod('disabled', 'yes') || this.afterCurrentEvent(function() {
            this.trigger('click');
        });

    }

}, {

    live : function() {

        this.__base.apply(this, arguments);

        this.liveBindTo({ modName : 'pseudo', modVal : 'yes' }, 'leftclick', function(e) {
            this._onClick(e);
        });

    }

});

/* ../../bem-bl/blocks-desktop/b-link/_pseudo/b-link_pseudo_yes.js end */
;
/* ../../desktop.blocks/content-loader/content-loader.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('content-loader', {

        onSetMod: {

            'js': function () {
                /* ... */
            },

            'state': {

                'processing': function () {
                    this.showLoader();
                },

                'done': function () {
                    this.hideLoader();
                }
            }

        },

        
        /*  */

        showLoader: function () {
            this.domElem.show();
            var initAngle = 0; // deg
            var step = 2; // deg, clockwise
            this.rotateLoader(initAngle, step);
        },


        hideLoader: function () {
            this.domElem.hide();
            this.showLoader.timeout && clearTimeout(this.showLoader.timeout);

            // clear style
            this.elem('icon').css({
                '-webkit-transform': '',
                '-moz-transform': '',
                '-ms-transform': '',
                '-o-transform': '',
                'transform': ''
            });
        },



        /**
         * Loop rotation 'loader' elem
         * @param angle
         * @param step
         */
        rotateLoader: function (angle, step) {
            var _this = this;

            this.showLoader.timeout = setTimeout(function () {
                // set css style
                _this.elem('icon').css({
                    '-webkit-transform': 'rotateZ(' + angle + 'deg)',
                    '-moz-transform': 'rotateZ(' + angle + 'deg)',
                    '-ms-transform': 'rotateZ(' + angle + 'deg)',
                    '-o-transform': 'rotateZ(' + angle + 'deg)',
                    'transform': 'rotateZ(' + angle + 'deg)'
                }).promise()// after css applied
                    .done(function () {
                        // fire next step css style setter
                        _this.rotateLoader(angle + step, step);
                    });
            }, 0);
        }

    }, {

/*        live: function () {
            *//* init by invoker *//*
        }*/

    });

})();

/* ../../desktop.blocks/content-loader/content-loader.js end */
;
/* ../../studioIDEI.blocks/lightbox/lightbox.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {
    
var _this;

    BEM.DOM.decl('lightbox', {

        onSetMod: {

            'js': function () {

                _this = this;

                this.loader = this.findBlockInside('content-loader');

                this.showState = 'never';

                this.elem('close').on('click', function () {
                    _this.hide();
                });

                this.elem('mask').on('click', function () {
                    _this.hide();
                });

                this.elem('control').on('click', function(e){
                    if (_this.getMod($(e.currentTarget), 'disable') === 'yes') return;


                    var direction = _this.getMod($(e.currentTarget), 'direction');

                    _this.switchItem(direction)
                });

                this.elem('img').load(function () {
                    _this.imgOnLoad();
                });
            }

        },



        switchItem: function (direction) {

            if (direction == 'prev') {
                if (this.isFirst()) return;

                this.currentIndex = this.currentIndex - 1;

            } else if (direction == 'next') {
                if (this.isLast()) return;

                this.currentIndex = this.currentIndex + 1;

            } else if (direction == 'init') {
                // init align
                this.adjustPosition();

                this.currentIndex = this.getCurrentIndex();
            }

            this.setCurrentIndex(this.currentIndex);

            this.show();
        },


        show: function () {

            this.setMod(this.elem('mask'), 'visibility', 'visible');

            if (this.showState === 'never') {
                this.elem('close').hide();
                this.setMod(this.elem('control'), 'disable', 'yes');
                this.adjustPosition();
            }

            this.setMod('visibility', 'visible');

            this.showLoader();

            this.elem('img').attr('src', this.data[this.currentIndex].url); // have load handler, see onSetMod js
        },


        hide: function () {

            // enable window scroll
            $('body').css({ height: '', overflow: '' });

            this.setMod( 'visibility', 'hidden');
            this.setMod(this.elem('mask'), 'visibility', 'hidden');
            this.elem('img').attr('src', ''); // clear image

            this.showState = 'never';

            // in case...
            this.hideLoader();
        },


        isFirst: function () {
            return this.currentIndex === 0;
        },


        isLast: function () {
            return this.currentIndex === (this.data.length - 1);
        },


        /**
         *
         * @returns {number}
         */
        getCurrentIndex: function () {
            if (this.data.length === 1) return 0; // single item is this.data[0]

            for (var i = 0, length = this.data.length; i < length; i++) {
                if (this.data[i].current) return i;
            }
        },


        setCurrentIndex: function (index) {
            for (var i = 0, length = this.data.length; i < length; i++) {
                this.data[i].current = (i === index);
            }
        },


        adjustPosition: function () {
            var minTop = 100;
            var lightboxTop = $(window).scrollTop() + minTop;

            var imgWidth = this.elem('img').width();
            var imgHeight = this.elem('img').height();


            // layout positioning

            // 1) Y-position
            this.showState === 'never' && this.elem('box').css({ 'top': lightboxTop });

            // 2) X-position
            if (imgWidth > 0 && imgHeight > 0) {
                this.elem('box').css({ width: imgWidth, height: imgHeight });
            }

            // mask
            this.elem('mask').css({ height: $(document).height() });
        },


        showDirectionControls: function (action) {

            if (this.isFirst()) {
                this.setMod(this.elem('control', 'direction', 'prev'), 'disable', 'yes');

            } else {
                this.delMod(this.elem('control', 'direction', 'prev'), 'disable');
            }

            if (this.isLast()) {
                this.setMod(this.elem('control', 'direction', 'next'), 'disable', 'yes');

            } else {
                this.delMod(this.elem('control', 'direction', 'next'), 'disable');
            }

        },


        imgOnLoad: function () {
            this.showDirectionControls();
            this.adjustPosition();
            this.elem('close').show();
            this.hideLoader();
            this.showState = 'has';
        },


        showLoader: function () {
            this.loader.setMod('state', 'processing');
        },


        hideLoader: function () {
            _this.loader.setMod('state', 'done');
        },

        

        /**
         * Styling img element
         * @param {Object} style. If not exist, then clear style
         */
        setStyle: function (style) {

            if (style) {
                this.elem('img').css(style);

            } else {
                this.elem('img').removeAttr('style');
            }
        }

    }, {

        /**
         *
         * @param {Array|Object} data, must have url and state (current)
         * @param {Object} settings
         */
        showData: function (data, settings) {

            (jQuery.type(data) === 'object') && (data = [data]);

            // don't modify originally data
            _this.data = jQuery.extend(true, [], data);

            settings = settings || {};

            _this.setStyle(settings.style);
            _this.switchItem('init');
        }

    });

})();

/* ../../studioIDEI.blocks/lightbox/lightbox.js end */
;
/* ../../desktop.blocks/info-page/info-page.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('info-page', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/info-page/info-page.js end */
;
/* ../../studioIDEI.blocks/i-jquery/__patternizer/i-jquery__patternizer.js begin */
/*
* Attempting to emulate WebKit-specific property "-webkit-background-clip: text".
* https://github.com/myadzel/patternizer
* http://www.myadzel.ru/tests/html/text-background/
*
* */


(function ($) {
	var
		opera = window.opera && window.opera.toString() == "[object Opera]",
		fontsizeMeasurerId = "fontsize-measurer__" + (+new Date()),
		blockStyle = "position:relative;display:inline;width:auto;",
		blockSpanStyle = "color:transparent;position:relative;z-index:2;cursor:inherit;white-space:nowrap;vertical-align:baseline;",
		textBlocks = [],
		fontsizeMeasurer,
		fontsizeMeasurerValue = 0,
		svgDefsCache = {},
		blocksCountTotal = 0,
		blocksCountUpdated = 0,
		elements,
		svgPatternPrefix = "pattern__",
		NS = {
			xhtml: "http://www.w3.org/1999/xhtml",
			svg: "http://www.w3.org/2000/svg",
			xlink: "http://www.w3.org/1999/xlink"
		};

	function isSVGNativeSupported() {
		return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
	}

	function checkImageLoaded(img, block) {
		(function recheck() {
			if (img && img.complete && img.width > 0 && img.height > 0) {
				block.img = img;

				blocksCountUpdated++;

				updateBlock(block);

				//blocks final redrawing (bug in WebKit)
				if (blocksCountUpdated == blocksCountTotal) {
					updateBlocks();
				}
			} else {
				setTimeout(recheck, 10);
			}
		})();
	}

	function updateBlock(block) {
		var
			span = block.span,
			svg = block.svg,
			svgText = block.svgText,
			svgPattern = block.svgPattern || null,
			svgImage = block.svgImage || null,
			img = block.img;

		if (svgPattern && svgImage) {
			svgPattern.attr("width", img.width).attr("height", img.height);

			svgImage.attr("width", img.width).attr("height", img.height);
		}

		svg.attr("style", "position:absolute;bottom:0;left:0;z-index:-1");

		span.attr("style", blockSpanStyle);

		var
			textWidth = span.width(),
			textHeight = span.height(),
			textFontsize = span.css("font-size");

		svg.attr("width", textWidth).attr("height", textHeight);

		svgText.attr("font-size", textFontsize);

		/*! opera postfix hack */
		if (opera) {
			svg.attr("style", "position:absolute;bottom:0.065em;left:0;z-index:-1");
		}
	}

	function updateBlocks() {
		for (var i = 0, l = textBlocks.length; i < l; i++) {
			updateBlock(textBlocks[i]);
		}
	}

	function getFontSizeMeasurerValue() {
		return parseFloat(fontsizeMeasurer.css("font-size")) + fontsizeMeasurer.height() + fontsizeMeasurer.width();
	}

	function buildMeasurer() {
		fontsizeMeasurer = $(document.createElementNS(NS.xhtml, "span"));

		fontsizeMeasurer.attr("id", fontsizeMeasurerId).attr("style", "display:inline;position:absolute;left:-10000px");

		fontsizeMeasurer.html((new Array(100)).join("&#160;"));

		$("body").append(fontsizeMeasurer);
	}

	function initBlocksUpdater() {
		buildMeasurer();

		fontsizeMeasurerValue = getFontSizeMeasurerValue();

		(function updater() {
			var fontsizeMeasurerValueCurrent = getFontSizeMeasurerValue();

			if (fontsizeMeasurerValue != fontsizeMeasurerValueCurrent) {
				updateBlocks();

				fontsizeMeasurerValue = fontsizeMeasurerValueCurrent;
			}
			
			opera && fontsizeMeasurer.hide();

			setTimeout(updater, 100);
		})();
	}

	function createBlocks() {
		blocksCountTotal = elements.length;

		if (!blocksCountTotal) { //typeof document.documentElement.style.WebkitBackgroundClip == "undefined"
			return;
		}

		var
			block,
			blockText,
			span,
			svg,
			svgDefs,
			svgText,
			svgPattern,
			svgPatternValue,
			svgImage,
			helperImage,
			textWidth,
			textHeight,
			textFontsize;

		elements.each(function (i) {
			block = $(this);

			block.attr("style", blockStyle);

			blockText = block.text();

			block.text("");

			span = $(document.createElementNS(NS.xhtml, "span"));

			span.html("<span>" + blockText + "</span>");

			span.attr("style", blockSpanStyle + "height:" + block.height() + "px; width:" + block.width() + "px;");

			block.append(span);

			textWidth = span.css("width");
			textHeight = span.css("height");

			textFontsize = span.css("font-size");

			svg = $(document.createElementNS(NS.svg, "svg"));

			svg.attr("version", "1.1").attr("baseProfile", "full").attr("x", "0").attr("y", "0").attr("width", "0").attr("height", "0");

			svg[0].setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns",  NS.svg);
			svg[0].setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", NS.xlink);

			span.append(svg);

			span.attr("style", blockSpanStyle);

			svgPatternValue = block.data("pattern");

			svgDefs = $(document.createElementNS(NS.svg, "defs"));

			svg.append(svgDefs);

			svgPattern = $(document.createElementNS(NS.svg, "pattern"));
			svgPattern.attr("id", svgPatternPrefix + svgPatternValue).attr("x", "0").attr("y", "0");

			svgPattern[0].setAttribute("patternUnits", "userSpaceOnUse");

			svgDefs.append(svgPattern);

			svgImage = $(document.createElementNS(NS.svg, "image"));
			svgImage[0].setAttributeNS(NS.xlink, "xlink:href", svgPatternValue);

			svgImage.attr("x", "0").attr("y", "0");

			svgPattern.append(svgImage);

			svgDefsCache[svgPatternValue] = svgPattern;

			svgText = $(document.createElementNS(NS.svg, "text"));

			svgText.text(blockText);

			svgText.attr("x", "0").attr("y", "0").attr("font-size", textFontsize);

			/*! http://www.opera.com/docs/specs/opera9/svg/ */
			svgText.attr("dominant-baseline", "text-before-edge");
			if (opera) { /*hack for simulating dominant-baseline: text-before-edge*/
				svgText.attr("y",  textFontsize);
				/*svgText[0].setAttribute("textLength", textWidth)*/
			}

			svgText.attr("fill", "url(#" + svgPatternPrefix + svgPatternValue + ")");

			svg.append(svgText);

			textBlocks.push({
				span: span,
				svg: svg,
				svgText: svgText,
				svgPattern: svgPattern,
				svgImage: svgImage,
				img: null
			});

			helperImage = new Image();

			helperImage.onload = (function (img, block) {
				checkImageLoaded(img, block); //for possible bug in WebKit
			})(helperImage, textBlocks[i]);

			helperImage.src = svgPatternValue;

			block.attr("style", blockSpanStyle);
		});

		initBlocksUpdater();
	}

	var methods = {
		init: function (options) {
			elements = $(this);

			if (isSVGNativeSupported()) {
				createBlocks();
			}
		}
	};

	$.fn.patternizer = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method == "object" || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error("Method " +  method + " does not exist on jQuery.patternizer");
		}
	};
})(jQuery);

/* ../../studioIDEI.blocks/i-jquery/__patternizer/i-jquery__patternizer.js end */
;
/* ../../studioIDEI.blocks/patternizer/patternizer.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('patternizer', {

    onSetMod : {

        'js' : function() {

            if (this.domElem.css('text-transform') === "uppercase") {
                this.domElem.html(this.domElem.html().toUpperCase());
            }

            this.domElem.attr('data-pattern', this.params['data-pattern']);

            this.domElem.patternizer();
        }

    }

}, {



});

})();

/* ../../studioIDEI.blocks/patternizer/patternizer.js end */
;
/* ../../desktop.blocks/certificates/certificates.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('certificates', {

        onSetMod: {

            'js': function () {

                this.certificates = [];
                this.currentIndex = 0;

                // styling lightbox
                this.lightBoxSettings = {
                    style: {
                        'border': '1px solid #000'
                    }
                };

                var _this = this;

                this.elem('item').each(function (index, Elem) {
                    _this.certificates.push({
                        url: $(Elem).attr('rel'),
                        current: false
                    });
                });
            }

        },

        showLightbox: function (e) {

            this.certificates[this.currentIndex].current = false;

            this.currentIndex = this.elem('item').index(e.data.domElem);

            this.certificates[this.currentIndex].current = 'current';

            BEM.blocks['lightbox'].showData(this.certificates, this.lightBoxSettings);
        }

    }, {

        live: function () {
            this.liveBindTo('item', 'click', function (e) {
                this.showLightbox(e);
            });
        }

    });

})();

/* ../../desktop.blocks/certificates/certificates.js end */
;
/* ../../desktop.blocks/finished-products-counter/finished-products-counter.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('finished-products-counter', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/finished-products-counter/finished-products-counter.js end */
;
/* ../../studioIDEI.blocks/map/_provider/map_provider_yandex.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'map', modName: 'provider', modVal: 'yandex'}, {

    onSetMod : {

        'js' : function() {
            this.loadMapsApi();
        }

    },


    // загрузчик API
        loadMapsApi: function() {
            var _this = this;

            if (!window.ymaps) {
                var apiScript = document.createElement('script'),
                    apiCallback = 'ymapsloaded';

                window[apiCallback] = function () {
                    _this.onAPILoaded();
                }

                apiScript.src = 'http://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU&&onload=' + apiCallback;

                document.getElementsByTagName('head')[0].appendChild(apiScript);

            } else {

                this.onAPILoaded();
            }
        },

    onAPILoaded: function () {
        this.initMap();
    },

    /**
     * http://api.yandex.ru/maps/doc/jsapi/2.x/quick-start/tasks/quick-start.xml
     */
    initMap: function () {

        this.ymap = new ymaps.Map(this.elem('map')[0], {
            center: this.params.center,
            zoom  : this.params.zoom
        });


        // При создании метки указываем ее свойства:  текст для отображения в иконке и содержимое балуна,
        // который откроется при нажатии на эту метку
        this.placemark = new ymaps.Placemark(this.params.placemark.center, {
            // Свойства
            balloonContentBody  : this.params.placemark.content,
        }, {
            // Опции
            preset: 'twirl#blueStretchyIcon' // иконка растягивается под контент
        });

        // Добавляем метку на карту
        this.ymap.geoObjects.add(this.placemark);


    }



}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();

/* ../../studioIDEI.blocks/map/_provider/map_provider_yandex.js end */
;
/* ../../desktop.blocks/brands/brands.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('brands', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/brands/brands.js end */
;
/* ../../desktop.blocks/search/search.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('search', {

        onSetMod: {

            'js': function () {

                var _this = this;

                (function (w, d, c) {

                    (w[c] || (w[c] = [])).push(function () {
                        Ya.Site.Form.init();
                    });

                    _this.loadApi(w, d, c);

                })(window, document, 'yandex_site_callbacks');
            }

        },


        loadApi: function (w, d, c) {
            // load search api
            if (!d.getElementById('site_yandex_net_v2_0_js_all')) {
                var s = d.createElement('script'), h = d.getElementsByTagName('script')[0];

                s.type = 'text/javascript';
                s.id = 'site_yandex_net_v2_0_js_all';
                s.async = true;
                s.charset = 'utf-8';
                s.src = (d.location.protocol === 'https:' ? 'https:' : 'http:') + '//site.yandex.net/v2.0/js/all.js';
                h.parentNode.insertBefore(s, h);
            }
        }

    }, {

        /*    live : function() {
         *//* ... *//*
         }*/

    });

})();
/* ../../desktop.blocks/search/search.js end */
;
/* ../../studioIDEI.blocks/studio-idei/studio-idei.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('studio-idei', {

    onSetMod : {

        'js' : function() {
            this.logoImagesLength = 8; // from css sprite
            this.setCurrentImage();
        }

    },

    setCurrentImage: function() {
        if (!localStorage) return;

        var currentImage = parseInt(localStorage.getItem('studio-idei-logo'));

        if (!currentImage || currentImage > this.logoImagesLength) {
            currentImage = 1;
        }

        this.setMod(this.elem('logo'), 'image', currentImage);

        currentImage = 1 + currentImage;

        localStorage.setItem('studio-idei-logo', currentImage);
    }

}, {


});

})();

/* ../../studioIDEI.blocks/studio-idei/studio-idei.js end */
;
/* ../../desktop.blocks/articles/articles.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('articles', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/articles/articles.js end */
;
/* ../../desktop.blocks/article/article.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('article', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/article/article.js end */
;
/* ../../studioIDEI.blocks/paginator/paginator.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('paginator', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../studioIDEI.blocks/paginator/paginator.js end */
;
/* ../../desktop.blocks/article-item/article-item.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('article-item', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/article-item/article-item.js end */
;
/* ../../desktop.blocks/catalog-page/catalog-page.js begin */
/** @requires BEM */
/** @requires BEM.DOM */
(function (undefined) {

BEM.DOM.decl('catalog-page', {

        onSetMod: {

            'js': function () {
                this.sortableBlocks = this.findBlocksInside('i-sortable');
            },

            'sortProperty': function (modName, modVal, oldModVal) {
                $.each(this.sortableBlocks, function (key, value) {
                    value.setMod('sorted-by', modVal);
                });
            },

            'order': function (modName, modVal, oldModVal) {
                $.each(this.sortableBlocks, function (key, value) {
                    value.setMod('sorted-direction', modVal);
                });
            }

        },

        onElemSetMod: {

            'menu-item': {

                'state': {

                    'current': function (elem, modName, modVal, oldModVal) {
                        if (oldModVal == 'disabled') return false;

                        var prev = this.elem('menu-item', 'state', 'current');

                        this.delMod(prev, 'state').trigger('current', {
                            prev: prev,
                            current: elem
                        });

                        this.afterCurrentEvent(function(){
                            this.setMod('sortProperty', this.getMod(elem, 'sortProperty'));
                            this.setMod('order', this.getMod(elem, 'order'));
                        });

                    }
                },

                // для определения смены порядка сортировки
                'order': function (elem, modName, modVal, oldModVal) {
                    this.afterCurrentEvent(function(){
                        this.setMod('sortProperty', this.getMod(elem, 'sortProperty'));
                        this.setMod('order', modVal);
                    });
                }
            }
        },

        onItemSelectorClick: function (e) {
            var item = this._getItemByEvent(e);


            if (this.hasMod(item, 'sortProperty')) {
                this.onItemPriceSelectorClick(item);
            }

            this.setMod(item, 'state', 'current');
        },


        onItemPriceSelectorClick: function (item) {

            // only if already selected
            if (!this.hasMod(item, 'state', 'current'))  return false;

            this.toggleMod(item, 'order', 'desc', 'asc');
        },


        _getItemByEvent: function (e) {
            return e.data.domElem.closest(this.buildSelector('menu-item'));
        }

    },

    {

        live : function() {
            this.liveBindTo('menu-item', 'leftclick', function(e) {
                this.onItemSelectorClick(e);
            });
        }

    });

})();

/* ../../desktop.blocks/catalog-page/catalog-page.js end */
;
/* ../../desktop.blocks/catalog-section/catalog-section.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('catalog-section', {

    onSetMod : {

        'js' : function() {
            this.elem('header-line').width(this.elem('header').width() - this.elem('header-inner').outerWidth(true));
        }

    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();

/* ../../desktop.blocks/catalog-section/catalog-section.js end */
;
/* ../../studioIDEI.blocks/i-promo-carousel/i-promo-carousel.js begin */
/** @requires BEM */
/** @requires BEM.DOM */


(function (undefined) {

    BEM.DOM.decl('i-promo-carousel', {

        onSetMod: {

            'js': function () {
                /* ... */

                this.currItemId = this.elem('menu-item').index(this.elem('menu-item', 'state', 'current'));

                // gets from html
                var settings = this.params.settings ||
                {
                    'delayInitTime': 1500, // ms
                    'durationInitTime': 800,
                    'delayLoopTime': 2000
                };

                this.delayInitTime = settings.delayInitTime;
                this.durationInitTime = settings.durationInitTime;
                this.delayLoopTime = settings.delayLoopTime;

                var _this = this;

                this.domElem.hide();

                this.bindTo('menu-item', 'leftclick', function (e) {
                    this.userSetCarouselItem(this.elem('menu-item').index(e.data.domElem));
                });

                // init carousel
                setTimeout(function () {
                    _this.startCarousel();
                }, this.delayInitTime);

            }
        },

        onElemSetMod: {

            'menu-item': {

                'state': {
                    current: function (elem, modName, modVal, oldModVal) {

                        if (oldModVal == 'disabled') {
                            return false;
                        }

                        var prev = this.findElem('menu-item', 'state', 'current');

                        this.delMod(prev, 'state');

                    }
                }
            }
        },


        // show carousel and start loopCarousel
        startCarousel: function () {
            var _this = this;
            var pageHeader = this.findBlockOutside('header');
            var initBlocks = this.domElem;

            if (pageHeader) {
                initBlocks = initBlocks.add(pageHeader.elem('index-title-word'));
            }

            initBlocks
                .fadeIn(this.durationInitTime)
                .promise()
                .done(function () {
                    _this.loopCarousel();
            });
        },


        /**
         * show infinity loop of items, modify this.currItemId
         */
        loopCarousel: function () {

            if (!this.delayLoopTime) return false;

            var _this = this;

            // set next item after this.delayLoopTime
           this.loopCarousel.timeOut = setTimeout(function () {
                _this.currItemId = _this.currItemId + 1;

                // set curr item
                _this.setCarouselItem(_this.currItemId, function () {

                    clearTimeout(_this.loopCarousel.timeOut);

                    _this.loopCarousel();
                });

            }, this.delayLoopTime);

        },

        /**
         *
         * @param id of slide item
         * @param callback fire when all modifiable elements done modificate
         */
        setCarouselItem: function (id, callback) {


            var _this = this;


            if (id >= this.params['slides'].length) {
                id = 0;
            }
            this.currItemId = id;

            var currSlide = this.params['slides'][id];

            this.setMod($(this.elem('menu-item').get(id)), 'state', 'current');

            // save modifiable blocks to hide/show them
            this.modifyContentElems = this.modifyContentElems ||
                this.elem('title')
                    .add(this.elem('text-inner'))
                    .add(this.elem('sub-text'))
                    .add(this.elem('price-old'))
                    .add(this.elem('price-current'))
                    .add(this.elem('photo'));

            // use promise+done because fade out/in of collection of elements (callback fire every elem animation)

            // hide modifiable. blocks
            this.modifyContentElems.fadeOut('fast')
                .promise()
                .done( function () {
                        _this.elem('title').children('.b-link').html(currSlide['title']);
                        _this.elem('text-inner').html(currSlide['text']);
                        _this.elem('sub-text').html(currSlide['sub-text']);
                        _this.elem('price-old').find('.price__value').html(currSlide['price-old']);
                        _this.elem('price-current').find('.price__value').html(currSlide['price-current']);
                        _this.elem('photo').attr('src', currSlide['src']);

                    // update url
                    if (currSlide.url) {
                        _this.elem('url').attr('href', currSlide.url + '#order');
                    }
                    
                    
                    // hide zero price value
                    if (currSlide['price-old'] == 0) {
                        _this.setMod(_this.elem('price-old'), 'visible', 'no');

                    } else {
                        _this.delMod(_this.elem('price-old'), 'visible');
                    }
                    

                    // show modifiable blocks
                    _this.modifyContentElems.fadeIn('slow')
                        .promise()
                        .done(function () {
                        callback && typeof callback === 'function' && callback();
                    });
            });



        },


        // user click on menu
        userSetCarouselItem: function (id, callback) {
            var _this = this;
            clearTimeout(_this.loopCarousel.timeOut);
            this.setCarouselItem(id, function() { _this.loopCarousel(); });
        }

    }, {

    });

})();

/* ../../studioIDEI.blocks/i-promo-carousel/i-promo-carousel.js end */
;
/* ../../desktop.blocks/products-promo-carousel/products-promo-carousel.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

    BEM.DOM.decl({ name: 'products-promo-carousel', baseBlock: 'i-promo-carousel' });

})();

/* ../../desktop.blocks/products-promo-carousel/products-promo-carousel.js end */
;
/* ../../studioIDEI.blocks/i-tabbed-pane/i-tabbed-pane.js begin */
/** @requires BEM */
/** @requires BEM.DOM */


(function(undefined) {

BEM.DOM.decl('i-tabbed-pane', {

    onSetMod : {

        'js' : function () {
            var _this = this;

            this.on('current-tab', function(event, data) {
                 // open tab equal current 'menu-item' elem index
                // findElem instead elem for loaded content
                _this._setCurrentTab(_this.findElem('menu-item').index(data.current));
            });

            this.elem('menu-item').on('leftclick', function (e) {
                _this._onMenuItemClick($(e.currentTarget));
            });

        }

    },


    onElemSetMod: {

        'menu-item': {

            state: {

                current: function (elem, modName, modVal, oldModVal) {

                    if (oldModVal == 'disabled') return false;

                    var prev = this.findElem('menu-item', 'state', 'current');

                    this
                        .delMod(prev, 'state')
                        .trigger('current-tab', {
                            prev   : prev,
                            current: elem
                        });

                }
            }

        },

        'tab': {

            state: {

                current: function () {
                    // del mode current from prev elem
                    this.delMod(this.elem('tab', 'state', 'current'), 'state');
                }
            }
        }

    },


    _onMenuItemClick: function ($elem) {
        this.setMod($elem, 'state', 'current');
    },


    _setCurrentTab: function (index) {
        this.setMod($(this.findElem('tab')[index]), 'state', 'current');
    }

}, {
/*
    live : function() {

    }*/

});

})();

/* ../../studioIDEI.blocks/i-tabbed-pane/i-tabbed-pane.js end */
;
/* ../../desktop.blocks/catalog-index-page/catalog-index-page.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({name: 'catalog-index-page', baseBlock: 'i-tabbed-pane'}, {}, {


    });

})();

/* ../../desktop.blocks/catalog-index-page/catalog-index-page.js end */
;
/* ../../desktop.blocks/catalog-section-carousel/catalog-section-carousel.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('catalog-section-carousel', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/catalog-section-carousel/catalog-section-carousel.js end */
;
/* ../../desktop.blocks/carousel/carousel.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    /* TODO: separate horiz / vert */

    BEM.DOM.decl('carousel', {

        onSetMod: {

            'js': function () {
            }

        },

        onControlClick: function (e) {

            var domElem = e.data.domElem;

            if (this.getMod(domElem, 'state') === 'disabled') {
                return;
            }

            var direction = this.getMod(domElem, 'direction');

            this.switchCarousel(direction);
        },

        refreshControlsAbility: function () {
            // TODO: optimize

            this.delMod(this.elem('control', 'direction'), 'state');

            if (this.frameCurr === 1) {
                this.setMod(this.elem('control', 'direction', 'prev'), 'state', 'disabled');

            } else {
                this.delMod(this.elem('control', 'direction', 'prev'), 'state');
            }

            if (this.frameCurr === this.frameTotal) {
                this.setMod(this.elem('control', 'direction', 'next'), 'state', 'disabled');

            } else {
                this.delMod(this.elem('control', 'direction', 'next'), 'state');
            }

        }


    }, {

/*        live: function () {
            this.liveBindTo('control', 'leftclick', function (e) {
                this.onControlClick(e);
            });
        }*/

    });

})();

/* ../../desktop.blocks/carousel/carousel.js end */
;
/* ../../desktop.blocks/carousel/_type/carousel_type_horiz.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ block: 'carousel', modName: 'type', modVal: 'horiz'}, {

        onSetMod: {

            'js': function () {

                this.bindTo('control', 'leftclick', function (e) {
                    this.onControlClick(e);
                });

                this.frameWidth = this.elem('viewport').innerWidth();

                this.itemFullWidth = Math.floor(this.frameWidth / this.params.frameItemsCount);

                // correct viewport width
                this.frameWidth = this.itemFullWidth * this.params.frameItemsCount;

                this.elem('viewport').css({ width: this.frameWidth });
                this.elem('item').css({ width: this.itemFullWidth });


                this.frameTotal = Math.ceil((this.elem('item').length - this.params.frameItemsCount) / this.params.frameItemsStep) + 1; // 1 -- current frame
                
                // In case when frameItemsCount > elems length
                if (this.frameTotal < 1) {
                    this.frameTotal = 1;
                }
                
                this.frameCurr = this.params.frameCurr;
                
                this.refreshControlsAbility();
            }

        },

        switchCarousel: function (direction) {

            if (direction === 'prev') {
                this.elem('items').animate({ 'left': '+=' + (this.itemFullWidth * this.params.frameItemsStep) });
                this.frameCurr = this.frameCurr - 1;

            } else {
                this.elem('items').animate({ 'left': '-=' + (this.itemFullWidth * this.params.frameItemsStep) });
                this.frameCurr = this.frameCurr + 1;
            }

            this.refreshControlsAbility();

        }

    }, {

/*        live: function () {
            this.liveBindTo('control', 'leftclick', function (e) {
                this.onControlClick(e);
            });
        }*/
    });

})();

/* ../../desktop.blocks/carousel/_type/carousel_type_horiz.js end */
;
/* ../../desktop.blocks/carousel/_type/carousel_type_vert.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ block: 'carousel', modName: 'type', modVal: 'vert'}, {

        onSetMod: {

            'js': function () {

                this.bindTo('control', 'leftclick', function (e) {
                    this.onControlClick(e);
                });

                // viewport size
                this.frameHeight = this.elem('viewport').innerHeight();

                this.itemFullHeight = Math.floor(this.frameHeight / this.params.frameItemsCount);

                this.frameTotal = Math.ceil((this.elem('item').length - this.params.frameItemsCount) / this.params.frameItemsStep) + 1; // 1 -- current frame

                // In case when frameItemsCount > elems length
                if (this.frameTotal < 1) {
                    this.frameTotal = 1;
                }


                // correct viewport width
                this.frameHeight = this.itemFullHeight * this.params.frameItemsCount;

                this.elem('viewport').css({ height: this.frameHeight });
                this.elem('item').css({ height: this.itemFullHeight });

                this.frameCurr = this.params.frameCurr;
                
                this.refreshControlsAbility();
            }

        },


        switchCarousel: function (direction) {

            if (direction === 'prev') {
                this.elem('items').animate({ 'top': '+=' + (this.itemFullHeight * this.params.frameItemsStep) });
                this.frameCurr = this.frameCurr - 1;

            } else {
                this.elem('items').animate({ 'top': '-=' + (this.itemFullHeight * this.params.frameItemsStep) });
                this.frameCurr = this.frameCurr + 1;
            }

            this.refreshControlsAbility();

        }

    }, {

        /*        live: function () {
         *//* ... *//*
         }*/

    });

})();

/* ../../desktop.blocks/carousel/_type/carousel_type_vert.js end */
;
/* ../../desktop.blocks/wholesale-partners-form/wholesale-partners-form.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('wholesale-partners-form', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/wholesale-partners-form/wholesale-partners-form.js end */
;
/* ../../studioIDEI.blocks/input/input.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('input', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();

/* ../../studioIDEI.blocks/input/input.js end */
;
/* ../../studioIDEI.blocks/input/_type/input_type_radio.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'input', modName: 'type', modVal: 'radio'}, {

    onSetMod : {

        'js' : function() {
            var _this = this;

            // set init state
            this.elem('input').each(function (index, elem) {
                if (elem.checked) {
                    _this.check($(elem).parent()[0]);
                }
            });

            this.domElem.bind('leftclick', function(e) {
                _this.check(e.currentTarget);
            });
        }

    },

    check: function (elem) {
        var checkedControl = $(elem).find(this.buildSelector('control'));

        this
            .delMod(this.elem('control'), 'checked')
            .setMod(checkedControl, 'checked', 'yes')
            .trigger('check', { current: elem });
    }

}, {

/*    live : function() {
    }
    */

});

})();

/* ../../studioIDEI.blocks/input/_type/input_type_radio.js end */
;
/* ../../studioIDEI.blocks/input/_type/input_type_file.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ block: 'input', modName: 'type', modVal: 'file'}, {

        onSetMod: {

            'js': function () {

                var _this = this;

                this.elem('input').on('change', function () {
                    _this.showFileName();
                });

                this.domElem.hover(
                    function () {
                        _this.setMod('hovered', 'yes');
                    },
                    function () {
                        _this.delMod('hovered');
                        _this.delMod('focused');
                    });

                this.domElem.mousedown(function () {
                    _this.setMod('focused', 'yes');
                });

                this.domElem.mouseup(function () {
                    _this.delMod('focused');
                });

            }

        },

        showFileName: function () {

            var fileType = this.elem('input').val().split('.').slice(-1).join(''); // last .TEXT

            this.elem('file-title').text(this.elem('input').val().split(/[\\\/]+/).slice(-1)); // last behind \ or / text

            this.setMod(this.elem('file-title'), 'extension', fileType);

            this.setMod(this.elem('file-title'), 'visibility', 'visible');
        }

    }, {

        /*    live : function() {

         }*/

    });

})();

/* ../../studioIDEI.blocks/input/_type/input_type_file.js end */
;
/* ../../desktop.blocks/textarea/textarea.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('textarea', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/textarea/textarea.js end */
;
/* ../../desktop.blocks/button/_type/button_type_submit.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'button', modName: 'type', modVal: 'submit'}, {

    onSetMod : {

        'js' : function() {
            /* ... */
        },

        state: function (modName, modVal, oldModVal) {

            if (modVal === 'disabled') {
                this.domElem.attr('disabled', 'disabled');

            } else if (modVal === 'enabled') {
                this.domElem.removeAttr('disabled');
            }
        }

    }

}, {


});

})();

/* ../../desktop.blocks/button/_type/button_type_submit.js end */
;
/* ../../desktop.blocks/dealers/dealers.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('dealers', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/dealers/dealers.js end */
;
/* ../../desktop.blocks/delivery-info/delivery-info.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('delivery-info', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/delivery-info/delivery-info.js end */
;
/* ../../desktop.blocks/shipping-calc/shipping-calc.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('shipping-calc', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/shipping-calc/shipping-calc.js end */
;
/* ../../studioIDEI.blocks/visibility-toggle/visibility-toggle.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('visibility-toggle', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    },

    toggleVisibility: function () {
        this.elem('content').toggle();
        // toggleMod : function(elem, modName, modVal1, modVal2, condition)
        this.toggleMod('content-visible', 'no', 'yes');
    }

}, {

    live : function() {
        this.liveBindTo('trigger', 'leftclick', function () {
            this.toggleVisibility();
        });
    }

});

})();

/* ../../studioIDEI.blocks/visibility-toggle/visibility-toggle.js end */
;
/* ../../desktop.blocks/faq-item/faq-item.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('faq-item', {

    onSetMod : {

        'js' : function() {
            var _this = this;

            this.elem('answer').each(function(index, element) {
                $(element).data('height', $(element).height());
            });

            this.bindTo('question', 'leftclick', function (e) {
                _this.toggleMod('opened', 'yes', 'no', _this.hasMod('opened', 'no'));
            });


            if (this.hasMod('opened', 'no')) {
                this.elem('answer')
                    .hide()
                    .css({
                        'height': 0,
                        'opacity': 0
                    });
            }

        },

        'opened': {

            'yes': function () {

                this.elem('answer')
                    .show()
                    .animate({
                        'height': this.elem('answer').data('height'),
                        'opacity': 1
                });
            },

            'no': function () {
                this.elem('answer').animate({
                    'height': 0,
                    'opacity': 0
                });
            }
        }

    }

}, {

/*    live : function() {

    }*/

});

})();

/* ../../desktop.blocks/faq-item/faq-item.js end */
;
/* ../../desktop.blocks/form/form.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('form', {

    onSetMod : {

        'js' : function() {

            this.bindTo('submit', function (e) {
                this.send(e);
            });

            this.messages = this.params.messages;
        }

    },

    send: function (e) {
        e.preventDefault();

        var _this = this;

        var responses = ['ok', 'error'];

        _this.showResponse(responses[(Math.floor(Math.random() * responses.length))]);

/*        $.post(this.domElem.attr('action'), this.domElem.serialize(), function(response){
            _this.showResponse(response);
        });*/
    },

    showResponse: function (response) {

        this.elem('status-info').html(this.messages[response]);

        this.setMod(this.elem('status-info'), 'visible', 'yes');

        this.setMod(this.elem('status-info'), 'result', response);
    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();

/* ../../desktop.blocks/form/form.js end */
;
/* ../../desktop.blocks/call-request/call-request.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('call-request', {

    onSetMod : {

        'js' : function() {

            var _this = this;
            this.statusHiddenDelay = 4000; // ms

            this.textStatuses = {
                'ok': 'Ваша заявка принята. <br> Спасибо!',
                'error': 'Ошибка запроса. <br> Попробуйте пожалуйста позже'
            };

            /* find control elems */
            this.reqiuredField = this.findBlockInside({ block: 'input', modName: 'name', modVal: 'phone' });
            this.submitButton = this.findBlockInside({ block: 'button', modName: 'type', modVal: 'submit' });

            this.submitButton.setMod('state', 'disabled');

            this.reqiuredField.on('completed', function(event, data) {
                _this.toggleSendButton(data)
            });

            this.elem('closer').click(function () {
                _this.setHidden();
            });
        },

        'status': function (modName, modVal, oldModVal) {
            this.elem('status').html(this.textStatuses[modVal]);
        }

    },

    setVisible: function (e) {
        this.alignForm(e);
        this.setMod(this.elem('form'), 'visibility', 'visible');
    },

    setHidden: function () {

        this.hiddenTimeout && clearTimeout(this.hiddenTimeout);

        this
            .setMod(this.elem('form'), 'visibility', 'hidden')
            .delMod('status');
    },

    sendRequest: function () {

        var button = this.findBlockInside('button');

        button.setMod('state', 'disabled');

        var data = this.elem('form').serialize();
        var action = this.elem('form').attr('action');
        var _this = this;

        $.post(action, data, function (data) {
            button.delMod('state');
            _this.showStatus(data);
        });
    },

    showStatus:function (data) {
        this.setMod('status', data);

        var _this = this;
        this.hiddenTimeout = setTimeout(function (){
            _this.setHidden();

        }, _this.statusHiddenDelay)
    },

    alignForm: function (e) {

        // event init element
        var targetOffset = $(e.target).offset();
        // left or right side of screen
        var targetElemAtCenterPagePosition = $(window).width() / 2 > targetOffset.left ? 'left' : 'right';

        var minMargin = 10; // px
        var positionX;
        var positionY;

        // get the X-coordinate
        if (targetElemAtCenterPagePosition === 'left') {
            // element in left side
            positionX = targetOffset.left;
        } else {
            // element in right side
            positionX = targetOffset.left - this.elem('form').width();
        }

        // get the Y-coordinate
        positionY = targetOffset.top - this.elem('form').height() / 2;
        // limit min margin at screen

        positionY < minMargin && (positionY = minMargin);


        // set layout position (at window)
        this.elem('form').css({
            left: positionX,
            top: positionY
        });
    },

    toggleSendButton: function (data) {
        if (data == 'yes') {
            this.submitButton.setMod('state', 'enabled');
        } else {
            this.submitButton.setMod('state', 'disabled');
        }
    }

}, {

    live : function() {
         this.liveBindTo('opener', 'click', function (e) {
             this.setVisible(e);
         });

        this.liveBindTo('submit', function (e) {
            e.preventDefault();
            this.sendRequest();
        });
    }

});

})();

/* ../../desktop.blocks/call-request/call-request.js end */
;
/* ../../desktop.blocks/how-to-buy-page/how-to-buy-page.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('how-to-buy-page', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/how-to-buy-page/how-to-buy-page.js end */
;
/* ../../desktop.blocks/header/_page/header_page_index.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ block: 'header', modName: 'page', modVal: 'index' }, {

        onSetMod: {

            'js': function () {
                this.logoImagesLength = this.params.logoImagesLength;
                this.setCurrentImage();
            }

        },

        setCurrentImage: function () {
            this.setMod('image', this.generateImageIndex());
        },

        generateImageIndex: function () {

            var index = Math.floor(Math.random() * this.logoImagesLength) + 1;

            /* Корректировка значение (начало) */
            // Если поддерживается сохранение, то..
            if (window.localStorage) {
                // ..получить прердыдущее значение.
                var prevIndex = parseInt(localStorage.getItem('header-page-index'));

                // Если текущее равно предыдущему, изменить текущее значение:
                if (index == prevIndex) {
                    // если не последнее возможное, то на единицу вперед или
                    if (index < this.logoImagesLength ) {
                        index = index + 1;
                    // на единицу назад
                    } else {
                        index = index - 1;
                    }
                }
                // сохранить текущее значение
                localStorage.setItem('header-page-index', index);
            }
             /* Корректировка значение (конец) */

            return index;
        }

    }, {

        /*    live : function() {
         *//* ... *//*
         }*/

    });

})();

/* ../../desktop.blocks/header/_page/header_page_index.js end */
;
/* ../../desktop.blocks/index-promo-carousel/index-promo-carousel.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ name: 'index-promo-carousel', baseBlock: 'i-promo-carousel' });

})();

/* ../../desktop.blocks/index-promo-carousel/index-promo-carousel.js end */
;
/* ../../desktop.blocks/index-page/index-page.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('index-page', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/index-page/index-page.js end */
;
/* ../../desktop.blocks/company-brief/company-brief.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('company-brief', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/company-brief/company-brief.js end */
;
/* ../../desktop.blocks/all-pros/all-pros.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('all-pros', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/all-pros/all-pros.js end */
;
/* ../../desktop.blocks/sale-stock/sale-stock.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('sale-stock', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/sale-stock/sale-stock.js end */
;
/* ../../desktop.blocks/articles-tabs/articles-tabs.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({name: 'articles-tabs', baseBlock: 'i-tabbed-pane'}, {}, {


    });

})();

/* ../../desktop.blocks/articles-tabs/articles-tabs.js end */
;
/* ../../desktop.blocks/article-anounce/article-anounce.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('article-anounce', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/article-anounce/article-anounce.js end */
;
/* ../../studioIDEI.blocks/text-truncate/text-truncate.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('text-truncate', {

    onSetMod : {

        'js' : function() {

            var text = this.domElem.text();

            if (text.length > this.params.stringLength) {

                this.domElem.html(text.substring(0, this.params.stringLength) + "&hellip;" );
            }
        }

    }

}, {

/*    live : function() {
        *//* ... *//*
    }*/

});

})();

/* ../../studioIDEI.blocks/text-truncate/text-truncate.js end */
;
/* ../../desktop.blocks/photoalbum-thumb/photoalbum-thumb.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('photoalbum-thumb', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/photoalbum-thumb/photoalbum-thumb.js end */
;
/* ../../desktop.blocks/add-to-cart-anime/add-to-cart-anime.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('add-to-cart-anime', {

        onSetMod: {

            'js': function () {
                this.formToSubmit = this.findBlockOutside('b-page').findBlockInside('catalog-item-card');
                this.buyButton = this.formToSubmit.elem('buy-button');
            },

            'visible': {
                'yes': function (elem, modName, modVal, oldModVal) {
                    this.showAddToCartAnimation(this.domElem);
                },

                'no': function (elem, modName, modVal, oldModVal) {

                    this.afterCurrentEvent(function () {
                        // Clear styles
                        this.domElem.css({
                            'width': '',
                            'height': '',
                            'padding': '',
                            'font-size': '',
                            'line-height': ''
                        });
                    });

                }
            }

        },


        showAddToCartAnimation: function (elem) {
            var _this = this;
            var targetTopMargin = 16; // px
            var beforeAnimateTime = 1000; // ms
            var offsetBuyButton = this.buyButton.offset();
            var positionX = offsetBuyButton.left + (this.buyButton.outerWidth() / 2) - (elem.outerWidth() / 2);
            var positionY = offsetBuyButton.top + (this.buyButton.outerHeight() / 2) - (elem.outerHeight() / 2);
            var targetDOMElem = _this.findBlockOutside('b-page').findBlockInside('cart-info').elem('link');

            // Show elem and..
            elem.css({
                    left: positionX,
                    top: positionY
                }).promise()// ..after show wait beforeAnimateTime, then animate.
                .done(function () {
                    elem.delay(beforeAnimateTime).animate({   left: targetDOMElem.offset().left,
                            'top': targetDOMElem.offset().top - targetTopMargin,
                            'width': 0,
                            'height': 0,
                            'padding': 0,
                            'font-size': 0,
                            'line-height': 0
                        },

                        // After animate hide this block..
                        function () {
                            _this.trigger('completed', { elem: elem });
                            _this.setMod(elem, 'visible', 'no');
                        });
                });
        }


    }, {


        live: function () {
            /* init by catalog-card-item */
        }

    });

})();

/* ../../desktop.blocks/add-to-cart-anime/add-to-cart-anime.js end */
;
/* ../../desktop.blocks/catalog-item/catalog-item.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('catalog-item', {

    onSetMod : {

        'js' : function() {
            /* ... */
            var _this = this;

            this.elem('info-menu-item').on('click', function () {
                if (_this.getMod($(this), 'state') === 'current') return;

                _this.setMod($(this), 'state', 'current');
            });
        }

    },

    onElemSetMod: {
        'info-menu-item': {
            state: {
                current: function (elem, modName, modVal, oldModVal) {
                    var current = this.elem('info-menu-item', 'state', 'current');

                    this.delMod(current, 'state');

                    this._setSection(this.elemParams(elem).section);
                }
            }
        },

        'info-content-item': {
            state: {
                current: function (elem, modName, modVal, oldModVal) {
                    var current = this.elem('info-content-item', 'state', 'current');
                    this.delMod(current, 'state');
                }
            }
        }
    },

    _setSection: function (section) {
        var curElem = this.elem('info-content-item', 'section', section);

        this.setMod(curElem, 'state', 'current');
    }

}, {
/*
    live : function() {
        *//* ... *//*
    }*/

});

})();

/* ../../desktop.blocks/catalog-item/catalog-item.js end */
;
/* ../../desktop.blocks/catalog-item-card/catalog-item-card.js begin */
(function(undefined) {

BEM.DOM.decl('catalog-item-card', {

    onSetMod : {

        'js' : function() {


            var _this = this;

            this.loader = this.findBlockInside('content-loader');
            this.addToCartAnime = this.findBlockOutside('b-page').findBlockInside('add-to-cart-anime');
            this.cartInfo = this.findBlockOutside('b-page').findBlockInside('cart-info');


            /* bind events */

            // set current photo
            this.elem('photos-list-item').bind('click', function (e) {
                _this.setMod($(e.currentTarget), 'state', 'current');
            });

            // set current color
            this.colorSelector = this.findBlockInside('color-selector');

            this.colorSelector && this.colorSelector.on('setColor', function (event, data) {
                _this.selectColor(data);
            });

            // bind to submit
            this.bindTo('submit', function (e) {
                e.preventDefault();

                /* show animate */
                _this.addToCartAnime.setMod('visible', 'yes');

                /* if addToCartAnime doesn't exist, then send request */
                !_this.addToCartAnime && _this.addToCart();
            });


            this.addToCartAnime.on('completed', function (event, data) {
                _this.addToCart();
            });


            /* show init photo loading */
            this.loader.setMod('state', 'processing');

            /* if photo cached, done */
            this.elem('photo-big-img').width() > 0 && this.loader.setMod('state', 'done');

            this.elem('photo-big-img').load(function () {
                _this.loader.setMod('state', 'done');
            });

            this.photoBigColors = this.elemParams('photo-big-img');
        }

    },

    onElemSetMod: {

        'photos-list-item': {
            'state': {
                'current': function (elem, modName, modVal, oldModVal) {
                    var prev = this.elem('photos-list-item', 'state', 'current');
                    this.delMod(prev, 'state');

                    // set current big photo
                    this.loader.setMod('state', 'processing');
                    this.elem('photo-big-img').attr('src', elem.attr('rel'));
                }
            }
        }
    },


    addToCart: function () {
        var _this = this;

        jQuery.post(_this.domElem.attr('action'), _this.domElem.serialize(), function(response) {
            var response = JSON.parse(response);
            _this.cartInfo.elem('total-products').html(response['total-products']);
            _this.cartInfo.elem('total-price').html(response['total-price']);
            _this.cartInfo.domElem.css({ opacity: 1 });
            _this.addToCartAnime.setMod('visible', 'no');
        });
    },


    selectColor: function (color) {
        this.loader.setMod('state', 'processing');
        this.elem('photo-big-img').attr('src', this.photoBigColors[color]);
        this.elem('color-input').val(color);
    }

}, {

/*    live : function() {

        // set current photo
        this.liveBindTo('photos-list-item', 'click', function (e) {
            this.setMod(e.data.domElem, 'state', 'current');
        });

        // set current color
        this.liveInitOnBlockInsideEvent('setColor', 'color-selector', function (event, data) {
            this.selectColor(data);
        });

        // add to cart
        this.liveBindTo('buy-button', 'click', function (e) {
            e.preventDefault();
            this.setMod(this.elem('added-in-cart'), 'visible', 'yes');
        });
    }*/

});

})();

/* ../../desktop.blocks/catalog-item-card/catalog-item-card.js end */
;
/* ../../desktop.blocks/color-selector/color-selector.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('color-selector', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    },

    onElemSetMod: {

        'selector': {

            'checked': {

                'yes': function (elem, modName, modVal, oldModVal) {

                    var prev = this.elem('selector', 'checked', 'yes');

                    this.delMod(prev, 'checked');
                }
            }
        }

    },

    onItemSelectorClick: function (e) {
        var item = e.data.domElem;

        if (this.hasMod(item, 'checked', 'yes')) return false;

        this
            .setMod(item, 'checked', 'yes')
            .trigger('setColor', this.getMod(item, 'color'));

    }

}, {

    live : function() {
        this.liveBindTo('selector', 'leftclick', function (e) {
        
            this.onItemSelectorClick(e);
        
        });
    }

});

})();

/* ../../desktop.blocks/color-selector/color-selector.js end */
;
/* ../../studioIDEI.blocks/enumeration-list/enumeration-list.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('enumeration-list', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../studioIDEI.blocks/enumeration-list/enumeration-list.js end */
;
/* ../../studioIDEI.blocks/text-mask/text-mask.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('text-mask', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../studioIDEI.blocks/text-mask/text-mask.js end */
;
/* ../../desktop.blocks/text-mask/text-mask.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('text-mask', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/text-mask/text-mask.js end */
;
/* ../../desktop.blocks/articles-images/articles-images.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('articles-images', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/articles-images/articles-images.js end */
;
/* ../../desktop.blocks/order-list/order-list.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('order-list', {

    onSetMod : {

        'js' : function() {

            var _this = this;
            this.totalPriceValue = this.findBlockInside(this.elem('total-value'), 'price').elem('value');

            // update count
            $.each(this.findBlocksInside('counter', 'input'), function (indexInArray, valueOfElement) {
                valueOfElement.bindTo('change', function (e) {
                    _this.updateTotalPrice();
                });
            });


            // delete item
            $.each(this.findBlocksInside('delete', 'button'), function (indexInArray, valueOfElement) {
                valueOfElement.bindTo('click', function (e) {
                    _this.deleteItem(e);
                });
            });

        }

    },

    deleteItem: function (e) {
        e.preventDefault();

        var _this = this;

        var item = this._getItemByEvent(e);
        var url = $(e.currentTarget).attr('href');

        $.get(url, function () {
            item.remove();
            _this.updateTotalPrice();
        });



    },

    /**
     * update total price
     * trigger window event 'cart:update' with total price and count
     */
    updateTotalPrice: function () {
        var _this = this;
        var totalPrice = 0;
        var totalProducts = 0;

        $.each(this.findBlocksInside('counter', 'input'), function (indexInArray, valueOfElement) {

            var count = parseInt(valueOfElement.domElem.val(), 10);
            var item = valueOfElement.domElem.closest(_this.buildSelector('item'));

            var price = _this.findBlockInside(item, 'price').findElem('value').text().replace(/\D+/, '');

            totalPrice = totalPrice + count * price;
            totalProducts = totalProducts + count;
        });

        var thinSpace = '&thinsp;';
        var every3DigitRE = /(\d)(?=(\d{3})+(?!\d))/g;
        var totalPriceFormatted =  (totalPrice + '').replace(every3DigitRE, '$1' + thinSpace);

        this.totalPriceValue.html(totalPriceFormatted);

        $(window).trigger('cart:update', { totalPrice: totalPriceFormatted, totalProducts: totalProducts });
    },


    _getItemByEvent : function(e) {
        return $(e.currentTarget).closest(this.buildSelector('item'));
    }

}, {


});

})();

/* ../../desktop.blocks/order-list/order-list.js end */
;
/* ../../desktop.blocks/authorization/_state/authorization_state_recovery.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'authorization', modName: 'state', modVal: 'recovery'}, {

    onSetMod : {

        'js' : function() {
            this.submitButton = this.findBlockInside({ block: 'button', modName: 'type', modVal: 'submit' });
        }
    },



    setSubmitButtonState: function (enable) {
        if (enable === 'yes') {
            this.submitButton.setMod('state', 'enabled');

        } else {
            this.submitButton.setMod('state', 'disabled');
        }
    }

}, {

    live: function () {

        /* TODO: refactor with other mods of this block */
        // set current state
        this.liveInitOnBlockInsideEvent('completed', 'signin', function (event, data) {
            this.setSubmitButtonState(data);
        });
        this.liveInitOnBlockInsideEvent('completed', 'signup', function (event, data) {
            this.setSubmitButtonState(data);
        });
        this.liveInitOnBlockInsideEvent('completed', 'input', function (event, data) {
            this.setSubmitButtonState(data);
        });

    }

});

})();

/* ../../desktop.blocks/authorization/_state/authorization_state_recovery.js end */
;
/* ../../studioIDEI.blocks/i-validate/i-validate.js begin */
/** @requires BEM */
/** @requires BEM */

/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('i-validate', {

    onSetMod : {

        'js' : function() {
            var _this = this;
            this.requiredFields = this.params.required.split(', ');
            this.isHandlersBinded = false;
            setTimeout(function () { _this.checkCompleted(); }, 0)
        },

        completed: function (modName, modVal, oldModVal) {
            this.trigger('completed', modVal);
        }

    },

    setSubmitButtonState: function (values) {
        var isCompleted = this.validateValues(values);

        if (isCompleted) {
            this.setMod('completed', 'yes');

        } else {
            this.setMod('completed', 'no');
        }

    },

    checkCompleted: function () {
        var _this = this;
        var currentValues = {};

        $.each(this.requiredFields, function (index, value) {

            var inputElem = _this.elem(value).children('input');
            // register required inputs changes
            if (!_this.isHandlersBinded) {
                inputElem.on('keyup change input', function () {
                    _this.checkCompleted();
                });
            }

            // get current value
            currentValues[value] = inputElem.val();
        });

        this.setSubmitButtonState(currentValues);
        this.isHandlersBinded = true;
    },

    validateValues: function (values) {
        var result = true;
        $.each(this.requiredFields, function (index, value) {

            if (values[value].length == 0) {
                result = false;
            }

        });
        return result;
    }

}, {


});

})();

/* ../../studioIDEI.blocks/i-validate/i-validate.js end */
;
/* ../../desktop.blocks/signin/signin.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl( { name: 'signin', baseBlock: 'i-validate' }, {}, {});

})();

/* ../../desktop.blocks/signin/signin.js end */
;
/* ../../desktop.blocks/signup/signup.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

    BEM.DOM.decl( { name: 'signup', baseBlock: 'i-validate' }, {}, {});

})();

/* ../../desktop.blocks/signup/signup.js end */
;
/* ../../desktop.blocks/radio-switcher/radio-switcher.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('radio-switcher', {

    onSetMod : {

        'js' : function() {
           //console.log(this.findBlocksInside('tabbed-pane'));
        }

    }

}, {
/*

    live : function() {
        */
/* ... *//*

    }
*/

});

})();

/* ../../desktop.blocks/radio-switcher/radio-switcher.js end */
;
/* ../../studioIDEI.blocks/tabbed-pane/tabbed-pane.js begin */
/** @requires BEM */
/** @requires BEM.DOM */


(function(undefined) {

    var _this;

BEM.DOM.decl({ name: 'tabbed-pane', baseBlock: 'i-tabbed-pane'  }, {

    onSetMod : {

        'js' : function () {
            this.__base();

            _this = this;
            var radioInput = _this.findBlockInside({ block: 'input', modName: 'type', modVal: 'radio' });

            radioInput.elem('input').each(function (index, elem) {
                if (elem.checked) {

                    _this._setCurrentTab(radioInput.elem('input').index(elem));

                }
            });


        }

    }

}, {
/*
    live : function() {
        this.__base();
    }*/

});

})();

/* ../../studioIDEI.blocks/tabbed-pane/tabbed-pane.js end */
;
/* ../../desktop.blocks/fieldset/fieldset.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('fieldset', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/fieldset/fieldset.js end */
;
/* ../../studioIDEI.blocks/select/select.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('select', {

        onSetMod: {

            'js': function () {
                /* ... */
            }

        },

        onElemSetMod: {

            'custom-options': {

                'visible': function (elem, modName, modVal, oldModVal) {

                    if (modVal === 'yes') {
                        this.setMod(this.elem('custom-control'), 'active', 'yes');

                    } else {
                        this.delMod(this.elem('custom-control'), 'active');
                    }
                }
            }

        },

        selectOption: function (e) {
            var optionIndex = this.elem('custom-option').index(e.data.domElem);
            var optionsDomElems = this.elem('option');

            optionsDomElems.eq(optionIndex).prop('selected', 'selected');

            this.elem('title').html(e.data.domElem.text());
            this.setMod(this.elem('title'), 'changed', 'yes');
        }

    }, {

        live: function () {
            this.liveBindTo('custom-option', 'leftclick', function (e) {
                this.selectOption(e);
            });

            this.liveBindTo('custom-control', 'leftclick', function () {
                this.toggleMod(this.elem('custom-options'), 'visible', 'yes');
            });
        }

    });

})();

/* ../../studioIDEI.blocks/select/select.js end */
;
/* ../../desktop.blocks/region-delivery-info/region-delivery-info.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('region-delivery-info', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/region-delivery-info/region-delivery-info.js end */
;
/* ../../desktop.blocks/order-params-info/order-params-info.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('order-params-info', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/order-params-info/order-params-info.js end */
;
/* ../../desktop.blocks/order-success/order-success.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('order-success', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/order-success/order-success.js end */
;
/* ../../desktop.blocks/order-list-info/order-list-info.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('order-list-info', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/order-list-info/order-list-info.js end */
;
/* ../../desktop.blocks/payment-page/payment-page.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('payment-page', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/payment-page/payment-page.js end */
;
/* ../../desktop.blocks/payment-form/payment-form.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('payment-form', {

        onSetMod: {

            'js': function () {

            }

        },

        /**
         * Переключение текущего поля ввода при заполнении предыдущего
         * @param e
         */
        switchField: function (e) {

            var field = e.data.domElem,
                last_length = field.data('last_length') || 0,
                cur_length = field.val().length,
                max_length = parseInt(field.attr('maxlength')) || 3,
                selection = this.__self.getSelectionRange(field[0]),
                lastNumberInputIndex = 3;

                    /*          console.log('cur_length: ' + cur_length);
                                console.log('last_length: ' + last_length);
                                console.log('max_length: ' + max_length);
                                console.log('selection: ' + selection);
                                console.log('selection.start: ' + selection.start);
                    */

            if (cur_length > last_length &&
                cur_length == max_length &&
                selection &&
                selection.start == cur_length) {

                // need to switch field
                if (field.index() < lastNumberInputIndex) {
                    // switch to next number-input
                    field.next().focus();
                } else {
                    // switch to valid-period-select-day-month
                    this.elem('valid-period-select-day-month').focus();
                }
            }
            field.data('last_length', cur_length);

        },


        /**
         * Проверка раскладки клавиатуры
         * @param e event
         */
        checkKeyboardLayout: function (e) {
            var rusLayoutREGX = /([а-яА-Я]+)/;
            var inputElemVal  = e.data.domElem.val();

            if (inputElemVal.match(rusLayoutREGX)) {
                this.elem('owner-error').html(this.params['keyboardLayoutError']);
                this.setMod(this.elem('owner-error'), 'visible', 'yes');

            } else {
                this.delMod(this.elem('owner-error'), 'visible');
            }
        }

    }, {

        live: function () {

            this.liveBindTo('number-input', 'keyup change', function (e) {
                this.switchField(e);
            });

            this.liveBindTo('owner-input', 'keyup change', function (e) {
                this.checkKeyboardLayout(e);
            });



        },

        /**
         * @url: http://chikuyonok.ru/2010/07/simple-things/
         * @param elem jQuery
         * @returns {*}
         */
        getSelectionRange: function (elem) {
            if ('selectionStart' in elem) { // W3C's DOM
                return {
                    start: elem.selectionStart,
                    end: elem.selectionEnd
                };
            } else if (document.selection) { // IE
                elem.focus();

                var range = document.selection.createRange(), content = elem.value;

                if (range === null) {
                    return {
                        start: 0,
                        end: content.length
                    };
                }

                var re = elem.createTextRange();
                var rc = re.duplicate();
                re.moveToBookmark(range.getBookmark());
                rc.setEndPoint('EndToStart', re);

                return {
                    start: rc.text.length,
                    end: rc.text.length + range.text.length
                };
            } else {
                return null;
            }
        }


    });

})();

/* ../../desktop.blocks/payment-form/payment-form.js end */
;
/* ../../desktop.blocks/payment-info/payment-info.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('payment-info', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/payment-info/payment-info.js end */
;
/* ../../desktop.blocks/photoalbum-page/photoalbum-page.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('photoalbum-page', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/photoalbum-page/photoalbum-page.js end */
;
/* ../../desktop.blocks/photoalbums-item/photoalbums-item.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl('photoalbums-item', {

        onSetMod: {

            'js': function () {
            
                var _this = this;

                this.loader = this.findBlockInside('content-loader');


                /* bind to photo choose */
                this.elem('photo').click(function (e) {
                    _this.setCurrFullPhoto(e);
                });

                /* show init photo loading */
                this.loader.setMod('state', 'processing');

                this.elem('current').width() > 0 && this.loader.setMod('state', 'done');

                /* bind to photo loaded */
                this.elem('current').load(function () {
                    _this.loader.setMod('state', 'done');
                });

            }

        },

        onElemSetMod: {

            'photo': {

                'state': {

                    'current': function (elem, modName, modVal, oldModVal) {

                        if (oldModVal == 'disabled') {
                            return false;
                        }

                        var prev = this.elem('photo', 'state', 'current');

                        this.delMod(prev, 'state');

                        this.loader.setMod('state', 'processing');

                        this.elem('current').attr('src', elem.attr('rel'));

                    }
                }
            }
        },

        setCurrFullPhoto: function (e) {
            this.setMod($(e.currentTarget), 'state', 'current');
        }

    }, {

/*        live: function () {
            this.liveBindTo('photo', 'click', function (e) {
                this.setCurrFullPhoto(e);
            });
        }*/

    });

})();

/* ../../desktop.blocks/photoalbums-item/photoalbums-item.js end */
;
/* ../../desktop.blocks/photoalbums/photoalbums.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('photoalbums', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/photoalbums/photoalbums.js end */
;
/* ../../desktop.blocks/ya-site-results-wrapper/ya-site-results-wrapper.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('ya-site-results-wrapper', {

    onSetMod : {

        'js' : function() {
            (function (w, d, c) {

                // load search api
                if (!d.getElementById('site_yandex_net_v2_0_js_all')) {
                    var s = d.createElement('script'), h = d.getElementsByTagName('script')[0];
                    s.type = 'text/javascript';
                    s.id = 'site_yandex_net_v2_0_js_all';
                    s.async = true;
                    s.charset = 'utf-8';
                    s.src = (d.location.protocol === 'https:' ? 'https:' : 'http:') + '//site.yandex.net/v2.0/js/all.js';
                    h.parentNode.insertBefore(s, h);
                }

                (w[c] || (w[c] = [])).push(function () {
                    Ya.Site.Results.init();
                })
            })(window, document, 'yandex_site_callbacks');
        }

    }

}, {



});

})();

/* ../../desktop.blocks/ya-site-results-wrapper/ya-site-results-wrapper.js end */
;
/* ../../studioIDEI.blocks/i-sortable/i-sortable.js begin */
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

/* ../../studioIDEI.blocks/i-sortable/i-sortable.js end */
;
/* ../../studioIDEI.blocks/input/_validate/input_validate_yes.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function (undefined) {

    BEM.DOM.decl({ block: 'input', modName: 'validate', modVal: 'yes'}, {

        onSetMod: {

            'js': function () {
                var _this = this;

                /* RexExp patterns */
                this.validatePatterns = {

                    'email': /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    'string': /.+/
                };

                this.currentPattern = this.validatePatterns[this.params.pattern];
                this.minLength = this.params.minLength;

                setTimeout(
                    function () {
                        _this.validate(_this.domElem.val())
                    },
                    0 );

                // event 'input' is html5 event http://www.w3.org/TR/2012/WD-html5-20121025/single-page.html#event-input-input
                // this -- is block
                this.bindTo('keyup, change, input', function (e) {
                    this.validate(this.domElem.val());
                });
            },

            completed: function (modName, modVal, oldModVal) {
                this.trigger('completed', modVal);
            }

        },



        validate: function (val) {

            var isCompleted = this.currentPattern.test(val);

            /* check min length */
            this.minLength && ( val.length < this.minLength && (isCompleted = false) );

            if (isCompleted) {
                this.setMod('completed', 'yes');

            } else {
                this.setMod('completed', 'no');
            }
        }

    }, {

        /*    live : function() {
         *//* ... *//*
         }*/

    });

})();

/* ../../studioIDEI.blocks/input/_validate/input_validate_yes.js end */
;
/* ../../desktop.blocks/vacancies/vacancies.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('vacancies', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/vacancies/vacancies.js end */
;
/* ../../desktop.blocks/vacancy/vacancy.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('vacancy', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    }

});

})();

/* ../../desktop.blocks/vacancy/vacancy.js end */
;
/* ../../studioIDEI.blocks/map/_provider/map_provider_google.js begin */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'map', modName: 'provider', modVal: 'google'}, {


    onSetMod : {

        'js' : function() {
            this.loadMapsApi();
        }

    },

    /**
     * API loader
     */
    loadMapsApi: function() {

        var _this = this;

        if (!window.google || !window.google.maps) {

            var apiScript = document.createElement('script');
            var apiCallback = 'googlemapsloaded';

            window[apiCallback] = function () {
                _this.onAPILoaded();
            }
            apiScript.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=" + apiCallback;
            document.getElementsByTagName('head')[0].appendChild(apiScript);

        } else {
            this.onAPILoaded();
        }

    },


    onAPILoaded: function () {
        this.initMap();
        this.showMarkers();
    },


    initMap: function () {

        var mapOptions = {
            zoom: this.params.zoom,
            center: new google.maps.LatLng(this.params.center[0], this.params.center[1]),
            mapTypeId: this.params.MapTypeId || google.maps.MapTypeId.ROADMAP
          }

          this.map = new google.maps.Map(this.elem('map')[0], mapOptions);
    },


    /**
     * get Map Markers
     * @returns {Array}
     */
    getMarkers: function () {

        var markersDOM = this.elem('marker');
        var markers = [];

        for (var i = 0, length = markersDOM.length; i < length; i++) {
            markers[i] = this.elemParams($(markersDOM[i]));
            markers[i].domRelElem = markersDOM[i];
        }

        return markers;

    },



    showMarkers: function () {
        this.markers = this.getMarkers();

        for (var i = 0, length = this.markers.length; i < length; i++) {
            this.showMarker(this.markers[i]);
        }
    },


    /**
     * https://developers.google.com/maps/documentation/javascript/overlays?hl=ru#Markers
     * @param options
     */
    showMarker: function (options) {
        var _this = this;


        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(options.center[1], options.center[0]),
            map     : this.map,
            title   : options.title,
            icon: options.icon,
            shadow: options.shadow
        });

        marker.domRelElem = options.domRelElem;


        // Add events listener

        // https://developers.google.com/maps/documentation/javascript/events?hl=ru#UIEvents
        google.maps.event.addListener(marker, 'mouseover', function () {
            marker.setIcon((marker.getIcon()).replace('hovered_no', 'hovered_yes'));
            _this.setMod($(marker.domRelElem), 'hovered', 'yes');
        });


        google.maps.event.addListener(marker, 'mouseout', function () {
            marker.setIcon((marker.getIcon()).replace('hovered_yes', 'hovered_no'));
            _this.setMod($(marker.domRelElem), 'hovered', 'no');
        });


        // TODO: think about refactor this:
        $(marker.domRelElem).hover(
            // mouse enter
            function () {
                marker.setIcon((marker.getIcon()).replace('hovered_no', 'hovered_yes'));
                _this.setMod($(marker.domRelElem), 'hovered', 'yes');
            },
            // mouse leave
            function(){
                marker.setIcon((marker.getIcon()).replace('hovered_yes', 'hovered_no'));
                _this.setMod($(marker.domRelElem), 'hovered', 'no');
            });
    }





















}, {

/*
    live : function() {
        */
/* ... *//*

    }
*/

});

})();

/* ../../studioIDEI.blocks/map/_provider/map_provider_google.js end */
;
