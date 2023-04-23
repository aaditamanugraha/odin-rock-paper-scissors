let playerScore = 0;
let computerScore = 0;

function getComputerChoices() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomChoices = Math.floor(Math.random() * 3);

  return choices[randomChoices];
}
