const express = require('express');
const app = express();
const { blogsData: blogs } = require('./blogsData');
const path = require('path');
const { v4: uuid } = require('uuid');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('working fine!');
})

app.get('/blogs', (req, res) => {
    res.render('blogs', { blogs });
})

app.get('/blogs/new', (req, res) => {
    res.render('new');
})

app.post('/blogs', (req, res) => {
    const { title, desc, author } = req.body;
    let views = 0;
    views = Math.floor(Math.random() * 10) + 'k';
    blogs.push({ id: uuid(), title, desc, author, views });
    res.redirect('/blogs');
})

app.get('/blogs/:id', (req, res) => {
    const { id } = req.params;
    const blog = blogs.find(blog => blog.id === id);
    res.render('show', { blog });
})



const PORT = 4444;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})