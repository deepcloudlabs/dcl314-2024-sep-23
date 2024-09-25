const {connect_to_mongodb} = require("./mongo-repository-base");
const {getAllMovies, saveMovie} = require("./mongo-repository-imdb");

connect_to_mongodb().then(response => {
    console.log(`Connected to the mongodb running at ${process.env.HOST}:${process.env.PORT}`);
    const newMovie = require("./resources/movie.json");
    saveMovie(newMovie)
        .then( result => {
            console.log(result);
        })
})
