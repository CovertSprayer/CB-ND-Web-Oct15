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

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
})

app.post('/products', async (req, res) => {
    const { name, img, price, desc } = req.body;
    await Product.create({ name, img, price, desc });
    res.redirect('/products');
})

app.get('/products/new', (req, res) => {
    res.render('products/new');
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
})

app.put('/products/:id', async (req, res)=>{
    const {id} = req.params;
    const {name, img, price, desc} = req.body;
    const existingProduct = await Product.findById(id);

    if(name) existingProduct.name = name;
    if(img) existingProduct.img = img;
    if(price) existingProduct.price = price;
    if(desc) existingProduct.desc = desc;

    await existingProduct.save();

    res.redirect('/products');
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})




const PORT = 4444;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})