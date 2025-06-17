# 2048 Game  

## Overview  
This is an enhanced version of the classic **2048 Game**, developed using HTML, CSS, and JavaScript. Version 10 introduces exciting new features such as animations, a leaderboard to track top scores, a timer to measure game duration, and additional gameplay options like undo and AI moves.  

---

## Output

---

## Features  
- **Classic 2048 Gameplay**: Slide numbered tiles to combine them and create a tile with the number 2048.  
- **Smooth Animations**: Enjoy visual feedback with tile animations for movements and merges.  
- **Score Tracking**: View your current score and high score during the game.  
- **Timer**: Monitor the time taken to complete the game.  
- **Undo**: Revert your last move for a strategic advantage.  
- **AI Move**: Allow the AI to make a random move for you.  
- **Save/Load Game**: Save your progress and resume the game anytime.  
- **Leaderboard**: Track the top 5 scores with their corresponding completion times, saved via local storage.  

---

## Installation  

### Prerequisites  
- A modern web browser is required (e.g., Chrome, Firefox, Safari).  

### Steps  
1. Clone the repository:  
   ```bash
   git clone https://github.com/pragsrv/2048.git
   ```  
2. Navigate to the project directory:  
   ```bash
   cd 2048-game
   ```  

---

## Usage  
1. Open `index.html` in your preferred web browser.  
2. **Game Controls**:  
   - Use the **arrow keys** to slide the tiles.  
   - Tiles with the same number merge into one when they touch.  
   - Aim to reach the **2048 tile** to win the game!  
3. **Additional Controls**:  
   - **Reset**: Start a new game.  
   - **Undo**: Revert to the previous move.  
   - **AI Move**: Let the AI make a move for you.  
   - **Save**: Save the current game state.  
   - **Load**: Load the previously saved game state.  

---

## Game Rules  
- Use the **arrow keys** to slide tiles on the grid.  
- When two tiles with the same number touch, they merge into one.  
- Add up the numbers to reach the **2048 tile** and win the game.  

---

## Leaderboard  
The leaderboard tracks the **top 5 scores** along with the time taken to achieve them.  
- Data is saved locally using the browser’s local storage.  

---

## File Structure  
```plaintext
2048-game/
├── index.html    # Main HTML file containing the game's structure.
├── styles.css    # CSS file for styling the game.
└── script.js     # JavaScript file containing the game's logic.
```  

---

## License  
This project is licensed under the **MIT License**. See the `LICENSE` file for more details.  