'use strict';

function sumTwoSmallestNumbers(numbers) {
    numbers.sort();
    let firstInt = numbers[0],
        secondInt = numbers[1];
    console.log(numbers);
     return firstInt + secondInt; // возвращает значение (24)

}

let res = sumTwoSmallestNumbers([5, 8, 10, 7, 14]); // возвращает значение из функции
res = res - 4; // 24 - 4 = 20

console.log(res); // вывод переменной

