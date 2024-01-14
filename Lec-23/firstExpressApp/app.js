const express = require('express');
const app = express();
const movieData = require('./data/movies');




app.get('/', (req, res) => {
    res.send('HOME PAGE!')
})

app.get('/r/:q', (req, res) => {
    console.log(req.params);
    res.send(`You made a request! ${req.params.q}`);
})

app.get('/login/:username/:password', (req, res) => {
    const { username, password } = req.params;

    if(password === 'abcd'){
        return res.send(`Hello ${username}`);
    }
    return res.send('You are not authorised!');
})

app.get('/search', (req, res)=>{
    console.log(req.query);
    res.send('you searched something!');
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})