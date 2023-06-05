const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearAll = document.getElementById('clear')

function addItem(e){
    e.preventDefault();

    const newItem = itemInput.value;

    //validate input
    if(newItem.trim() === ''){
        alert('Item name cannot be empty');
        itemInput.value="";
        return;

    }

    //create an item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const btn = createButton('remove-item btn-link text-red');

    li.appendChild(btn);

    itemList.appendChild(li);
    itemInput.value="";
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    }
}

function removeAllItem(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}

// event listener
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearAll.addEventListener('click', removeAllItem);