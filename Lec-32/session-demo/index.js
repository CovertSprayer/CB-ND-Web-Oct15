const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
}))

app.get('/', (req, res)=>{
    res.send('working fine')
})

app.get('/someRouter', (req, res)=>{
    req.session.name = 'Shreyance';
    res.send(req.session);
})

app.listen(5000);