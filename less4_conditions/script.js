"use strict" // ES6

// Тема Условия

    if (4 == 9) {
        console.log('equal!');
    }   else {
        console.log('unequal!');
    }

    let number = 50;

    if (number < 49) {
        console.log('true!');
    } else if (number = 50) {
        console.log('equal!');
    }

    const num = 50;

    (num === 50) ? console.log('ok!') : console.log('error'); 
    // условие -> if true действие -> if false действие

    const check = 50;

    switch (check) {
        case 49: // if num == 49
            console.log('false');
            break;
        case 100:
            console.log('false');
            break;
        case 51:
            console.log('true');
            break;
        default:
            console.log('Не в этот раз');
            break;
            
    }