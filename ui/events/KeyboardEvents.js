<!-- FILEPATH: /c:/Users/vs/Desktop/Javascript/ui/events/KeyboardEvents.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Tic Tac Toe</title>
    <style>
        .board {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
            margin-bottom: 10px;
        }

        .cell {
            width: 100px;
            height: 100px;
            border: 1px solid black;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="board">
        <div class="cell" onclick="makeMove(0, 0)"></div>
        <div class="cell" onclick="makeMove(0, 1)"></div>
        <div class="cell" onclick="makeMove(0, 2)"></div>
        <div class="cell" onclick="makeMove(1, 0)"></div>
        <div class="cell" onclick="makeMove(1, 1)"></div>
        <div class="cell" onclick="makeMove(1, 2)"></div>
        <div class="cell" onclick="makeMove(2, 0)"></div>
        <div class="cell" onclick="makeMove(2, 1)"></div>
        <div class="cell" onclick="makeMove(2, 2)"></div>
    </div>

    <script>
        // FILEPATH: /c:/Users/vs/Desktop/Javascript/ui/events/KeyboardEvents.js
        // Create a 2D array to represent the game board
        const board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        // Variable to keep track of the current player
        let currentPlayer = 'X';

        // Function to handle a player's move
        function makeMove(row, col) {
            // Check if the selected cell is empty
            if (board[row][col] === '') {
                // Set the cell with the current player's symbol
                board[row][col] = currentPlayer;

                // Update the cell's content
                const cell = document.getElementsByClassName('cell')[row * 3 + col];
                cell.textContent = currentPlayer;

                // Switch to the next player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

                // Check if there is a winner
                const winner = checkWin();
                if (winner) {
                    alert(`Player ${winner} wins!`);
                    resetBoard();
                }
            }
        }

        // Function to check if a player has won
        function checkWin() {
            // Check rows
            for (let row = 0; row < 3; row++) {
                if (board[row][0] !== '' && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
                    return board[row][0];
                }
            }

            // Check columns
            for (let col = 0; col < 3; col++) {
                if (board[0][col] !== '' && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
                    return board[0][col];
                }
            }

            // Check diagonals
            if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
                return board[0][0];
            }
            if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
                return board[0][2];
            }

            // No winner
            return null;
        }

        // Function to reset the game board
        function resetBoard() {
            board.forEach(row => row.fill(''));
            const cells = document.getElementsByClassName('cell');
            Array.from(cells).forEach(cell => cell.textContent = '');
        }
    </script>
</body>
</html>
