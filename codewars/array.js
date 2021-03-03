function solution(str){
     let newArr = str.split('').reverse().join('');
     console.log(newArr);
     return newArr;
}
console.log(solution('world'));

// [w, o, r, l, d]