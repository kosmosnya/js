'use strict' //ES6

const array = [2, 13, 3, 6, 8];

array.sort(compareNum);
console.log(array);
// array[99] = 0;

// console.log(array.length); // length показывает длинну массива по определнию - последний индекс + 1

// функция сортировки чисел(массива)

function compareNum(a, b) {
    return a - b;
}


// // array.pop(); // deletes last array element
// // array.push('test'); // adds last array element

// console.log(array);

// перебор через for

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]); // обращение к каждому элементу до конца массива
// }

// перебор через for of

// for (let value of array) {
//     console.log(value);    
// }

// гибкий перебор методом forEach мигусы - нельзя использовать continue и break

array.forEach(function(item, i, array) {
    console.log(`${i}: ${item} внутри массива ${array}`);
}); 

// Создание массива на основании строк

// const str = prompt('', '');
// const products = str.split(', '); // сплит через точку с пробелом
// products.sort(); // сортировка элементов в нутри массива (как строки)
// console.log(products.join('; ')); // вывод элементов через ;


