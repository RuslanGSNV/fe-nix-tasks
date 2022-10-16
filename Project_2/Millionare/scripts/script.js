let no_name = document.querySelector('#no_name');

let welcome_page = document.querySelector('#welcome');
let game_page = document.querySelector('#game');
let play = document.querySelector('#play');

let question = document.querySelector('#question');
let answers = document.querySelector('#answers');
let hints = document.querySelector('#hints');

let popup = document.querySelector('#popup');
let popup_content = document.querySelector('#popup_content');
let popup_title = document.querySelector('#popup_title');
let close_popup = document.querySelector('#close');
let timer = document.querySelector('#timer');

let sound_start = document.querySelector('#sound_start');
let true_answer = document.querySelector('#true_answer');
let wrong_answer = document.querySelector('#wrong_answer');
let waiting = document.querySelector('#waiting');
let win = document.querySelector('#win')

let rotation = document.querySelector('.millionaire__game_emblem img');

sound_start.volume = 0.2;
true_answer.volume = 0.1;
wrong_answer.volume = 0.1;
waiting.volume = 0.1;
win.volume = 0.2;


let player_name;
let fifty_fifty = true;
let friend_call = true;

let lock = true;
let count = 0;
let correct;

function timeIsOver(str){
    sound_start.pause();
    true_answer.pause();
    waiting.pause();
    win.pause();
    wrong_answer.play();
                
    timer.style.opacity = '0';
    timer.textContent = 6000000;

    close_popup.onclick = function (){
    window.location.reload();
    }
    rotation.style.animation = 'none';
    popup_title.textContent = 'Повідомлення:'
    popup_content.textContent = `Нажаль, ${player_name}, ваш час вичерпано, гра закінчена. Ваш виграш складає ${str}.`
    popup.style.opacity = '1';
    popup.style.visibility = 'visible';
}

function Timer(){
    setInterval(() => {
        --timer.textContent;
        if (timer.textContent <0) {

            if (count<5){
                timeIsOver('0 ₴');
            } else if (count>=5 && count<10){
                timeIsOver('1000 ₴')
            } else {
                timeIsOver('32000 ₴')
            }  
        }  
    }, 1000);
}

let friends = ['Артур', 'Іван', 'Микита', 'Генріх', 'Дмитро', 'Сергій', 'Ростислав']

//Об'єкти з питаннями можна наповнювати не зачіпаючи іншоих частин коду (головне відповідати шаблону питань)
let question_block1 = [
    {question:'Як називається найбільша технологічна компанія у Південній Кореї?', wrong1:'А. Xiaomi',           wrong2:'Б. Meizu',           correct:'В. Samsung',        wrong3:'Г. Huawei'},
    {question:'Який хімічний символ для срібла?',                                  wrong1:'А. Mg',               correct:'Б. Ag',             wrong2:'В. Au',              wrong3:'Г. Ca'},
    {question:'Який найменший птах у світі?',                                      correct:'А. Колібрі-бджілка', wrong1:'Б. Корольок',        wrong2:'В. Горобець',        wrong3:'Г. Охристий колібрі'},
    {question:'Який найбільш касовий фільм в історії кінематографа?',              wrong1:'А. Титанік',          wrong2:'Б. Месники: Фінал',  correct:'В. Аватар',         wrong3:'Г. Світ Юрського періоду'},
    {question:'Яке місто вважається столицею моди?',                               correct:'А. Мілан',           wrong1:'Б. Нью-Йорк',        wrong2:'В. Париж',           wrong3:'Г. Токіо' }
];

let question_block2 = [
    {question:'Хто був найпершим долларовим мільярдером в світі?',                              wrong1:'А. Ендрю Карнегі',    wrong2:'Б. Білл Гейтс',         wrong3:'В. Аалан Руфус',            correct:'Г. Джон Рокфеллер'},                 
    {question:'Як называеться операція взяття повної чи частокової похідної функції?',          wrong1:'А. Логарифмування',   wrong2:'Б. Потенціювання',      correct:'В. Диференціювання',       wrong3:'Г. Інтегрування'},
    {question:'Якою літерою у фізиці позначається заряд?',                                      wrong1:'А. F',                wrong2:'Б. a',                  correct:'В. q',                     wrong3:'Г. Q'},                            
    {question:'Який історичний діяч ввів символ V, як знак перемоги?',                          correct:'А. Вінстон Черчіль', wrong1:'Б. Наполеон Бонапаарт', wrong2:'В. Олександр Македонський', wrong3:'Г. Атилла'},
    {question:'Хто був відповідальним за створення Нічного Короля у серіалі "Ігри престолів"?', wrong1:'А. Таргаріани',       correct:'Б. Діти лісу',         wrong2:'В. Джон Сноу',              wrong3:'Г. Ланістери'   }
];

