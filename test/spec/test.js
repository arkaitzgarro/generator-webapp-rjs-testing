/* global describe, it */
require.config({
    baseUrl: '../../app/scripts',
    nodeRequire: require
});

(function () {
    'use strict';

    describe('FizzBuzz', function () {
        var FizzBuzz;

        before(function(done){
            require(['FizzBuzz'], function(fb){
                FizzBuzz = fb;
                done();
            });
        });

        describe('FizzBuzz main method', function () {
            it('Should return n when the number is not multiple of 3 or 5', function () {
                assert.equal(1, FizzBuzz.fizzBuzz(1));
                assert.equal(2, FizzBuzz.fizzBuzz(2));
                assert.equal(4, FizzBuzz.fizzBuzz(4));
                assert.equal(7, FizzBuzz.fizzBuzz(7));
                assert.equal(8, FizzBuzz.fizzBuzz(8));
                assert.equal(11, FizzBuzz.fizzBuzz(11));
                assert.equal(13, FizzBuzz.fizzBuzz(13));
            });
        });
    });
})();
