const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearAll = document.getElementById("clear");
const filter = document.getElementById("filter");

function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }

  return itemsFromStorage;
}

function displayItems(){
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDOM(item));
    checkUI();
}

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  //validate input
  if (newItem.trim() === "") {
    alert("Item name cannot be empty");
    itemInput.value = "";
    return;
  }

  addItemToDOM(newItem);
  addItemToLocalStorage(newItem);
  itemInput.value = "";
  checkUI();
}

function addItemToDOM(item) {
  //create an item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const btn = createButton("remove-item btn-link text-red");

  li.appendChild(btn);

  itemList.appendChild(li);
}

function addItemToLocalStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item);

  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function onClickItem(e){
    if (e.target.parentElement.classList.contains("remove-item")) {
        removeItem(e.target.parentElement.parentElement)
      }
}

function removeItem(item) {
 if(confirm('Are you sure?')){
    item.remove();
    removeItemFromStorage(item.textContent);
 }
  checkUI();
}

function removeItemFromStorage(item){
    let itemsFromStorage = getItemsFromStorage('items');

    //Filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter(entry => entry != item);

    //Re-set to localStorage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function removeAllItem() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  localStorage.remove('items');
  checkUI();
}

function filterItems(e) {
  const items = itemList.querySelectorAll("li");
  const filterText = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(filterText) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function checkUI() {
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    filter.style.display = "none";
    clearAll.style.display = "none";
  } else {
    filter.style.display = "block";
    clearAll.style.display = "block";
  }
}

function init() {
  // event listener
  itemForm.addEventListener("submit", addItem);
  itemList.addEventListener("click", onClickItem);
  clearAll.addEventListener("click", removeAllItem);
  filter.addEventListener("input", filterItems);
    document.addEventListener("DOMContentLoaded", displayItems)
  checkUI();
  filterItems();
}

init();
