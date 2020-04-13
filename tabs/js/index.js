"use strict";
//Get
let tabsHeaders = document.querySelectorAll('[data-tab]');
//forEach
tabsHeaders.forEach(tabsHandler);

//click on item
function tabsHandler(item) {
   item.addEventListener('click', tabsClick);
}

function tabsClick() {
    const tabId = this.dataset.tab;
    document.querySelectorAll('[data-tab-content]').forEach(function (item) {
        item.classList.add('tab-content');
    });
    document.getElementById(tabId).classList.toggle('tab-content');
}




