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

function play(playerSelection, computerSelection) {
  playerSelection = getPlayerChoices();
  computerSelection = getComputerChoices();

  if (playerSelection === computerSelection) {
    alert("Draw! Silahkan mulai ulang");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert(
      "You Win! Player choose " +
        playerSelection +
        " and Computer choose " +
        computerSelection
    );
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert(
      "You Win! Player choose " +
        playerSelection +
        " and Computer choose " +
        computerSelection
    );
  } else if (playerSelection === "paper" && computerSelection === "rock") {
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

  console.log("Player memilih " + playerSelection);
  console.log("Computer memilih " + computerSelection);
}

const rockBtn = document.getElementById("btn-rock");
const paperBtn = document.getElementById("btn-paper");
const scissorsBtn = document.getElementById("btn-scissors");

rockBtn.addEventListener("click", () => {
  console.log(rockBtn.innerText);

  return rockBtn.innerText;
});
paperBtn.addEventListener("click", () => {
  console.log(paperBtn.innerText);

  return paperBtn.innerText;
});
scissorsBtn.addEventListener("click", () => {
  console.log(scissorsBtn.innerText);

  return scissorsBtn.innerText;
});
