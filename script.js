let playerScore = 0;
let computerScore = 0;

function getComputerChoices() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoices = Math.floor(Math.random() * 3);

  return choices[randomChoices];
}

function getPlayerChoices() {
  let playerInput = prompt("Masukan pilihan anda! Rock, Paper, atau Scissors.");
  let simplifyPlayerInput = playerInput.toLowerCase();

  if (
    simplifyPlayerInput !== "rock" &&
    simplifyPlayerInput !== "paper" &&
    simplifyPlayerInput !== "scissors"
  ) {
    alert(
      "Pilihan anda bukanlah sebuah pilihan! Silahkan isikan sesuai dengan instruksi."
    );
  }

  return simplifyPlayerInput;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("Draw! Silahkan mulai ulang");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    alert(
      "You Win! Player choose " +
        playerSelection +
        " and Computer choose " +
        computerSelection
    );
  } else {
    alert(
      "You Lose! Player choose " +
        playerSelection +
        " and Computer choose " +
        computerSelection
    );
  }
}

function play(playerSelection) {
  computerSelection = getComputerChoices();
  playRound(playerSelection, computerSelection);

  console.log(
    "Player choose " +
      playerSelection +
      " and Computer choose " +
      computerSelection
  );
}
