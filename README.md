# simpleArgsParser
zero dependency

# example

``` js
var simpleArgsParser = require('simpleArgsParser').simpleArgsParser;
var argv = new simpleArgsParser(process.argv.slice(2));
console.log(argv.getArgs());
```

```
$ node test/test.js --hello=world --hi=world
{ hello:'world',hi:'world' }
```

