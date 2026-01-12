let solutionBoard = [];
let playerBoard = [];

document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    createBoard(board);

    const newGameBtn = document.getElementById("btn-new-game");
    const resetBtn = document.getElementById("btn-reset");
    const solveBtn = document.getElementById("btn-solve");

    newGameBtn.addEventListener("click",()=>createBoard(board));
    resetBtn.addEventListener("click",()=>{
        if(confirm("Are you sure you want to reset the board? All your progress will be lost.")){
            for(let i=0;i<81;i++){
                let tile = document.getElementById(i.toString());
                if(!tile.classList.contains("prefilled")){
                    tile.value = "";
                    tile.classList.remove("error");
                }
            }
        }
    });
    solveBtn.addEventListener("click",()=>{
        let isCorrect = true;
        let isEmpty = false;
        for(let i=0;i<81;i++){
            let tile = document.getElementById(i.toString());
            let row = Math.floor(i/9);
            let col = i%9;

            let userInput = tile.value;
            let correctInput = solutionBoard[row][col];

            if(tile.classList.contains("prefilled")){
                continue;
            }

            if(userInput===""){
                isCorrect = false;
                isEmpty = true;
                tile.classList.remove("error");
            } else if(parseInt(userInput)!=correctInput) {
                isCorrect = false;
                tile.classList.add("error");
            }else {
                tile.classList.remove("error");
            }
        }
        if (isCorrect) {
            alert("Congratulations! You solved the puzzle! 🎉");
        } else if (isEmpty) {
            alert("The puzzle is not finished yet. Keep going!");
        } else {
            alert("Some numbers are incorrect. Look for the red boxes!");
        }
    });
});

function createBoard(boardElement) {
    boardElement.innerHTML = "";
    generatePuzzle();
    for(let i=0;i<81;i++){
        let tile = document.createElement("input");

        tile.type = "text";
        tile.inputMode="numeric";
        tile.maxLength = 1;
        tile.id = i.toString();

        tile.classList.add("tile");

        let row = Math.floor(i/9);
        let col = i%9;

        if(row==2 || row==5){
            tile.classList.add("border-bottom");
        }

        if(col==2 || col == 5){
            tile.classList.add("border-right");
        }   

        let value = playerBoard[row][col];

        if(value!=0){
            tile.value = value;
            tile.readOnly = true;
            tile.classList.add("prefilled");
        } else{
            tile.value ="";

            tile.addEventListener("input",function() {
                if(!this.value.match(/^[1-9]$/)){
                    this.value = "";
                }
                this.classList.remove("error");
            });
        }
        boardElement.appendChild(tile);
        
    }
}

function isSafe(board, row, col, num){
    //check in row and column
    for(let i=0;i<9;i++){
        if(board[row][i]==num || board[i][col] == num){
            return false;
        }
    }

    let sr = Math.floor(row/3)*3;
    let sc = Math.floor(col/3)*3;

    //check in grid
    for(let i=sr;i<(sr+3);i++){
        for(let j=sc;j<(sc+3);j++){
            if(board[i][j] == num){
                return false;
            }
        }
    }

    return true;
}

function helper(board, row, col){
    if(row == 9){
        return true;
    }

    let nextRow = row;
    let nextCol = col+1;
    if(nextCol == 9){
        nextRow = row+1;
        nextCol = 0;
    }
    if(board[row][col] != 0){
        return helper(board, nextRow, nextCol);
    }

    let nums = [1,2,3,4,5,6,7,8,9];

    nums.sort(() => Math.random()-0.5);

    for(let i of nums){
        if(isSafe(board, row, col, i)){
            board[row][col] = i;
            if(helper(board,nextRow,nextCol)){
                return true;
            }
            board[row][col] = 0;
        }
    }
    return false;
}

function solveBoard(board){
    return helper(board,0,0);
}

//generate Puzzle creates the entire board and then remove numbers to make the question that is to be appeared on the users screen
function generatePuzzle(){
    let board = Array.from({length:9},() => Array(9).fill(0));

    solveBoard(board);

    solutionBoard = JSON.parse(JSON.stringify(board));

    let attempts = 40;

    while(attempts>0){
        let row = Math.floor(Math.random()*9);
        let col = Math.floor(Math.random()*9);

        if(board[row][col]!=0){
            board[row][col]= 0 ;
            attempts--;
        }
    }
    playerBoard = board;
}