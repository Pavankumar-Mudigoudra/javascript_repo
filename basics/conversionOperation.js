let score = 33;

console.log(typeof score);
console.log(typeof (score));

let valueNumber = Number(score)
console.log(typeof valueNumber);
console.log("-----------")

// examp 2 

let score1 = "35abc";
let valueNumber1 = Number(score1)
console.log(typeof valueNumber1);
console.log(valueNumber1);
console.log("-----------")

// examp 3 

let score2 = null;
console.log(typeof score2);
let valueNumber2 = Number(score2);
console.log(valueNumber2);
console.log("-----------")

// examp 4 

let score3 = undefined;
let valueNumber3 = Number(score3)
console.log(typeof valueNumber3);
console.log(valueNumber3);
console.log("-----------")


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = "mad";

let isBooleanLogedin = Boolean(isLoggedIn)
console.log(isBooleanLogedin)
console.log("-----------")
// any number other the 0 gives true 
// empty string gives false
// string givess true

let someNumber = 21;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);