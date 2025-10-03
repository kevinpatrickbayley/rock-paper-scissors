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

//variable that tells the game whether it can play or not
let canPlay = 1;

//Declare plyers score variables
let humanScore = 0;
let computerScore = 0;

//get ref to results and score text
const resultsText = document.getElementById("resultsText");
const resultsScore = document.getElementById("resultsScore");

//Logic to play a single round
function playRound(humanChoice, computerChoice){
    const normalizedHumanChoice = humanChoice.toLowerCase();
    if (normalizedHumanChoice === "rock" && computerChoice === "rock"){
        resultsText.textContent = ("TIE! TWO ROCKS CLASH!");
    }else if(normalizedHumanChoice === "rock" && computerChoice === "paper"){
        resultsText.textContent = ("YOU LOSE! YOUR ROCK IS COVERED BY PAPER!");
        computerScore++;
    }else if(normalizedHumanChoice === "rock" && computerChoice === "scissors"){
        resultsText.textContent = ("YOU WIN! YOUR ROCK SMASHES SCISSORS!");
        humanScore++;
    }else if(normalizedHumanChoice === "paper" && computerChoice === "rock"){
        resultsText.textContent = ("YOU WIN! YOUR PAPER COVERS ROCK!");
        humanScore++;
    }else if(normalizedHumanChoice === "paper" && computerChoice === "paper"){
        resultsText.textContent = ("TIE! TWO PAPERS FOLD!");
    }else if(normalizedHumanChoice === "paper" && computerChoice === "scissors"){
        resultsText.textContent = ("YOU LOSE! YOUR PAPER IS SLICED BY SCISSORS!");
        computerScore++;
    }else if(normalizedHumanChoice === "scissors" && computerChoice === "rock"){
        resultsText.textContent = ("YOU LOSE! YOUR SCISSORS ARE SMASHED BY ROCK!");
        computerScore++;
    }else if(normalizedHumanChoice === "scissors" && computerChoice === "paper"){
        resultsText.textContent = ("YOU WIN! YOUR SCISSORS SLICE PAPER!");
        humanScore++;
    }else if(normalizedHumanChoice === "scissors" && computerChoice === "scissors"){
        resultsText.textContent = ("TIE! TWO SCISSOR LOCK BLADES!");
    }
    resultsScore.textContent = `You: ${humanScore} Computer: ${computerScore}`;
    
    //logic to check if the game is over (best of 5)
    if (humanScore === 5){
        resultsScore.textContent = `Congrats! You Won!!`;
        canPlay = 0;
    }
    if (computerScore === 5){
        resultsScore.textContent = `Congrats! You Won!!`;
        canPlay = 0;
    }
}

//get refs to 3 play buttons
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

//on click, call playRound with human choice based on button
rockButton.addEventListener('click', () => {
  if (canPlay) playRound('rock', getComputerChoice());
});
paperButton.addEventListener('click', () => {
    if (canPlay) playRound('paper', getComputerChoice());
});
scissorsButton.addEventListener('click', () => {
    if (canPlay) playRound('scissors', getComputerChoice());
});



/*
//Logic to play the game, 5 rounds total
function playGame(){
    for (let i = 0; i < 5; i++){
        //Declare constants to hold selections
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);

        resultsText.textContent = (`The score is You ${humanScore} - Computer ${computerScore}`);
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
