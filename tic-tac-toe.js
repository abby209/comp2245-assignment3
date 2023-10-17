document.addEventListener("DOMContentLoaded", function () {
  // Select all squares in the grid using a CSS selector
  const gridSquares = document.querySelectorAll(".square");

  // Loop through each square and add the "square" class
  gridSquares.forEach(function (square) {
    square.classList.add("square");
  });
});