'use strict';

let game = function() {
    let getRandomNum = function(min, max) {
        Math.floor(Math.random() * max + min);
    };

    let botNum = getRandomNum(1, 100);
    
    let answerCheck = function() {
        prompt('Угадай число от 1 до 100');

        let isNumber = function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        };

        let start = function() {
            answerCheck = prompt('Угадай число от 1 до 100');
        
            while (!isNumber(answerCheck())) {
                answerCheck() = prompt('Введи число!');
            }
        };
        start();
        
        let resultOutput = function() {
            if (botNum > answerCheck()) {
                console.log('Загаданное число больше');
            } else if (botNum < answerCheck()) {
                console.log('Загаданное число меньше');
            } else if (botNum = answerCheck()) {
                console.log('Поздравляю, Вы угадали!!!');
            }
            return botNum
        };
        resultOutput();
        return answerCheck;
    };
    answerCheck();
};
game();
