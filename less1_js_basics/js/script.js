
"use strict"; // ES6

let number = 5; // Обьявление переменной

number = 10; 


// Начало структуры(struct c++)

const HUMAN = {
    name: 'Jan',
    surname: 'Kowalski',
    age: 19,
    gender: 'Male',
    isMarried: false
}

// Взаимодействие с юзером

 // alert("Hello World!");

// const result = confirm("Are u here?"); // confirm alert 

// const answer = prompt("How old are you?", "");
// const answer = +prompt("How old are you?", ""); +prompt (динамическая типизация)
// console.log(typeof(answer)); // Вывод с типом


const arrayEmpty = []; // пустой массив

arrayEmpty[0] = 10;
arrayEmpty[1] = 20;
arrayEmpty[2] = {};
arrayEmpty[3] = 30;

console.log(arrayEmpty);

let array = ['banana', 'orange', 'apple'] // массив (array, tablica)

// Вывод данных в консоль

console.log(number, ", isMarried =", HUMAN.isMarried, ", arrayElement =", array[2]); 


// Вывод данных на страницу (стирает все)

document.write('Hello world!');



