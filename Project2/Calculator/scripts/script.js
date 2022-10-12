let calculator = document.querySelector('#calc');
let output = document.querySelector('#out');
let ac = document.querySelector('#ac');
let sign = document.querySelector('#sign');
let percentage = document.querySelector('#percentage');
let oper = document.querySelector('.operator');
let point = document.querySelector('#point');
output.textContent='';

let numbers = {
    'zero':0,
    'one':1,
    'two':2,
    'three':3,
    'four':4,
    'five':5,
    'six':6,
    'seven':7,
    'eight':8,
    'nine':9
}

let finalResult = 0;
let operator = '';
let activeOperator = false;

ac.onclick = function(){
    output.textContent = '';
    finalResult = 0;
}

sign.onclick = function(){
    if (firstChar()==='-'){
        result = output.textContent;
        let sbstr = result.substring(1, result.length);
        output.textContent = sbstr;
    } else if (!emptyResult()){
        prepend('-');
    }
}

percentage.onclick = function(){
    if (!emptyResult()){
        percentage = parseFloat(output.textContent)/100;
        output.textContent = percentage;
    }
}

calculator.addEventListener('click',function(event){
    if (!event.target.classList.contains('operator')) return;
    let key = event.target.id;
    if (key === 'equal'){
        calculate();
        if (String(finalResult).length>9){
            finalResult = finalResult.toFixed(6)
        }
        output.textContent = finalResult;
        operator = '';
        activeOperator = false;
    } else {
        operator = key;
        activeOperator = true;
    }
})

calculator.addEventListener('click',function(event){
    if (!event.target.classList.contains('number')) return;
    let key = event.target.id;
    num = numbers[key];

    if (activeOperator){
        finalResult = parseFloat(output.textContent);
        output.textContent = '';
        activeOperator = false;
    }

    if (firstChar()===0){
        if (hasChar('.')){append(num);}
    } else {append(num);}
})

point.onclick = function(){
    if (emptyResult()){append('0.')}
    else if (!hasChar()){append('.')}
}

const calculate = ()=>{
    let actResult = parseFloat(output.textContent);
    switch (operator){
        case 'addition':
            finalResult += actResult;
            break;
        case 'subtraction':
            finalResult -= actResult;
            break; 
        case 'multiplication':
            finalResult *= actResult;
            break;
        case 'division':
            finalResult /= actResult;
            break;
        default:
            break;
    }
}

const emptyResult = () =>{
    return output.textContent === '';
}

const hasChar = (char)=>{
    let result = output.textContent;
    return result.indexOf(char)!==-1;
}

const firstChar = ()=>{
    return output.textContent.charAt(0);
}

const append = (txt)=>{
    let result = output.textContent;
    output.textContent = result + txt;
}

const prepend = (sign)=>{
    let result = output.textContent;
    output.textContent = sign + result;
}