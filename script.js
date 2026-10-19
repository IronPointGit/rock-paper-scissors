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


let getHumanChoice = () => {
    let choice = prompt("Input your choice");
    if (choice === null) {
        console.log('please input a choice');
        getHumanChoice();
    }
    else {
        return choice;
    }
    
};

let humanScore = 0;
let computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        console.log("Its a draw! Play again");
       
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose! Paper beats Rock');
        computerScore++
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You Win! Rock beats Scissors');
        humanScore++
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose! Scissors beats Paper');
        computerScore++
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats Rock');
        humanScore++
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose! Rock beats Scissors');
        computerScore++
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You Win! Scissors beats Paper');
        humanScore++
    }

};



let playGame = () => {
    let round = 0;
    let numberOfRounds = 5;
    while(round < numberOfRounds) {
        playRound();
        round++
    }
    if(computerScore > humanScore) {
        console.log(`computer: ${computerScore}, player: ${humanScore}, You Lose!`);
    }
    else if (computerScore == humanScore) {
        console.log(`computer: ${computerScore}, player: ${humanScore}, You tied!`);
    }
    else {
        console.log(`computer: ${computerScore}, player: ${humanScore}, You Win!`);
    }
}

playGame();