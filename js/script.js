"use strict";

const inputValue = document.querySelector(".guess-number");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const showNumber = document.querySelector(".show-number");
const showColor = document.querySelector(".container");
const showMessage = document.querySelector(".show-message");
const showScore = document.querySelector(".show-score");
const showHighscore = document.querySelector(".show-highscore");

// Starting conditions

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let playing = true;

const inputFocus = function () {
  inputValue.focus();
};

const playerWins = function () {
  showColor.style.backgroundColor = "#27b83f";
  showNumber.textContent = secretNumber;
  showNumber.style.width = "15rem";
  showMessage.textContent = "🎉 Correct number!";

  playing = false;
};

const playerLoses = function () {
  showColor.style.backgroundColor = "#ff0000";
  showMessage.textContent = "💥 You lost...";

  playing = false;
};

const startOver = function () {
  showScore.textContent = score;
  showColor.style.backgroundColor = "#222";
  showNumber.textContent = "?";
  showNumber.style.width = "9rem";
  showMessage.textContent = "Start guessing...";
  inputValue.value = "";
  inputFocus();

  playing = true;
};

checkButton.addEventListener("click", function () {
  const value = Number(inputValue.value);

  //When there's no value or the value is 0
  if (!value) {
    if (playing) {
      showMessage.textContent = "⛔ No Number...";
      inputFocus();
    }

    //When the player wins
  } else if (value === secretNumber) {
    if (playing) {
      playerWins();

      if (score >= highscore) {
        highscore = score;
        showHighscore.textContent = highscore;
      }
    }

    //When the guess is wrong
  } else if (value !== secretNumber) {
    if (playing) {
      score--;
      showScore.textContent = score;

      value < secretNumber
        ? (showMessage.textContent = "📉 Too low")
        : (showMessage.textContent = "📈 Too high");

      //When the player loses
      if (score === 0) {
        playerLoses();
      }
    }
  }
});

inputValue.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const value = Number(inputValue.value);

    //When there's no value or the value is 0
    if (!value) {
      if (playing) {
        showMessage.textContent = "⛔ No Number...";
        inputFocus();
      }

      //When the player wins
    } else if (value === secretNumber) {
      if (playing) {
        playerWins();

        if (score >= highscore) {
          highscore = score;
          showHighscore.textContent = highscore;
        }
      }

      //When the guess is wrong
    } else if (value !== secretNumber) {
      if (playing) {
        score--;
        showScore.textContent = score;

        value < secretNumber
          ? (showMessage.textContent = "📉 Too low")
          : (showMessage.textContent = "📈 Too high");

        //When the player loses
        if (score === 0) {
          playerLoses();
        }
      }
    }
  }
});

againButton.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  startOver();
});
