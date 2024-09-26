const {connect_to_mongodb} = require("./mongo-repository-base");
const {createApi} = require("./api");

connect_to_mongodb().then( response => {
    console.log(`Connected to the mongodb running at ${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`);
    createApi(() => {
        console.info(`API is listening on port ${process.env.API_PORT || 8100}`);
    })
})
