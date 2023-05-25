let arr = [19, 33, 23, 55, 27, 76];

arr.push(14);//add at end
arr.pop();//remove at end
arr.unshift(10);//add at start
arr.shift();//remove at end
arr.reverse();
arr.sort();
console.log(arr);

let x = arr.includes(23);
x = arr.indexOf(55);
x = arr.indexOf(122);//-1
x = arr.slice(1, 5);
x = arr.splice(1, 4);//slice the array and returns deleted array
console.log(x, arr);
