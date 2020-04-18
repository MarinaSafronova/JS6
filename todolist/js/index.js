"use strict";
let input = document.getElementById('text');
let btnAdd = document.getElementById('btnAdd');
let btnDelete = document.getElementById('btnDelete');
let partLeft = document.getElementById('left-part');


btnAdd.addEventListener('click', function(){
    partLeft.innerHTML = `<li>${input.value.charAt(0).toUpperCase()+ input.value.slice(1)} <input type="checkbox"></li><br>`;
    input.value ="";
});

