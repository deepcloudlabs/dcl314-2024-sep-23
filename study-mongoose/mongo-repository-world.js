const {getCountryModel} = require("./world-domain");

const CountryModel = getCountryModel();
const getAllCountriesByContinent = (continent, pageNo = 0, pageSize = 10) => {
    const skip = pageNo * pageSize;
    const limit = pageSize;
    return CountryModel.find({continent}, {"cities": false}, {skip, limit});
}
const getContinentCountriesAndCitiesNumber = () => {
    return CountryModel.aggregate(
       [
           {
               $group: {
                   "_id": "$continent",
                   "numberOfCountries": {$sum: 1},
                   "numberOfCities": {$sum: {$size: "$cities"}}
               }
           },
           {
              $sort: {
                  "numberOfCities": -1
              }
           }
              ]
    )
};
exports.getAllCountriesByContinent = getAllCountriesByContinent;
exports.getContinentCountriesAndCitiesNumber = getContinentCountriesAndCitiesNumber;
