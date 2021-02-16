'use strict' // ES6


function narcissistic(value) {
    while (value != 0) {
        let sum = 0;
       let valueCount = value.toString().length
       let digit = (value % 10);
       value = Math.floor(value / 10);
       sum = Math.pow(digit, valueCount);
       console.log(digit, sum);
    }
}
narcissistic(12345);
