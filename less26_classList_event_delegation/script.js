'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));

//console.log(btns[1].classList.add('red', 'second'));
//console.log(btns[0].classList.remove('blue'));
//console.log(btns[0].classList.toggle('blue')); // deletes class if it exists or adds if doesnt

// if (btns[1].classList.contains('red')) { // check if class exists
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if(!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    console.log(btns[1].classList.toggle('red')); // doesnt good on complicated scripts , better to use if 
});

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.red')) {
        console.log('Hello!');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);