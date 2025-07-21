let choices = [`rock`,`paper`, `scissors`]
let computerDisplay = document.getElementById(`computerResult`);
let playerDisplay = document.getElementById(`playerResult`)
let resultDisplay = document.getElementById(`resultResult`);
let scoreIdentifier = document.getElementById(`scoreIdentifier`);
let computerScoreDisplay = document.getElementById(`computerScoreDisplay`);
let playerScoreDisplay = document.getElementById(`playerScoreDisplay`)
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    let result = ``
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    if(playerChoice == computerChoice){
        result = `IT'S A TIE!`
    }
    else{
        switch(playerChoice){
        case `rock`:
            result = computerChoice === `scissors` ? `YOU WIN!` : `YOU LOSE!`
            break;
        case `paper`:
            result = computerChoice === `rock` ? `YOU WIN!` : `YOU LOSE!`
            break;
        case `scissors`:
            result = computerChoice === `paper` ? `YOU WIN!` : `YOU LOSE!`
            break;
        }
    }  
    computerDisplay.textContent =`COMPUTER: ${computerChoice}`;
    playerDisplay.textContent = `PLAYER: ${playerChoice}`
    resultDisplay.textContent = result; 
    resultDisplay.classList.remove(`greenText`, `redText`,`yellowText`);

        switch(result){
            case `IT'S A TIE!`:
                scoreIdentifier.textContent = `🤔`
                playerScore += 0;
                computerScore += 0;
                resultDisplay.classList.add(`yellowText`);
                break;
            case `YOU WIN!`:
                scoreIdentifier.textContent = `😁`
                playerScore ++
                playerScoreDisplay.textContent = playerScore
                resultDisplay.classList.add(`greenText`)
                break;
            case `YOU LOSE!`:
                scoreIdentifier.textContent = `😢`
                computerScore ++
                computerScoreDisplay.textContent = computerScore
                resultDisplay.classList.add(`redText`)
                break;
        }
    }
