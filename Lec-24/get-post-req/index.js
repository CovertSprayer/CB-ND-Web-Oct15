const express = require('express')
const app = express();
const {users} = require('./users');

app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.get('/', (req, res)=>{
    res.send('Working Fine!!');
})

app.get('/users', (req, res)=>{
    res.render('users', {users});
})

app.get('/users/new', (req, res)=>{
    res.render('newUser');
})

app.post('/users', (req, res)=>{
    const data = req.body;
    users.push(data);

    res.redirect('/users');
})

const PORT = 4444;
app.listen(PORT, ()=>{
    console.log('Server is up at port', PORT);
})