let question_block3 = [
    {question:'Яка найбільша молекула є частиною людського тіла?',                     wrong1:'А. Молекула води',              correct:'Б. Хромосома 1',      wrong2:'В. Хромосома 2',              wrong3:'Г. Яйцеклітина'},
    {question:'Який метал був відкритий Гансом Крістіаном Ерстедом у 1825 році?',      wrong1:'А. Мідь',                       wrong2:'Б. Цинк',              wrong3:'В. Срібло',                   correct:'Г. Алюміній'},
    {question:'Хто винайшов консервну банку для консервування у 1810 році?     ',      wrong1:'А. Джон Старли',                wrong2:'Б. Альфред Нобель',    correct:'В. Питер Дюран',             wrong3:'Г. Ливай Страус'},
    {question:'Скільки соняшників було у третій версії картини Ван Гога «Соняшники»?', wrong1:'А. 3',                          wrong2:'Б. 6',                 wrong3:'В. 9',                        correct:'Г. 12'},
    {question:'Що на візитівці Аль Капоне було зазначено, чим він займається?',        correct:'А. Продавець уживаних меблів', wrong1:'Б. Чоловік на годину', wrong2:'В. Дегустатор міцних нопоїв', wrong3:'Г. Мисливець за мурахами'}
];

function shuffle(){
    return Math.random() - 0.5;
}

question_block1.sort(shuffle);
question_block2.sort(shuffle);
question_block3.sort(shuffle);

let questionsAll = [].concat(question_block1[0],question_block1[1],question_block1[2],question_block1[3],question_block1[4],
                             question_block2[0],question_block2[1],question_block2[2],question_block2[3],question_block2[4],
                             question_block3[0],question_block3[1],question_block3[2],question_block3[3],question_block3[4],);

function increseScore(){
    count++;
    document.querySelector('#score').children[count].style.backgroundColor = 'orange';
    document.querySelector('#score').children[count].style.color = 'black';
    document.querySelector('#score').children[count].style.textShadow = '1px 1px gray';
    document.querySelector('#score').children[count].style.borderRadius = '20px';

    document.querySelector('#score').children[count-1].style.background = 'none';
    document.querySelector('#score').children[count-1].style.color = 'orange';
    document.querySelector('#score').children[count-1].style.textShadow = '1px 1px black';
    document.querySelector('#score').children[count-1].style.borderRadius = '20px';
}

function changeQuestion(){
    question.textContent = Object.values(questionsAll[0])[0];
    correct = questionsAll[0].correct;
    answers.children[0].textContent = Object.values(questionsAll[0])[1];
    answers.children[1].textContent = Object.values(questionsAll[0])[2];
    answers.children[2].textContent = Object.values(questionsAll[0])[3];
    answers.children[3].textContent = Object.values(questionsAll[0])[4];
    
    hints.children[0].style.pointerEvents='auto';
    hints.children[1].style.pointerEvents='auto';

    hints.children[0].style.opacity = '1';
    hints.children[1].style.opacity = '1';
    timer.textContent = 60;
    lock = true;

    for (let ans of answers.children){
        ans.style.backgroundColor='orange';
        ans.style.opacity='1';
    }
}

function friendCallHint(val){
    close_popup.onclick = function (){
        popup.style.opacity = '0';
        popup.style.visibility = 'hidden';
    }
    popup_title.textContent = `${friends[Math.floor(Math.random() * ((friends.length - 1) + 1))]}:`
    popup_content.textContent = `"Я абсолютно впевнений, що це відповідь ${answers.children[val].textContent[0]}."`;
    popup.style.opacity = '1';
    popup.style.visibility = 'visible';
    hints.children[1].style.backgroundColor = '#e62e50'
    friend_call = false;
}

function endGame(str){
    close_popup.onclick = function (){
        window.location.reload();
    }
    timer.style.opacity = '0';
    timer.textContent = 6000000;
    rotation.style.animation = 'none';
    popup_title.textContent = 'Повідомлення:'
    popup_content.textContent = `Нажаль, ${player_name}, це неправильна відповідь, гра закінчена. Ваш виграш складає ${str}.`
    popup.style.opacity = '1';
    popup.style.visibility = 'visible';
}

play.onclick = function(){

    if (document.querySelector('#enter_name').value!='' && isNaN(+document.querySelector('#enter_name').value)){
        document.querySelector('#score').children[count].style.backgroundColor = 'orange';
        document.querySelector('#score').children[count].style.color = 'black';
        document.querySelector('#score').children[count].style.textShadow = '1px 1px gray';
        document.querySelector('#score').children[count].style.borderRadius = '20px';

        welcome_page.style.display = 'none';
        game_page.style.display = 'flex';
        player_name = document.querySelector('#enter_name').value;
        question.textContent = Object.values(question_block1[0])[0];
        correct = question_block1[0].correct;
        timer.textContent = 60;
        Timer();
        changeQuestion();
        sound_start.play();
        waiting.play();
    } else {
        no_name.style.display = 'block';
    }

    
}

