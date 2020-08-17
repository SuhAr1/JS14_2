'use strict';

let game = function(min, max) {   
    console.log('game: ', game);
    min = Math.ceil(min);
    max = Math.floor(max);
    Math.floor(Math.random() * (max - min + 1)) +min;
    
    let answerCheck = function() {
        prompt('Угадай число от 1 до 100');

        let isNumber = function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        };

        let start = function() {
            answerCheck() = prompt('Угадай число от 1 до 100');
        
            while (!isNumber(answerCheck())) {
                answerCheck() = prompt('Введи число!');
            }
        };
        start();
        
        let resultOutput = function() {
            if (game() > answerCheck()) {
                console.log('Загаданное число больше');
            } else if (game() < answerCheck()) {
                console.log('Загаданное число меньше');
            } else if (game() = answerCheck()) {
                console.log('Поздравляю, Вы угадали!!!');
            }
            return game
        };
        resultOutput();
    };
    answerCheck();
};
game(1, 100);
