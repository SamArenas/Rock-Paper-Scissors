let computerPlay = () =>{
    let num = Math.floor(Math.random() * 3);
    if(num === 0){
        return "Rock";
    }
    else if(num === 1){
        return "Paper";
    }
    else return "Scissors";
}

let play = (computerSelection, playerSelection) =>{
    matchUp.textContent = playerSelection + " vs " + computerSelection;
    if(computerSelection == playerSelection){
        return "TIE";
    }
    
    if(computerSelection === "Rock" && playerSelection === "Scissors" || computerSelection === "Paper" && playerSelection === "Rock" 
    || computerSelection === "Scissors" && playerSelection === "Paper"){
        return "The Computer Wins!";
    }
    else{
        return "YOU WON!"
    }
}

let logResult = (result) =>{
    if(result === "YOU WON!"){
        playerWins++;
    }
    else if(result == "The Computer Wins!"){
        computerWins++;
    }
  
    
    score.textContent = "Player wins: " + playerWins + "  Computer wins: " + computerWins;
}


let select = document.querySelector('.select');
let score = document.querySelector(".score");
let matchUp = document.querySelector(".result");

let playerWins = 0;
let computerWins = 0;

select.addEventListener('click' , (e)=>{
    let playerSelection = "";
    let computerSelection = computerPlay();
    
    if(e.target.className === "rock"){
        playerSelection = "Rock"
        
    }
    else if(e.target.className === "paper"){
        playerSelection = "Paper";
    }
    else{
        playerSelection = "Scissors";
    }

    let result = play(computerSelection, playerSelection);
    logResult(result);
    
});
