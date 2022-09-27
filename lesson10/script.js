//Task 1

/*
let my_obj = {};

function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}
alert(isEmpty(my_obj));
*/

/****************************************************************/

//Task 2

/*
let animal = {
    name:'Cat',
    legsCount:4,
    eyesCount:2,
    hasTail:true
}

function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key]!='number') continue;
        obj[key]*=2;
    }
}

multiplyNumeric(animal);
console.log(animal);
*/

/****************************************************************/

//Task 3

/*
function readNumber(){
    let number = prompt("Введіть числове значення");
    while (isNaN(+number) && number!=null){
        number = prompt("Введіть числове значення");
    }
    return null;
}
readNumber();
*/

/****************************************************************/

//Task 4

/*
let min = 1;
let max = 5;

function random(min,max){
    alert(Math.random()*(max-min)+min);
}
random(min,max);
*/

/****************************************************************/

//Task 5

/*
let min = 1;
let max = 5;

function randomInteger(min,max){
    alert(Math.round(Math.random()*(max-min)+min));
}
randomInteger(min,max);
*/

/****************************************************************/

//Task 6

/*
// Варіант 1

let my_str = 'ruslan';
function ucFirst(str){
    let arr = str.split('');       // перетворити рядок у масив із підрядків (у нашому випадку із літер слова, яке ми ввели)
    arr[0] = arr[0].toUpperCase(); // зробити 0-й елемент масиву великим
    let newStr = arr.join('');     // перетворити масив із підрядків знову у рядок
    return newStr;
}
alert(ucFirst(my_str));

// Варіант 2
let my_str = 'ruslan';
function ucFirst(str) {
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}
alert(ucFirst(my_str));
*/

/****************************************************************/

//Task 7

/*
function checkSpam (str){
    let new_str = str.toLowerCase();
    if (new_str.includes('viagra') || new_str.includes('xxx')){
        alert(true);
    } else alert(false);
}
checkSpam( "Hello world and XxXx"); // true
checkSpam( "viAGra hello World"); // true
checkSpam( "Hello World!"); //false
*/

/****************************************************************/

//Task 8

/*
//Варіант 1

function truncate(str , maxlength){

    if (str.length>maxlength){
        let arr = str.split(''); // перетворити рядок у масив із підрядків (у нашому випадку із символів рядку, який ми ввели)
        arr.length = maxlength;  // задати максимальну довжину масиву, залежно від довжини яку ми обрали
        arr[arr.length-1]='...'; // Замінити останній елемент масива на "..."
        new_str = arr.join('');  // Перетворити масив назад в рядок
        alert(new_str);
    } else alert(str);
}
truncate("Ось що мені хотілося б сказати на цю тему:", 20); // Урізає
truncate ("Усім привіт!", 20); //Не урізає


//Варіант 2

/*
function truncate(str , maxlength){
    let newStr;
    if (str.length>maxlength) {
        newStr = str.substr(0,maxlength-1) + '...';
        alert(newStr);
    } else alert(str);
}
truncate("Ось що мені хотілося б сказати на цю тему:", 20); // Урізає
truncate ("Усім привіт!", 20); //Не урізає
*/

/****************************************************************/

//Task 9

/*

// Варіант 1 (Підійде також, якщо знак валюти стоїть після числа)

function extractCurrencyValue(str){
    let value ='';
    for (let index in str){
       if (!(isNaN(+str[index])) || str[index]=='.'){
            value+=str[index];
       }
    }
    return (+value);
    }
alert(extractCurrencyValue('$120.5'));


// Варіант 2

function extractCurrencyValue(str){
    return (+str.slice(1));
}
alert(extractCurrencyValue('$333.3'));
*/

/****************************************************************/

//Task 10

/*
function sumInput(){
    let number = prompt("Введіть числове значення");
    let arr = [];
    
    while (!isNaN(+number) && number!=null && number!=''){
        arr.push(+number);
        console.log(arr); //Для себе для перевірки
        number = prompt("Введіть числове значення");
    }
    
    let arrSum = 0;

    for (let i = 0; i<arr.length; i++){
        arrSum+=arr[i];
    }

    return `Сума елементів масиву ${arrSum}`;
}

alert(sumInput());
*/

/****************************************************************/

//Task 11

/*
function checkAge (age) {
    if (age > 18) {
        return true;
    } else {
        return confirm( ' Батьки дозволили ?');
    }
}
alert(checkAge(18));

// При обробці данного коду результат з else та результат без else однакові, тому впринципі else не обов'язковий, еле відмінність є саме у механіці виконання коду.
// У випадку з else обидва return є частинами умовного оператору, і якщо перша умова істинна, виконується 1-й return, в протилежному випадку виконується 2-й return, після цього функція припиняє свою роботу.
// У випадку без else умовний оператор має лише одну умову, і якщо вона істинна, то виконується return і функція просто припиняє свою роботу, якщо ж умова не є істинною, return не виконається, і функція буде продовжувати роботу, допоки не зустріне перший return на шляїу, або не закінчиться тіло функції.
*/

/****************************************************************/

//Task 12

/*
// Функція через ?
let checkAge = (age)=>(age>18) ? true: confirm('Батьки дозволили?');
alert(checkAge(18));

// Функція через ||
let checkAge = (age)=>(age>18 || confirm('Батьки дозволили?')==true) ? true: false;
alert(checkAge(18));
*/

/****************************************************************/

//Task 13

/*
function min(a,b){
    if (a<b){
        return a;
    } else if (a>b){
        return b;
    } else return 'Числа рівні';
}

alert(min(2,3));
*/

/****************************************************************/

//Task 14

/*
function pow(x,n){
    let pow = 1;
    let powered = x;
    while (pow<n){
        powered*=x;
        pow++;
    }
    return powered;
}
alert(pow(3,3));
*/

/****************************************************************/

//Task 15

/*

// Звичайна функція

function ask(question, yes, no) {
    if (confirm(question)) yes( )
    else no( );
    }
ask (
    "Ви згодні?",
    function ( ) { alert ("Ви погодилися."); },
    function ( ) { alert ("Ви скасували виконання."); }
);

 // Функція стрілка

let ask = (question, yes, no)=>confirm(question) ? yes(): no();
ask ("Ви згодні?", ()=>alert ("Ви погодилися."), ()=>alert ("Ви скасували виконання.") );

*/

/****************************************************************/

//Task 16

/*
let my_earnings = 3333;
let palm_price = 8000;
let my_month_spending = 1750;

function calculateTime (earn, product_price, spending){
    let net_profit = earn-spending;
    let time = product_price/net_profit;
    return (Math.ceil(time) + ' months');
}

alert(calculateTime(my_earnings, palm_price, my_month_spending));
*/

/****************************************************************/

//Task 17

/*
function calculateNegativeSum(){
    let counter = 1;
    let negative_sum = 0;
    

    for (let entered_num; counter<=10; counter++){

        entered_num = prompt(`Введіть число № ${counter}`)

        if (isNaN(+entered_num) || entered_num=='') {
            return 'Введено не числове значення або значення не введено'
        } else if (entered_num==null){
            return 'Дія відмінена'
        }
          else if (+entered_num<0){
            negative_sum+=+entered_num;
        }
    }

    return negative_sum;
}
alert(calculateNegativeSum());
*/

