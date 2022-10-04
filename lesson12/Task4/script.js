let liAll = document.querySelectorAll('li');
    for (let li of liAll){
        let liName = li.firstChild.data;
        liName = liName.trim();
        let count = li.querySelectorAll('li').length;
        alert(liName + ' має ' + count + ' нащадків');
    }