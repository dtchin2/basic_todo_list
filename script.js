var items_list = document.getElementById('items-list');
var input_item = document.getElementById('input-item')

function addItemToList(){
    if(istextFieldBlank()){
        alert("New item field cannot be blank")
    }else {
        var item_text = input_item.value;
        const newItem = document.createElement('li');
        newItem.addEventListener('click', function(){
            newItem.classList.add('item_done')
        })
        newItem.appendChild(document.createTextNode(item_text));
        items_list.appendChild(newItem);

    // in the end clear the input text field
    input_item.value = '';
    }
}


function markItemComplete(){
    alert("Strike Through");
}

function istextFieldBlank(){
    if(input_item.value.trim() === ''){
        return true
    }else {
        return false
    }
}

