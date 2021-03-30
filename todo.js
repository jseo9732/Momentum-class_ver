const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

let todos = [];
let newId = 1;

function delTodo(event) {
    const btn = event.target;
    const delli = btn.parentNode;
    todoList.removeChild(delli);
    const cleanTodos = todos.filter(
        function(todo){
            return todo.id !== parseInt(delli.id);
        }
    );
    todos = cleanTodos;
    saveTodos();
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "✔"
    delBtn.addEventListener("click", delTodo);
    const span = document.createElement("sapn");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);
    todoObj = {
        text: text,
        id: newId
    }
    newId += 1;
    todos.push(todoObj);
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    paintTodo(todoInput.value);
    todoInput.value = "";
}  

function loadTOdo() {
    const loadedTodos = localStorage.getItem("todos");
    if (loadedTodos !== null) {
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(
            function(todo) {
                paintTodo(todo.text);
            }
        );
    }
} 

function init() {
    loadTOdo();
    todoForm.addEventListener("submit",handleSubmit);
}

init();