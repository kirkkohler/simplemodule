'use strict'

// test/main.js

var should = require('should');
var simplemodule = require('../lib/main');

describe('simplemodule', function() {
    describe('with an empty array argument', function() {
        // pass in 'done' as a call back when 'it' function is completed
        it('calls the callback with an empty array', function(done) {
            var result = simplemodule([], function(result) {
                result.should.eql([]);
                done();
            });
        });
    });
});