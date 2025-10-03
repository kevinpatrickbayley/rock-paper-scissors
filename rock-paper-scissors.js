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
let canPlay = true;

//Declare plyers score variables
let humanScore = 0;
let computerScore = 0;

//get ref to div, results, and score text
const resultsText = document.getElementById("resultsText");
const resultsScore = document.getElementById("resultsScore");
const resultsDiv = document.getElementById("resultsDiv");

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
        const playAgainButton = document.createElement(`button`);
        playAgainButton.textContent = `Play Again?`;
        playAgainButton.setAttribute("id", "resetButton");
        resultsDiv.appendChild(playAgainButton);
    }
    if (computerScore === 5){
        resultsScore.textContent = `Congrats! You Won!!`;
        canPlay = 0;
        const playAgainButton = document.createElement(`button`);
        playAgainButton.textContent = `Play Again?`;
        playAgainButton.setAttribute("id", "resetButton");
        resultsDiv.appendChild(playAgainButton);
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

//Play again button that starts the game fresh
resultsDiv.addEventListener('click', function(event) {
    if (event.target.matches('#resetButton')){
    const playAgainButton = document.getElementById("resetButton");
    resultsText.textContent = `MAKE YOUR CHOICE!!`;
    resultsScore.textContent = `You : 0  Computer : 0`;
    humanScore = 0;
    computerScore = 0;
    canPlay = true;
    resultsDiv.removeChild(playAgainButton);}
});

