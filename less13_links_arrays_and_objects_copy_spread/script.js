'use strict'; //ES6


// let a = 5,
//     b = a;


// b = b + 5;

// console.log(b);
// console.log(a);


// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // передача ссылки на обьект 

// copy.a = 10;

// console.log(copy);
// console.log(obj);


// Функция поверхностной копии

function copy(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key]; // копирование свойств с mainObj к objCopy
    }
    return objCopy; // вывод наружу для взаимодействия
}

// обьект для копирования

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

const newNumbers = copy(numbers); // вызов функции копирования
newNumbers.a = 10; // пример изменения обьекта первого уровня
// newNumbers.c.x = 10; // !!! не работает на поверхностной копии !!! (значение меняется в двух обьектах)
// console.log(newNumbers); // копия обьекта
// console.log(numbers); // неизмененный главный обьект




const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add)); // соединение обьектов(numbers, add) и создание независиммой поверхностной копии

// Создание поверхностной копии через Object.assign

const clone = Object.assign({}, add);

clone.d = 20

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray; // сылка на массив (оба массива будут изменяться)

// Копирование массива через slice()
const newArray = oldArray.slice(); // копирование массива в массив

newArray[1] = 'testphrase';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; // spread оператор

console.log(internet);

// передача элементов с массива в функцию через Spread ...

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

}

const num = [2, 5, 7];

log(...num);

// Поверхностное копирование через Spread

const array = ['a', 'b'];

const arrayCopy = [...array];

console.log(arrayCopy);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);