let humanScore = 0;
let computerScore = 0;
let winner;
let c_choice;

function getComputerChoice() {
    let c_choice;
    if (Math.floor(Math.random()*100)<33) {c_choice = "Rock"} 
    else if (Math.floor(Math.random()*100)<66) {c_choice = "Paper"} 
    else if (Math.floor(Math.random()*100)<100) {c_choice = "Scissors"} 
    else {console.log(4)}
    return c_choice
}

function playRound(humanChoice, computerChoice) {
    let interim_string;
    if (humanChoice === "Paper" && computerChoice === "Paper") {
        interim_string = "It's a draw"
        humanScore ++
        computerScore ++}
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        interim_string = "You win! Paper beats Rock" 
        humanScore ++ }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        interim_string = "You lose! Scissors beats Paper" 
        computerScore ++}
    
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        interim_string = "You lose! Paper beats Rock" 
        computerScore ++}
    else if (humanChoice === "Rock" && computerChoice === "Rock") {
        interim_string = "It's a draw"
        humanScore ++
        computerScore ++}
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        interim_string = "You win! Rock beats Scissors" 
        humanScore ++}
        
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        interim_string = "You win! Scissors beats Paper" 
        humanScore ++}
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        interim_string = "You lose! Rock beats Scissors" 
        computerScore ++}
    else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        interim_string = "It's a draw."
        humanScore ++
        computerScore ++}

    if (humanScore == 5 && computerScore == 5) {
        scoreContainer.textContent = "Both Human and Computer won with a score of 5. It's a tie.";
        humanScore = 0;
        computerScore = 0;
    }
    
    else if (humanScore == 5) {
        scoreContainer.textContent = "Human wins with a score of 5. Computer's Score is " + computerScore;
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        scoreContainer.textContent = "Computer wins with a score of 5. Human's Score is " + humanScore;
        humanScore = 0;
        computerScore = 0;
    }
    else {
        scoreContainer.textContent = "Human Score is " + humanScore + " and " + "Computer Score is " + computerScore;
    }
}

function playGame(){
    let final_string;
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }

    if (humanScore > computerScore) {final_string = "Congrats! You are the winner"}
    else if (humanScore < computerScore) {final_string = "Well, Computer won this game"}
    else {final_string = "Well, it's a tie"}

    winner = final_string;
    return final_string
}


const doc = document.querySelector("body");
doc.style.display = "flex";
doc.style.flexDirection = "column";
doc.style.height = "100vh";

const buttonContainer = document.createElement("div");
buttonContainer.style.backgroundColor = "Black";
buttonContainer.style.borderColor = "2px Solid red";
buttonContainer.style.width = "auto";
buttonContainer.style.height = "150px";
buttonContainer.style.display = "flex"
buttonContainer.style.justifyContent = "space-around";
buttonContainer.style.alignItems = "center";
buttonContainer.style.flexGrow = "0";
buttonContainer.style.gap = "20px";
buttonContainer.style.padding = "0";
buttonContainer.style.margin = "0";

doc.appendChild(buttonContainer);

const rockButton = document.createElement("button");
rockButton.classList.add("btn")
rockButton.textContent = "Rock";
rockButton.style.height = "100px";
rockButton.style.width = "250px";
rockButton.style.fontSize = "32px";
rockButton.style.backgroundColor = "#6a5acd";
rockButton.style.flexGrow = "1";
buttonContainer.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.classList.add("btn")
paperButton.textContent = "Paper";
paperButton.style.height = "100px";
paperButton.style.width = "250px";
paperButton.style.fontSize = "32px";
paperButton.style.backgroundColor = "#008080";
paperButton.style.flexGrow = "1";
buttonContainer.appendChild(paperButton);

const scissorButton = document.createElement("button");
scissorButton.classList.add("btn")
scissorButton.textContent = "Scissor";
scissorButton.style.height = "100px";
scissorButton.style.width = "250px";
scissorButton.style.fontSize = "32px";
scissorButton.style.backgroundColor = "#4682b4";
scissorButton.style.flexGrow = "1";
buttonContainer.appendChild(scissorButton);


//////////////////////////////////////////////////////////////////////////////////////////////

// defining section for displaying scores

const scoreContainer = document.createElement("div");
scoreContainer.style.backgroundColor = "#e6e6fa";
scoreContainer.style.borderColor = "2px Solid red";
scoreContainer.style.display = "flex"
scoreContainer.style.justifyContent = "space-around";
scoreContainer.style.alignItems = "center";
scoreContainer.style.padding = 0;
scoreContainer.style.fontSize = "75px";
scoreContainer.style.flexGrow = "1";
scoreContainer.textContent = "Human Score is " + humanScore + " and " + "Computer Score is " + computerScore;
doc.appendChild(scoreContainer);



rockButton.addEventListener("click", () => playRound("Rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("Paper", getComputerChoice()));
scissorButton.addEventListener("click", () => playRound("Scissors", getComputerChoice()));
