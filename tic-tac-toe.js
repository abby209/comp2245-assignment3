document.addEventListener("DOMContentLoaded", function () {
  // Select all squares in the grid using a CSS selector
  const gridSquares = document.querySelectorAll(".square");
  
  const gameState = ["", "", "", "", "", "", "", "", ""];
  const gridSquares = document.querySelectorAll(".square");
  let currentPlayer = "X";

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
  
  gridSquares.forEach(function (square, index) {
    // Add mouseover event listener to apply the hover effect
    square.addEventListener("mouseover", function () {
      if (gameState[index] === "") {
        square.classList.add("hover");
      }
    });

    // Add mouseout event listener to remove the hover effect
    square.addEventListener("mouseout", function () {
      if (gameState[index] === "") {
        square.classList.remove("hover");
      }
    });

    square.addEventListener("click", function () {
      if (gameState[index] === "") {
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        square.classList.remove("hover");
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
  
});
