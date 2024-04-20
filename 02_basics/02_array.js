const marvelHeros = ["Thor", "Hulk", "Spidy"]
const dcHeros = ["Flash", "Batman"]

// marvelHeros.push(dcHeros) // array in a array
// console.log(marvelHeros);

// const mdH = marvelHeros.concat(dcHeros)
// console.log(mdH);

// spread ...
const allNewHeros = [...marvelHeros, ...dcHeros]
//console.log(allNewHeros);

const newArr3 = [1,2,3,[4,5,6],7,[8,9,[12,14]]]

const realArr = newArr3.flat(Infinity) // combines arrays to one
//console.log(realArr);


// console.log(Array.isArray("Pavankumar"));
// console.log(Array.from("Pavankumar"));
// console.log(Array.from({name : "Pavankumar"})); // interesting

let score1 = 123
let score2 = 234
let score3 = 345

console.log(Array.of(score1,score2,score3));