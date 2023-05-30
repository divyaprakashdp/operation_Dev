console.log(window.document)
console.log(document)
console.log(document.all)

console.log(document.title);
console.log(document.head);

console.log(document.domain);
console.log(document.url);

console.log(document.forms);

//get or change content

const title = document.getElementById("app-title");

console.log(title.textContent);
title.textContent = "Todo List";
console.log(title.textContent);

//change Style
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

//document.querySelector(cssSelector)
console.log(document.querySelector('h1'));

//querySelectorAll() => returns array 

const listItems = document.querySelectorAll('.item');
listItems.forEach(item => console.log(item.textContent))

listItems[0].style.color = 'blue';

//document.getElementsByClassName

const itemsNodeList = document.getElementsByClassName('item');

// itemsNodeList.forEach(item => console.log(item));//error

const itemArray = Array.from(itemsNodeList);
itemArray.forEach(item => console.log(item.textContentt));


//Traversing through dom - Elements
const parent = document.querySelector('.parent');

console.log(parent.children);
console.log(parent.children[0])
console.log(parent.children[0].className);
console.log(parent.children[0].nodeName);

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// get parent from children
const child = document.querySelector('.child')
console.log(child.parentElement)

//sibling elements
const secondChild = document.querySelector('.child:nth-child(2)');
console.log(secondChild);

const prevSibling = secondChild.previousElementSibling;
prevSibling.style.color = 'blue';

const nextSibling = secondChild.nextElementSibling;
nextSibling.style.color = 'purple'