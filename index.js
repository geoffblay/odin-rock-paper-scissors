function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);
  if (x == 0) {
    return "Rock";
  } else if (x == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  switch (player) {
    case "rock":
      switch (computer) {
        case "rock":
          return "tie";
        case "paper":
          return "you lose";
        case "scissors":
          return "you win";
        default:
          return "unknown input";
      }
    case "paper":
      switch (computer) {
        case "rock":
          return "you win";
        case "paper":
          return "tie";
        case "scissors":
          return "you lose";
        default:
          return "unknown input";
      }
    case "scissors":
      switch (computer) {
        case "rock":
          return "you lose";
        case "paper":
          return "you win";
        case "scissors":
          return "tie";
        default:
          return "unknown input";
      }
    default:
      return "unknown input";
  }
}

function assertScoreChange(player, text) {
  switch (player) {
    case "player":
      if (text == "you win") {
        return 1;
      } else {
        return 0;
      }
    case "computer":
      if (text == "you lose") {
        return 1;
      } else {
        return 0;
      }
  }
}

function assertWinner(player) {
  let game_result = document.createElement("p");
  if (player == 1) {
    game_result.textContent = "You win the game!";
  } else {
    game_result.textContent = "You lost the game.";
  }
  return game_result;
}

const result_div = document.querySelector(".result-div");
const rock_btn = document.querySelector("#rock-btn");
const paper_btn = document.querySelector("#paper-btn");
const scissors_btn = document.querySelector("#scissors-btn");

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let result_text = "";
  let result = document.createElement("p");
  let running = document.createElement("p");

  rock_btn.addEventListener("click", () => {
    result_div.innerHTML = ''
    result_text = playRound("rock", getComputerChoice());
    playerScore += assertScoreChange("player", result_text);
    computerScore += assertScoreChange("computer", result_text);
    result.textContent = result_text;
    running.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
    result_div.appendChild(result);
    result_div.appendChild(running);
    if (playerScore >= 5) {
      result_div.appendChild(assertWinner(1));
      playerScore = 0
      computerScore = 0
    } else if (computerScore >= 5) {
      result_div.appendChild(assertWinner(0));
      playerScore = 0
      computerScore = 0
    }
  });

  paper_btn.addEventListener("click", () => {
    result.textContent = playRound("paper", getComputerChoice());
    result_div.appendChild(result);
  });

  scissors_btn.addEventListener("click", () => {
    result.textContent = playRound("scissors", getComputerChoice());
    result_div.appendChild(result);
  });
}

game();
