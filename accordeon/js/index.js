"use strict";

let headers = document.querySelectorAll('[data-name="accordeon-title"]');

headers.forEach(function (item) {
    item.addEventListener('click', headerClick);
});

function headerClick() {
    this.nextElementSibling.classList.toggle('accordeon-body');
}


