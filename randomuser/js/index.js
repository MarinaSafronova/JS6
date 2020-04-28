"use strict";
let ContainerUsers = document.getElementById('table-users');
let Promise = fetch('https://randomuser.me/api/')
    .then(data=>{
        console.log(data);
    });


/*
function PartView() {
    let request = new XMLHttpRequest();
    request.open({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        }
    });
    request.send();
}

*/
