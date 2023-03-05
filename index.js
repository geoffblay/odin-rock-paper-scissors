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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let player = prompt("Make your choice: ").toLowerCase();
        let computer = getComputerChoice().toLowerCase();
        let result = playRound(player, computer);
        switch (result) {
            case "tie":
                continue;
            case "you win":
                playerScore++;
            case "you lose":
                computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win!!");
    } else if (computerScore > playerScore) {
        console.log("You Lose!!");
    } else {
        console.log("You tied!!");
    }
}

game()