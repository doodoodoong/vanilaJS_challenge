// 1. input 내용을 엔터 누르면 로컬스토리지에 저장
// 2. 로컬 스토리지에 저장된 내용이 상단 hello, user에 표시되게끔

const userInputNameForm = document.querySelector(
  "body > main > div.login > form"
);
const userInputName = document.querySelector(
  "body > main > div.login > form > input[type=text]"
);
const helloUser = document.querySelector("#user-name");
const loginForm = document.querySelector("body > main > div.login");
const navBar = document.querySelector("body > nav");
const todoList = document.querySelector("body > main > div.todo.hidden");

function displayName(e) {
  e.preventDefault();
  localStorage.setItem("userName", userInputName.value);
  helloUser.innerText = `Hello, ${localStorage.getItem("userName")}`;
  loginForm.classList.add("login-success");
  setInterval(() => loginForm.classList.add("hidden"), 2000);
  setInterval(() => navBar.classList.remove("hidden"), 2000);
  setInterval(() => navBar.classList.add("fade-in"), 2000);
  setInterval(() => todoList.classList.remove("hidden"), 2000);
  setInterval(() => todoList.classList.add("fade-in"), 2000);
}

if (localStorage.getItem("userName") !== null) {
  helloUser.innerText = `Hello, ${localStorage.getItem("userName")}`;
  loginForm.classList.add("hidden");
  navBar.classList.remove("hidden");
  todoList.classList.remove("hidden");
} else {
  navBar.classList.add("hidden");
  userInputNameForm.addEventListener("submit", displayName);
}
