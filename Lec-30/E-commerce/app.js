const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/E-com-15-Oct')
    .then(() => console.log('E-com-15-Oct DB connected!'))
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('Working Fine!');
})

const productRouter = require('./routes/product');
const reviewRouter = require('./routes/review');


app.use(productRouter);
app.use(reviewRouter);


const PORT = 4444;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})