let triger = document.querySelector('#triger');
let content = document.querySelector('#content');
//Варіант з hidden

triger.style.cursor = 'pointer';
content.hidden = true;
triger.addEventListener('click', function(){

    switch(content.hidden){
        case true: content.hidden = false;
        triger.textContent = triger.textContent.slice(0, -1);
        triger.textContent += '▲'
        break;

        case false: content.hidden = true;
        triger.textContent = triger.textContent.slice(0, -1);
        triger.textContent += '▼'
        break;
    }

})


// Анімований варіант (працює тільки з конкретними значеннями доажини)
/*
triger.style.cursor = 'pointer';
let switcher = 0;
content.style.height = '0px';

triger.addEventListener('click', function(){
   if (switcher == 0) {
    content.style.height = '100px';
    triger.textContent = triger.textContent.slice(0, -1);
    triger.textContent += '▲'
    switcher = 1}

   else if (switcher == 1) {
    content.style.height = '0px';
    triger.textContent = triger.textContent.slice(0, -1);
    triger.textContent += '▼'
    switcher = 0};

})*/