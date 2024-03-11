# guess-my-number-game

Creating a simple game with simple HTML, CSS and Javascript.

The project is deployed and can be accessed [here](https://guess-my-number-game-2024.netlify.app/).

Summary of how the app works:

Initialization: When the page loads, a random number between 1 and 20 is generated and stored as the secretNumber. The initial score is set to 20, and the high score is set to 0.

User Interaction:

The user can enter a guess into the input field and click the "Check!" button.
When the button is clicked, the app compares the user's guess with the secretNumber.
If the guess is correct, the app displays "Correct Number!", reveals the secretNumber, updates the background color, adjusts the width of the number display, and updates the high score if necessary.
If the guess is incorrect, the app provides feedback ('Too High!' or 'Too Low!'), decrements the score, and updates the score display.
If the score reaches 0, the app displays "You lost the game!" and resets the score to 0.
Restarting the Game:

The user can click the "Again!" button to restart the game.
This resets the score to 20, generates a new secretNumber, resets the message to 'Start guessing...', hides the secretNumber, clears the input field, resets the background color, and adjusts the width of the number display.
Overall, the app provides a simple guessing game where the user tries to guess a random number within a specified range. The user's score is tracked, and they can attempt multiple guesses until they either guess correctly or run out of attempts.

Explanation for each codes of lines:
"use strict";

This line enables strict mode in JavaScript, which helps catch common coding errors and makes debugging easier.
const secretNumber = Math.trunc(Math.random() \* 20) + 1;

This line generates a random number between 1 and 20 (inclusive) and stores it in the constant secretNumber.
let score = 20;

This line initializes the variable score to 20. This variable will track the player's current score.
let highscore = 0;

This line initializes the variable highscore to 0. This variable will track the player's highest score.
document.querySelector('.number').textContent = '?';

This line sets the initial text content of the element with the class .number to '?'.
document.querySelector('.check').addEventListener('click', function () { ... });

This line adds an event listener to the element with the class .check for the 'click' event. When the element is clicked, the function inside the event listener is executed.
const guess = Number(document.querySelector('.guess').value);

This line retrieves the value entered by the user in the input field with the class .guess and converts it to a number using the Number() function. It then stores this value in the constant guess.
if (!guess) { ... }

This line checks if the user has entered a valid guess. If the guess is not a number (e.g., empty or NaN), it displays 'No number!' in the message area.
else if (guess === secretNumber) { ... }

This line checks if the user's guess matches the secretNumber. If it does, it displays 'Correct Number!' in the message area, reveals the secret number, changes the background color to green, adjusts the width of the number display, and updates the high score if necessary.
else if (guess !== secretNumber) { ... }

This line handles the case where the user's guess does not match the secretNumber. It checks if the guess is too high or too low and updates the message accordingly. It also decrements the score and updates the score display.
document.querySelector('.again').addEventListener('click', function () { ... });
This line adds an event listener to the element with the class .again for the 'click' event. When the element is clicked, the function inside the event listener is executed.
Inside the event listener for .again:
score = 20;: Resets the score to 20.
secretNumber = Math.trunc(Math.random() \* 20) + 1;: Generates a new random number for the next game.
document.querySelector('.message').textContent = 'Start guessing...';: Resets the message to 'Start guessing...'.
document.querySelector('.score').textContent = score;: Resets the score display to 20.
document.querySelector('.number').textContent = '?';: Hides the secret number again.
document.querySelector('.guess').value = '';: Clears the input field.
document.querySelector('body').style.backgroundColor = '#222';: Resets the background color to its default.
document.querySelector('.number').style.width = '15rem';: Resets the width of the number display.
