const express = require('express');
const app = express();
const path = require('path');

const todos = ['Do some Gaming', 'Some Coding', 'Buy something'];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    res.send('Working Fine!!');
})

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/public/css/style.css', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'css', 'style.css'))
// })

app.get('/todos', (req, res)=>{
    res.render('index', {todos});
})

app.listen(4444, ()=>{
    console.log('Server is up at port', 4444);
})