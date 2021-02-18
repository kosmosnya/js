'use strict'; //ES6

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// doesnt used in real projects

// btn.onclick = function() {
//     alert('Hello!');
// };


let i = 0;
const fooDelete = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', fooDelete);
    // }
};

btns.forEach(element => {
    element.addEventListener('click', fooDelete, {once: true});
});


// hover event
// btn.addEventListener('click', fooDelete);
// overlay.addEventListener('click', fooDelete);

// click event
// btn.addEventListener('click', () => {
//     alert('Hi!'); 
// });

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();  // prevent default events
    console.log(event.target);
});

