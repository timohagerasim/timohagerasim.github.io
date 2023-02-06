var items = [];

window.addEventListener('DOMContentLoaded', () => {
    const storageItems = JSON.parse(localStorage.getItem('items'));

    if (storageItems) {
        items = storageItems;
    }

    displayItems();
});

function addItem(event)
{
    const itemText = document.getElementById('itemText').value;

    if (itemText) {
        items.push(itemText);
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
    }
}



function removeItem(id)
{
    items.splice(id, 1);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}

function buildItem(id, text)
{
    const item = document.createElement('div');
    item.id = id;
    item.className = 'item';

    const textItem = document.createElement('span');
    textItem.innerText = text;

    const removeButton = document.createElement('span');
    removeButton.innerHTML = '&#x2715';
    removeButton.addEventListener('click', () => {removeItem(id)});
    item.appendChild(textItem);
    item.appendChild(removeButton);

    return item;
}

function displayItems() {
    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.innerHTML = null;

    for (let i = 0; i < items.length; i++) {
        const item = buildItem(i, items[i]);
        itemsContainer.appendChild(item);
    }
}