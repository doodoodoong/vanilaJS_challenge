const generateInput = document.querySelector("#generate-number");
const guessInput = document.querySelector("#guess-number");
const btnPlay = document.querySelector("#guess-number > button");
const youChose = document.querySelector("body > div > span.you-chose");
const machineChose = document.querySelector("body > div > span.machine-chose");
const displayResult = document.querySelector("body > div > p.display-result");

function generateNumber(e) {
  e.preventDefault();
  const generateNumber = document.querySelector(
    "#generate-number > input[type=number]"
  ).value;

  const randomNumber = Math.ceil(Math.random() * parseInt(generateNumber));
  localStorage.setItem("randomNumber", randomNumber);
}

function guessNumber(e) {
  e.preventDefault();
  const guessNumber = document.querySelector(
    "#guess-number > input[type=number]"
  ).value;
  localStorage.setItem("guessNumber", guessNumber);
}

function judge() {
  const randomNumber = parseInt(localStorage.getItem("randomNumber"));
  const guessNumber = parseInt(localStorage.getItem("guessNumber"));
  if (
    localStorage.getItem("randomNumber") !== null &&
    localStorage.getItem("guessNumber") !== null
  ) {
    youChose.innerText = `You chose: ${guessNumber}, `;
    machineChose.innerText = `the machine chose: ${randomNumber}`;
    if (randomNumber === guessNumber) {
      displayResult.innerText = "You Win!";
    } else {
      displayResult.innerText = "You lost!";
    }
  }

  generateNewNumber(
    document.querySelector("#generate-number > input[type=number]").value
  );
}

function generateNewNumber(e) {
  const newRandomNumber = Math.ceil(Math.random() * e);
  localStorage.setItem("randomNumber", newRandomNumber);
}

generateInput.addEventListener("submit", generateNumber);
guessInput.addEventListener("submit", guessNumber);
btnPlay.addEventListener("click", judge);
