let playerPoints = 0;
let computerPoints = 0;

const buttons = document.querySelectorAll("button")
const messageArea = document.querySelector("#message > p")
const playerScore = document.querySelector("#player-scoreboard")
const cpuScore = document.querySelector("#cpu-scoreboard")





function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}


function resetGameButton(){
    const container = document.querySelector("#container")

    const resetButton = document.createElement('button');
    resetButton.classList.add('resetButton');
    resetButton.textContent = 'Reset the Game';
    

    container.appendChild(resetButton)

    resetButton.addEventListener('click', function(e){
        location.reload();
    })
}

function checkScore(){
    if(playerPoints == 5){
        messageArea.textContent = "You Win! Game Over...";
        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;
        resetGameButton();
    } else if (computerPoints ==5){
        messageArea.textContent = "You Lose! Game Over...";
        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;
        resetGameButton();
    }
}



function playRound(playerSelection, computerSelection){
    
    
    playerSelection = playerSelection.toLowerCase()
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    
    
    let winMessage = "You Win! " + playerSelection + " Beats " + computerSelection;
    let loseMessage = "You Lose! " + computerSelection + " Beats " + playerSelection;
    
    
    if (playerSelection == computerSelection){

        messageArea.textContent = "It's a draw. You both picked " + computerSelection;

    } else if(
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')){
            messageArea.textContent = winMessage;
            playerPoints++;
    } else{
            messageArea.textContent = loseMessage;
            computerPoints++;

    }
    
    checkScore();

    playerScore.textContent = playerPoints;
    cpuScore.textContent = computerPoints;
}
 
            


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(button.id, computerPlay());
    });
});

    

