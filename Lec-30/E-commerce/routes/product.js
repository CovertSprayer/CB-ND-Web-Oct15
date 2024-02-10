const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
})

router.post('/products', async (req, res) => {
    const { name, img, price, desc } = req.body;
    await Product.create({ name, img, price, desc });
    res.redirect('/products');
})

router.get('/products/new', (req, res) => {
    res.render('products/new');
})

router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('reviews');
    res.render('products/show', { product });
})

router.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
})

router.put('/products/:id', async (req, res)=>{
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

router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})


module.exports = router;

