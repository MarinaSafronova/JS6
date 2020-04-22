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

let list = [];
let id = 0;

//Function Add item
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

//Event KeyUp
input.addEventListener('keyup', function(){
    if(event.keyCode == 13){
        const ToDO = input.value.charAt(0).toUpperCase() + input.value.slice(1);
        if(ToDO){
            AddItem(ToDO);
            list.push({title: ToDO, id: id, done: false});
            id++;
        }else{
            return false;
        }
        input.value = "";
    }
});

/*
btnDelete.addEventListener('click', function(){

});
*/

function BindTask() {
    const checkBox = document.querySelector('input[type=checkbox]');

}
/*
function CompleteTask(chkBox) {
    if (chkBox.checked) {
        chkBox.className = "task completed";
    } else {
        /!*this.incompleteTask(i);*!/
    }
}
*/



