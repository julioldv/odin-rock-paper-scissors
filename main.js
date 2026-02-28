const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const buttons = [rockBtn, paperBtn, scissorsBtn];

const score = document.querySelector("#score");
const roundResult = document.querySelector("#roundResult");
const winner = document.querySelector("#winner");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (humanWins) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function handleHumanChoice(choice) {
  const computerChoice = getComputerChoice();
  roundResult.textContent = playRound(choice, computerChoice);
  updateScore();
}

rockBtn.addEventListener("click", (event) => {
  handleHumanChoice("rock");
});

paperBtn.addEventListener("click", (event) => {
  handleHumanChoice("paper");
});

scissorsBtn.addEventListener("click", (event) => {
  handleHumanChoice("scissors");
});


function disableButtons() {
  buttons.forEach((btn) => (btn.disabled = true));
}

function updateScore() {
  score.textContent = `Human: ${humanScore}, Computer:${computerScore}`;
  if (humanScore >= 5) {
    winner.textContent = "HUMAN WON!";
    disableButtons();
  } else if (computerScore >= 5) {
    winner.textContent = "COMPUTER WON!";
    disableButtons();
  }
}
