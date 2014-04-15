// APP.FizzBuzz = (function(){})();
define('FizzBuzz', ['Fizz', 'Buzz'], function(Fizz, Buzz) {
    console.log('Fizz Buzz app');

    var testNumber = function(num){
        var n = num || 1,
            res = [];

        if(Fizz.validate(n)) {
            res.push(Fizz.getValue());
        }

        if(Buzz.validate(n)) {
            res.push(Buzz.getValue());
        }

        if(!res.length) {
            res.push(n);
        }

        return res.join('');
    };

    var print = function(num, join){
        var n = num || 1,
            glue = join|| ',',
            res = [];

        for (var i = 1; i <= n; i++) {
            res.push(testNumber(i));
        }

        return res.join(glue);
    };

    return {
        testNumber : testNumber,
        print : print
    };
});