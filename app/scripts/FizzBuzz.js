define('FizzBuzz', [], function() {
    console.log('Fizz Buzz app');

    var fizzBuzz = function(num){
        var n = num || 1;

        if(n) {
            return n;
        }
    };

    return {
        fizzBuzz : fizzBuzz
    };
});