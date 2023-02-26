function getComputerChoice() {
  const choiceOptions = ["ROCK", "PAPER", "SCISSORS"];
  let randomNumber = Math.floor(Math.random() * choiceOptions.length);
  let randomChoice = choiceOptions[randomNumber];

  return randomChoice;
}

let playerScore = 0;
let computerScore = 0;

function game() {
  while (playerScore < 5 && computerScore < 5) {
    const playerSelection = prompt(
      "Choose between 'Rock', 'Paper', or 'Scissors'."
    );
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
    winGame();
  }
}

function playRound(playerSelection, computerSelection) {
  let upperCasePlayer = playerSelection.toUpperCase();

  if (upperCasePlayer === computerSelection) {
    return "Draw! Your choise and the computer choice are same.";
  } else if (upperCasePlayer === "ROCK" && computerSelection === "SCISSORS") {
    playerScore += 1;
    return `You win! ${upperCasePlayer} beats ${computerSelection}.`;
  } else if (upperCasePlayer === "PAPER" && computerSelection === "ROCK") {
    playerScore += 1;
    return `You win! ${upperCasePlayer} beats ${computerSelection}.`;
  } else if (upperCasePlayer === "SCISSORS" && computerSelection === "PAPER") {
    playerScore += 1;
    return `You win! ${upperCasePlayer} beats ${computerSelection}.`;
  } else {
    computerScore += 1;
    return `You lose! ${computerSelection} beats ${upperCasePlayer}.`;
  }
}

function winGame() {
  if (playerScore === 5) {
    alert("You win the game!");
  } else if (computerScore === 5) {
    alert("You lose the game!");
  } else {
    console.log("Your score is " + playerScore);
    console.log("Computer score is " + computerScore);
  }
}
