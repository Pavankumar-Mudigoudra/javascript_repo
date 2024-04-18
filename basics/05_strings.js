const name = "Pavankumar-bm"
const repos = 10

// console.log(name + repos);

// string interpolation means using backticks to writing code

//console.log(`my name is ${name} and i have around ${repos} repository in my GitHub`);

// another way to declare a string
const myName = new String('Pavankumar-b-m');
// from this we can access key value and also prototypes

// console.log(myName[2]);
// console.log(myName.__proto__); //object

//console.log(myName.toUpperCase());
//console.log(myName.charAt(1));
//console.log(myName.indexOf('v'));

const newString = myName.substring(0,5)
//console.log(newString);

const anotherString = myName.slice(4,-1)
//console.log(anotherString);

const newStr = " Natoram   "
//console.log(newStr);
//console.log(newStr.trim())

const url = "http://pavankumarbm.com/pavankumar%20b%20mudigoudra"
//console.log(url.replace('%20','-'));
//console.log(url.replaceAll('%20','-'));

//console.log(url.includes('pavankumar'));

console.log(myName.split('-'));
