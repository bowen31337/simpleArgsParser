# simpleArgsParser
zero dependency,simple arguments parser, written in typescript with functional programming style.

# example

``` js
var simpleArgsParser = require('simpleArgsParser').simpleArgsParser;
var argv = new simpleArgsParser(process.argv.slice(2));
console.log(argv.getArgs());
```
##ES6
``` js
import {simpleArgsParser} from 'simpleArgsParser';
const argv = new simpleArgsParser(process.argv.slice(2));
console.log(argv.getArgs());
```
```
$ node test/test.js --hello=world --hi=world
{ hello:'world',hi:'world' }
```

