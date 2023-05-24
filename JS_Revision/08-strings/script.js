let quote = "In three words I can sum up everything I've learned about life: it goes on.     ";

console.log(quote.length)
console.log(quote.toUpperCase())
console.log(quote.toLowerCase());
console.log(quote[0]);
console.log(quote.charAt(1));
console.log(quote.indexOf(':'));
console.log(quote.substring(64));
console.log(quote.substring(64, 74));
console.log(quote.split(':'));
console.log(quote.slice(64));
console.log(quote.trim());
console.log(quote.replace('sum', 'add'));
console.log(quote.includes('life'));

//Challenge: capitalize the first letter of a word

let name = "akbar";
firstChar = name[0].toUpperCase();
console.log(firstChar+name.substring(1));