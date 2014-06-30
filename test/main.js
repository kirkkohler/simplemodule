'use strict'

// test/main.js

var should = require('should');
var simplemodule = require('../lib/main');

describe('simplemodule', function() {
    describe('with no arguments', function() {
        it('returns an empty array', function() {
            var result = simplemodule();
            result.should.eql([]);
        });
    });
});