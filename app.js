const computerPlay = () => {
    const gameArray = ['Rock', 'Paper', 'Scissors'];

    const randomNum = Math.floor(Math.random() * gameArray.length);

    return gameArray[randomNum];
}

function playerPick() {
    let playerChoice = prompt("Pick rock, paper or scissors");

    if (playerChoice.toLowerCase() === "rock") {
        playerChoice = "Rock";
     } else if (playerChoice.toLowerCase() === "paper") {
        playerChoice = "Paper";
     }
     else if (playerChoice.toLowerCase() === "scissors") {
        playerChoice = "Scissors";
     }
     else if (playerChoice.toLowerCase() !== "rock" || "scissors" || "paper") {
        alert("Ay, that's not right!");
        playerSelection();
     }
     else {
         alert("Hold up, what's going on 'ere?")
     }
     return playerChoice;
}

const playerSelection = playerPick();
const computerSelection = computerPlay();

const playRound = (playerSelection, computerSelection) => {

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a tie!";
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
        return "You win! Paper beats Rock";
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        return "You lose! Scissors beat Paper";
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
        return "You win! Scissors beat Paper";
    }
    else {
        return "You lose! Rock beats Scissors"
    }
}

console.log(playRound(playerSelection, computerSelection));

const game = () => {
    for(let i = 0; i < 4; i++) {
        console.log(playRound(playerPick(), computerPlay()));
    }
}

console.log(game());
