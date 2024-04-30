
let playerScore = 0;
let computerScore = 0;
let maxScore = 5;
const RPS = ['Rock', 'Paper', 'Scissors'];
const displayScore = document.querySelector('.score');
const result = document.querySelector('.result');
const main = document.querySelector('#menu');

function getComputerChoice () {
    return RPS[Math.floor(Math.random() * RPS.length)];
}

function playRound(player, computer) {
    if (!RPS.includes(player) || !RPS.includes(computer)) {
        result.textContent = 'undefined input';
    } else {
        if (
            player === RPS[0] && computer === RPS[1] ||
            player === RPS[1] && computer === RPS[2] ||
            player === RPS[2] && computer === RPS[0]
            ) {
            ++computerScore;
            result.textContent = `*${computer}* defeat *${player}*`;
        } else if (
            player === RPS[0] && computer === RPS[2] ||
            player === RPS[2] && computer === RPS[1] ||
            player === RPS[1] && computer === RPS[0]
            ) {
            ++playerScore;
            result.textContent = `*${player}* defeat *${computer}*`;
        } else {
            result.textContent = `It's a tie! Both chose ${player}.`;
        } 
    }
}

main.addEventListener('click', e => { 
    if (playerScore === maxScore ) {
        displayScore.textContent = `You won ${playerScore}-${computerScore}!`;
    } else if (computerScore === maxScore) {
        displayScore.textContent = `Computer wins ${computerScore}-${playerScore}.`;
    } else {
        let playerChoose = e.target.id;
        playRound(playerChoose, getComputerChoice());
        displayScore.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
    }
    
})