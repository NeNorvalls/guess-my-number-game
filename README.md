# Guess My Number Game

Creating a simple number guessing game using HTML, CSS, and JavaScript.

The project is deployed and can be accessed [here](https://guess-my-number-game-2024.netlify.app/).

## Summary

The Guess My Number game is a simple interactive game where the player tries to guess a randomly generated number within a specified range. The game provides feedback to the player based on their guesses and allows them to make a limited number of attempts before revealing the correct answer.

## How the Game Works

### Initialization

- When the page loads, a random number between 1 and 20 is generated and stored as the `secretNumber`.
- The initial score is set to 20, and the high score is set to 0.
- The number of allowed guesses is set to 3.

### User Interaction

- The user can enter a guess into the input field and click the "Check!" button.
- When the button is clicked, the app compares the user's guess with the `secretNumber`.
- If the guess is correct, the app displays "Correct Number!", reveals the `secretNumber`, updates the background color, adjusts the width of the number display, and updates the high score if necessary.
- If the guess is incorrect, the app provides feedback ('Too High!' or 'Too Low!'), decrements the score, updates the score display, and decreases the number of remaining guesses.
- If the score reaches 0, the app displays "You lost the game!" and resets the score to 0.

### Restarting the Game

- The user can click the "Again!" button to restart the game.
- This resets the score to 20, generates a new `secretNumber`, resets the message to 'Start guessing...', hides the `secretNumber`, clears the input field, resets the background color, and adjusts the width of the number display.

## Explanation of Code Lines

- `"use strict";`: This line enables strict mode in JavaScript, which helps catch common coding errors and makes debugging easier.
- `const secretNumber = Math.trunc(Math.random() * 20) + 1;`: Generates a random number between 1 and 20 (inclusive) and stores it in `secretNumber`.
- `let score = 20;`: Initializes the variable `score` to 20, which tracks the player's current score.
- `let highscore = 0;`: Initializes the variable `highscore` to 0, which tracks the player's highest score.
- `let guessesLeft = 3;`: Initializes the variable `guessesLeft` to 3, representing the number of allowed guesses.
- `document.querySelector('.number').textContent = '?';`: Sets the initial text content of the element with the class `.number` to '?'.
- Event listeners are added to handle user interactions for checking guesses and restarting the game.

## Conclusion

The Guess My Number game provides a simple and enjoyable experience for players to test their guessing skills. With its intuitive interface and clear feedback mechanisms, players can quickly understand the rules and engage with the game. The limited number of guesses adds an element of challenge and strategy, making each round exciting and rewarding.
