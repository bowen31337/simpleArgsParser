var expect = require('chai').expect;
var argv = require('../dist').argv;
var result = argv(process.argv.slice(2));

describe('simpleArgsParser', () => {
    describe('all', () => {
        it('should be an object', () => {
            const isObject = (obj) => typeof obj === 'object';
            expect(result).to.satisfy(isObject);

        });
    });
});