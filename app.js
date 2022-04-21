let playerScore = 0;
let computerScore = 0;
let playing = true;


const computerPlay = () => {

    const randomNum = Math.floor(Math.random() * 3);

    if(randomNum === 0) {
        return "Rock";
    } else if(randomNum === 1) {
        return "Paper";
    } else if (randomNum === 2) {
        return "Scissors";
    }
};

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

//calculate game score

const totalScore = (score) => {
    if(score.includes('win')) {
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    } else if(score.includes('lose')) {
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    }
};

const defineComputer = (computerSelection) => {
    if (computerSelection === "Rock") {
      computerChoice.textContent = "Rock";
    } else if (computerSelection === "Paper") {
      computerChoice.textContent = "Paper";
    } else if (computerSelection === "Scissor") {
      computerChoice.textContent = "Scissor";
    }
  };

  const defineWinner = (playerScore, computerScore) => {
    if (playerScore === 5 && playerScore > computerScore) {
      winner.textContent = "You won! Congratulations!";
      playing = false;
    } else if (computerScore === 5 && playerScore < computerScore) {
      winner.textContent = "Better luck next time!";
      playing = false;
    }
  };
  
  const game = (choice) => {
    if (playing) {
      const computerSelection = computerPlay();
      const score = playRound(choice, computerSelection);
      defineComputer(computerSelection);
      totalScore(score);
      defineWinner(playerScore, computerScore);
    }
  };

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const computerChoice = document.querySelector('.computerselect');

const playerScoreBoard = document.querySelector(".playerscoreboard");
const computerScoreBoard = document.querySelector(".computerscoreboard");

const winner = document.querySelector('.winner');

rock.addEventListener('click', () => {
    game("Rock");
});

paper.addEventListener('click', () => {
    game("Paper");
});

scissors.addEventListener('click', () => {
    game("Scissors");
});


