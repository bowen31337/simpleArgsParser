# simpleArgsParser
zero dependency,simple arguments parser, written in typescript with functional programming style.

# example

``` js
var argv = require('simpleArgsParserst').argv;
var argsObj = argv(process.argv.slice(2));
console.dir(argsObj);
```
##ES6
``` js
import {argv} from 'simpleArgsParser';
const argsObj = argv(process.argv.slice(2));
console.dir(argsObj);
```
##testing
``` js
$ node test/test.js --hello=world --hi=world
{ hello:'world',hi:'world' }
```

