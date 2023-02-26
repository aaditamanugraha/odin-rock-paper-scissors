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
    console.log(playerScore);
    console.log(computerScore);
  }
}

function playRound(playerSelection, computerSelection) {
  let upperCasePlayer = playerSelection.toUpperCase();

  if (upperCasePlayer === computerSelection) {
    return "Draw! Your choise and the computer choice are same.";
  } else if (upperCasePlayer === "ROCK" && computerSelection === "SCISSORS") {
    return `You win! ${upperCasePlayer} beats ${computerSelection}.`;
  } else if (upperCasePlayer === "PAPER" && computerSelection === "ROCK") {
    return `You win! ${upperCasePlayer} beats ${computerSelection}.`;
  } else if (upperCasePlayer === "SCISSORS" && computerSelection === "PAPER") {
    return `You win! ${upperCasePlayer} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${upperCasePlayer}.`;
  }
}
