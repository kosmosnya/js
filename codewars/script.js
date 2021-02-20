'use strict' // ES6

var uniqueInOrder = function(iterable){
    let res = iterable.split("");
    let finalArray = [];
   for (let i = 0; i < iterable.length; i++) {
     if(res[i] != res[i+1]) {
        finalArray.push(res[i]);
     } else {
         res.splice(i, 1);
     }
     
}
console.log(finalArray);
};

uniqueInOrder('AAAABBBCCDAABBB'); 