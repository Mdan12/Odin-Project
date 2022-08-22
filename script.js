

const rps = ['rock', 'paper', 'scissors'];

const randomIndex = rps[Math.floor(Math.random())];

let userInput = prompt("Please type either rock, paper or scissors")

function winnerLoser() {

    if (randomIndex == "rock" && userInput == "scissors") {
        console.log("computer wins"); 
    } else if (randomIndex == "scissors" && userInput == "paper") {
        console.log("computer wins"); 
    } else if (randomIndex == "paper" && userInput == "rock") {
        console.log("computer wins"); 
    } else if (randomIndex == "rock" && userInput == "paper") {
        console.log("user wins"); 
    } else if (randomIndex == "paper" && userInput == "scissors") {
        console.log("user wins"); 
    } else if (randomIndex == "scissors" && userInput == "rock") {
        console.log("user wins"); 
    } else if (randomIndex === userInput) {
        console.log("Draw")
    } else {
        console.log("Wrong pick")
    }

}



console.log(winnerLoser())