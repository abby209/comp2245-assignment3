document.addEventListener("DOMContentLoaded", function () {
  // Select all the squares in the 3x3 grid using a CSS selector
  const gridSquares = document.querySelectorAll("#board > div");

  // Loop through each square and add the "square" class
  gridSquares.forEach(function (square) {
    square.classList.add("square");
  });
});
