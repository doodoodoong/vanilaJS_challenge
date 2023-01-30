const generateNumber = document.querySelector("#generateNumber");
const guessNumber = document.querySelector("#guessNumber");
const btnPlay = document.querySelector("body > div.guessNumber > button");

function gNumber(e) {
  const number = e.target.value;
  console.log(number);
  const randomNumber = Math.floor(Math.random() * parseInt(number));
  console.log(randomNumber);
  localStorage.setItem("randomNumber", randomNumber);
}

function chooseNumber(e) {
  const number = e.target.value;
  console.log(number);
  console.log(typeof number);
  localStorage.setItem("chooseNumber", number);
}

function judge() {
  const randomNumber = parseInt(localStorage.getItem("randomNumber"));
  const chooseNumber = parseInt(localStorage.getItem("chooseNumber"));
  if (randomNumber === chooseNumber) {
    console.log("correct");
  } else {
    console.log("fail");
  }
}

generateNumber.addEventListener("change", gNumber);
guessNumber.addEventListener("change", chooseNumber);
btnPlay.addEventListener("click", judge);
