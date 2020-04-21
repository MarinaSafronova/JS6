"use strict";
const input = document.getElementById('text');
const btnDelete = document.getElementById('btnDelete');
const partLeft = document.getElementById('left-part');
const element = document.querySelector('input[type=checkbox]');

//Date optionst
const date = document.getElementById('date-block');
const options ={weekday: 'long', month:'short', day: 'numeric'};
const today = new Date();
date.innerHTML = today.toLocaleDateString('en-US', options);

let list = [];
let id = 0;

function AddItem(text) {
    let ItemLi = document.createElement('li');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    ItemLi.classList.add('item');
    checkBox.classList.add('typeCheck');
    ItemLi.innerText = text;
    ItemLi.appendChild(checkBox);
    partLeft.appendChild(ItemLi);
};

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
        }else{
            return false;
        }
    }
});

btnDelete.addEventListener('click', function(){
    
});
function CompleteTask(chkBox) {
    if (chkBox.checked) {
        chkBox.className = "task completed";
    } else {
        /*this.incompleteTask(i);*/
    }
}



