"use strict";
let ContainerUsers = document.getElementById('table-users');
let request = new XMLHttpRequest();


request.onreadystatechange  = function () {
    if(this.readyState == 4 && this.status == 200){
        FuncResponse(this.responseText);
    }
};
request.open('GET', 'https://randomuser.me/api/?results=5');
request.send();

function FuncResponse(data) {
    let ItemData = JSON.parse(data);
    for(let key in ItemData){
        ItemData[key].forEach(function (item, index, arr) {
            CreateItem(item);
        })
    }
}

function CreateItem(item) {
    let DivTemplate = document.createElement("div");
    DivTemplate.classList.add('list-style');
    let Template = ` <div class="row justify-content-center">
                    <div class="col-lg-6 text-center">
                        <div class="UserImg">
                        <img src="${item.picture.large}" alt="User"/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <ul>
                            <li>Name:
                                <span>${item.name.first}</span>
                                <span>${item.name.last}</span>
                            </li>
                            <li>Age:   ${item.dob.age} years</li>
                            <li>Phone: ${item.phone}</li>
                            <li>Email: ${item.email}</li>
                            <li>City:  ${item.location.city}</li>
                        </ul>
                    </div>
                </div>
    `;
    DivTemplate.innerHTML = Template;
    ContainerUsers.append(DivTemplate);
}

