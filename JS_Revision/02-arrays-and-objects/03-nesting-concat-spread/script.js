const fruits = ['apple', 'banana', 'pear'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

fruits.push(berries);
console.log(fruits);
console.log(fruits[3][1]);

let x = [1, 2, 3];
let y = [4, 5, 6];

let z = x.concat(y);

z = [...x, ...y];
console.log(z);

const arr = [1, [2, 3], 4, 5, [6, 7]];
x = arr.flat();

x = Array.isArray(fruits);

x = Array.isArray("hello");//false

x = Array.from('12345');
console.log(x);

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);
console.log(x);
