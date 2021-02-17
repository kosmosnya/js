'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      wrapper = document.querySelector('.wrapper'),
      circles = document.getElementsByClassName('circle'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');



// box.style.backgroundColor = 'black';
// box.style.width = '500px';

box.style.cssText = `background-color: black; width: 500px;`;


btns[1].style.borderRadius = '50%';

circles[0].style.backgroundColor = 'red';

// for ( let i = 0; i < hearts.length; i++) {
//     hearts[i].style.cssText = 'background-color: purple;';
// }


hearts.forEach(item => {
    item.style.backgroundColor = 'purple';
});

const div = document.createElement('div'); // exists only in js 

// const text = document.createTextNode('text');

div.classList.add('black'); // adds class for div

// document.querySelector('wrapper').append(div); // if uses only one time

// wrapper.prepend(div); // adds div on the start of wrapper

wrapper.append(div); // adds div on the end of wrapper
// wrapper.appendChild(div);

// hearts[0].before(div);  // adds div before first heart

// hearts[0].after(div);  // adds div after first heart 

// wrapper.insertBefore(div, hearts[1]); // inserts div before hearts[1]  // old type

// circles[0].remove(); // removes element

// wrapper.removeChild(hearts[1]);   // old type

// hearts[0].replaceWith(circles[0]); // replaces first heart with first circle

wrapper.replaceChild(circles[0], hearts[0]); // old type

 div.innerHTML = '<h1>Hello!</h1>';
//  div.textContent = 'Hello!'; // doesnt work with html structures like h1, etc

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
 
