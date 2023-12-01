"use strict";

const guessNumber = document.querySelector(".guess-number");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const showNumber = document.querySelector(".show-number");
const showMessage = document.querySelector(".show-message");
const showScore = document.querySelector(".show-score");
const showHighscore = document.querySelector(".show-highscore");
const headerContainer = document.querySelector(".header-container");
const mainContainer = document.querySelector(".main-container");

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (result) {
  showMessage.textContent = result;
};

const displayScore = function () {
  showScore.textContent = score;
};

const displayEmpty = function () {
  guessNumber.value = "";
  guessNumber.focus();
};

checkButton.addEventListener("click", function () {
  const guess = Number(guessNumber.value);

  // When there is no input or the input is 0
  if (!guess) {
    displayMessage("⛔ No number...");
    displayEmpty();

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct number!");
    headerContainer.style.backgroundColor = "#60b347";
    mainContainer.style.backgroundColor = "#60b347";
    showNumber.style.width = "15rem";
    showNumber.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      showHighscore.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    score--;
    displayScore();

    if (score >= 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
    }

    // When player loses
    else {
      score = 0;
      displayScore();
      displayMessage("💥 You lost the game...");
    }
  }
});

// When player wants to start over
againButton.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayScore();
  displayMessage("Start guessing...");
  displayEmpty();
  headerContainer.style.backgroundColor = "#222";
  mainContainer.style.backgroundColor = "#222";
  showNumber.style.width = "9rem";
  showNumber.textContent = "?";
});
