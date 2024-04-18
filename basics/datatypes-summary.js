// primitive & non-primitive datatypes

// Primitive
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

// Non-premitive (Reference)
// Array, Obejects, Functions 

// JS is a dynamically typed language

const score = 100
const outsideTemp = null;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 8345343236776n;
//console.log(typeof bigNumber);

const heros = ["Shaktiman", "Super V", "G One"];
let myObj = {
    name : "Pavankumar",
    age : 22,
}

console.log(typeof heros);

// in js we can store a function in a variable

const myFunction = function(){
    console.log("Hello There..!");
}

console.log(myFunction());