const myArr = [1,2,3,4,5] // resizable
//console.log(myArr[2]);

//method 2
const myArr2 = new Array(2,5,4,7,8,6)
//console.log(myArr2);

// Array methods
// myArr.push(6)
// myArr.pop()

// myArr.unshift(9) // adding at the starting
// myArr.shift() // removing from front


// console.log(myArr.includes(4)); // boolean o/p
// console.log(myArr.indexOf(4)); 

const newArr = myArr.join() // conv to string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

// slice , splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3) // will manipulate the values and removes them
console.log(myn2);
console.log("C ",myArr);



