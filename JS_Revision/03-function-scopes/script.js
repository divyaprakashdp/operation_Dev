//simple function
function test(){
    console.log("hello");
}

//call function
test();

//parameterized function
function add(num1, num2){
    return num1+num2;

    console.log("after return");//of no use
}

console.log(add(12, 13));

const sum = add(10, 20);

console.log(sum);

//default param
function registeredUser(user='guest'){
    return `${user} to be registered!`
}

console.log(registeredUser('Dalai Lama'));
console.log(registeredUser());

//Rest Params
function addArray(...num){
    let total=0;
    for(const n of num){
        total +=n;
    }
    return total;
}

console.log(addArray(1, 2, 3));

//object as params
function userDescription(user){
    return `${user.name} is a ${user.age} years old ${user.sex}. S/He lives in ${user.city}`
}

const user = {
    name : 'Kalki',
    age : 27,
    sex : 'female',
    city: 'Malibu'
}
console.log(userDescription(user));

//array as params
function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * 10);

    const item = arr[randomIndex];

    console.log('Random Item: '+item);
}

getRandom(['apple', 'banana', 'cherry', 'grape', 'jackfruit', 'kiwi', 'lemon', 'melon', 'orange','pear']);

console.log(addDollarSign(93));//hoisting as it calls the function declared later
//function declaration
function addDollarSign(value){
    return '$'+value;
}

console.log(addDollarSign(43));

//function expression 
const addPlusSign = function(value){
    return '+'+value
};

console.log(addPlusSign(55));//hoisting is not possible for expression


//Arrow function syntax
const multiply = (a, b) => {
    return a*b;
};

console.log(multiply(12, 10))

// implicit return
const subtract = (a, b) => a-b;
console.log(subtract(16, 2));

// can leave () for a single param function
const double = a => a*2;
console.log(double(6));