'use strict' // ES6


const obj = new Object(); // not used

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {      //method in object
        console.log('Test');
    }
}

options.makeTest();

//object destructuring

const {border, bg} = options.colors;
console.log(border);

// console.log(options.name);

// delete options.name;

// console.log(options);

// перебор обьектов и взаимодействие с ними IMPORTANT!!

// let count = 0;

// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//        for ( let i in options[key]) {
//         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         count++;
//        }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         count++;
//     }
// }

// console.log(count);


// Object.keys() method keys to array

// console.log(Object.keys(options).length);