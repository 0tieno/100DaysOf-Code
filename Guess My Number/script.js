'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Handling Click Events //
let secretNumber = Math.trunc(Math.random()*20 +1);
let score = 20;
let highScore =0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no guess
    if(!guess){
        displayMessage(' ⛔ No Number!');

        // when player wins
    }else if(guess ===  secretNumber){
        // document.querySelector('.message').textContent = '🎉  Correct Number!';

        displayMessage('🎉  Correct Number!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess is wrong//
    } else if (guess !==secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';

            displayMessage( guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            // document.querySelector('.message').textContent = '💥 You Lost the game!';

            displayMessage('💥 You Lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
         
    // when guess is too high//

    // else if(guess>secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈 Too high!'
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '💥 You Lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    //     // when guess is too low
    // }else if (guess<secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📉 Too Low!'
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '💥 You Lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
})

// Again button //
const Again = document.querySelector('.again');

Again.addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20 +1);

    // document.querySelector('.message').textContent = 'Start Guessing...';

    displayMessage('Start Guessing...');

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
