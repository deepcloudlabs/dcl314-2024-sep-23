const {connect_to_mongodb} = require("./mongo-repository-base");
const {getAllMovies} = require("./mongo-repository-imdb");

connect_to_mongodb().then(response => {
    console.log(`Connected to the mongodb running at ${process.env.HOST}:${process.env.PORT}`);
    getAllMovies(5, 10)
        .then(movies => {
            movies.forEach(movie => {
                console.log(`${movie.title}: https://www.imdb.com/title/${movie.imdb}`);
            })
        })
})
