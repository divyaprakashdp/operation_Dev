
//Array Literal
const numbers = [12, 34, 56, 78];
console.log(numbers);

//Array Constructor
const fruits = new Array('apple', 'banana', 'cherry', 'grape');
console.log(fruits);

//access array elements
console.log(`First fruit in array is: ${fruits[0]}`)

//arrays in js are heterogenous
let x = [12, 'hello', true, null];

console.log(`length of x = ${x.length}`);

x=fruits;
console.log(x)
x[2] = 'peach';//replaced 3rd fruit
console.log(x);

x.length = 2
console.log(x);//length reduced to 2

