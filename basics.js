"use strict";
function add(n1, n2, showResult, phrase) {
    // console.log(typeof n1 === 'number' && typeof n2 === 'number');
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 23;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
