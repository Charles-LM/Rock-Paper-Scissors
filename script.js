let playerScore = 0;
let computerScore = 0;

//const validation = ["rock", "paper", "scissors"];

const player = document.querySelector("p1");
const computer = document.querySelector("p2");
const winner = document.querySelector("h1");




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

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    computer.textContent = `Computer Score: ${computerScore}`;
    player.textContent = `Player Score: ${playerScore}`;

    if (playerSelection === computerSelection) {
        winner.textContent = "Draw!";

        return `It's a draw! Your score: ${playerScore}, Computer score: ${computerScore}`;
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock')||
    (playerSelection === 'scissors' && computerSelection === 'paper')){
        playerScore++;
        winner.textContent = "You won this round!";
        computer.textContent = `Computer Score: ${computerScore}`;
        player.textContent = `Player Score: ${playerScore}`;
        
        return `You win! Your score: ${playerScore}, Computer score: ${computerScore}`;
    }else{
        computerScore++;
        winner.textContent = "You lost this round!";
        computer.textContent = `Computer Score: ${computerScore}`;
        player.textContent = `Player Score: ${playerScore}`;
        
        return `You lose! Your score: ${playerScore}, Computer score: ${computerScore}`;
    }

}

function winnerCheck(playerSelection){
    console.log(playRound(playerSelection));
    if (playerScore === 5){
        winner.textContent = "You won the game!";
        computer.textContent = `Computer Score: ${computerScore}`;
        player.textContent = `Player Score: ${playerScore}`;

       
    }else if(computerScore === 5){
        winner.textContent = "You lost the game!";
        computer.textContent = `Computer Score: ${computerScore}`;
        player.textContent = `Player Score: ${playerScore}`;


    }

}



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        winnerCheck(button.value);
    })

})



// const button = document.querySelectorAll('.buttons');
// for(let i = 0; i < button.length; i++){
//     button[i].addEventListener('click', function(){
//         playRound(button.value)
   
//     });
// }


// function game(){
//     for (let i = 0; i < 5; i++){
//         computerPlay(); 
//         let computerSelection = computerPlay();
//      playerSelection = window.prompt("Type either: rock, paper, scissors");
     
//      if (validation.includes(playerSelection.toLowerCase())) {
//         console.log(playRound(playerSelection, computerSelection));
//         continue;
//      } else{
//          console.log("Invalid");
//          continue;
//      }
//     }
// }
