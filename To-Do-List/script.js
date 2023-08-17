'use strict'

function addItem(){
    let item = document.getElementById('box');
    let listItem = document.getElementById('list-item'); // Corrected ID name

    if (item.value != ''){
        let makeListItems = document.createElement('li');
        makeListItems.appendChild(document.createTextNode(item.value));
        listItem.appendChild(makeListItems);
        item.value = '';

        makeListItems.onclick = function(){
            this.parentNode.removeChild(this);
        }
    } else {
        alert('Please add an item');
    }
}