hints.addEventListener('click',function(event){
    if (!event.target.classList.contains('hint')) return;


    if (event.target == hints.children[0] && fifty_fifty){
        setTimeout(function(){
            hints.children[1].style.pointerEvents ='none';
            hints.children[1].style.opacity = '0.5';
            if (answers.children[0].textContent==correct){
                answers.children[1].style.opacity = '0.5';
                answers.children[2].style.opacity = '0.5';
                hints.children[0].style.backgroundColor = '#e62e50'
                fifty_fifty = false;
            } else if (answers.children[1].textContent==correct){
                answers.children[0].style.opacity = '0.5';
                answers.children[3].style.opacity = '0.5';
                hints.children[0].style.backgroundColor = '#e62e50'
                fifty_fifty = false;
            } else if (answers.children[2].textContent==correct){
                answers.children[0].style.opacity = '0.5';
                answers.children[1].style.opacity = '0.5';
                hints.children[0].style.backgroundColor = '#e62e50'
                fifty_fifty = false;
            } else if (answers.children[3].textContent==correct){
                answers.children[1].style.opacity = '0.5';
                answers.children[2].style.opacity = '0.5';
                hints.children[0].style.backgroundColor = '#e62e50'
                fifty_fifty = false;
            }
        },300)
        


    } else if (event.target == hints.children[1] && friend_call){
        setTimeout(function(){
            hints.children[0].style.pointerEvents='none';
            hints.children[0].style.opacity = '0.5';
            if (answers.children[0].textContent==correct){

                friendCallHint(0);

            } else if (answers.children[1].textContent==correct){

                friendCallHint(1);

            } else if (answers.children[2].textContent==correct){

                friendCallHint(2);

            } else if (answers.children[3].textContent==correct){

                friendCallHint(3);
            }
        },300)
        
    } 
})

answers.addEventListener('click',function(event){
    
    if (!event.target.classList.contains('answer')) return;
    const answer = event.target.innerText;

    switch(answer){
        
        case correct:
                if (count<14 && lock){
                    lock = false;
                    questionsAll.splice(0,1);
                    setTimeout(function(){
                        true_answer.play();
                        sound_start.pause();
                        wrong_answer.pause();
                        waiting.pause();
                        win.pause();
                        event.target.style.backgroundColor='#39e31b';
                        rotation.style.animation = 'none';
                        setTimeout(function(){
                            waiting.play();
                            increseScore();
                            changeQuestion();
                            rotation.style.animation = 'spin 10s linear 0s infinite';
                        },900)
                    },900);
            } 
                else if (count>=14 && lock) {
                    setTimeout(function(){
                        event.target.style.backgroundColor='#39e31b';
                        sound_start.pause();
                        true_answer.pause();
                        wrong_answer.pause();
                        waiting.pause();
                        win.play();
                        rotation.style.animation = 'none';
                        setTimeout(function(){
                                close_popup.onclick = function (){
                                    window.location.reload();
                                }
                                timer.style.opacity = '0';
                                timer.textContent = 6000000;
                                popup_title.textContent = 'Повідомлення:'
                                popup_content.textContent = `Вітаємо, ${player_name}, ви відповіли правильно на всі запитання і стаєте власником головного призу у розмірі 1000000 ₴.`
                                popup.style.opacity = '1';
                                popup.style.visibility = 'visible';
                        },900)
                    },900) 
                }  
        break;

        default:
            if (count<5){
                setTimeout(function(){
                    sound_start.pause();
                    true_answer.pause();
                    waiting.pause();
                    win.pause();
                    wrong_answer.play();
                    event.target.style.backgroundColor='#e32929';
                    setTimeout(function(){
                        endGame('0 ₴')
                    },900)
                },900)

            } else if (count>=5 && count<10) {
                setTimeout(function(){
                    sound_start.pause();
                    true_answer.pause();
                    waiting.pause();
                    wrong_answer.play();
                    event.target.style.backgroundColor='#e32929';
                    setTimeout(function(){
                        endGame('1000 ₴')
                    },900)
                },900)

            } else if (count>=10 && count<15){
                setTimeout(function(){
                    sound_start.pause();
                    true_answer.pause();
                    waiting.pause();
                    wrong_answer.play();
                    event.target.style.backgroundColor='#e32929';
                    setTimeout(function(){
                        endGame('32000 ₴')
                    },900)
                },900)
            }
    }
})
