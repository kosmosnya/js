'use strict';


// Dynamic typing

// To string

// 1)  (uncommon)

console.log(typeof(String(4)));

// 2)  (common)

console.log(typeof(5+''));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// To number conversion

// 1) uncommon

console.log(typeof(Number('4')));

// 2) common 

console.log(typeof(+'5'));

// 3) 

console.log(typeof(parseInt('15px', 10)));


let answer = +prompt('example', ''); // string to number

// To boolean

// 0, false, null, '', undefined, NaN  - always false in boolean


// To true (common)

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// uncommon

console.log(typeof(Boolean('4')));

// uncommon

console.log(typeof(!!'44444'));
