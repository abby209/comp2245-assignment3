document.addEventListener("DOMContentLoaded", function () {
  // Select all squares in the grid using a CSS selector
  const gridSquares = document.querySelectorAll(".square");

  // Loop through each square and add the "square" class
  gridSquares.forEach(function (square) {
    square.classList.add("square");
  });
  
  // Initialize the game state array (3x3 grid) with empty squares
  const gameState = ["", "", "", "", "", "", "", "", ""];

  // Select all squares in the grid using a CSS selector
  const gridSquares = document.querySelectorAll(".square");

  // Initialize a variable to keep track of the current player (X or O)
  let currentPlayer = "X";

  // Add a click event listener to each square
  gridSquares.forEach(function (square, index) {
    square.addEventListener("click", function () {
      // Check if the square is empty (not already marked with X or O)
      if (gameState[index] === "") {
        // Update the game state array and the visual representation
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        // Toggle the current player (X to O or O to X)
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
});
