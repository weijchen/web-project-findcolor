var colors = [];
var targetColor;
var colorRange = 150;
var r;
var g;
var b;
var curScore = 0;
var scoreToAdd = 30;
var hasAdd = false;

var easyButton = document.getElementById("easyBtn");
var hardButton = document.getElementById("hardBtn");
var modeButton = document.querySelectorAll(".mode");
var resetButton = document.getElementById("resetBtn");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var scoreContent = document.getElementById("score");

init();

function init() {
  setupModeButtons();
  setupSquaresColor();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function () {
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      modeButton[2].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        colorRange = 150;
        scoreToAdd = 30;
      } else if (this.textContent === "Medium") {
        colorRange = 100;
        scoreToAdd = 50;
      } else if (this.textContent === "Hard") {
        colorRange = 75;
        scoreToAdd = 100;
      }
    })
  }
}

function setupSquaresColor() {
  generateColor();
  colors = generateRandomColors();
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
}

resetButton.addEventListener("click", function () {
  reset();
  hasAdd = false;
})

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function () {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === targetColor) {
        messageDisplay.textContent = "A Ha! You found it!";
        resetButton.textContent = "Restart";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        if (!hasAdd) {
          curScore += scoreToAdd;
          hasAdd = true;
        }
        scoreContent.textContent = String(curScore);
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Wrong pick, back to ZERO :P";
        resetButton.textContent = "Play Again?";
        curScore = 0;
        scoreContent.textContent = String(curScore);
      }
    })
  }
}

function reset() {
  resetButton.textContent = "New Game";
  generateColor();
  colors = generateRandomColors();
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  messageDisplay.textContent = "";
  setupSquares();
}

function changeColors() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = targetColor;
  }
}

function generateRandomColors() {
  var arr = [];
  var selectedSquare = Math.floor(Math.random() * squares.length);
  for (var i = 0; i < squares.length; i++) {
    if (i === selectedSquare) {
      targetColor = modifyColor();
      arr.push(targetColor);
    } else {
      arr.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
  }
  return arr;
}

function generateColor() {
  // pick a "red" from 0-255
  r = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0-255
  b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function modifyColor() {
  // pick a "red" from 0-255
  var tmpR = r - Math.floor(Math.random() * colorRange + 1);
  if (tmpR < 0) { tmpR = r + Math.floor(Math.random() * colorRange + 1); }
  // pick a "green" from 0-255
  var tmpG = g - Math.floor(Math.random() * colorRange + 1);
  if (tmpG < 0) { tmpG = g + Math.floor(Math.random() * colorRange + 1); }
  // pick a "blue" from 0-255
  var tmpB = b - Math.floor(Math.random() * colorRange + 1);
  if (tmpB < 0) { tmpB = b + Math.floor(Math.random() * colorRange + 1); }
  return "rgb(" + tmpR + ", " + tmpG + ", " + tmpB + ")";
}
