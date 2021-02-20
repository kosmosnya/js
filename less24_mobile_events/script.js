'use strict'; //ES6

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        //  console.log(e.touches); // touches
        //  console.log(e.targetTouches); // targetTouches
        //   console.log(e.changedTouches); // changedTouches
    });


    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX); 
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('end'); 
    // });














});