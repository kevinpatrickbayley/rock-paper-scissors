//logic to get computer choice
function getComputerChoice(){
   let compChoice = Math.floor(Math.random() * 3);
   if (compChoice === 0){
    return "rock";
   }else if (compChoice === 1){
    return "paper";
   }else {
    return "scissors";
   }
}

//logic to get human choice
function getHumanChoice(){
    return prompt("ROCK! PAPER! SCISSORS! MAKE YOUR CHOICE!");
}

//Declare plyers score variables
let humanScore = 0;
let computerScore = 0;



//Logic to play a single round
function playRound(humanChoice, computerChoice){
    const normalizedHumanChoice = humanChoice.toLowerCase();
    if (normalizedHumanChoice === "rock" && computerChoice === "rock"){
        console.log("TIE! TWO ROCKS CLASH!");
    }else if(normalizedHumanChoice === "rock" && computerChoice === "paper"){
        console.log("YOU LOSE! YOUR ROCK IS COVERED BY PAPER!");
        computerScore++;
    }else if(normalizedHumanChoice === "rock" && computerChoice === "scissors"){
        console.log("YOU WIN! YOUR ROCK SMASHES SCISSORS!");
        humanScore++;
    }else if(normalizedHumanChoice === "paper" && computerChoice === "rock"){
        console.log("YOU WIN! YOUR PAPER COVERS ROCK!");
        humanScore++;
    }else if(normalizedHumanChoice === "paper" && computerChoice === "paper"){
        console.log("TIE! TWO PAPERS FOLD!");
    }else if(normalizedHumanChoice === "paper" && computerChoice === "scissors"){
        console.log("YOU LOSE! YOUR PAPER IS SLICED BY SCISSORS!");
        computerScore++;
    }else if(normalizedHumanChoice === "scissors" && computerChoice === "rock"){
        console.log("YOU LOSE! YOUR SCISSORS ARE SMASHED BY ROCK!");
        computerScore++;
    }else if(normalizedHumanChoice === "scissors" && computerChoice === "paper"){
        console.log("YOU WIN! YOUR SCISSORS SLICE PAPER!");
        humanScore++;
    }else if(normalizedHumanChoice === "scissors" && computerChoice === "scissors"){
        console.log("TIE! TWO SCISSOR LOCK BLADES!");
    }
}

//get refs to 3 play buttons
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

//on click, call playRound with human choice based on button
rockButton.addEventListener('click', () => playRound("rock",getComputerChoice()));
paperButton.addEventListener('click', () => playRound("paper",getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound("scissors",getComputerChoice()));



/*
//Logic to play the game, 5 rounds total
function playGame(){
    for (let i = 0; i < 5; i++){
        //Declare constants to hold selections
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);

        console.log(`The score is You ${humanScore} - Computer ${computerScore}`);
    }

    if (humanScore > computerScore){
        console.log("Congrats! You Won!!");
    }else if (computerScore > humanScore){
        console.log("Sorry!! You Lost!");
    }else{
        console.log("WOW! A Tie!!");
    }
}

playGame();
*/
