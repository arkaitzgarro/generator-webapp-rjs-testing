// APP.FizzBuzz = (function(){})();
define('FizzBuzz', ['Fizz', 'Buzz'], function() {
    console.log('Fizz Buzz app');

    var validators = [];

    for (var i = 0; i < arguments.length; i++) {
        // TODO: Check if is instance of Validator
        if(arguments[i].hasOwnProperty('validate')) {
            validators.push(arguments[i]);
        }
    }

    var testNumber = function(num){
        var n = num || 1,
            res = [];

        for (var i = 0; i < validators.length; i++) {
            if(validators[i].validate(n)) {
                res.push(validators[i].getValue());
            }
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