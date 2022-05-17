let computerPlay = () =>{
    let num = Math.floor(Math.random() * 3);
    if(num === 0){
        return "rock";
    }
    else if(num === 1){
        return "paper";
    }
    else return "scissors";
}

let play = (computerSelection, playerSelection) =>{
    matchUp.removeChild(matchUp.lastChild);

    let match = document.createElement("h4");
    match.textContent = playerSelection + " vs " + computerSelection
    matchUp.appendChild(match);

    if(computerSelection == playerSelection){
        return "TIE";
    }
    
    if(computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" && playerSelection === "rock" 
    || computerSelection === "scissors" && playerSelection === "paper"){
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
    if(playerWins === 5 || computerWins===5){
        declareWinner(playerWins>computerWins);
    }
}

let declareWinner = (playerWon) =>{
    select.style.visibility = "hidden";
    let final = document.createElement("h3");

    if(playerWon){
        final.textContent = "YOU WON!";
    }
    else{
        final.textContent = "THE COMPUTER WON :(";
    }
    score.appendChild(final);
    reset.style.visibility = "visible";
}


let select = document.querySelector('.select');
let score = document.querySelector(".score");
let matchUp = document.querySelector(".result");
let reset = document.querySelector(".reset");

let playerWins = 0;
let computerWins = 0;

select.addEventListener('click' , (e)=>{
    let playerSelection = "";
    let computerSelection = computerPlay();
    
    playerSelection = e.target.className;

    let result = play(computerSelection, playerSelection);
    logResult(result);
    
});

reset.addEventListener('click', (e) =>{
    playerWins = 0;
    computerWins = 0;
    select.style.visibility = "visible";
    reset.style.visibility = "hidden";

});
