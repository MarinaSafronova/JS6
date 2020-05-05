"use strict";
const ContainerUsers = document.getElementById('table-users');
const SearchForm = document.getElementById('search-form');
const SearchInput = document.getElementById('search-input');

//Listener
SearchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let q = SearchInput.value;
    Reset(e);
    SearchInput.value = "";
    SearchInput.focus;
    SearchFunc(q);
});

function Reset(e) {
    if(ContainerUsers.childNodes){
        ContainerUsers.innerHTML = "";
    }
}
function SearchFunc(q){
    let ApiKey = 'mZT8Ifx6947T5VhGmmMzwmZVzCnrGi6J';
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${q}&limit=25&offset=0&rating=PG-13&lang=en`;

    let request = fetch(URL)
        .then(response=>response.json())
        .then(data =>GetInfo(data))
        .catch(error => console.error(error));

    function GetInfo(data) {
        for(let key in data){
            if(key == 'data'){
                let GetData = data[key];
                GetData.forEach((item, index, ar)=>{
                    CreateItemGif(item);
                });

            }
        }
    }

    function CreateItemGif(item) {
        let template = `<img src="${item.images.fixed_width.url}" alt="${item.title}" width="${item.images.fixed_width.width} height="${item.images.fixed_width.eight}"/>`;
        let DivGIF = document.createElement('div');
        DivGIF.classList.add('item-box');
        DivGIF.innerHTML = template;
        ContainerUsers.append(DivGIF);
    }
};
