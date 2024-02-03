const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017/E-com-15-Oct')
    .then(() => console.log('E-com-15-Oct DB connected!'))
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('Working Fine!');
})

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
})


const PORT = 4444;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})