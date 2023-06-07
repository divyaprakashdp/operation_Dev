const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearAll = document.getElementById("clear");
const filter = document.getElementById("filter");
let isEditMode = false;
const formSubmitBtn = itemForm.querySelector('button');

function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }

  return itemsFromStorage;
}

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
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

  if(isEditMode){
    const itemToEdit = itemList.querySelector('.edit-mode');
    removeItemFromStorage(itemToEdit.textContent);
    // itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
    isEditMode = false;
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

function onClickItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if(!isEditMode)
    removeItem(e.target.parentElement.parentElement);
  }else{
    setItemToEdit(e.target);
  }
}

function setItemToEdit(item){
    isEditMode = true;

    itemList.querySelectorAll('li').forEach(listItem => listItem.classList.remove('edit-mode'));
    console.log('edit');
    item.classList.add('edit-mode');
    itemInput.value = item.textContent;
    formSubmitBtn.innerHTML = '<i class="fa-solid fa-pen" ></i> Update Item';
    formSubmitBtn.style.backgroundColor = '#228B22';
}

function removeItem(item) {
  if (confirm("Are you sure?")) {
    item.remove();
    removeItemFromStorage(item.textContent);
  }
  checkUI();
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage("items");

  //Filter out item to be removed
  itemsFromStorage = itemsFromStorage.filter((entry) => entry != item);

  //Re-set to localStorage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function removeAllItem() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  localStorage.remove("items");
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
    itemInput.value = '';
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    filter.style.display = "none";
    clearAll.style.display = "none";
  } else {
    filter.style.display = "block";
    clearAll.style.display = "block";
  }

  formSubmitBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
  formSubmitBtn.style.backgroundColor = '#333';
  isEditMode = false;
}

function init() {
  // event listener
  itemForm.addEventListener("submit", addItem);
  itemList.addEventListener("click", onClickItem);
  clearAll.addEventListener("click", removeAllItem);
  filter.addEventListener("input", filterItems);
  document.addEventListener("DOMContentLoaded", displayItems);
  checkUI();
  filterItems();
}

init();
