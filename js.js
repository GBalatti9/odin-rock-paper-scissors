window.onload = () => {
    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;

    const getComputerChoice = () => {
        let options = ['Rock', 'Paper', 'Scissors'];
        let index = Math.round(Math.random() * (options.length - 1));
        return options[index];
    }

    const playAround = (playerSelection, computerSelection) => {
        console.log(playerSelection, computerSelection);
        
        let firstLetter = playerSelection.charAt(0).toUpperCase();
        let restString = playerSelection.slice(1).toLowerCase();
        playerSelection = firstLetter + restString;

        if (playerSelection === computerSelection) {
            tie++;
            // return "Tie. Try again"
        } else if (
            (playerSelection === 'Rock' && computerSelection === "Scissors") ||
            (playerSelection === 'Scissors' && computerSelection === "Paper") ||
            (playerSelection === 'Paper' && computerSelection === "Scissors")
        ) {
            playerScore++;
            // return `There is a new champion! Congratulations ${playerSelection} beats ${computerSelection}.`
        } else {
            computerScore++;
            // return `The machine has beaten the human. ${computerSelection} beats ${playerSelection}.`;
        }
    }

    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            button = e.target.id;
            playAround(button, getComputerChoice());
        })
    })

    

    // const game = () => {
    //     let rounds = [];
    //     for (let i = 1; i <= 5; i++) {
    //         const playerSelection = prompt(`Round ${i}: Rock, Paper, Scissors`);
    //         rounds.push(`${i}:`, playAround(playerSelection, getComputerChoice()));
    //     }
    // return rounds.forEach(round => {
    //     console.log(round);
    // });
    // }

    // game();

    // const results = {
    //     "Player Wins": playerWins,
    //     "Computer Wins": computerWins,
    //     "Ties": tie
    // }

    // console.table(results);
    // if (playerScore === 5 || computerScore === 5 || tie === 5) {
        
    // }
}