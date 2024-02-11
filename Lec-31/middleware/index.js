const express = require('express');
const app = express();
const { getAllQuotes } = require('./controllers/quotes');

const secret = 'ABCD_XYZ'

app.use((req, res, next)=>{
    console.log('You hit a request')
    next();
})

function rapper(mySecret){
    return (req, res, next)=>{
        const { secret } = req.query;
        console.log(secret);
        if(secret !== mySecret){
            return res.send('Invalid Secret!')
        }
        next();
    }
}

app.get('/quotes', rapper('1234'), getAllQuotes);
// app.get('/products', rapper('abcd'), getAllProducts);

app.get('/', (req, res) => {
    res.send('Working Fine!');
})

app.listen(5000);