const todos = []; 

const render = () => {
        const todoList = document.getElementById('todo-list');
    const TodosTemplate = todos.map( t => '<li>' + '<input type="checkbox">' + t + '</li>');
    todoList.innerHTML = TodosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach( (elemento, i) =>{
        elemento.addEventListener('click', () =>{
        elemento.parentNode.removeChild(elemento)
        // Clean the array: 
        todos.splice(i, 1);
        render() 
        })
    }
    )
}

const form = document.getElementById('todo-form');
form.onsubmit = (x) =>{
    x.preventDefault();
    const todo = document.getElementById('todo'); 
    const todotext = todo.value;
    todo.value = ''; 
    todos.push(todotext);
    render(); 
    }
