'use strict'

let itemCount = 0; //Initialize the item count

function addItem(){
    let item = document.getElementById('box');
    let listItem = document.getElementById('list-item'); // Corrected ID name

    if (item.value != ''){
        let makeListItems = document.createElement('li');
        itemCount++; //increment the item count
        makeListItems.appendChild(document.createTextNode(itemCount + '.' + item.value));
        listItem.appendChild(makeListItems);
        item.value = '';

        makeListItems.onclick = function(){
            this.parentNode.removeChild(this);
        }
    } else {
        alert('Please add an item');
    }
}
