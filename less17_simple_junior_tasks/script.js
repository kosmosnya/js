'use strict'; //ES6

// let x = 5; console.log(x++)  // answer = 5

// [] + false - null + true 

console.log(typeof([] + false)); // [] - empty array is always string; answer - false
console.log([ ] + false - null + true); // answer - NaN;

let y = 1; 
let x = y = 2; 
console.log(x); // answer = 2

console.log([] + 1 + 2); // string + 1 + 2 = 12

console.log('1'[0]); //string by index

console.log(2 && 1 && null && 0 && undefined); // from left to right, when && finds null it returns null

console.log(!!(1 && 2) === (1 && 2)); // !! converts value to boolean

//          false   <- 3   -> 3
console.log(null || 2 && 3 || 4); // starts from &&, OR ends on true

let a = [1, 2, 3],
    b = [1, 2, 3];

console.log(a == b);

// is not equal


console.log('Ёжик' > 'яблоко'); // false

console.log(0 || "" || 2 || undefined || true || false); // OR ends on true(2)