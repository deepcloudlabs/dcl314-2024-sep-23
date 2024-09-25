const {getMovieModel} = require("./imdb-domain");
const {connect_to_mongodb} = require("./mongo-repository-base");

connect_to_mongodb().then( response => {
    console.log(`Connected to the mongodb running at ${process.env.HOST}:${process.env.PORT}`);
})
