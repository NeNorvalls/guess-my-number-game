'use strict'; // Enforcing strict mode for better error handling

let score, highscore, guessesLeft, secretNumber; // Declaring global variables

// Function to initialize the game state
const initializeGame = function () {
  score = 20; // Initial score
  guessesLeft = 3; // Initial number of guesses allowed
  secretNumber = generateSecretNumber(); // Generate a secret number
  document.querySelector('.message').textContent = 'Start guessing...'; // Display initial message
  document.querySelector('.score').textContent = score; // Display initial score
  document.querySelector('.number').textContent = '?'; // Hide the secret number
  document.querySelector('.guess').value = ''; // Clear the input field
  document.querySelector('body').style.backgroundColor = '#222'; // Reset background color
  document.querySelector('.number').style.width = '15rem'; // Reset number display width
};

// Function to generate a random secret number
const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1; // Generating a random number between 1 and 20
};

// Function to display messages to the user
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message; // Displaying the provided message
};

// Function to check the user's guess
// Function to check the user's guess
const checkGuess = function () {
  const guess = Number(document.querySelector('.guess').value); // Getting the user's guess
  console.log('User guess:', guess); // Logging the user's guess

  if (!guess || guess < 1 || guess > 20) {
    // Checking if the guess is valid
    displayMessage('Invalid input! Please enter a number between 1 and 20.'); // Displaying error message for invalid input
  } else if (guess === secretNumber) {
    // Checking if the guess is correct
    displayMessage('Correct Number!'); // Displaying message for correct guess
    document.querySelector('.number').textContent = secretNumber; // Revealing the secret number
    document.querySelector('body').style.backgroundColor = '#60b347'; // Changing background color for correct guess
    document.querySelector('.number').style.width = '30rem'; // Adjusting width to accommodate longer numbers
    if (score > highscore || !highscore) {
      // Checking for new high score or if there's no previous high score
      highscore = score; // Updating high score
      document.querySelector('.highscore').textContent = highscore; // Displaying new high score
    }
  } else {
    // Handling incorrect guesses
    guessesLeft--; // Decreasing remaining guesses
    if (guessesLeft === 0) {
      // Checking if no guesses left
      displayMessage('You lost the game!'); // Displaying message for losing the game
      document.querySelector('.score').textContent = 0; // Setting score to 0
      document.querySelector('.number').textContent = secretNumber; // Revealing the secret number
      document.querySelector('body').style.backgroundColor = '#ff4444'; // Changing background color for losing
    } else {
      // Handling incorrect guess but still have guesses left
      displayMessage(
        guess > secretNumber
          ? 'Too High! Guesses left: ' + guessesLeft
          : 'Too Low! Guesses left: ' + guessesLeft
      ); // Displaying message for incorrect guess
      score--; // Decreasing score for each incorrect guess
      document.querySelector('.score').textContent = score; // Displaying updated score
    }
  }
};

// Event listener for checking the guess
document.querySelector('.check').addEventListener('click', function () {
  if (guessesLeft > 0) {
    // Checking if guesses are still remaining
    checkGuess(); // Calling function to check the guess
  }
});

// Event listener for restarting the game
document.querySelector('.again').addEventListener('click', function () {
  initializeGame(); // Restarting the game
});

// Initializing the game when the page loads
initializeGame();
