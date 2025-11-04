const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
runEvents();

function runEvents() {
  form.addEventListener("submit", addTodo);
}

function addTodo(e) {
  console.log("submit eventi calisti.");
  e.preventDefault();
}
