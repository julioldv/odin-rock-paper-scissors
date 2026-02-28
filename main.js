function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper or scissors:").toLowerCase();

  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        console.log("It's a tie!");
      } else if (computerChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      } else if (computerChoice === "paper") {
        console.log("It's a tie!");
      } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      } else if (computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
      } else {
        console.log("It's a tie!");
      }
    } else {
      console.error("Invalid choice");
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Player: ${humanScore}, Computer: ${computerScore}`);
}

playGame();

