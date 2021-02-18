'use strict'; //ES6

// console.log(document.body); // body tag
// console.log(document.element); // whole html
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
//console.log(document.body.lastElementChild);

//console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    } 
    console.log(node);
}
 