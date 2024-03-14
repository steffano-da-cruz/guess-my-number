"use strict";

const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const guessNumber = document.querySelector(".guess-number");
const showColor = document.querySelector(".container");
const showNumber = document.querySelector(".show-number");
const showMessage = document.querySelector(".show-message");
const showScore = document.querySelector(".show-score");
const showHighscore = document.querySelector(".show-highscore");

/* Starting conditions */
let guessValue = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let playing = true;

const playingGame = function () {
  guessValue = Number(guessNumber.value);
  if (playing) {
    /* When the player doesn't guess or type 0 */
    if (!guessValue) {
      showMessage.textContent = "⛔ No number...";

      /* When the player wins */
    } else if (guessValue === secretNumber) {
      showColor.style.backgroundColor = "#27b83f";
      showNumber.style.width = "15rem";
      showNumber.textContent = secretNumber;
      showMessage.textContent = "🎉 Correct number!";
      if (score > highscore) {
        highscore = score;
        showHighscore.textContent = highscore;
      }
      playing = false;

      /* When the guess is wrong */
    } else if (guessValue !== secretNumber) {
      score--;
      showScore.textContent = score;

      guessValue > secretNumber
        ? (showMessage.textContent = "📈 Too high!")
        : (showMessage.textContent = "📉 Too low!");

      /* When the player loses */
      if (score < 1) {
        showScore.textContent = 0;
        showMessage.textContent = "💥 You lost...";
        playing = false;
      }
    }
  }
};

const resetingGame = function () {
  playing = true;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  showColor.style.backgroundColor = "#222";
  showNumber.style.width = "9rem";
  showNumber.textContent = "?";
  showScore.textContent = score;
  showMessage.textContent = "Start guessing...";
  guessNumber.value = "";
  guessNumber.focus();
};

/* Using the mouse to confirm */
checkButton.addEventListener("click", playingGame);

/* Using the enter key to confirm */
guessNumber.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    playingGame();
  }
});

/* When the player wants to start over */
againButton.addEventListener("click", resetingGame);
