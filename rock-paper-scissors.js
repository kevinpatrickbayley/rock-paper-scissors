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
function getHumanChoice (){
    return prompt("ROCK! PAPER! SCISSORS! MAKE YOUR CHOICE!");
}

//Declare plyers score variables
let humanScore = 0;
let computerScore = 0;

//Declare constants to hold selections
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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

playRound(humanSelection, computerSelection);

