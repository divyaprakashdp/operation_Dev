//ways to declare a variable
//var, let, const
//refer this -> https://www.educative.io/answers/difference-between-var-let-and-const-keyword-in-javascript

var firstName = "Divya";
console.log(firstName)

let state = "Bihar";
console.log(firstName, state)

const city = "Bangalore";
console.log(firstName, city)

//Scope
// var - function Scope
// let - block Scope
// const - block scope

//exzmple

function runner(){
    var action = 'run';

}

if(true){
    var fullname = 'Shane'
    let age = 100;
    const height = 180;
    console.log(age, height);
}

console.log(fullname);
// console.log(action);//error
// console.log(age, height);//error


// Hoisting -declaration before defining
// var - allowed
// let - not allowed
// const - not allowed

varHoist = "Hoisting in var";
console.log(varHoist);
var varHoist;

// letHoist = "Hoisting in let";
// console.log(letHoist);
// let letHoist;

//Compilation error
// constHoist = "Hoisting in const";
// console.log(constHoist);
// const constHoist;

// Reassigning value
// var - allowed
// let - allowed
// const - not allowed

firstName = 'Kaliya';
state = 'MP';
// city = "Bhopal"; //error

console.log(firstName, state)

// Redeclaration
// var - allowed
// let - not allowed
// const not allowed