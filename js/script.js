"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let scoreValue = 20;
let highscoreValue = 0;
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const bodyColor = document.querySelector("body");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const againButton = document.querySelector(".again");

const displayMessage = function (resp) {
  message.textContent = resp;
};
const displayScore = function (resp) {
  score.textContent = resp;
};

const displayNumber = function (resp) {
  number.textContent = resp;
};

const displayColor = function (resp) {
  bodyColor.style.backgroundColor = resp;
};

const displayWidth = function (resp) {
  number.style.width = resp;
};

checkButton.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there's no input
  if (guess === 0 || !guess) {
    displayMessage("⛔ No number...");

    //When the player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct number!");
    displayNumber(secretNumber);
    displayColor("#60b347");
    displayWidth("8rem");
    if (scoreValue > highscoreValue) {
      highscoreValue = scoreValue;
      highscore.textContent = highscoreValue;
    }

    //When the player chooses the wrong number
  } else if (guess > secretNumber || guess < secretNumber) {
    guess > secretNumber
      ? displayMessage("📈 Too high!")
      : displayMessage("📉 Too low!");
    scoreValue--;
    displayScore(scoreValue);
    if (scoreValue < 1) {
      displayMessage("💥 You lost the game");
      displayScore("0");
    }
  }
});

//When the player wants to start over
againButton.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  scoreValue = 20;

  displayNumber("?");
  displayScore(scoreValue);
  displayColor("#222");
  displayWidth("5rem");
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
});
