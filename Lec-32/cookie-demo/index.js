const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('abcd'));

app.get('/', (req, res)=>{
    res.send('Home')
})

app.get('/set-cookie', (req, res)=>{
    res.cookie('theme', 'dark', { signed: true });
    // res.cookie('theme', 'dark');
    res.cookie('name', 'abcd', { signed: true });
    res.send('Cookie has been set successfully!');
})

app.get('/getCookies', (req, res)=>{
    // console.log(req.cookies.theme)
    // console.log(req.cookies.name)

    console.log(req.signedCookies.theme)
    res.send(`Theme: ${req.signedCookies.theme}`);
})

app.get('/discount', (req, res)=>{
    res.cookie('discount', '2000');
    res.send('Discount awalied!');
})

app.get('/shop', (req, res)=>{
    let shoePrice = 4000;
    const discount = req.cookies.discount;
    if(discount){
        shoePrice -= discount;
    }
    res.send(`successfully purchased Shoes, totalPrice: ${shoePrice}`)
})

app.listen(5000, ()=>{
    console.log('Server is up at port', 5000);
})