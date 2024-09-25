const {connect_to_mongodb} = require("./mongo-repository-base");
const { getContinentCountriesAndCitiesNumber} = require("./mongo-repository-world");

connect_to_mongodb().then(response => {
    console.log(`Connected to the mongodb running at ${process.env.HOST}:${process.env.PORT}`);
    getContinentCountriesAndCitiesNumber().then(result => {
        console.log(result);
    })
})
