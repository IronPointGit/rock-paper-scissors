let getComputerChoice = () => {
   let randomNumber = Math.floor(Math.random() * 3);
   let computerChoice = ""
   if(randomNumber == 0) {
    computerChoice = "rock";
   } else if(randomNumber == 1) {
    computerChoice = "paper";
   } else {
    computerChoice = "scissors";
   }
   return computerChoice;
};



let humanScore = 0;
let computerScore = 0;
let score = document.querySelector('.score');
 score.textContent = `human score: ${humanScore} | Computer Score: ${computerScore}`
    

let playRound = (humanChoice, computerChoice) => {
    let result = document.querySelector('.result')
    
    if (humanScore == 5 ) {
        result.textContent = "Human Wins!";
    }
    else if (computerScore == 5) {
        result.textContent = "Computer Wins!"
    }
    else {

        if (humanChoice === computerChoice) {
            result.textContent = "Its a draw! Play again";
        
        }
        else if (humanChoice === 'rock' && computerChoice === 'paper') {
            result.textContent = 'You lose! Paper beats Rock';
            computerScore++
        }
        else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            result.textContent = 'You Win! Rock beats Scissors';
            humanScore++
        }
        else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            result.textContent = 'You lose! Scissors beats Paper';
            computerScore++
        }
        else if (humanChoice === 'paper' && computerChoice === 'rock') {
            result.textContent = 'You win! Paper beats Rock';
            humanScore++
        }
        else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            result.textContent = 'You lose! Rock beats Scissors';
            computerScore++
        }
        else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            result.textContent = 'You Win! Scissors beats Paper';
            humanScore++
        }
    
    }
    score.textContent = `human score: ${humanScore} | Computer Score: ${computerScore}`
};

const rock = document.querySelector("#rock");
rock.addEventListener ("click", () => {
    playRound('rock', getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener ("click", () => {
    playRound('paper', getComputerChoice());
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener ("click", () => {
    playRound('scissors', getComputerChoice());
});


