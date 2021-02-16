"use strict"; //ES6

// OOP in JavaScript

let str = 'text';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!');
    }
};

const john = Object.create(soldier);

// const john  = {
//     health: 100
// };

// Устаревший формат

// john.__proto__ = soldier;

// Новый формат

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);

john.sayHello();



