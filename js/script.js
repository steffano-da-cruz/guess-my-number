"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When the number is not set
  if (guess === 0 || !guess) {
    displayMessage("⛔ No number...");

    //When the player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "10rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //When the player is wrong
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
    score--;
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      displayMessage("💥 You lost the game...");
      document.querySelector(".score").textContent = "0";
    }
  }
});

//When the player wants to play again
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "5rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
});
