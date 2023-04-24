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
    return "Draw! Let's try another turn.";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You win! Player with ${playerSelection} beats computer with ${computerSelection}`;
  } else {
    return `You lose! Computer with ${computerSelection} beats player with ${playerSelection}`;
  }
}

function play(playerSelection) {
  computerSelection = getComputerChoices();
  const result = playRound(playerSelection, computerSelection);

  alert(result);

  updateScore(result);
}

function updateScore(result) {
  if (result.includes("win")) {
    playerScore++;
  } else if (result.includes("lose")) {
    computerScore++;
  }

  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");

  playerScoreElement.innerText = playerScore;
  computerScoreElement.innerText = computerScore;

  console.log(playerScore, computerScore);
}
