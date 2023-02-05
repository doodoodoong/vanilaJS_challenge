const todoInputForm = document.querySelector("body > main > div.todo > form");
const todoInput = document.querySelector(
  "body > main > div.todo > form > input[type=text]"
);
const todoContainer = document.querySelector("body > main > div.todo");
const checkboxList = document.querySelectorAll(
  "body > main > div.todo > ul > input[type=checkbox]"
);
const todoUl = document.querySelector("body > main > div.todo > div.todoList");
let toDos = [];

function todoAdd(e) {
  e.preventDefault();
  const num = new Date().getTime();
  const ul = document.createElement("ul");
  todoUl.appendChild(ul);
  ul.className = String(num);
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  ul.appendChild(checkbox);
  checkbox.addEventListener("change", deleteTodo);
  const span = document.createElement("span");
  ul.appendChild(span);
  checkbox.classList.add("fade-in");
  span.classList.add("fade-in");
  span.innerText = ` ${todoInput.value}`;
  const obj = {
    id: num,
    content: span.innerText,
  };
  toDos.push(obj);
  localStorage.setItem("todoList", JSON.stringify(toDos));
  todoInput.value = "";
}

function deleteTodo(e) {
  const ul = e.target.parentElement;
  toDos = toDos.filter((i) => i.id !== parseInt(ul.className));
  ul.remove();
  localStorage.setItem("todoList", JSON.stringify(toDos));
}

if (localStorage.getItem("todoList") !== null) {
  const list = JSON.parse(localStorage.getItem("todoList"));
  for (i = 0; i <= list.length - 1; i++) {
    const ul = document.createElement("ul");
    todoUl.appendChild(ul);
    ul.className = String(list[i].id);
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    ul.appendChild(checkbox);
    checkbox.addEventListener("change", deleteTodo);
    const span = document.createElement("span");
    ul.appendChild(span);
    span.innerText = `${list[i].content}`;
  }
}

todoInputForm.addEventListener("submit", todoAdd);
