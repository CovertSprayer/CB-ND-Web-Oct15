const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'thisissomesecret',
    resave: false,
    saveUninitialized: true,
}))

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));   

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next)=>{
    res.locals.currUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    
    let cartItems = 0;
    req.user?.cart.forEach((item)=>{
        cartItems += item.quantity;
    })
    res.locals.cartItems = cartItems;
    

    // HOF -> map, filter, reduce, find, findIndex, sort
    // map((item, ind, arr)=>{})

    next();
})

mongoose.connect('mongodb://127.0.0.1:27017/E-com-15-Oct')
    .then(() => console.log('E-com-15-Oct DB connected!'))
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.render('home');
})
// ---------------- router
const productRouter = require('./routes/product');
const reviewRouter = require('./routes/review');
const authRouter = require('./routes/auth');
const cartRouter = require('./routes/cart');

// ------------------- APIs
const wishList = require('./routes/api/wishlist');


app.use(productRouter);
app.use(reviewRouter);
app.use(authRouter);
app.use(wishList);
app.use(cartRouter);


const PORT = 4444;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})