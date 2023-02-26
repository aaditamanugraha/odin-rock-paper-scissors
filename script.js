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
    console.log("You win! " + playerSelection + " beats " + computerSelection);
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    console.log("You lose! " + computerSelection + " beats " + playerSelection);
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    console.log(
      "Draw! " + computerSelection + " can't beats " + playerSelection
    );
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    console.log("You win! " + playerSelection + " beats " + computerSelection);
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    console.log("You lose! " + computerSelection + " beats " + playerSelection);
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    console.log(
      "Draw! " + computerSelection + " can't beats " + playerSelection
    );
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    console.log("You win! " + playerSelection + " beats " + computerSelection);
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    console.log("You lose! " + computerSelection + " beats " + playerSelection);
  } else if (
    playerSelection === "SCISSORS" &&
    computerSelection === "SCISSORS"
  ) {
    console.log(
      "Draw! " + computerSelection + " can't beats " + playerSelection
    );
  }
}
