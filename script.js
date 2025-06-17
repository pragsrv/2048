document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const cells = Array.from(document.getElementsByClassName('grid-cell'));
    const scoreDisplay = document.getElementById('score');
    const highScoreDisplay = document.getElementById('high-score');
    const timerDisplay = document.getElementById('timer');
    const gameOverDisplay = document.getElementById('game-over');
    const congratulationsDisplay = document.getElementById('congratulations');
    const resetButton = document.getElementById('reset-button');
    const undoButton = document.getElementById('undo-button');
    const aiButton = document.getElementById('ai-button');
    const saveButton = document.getElementById('save-button');
    const loadButton = document.getElementById('load-button');
    const leaderboard = document.getElementById('leaderboard');
    let score = 0;
    let highScore = 0;
    let previousState = [];
    let previousScore = 0;
    let timer;
    let seconds = 0;

    // Initialize the game with two random tiles
    function initGame() {
        addRandomTile();
        addRandomTile();
        updateScore(0);
        loadHighScore();
        loadLeaderboard();
        startTimer();
    }

    // Start the game timer
    function startTimer() {
        clearInterval(timer);
        seconds = 0;
        updateTimerDisplay();
        timer = setInterval(() => {
            seconds++;
            updateTimerDisplay();
        }, 1000);
    }

    // Update the timer display
    function updateTimerDisplay() {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerDisplay.innerHTML = `Time: ${pad(minutes)}:${pad(remainingSeconds)}`;
    }

    // Pad the time values with leading zeros if necessary
    function pad(value) {
        return value.toString().padStart(2, '0');
    }

    // Save the current state for undo
    function saveState() {
        previousState = cells.map(cell => cell.innerHTML);
        previousScore = score;
    }

    // Restore the previous state
    function undoMove() {
        cells.forEach((cell, index) => {
            cell.innerHTML = previousState[index];
            cell.style.backgroundColor = getTileColor(previousState[index]);
        });
        updateScore(previousScore);
    }

    // Add a random tile (2 or 4) to an empty cell
    function addRandomTile() {
        const emptyCells = cells.filter(cell => !cell.innerHTML);
        if (emptyCells.length > 0) {
            const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            const newValue = Math.random() < 0.9 ? 2 : 4;
            randomCell.innerHTML = newValue;
            randomCell.style.backgroundColor = newValue == 2 ? '#eee4da' : '#ede0c8';
            randomCell.classList.add('new-tile');
            setTimeout(() => randomCell.classList.remove('new-tile'), 200);
        }
    }

    // Move tiles in the specified direction
    function moveTiles(direction) {
        let hasMoved = false;
        saveState();

        // Group cells by rows or columns
        const groups = [];
        if (direction === 'up' || direction === 'down') {
            for (let col = 0; col < 4; col++) {
                const group = [];
                for (let row = 0; row < 4; row++) {
                    group.push(cells[row * 4 + col]);
                }
                groups.push(group);
            }
        } else {
            for (let row = 0; row < 4; row++) {
                const group = [];
                for (let col = 0; col < 4; col++) {
                    group.push(cells[row * 4 + col]);
                }
                groups.push(group);
            }
        }

        // Move and merge tiles within each group
        groups.forEach(group => {
            const values = group.map(cell => parseInt(cell.innerHTML) || 0);
            const newValues = mergeTiles(values);
            group.forEach((cell, index) => {
                if (parseInt(cell.innerHTML) !== newValues[index]) hasMoved = true;
                cell.innerHTML = newValues[index] || '';
                cell.style.backgroundColor = getTileColor(newValues[index]);
                if (newValues[index] !== values[index]) {
                    cell.classList.add('merged-tile');
                    setTimeout(() => cell.classList.remove('merged-tile'), 200);
                }
            });
        });

        if (hasMoved) {
            addRandomTile();
            updateScore(score);
            check2048();
            if (isGameOver()) {
                clearInterval(timer);
                gameOverDisplay.classList.remove('hidden');
                saveLeaderboard();
            }
        }
    }

