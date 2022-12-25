let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9)
}

const compareGuesses = (userGuess, computerGuess, secretGuess) => {
    return Math.abs(userGuess - secretGuess) <= Math.abs(computerGuess - secretGuess)

}

const updateScore = winner => {
    if(winner === "human"){
        humanScore++
    }
    if(winner === "computer"){
        computerScore++
    }
}

const advanceRound = () => {
    currentRoundNumber++
}

