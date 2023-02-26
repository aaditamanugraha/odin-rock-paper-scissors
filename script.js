function getComputerChoice() {
  const choiceOptions = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  let randomChoice = choiceOptions[randomNumber];

  console.log(randomChoice);
}
