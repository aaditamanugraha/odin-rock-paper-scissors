function getComputerChoice() {
  const choiceOptions = ["ROCK", "PAPER", "SCISSORS"];
  let randomNumber = Math.floor(Math.random() * 3);
  let randomChoice = choiceOptions[randomNumber];

  return randomChoice;
}

function playRound(player) {
  let playerSelection = player.toUpperCase();
  let computerSelection = getComputerChoice();

  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    alert("You win! " + playerSelection + " beats " + computerSelection);
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    alert("You lose! " + computerSelection + " beats " + playerSelection);
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    alert("Draw! " + computerSelection + " can't beats " + playerSelection);
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    alert("You win! " + playerSelection + " beats " + computerSelection);
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    alert("You lose! " + computerSelection + " beats " + playerSelection);
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    alert("Draw! " + computerSelection + " can't beats " + playerSelection);
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    alert("You win! " + playerSelection + " beats " + computerSelection);
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    alert("You lose! " + computerSelection + " beats " + playerSelection);
  } else if (
    playerSelection === "SCISSORS" &&
    computerSelection === "SCISSORS"
  ) {
    alert("Draw! " + computerSelection + " can't beats " + playerSelection);
  }

  return;
}

function game() {
  let userInput = prompt("Ketik pilihanmu 'Rock', 'Paper', atau 'Scissors'");
  let result = playRound(userInput);

  return result;
}
