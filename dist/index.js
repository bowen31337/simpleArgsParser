"use strict";
var parser_1 = require("./parser");
function argv(args) {
    var parser = new parser_1.simpleArgsParser(args);
    return parser.getArgs();
}
exports.argv = argv;
