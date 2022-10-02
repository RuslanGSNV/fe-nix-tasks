// Task1

/*
function camelize(str){
    let arr = str.split('');
    for (let elem of arr){
        if (elem=='-'){
            arr[arr.indexOf(elem)+1] = arr[arr.indexOf(elem)+1].toUpperCase();
            arr.splice(arr.indexOf(elem),1);
        }
    }
    let newStr = arr.join('');
    return newStr;
}
alert(camelize("list-style-image"));
*/

/*************************************************************/

// Task2

/*
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b){
    let newArr = arr.filter((element)=>element>=a && element<=b);
    return newArr;
}

let filtered = filterRange(arr, 1, 4);
alert(filtered);
alert(arr);
*/

/*************************************************************/

// Task3

/*
let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b){
    for(var i=0; i<arr.length; i++){
        if(a>arr[i] || arr[i]>b){
            arr.splice(i, 1);
            i--;                             // Декремент потрібет, томущо при видаленні едемента інші елементи зміщуються на -1;
        }
    }
}
filterRangeInPlace(arr, 3, 5);
alert(arr);
*/


/*************************************************************/

// Task4

/*
let arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=>b-a);
alert(arr);
*/

/*************************************************************/

// Task5

/*
let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
    return arr.slice().sort();   //метод Slice потрібен щоб просто скопіювати масив а не передати його, існують і інші способи зробити це.
}
let sorted = copySorted(arr);
alert (sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без змін)
*/

/*************************************************************/

// Task6

// Калькулятор, що роширюється. В проекті буде повноцінний варіант з кнопками.

// Варіант 1

/*
let num1 = +prompt('Перший аргумент:');
let oper = prompt('Дія:');
let num2 = +prompt('Другий аргумент:');

if (oper =='+'){
    alert (num1+num2)
} else if (oper=='-'){
    alert(num1-num2)
} else if (oper=='*'){
    alert(num1*num2)
} else if (oper=='/'){
    alert(num1/num2)
} else if (oper=='%'){
    alert(num1*num2/100);
}
*/

// Варіант 2 (Быльш простий)

/*
let calculate = prompt('Введіть дані для розрахунку');
alert(eval(calculate));
*/


/*************************************************************/

// Task7

/*
let vasya = { name: "Вася", age: 25};
let petya = { name: "Петя", age: 30};
let masha = { name: "Маша", age: 28};
let users = [ vasya, petya, masha ];
let names = users.map(elem=>elem.name);
alert(names); // Вася, Петя, Маша
*/

/*************************************************************/

// Task8

/*
let vasya = {name : " Вася ", age: 25};
let petya = {name : " Петя ", age: 30};
let masha = {name : " Маша ", age: 28};
let arr = [ vasya , petya , masha ] ;

function sortByAge(arr){
    arr.sort((a,b)=>a.age-b.age)
}

sortByAge(arr);

alert( arr [0].name);
alert ( arr [1].name);
alert ( arr [2].name);
*/

/*************************************************************/

// Task9

/*
let vasya = { name: "Вася", age: 25};
let petya = { name: "Петя", age: 30};
let masha = { name: "Маша", age: 29};
let arr = [ vasya, petya, masha ];

function getAverageAge(arr){
    let averAge = 0;
    for (let elem of arr){
        averAge += elem.age;
    }
    return averAge/arr.length;
}

alert(getAverageAge(arr));
*/

/*************************************************************/

// Task10

/*
function unique(arr) {
    let uniqArr = [];
    for (let elem of arr){
        if (!uniqArr.includes(elem)){
            uniqArr.push(elem);
        }
    }
    return uniqArr;

}
let elements = [1, 1, 2, 3, 2, 3, "кришна", "кришна", ":-O"];
alert (unique (elements)); //
*/


/*************************************************************/

// Task11

/*
function unique(arr) {
    let set = new Set(arr);
    return Array.from(set);
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
alert (unique (strings)); // кришна, харе, :-O
*/

/*************************************************************/

// Task12

/*
function makeCounter() {
    let count = 0;
    return function() {
    return count++; 
    };
}
    let counter = makeCounter();
    let counter2 = makeCounter();
    alert (counter ()); // 0
    alert (counter ()); // 1
    alert (counter2 ()); // 0
    alert (counter2 ()); // 1
    
    // Ці лічильники незалежні, оскільки ми скопіювали функцію у різні змінні, і для кожної змінної було створене своє лексичне оточення також,
    // це означає що під час виклику кожна функція працює зі своїм лексичним оточенням і зі своєю незалежною змінною count,
    // і при повторному виклику кожноЇ функції кожна функція буде інкрементувати значення count у своєму лексичному оточенні.
    // Для прикладу, якщо змінна count знаходилася б у глобальному лексичному оточенні, то кожна з функцій зверталасяб до однієї й тої самої єдиної змінної в глобальному оточенні,
    // Тобто змінювала одну й ту саму змінну, і це б виглядало так: 
    //alert (counter ()); // 0
    //alert (counter ()); // 1
    //alert (counter2 ()); // 2
    //alert (counter2 ()); // 3
    */

/*************************************************************/

// Task13

/*
function Counter() {
    let count = 0;
    this.up = function() {
    return ++count;
    };
    this.down = function() {
    return --count;
    };
    }
    let counter = new Counter();
    let counter2 = new Counter();
    alert(counter.up()); // 1
    alert(counter.up()); // 2
    alert(counter.down() ); //1

    // Так, це працюватиме, оскільки функція counter копіює лексичне оточення з Counter і дві вкладені функції up та down також, які працюють з однією змінною count;
*/

/*************************************************************/

// Task14

/*
function factorial(n){
    return (n==1)? n: n*factorial(n-1);
}
alert( factorial(4) );
*/
