[Start] --> Initialize Game (initializeGame)
|
|----> Generate Secret Number (generateSecretNumber)
|----> Display Initial Message, Score, and Hide Secret Number
|----> Reset Background Color and Number Display Width
|
v
[User Guesses] --> Check Guess (checkGuess)
|
|----> Get User Guess
|----> Is Guess Valid?
|
|----> No --> Display Error Message
|
v
|----> Yes --> Is Guess Correct?
|
|----> No --> Decrease Guesses Left
| |
| |----> Are Guesses Left?
| |
| |----> Yes --> Display "Too High/Low" Message
| | |
| | |----> Update Score
| | |
| | v
| | [User Guesses]
| |
| v
|
|----> Yes --> Display "Correct Number" Message
|
|----> Update Highscore (if applicable)
|
v
[Game Over] --> Display Appropriate Message
|
|----> Update Score and/or Highscore (if applicable)
|
v
[Restart Game] --> Initialize Game (initializeGame)
|
v
[End]
