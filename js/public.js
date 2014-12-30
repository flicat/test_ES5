/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-12-29
 * Time: 上午9:52
 * To change this template use File | Settings | File Templates.
 */

var Public = {
    type: (function() {
        var toString = function(o) {
            return Object.prototype.toString.call(o);
        };
        var type = function(o) {
            return toString(o).match(/\[object (.*?)\]/)[1].toLowerCase();
        };
        ['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean',
            'Function', 'RegExp', 'Element', 'NaN', 'Infinite'].forEach(function (t) {
                type['is' + t] = function (o) {
                    return type(o) === t.toLowerCase();
                };
            });

        return type;
    })()
};

// RequireJS || SeaJS
if (typeof define === 'function') {
    define(function(require, exports, module) {
        module.exports = Public;
    });
// NodeJS
} else if (typeof exports !== 'undefined') {
    module.exports = Swipe;
}