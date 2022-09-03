let wins = 0
let losses = 0

for (let i = 0; i < 5;) {
    if (wins = 5) {
        console.log("You win.");
        i = 5;
    } else if (losses = 5) {
        console.log("You lost.");
        i = 5;
    }


    function getComputerChoice() {
        
        const rps = ['rock', 'paper', 'scissors'];
        const computerRandom = rps[Math.floor(Math.random())];
        return computerRandom
    }

    let computerChoice = getComputerChoice();

    let playerSelection = prompt("Please type either rock, paper or scissors").toLowerCase();


    function winnerLoser() {

        if (computerChoice == "rock" && playerSelection == "scissors") {
            console.log("computer wins"); 
            losses++;
        } else if (computerChoice == "scissors" && playerSelection == "paper") {
            console.log("computer wins");
            losses++;
        } else if (computerChoice == "paper" && playerSelection == "rock") {
            console.log("computer wins"); 
            losses++;
        } else if (computerChoice == "rock" && playerSelection == "paper") {
            console.log("user wins");
            wins++; 
        } else if (computerChoice == "paper" && playerSelection == "scissors") {
            console.log("user wins");
            wins++;
        } else if (computerChoice == "scissors" && playerSelection == "rock") {
            console.log("user wins"); 
            wins++
        } else if (computerChoice === playerSelection) {
            console.log("Draw")
        } else {
            console.log("Wrong pick")
        }

    }


}