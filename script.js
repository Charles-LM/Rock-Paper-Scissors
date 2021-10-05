let playerScore = 0;
let computerScore = 0;
const validation = ["rock", "paper", "scissors"];


function computerPlay(){
    const number = Math.floor(Math.random()*3 + 1); //generates a random number from 1-3

    if (number % 3 === 0){
        return 'rock';
    }
    else if (number % 2 === 0){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {

        return `It's a draw! Your score: ${playerScore}, Computer score: ${computerScore}`;

        
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;

        return `You win! Rock beats Scissors! Your score: ${playerScore}, Computer score: ${computerScore}`;

    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;

        return `Computer wins! Rock beats Scissors! Your score: ${playerScore}, Computer score: ${computerScore}`;

    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;

        return `You win! Scissors beats Paper! Your score: ${playerScore}, Computer score: ${computerScore}`;

    }
    else{
        computerScore++;

        return `Computer wins! Scissors beats Paper! Your score: ${playerScore}, Computer score: ${computerScore}`;

    }

}

function game(){
    for (let i = 0; i < 5; i++){
     playerSelection = window.prompt("Type either: rock, paper, scissors");
     if (validation.includes(playerSelection.toLowerCase())) {
        console.log(playRound(playerSelection, computerSelection));
        continue;
     } else{
         console.log("Invalid");
         break;
     }

    }
    //run it 5 times

}

//const playerSelection = "scissors";
const computerSelection = computerPlay();
game();