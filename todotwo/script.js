const SelectAllbtn = document.getElementById('selectAllAction');
const inputElelement = document.getElementById('input');
const ulElement = document.getElementById('list');

let todoList =[];

inputElelement.addEventListener('keydown', event => {
    if(event.key === "Enter" || event.keyCode === 13){
        todoList.unshift({
            content: inputElelement.value,
            done: false,
            selected: false
        });
        inputElelement.value = "";

        upgradeView();
    }
});
function upgradeView() {
    ulElement.innerHTML = '';

    /*for (const todoItem of todoList){*/
    for(let index = 0; index < todoList.length; index++){
        const todoItem = todoList[index];
        const liElement = document.createElement('li');
        liElement.className = 'list-group-item';
        ulElement.append(liElement);

        const divElement = document.createElement('div');
        divElement.className = 'form-group form check';
        liElement.append(divElement);

        const inputCheckbox = document.createElement('input');
        divElement.append(inputCheckbox);
        inputCheckbox.type ='checkbox';
        inputCheckbox.className ="form-check-input";
        inputCheckbox.id = 'todoItem' + index;
        inputCheckbox.checked = todoItem.selected;

        const labelElement = document.createElement('label');
        divElement.append(labelElement);
        labelElement.className ="form-check-label";
        labelElement.setAttribute('for', 'todoItem' + index);
        labelElement.innerText = todoItem.content;

        if(todoItem.done){
            labelElement.classList.add('todoDone');
        }
        if(!todoItem.done){
            const buttonDoneElement = document.createElement('button');
            divElement.append(buttonDoneElement);
            buttonDoneElement.type = "button";
            buttonDoneElement.className ="btn btn-outline-primary";
            buttonDoneElement.innerText= 'Done';

            buttonDoneElement.addEventListener('click', ()=>{
                todoItem.done = !todoItem.done;
                upgradeView();
            });
        }else{
            const buttonRemoveElement =document.createElement('button');
            divElement.append(buttonRemoveElement);
            buttonRemoveElement.type = "button";
            buttonRemoveElement.className ="btn btn-outline-danger";
            buttonRemoveElement.innerText= 'Remove';
            buttonRemoveElement.addEventListener('click', ()=>{
                todoList = todoList.filter(currentTodoItem => currentTodoItem!==todoItem);
                upgradeView();
            });
        }

        inputCheckbox.addEventListener('change', ()=>{
            todoItem.selected = inputCheckbox.checked;
        });

    }
}

document.getElementById('doneAction').addEventListener('click', ()=>{
        for(const todoItem of todoList){
            if(todoItem.selected){
                todoItem.done = true;
                todoItem.selected = false;
            }
        }
    upgradeView();
});
document.getElementById('restoreAction').addEventListener('click', ()=>{
    for(const todoItem of todoList){
        if(todoItem.selected){
            todoItem.done = false;
            todoItem.selected = false;
        }
    }
    upgradeView();
});
document.getElementById('removeAction').addEventListener('click', ()=>{
    todoList = todoList.filter(todoItem => !todoItem.selected);
    upgradeView();
});

SelectAllbtn.addEventListener('click', ()=>{
    for(const todoItem of todoList){
        todoItem.selected = true;
    }
    upgradeView();
});

