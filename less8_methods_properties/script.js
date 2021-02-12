"use strict"; // ES6


const str = "test";
const array = [1, 2, 4];

console.log(str.length); // amount of symbols in string
console.log(array.length); // amount of elements in array

console.log(str[2]); // output symbol on 2 index (s)

console.log(str.toUpperCase()); // method to upper case (do not changes var)
console.log(str);

console.log(str.toLowerCase()); // method to lower case (do not changes var)
console.log(str);


const FRUIT = 'Some fruit';
console.log(FRUIT.indexOf('fruit')); // output string position (5), can find in string


const LOGG = 'Hello world!';

//methods to cut string

console.log(LOGG.slice(6, 11)); // cut string method


console.log(LOGG.substring(6,11)); // do not accept negative numbers 

console.log(LOGG.substr(6, 5)); // 1 value is start of method 2 is lenght


//math methods

const NUM = 12.2;

console.log(Math.round(NUM)); // float ot integer

const TEST = "12.2px";

console.log(parseInt(TEST)); // string to integer

console.log(parseFloat(TEST)); // string to float