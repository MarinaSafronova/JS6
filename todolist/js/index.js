"use strict";
const input = document.getElementById('text');
const btnDelete = document.getElementById('btnDelete');
const partLeft = document.getElementById('left-part');
let list = [];
let id = 0;


input.addEventListener('keyup', function(event){
    if(event.keyCode == 13){
        const ToDO = input.value.charAt(0).toUpperCase() + input.value.slice(1);
        if(ToDO){
            AddItem(ToDO);
            list.push({
                title: ToDO,
                id: id,
                done: false
            });
            id++;
            console.log(list);
        }else{
            return false;
        }
    }
});

function AddItem(text) {
    let ItemLi = document.createElement('li');
    let ItemInput = document.createElement('input');
    ItemInput.type = 'checkbox';
    ItemLi.classList.add('item');
    ItemLi.innerText = text;
    ItemLi.appendChild(ItemInput);
    partLeft.appendChild(ItemLi);
};



