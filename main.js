import './style.css';

var TodoList = function () {
  this.todos = [];
};

TodoList.prototype.addTodo = function (todo) {
  this.todos.push(todo);
};

TodoList.prototype.removeTodo = function (todo) {
  var index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);
};

var todoList = new TodoList();

var input = document.querySelector("#newTodoInput");
var button = document.querySelector("#newTodoButton");
var todos = document.querySelector("#todos");

var render = function () {
  todos.innerHTML = "";
  for (var i = 0; i < todoList.todos.length; i++) {
    var todo = todoList.todos[i];
    var li = document.createElement("li");
    li.textContent = todo;
    todos.appendChild(li);
  }
};

var addTodo = function (event) {
  if (event) {
    event.preventDefault();
  }
  var todo = input.value;
  todoList.addTodo(todo);
  input.value = "";
  render();
};

input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
button.addEventListener("click", addTodo);



