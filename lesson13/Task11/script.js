let genres = document.querySelector('#genres');

let selected = genres.options[genres.selectedIndex];
alert( selected.value + ', ' + selected.text );

let my_option = new Option('Кантрі', "country");
my_option.selected = true;
genres.append(my_option);


