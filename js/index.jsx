const elAgainBtn = document.querySelector(".again-btn");
const elFoundNumber = document.querySelector(".found-number");
const elInput = document.querySelector(".input");
const elCheckBtn = document.querySelector(".check-btn");
const elLoading = document.querySelector(".loading");
const elAttempts = document.querySelector(".attempts");
const elRecord = document.querySelector(".record");

document.body.style.backgroundColor = "black";
elRecord.textContent = JSON.parse(window.localStorage.getItem("foundNumber"));

let secretNumber = Math.floor(Math.random() * 20) + 1;
let record;
let score = 10;

elCheckBtn.addEventListener("click", function () {
  const inputValue = Number(elInput.value);

  if (elInput.value === "") {
    alert("Iltimos raqam kiriting!");
    elAttempts.textContent = score;
  } else if (inputValue === secretNumber) {
    elFoundNumber.textContent = secretNumber;
    elInput.value = null;
    elLoading.textContent = "Tabriklaymiz 😎😎😎";
    document.body.style.backgroundColor = "green";
    score--;
    const scoreFound = 10 - score;
    elAttempts.textContent = scoreFound;
    elRecord.textContent = scoreFound;
    elCheckBtn.disabled = true;

    window.localStorage.setItem("foundNumber", scoreFound);

    console.log("foundNumber");
  } else if (inputValue >= 0 && inputValue <= 20) {
    elLoading.textContent =
      inputValue > secretNumber ? "Bu son katta!" : "Bu son kichik";
    elInput.value = null;
    score--;
    elAttempts.textContent = score;

    if (score === 0) {
      elCheckBtn.disabled = true;
    }
  }
  console.log(score);

  if (score <= -1) {
    elFoundNumber.textContent = secretNumber;
    elLoading.textContent = "Game Over 😢😢😢";
    document.body.style.backgroundColor = "red";
    elCheckBtn.disabled = true;
  }
});

elAgainBtn.addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;

  elFoundNumber.textContent = "?";
  elInput.value = null;
  elCheckBtn.disabled = false;
  elLoading.textContent = "Loading. . .";
  score = 10;
  elAttempts.textContent = score;
  document.body.style.backgroundColor = "black";
});
