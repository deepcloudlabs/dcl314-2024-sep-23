const {connect_to_mongodb} = require("./mongo-repository-base");
const {getAllCountriesByContinent} = require("./mongo-repository-world");
const {updatePopulationByCode} = require("./world-domain");

connect_to_mongodb().then(response => {
    console.log(`Connected to the mongodb running at ${process.env.HOST}:${process.env.PORT}`);
    for (let page = 0; page < 5; ++page) {
        console.log(`Reading the page #${page+1}...`)
        getAllCountriesByContinent("Asia", page, 5)
              .then( countries => countries.forEach( country => {
                  updatePopulationByCode(country._id, country.population * 1.10)
                      .then( result => console.log(result))
              }));
    }
})
