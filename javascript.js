
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const x = ['rock', 'paper', 'scissors'];
    const r = Math.floor(Math.random()*3);
    return x[r];
}


function playRound(player, computer) {
    if (player === 'rock' && computer === 'paper') {
        computerScore++;
        console.log(`*Rock* defeat *Paper*`)
    } else if (player === 'paper' && computer === 'scissors') {
        computerScore++ ;
        console.log(`*Paper* defeat *Scissors*`)
    } else if (player === 'scissors' && computer === 'rock') {
        computerScore++ ;
        console.log(`*Scissors* defeat *Rock*`)
    } else if (player === 'rock' && computer === 'scissors') {
        playerScore++ ;
        console.log(`*Rock* beats *Scissors*`)
    } else if (player === 'scissors' && computer === 'paper') {
        playerScore++ ;
        console.log(`*Scissors* beats *Paper*`)
    } else if (player === 'paper' && computer === 'rock') {
        playerScore++ ;
        console.log(`*Paper* Beat *Rock*`)
    } else if (player === computer) {
        console.log(`*${player}* and *${computer}* are tie`)
    } else {
        console.log(`*${player}* is not valid! try again`)
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt(`Choose: 'Rock', 'Paper' or 'Scissors'`).toLowerCase();
        playRound(playerSelection,getComputerChoice());
    }
    console.log(playerScore > computerScore ? `you won. ${playerScore} vs ${computerScore}`
    : playerScore < computerScore ? `you lose!  ${playerScore} vs ${computerScore}`
    : `it's tie. ${playerScore} vs ${computerScore}`
    )
}

playGame()