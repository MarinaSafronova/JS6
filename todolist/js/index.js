"use strict";
//UI object
const input = document.getElementById('text');
const btnDelete = document.getElementById('btnDelete');
const partLeft = document.getElementById('left-part');

//Date options
const date = document.getElementById('date-block');
const options ={weekday: 'long', month:'short', day: 'numeric'};
const today = new Date();
date.innerHTML = today.toLocaleDateString('en-US', options);

let list =[];
let id = 0;

//LocalStorage

/*if(localStorage.getItem('todo') !== undefined){
    list = JSON.parse(localStorage.getItem('todo'))
    AddItem();
}else {
    false;
}*/

//Function Add item
function AddItem(ToDo) {
    let ItemLi = document.createElement('li');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    ItemLi.classList.add('item');
    checkBox.classList.add('typeCheck');
    ItemLi.innerText = ToDo;
    ItemLi.appendChild(checkBox);
    partLeft.appendChild(ItemLi);

    checkBox.addEventListener('click', function () {
        ItemLi.classList.add('li-done');
    });

};

//Event KeyUp
input.addEventListener('keyup', function(){
    if(event.keyCode == 13){
        const ToDO = input.value.charAt(0).toUpperCase() + input.value.slice(1);
        if(ToDO){
            let item ={title: ToDO, id: id, done: false};
            list.unshift(item);
            AddItem(ToDO);
            id++;
        }
        input.value = "";
        input.focus();
        localStorage.setItem('todo', JSON.stringify(list));
    }
});

//Delete ready done
btnDelete.addEventListener('click', function (e) {
    let Checked = document.querySelectorAll("input[type='checkbox']");
    Checked.forEach(function (item, index, arr) {
        if(item.checked){
            partLeft.removeChild(item);
        }
    });
});








