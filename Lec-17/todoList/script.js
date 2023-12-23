const todoList = document.querySelector('.todo-list');
const form = document.querySelector('form');
const inp = document.querySelector('form input');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const text = inp.value;
    inp.value = '';
    addTextToList(text);
})

function addTextToList(text){
    if(text == '') return;
    
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.innerHTML = `<div class="left">
                            <input type="checkbox">
                            <p>${text}</p>
                        </div>
                        <div class="right">
                            <span class="up-arrow">🔼</span>
                            <span class="trash-bin">🗑️</span>
                            <span class="down-arrow">🔽</span>
                        </div>`
    todoList.append(todo);
    console.log(todo);
}