'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};  

let game = function() {
    let getRandomNum = function(min, max) {
        return Math.floor(Math.random() * max + min);
    };

    let botNum = getRandomNum(1, 100);
    console.log(botNum);
    let answerCheck = function() {
        let userAmount = prompt('Угадай число от 1 до 100');
        console.log(userAmount);
    
        if (userAmount === null) {
            alert('Спасибо за игру!');
            return;
        }

        if (userAmount !== null) {
            userAmount = +userAmount;
        }
        if (!isNumber(userAmount)) {
            alert('Введи число!');
            answerCheck();
        } else if (botNum > userAmount) {
            console.log(userAmount);
            alert('Загаданное число больше');
            answerCheck();
        } else if (botNum < userAmount) {
            alert('Загаданное число меньше');
            answerCheck();
        } else if (botNum === userAmount) {
            alert('Поздравляю, Вы угадали!');
        }    
    };
    answerCheck();
    // console.dir(answerCheck);
};
game();