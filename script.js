let playerScore = 0;
let computerScore = 0;

function getComputerChoices() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomChoices = Math.floor(Math.random() * 3);

  return choices[randomChoices];
}

function playerSelection() {
  let playerChoices = prompt(
    "Masukan pilihan anda! Rock, Paper, atau Scissors."
  );
  let simplifyPlayerChoices = playerChoices.toLowerCase();

  if (simplifyPlayerChoices === "rock") {
    alert("Kamu memilih " + simplifyPlayerChoices);
  } else if (simplifyPlayerChoices === "paper") {
    alert("Kamu memilih " + simplifyPlayerChoices);
  } else if (simplifyPlayerChoices === "scissors") {
    alert("Kamu memilih " + simplifyPlayerChoices);
  } else {
    alert(
      "Pilihan anda bukanlah sebuah pilihan! Silahkan isikan sesuai dengan instruksi."
    );
  }

  return simplifyPlayerChoices;
}
