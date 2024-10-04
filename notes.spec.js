In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

1. For now, remove the logic that plays exactly five rounds.

2. Create three buttons, one for each selection. 
Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. 
(you can keep the console.logs for this step)

3.Add a div for displaying results and change all of your console.logs into DOM methods.

4.Display the running score, and announce a winner of the game once one player reaches 5 points.

5.You will likely have to refactor (rework/rewrite) your original code to make it work for this. 
That’s OK! Reworking old code is an important part of a programmer’s life.


























original Code -

let humanScore = 0;
        let computerScore = 0;
        let winner;

        function getComputerChoice() {
            let c_choice;
            if (Math.floor(Math.random()*100)<33) {c_choice = "Rock"} 
            else if (Math.floor(Math.random()*100)<66) {c_choice = "Paper"} 
            else if (Math.floor(Math.random()*100)<100) {c_choice = "Scissors"} 
            else {console.log(4)}
            return c_choice
        }

        function getHumanChoice() {
            human_input = prompt("What's your input")
            if (human_input === "Rock" || human_input === "Paper" || human_input === "Scissors") 
            {human_choice = human_input}
            else {getHumanChoice()}

            return human_choice
        }


        function playRound(humanChoice, computerChoice) {
            let interim_string;
            if (humanChoice === "Paper" && computerChoice === "Paper") {interim_string = "It's a draw"}
            else if (humanChoice === "Paper" && computerChoice === "Rock") {
                interim_string = "You win! Paper beats Rock" 
                humanScore ++ }
            else if (humanChoice === "Paper" && computerChoice === "Scissors") {
                interim_string = "You lose! Scissors beats Paper" 
                computerScore ++}
            
            else if (humanChoice === "Rock" && computerChoice === "Paper") {
                interim_string = "You lose! Paper beats Rock" 
                computerScore ++}
            else if (humanChoice === "Rock" && computerChoice === "Rock") {interim_string = "It's a draw"}
            else if (humanChoice === "Rock" && computerChoice === "Scissors") {
                interim_string = "You win! Rock beats Scissors" 
                humanScore ++}
                
            else if (humanChoice === "Scissors" && computerChoice === "Paper") {
                interim_string = "You win! Scissors beats Paper" 
                humanScore ++}
            else if (humanChoice === "Scissors" && computerChoice === "Rock") {
                interim_string = "You lose! Rock beats Scissors" 
                computerScore ++}
            else if (humanChoice === "Scissors" && computerChoice === "Scissors") {interim_string = "It's a draw"}

            // alert(interim_string)
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


        alert(playGame())