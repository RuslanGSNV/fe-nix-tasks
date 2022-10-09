let cal = document.body;
function createCalendar(elem, year, month) {

    let my_month = month - 1; // місяці починають відрахунок з 0 і до 11
    let my_date = new Date(year, my_month); // Створюємо нову дату, фактично це рік та місяць, які ми передали в функцію, якщо задані тільки рік і місяць, то це буде перше число заданого місяця заданого року
    let table = '<table> <tr> <th>Пн</th> <th>Вт</th> <th>Ср</th> <th>Чт</th> <th>Пт</th> <th>Сб</th> <th>Нд</th> </tr> <tr>';
    // створюємо зміст для таблиці, перший рядок із днями тижня та відкриваємо наступний рядок для наповнення
    
    function getDay(date) { // функція, яка отримує день тижня від 0 до 6
        let day = date.getDay();
        if (day == 0) day = 7; 
        return day - 1;      // задати останнім днем тижня неділю
      }
   
    for (let i = 0; i < getDay(my_date); i++) { // Цикл, який додає пусті ячейки до першого дня місяця.
      table += '<td></td>';
    }

    while (my_date.getMonth() == my_month) {// аиконувати тіло цикла, поки поточний місяць не закінчиться
      table += '<td>' + my_date.getDate() + '</td>'; // створюємо ячейку з днем місяця та додаємо її до змісту таблиці

      if (getDay(my_date) % 7 == 6) { // якщо поточний день тижня = 6, тобто неділя, ззакрити рядок та відкрити новий рядок, тобто зробити перенос на наступний рядок
        table += '</tr><tr>';
      }

      my_date.setDate(my_date.getDate() + 1); // збільшуємо день місяця на 1
    }

    if (getDay(my_date) != 0) { // Якщо останнім днем місяця є не неділя, то після останнього дня місяця залишиться пустий простір, який потрібно також запонити пустимя ячейками
      for (let i = getDay(my_date); i < 7; i++) { 
        table += '<td></td>';
      }
    }
    
    table += '</tr></table>'; // після всього закриваємо останній рядок і закриваємо таблицю

    elem.innerHTML = table;
  }
  createCalendar(cal, 2012, 9);
  document.querySelector('table').border = '1';
  document.querySelector('table').style.width = '200px';
  document.querySelector('table').style.height = '200px';
  for (let el of document.querySelector('table').rows[0].children){
    el.style.backgroundColor = 'lightgray'
  }