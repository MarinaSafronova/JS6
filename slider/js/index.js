"use strict";

let next = document.getElementById('next');
let prev = document.getElementById('prev');
let slider = document.querySelectorAll('img');
let current = 0;

function ActiveClass() {
   for(let i = current; i < slider.length; i++){
       if(slider[i].classList.contains('opacity-0')){
           slider[i].classList.remove('opacity-0');
       }else{
           slider[i].classList.add('opacity-0');
       }
   }
}

next.addEventListener("click", function () {
    if(current == slider.length-1){
        current = 0;
    }else{
        current++;
    }
    ActiveClass();
});

prev.addEventListener('click', function () {
    if(current === 0){
        current = slider.length-1;
    }else {
        current--;
    }
    ActiveClass();
});
