const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearAll = document.getElementById('clear');
const filter = document.getElementById('filter');

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
    checkUI();
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
    checkUI();
}

function removeAllItem(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}

function filterItems(e){
    const items = itemList.querySelectorAll('li');
    const filterText = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if(itemName.indexOf(filterText) != -1){
            item.style.display = 'flex';
        }else{
            item.style.display = 'none'
        }
    })
}

function checkUI(){
    const items = itemList.querySelectorAll('li');
    if(items.length===0){
        filter.style.display = 'none';
        clearAll.style.display = 'none';
    }else{
        filter.style.display = 'block';
        clearAll.style.display = 'block';
    }
}

// event listener
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearAll.addEventListener('click', removeAllItem);
filter.addEventListener('input', filterItems);

checkUI();
filterItems();