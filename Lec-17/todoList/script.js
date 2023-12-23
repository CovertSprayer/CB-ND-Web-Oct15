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
                            <input class="check" type="checkbox">
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

todoList.addEventListener('click', (e)=>{
    const className = e.target.getAttribute('class');

    if(className === 'trash-bin'){
        e.target.parentElement.parentElement.remove();
    }

    else if(className === 'up-arrow'){
        try {
            const currTodo = e.target.parentElement.parentElement;
            const prevTodo = currTodo.previousElementSibling;
            prevTodo.before(currTodo);
        } 
        catch (error) {
            console.log('Cant move further!!');
        }
    }

    else if(className === 'down-arrow'){
        const currTodo = e.target.parentElement.parentElement;
        const nextTodo = currTodo.nextElementSibling;
        nextTodo.after(currTodo);
    }

    else{
        if(e.target.classList.contains('todo')){
            e.target.children[0].children[1].classList.toggle('line-th-eff');
            e.target.children[0].children[0].setAttribute('checked', true);
        }
        else if(e.target.classList.contains('left'))
            e.target.children[1].classList.toggle('line-th-eff');

        else
            e.target.classList.toggle('line-th-eff');
    }
})