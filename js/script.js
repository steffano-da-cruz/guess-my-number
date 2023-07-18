"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When the number is not set
  if (guess === 0 || !guess) {
    document.querySelector(".message").textContent = "⛔ No number...";

    //When the player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.padding = "3rem";
    document.querySelector("header").style.backgroundColor = "#60b347";
    document.querySelector("main").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //When the guess is too high
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈 Too high!";
    score--;
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      document.querySelector(".message").textContent =
        "💥 You lost the game...";
      document.querySelector(".score").textContent = "0";
    }

    //When the guess is too low
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "📉 Too low!";
    score--;
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      document.querySelector(".message").textContent =
        "💥 You lost the game...";
      document.querySelector(".score").textContent = "0";
    }
  }
});

//When the player wants to play again
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").style.padding = "2rem";
  document.querySelector("header").style.backgroundColor = "#222";
  document.querySelector("main").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
});
