const cookie = [
    {
        domain: 'test.com',
        name: 'cid',
        value: '6678a552c'
    },

    {
        domain: 'test.com',
        name: 'auth',
        value: '6567act78a7ca78578ca875ca75ca75ca7c'
    },

    {
        domain: 'test.com',
        name: 'token',
        value: '341ca4c2a4c27a4c27a5c5ac38a53c86a5c386a5c3'
    },
];

//for loop
for(let i = 0;i<cookie.length;i++){
    console.log(cookie[i].name);
}

//for of used for arrays
for(item of cookie){
    console.log(item.value);
}

//for in used for objects
for(const key in cookie[0]){
    console.log(cookie[0][key]);
}

//forEach
cookie.forEach(objects => console.log(objects));

//filter
const CID_Object = cookie.filter(item => item.name==='cid');

console.log(CID_Object[0]);

//map returns an array 
const updatedCookie = cookie.map(item => item.domain='chatur.com');

console.log(updatedCookie);

console.log(cookie)

const arr = [1, 2,3, 4];

const reducedSum = arr.reduce((prev, curr) => prev+curr, 0);
console.log(`ReducedSum: ${reducedSum}`);


// // ternary
// const cidVal = 