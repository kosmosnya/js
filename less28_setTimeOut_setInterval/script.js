'use strict';

const btn = document.querySelector('.btn');
let timerId,
    i = 0;



function myAnimation() {
    const square = document.querySelector('.box');
    let  position = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (position == 300) {
            clearInterval(id);
        }   else {
            position++;
            square.style.top = position + "px";
            square.style.left = position + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);



// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     i++;
//     console.log('text');
// }


// let id = setTimeout(function log () {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);