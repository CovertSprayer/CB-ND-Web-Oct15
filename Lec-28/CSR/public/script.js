console.log('connected!')
const ul = document.querySelector('ul');

function render(todos){
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerText = todo;
        ul.append(li);
    });
}

async function getData(){
    const res = await fetch('/todos');
    const data = await res.json();
    render(data.todos);
}

getData();