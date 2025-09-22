//logic to get computer choice
function getComputerChoice(){
   let compChoice = Math.floor(Math.random() * 3);
   if (compChoice === 0){
    return "Rock";
   }else if (compChoice === 1){
    return "Paper";
   }else {
    return "Scissors";
   }
}

//logic to get human choice
function getHumanChoice (){
    return prompt("ROCK! PAPER! SCISSORS! MAKE YOUR CHOICE!");
}

//Declare plyers score variables
let humanScore = 0;
let computerScore = 0;
