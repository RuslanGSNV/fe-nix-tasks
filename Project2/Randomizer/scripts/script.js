let min = document.querySelector('#num1');
let max = document.querySelector('#num2');
let count1 = document.querySelector('#count1');
let button1 = document.querySelector('#button1');
let output1 = document.querySelector('#output1');


let uni_min = document.querySelector('#uni1');
let uni_max = document.querySelector('#uni2');
let count2 = document.querySelector('#count2');
let button2 = document.querySelector('#button2');
let output2 = document.querySelector('#output2');

let arr = [];

button1.onclick = function (){
    output1.innerText = '';
    
    for(let i = 0; i<(+count1.value);i++){
            let randomNum = Math.floor(Math.random() * (+max.value - +min.value + 1)) + +min.value;
            output1.innerText += ` ${randomNum}`;
        } 
}


button2.onclick = function (){
    output2.innerText = '';
    arr = [];

    for (let i = +uni_min.value; i<=(+uni_max.value); i++){
        arr.push(i);
    }

    arr.sort(() => Math.random() - 0.5);
    
    for(let i = 0; i<(+count2.value);i++){
        if (arr.length >= (+count2.value)){
            output2.innerText += ` ${arr[i]}`;
        } else {
            output2.innerText ='Кількість унікальних значень в діапазоні менша за вказану кількість!'
        }    
    } 
}
