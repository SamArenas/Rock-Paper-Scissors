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

let rounds = () => {
    let playerWins = 0;
    let computerWins = 0;

    for(let i = 0; i<5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?").valueOf();
        let computerSelection = computerPlay();
        let result = play(computerSelection,playerSelection);

        console.log(playerSelection + " vs " + computerSelection);
        console.log("Result: " + result);
        if(computerWins>2 || playerWins>2){
            break;
        }
        if(result === "TIE"){
            i--;
        }
        else if(result === "YOU WON!"){
            playerWins++;
        }
        else{
            computerWins++;
        }
    }

    if(playerWins>computerWins){
        console.log("YOU WIN BEST OUT OF 5");
    }
    else{
        console.log("YOU LOSE BEST OUT OF 5");
    }

}

rounds();
