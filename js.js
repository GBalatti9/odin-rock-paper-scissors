window.onload = () => {

    const buttons = Array.from(document.querySelectorAll('button'));
    const messageElement = document.querySelector('.message');
    const resetButton = document.getElementById('resetButton');
    resetButton.classList.add('display');

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
            messageElement.textContent = `Tie`

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
        pScoreTie.textContent = gameStats.tie;

        showWinnerMessage();
    }

    const showWinnerMessage = () => {
        if (gameStats.playerScore === 5 || gameStats.computerScore === 5 || gameStats.tie === 5) {
            messageElement.textContent = '';
            const winner = document.createElement('h2');
            
            winner.style.fontFamily = 'Montserrat'
            if(gameStats.playerScore > gameStats.computerScore && gameStats.playerScore > gameStats.tie){
                winner.textContent = 'You won'
            } else if (gameStats.computerScore > gameStats.playerScore && gameStats.computerScore > gameStats.tie){
                winner.textContent = 'The machine won'
            } else {
                winner.textContent = "It is a tie"
            }

            buttons.forEach(button => {
                button.style.display = 'none';
            });
            body.insertBefore(winner, resetButton);

            resetButton.classList.remove('display');
            resetButton.addEventListener('click', (e) => {
                console.log(e);
                pScorePlayer.textContent = '0';
                gameStats.playerScore = 0;
                pScoreComputer.textContent = '0';
                gameStats.computerScore = 0;
                pScoreTie.textContent = '0';
                gameStats.tie = 0;
                resetButton.classList.add('display');
                winner.classList.add('display')
                messageElement.textContent = '';
                // winner.textContent = '';
                buttons.forEach(button => {
                    button.style.display = 'block';
                });
            }); 
        }
    }


    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            button = e.currentTarget.value;
            playAround(button, getComputerChoice());
        })
    })

    // ESTILOS
    const body = document.querySelector('body');

    const pScorePlayer = document.getElementById('pHuman');
    const pScoreComputer = document.getElementById('pMachine');
    const pScoreTie = document.getElementById('tie')

    pScorePlayer.textContent = gameStats.playerScore;
    pScorePlayer.style.textAlign = 'center';
    pScoreComputer.textContent = gameStats.computerScore;
    pScoreComputer.style.textAlign = 'center';
    pScoreTie.textContent = gameStats.tie;

}
