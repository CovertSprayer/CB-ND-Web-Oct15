// express, express-session, ejs

const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/auth-demo-oct')
    .then(() => console.log('db connected!'))
    .catch(err => console.log(err))

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'some-secret',
    resave: false,
    saveUninitialized: true
}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

function isValid(req, res, next){
    const user = req.session.user;
    if(!user) 
        return res.redirect('/login')

    next();
}

function self(req, res, next){
    if(req.session.user){
        return res.redirect('back')
    }

    next();
}

app.get('/', isValid, (req, res) => {
    res.render('home', {user: req.session.user});
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/login', self, (req, res) => {
    res.render('login');
})

app.post('/register', self, async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)

    const existingUser = await User.findOne({username});
    console.log(existingUser);

    if(existingUser) 
        return res.send('username already exists');

    console.log('-----------------------')
    const user = await User.create({ username, password });
    console.log(user);

    res.redirect('/login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const existingUser = await User.findOne({username});
    if(!existingUser || existingUser.password !== password) 
        return res.send('Invalid credentials');

    req.session.user = existingUser;
    res.redirect('/');
})

app.get('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect('/login')
})

const port = 5000;
app.listen(port, () => {
    console.log('Server is up at port', port);
})