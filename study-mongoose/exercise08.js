const {connect_to_mongodb} = require("./mongo-repository-base");
const {getGenreCounts } = require("./mongo-repository-imdb");

connect_to_mongodb().then(response => {
    console.log(`Connected to the mongodb running at ${process.env.HOST}:${process.env.PORT}`);
    getGenreCounts().then(result => {
        console.log(result);
    })
})
