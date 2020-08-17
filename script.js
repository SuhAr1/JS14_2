'use strict';

let game = function() {
    let getRandomNum = function(min, max) {
    return Math.floor(Math.random() * max + min);
    };

    let botNum = getRandomNum(1, 100);
    
    let answerCheck = function(userAmount) {
        

        userAmount = prompt('Угадай число от 1 до 100');
            while (!isNumber(userAmount)) {
            userAmount = prompt ('Введи число!')
            };
        
        
        if (botNum > userAmount) {
            console.log('Загаданное число больше');
        } else if (botNum < userAmount) {
            console.log('Загаданное число меньше');
        } else if (botNum = userAmount) {
            console.log('Поздравляю, Вы угадали!!!');
        }
        return botNum
        
        return answerCheck;
    };
    let userAmount = answerCheck();
};
game();


        
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};