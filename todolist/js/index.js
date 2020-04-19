"use strict";
const input = document.getElementById('text');
const btnDelete = document.getElementById('btnDelete');
const partLeft = document.getElementById('left-part');
let list = [];
let id = 0;


input.addEventListener('keyup', function(event){
    if(event.keyCode == 13){
        const ToDO = input.value;
        partLeft.innerHTML = `<li class="item">${ToDO.charAt(0).toUpperCase()+ ToDO.slice(1)} <input type="checkbox"></li><br>`;
        if(ToDO){
            console.log(ToDo);
        }
    }
});



