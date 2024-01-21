const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
})

app.get('/random', (req, res) => {
    const randomNum = Math.floor(Math.random()*10);
    res.render('randomNum', { num: randomNum });
})

app.get('/todos', (req, res) => {
    const todos = ['Go to park', 'Buy Groceries', 'Play some games', 'Coding'];
    res.render('todo', { todos });
})

app.listen(4444, () => console.log('Listening on 4444'));