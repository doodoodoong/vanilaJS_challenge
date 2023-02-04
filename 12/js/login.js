// 1. input 내용을 엔터 누르면 로컬스토리지에 저장
// 2. 로컬 스토리지에 저장된 내용이 상단 hello, user에 표시되게끔

const userInputNameForm = document.querySelector(
  "body > main > div.login > form"
);
const userInputName = document.querySelector(
  "body > main > div.login > form > input[type=text]"
);

function displayName(e) {
  e.preventDefault();
  localStorage.setItem("userName", userInputName.value);
  const helloUser = document.querySelector("#user-name");
  helloUser.innerText = `Hello, ${localStorage.getItem("userName")}`;
}

userInputNameForm.addEventListener("submit", displayName);
