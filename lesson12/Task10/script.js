
let list = document.createElement('ul');
document.body.appendChild(list);
let counter = 1;
let enterLi = prompt(`Введіть ${counter}-й елемент списку`);

while (enterLi!='' && enterLi!=null){
    let li = document.createElement('li');
    li.textContent = enterLi;
    list.appendChild(li);
    counter++;
    enterLi = prompt(`Введіть ${counter}-й елемент списку`);
}


// Варіант з рекурсією.
/*
let list = document.createElement('ul');
document.body.appendChild(list);
let counter = 1;
   
function createLi(){
    let enterLi = prompt(`Введіть ${counter}-й елемент списку`);
    if (enterLi!='' && enterLi!=null){
        let li = document.createElement('li');
        li.textContent = enterLi;
        list.appendChild(li);
        counter++;
        createLi();
    } else return;
}

createLi();
*/