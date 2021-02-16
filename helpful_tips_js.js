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


// сортировка массивов

Для сортировки чисел
в порядке возрастания (1, 2, 3...) : function(a, b){return a - b;}
в порядке убывания (9, 8, 7...) : function(a, b){return b - a;}

Сортировка строк
в порядке возрастания (A, B, C...) : function(a, b){return a > b? 1: -1;}
в порядке убывания (Z, Y, X...): function(a, b){return b > a? 1: -1;}

Чтобы отсортировать объекты , добавьте их в массив,
а затем отсортируйте по ключу: function(a, b){return a.key - b.key;}