var argv = require('../dist').argv;
var result = argv(process.argv.slice(2));
console.dir(result);
