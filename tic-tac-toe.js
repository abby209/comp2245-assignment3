document.addEventListener("DOMContentLoaded", function () {
  // Select all the squares in the 3x3 grid using a CSS selector
  const gridSquares = document.querySelectorAll("#board > div");

  // Loop through each square and add the "square" class
  gridSquares.forEach(function (square) {
    square.classList.add("square");
  });
});

document.addEventListener("DOMContentLoaded", function () {
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

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the game state array (3x3 grid) with empty squares
  const gameState = ["", "", "", "", "", "", "", "", ""];

  // Select all squares in the grid using a CSS selector
  const gridSquares = document.querySelectorAll(".square");

  // Initialize a variable to keep track of the current player (X or O)
  let currentPlayer = "X";

  // Add a click event listener to each square
  gridSquares.forEach(function (square, index) {
    // Mouseover event to apply the hover effect
    square.addEventListener("mouseover", function () {
      // Check if the square is empty (not already marked with X or O)
      if (gameState[index] === "") {
        square.classList.add("hover");
      }
    });

    // Mouseout event to remove the hover effect
    square.addEventListener("mouseout", function () {
      // Check if the square is empty (not already marked with X or O)
      if (gameState[index] === "") {
        square.classList.remove("hover");
      }
    });

    // Click event to place X or O and toggle players
    square.addEventListener("click", function () {
      // Check if the square is empty (not already marked with X or O)
      if (gameState[index] === "") {
        // Update the game state array and the visual representation
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        square.classList.remove("hover");

        // Toggle the current player (X to O or O to X)
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const gameState = ["", "", "", "", "", "", "", "", ""];
  const gridSquares = document.querySelectorAll(".square");
  let currentPlayer = "X";
  let gameWon = false;

  // Function to check for a win
  function checkForWin(player) {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (gameState[a] === player && gameState[b] === player && gameState[c] === player) {
        return true;
      }
    }

    return false;
  }

  // Function to update the status message
  function updateStatusMessage(message) {
    const status = document.getElementById("status");
    status.textContent = message;
    status.classList.add("you-won");
  }

  gridSquares.forEach(function (square, index) {
    square.addEventListener("click", function () {
      if (gameState[index] === "" && !gameWon) {
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        if (checkForWin(currentPlayer)) {
          gameWon = true;
          updateStatusMessage(`Congratulations! ${currentPlayer} is the Winner!`);
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });

    square.addEventListener("mouseover", function () {
      if (gameState[index] === "" && !gameWon) {
        square.classList.add("hover");
      }
    });

    square.addEventListener("mouseout", function () {
      square.classList.remove("hover");
    });
  });
});
