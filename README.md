# simpleArgsParser
zero dependency,simple arguments parser, written in typescript with functional programming style.

[![Build Status](https://travis-ci.org/bowen31337/simpleArgsParser.svg?branch=master)](https://travis-ci.org/bowen31337/simpleArgsParser)
[![codecov](https://codecov.io/gh/bowen31337/simpleArgsParser/branch/master/graph/badge.svg)](https://codecov.io/gh/bowen31337/simpleArgsParser)


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
$ npm test
```
