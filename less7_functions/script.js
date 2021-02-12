"use strict" // ES6

let num = 20; // global variable

function showFirstMessage(text) {
    console.log(text);
    let num = 10; // local variable
    console.log(num);
}

showFirstMessage('Hello world!');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 10));
console.log(calc(5, 6));
console.log(calc(10, 2));


function ret() {
    let num = 50;
    return num; // Вывод переменной наружу функции 
}

let anotherNum = ret();
console.log(anotherNum);

// Функциональное выражение

const logger = function() {
    console.log('Hello!');
};

logger();

// Стрелочная функция

const calc = (a, b) => { return a + b };

function example(a, b) {
    a = 5;
    b = 10;
    return ( a + b );
}

console.log(example());