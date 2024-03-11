'use strict';

// Generate a random number between 1 and 20 and store it in secretNumber
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number:', secretNumber);

// Initialize variables for score, highscore, and number of guesses
let score = 20;
let highscore = 0;
let guessesLeft = 3; // Set the number of allowed guesses

// Set initial text content of element with class .number to '?'
document.querySelector('.number').textContent = '?';

// Initialize the message to 'Start guessing...' when the page loads
document.querySelector('.message').textContent = 'Start guessing...';

// Add event listener to element with class .check for click event
document.querySelector('.check').addEventListener('click', function () {
  // Check if the player has any guesses left
  if (guessesLeft > 0) {
    // Retrieve user's guess and convert it to a number
    const guess = Number(document.querySelector('.guess').value);
    console.log('User guess:', guess);

    // Check if guess is not a number
    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secretNumber) {
      // Check if guess matches secretNumber
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      // Update highscore if necessary
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      // If the guess is wrong, provide feedback and decrement guessesLeft
      guessesLeft--;
      if (guessesLeft === 0) {
        // If no guesses left, player loses the game
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#ff4444';
      } else {
        // Provide feedback on whether guess is too high or too low
        document.querySelector('.message').textContent =
          guess > secretNumber
            ? 'Too High! Guesses left: ' + guessesLeft
            : 'Too Low! Guesses left: ' + guessesLeft;
      }
    }
  }
});

// Add event listener to element with class .again for click event
document.querySelector('.again').addEventListener('click', function () {
  // Reset score, generate new secretNumber, and reset message
  score = 20;
  guessesLeft = 3; // Reset guessesLeft
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('New Secret Number:', secretNumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  // Reset score, number display, and input field
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // Reset background color and number display width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
