'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button'); // always creates HTMLCollection pseudoarray

console.log(btns[1]);


const circles = document.getElementsByClassName('circle'); // also creates HTMLCollection pseudoarray

console.log(circles);


const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('div'); // looks for first selector 

console.log(oneHeart); 