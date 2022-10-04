let table = document.querySelector('#table');
table.border = '1';
table.style.width = '300px'
table.style.height = '250px'


for (let i = 0; i<table.rows.length; i++){
    for (let j = 0; j<table.rows[i].cells.length; j++){
        if (i==j){
            table.rows[i].cells[j].style.backgroundColor = 'red';
        } 
        table.rows[i].cells[j].innerText = `${j+1}:${i+1}`; 
        table.rows[i].cells[j].style.textAlign = 'center';
        table.rows[i].cells[j].style.fontWeight = 'bold';
    }
}