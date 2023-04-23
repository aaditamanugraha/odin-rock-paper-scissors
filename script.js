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
    simplifyPlayerInput === "rock" ||
    simplifyPlayerInput === "paper" ||
    simplifyPlayerInput === "scissors"
  ) {
    console.log("OK 200");
  } else {
    alert(
      "Pilihan anda bukanlah sebuah pilihan! Silahkan isikan sesuai dengan instruksi."
    );
  }

  return simplifyPlayerInput;
}
