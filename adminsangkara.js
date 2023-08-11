const form = document.getElementById("item-form");
const itemList = document.getElementById("item-list");

// Array to store the items
let items = [];

// Function to add an item to the list
function addItem(event) {
    event.preventDefault();
    const itemInput = document.getElementById("item");
    const newItem = itemInput.value.trim();
    if (newItem !== "") {
        items.push(newItem);
        itemInput.value = "";
        displayItems();
    }
}

// Function to display the items in the list
function displayItems() {
    itemList.innerHTML = "";
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item}</span>
            <button class="delete" onclick="deleteItem(${index})">Delete</button>
        `;
        itemList.appendChild(li);
    });
}

// Function to delete an item from the list
function deleteItem(index) {
    items.splice(index, 1);
    displayItems();
}

form.addEventListener("submit", addItem);

// Initial display of items
displayItems();
