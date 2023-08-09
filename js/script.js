"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let scoreValue = 20;
let highscoreValue = 0;

//Selecting elements
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const backColor = document.querySelectorAll(".back-color");
const inputFocus = document.querySelector(".guess");
const guess = document.querySelector(".guess");

const displayMessage = function (result) {
  message.textContent = result;
};

const displayColor = function (result) {
  for (let i = 0; i < backColor.length; i++) {
    backColor[i].style.backgroundColor = result;
  }
};

const displayScore = function (result) {
  score.textContent = result;
};

const displayWidth = function (result) {
  number.style.width = result;
};

const displayNumber = function (result) {
  number.textContent = result;
};

const displayGuess = function (result) {
  guess.value = result;
};

inputFocus.focus();

checkButton.addEventListener("click", function () {
  const guessValue = Number(guess.value);

  //When there's no input
  if (guessValue === 0 || !guessValue) {
    displayMessage("⛔ No number...");

    //When the player wins
  } else if (guessValue === secretNumber) {
    displayMessage("🎉 Correct number!");
    displayColor("#60b347");
    displayWidth("10rem");
    displayNumber(secretNumber);

    if (scoreValue > highscoreValue) {
      highscoreValue = scoreValue;
      highscore.textContent = highscoreValue;
    }

    //When the guess is wrong
  } else if (guessValue > secretNumber || guessValue < secretNumber) {
    guessValue > secretNumber
      ? displayMessage("📈 Too high!")
      : displayMessage("📉 Too low!");
    scoreValue--;
    displayScore(scoreValue);
    if (scoreValue < 1) {
      displayMessage("💥 You lost the game...");
      displayScore(0);
    }
  }
});

//When the player starts over
againButton.addEventListener("click", function () {
  inputFocus.focus();

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  scoreValue = 20;

  displayNumber("?");
  displayScore(scoreValue);
  displayMessage("Start guessing...");
  displayColor("#222");
  displayWidth("5.2rem");
  displayGuess("");
});
