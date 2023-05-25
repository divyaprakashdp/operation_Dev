const person = {
    name: 'Hari Prasad',
    age: 45,
    isAdmin: true,
    address: {
        street: '123 main st',
        city: 'Varanasi',
        state: 'UP'
    },
    hobbies: ['music', 'sports']
};

console.log(person);

let x = person.age;
x = person.address.state;
x = person.hobbies[0];
console.log(x);
person.isAdmin = false;
delete person.age;
console.log(person);

person.greet = function(){
    console.log(`Hi, my name is ${this.name}`);
}

person.greet();

console.log(person);