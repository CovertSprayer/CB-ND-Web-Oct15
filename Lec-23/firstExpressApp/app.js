const express = require('express');
const app = express();
const movieData = require('./data/movies');
const uuid = require('uuid');

app.get('/movies', (req, res) => {
    res.send(movieData);
})

app.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    // const id = req.params.id;

    const movieObj = movieData.find((movie) => {
        return movie.id == id;
    })

    res.send(movieObj);
})

app.get('/addMovie', (req, res) => {
    const { title, rating } = req.query;

    if (!title || !rating) {
        return res.send('Invalid data!!');
    }

    const movie = { id: uuid.v4(), title, rating };
    movieData.push(movie)

    res.json({
        msg: "Movie added successfully",
        movie
    })
})

app.get('/removeMovie/:id', (req, res) => {
    const { id } = req.params;
    const existingMovieInd = movieData.findIndex(movie => {
        return movie.id == id
    })

    if (existingMovieInd != -1) {
        movieData.splice(existingMovieInd, 1);
        return res.redirect('/movies');
    }
    res.send('Movie not found!!');
})


app.get('/updateMovie/:id', (req, res) => {
    const { id } = req.params;
    const { title, rating } = req.query;
    
    const movie = movieData.find(movie => {
        return movie.id == id;
    })

    if(title && movie) movie.title = title;
    if(rating && movie) movie.rating = parseInt(rating);

    res.redirect('/movies');
})

app.get('/', (req, res) => {
    console.log(movieData)
    res.send('HOME PAGE!')
})

app.get('/r/:q', (req, res) => {
    console.log(req.params);
    res.send(`You made a request! ${req.params.q}`);
})

app.get('/login/:username/:password', (req, res) => {
    const { username, password } = req.params;

    if (password === 'abcd') {
        return res.send(`Hello ${username}`);
    }
    return res.send('You are not authorised!');
})

app.get('/search', (req, res) => {
    console.log(req.query);
    res.send('you searched something!');
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})