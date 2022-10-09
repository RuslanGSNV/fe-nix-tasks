document.onclick = function(e) { // показує координати точки  
    coords.innerHTML = e.clientX + ':' + e.clientY;
};


let field = document.querySelector('#field');
let ball = document.querySelector('#ball');

ball.style.position = 'relative';
ball.style.transition = '0.2s ease-in-out';
field.style.cursor = 'pointer';
let coordinats = field.getBoundingClientRect();

field.onclick = function(e) {

    let ball_y = e.clientY - coordinats.top - field.clientTop - ball.clientHeight / 2; // положення по осі Х з урахуванням розміру м'яча відносно поля
    let ball_x = e.clientX - coordinats.left - field.clientLeft - ball.clientWidth / 2;  // положення по осі Y з урахуванням розміру м'яча відносно поля
    
    if (ball_y < 0) ball_y = 0; // положження м'яча, якщо перетнута верхня сторона поля
      
    if (ball_x < 0) ball_x = 0; // положження м'яча, якщо перетнута ліва сторона поля
    
    if (ball_x + ball.clientWidth > field.clientWidth) { // положження м'яча, якщо перетнута права сторона поля
      ball_x = field.clientWidth - ball.clientWidth;
    }
    
    if (ball_y + ball.clientHeight > field.clientHeight) { // положження м'яча, якщо перетнута нижня сторона поля
      ball_y = field.clientHeight - ball.clientHeight;
    }
    
    // координати м'яча у всіх інших випадках, тобто в середині поля
    ball.style.left = ball_x + 'px'; 
    ball.style.top = ball_y + 'px';
}
