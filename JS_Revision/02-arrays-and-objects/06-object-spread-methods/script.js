const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

let x = todo;

console.log(x)

const obj1 = {a:1, b:2};
const obj2 = {c:1, d:4};

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = {...obj1, ...obj2};
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2);
console.log(obj5);

//usually cookie or api response are array of objects

const todos = [
    {id:1, name:'buy milk'},
    {id:2, name:'Cook food'},
    {id:3, name:'Read book'},
];

x = todos[0].name;//returns first
console.log(x);

x = todo.length;//there is no such function
console.log(x);

x = Object.keys(todos);
console.log(x);

x = Object.keys(todos).length;
console.log(x);

x = Object.entries(todo);
console.log(x);

x = todo.hasOwnProperty('age');
console.log(x);