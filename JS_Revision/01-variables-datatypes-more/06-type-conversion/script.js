//convert string to int
const age = '25';
const height = '100';
const weight = '76';

const newage = parseInt(age);
console.log(newage, typeof(newage))

const newHeight = +height;
console.log(newHeight, typeof(newHeight));

const newWeight = Number(weight);
console.log(newWeight, typeof(newWeight));

//Convert string to float
const num = '42.5';
const newNum = parseFloat(num);

console.log(newNum, typeof(newNum));

const newNumInt = parseInt(num);
console.log("won't convert to float:", newNumInt, typeof(newNumInt));

const newNumFloat = +num;
console.log(newNumFloat, typeof(newNumFloat));

const newNumFloat1 = Number(num);
console.log(newNumFloat1, typeof(newNumFloat1));

//convert number to string
const newNumString = newNumFloat.toString();
console.log(newNumString, typeof(newNumString));

const stringNum = String(newNumFloat1);
console.log(stringNum, typeof(stringNum));

const stringNum1 = 5+'';
console.log(stringNum1, typeof(stringNum1));

//convert number to boolean
let truthy = 1;
truthy = Boolean(truthy);

console.log(truthy, typeof(truthy));