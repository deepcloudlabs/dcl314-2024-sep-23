const {getMovieModel} = require("./imdb-domain");

const MovieModel = getMovieModel();

const getMovieByImdb = (imdb) => {
    return MovieModel.findOne({imdb}, {"directors": false});
}

const getAllMovies = (pageNo = 0, pageSize = 10) => {
    const skip = pageNo * pageSize;
    const limit = pageSize;
    return MovieModel.find({}, {"directors": false}, {skip, limit});
}

const saveMovie = (newMovie) => {
    const movie = new MovieModel(newMovie);
    return movie.save();
}

const removeMovie = (imdb) => {
    return MovieModel.deleteOne({imdb});
}


exports.getMovieByImdb = getMovieByImdb;
exports.getAllMovies = getAllMovies;
exports.saveMovie = saveMovie;
exports.removeMovie = removeMovie;
