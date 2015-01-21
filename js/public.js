/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-12-29
 * Time: 上午9:52
 * To change this template use File | Settings | File Templates.
 */

var type = (function() {
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
})();
var log = function() {
    console.log.apply(console, arguments);
};
var dir = function() {
    console.dir.apply(console, arguments);
};
var print = (function() {
    var textarea;
    var create = function() {
        textarea = textarea = document.createElement('textarea');
        textarea.id = 'print_r';
        textarea.style.cssText = 'position:absolute;right:0;bottom:0;z-index:9999;width:100%;height:200px';
        document.body.appendChild(textarea);
    };

    return function() {
        !textarea && create();
        [].slice.call(arguments).forEach(function(item) {
            textarea.value += item + '\n';
        });
    }
})();