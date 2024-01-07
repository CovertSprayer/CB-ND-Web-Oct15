const giveMeAJoke = require('give-me-a-joke');
const colors = require('colors');
const figlet = require('figlet');

console.log('Hello'.rainbow);

giveMeAJoke.getRandomDadJoke (function(joke){
    console.log(joke.underline.red)
})

figlet('JavaScript', function(err, data){
    console.log(data);
})