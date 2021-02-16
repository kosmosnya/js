'use strict' // ES6

// Вывод количества ключей в обьектах

const anyObjects = {
    name: 'Jan',
    surname: 'Kowalski',
    eyeColor: 'green',
    age: '27',
    other: {
        hair: 'long',
        height: '180'
    }
}

console.log(Object.keys(anyObjects).length); // keys to array