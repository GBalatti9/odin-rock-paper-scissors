window.onload = () => {

    let gameStats = {
        playerScore: 0,
        computerScore: 0,
        tie: 0,
    }

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
            gameStats.tie ++;
            console.log(`EMPATE: ${gameStats.tie}`);
        } else if (
            (playerSelection === 'Rock' && computerSelection === "Scissors") ||
            (playerSelection === 'Scissors' && computerSelection === "Paper") ||
            (playerSelection === 'Paper' && computerSelection === "Scissors")
        ) {
            gameStats.playerScore++;
            console.log(`HUMANO: ${gameStats.playerScore}`);
        } else {
            gameStats.computerScore++;
            console.log(`COMPUTADORA: ${gameStats.computerScore}`);
        }
        updateScore();
    }

    const updateScore = () => {
        pScorePlayer.textContent = gameStats.playerScore;
        pScoreComputer.textContent = gameStats.computerScore;
        pScoreTie.textContent = gameStats.tie;

        showWinnerMessage();
    }

    const showWinnerMessage = () => {
        if (gameStats.playerScore === 5 || gameStats.computerScore === 5 || gameStats.tie === 5) {
            const winner = document.createElement('h1');
            if(gameStats.playerScore > gameStats.computerScore){
                winner.textContent = 'Ganaste'
            } else if (gameStats.computerScore > gameStats.playerScore){
                winner.textContent = 'Perdiste'
            } else {
                winner.textContent = 'Empataron'
            }

            body.appendChild(winner)

            console.log('Se termino el juego');
            pScorePlayer.textContent = '0';
            gameStats.playerScore = 0;
            pScoreComputer.textContent = '0';
            gameStats.computerScore = 0;
            pScoreTie.textContent = '0';
            gameStats.tie = 0;
        }
    }

    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            button = e.target.id;
            playAround(button, getComputerChoice());
        })
    })

    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.style.height = '100px';
    body.appendChild(div);

    const title = document.createElement('h3');
    title.textContent = 'Score';
    title.style.margin = '0px';
    title.style.textAlign = 'center';
    div.appendChild(title);
    
    const overall = document.createElement('p');
    overall.textContent = 0;
    overall.style.textAlign = 'center';
    title.appendChild(overall);

    const divScores = document.createElement('section');
    divScores.style.display = 'flex';
    divScores.style.justifyContent = 'space-around';
    divScores.style.height = '100%'
    div.appendChild(divScores)
    
    const divPlayer = document.createElement('div');
    divPlayer.textContent = 'Human';

    const divComputer = document.createElement('div');
    divComputer.textContent = 'Machine';

    const divTie = document.createElement('div');
    divTie.textContent = 'Tie';

    divScores.appendChild(divPlayer);
    divScores.appendChild(divComputer);
    divScores.appendChild(divTie);

    const pScorePlayer = document.createElement('p');
    const pScoreComputer = document.createElement('p');
    const pScoreTie = document.createElement('p');

    pScorePlayer.textContent = gameStats.playerScore;
    pScorePlayer.style.textAlign = 'center';
    pScoreComputer.textContent = gameStats.computerScore;
    pScoreComputer.style.textAlign = 'center';
    pScoreTie.textContent = gameStats.tie;
    pScoreTie.style.textAlign = 'center';

    divPlayer.appendChild(pScorePlayer);
    divComputer.appendChild(pScoreComputer);
    divTie.appendChild(pScoreTie);
}


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
