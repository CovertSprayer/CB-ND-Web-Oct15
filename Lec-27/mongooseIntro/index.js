const mongoose = require('mongoose');
const dummyData = [
    {
      "title": "The Dark Knight",
      "rating": 9.0,
      "language": "English"
    },
    {
      "title": "Pulp Fiction",
      "rating": 8.9,
      "language": "English"
    },
    {
      "title": "Spirited Away",
      "rating": 8.6,
      "language": "Japanese"
    },
    {
      "title": "The Godfather",
      "rating": 9.2,
      "language": "English"
    },
    {
      "title": "Amélie",
      "rating": 8.3,
      "language": "French"
    },
    {
      "title": "The Matrix",
      "rating": 8.7,
      "language": "English"
    }
  ]  

mongoose.connect('mongodb://127.0.0.1:27017/movieDB')
    .then(() => console.log('DB connected!'))
    .catch(err => console.log(err));

const movieSchema = mongoose.Schema({
    title: String,
    rating: Number,
    language: String
});

const Movie = mongoose.model('Movie', movieSchema);
const User = mongoose.model('User', mongoose.Schema({
    name: String,
    contact: Number
}));

// User.create({name:'Rahul', contact:9090909090})
//     .then(data => {
//         console.log(data);
//         console.log('User created!');
//     });

async function getAllData() {
    // const movies = await Movie.find({});
    const movie = await Movie.findById('65b60763f7f109d3802634a1');
    console.log(movie);
}

async function createMovie() {
    // const movie = Movie({
    //     "title": "The Dark Knight",
    //     "rating": 9.0,
    //     "language": "English"
    // });

    // await movie.save();

    await Movie.create(dummyData);
    console.log('Movie created successfully');
}

async function updateMovie() {
    // const movie = await Movie.findByIdAndUpdate('65b60763f7f109d3802634a4', 
    //                                             { language: 'Chinese', rating: 9 }, 
    //                                             { new: true });
    const movie = await Movie.updateMany({language:'English'}, {language:'Eng'})
    // const movie = await Movie.updateOne({language:'English'}, {language:'Eng'})
    console.log(movie);
    console.log('Successfully upadted');
}

async function deleteMovie(id){
    await Movie.deleteOne({language:'English'});
    // await Movie.deleteMany({language:'English'});
    // await Movie.findByIdAndDelete(id);
    console.log('Movies deleted successfully!');
}



// getAllData();

// createMovie();
updateMovie();
// deleteMovie('65b60763f7f109d3802634a1');
// deleteMovie();


