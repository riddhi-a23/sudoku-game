# 👑 Sudoku Master

A classic, fully functional Sudoku game built with vanilla JavaScript, HTML, and CSS. This project features a custom backtracking algorithm to generate unique, solvable puzzles every time you play.

## 🎮 Play the Game
[**Click here to Play Live!**](https://riddhi-a23.github.io/sudoku-game/)

## ✨ Features
* **Infinite Puzzles:** Uses a backtracking algorithm to generate a brand new, valid Sudoku board every single game. No two games are alike!
* **Input Validation:** Ensures only numbers 1-9 can be entered.
* **Smart Error Checking:**
    * Verifies user inputs against the generated solution.
    * Highlights incorrect numbers in red while ignoring empty cells.
* **Responsive Design:** Works beautifully on both desktop and mobile screens.
* **Clean UI:** Minimalist, dark-themed interface with a custom grid layout.

## 🛠️ Tech Stack
* **HTML5:** Structure and semantic markup.
* **CSS3:** Custom styling (Flexbox, CSS Grid) with no external libraries.
* **JavaScript (ES6+):** Game logic, DOM manipulation, and recursive puzzle generation.

## 🚀 How to Run Locally
If you want to view the code or modify it on your own machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/riddhi-a23/sudoku-game.git
    ```
2.  **Navigate to the folder:**
    ```bash
    cd sudoku-game
    ```
3.  **Open `index.html`** in your browser to play!

## 🧠 How the Algorithm Works
This game doesn't just pull puzzles from a database. It creates them in real-time:
1.  **Step 1:** Starts with an empty 9x9 grid.
2.  **Step 2:** Uses a **Recursive Backtracking Algorithm** to fill the grid with a valid, fully solved Sudoku board.
    * *Note:* The numbers are shuffled before insertion to ensure randomization.
3.  **Step 3:** Randomly removes 40 numbers to create the "puzzle" for the player to solve.

## 📸 Screenshots
