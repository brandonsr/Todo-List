const todos = []; 

const form = document.getElementById('todo-form');
form.onsubmit = (x) =>{
    x.preventDefault();
    const todo = document.getElementById('todo'); 
    const todotext = todo.value;
    todo.value = ''; 
    todos.push(todotext);
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''
    for( i = 0; i < todos.length; i++){
        todoList.innerHTML += '<li>' + '<input type="checkbox">' + todos[i] + '</li>'
    }
}