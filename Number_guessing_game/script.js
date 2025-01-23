'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector(`.message`).textContent = `Correct number! `;
// console.log(document.querySelector('.message').textContent);
// document.querySelector(`.number`).textContent = 13;
// document.querySelector('.score').textContent = 25;

// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When no input detected
  if (!guess) {
    // document.querySelector(`.message`).textContent = 'No number dedected 😒';
    displayMessage('No number dedected 😒');
  } else if (guess === secretNumber) {
    // document.querySelector(
    //   `.message`
    // ).textContent = `You won! Should've bought a lottery ticket! 😁`;
    displayMessage(`You won! Should've bought a lottery ticket! 😁`);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.number').style.backgroundColor = '#E5B80B';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    ///////////////When guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber
      //       ? 'Your guess is too high! ⬇️'
      //       : 'Your guess is too low!⬆️';
      displayMessage(
        guess > secretNumber
          ? 'Your guess is too high! ⬇️'
          : 'Your guess is too low!⬆️'
      );
      score--;
      document.querySelector('.score').textContent = score;
    }
  }

  //   //when guess is too high
  //   else if (guess > secretNumber)
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'Your guess is too high! ⬇️';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game over! You lose!';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = '#8b0000';
  //     }
  //   //when guess is too low
  //   else if (guess < secretNumber)
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'Your guess is too low!⬆️';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game over! Try again ?';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = '#8b0000';
  //     }
});
//////////////////
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing...AGAIN';
  displayMessage('Start guessing...AGAIN');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.backgroundColor = '#eee';
});
