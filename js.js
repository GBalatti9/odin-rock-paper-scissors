window.onload = () => {

    const buttons = Array.from(document.querySelectorAll('button'));
    const messageElement = document.querySelector('.message');
    const resetButton = document.getElementById('resetButton');

    // LOGICA
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
            gameStats.tie === 1 ? messageElement.textContent = `Tie` : messageElement.textContent = `Tie ${gameStats.tie}`;

        } else if (
            (playerSelection === 'Rock' && computerSelection === "Scissors") ||
            (playerSelection === 'Scissors' && computerSelection === "Paper") ||
            (playerSelection === 'Paper' && computerSelection === "Scissors")
        ) {
            gameStats.playerScore++;
            console.log(`HUMANO: ${gameStats.playerScore}`);
            messageElement.textContent = "Let's Go";
        } else {
            gameStats.computerScore++;
            console.log(`COMPUTADORA: ${gameStats.computerScore}`);
            messageElement.textContent = "Oh no, they are coming";
        }
        updateScore();
    }

    const updateScore = () => {
        pScorePlayer.textContent = gameStats.playerScore;
        pScoreComputer.textContent = gameStats.computerScore;
        // pScoreTie.textContent = gameStats.tie;

        showWinnerMessage();
    }

    const showWinnerMessage = () => {
        if (gameStats.playerScore === 5 || gameStats.computerScore === 5 || gameStats.tie === 5) {
            messageElement.textContent = '';
            const winner = document.createElement('h1');
            winner.style.fontFamily = 'Montserrat'
            if(gameStats.playerScore > gameStats.computerScore){
                winner.textContent = 'You won'
            } else if (gameStats.computerScore > gameStats.playerScore){
                winner.textContent = 'The machine won'
            } else {
                winner.textContent = 'Tie'
            }

            buttons.forEach(button => {
                button.style.display = 'none';
            });
            body.appendChild(winner)


            resetButton.style.display = 'block';
        }
    }

    resetButton.addEventListener('click', (e) => {
        console.log(e);
        pScorePlayer.textContent = '0';
        gameStats.playerScore = 0;
        pScoreComputer.textContent = '0';
        gameStats.computerScore = 0;
        gameStats.tie = 0;
        resetButton.style.display = 'none';
        const winner = document.querySelector('h1');
        if (winner) {
            winner.remove();
        }
        messageElement.textContent = '';
        // winner.textContent = '';
        buttons.forEach(button => {
            button.style.display = 'block';
        });
    }); 

    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            button = e.currentTarget.value;
            playAround(button, getComputerChoice());
        })
    })

    // ESTILOS
    const body = document.querySelector('body');
    const titleWeb = document.querySelector('#title-web');
    const subtitle = document.querySelector('#subtitle');
    const divBtns = document.querySelector('.buttons');

    // const div = document.createElement('div');
    // div.style.height = '100px';
    // body.insertBefore(div, divBtns);

    // const divScores = document.createElement('section');
    // divScores.style.display = 'flex';
    // divScores.style.justifyContent = 'space-around';
    // divScores.style.height = '100%'
    // div.appendChild(divScores)
    
    // const divPlayer = document.createElement('div');
    // divPlayer.textContent = 'Human';

    // const divComputer = document.createElement('div');
    // divComputer.textContent = 'Machine';

    // const divTie = document.createElement('div');
    // divTie.textContent = 'Tie';

    // divScores.appendChild(divPlayer);
    // divScores.appendChild(divComputer);
    // divScores.appendChild(divTie);

    const pScorePlayer = document.getElementById('pHuman');
    const pScoreComputer = document.getElementById('pMachine');
    // const pScoreTie = document.createElement('p');

    pScorePlayer.textContent = gameStats.playerScore;
    pScorePlayer.style.textAlign = 'center';
    pScoreComputer.textContent = gameStats.computerScore;
    pScoreComputer.style.textAlign = 'center';
    // pScoreTie.textContent = gameStats.tie;
    // pScoreTie.style.textAlign = 'center';

    // divPlayer.appendChild(pScorePlayer);
    // divComputer.appendChild(pScoreComputer);
    // divTie.appendChild(pScoreTie);
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
