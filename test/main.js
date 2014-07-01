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

    describe('with a single element array', function() {
        it('calls the callback with a single element array', function(done) {
            var result = simplemodule([1], function(result) {
                result.should.eql([1]);
                done();
            });
        });
    });

    describe('with an unsorted two element array', function() {
        it('calls the callback with a sorted two element array', function(done) {
            var result = simplemodule([2, 1], function(result) {
                result.should.eql([1, 2]);
                done();
            });
        });
    });

});