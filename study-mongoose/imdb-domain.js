const {Schema} = require('mongoose');
const mongoose = require("mongoose");

const GenreSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
});

const DirectorSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    imdb: {
        type: String,
        required: true,
        unique: true
    }
});

const MovieSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    imdb: {
        type: String,
        required: true,
        unique: true
    },
    genres: [GenreSchema],
    directors: [DirectorSchema]
})

const MovieModel = mongoose.model('movies1', MovieSchema);

const getMovieModel = () => {
    return MovieModel;
}

exports.getMovieModel = getMovieModel;
