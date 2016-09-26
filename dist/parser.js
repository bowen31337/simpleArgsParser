"use strict";
var simpleArgsParser = (function () {
    function simpleArgsParser(args) {
        var _this = this;
        this.getArgs = function () {
            var result = {};
            _this.args.filter(getValidArg).forEach(function (arg) {
                var args = getValidArg(arg);
                try {
                    result[args[1]] = eval(args[2]);
                }
                catch (e) {
                    result[args[1]] = args[2];
                }
            });
            return result;
        };
        this.args = args;
    }
    return simpleArgsParser;
}());
exports.simpleArgsParser = simpleArgsParser;
var getValidArg = function (arg) { return arg.match(/^--([^\s=]+)\s*=\s*([^\s]*)$/); };
