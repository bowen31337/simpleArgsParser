var simpleArgsParser = require('../dist').simpleArgsParser;
var argv = new simpleArgsParser(process.argv.slice(2));
console.dir(argv.getArgs());
