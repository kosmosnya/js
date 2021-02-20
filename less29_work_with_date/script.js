'use strict';

// const now = new Date('2021-02-20');
// new Date.parse('2021-02-20');

// console.log(now.setHours(18, 40)); // set hour, 40 - min
// console.log(now);


// console.log(now.getFullYear()); // year
// console.log(now.getMonth()); // month
// console.log(now.getDate()); // day
// console.log(now.getDay()); // день недели
// console.log(now.getUTCHours()); // UTC time

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);