function showNotification(options){
    let noti = document.createElement('div');
    noti.style.position = options.position;
    noti.style.float = options.float;
    noti.style.backgroundColor = options.bgColor;
    noti.style.color = options.color;
    noti.style.border = options.border;
    noti.style.top = options.top + 'px';
    noti.style.right = options.right + 'px';
    noti.style.padding = options.padding + 'px';
    noti.textContent = options.html;
    noti.className = options.className;
    document.body.prepend(noti);

    setTimeout(() => {
        document.querySelector('.welcome').style.display = 'none';
    }, 1500);
}

let message = {
        position: 'relative',
        float: 'right',
        bgColor: '#9c0c02',
        color: 'yellow',
        border: '1px solid black',
        padding: 5,
        top : 10 , // 10px від верхньої межі вікна (за замовчуванням 0px)
        right : 10 , // 10px від правого краю вікна (за замовчуванням 0px)
        html : "Hello!" , // HTML-повідомлення
        className : "welcome" // Додатковий клас для div (необов'язково)
    };

showNotification(message);