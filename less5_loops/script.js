"use strict"  // ES6

let num = 50;

// while loop

while (num <= 55) {
    console.log(num);
    num++;
}

// do loop

do {
    console.log(num);
    num++;
}
while (num <= 55);

// for loop

let defValue = 50;

for ( let i = 1; i <= 10; i++) {
    console.log(defValue);
    defValue++;
}

// for loop with break

let defValue = 50;

for ( let i = 1; i <= 10; i++) {
    if (i == 6) {
        break;
    }
    console.log(i);
}

