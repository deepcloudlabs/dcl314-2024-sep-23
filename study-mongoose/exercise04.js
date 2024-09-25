const {connect_to_mongodb} = require("./mongo-repository-base");
const {removeMovie} = require("./mongo-repository-imdb");

connect_to_mongodb().then(response => {
    console.log(`Connected to the mongodb running at ${process.env.HOST}:${process.env.PORT}`);
    removeMovie("tt31193185")
        .then( result => {
            console.log(result);
        })
})
