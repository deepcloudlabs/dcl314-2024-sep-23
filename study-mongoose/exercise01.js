const {getMovieModel} = require("./imdb-domain");
const {connect_to_mongodb} = require("./mongo-repository-base");
const {getMovieByImdb} = require("./mongo-repository-imdb");

connect_to_mongodb().then( response => {
    console.log(`Connected to the mongodb running at ${process.env.HOST}:${process.env.PORT}`);
    getMovieByImdb("tt31193180")
        .then( movie => {
            console.log(`Movie is ${movie.title}`);
            console.log(`https://www.imdb.com/title/${movie.imdb}`);
        })
})
